import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardClient } from "@/components/DashboardClient";
import { isAuthenticated } from "@/lib/session";

export default async function Home({ searchParams }: { searchParams: Promise<{ target?: string }> }) {
  if (!(await isAuthenticated())) {
    redirect("/login");
  }

  const { target: targetParam } = await searchParams;
  const target = targetParam || "";

  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="md:pl-64">
        <Header target={target} />
        <main className="px-8 pb-8">
          <DashboardClient target={target} />
        </main>
      </div>
    </div>
  );
}
