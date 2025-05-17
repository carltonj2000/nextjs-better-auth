"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const signUpEmail = async (data: {
  error?: string;
  email: string;
  password: string;
  name: string;
}) => {
  const { email, password, name } = data;
  if (!email || !password || !name)
    return { ...data, error: "missing email, password or name" };
  await auth.api.signUpEmail({ body: { email, password, name } });
  redirect("/dashboard");
};

export const loginEmail = async (data: any) => {
  const { email, password } = data;
  if (!email || !password)
    return { ...data, error: "missing email or password" };
  await auth.api.signInEmail({ body: { email, password } });
  redirect("/dashboard");
};
