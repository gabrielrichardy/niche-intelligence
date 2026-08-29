import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardClient } from "@/components/DashboardClient";

export default async function Home({ searchParams }: { searchParams: Promise<{ target?: string }> }) {
  const { target: targetParam } = await searchParams;
  const defaultTarget = process.env.INSTAGRAM_TARGET_USERNAME || "biodev";
  const target = targetParam || defaultTarget;

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
