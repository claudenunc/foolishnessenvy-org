"use client";

import { useState } from "react";
import { OptInCheckbox } from "@/components/OptInCheckbox";
import { NeonButton } from "@/components/NeonButton";

const PRESET_AMOUNTS = [25, 50, 100, 250, 500];

export function DonateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState<number | "">(50);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/donate-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone: smsOptIn ? phone : phone, amount: Number(amount), sms_opt_in: smsOptIn,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
      setName(""); setEmail(""); setPhone(""); setAmount(50); setSmsOptIn(false);
    } catch (e: unknown) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Submission failed");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10">
      {/* Amount selector */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-3">Amount (USD)</label>
        <div className="flex flex-wrap gap-2">
          {PRESET_AMOUNTS.map((a) => (
            <button
              key={a} type="button" onClick={() => setAmount(a)}
              className={`px-4 py-2 rounded-lg border-2 text-sm transition ${
                amount === a
                  ? "border-neon-green text-neon-green bg-neon-green/10"
                  : "border-white/10 text-neutral-400 hover:border-white/30"
              }`}
            >
              ${a}
            </button>
          ))}
          <input
            type="number" min={1} value={amount} onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-28 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-neutral-100 focus:border-neon-green"
            placeholder="Custom"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Name</label>
          <input
            type="text" required value={name} onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-green"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Email (for receipt)</label>
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-green"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
          Mobile (optional, required if you opt in to SMS)
        </label>
        <input
          type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required={smsOptIn}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-pink"
        />
      </div>

      <OptInCheckbox checked={smsOptIn} onChange={setSmsOptIn} />

      <div className="rounded-lg bg-neon-pink/5 border border-neon-pink/30 p-4 text-sm text-neutral-300">
        <strong className="text-neon-pink">Note:</strong> 501(c)(3) tax-exempt status is currently pending
        with the IRS. Donations are not yet tax-deductible. Payment processing is being set up — submit
        this form to register your intent to give and we will follow up by email once we&apos;re ready to
        accept the donation. (Or contact us directly to arrange a check by mail.)
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <NeonButton color="green" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Register intent to give"}
        </NeonButton>
        {status === "ok" && <span className="text-neon-green text-sm">Thank you. We&apos;ll be in touch.</span>}
        {status === "error" && <span className="text-neon-pink text-sm">{errorMsg}</span>}
      </div>
    </form>
  );
}
