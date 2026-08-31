import "server-only";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const SESSION_COOKIE = "ni_session";
const SESSION_DAYS = 7;

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET não configurada em .env.local");
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

export async function createSession(username: string): Promise<void> {
  const value = username;
  const signature = sign(value);
  const expires = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, `${value}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires,
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  const lastDot = raw.lastIndexOf(".");
  if (lastDot === -1) return null;

  const value = raw.slice(0, lastDot);
  const signature = raw.slice(lastDot + 1);

  const expected = sign(value);
  const actualSignature = Buffer.from(signature, "utf8");
  const expectedSignature = Buffer.from(expected, "utf8");

  if (actualSignature.length !== expectedSignature.length || !timingSafeEqual(actualSignature, expectedSignature)) {
    return null;
  }

  return value;
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  return (await getSession()) !== null;
}
