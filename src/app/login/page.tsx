import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/session";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect("/");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F6FA]">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50 to-slate-100 blur-2xl scale-110" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 backdrop-blur-xl bg-white/30"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <LoginForm />
      </div>
    </div>
  );
}
