import Image from "next/image";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { CircleCross } from "@/ui/Icons";
import { SignupWithGoogle } from "@/ui/auth/SignupWithGoogle";
import { LoginForm } from "@/ui/auth/LoginForm";
import { getSession } from "@/lib/utils";

export default async function Page(): Promise<JSX.Element> {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <main className="text-primary-black bg-primary-white">
      <div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
      <section className="py-28">
        <a href="/" className="w-0 h-0">
          <CircleCross className="right-6 top-6 fixed text-2xl text-zinc-600 transition hover:scale-110" />
        </a>
        <div className="flex gap-12 justify-center">
          <div className="max-w-[30rem] w-full">
            <div className="w-fit">
              <a href="/" className="mb-8 flex gap-1 items-center">
                <Image src="/icon.svg" alt="logo" width={40} height={40} />
                <h1 className="heading font-outfit text-4xl font-bold bg-gradient-to-r from-primary-blue to-secondary-black">MediSearch</h1>
              </a>
            </div>
            <h1 className="text-3xl font-medium font-outfit">Sign in to your account</h1>
            <p className="mt-3 text-sm">Ask any medical question to get direct science-based answers with maximum accuracy.</p>
          </div>
          <div className="max-w-[35rem] w-full">
            <div className="p-8 border rounded-2xl">
              <div className="mb-4 text-sm">
                <SignupWithGoogle type="Login" />
              </div>
              <div className="my-6 flex gap-1 justify-between items-center text-sm">
                <div className="h-[2px] w-[45%] bg-gray-200"></div>
                <span>Or</span>
                <div className="h-[2px] w-[45%] bg-gray-200"></div>
              </div>
              <LoginForm />
            </div>
            <p className="mt-6 text-sm text-primary-dark-grey">
              Not a member?{" "}
              <a className="text-primary-blue hover:underline" href="/register">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
