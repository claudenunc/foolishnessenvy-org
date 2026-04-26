import type { Metadata } from "next";
import { DonateForm } from "@/components/DonateForm";
import { GlassCard } from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support FOOLISHNESS ENVY INC. 501(c)(3) tax-exempt status pending.",
};

export default function DonatePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Support the mission</p>
      <h1 className="text-4xl md:text-6xl font-display text-neon-green mb-10">Donate.</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <DonateForm />
        </div>

        <div className="space-y-6">
          <GlassCard glow="pink" className="!p-6">
            <div className="text-xs uppercase tracking-wider text-neon-pink mb-3">Important</div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Federal 501(c)(3) tax-exempt status is currently <strong>pending</strong> with the IRS.
              Donations made now are <strong>not yet tax-deductible</strong>. We will update this page the
              day the determination letter arrives.
            </p>
          </GlassCard>

          <GlassCard className="!p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Where it goes</div>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <div className="text-neon-blue text-xs uppercase">AI Education</div>
                Free curriculum, materials, instructor stipends.
              </li>
              <li>
                <div className="text-neon-pink text-xs uppercase">Lighthouse</div>
                SMS / app infrastructure, on-call human staffing.
              </li>
              <li>
                <div className="text-neon-purple text-xs uppercase">Heaven&apos;s Infrastructure</div>
                Free or at-cost web tools for small ministries and community groups.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="!p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">By mail</div>
            <p className="text-sm text-neutral-300">
              Check made out to FOOLISHNESS ENVY INC, mailed to:<br />
              PO Box 231<br />
              Hardin, KY 42048
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
