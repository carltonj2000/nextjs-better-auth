"use client";
import Link from "next/link";
import { signInEmail } from "../actions";
import { useActionState } from "react";

export function SignInForm() {
  const [state, formAction, pending] = useActionState(signInEmail, {
    error: "",
    email: "carlton.joseph@gmal.com",
    password: "password1234",
  });
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Sign in to an account</h2>
      <form action={formAction}>
        <div className="flex flex-col gap-2">
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
            Sign In
          </button>
        </div>
        <div className="text-red-500 text-sm"></div>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
