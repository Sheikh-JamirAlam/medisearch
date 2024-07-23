import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import prisma from "./db";
import { saltAndHashPassword } from "./user/password";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const credName = credentials.name as string | undefined;
        const credEmail = credentials.email as string | undefined;
        const credPass = credentials.password as string | undefined;

        if (!credEmail || !credPass) {
          return null;
        }

        const pwHash = await saltAndHashPassword(credentials.password);

        let existingUser = await prisma.user.findUnique({
          where: { email: credEmail, password: pwHash },
        });

        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: credEmail,
              name: `${credName}`.trim(),
              password: pwHash,
            },
          });
        }

        const { id, name, email, image } = existingUser;

        return {
          id,
          email,
          name,
          email_verified: true,
          image,
          profile: { name, email },
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.email) {
        return false;
      }
      if (account?.provider === "google") {
        const userExists = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true, name: true },
        });
        if (!userExists || !profile) {
          return true;
        }
        if (userExists && profile) {
          await prisma.user.update({
            where: { email: user.email },
            data: {
              name: profile.name,
            },
          });
        }
      }

      return true;
    },
  },
};
