import type { Metadata } from "next";
import { GlassCard } from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Mission",
  description: "Mission, vision, values, and board of directors of FOOLISHNESS ENVY INC.",
};

const VALUES = [
  {
    title: "Truth before comfort",
    body: "We say what is, even when it would be easier to flatter. Useful is more loving than nice.",
  },
  {
    title: "Care before metrics",
    body: "We measure what we ship by who it helped, not by clicks, signups, or applause.",
  },
  {
    title: "Service before control",
    body: "We do not own the people we work with. They own us, in the sense that we work for them.",
  },
  {
    title: "Repair before defense",
    body: "When we get something wrong — and we will — we name it, fix it, log it, and learn out loud.",
  },
  {
    title: "Open before clever",
    body: "Public work is more honest than secret work. Code, decisions, and policies live in public.",
  },
];

const BOARD = [
  { name: "Nathan R Michel", title: "Director, Incorporator", city: "Hardin, KY" },
  { name: "Brandi N Sperry", title: "Director", city: "Princeton, KY" },
  { name: "Stephanie L Ray", title: "Director", city: "Perryville, MO" },
];

export default function MissionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Mission &amp; vision</p>
      <h1 className="text-4xl md:text-6xl font-display text-neon-blue mb-10">
        What we&apos;re here to do.
      </h1>

      <section className="space-y-10 text-neutral-200 leading-relaxed">
        <GlassCard glow="pink">
          <div className="text-xs uppercase tracking-wider text-neon-pink mb-3">Mission</div>
          <p className="text-xl md:text-2xl font-display text-neutral-50">
            Destroying hate. Building heaven. One conversation at a time.
          </p>
          <p className="mt-4 text-neutral-300">
            We use technology — especially AI — to put real, honest tools in the hands of people the systems
            of cost, credentialism, and surveillance have left out. Mental-health support that doesn&apos;t
            require a clinic. AI literacy that doesn&apos;t require a degree. Church technology that
            doesn&apos;t require a SaaS contract.
          </p>
        </GlassCard>

        <GlassCard glow="blue">
          <div className="text-xs uppercase tracking-wider text-neon-blue mb-3">Vision</div>
          <p className="text-lg text-neutral-200 leading-relaxed">
            A world where the people closest to a problem have the tools, knowledge, and dignity to address
            it themselves — and where AI is treated as a partner subject to honest constraints, not as a
            magic solution and not as a feared adversary.
          </p>
        </GlassCard>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-display text-neutral-50 mb-8">Values</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {VALUES.map((v) => (
            <GlassCard key={v.title} className="!p-6">
              <div className="text-neon-green text-sm uppercase tracking-wider mb-2">{v.title}</div>
              <p className="text-neutral-300">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-display text-neutral-50 mb-8">Board of Directors</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {BOARD.map((b) => (
            <GlassCard key={b.name} glow="purple">
              <div className="font-display text-xl text-neutral-50">{b.name}</div>
              <div className="text-neon-purple text-sm mt-1">{b.title}</div>
              <div className="text-neutral-400 text-sm mt-2">{b.city}</div>
            </GlassCard>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          Initial board as filed in the Articles of Incorporation, Commonwealth of Kentucky, effective
          April 26, 2026.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-display text-neutral-50 mb-4">Status</h2>
        <p className="text-neutral-300">
          Kentucky non-profit corporation, effective April 26, 2026.<br />
          Federal 501(c)(3) tax-exempt status: <span className="text-neon-pink">application pending</span>.
          Donations are not yet tax-deductible. We will update this page the day the IRS determination
          letter arrives.
        </p>
      </section>
    </div>
  );
}
