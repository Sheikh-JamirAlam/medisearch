"use client";

import { signIn } from "next-auth/react";
import { Google } from "@/ui/Icons";

interface PropType {
  type?: string;
}

export function SignupWithGoogle(props: PropType) {
  return (
    <button onClick={() => signIn("google", { redirect: false })} className="w-full p-3 flex gap-2 justify-center items-center border font-semibold rounded-xl shadow transition-all hover:shadow-md ">
      <Google className="text-lg" />
      {props.type} with Google
    </button>
  );
}
