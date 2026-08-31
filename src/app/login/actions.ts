"use server";

import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";

export async function login(_prevState: string | null, formData: FormData): Promise<string | null> {
  const username = formData.get("username")?.toString().trim() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const expectedUser = process.env.AUTH_USERNAME;
  const expectedPass = process.env.AUTH_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return "Login não configurado no servidor.";
  }

  if (username === expectedUser && password === expectedPass) {
    await createSession(username);
    redirect("/");
  }

  return "Usuário ou senha incorretos.";
}
