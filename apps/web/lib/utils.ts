import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prisma from "./db";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

export const updateUserName = async (email: string, name: string) => {
  try {
    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
  }
  return false;
};
