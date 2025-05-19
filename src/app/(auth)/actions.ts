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
    return { ...data, error: "sign up missing email, password or name" };
  await auth.api.signUpEmail({ body: { email, password, name } });
  redirect("/dashboard");
};

export const signInEmail = async (data: any) => {
  const { email, password } = data;
  if (!email || !password)
    return { ...data, error: "login missing email or password" };
  await auth.api.signInEmail({ body: { email, password } });
  redirect("/dashboard");
};

export const logout = async () => {
  console.log("here 1");
  await auth.api.signOut({ fetchOptions: { onSuccess: () => redirect("/") } });
  console.log("here 2");
};
