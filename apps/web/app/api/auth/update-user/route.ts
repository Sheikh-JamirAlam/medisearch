import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();
  console.log(email + name);
  try {
    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
      },
    });
    return NextResponse.json("Username updated");
  } catch (e) {
    console.log(e);
    return new Response("Database Error", {
      status: 400,
    });
  }
}
