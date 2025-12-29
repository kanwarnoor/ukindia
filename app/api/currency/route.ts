import { NextResponse } from "next/server";

// Simple helper to fetch JSON with basic error handling
async function safeJsonFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

type FxApiResponse = {
  result?: string;
  base_code?: string;
  time_last_update_utc?: string;
  rates?: Record<string, number>;
};

export async function GET() {
  try {
    // 1) Free FX API (no key required) – open.er-api.com
    //    Docs: https://www.exchangerate-api.com/docs/free -> completely free, no auth for basic use
    //    Fetching with GBP as base currency
    const fxData = await safeJsonFetch<FxApiResponse>(
      "https://open.er-api.com/v6/latest/USD"
    );

    if (!fxData || fxData.result !== "success" || !fxData.rates) {
      throw new Error(
        `FX API did not return expected data. Raw: ${JSON.stringify(fxData)}`
      );
    }

    // With GBP as base: 1 GBP = fxData.rates["INR"] INR
    const gbpRate = fxData.rates["GBP"]; // base currency
    const inrRate = fxData.rates["INR"];

    return NextResponse.json(
      {
        success: true,
        source: {
          fx: "https://open.er-api.com/v6/latest/USD",
        },
        timestamp: new Date().toISOString(),
        fx: {
          base: fxData.base_code ?? "USD",
          date: fxData.time_last_update_utc ?? null,
          GBP: gbpRate,
          INR: inrRate,
        },
        commodities: null,
        notes: null,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Currency API error:", err);

    const message =
      err instanceof Error ? err.message : "Unknown error while fetching data";

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch currency/commodity data",
        // Extra details to help you debug in development
        details: process.env.NODE_ENV !== "production" ? message : undefined,
      },
      { status: 500 }
    );
  }
}
