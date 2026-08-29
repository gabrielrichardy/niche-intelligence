import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardClient } from "@/components/DashboardClient";

export default function Home() {
  const target = process.env.INSTAGRAM_TARGET_USERNAME || "biodev";

  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="md:pl-64">
        <Header />
        <main className="px-8 pb-8">
          <DashboardClient target={target} />
        </main>
      </div>
    </div>
  );
}
