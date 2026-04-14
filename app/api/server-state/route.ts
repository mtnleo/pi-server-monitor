import { NextResponse } from "next/server";

import { fetchServerState } from "@/api/data_fetch";

export async function GET() {
  const data = await fetchServerState();

  if (!data) {
    return NextResponse.json(
      { ok: false, error: "Unable to fetch server state" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, data }, { status: 200 });
}
