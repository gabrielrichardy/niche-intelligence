"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ContentTypeSlice } from "@/lib/types";

export function ContentTypeDonut({ data, total }: { data: ContentTypeSlice[]; total: number }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <h3 className="font-medium text-slate-900">Tipos de Conteúdo</h3>
      <div className="flex items-center gap-4 mt-2 min-w-0">
        <div className="w-32 h-32 relative shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={38} outerRadius={58} paddingAngle={2} stroke="none">
                {data.map((d) => (
                  <Cell key={d.label} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg font-semibold text-slate-900">{total}</span>
            <span className="text-[10px] text-slate-400">publicações</span>
          </div>
        </div>
        <ul className="space-y-2 text-sm flex-1 min-w-0">
          {data.map((d) => (
            <li key={d.label} className="flex items-center justify-between gap-2 min-w-0">
              <span className="flex items-center gap-2 text-slate-600 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                <span className="truncate">{d.label}</span>
              </span>
              <span className="font-medium text-slate-800 shrink-0">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
