"use client";

import { useState } from "react";
import { OptInCheckbox } from "@/components/OptInCheckbox";
import { NeonButton } from "@/components/NeonButton";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: smsOptIn ? phone : phone, message, sms_opt_in: smsOptIn }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${res.status}`);
      }
      setStatus("ok");
      setName(""); setEmail(""); setPhone(""); setMessage(""); setSmsOptIn(false);
    } catch (e: unknown) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Submission failed");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Name</label>
          <input
            type="text" required value={name} onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-blue"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Email</label>
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-blue"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">
          Mobile (optional, required if you opt in to SMS)
        </label>
        <input
          type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
          required={smsOptIn}
          placeholder="(555) 555-5555"
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-pink"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2">Message</label>
        <textarea
          required rows={6} value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-100 focus:border-neon-blue resize-y"
        />
      </div>

      <OptInCheckbox checked={smsOptIn} onChange={setSmsOptIn} />

      <div className="flex items-center justify-between gap-4 pt-2">
        <NeonButton color="pink" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send message"}
        </NeonButton>
        {status === "ok" && <span className="text-neon-green text-sm">Thanks. We&apos;ll be in touch.</span>}
        {status === "error" && <span className="text-neon-pink text-sm">{errorMsg}</span>}
      </div>
    </form>
  );
}
