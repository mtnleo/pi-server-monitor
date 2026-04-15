import { NextResponse } from "next/server";

import { dataProcess } from "@/api/data_process";

export async function GET() {
  const data = await dataProcess();

  const  { serverStatus, lastTemperature, averageTemperature, latestBeat }  = data || {};

  if (!data) {
    return NextResponse.json(
      { ok: false, error: "Unable to process server state" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, serverStatus, lastTemperature, averageTemperature, latestBeat }, { status: 200 });
}
