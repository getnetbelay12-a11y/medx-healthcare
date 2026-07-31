import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json({
    status: "ok",
    appVersion: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local",
    buildEnvironment: process.env.VERCEL_ENV || process.env.NODE_ENV || "local",
    timestamp: new Date().toISOString(),
  });
}
