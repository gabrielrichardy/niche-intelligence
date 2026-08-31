"use client";

import { useActionState } from "react";
import { Boxes, LockKeyhole, User } from "lucide-react";
import { login } from "./actions";

export default function LoginForm() {
  const [error, action, pending] = useActionState(login, null);

  return (
    <div className="w-full max-w-sm rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/60 shadow-2xl shadow-slate-900/10 p-8">
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
          <Boxes className="w-7 h-7 text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-slate-900">Niche Intelligence</h1>
          <p className="text-sm text-slate-500">Acesso restrito</p>
        </div>
      </div>

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1.5">
            Usuário
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              placeholder="Seu usuário"
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
            Senha
          </label>
          <div className="relative">
            <LockKeyhole className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="Sua senha"
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition-opacity"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
