import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niche Intelligence",
  description: "Painel de inteligência para social media analisar perfis, conteúdos e mercado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#F5F6FA] text-slate-900">{children}</body>
    </html>
  );
}
