import { SignInForm } from "./signin-form";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return (
      <div className="flex flex-col items-center">
        <p>Signed in as {session.user.name}.</p>
        <p>
          <a href="/signout" className="text-blue-400 underline">
            Sign out
          </a>{" "}
          first if you want to sign in as another user.
        </p>
      </div>
    );
  }
  return <SignInForm />;
}
