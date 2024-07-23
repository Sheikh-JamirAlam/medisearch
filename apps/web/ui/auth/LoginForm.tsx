"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { checkExitingUser } from "@/lib/user/signup";
import { Loading } from "../Icons";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithEmail = async () => {
    setIsLoading(true);
    const doesUserExist = await checkExitingUser(email);
    if (doesUserExist) {
      await signIn("credentials", {
        email: email,
        password: pass,
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error("Email address does not exist.");
    }
  };

  return (
    <form action={signInWithEmail}>
      {isLoading ? (
        <div className="w-screen h-screen left-0 top-0 text-6xl absolute z-10 flex justify-center items-center bg-[rgba(0,0,0,0.15)]">
          <Loading className="text-primary-blue z-20" />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3 text-sm">
        <div>
          <p className="mb-2 font-semibold">Email Address</p>
          <input
            className="w-full py-3 px-3 border outline-none rounded-xl font-sans bg-secondary-light-blue placeholder:text-primary-dark-grey transition-all duration-300 focus:border-secondary-blue focus:shadow-input"
            placeholder="Email Address"
            required
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="mb-2 font-semibold">Password</p>
          <input
            className="w-full py-3 px-3 border outline-none rounded-xl font-sans bg-secondary-light-blue placeholder:text-primary-dark-grey transition-all duration-300 focus:border-secondary-blue focus:shadow-input"
            placeholder="Password"
            required
            type="password"
            value={pass}
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div>
          <a className="text-primary-dark-grey hover:text-primary-blue hover:underline" href="/reset-password">
            Forgot password?
          </a>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="remember_me"
              id="remember_me"
              defaultChecked
              className="w-6 h-6 appearance-none border outline-none rounded-md bg-logo bg-no-repeat bg-contain transition-all duration-300 cursor-pointer checked:bg-secondary-blue focus:border-secondary-blue focus:shadow-input active:brightness-90"
            />
            <label htmlFor="remember_me" className="cursor-pointer">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-5 py-2 font-semibold rounded-lg border-2 border-secondary-blue text-primary-white bg-primary-blue drop-shadow transition-all hover:bg-secondary-blue active:scale-95"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
