import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6">
            FOOLISHNESS ENVY INC — Kentucky Non-Profit
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-neutral-50 mb-6">
            <span className="text-neon-pink">FooLiSHNeSS</span>
            <span className="block text-neon-blue">eNVy</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Man &amp; Machine, Forging Freedom, Healing Humanity.
          </p>
          <p className="mt-6 text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Destroying hate. Building heaven. One conversation at a time.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton href="/donate" color="green">Support the Mission</NeonButton>
            <NeonButton href="/programs" color="blue">See the Programs</NeonButton>
          </div>
        </div>

        {/* Decorative neon haze */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon-pink/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
          <span className="text-neutral-100">Three things we&apos;re actually doing</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard glow="blue">
            <div className="text-xs uppercase tracking-wider text-neon-blue mb-3">Pillar 01</div>
            <h3 className="text-2xl font-display text-neutral-50 mb-3">AI Literacy</h3>
            <p className="text-neutral-300 leading-relaxed">
              Teaching ordinary people how to use, govern, and live alongside AI without fear or worship.
              No academic gate. Plain-language tools, free curriculum, real cases.
            </p>
          </GlassCard>
          <GlassCard glow="pink">
            <div className="text-xs uppercase tracking-wider text-neon-pink mb-3">Pillar 02</div>
            <h3 className="text-2xl font-display text-neutral-50 mb-3">Lighthouse</h3>
            <p className="text-neutral-300 leading-relaxed">
              Mental-health outreach for people the system already failed. Daily check-ins, crisis routing,
              and a human at the other end. Free, voluntary, and quiet.
            </p>
          </GlassCard>
          <GlassCard glow="purple">
            <div className="text-xs uppercase tracking-wider text-neon-purple mb-3">Pillar 03</div>
            <h3 className="text-2xl font-display text-neutral-50 mb-3">Heaven&apos;s Infrastructure</h3>
            <p className="text-neutral-300 leading-relaxed">
              Tech for small churches and community groups: simple sites, secure donations, accessible
              media. Built by us, owned by them, never extracted from.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Heaven's Infrastructure block */}
      <section className="bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard glow="purple" className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-purple mb-4">Heaven&apos;s Infrastructure</div>
            <h2 className="text-3xl md:text-5xl font-display mb-6 text-neutral-50">
              The church does not need a marketing department.<br/>
              It needs a working site.
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We build simple, durable, easy-to-edit sites for small churches and community ministries — for
              free or at-cost. No SaaS lock-in. No surveillance. The community owns the keys; we hand it
              over and stay available when something breaks.
            </p>
            <NeonButton href="/programs" color="purple">How it works</NeonButton>
          </GlassCard>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <GlassCard glow="green" className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-neon-green mb-4">Support the Work</div>
          <h2 className="text-3xl md:text-5xl font-display mb-4 text-neutral-50">
            Every dollar funds tools for people who can&apos;t pay for them.
          </h2>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto mb-2">
            Donations go directly into AI literacy curriculum, mental health outreach, and free tech for
            small ministries.
          </p>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto mb-8">
            501(c)(3) tax-exempt status is currently pending with the IRS. Donations are not yet
            tax-deductible. We will update this site the day the determination letter arrives.
          </p>
          <NeonButton href="/donate" color="green">Give</NeonButton>
        </GlassCard>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-display text-center mb-3 text-neutral-50">Stay in the loop</h2>
        <p className="text-center text-neutral-400 mb-8">
          Mission updates, event info, and the occasional behind-the-scenes note. No spam, ever.
        </p>
        <NewsletterForm />
      </section>
    </>
  );
}
