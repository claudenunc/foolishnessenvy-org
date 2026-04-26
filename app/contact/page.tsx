import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GlassCard } from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FOOLISHNESS ENVY INC.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Talk to us</p>
      <h1 className="text-4xl md:text-6xl font-display text-neon-pink mb-10">Contact.</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <GlassCard className="!p-6">
            <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Direct</div>
            <ul className="space-y-3 text-neutral-200 text-sm">
              <li>
                <div className="text-neutral-500 text-xs uppercase">Email</div>
                <a href="mailto:foolishnessenvy@gmail.com" className="text-neon-blue hover:underline">
                  foolishnessenvy@gmail.com
                </a>
              </li>
              <li>
                <div className="text-neutral-500 text-xs uppercase">Phone</div>
                <a href="tel:+12707090697" className="text-neon-blue hover:underline">270-709-0697</a>
              </li>
              <li>
                <div className="text-neutral-500 text-xs uppercase">Mail</div>
                FOOLISHNESS ENVY INC<br />
                PO Box 231<br />
                Hardin, KY 42048
              </li>
            </ul>
          </GlassCard>

          <GlassCard glow="green" className="!p-6">
            <div className="text-xs uppercase tracking-wider text-neon-green mb-3">Response time</div>
            <p className="text-neutral-300 text-sm">
              We are a small team. Most messages get a personal reply within 1-3 days. For urgent
              mental-health crises, please call or text <strong>988</strong> (US Suicide &amp; Crisis Lifeline)
              — we are not a crisis service.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
