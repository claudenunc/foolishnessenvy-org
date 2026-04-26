"use client";

import { useState } from "react";
import { OptInCheckbox } from "@/components/OptInCheckbox";
import { NeonButton } from "@/components/NeonButton";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone: smsOptIn ? phone : "", sms_opt_in: smsOptIn }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
      setEmail("");
      setPhone("");
      setSmsOptIn(false);
    } catch (e: unknown) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Submission failed");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10">
      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-blue"
        />
      </div>

      {smsOptIn && (
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
            Mobile (required for SMS)
          </label>
          <input
            type="tel"
            required={smsOptIn}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-pink"
          />
        </div>
      )}

      <OptInCheckbox checked={smsOptIn} onChange={setSmsOptIn} />

      <div className="flex items-center justify-between gap-4 pt-2">
        <NeonButton color="blue" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Sign up"}
        </NeonButton>
        {status === "ok" && <span className="text-neon-green text-sm">Signed up. Welcome.</span>}
        {status === "error" && <span className="text-neon-pink text-sm">{errorMsg}</span>}
      </div>
    </form>
  );
}
