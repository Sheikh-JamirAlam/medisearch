"use server";

import prisma from "../db";

export const checkExitingUser = async (email: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
};
