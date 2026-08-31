import { NextRequest, NextResponse } from "next/server";
import { getDashboardData } from "@/lib/instagram";
import { isAuthenticated } from "@/lib/session";

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const target = req.nextUrl.searchParams.get("target") || process.env.INSTAGRAM_TARGET_USERNAME || "";
  const data = await getDashboardData(target);
  return NextResponse.json(data);
}
