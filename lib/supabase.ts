import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      "Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }
  _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
  return _client;
}

/** Capture client IP from a Next.js Request. Vercel forwards via x-forwarded-for. */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

export type SmsOptInPayload = {
  sms_opt_in: boolean;
  opt_in_timestamp: string | null;
  opt_in_ip: string | null;
};

export function buildOptInPayload(opted: boolean, ip: string): SmsOptInPayload {
  if (!opted) return { sms_opt_in: false, opt_in_timestamp: null, opt_in_ip: null };
  return {
    sms_opt_in: true,
    opt_in_timestamp: new Date().toISOString(),
    opt_in_ip: ip,
  };
}
