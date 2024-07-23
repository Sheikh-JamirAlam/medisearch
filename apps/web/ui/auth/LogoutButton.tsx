"use client";

import { signOut } from "next-auth/react";

interface PropType {
  user: string | null | undefined;
}

export function LogoutButton(props: PropType) {
  return (
    <button
      className="px-5 py-2 font-semibold rounded-lg border border-secondary-dark-blue text-primary-blue bg-primary-light-blue drop-shadow transition-all hover:translate-y-[-0.25rem] hover:bg-secondary-light-blue"
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      Logout {props.user}
    </button>
  );
}
