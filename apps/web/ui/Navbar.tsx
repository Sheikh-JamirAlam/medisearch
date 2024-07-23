import Image from "next/image";
import { getSession } from "@/lib/utils";
import { LogoutButton } from "@/ui/auth/LogoutButton";

export default async function Navbar() {
  const session = await getSession();

  return (
    <section className="px-12 py-3 flex justify-between items-center border-b-[1px] border-primary-blue bg-primary-white">
      <div className="flex">
        <Image src="./icon.svg" alt="Logo" height={50} width={50} />
      </div>
      <div className="my-auto flex gap-20 font-medium">
        <a href="/developer" className="transition-all hover:translate-y-[-0.25rem]">
          For Business
        </a>
        <a href="/blog" className="transition-all hover:translate-y-[-0.25rem]">
          Blog
        </a>
        <a href="/contact" className="transition-all hover:translate-y-[-0.25rem]">
          Contact
        </a>
      </div>
      <div className="my-auto flex gap-10">
        {!session ? (
          <a href="/register">
            <button className="px-5 py-2 font-semibold rounded-lg border border-secondary-dark-blue text-primary-blue bg-primary-light-blue drop-shadow transition-all hover:translate-y-[-0.25rem] hover:bg-secondary-light-blue">
              Sign Up
            </button>
          </a>
        ) : (
          <div className="flex items-center gap-2">
            <LogoutButton user={session.user?.name?.substring(0, session.user?.name?.indexOf(" "))} />
          </div>
        )}
      </div>
    </section>
  );
}
