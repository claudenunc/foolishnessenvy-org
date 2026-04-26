import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description: "Terms of the FOOLISHNESS ENVY INC SMS messaging program — opt-in, opt-out, frequency, and contact.",
};

const LAST_UPDATED = "April 26, 2026";

export default function SmsTermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-display text-neon-pink mb-3">SMS Terms &amp; Conditions</h1>
      <p className="text-sm text-neutral-500 mb-12">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-neutral-200 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Program Name</h2>
          <p>FOOLISHNESS ENVY INC.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Program Description</h2>
          <p>
            By opting in, you will receive text messages from FOOLISHNESS ENVY INC about:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Mission updates and major announcements</li>
            <li>Event information (gatherings, fundraisers, community calls)</li>
            <li>Donation receipts and acknowledgements</li>
            <li>Prayer and support outreach</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Message Frequency</h2>
          <p>
            <strong>Message frequency varies. Up to 4 messages per month.</strong> Specific timing depends on
            organizational events and announcements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Message and Data Rates</h2>
          <p><strong>Message and data rates may apply.</strong> Standard rates from your mobile carrier apply.</p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How to Opt In</h2>
          <p>
            You can opt in by checking the SMS consent box on our{" "}
            <Link href="/contact" className="text-neon-blue underline">contact form</Link>,
            <Link href="/donate" className="text-neon-blue underline ml-1">donation form</Link>, or
            newsletter sign-up, and providing your mobile number. The box is unchecked by default and your
            consent is captured with timestamp and IP for our records.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How to Opt Out</h2>
          <p>
            <strong className="text-neon-green">Reply STOP to any message to unsubscribe at any time.</strong>{" "}
            You will receive a final confirmation message and no further messages will be sent unless you opt
            in again.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">How to Get Help</h2>
          <p>
            <strong className="text-neon-green">Reply HELP to any message</strong> to receive a brief description
            of the program and our support contact information. You can also email us at
            foolishnessenvy@gmail.com or call 270-709-0697.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Supported Carriers</h2>
          <p>
            This program is supported on all major US carriers including AT&amp;T, Verizon Wireless,
            T-Mobile, Sprint, US Cellular, and others.{" "}
            <strong>Carriers are not liable for delayed or undelivered messages.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Privacy</h2>
          <p>
            Your phone number and SMS-related information are handled per our{" "}
            <Link href="/privacy" className="text-neon-blue underline">Privacy Policy</Link>. Mobile information
            will not be shared with third parties or affiliates for marketing or promotional purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Eligibility</h2>
          <p>
            By opting in you confirm you are the account holder or have the account holder&apos;s permission to
            consent to SMS messaging on this number, and that you are at least 13 years of age (we do not
            knowingly message minors under 13; if you are between 13 and 18 you should have a parent or
            guardian&apos;s permission).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Changes to These Terms</h2>
          <p>
            We may update these SMS terms. The "Last updated" date at the top reflects the most recent
            revision. Continued participation after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">Contact</h2>
          <ul className="list-none pl-0 space-y-1 text-neon-blue">
            <li>Email: foolishnessenvy@gmail.com</li>
            <li>Phone: 270-709-0697</li>
            <li>Mail: FOOLISHNESS ENVY INC, PO Box 231, Hardin, KY 42048</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
