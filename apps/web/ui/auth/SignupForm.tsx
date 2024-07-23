"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { checkExitingUser } from "@/lib/user/signup";
import { Loading } from "../Icons";

export function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithEmail = async () => {
    const doesUserExist = await checkExitingUser(email);
    if (doesUserExist) {
      toast.error("Email address already exists.");
    } else {
      setIsLoading(true);
      await signIn("credentials", {
        email: email,
        password: pass,
        name: name,
      });
      setIsLoading(false);
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
          <p className="mb-2 font-semibold">Full Name</p>
          <input
            className="w-full py-3 px-3 border outline-none rounded-xl font-sans bg-secondary-light-blue placeholder:text-primary-dark-grey transition-all duration-300 focus:border-secondary-blue focus:shadow-input"
            placeholder="Full Name"
            required
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            placeholder="8+ Characters"
            required
            type="password"
            value={pass}
            name="pass"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="user_registration_isTermsAccepted"
              id="user_registration_isTermsAccepted"
              required
              className="w-6 h-6 appearance-none border outline-none rounded-md bg-logo bg-no-repeat bg-contain transition-all duration-300 cursor-pointer checked:bg-secondary-blue focus:border-secondary-blue focus:shadow-input active:brightness-90"
            />
            <label htmlFor="user_registration_isTermsAccepted" className="cursor-pointer">
              By signing up, I agree to{" "}
              <a href="/terms" className="text-primary-blue hover:underline">
                Terms of Service and Privacy Policy
              </a>
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="user_registration_isMarketingConsent"
              id="user_registration_isMarketingConsent"
              className="w-6 h-6 appearance-none border outline-none rounded-md bg-logo bg-no-repeat bg-contain transition-all duration-300 cursor-pointer checked:bg-secondary-blue focus:border-secondary-blue focus:shadow-input active:brightness-90"
            />
            <label htmlFor="user_registration_isMarketingConsent" className="cursor-pointer">
              I want to receive product updates.
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-5 py-2 font-semibold rounded-lg border-2 border-secondary-blue text-primary-white bg-primary-blue drop-shadow transition-all hover:bg-secondary-blue active:scale-95"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
