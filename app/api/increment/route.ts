// app/api/increment/route.ts
import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest)  {
  db.prepare("UPDATE counter SET count = count + 1").run();
  return NextResponse.redirect(new URL('/counter', request.url));
}
