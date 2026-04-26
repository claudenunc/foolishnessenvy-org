import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Opt-In",
  description: "How to opt in and out of FOOLISHNESS ENVY INC text messages.",
};

export default function OptInPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-display text-neon-green mb-3">SMS Opt-In</h1>
      <p className="text-sm text-neutral-500 mb-12">How our text messaging program works.</p>

      <div className="space-y-10 text-neutral-200 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How You Opt In</h2>
          <p>
            On any of our forms (<Link href="/contact" className="text-neon-blue underline">contact</Link>,
            <Link href="/donate" className="text-neon-blue underline ml-1">donate</Link>, or newsletter
            sign-up) you will see an SMS consent checkbox. The box <strong>starts unchecked</strong>. You opt
            in only by checking it yourself and submitting the form along with your mobile number.
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            We capture the timestamp and IP address of your submission to comply with carrier audit
            requirements. We never opt anyone in without explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">What You&apos;ll Receive</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mission updates and major announcements</li>
            <li>Event information</li>
            <li>Donation acknowledgements</li>
            <li>Prayer and support outreach</li>
          </ul>
          <p className="mt-3"><strong>Up to 4 messages per month.</strong> Message and data rates may apply.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How to Opt Out</h2>
          <p className="text-lg">
            <strong className="text-neon-green">Reply STOP</strong> to any message you receive. You will get one
            final confirmation, then no more messages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How to Get Help</h2>
          <p className="text-lg">
            <strong className="text-neon-green">Reply HELP</strong> to any message for support information, or
            email foolishnessenvy@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Read More</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/sms-terms" className="text-neon-blue underline">SMS Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="text-neon-blue underline">Privacy Policy</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
