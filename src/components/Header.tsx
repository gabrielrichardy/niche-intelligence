"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, ChevronDown } from "lucide-react";

export function Header({ target }: { target: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(target);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const clean = query.trim().replace(/^@/, "");
    if (clean) router.push(`/?target=${encodeURIComponent(clean)}`);
  };

  return (
    <header className="flex items-center gap-4 h-20 px-8">
      <form className="flex-1 max-w-xl relative" onSubmit={submit}>
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar perfis, empresas, pessoas ou conteúdos..."
          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
      </form>

      <div className="flex items-center gap-5 ml-auto">
        <button className="relative w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
          <Bell className="w-[18px] h-[18px] text-slate-500" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
          <div className="text-sm leading-tight">
            <p className="font-medium text-slate-900">Gabriel</p>
            <p className="text-xs text-slate-400">Social Media</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
