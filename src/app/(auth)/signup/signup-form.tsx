"use client";
import Link from "next/link";
import { signUpEmail } from "../actions";
import { useActionState } from "react";

export function SignUpForm() {
  const [state, formAction, pending] = useActionState(signUpEmail, {
    error: "",
    name: "Carlton",
    email: "carlton.joseph@gmal.com",
    password: "password1234",
  });
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Sign up for an account</h2>
      <form action={formAction}>
        <div className="flex flex-col gap-2">
          <div className="grid gap-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              defaultValue={state.name}
            />
          </div>
          <div className="grid gap-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
              defaultValue={state.email}
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <label htmlFor="password">Password</label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              defaultValue={state.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-200 rounded-2xl py-1"
            disabled={pending}
          >
            Sign up
          </button>
        </div>
        <div className="text-red-500 text-sm"></div>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
