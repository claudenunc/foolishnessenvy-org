import type { Metadata } from "next";
import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";

export const metadata: Metadata = {
  title: "Programs",
  description: "AI Education, Lighthouse mental-health outreach, and Heaven's Infrastructure church tech.",
};

export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">What we run</p>
      <h1 className="text-4xl md:text-6xl font-display text-neon-blue mb-10">Programs.</h1>
      <p className="max-w-3xl text-lg text-neutral-300 mb-16 leading-relaxed">
        Three lines of work. Each is its own program with its own audience, deliverables, and measure of
        whether it&apos;s working. We&apos;d rather do three things well than ten things vaguely.
      </p>

      <div className="space-y-12">
        {/* Program 1 — AI Education */}
        <GlassCard glow="blue">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-neon-blue mb-2">Program 01</div>
              <h2 className="text-3xl font-display text-neutral-50">AI Education</h2>
              <p className="text-sm text-neutral-500 mt-2">For people, not engineers.</p>
            </div>
            <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
              <p>
                A free curriculum that teaches ordinary people how to use AI honestly: what it is, what it
                isn&apos;t, what it lies about, when to trust it, when to refuse it, and how to keep it
                inside ethical guardrails when you depend on it.
              </p>
              <p>
                Designed for parents, ministers, teachers, small business owners, and anyone tired of being
                told they need a degree to think about this stuff. Plain language. Worked examples. No
                hype. No fear.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-400">
                <li>Guided learning paths for absolute beginners through power users</li>
                <li>Worked examples in family life, ministry, small business, mental health</li>
                <li>Open materials — anyone can teach a group with our curriculum, free</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* Program 2 — Lighthouse */}
        <GlassCard glow="pink">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-neon-pink mb-2">Program 02</div>
              <h2 className="text-3xl font-display text-neutral-50">Lighthouse</h2>
              <p className="text-sm text-neutral-500 mt-2">Mental-health outreach for the people the system forgot.</p>
            </div>
            <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
              <p>
                A daily check-in system for people who can&apos;t access (or don&apos;t trust) traditional
                mental-health care. Light-touch, voluntary, designed to notice the patterns that come
                before crisis — and to put a human into the loop early when one is needed.
              </p>
              <p>
                Lighthouse is not therapy and does not pretend to be. It is a safety net of presence. We
                route to professional crisis resources when the situation requires them and we are honest
                about what we cannot do.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-400">
                <li>Daily voluntary check-in via text or app</li>
                <li>Pattern-detection that flags worsening trends to a human first, never to an algorithm alone</li>
                <li>Direct routing to 988, 911, and local resources when warranted</li>
                <li>Free, no insurance, no diagnosis, no records sold</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* Program 3 — Heaven's Infrastructure */}
        <GlassCard glow="purple">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-neon-purple mb-2">Program 03</div>
              <h2 className="text-3xl font-display text-neutral-50">Heaven&apos;s Infrastructure</h2>
              <p className="text-sm text-neutral-500 mt-2">Church and community-group technology, owned by them.</p>
            </div>
            <div className="md:col-span-2 space-y-4 text-neutral-300 leading-relaxed">
              <p>
                Small churches and community ministries are getting priced out of having a working online
                presence. We build them durable, simple, easy-to-edit sites — for free or at-cost — and
                hand them the keys.
              </p>
              <p>
                No SaaS lock-in. No surveillance pixels. No "your community data, our database." We will
                stay available when something breaks, but we are not the long-term owner of anyone&apos;s
                online presence.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-400">
                <li>Static sites with simple content editing — works on a phone, doesn&apos;t require a webmaster</li>
                <li>Donation tools that don&apos;t harvest the donor&apos;s data</li>
                <li>Accessible audio/video hosting for sermons, talks, and community media</li>
                <li>Open source and self-hostable — the community can take it elsewhere whenever they want</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="mt-16">
        <GlassCard glow="green" className="text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4 text-neutral-50">
            Want to bring one of these to your community?
          </h2>
          <p className="text-neutral-300 mb-8">
            Tell us what you need. We&apos;ll write back honestly about what we can and can&apos;t do.
          </p>
          <NeonButton href="/contact" color="green">Contact us</NeonButton>
        </GlassCard>
      </div>
    </div>
  );
}
