import { SignOutForm } from "./signout-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return <SignOutForm />;
  }

  return <p>Not signed in so can't signout.</p>;
}
