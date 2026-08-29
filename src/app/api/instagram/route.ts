import { NextRequest, NextResponse } from "next/server";
import { getDashboardData } from "@/lib/instagram";

export async function GET(req: NextRequest) {
  const target = req.nextUrl.searchParams.get("target") || process.env.INSTAGRAM_TARGET_USERNAME || "biodev";
  const data = await getDashboardData(target);
  return NextResponse.json(data);
}
