import { NextResponse } from "next/server";
import { getSupabase, getClientIp, buildOptInPayload } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone = "", amount, sms_opt_in = false } = body ?? {};

    if (!name || !email || !amount) {
      return NextResponse.json({ error: "name, email, and amount are required" }, { status: 400 });
    }
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0 || numericAmount > 1_000_000) {
      return NextResponse.json({ error: "invalid amount" }, { status: 400 });
    }
    if (sms_opt_in && !phone) {
      return NextResponse.json({ error: "phone is required when SMS opt-in is checked" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const optIn = buildOptInPayload(Boolean(sms_opt_in), ip);

    const { error } = await getSupabase().from("donations_intent").insert({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 320),
      phone: String(phone).slice(0, 32),
      amount: numericAmount,
      ...optIn,
    });

    if (error) {
      console.error("supabase insert failed:", error);
      return NextResponse.json({ error: "save failed" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("donate-intent POST failed:", e);
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }
}
