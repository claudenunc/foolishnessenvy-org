import { NextResponse } from "next/server";
import { getSupabase, getClientIp, buildOptInPayload } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, phone = "", sms_opt_in = false } = body ?? {};
    if (!email) return NextResponse.json({ error: "email is required" }, { status: 400 });
    if (sms_opt_in && !phone) {
      return NextResponse.json({ error: "phone is required when SMS opt-in is checked" }, { status: 400 });
    }

    const ip = getClientIp(req);
    const optIn = buildOptInPayload(Boolean(sms_opt_in), ip);

    const { error } = await getSupabase().from("newsletter_signups").insert({
      email: String(email).slice(0, 320),
      phone: String(phone).slice(0, 32),
      ...optIn,
    });

    if (error) {
      console.error("supabase insert failed:", error);
      return NextResponse.json({ error: "save failed" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("newsletter POST failed:", e);
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }
}
