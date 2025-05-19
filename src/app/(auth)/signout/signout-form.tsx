"use client";
import { authClient } from "../../../lib/auth-client";
import { redirect } from "next/navigation";

export function SignOutForm() {
  return (
    <button
      type="submit"
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: async () => {
              redirect("/");
            },
          },
        });
      }}
    >
      Sign Out
    </button>
  );
}
