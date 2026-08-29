"use client";

import { ExternalLink } from "lucide-react";
import { Person } from "@/lib/types";

export function RelevantPeople({ people }: { people: Person[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-slate-900">Pessoas Relevantes</h3>
        <button className="text-xs text-blue-500 font-medium hover:underline">Ver todos</button>
      </div>
      <ul className="mt-3 space-y-3">
        {people.map((p) => (
          <li key={p.name} className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-800 truncate">{p.name}</p>
              <p className="text-xs text-slate-400 truncate">{p.role}</p>
            </div>
            <span className="text-xs font-medium text-slate-600">{p.score}</span>
            <ExternalLink className="w-4 h-4 text-blue-500" />
          </li>
        ))}
      </ul>
    </div>
  );
}
