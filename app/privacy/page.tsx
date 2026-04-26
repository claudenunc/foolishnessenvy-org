import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FOOLISHNESS ENVY INC collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "April 26, 2026";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-display text-neon-blue mb-3">Privacy Policy</h1>
      <p className="text-sm text-neutral-500 mb-12">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-neutral-200 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">1. Who We Are</h2>
          <p>
            FOOLISHNESS ENVY INC is a Kentucky non-profit corporation (501(c)(3) tax-exempt status pending),
            mailing address PO Box 231, Hardin, KY 42048. In this policy, "we", "us", and "our" refer to
            FOOLISHNESS ENVY INC. "You" refers to any visitor or supporter who provides information to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect only what you give us directly through our forms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-neon-blue">Contact form:</strong> name, email, optional phone number, your message.</li>
            <li><strong className="text-neon-blue">Newsletter sign-up:</strong> email address; optional phone number if you also opt into SMS.</li>
            <li><strong className="text-neon-blue">Donation intent:</strong> name, email, donation amount; optional phone if you also opt into SMS.</li>
            <li><strong className="text-neon-blue">SMS opt-in metadata:</strong> when you check the SMS consent box, we record the timestamp and IP address of your submission for compliance audit purposes.</li>
          </ul>
          <p className="mt-3">
            We do not use third-party trackers, advertising cookies, or analytics that personally identify you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your messages and inquiries.</li>
            <li>To send you mission updates and event information by email if you signed up for our newsletter.</li>
            <li>To send you SMS messages <strong>only if you explicitly opted in</strong> by checking the SMS consent box on our forms.</li>
            <li>To process and acknowledge donations, including sending receipts.</li>
            <li>To meet our legal and regulatory obligations as a non-profit corporation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">4. We Do Not Sell or Share Your Information</h2>
          <p className="mb-3">
            <strong className="text-neon-green">We do not sell or share personal information with third parties for their marketing purposes.</strong>
          </p>
          <p>
            <strong className="text-neon-green">
              Mobile information will not be shared with third parties or affiliates for marketing or
              promotional purposes. All categories of information are excluded from third-party sharing.
            </strong>
          </p>
          <p className="mt-3">
            We share information only with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Service providers who help us operate (e.g., our database host Supabase, email host, SMS carrier Twilio) — bound by their own privacy obligations and used solely to deliver our services to you.</li>
            <li>Payment processors when you donate, to process the payment.</li>
            <li>Government or legal authorities when required by valid legal process.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">5. SMS Messaging</h2>
          <p>
            If you opt in to SMS messaging by checking the SMS consent box on our forms, you will receive
            messages about our mission, events, prayer or support outreach, and donation receipts. Message
            frequency varies, up to 4 messages per month. Reply STOP at any time to unsubscribe. Reply HELP
            for help. See our full <Link href="/sms-terms" className="text-neon-blue underline">SMS Terms</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">6. Data Retention</h2>
          <p>
            We keep contact and donation records as long as needed to provide services, comply with legal
            obligations (including non-profit recordkeeping requirements), resolve disputes, and enforce
            agreements. SMS opt-in records are retained for the lifetime of your subscription plus a
            minimum compliance audit window required by carriers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">7. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-neon-blue">Access:</strong> Email us to request a copy of the personal information we have about you.</li>
            <li><strong className="text-neon-blue">Correction:</strong> Email us to correct any inaccurate information.</li>
            <li><strong className="text-neon-blue">Deletion:</strong> Email us to request deletion of your information. We will honor the request unless we are legally required to keep it.</li>
            <li><strong className="text-neon-blue">SMS opt-out:</strong> Reply STOP to any message at any time, or email us.</li>
            <li><strong className="text-neon-blue">Email opt-out:</strong> Use the unsubscribe link in any newsletter, or email us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">8. Children&apos;s Privacy</h2>
          <p>
            We do not knowingly collect personal information from children under 13. If you are a parent or
            guardian and believe your child has provided us information, please contact us and we will
            delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">9. Security</h2>
          <p>
            We use HTTPS for all form submissions and rely on industry-standard security practices from our
            service providers. No system is 100% secure; we will notify affected users in a reasonable
            timeframe if a security incident materially affects your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this policy. The "Last updated" date at the top of this page reflects the most
            recent revision. Material changes will be communicated through our website or by email if you
            have signed up for our newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-pink mb-3">11. Contact Us</h2>
          <p>
            For privacy questions, requests, or to exercise your rights:
          </p>
          <ul className="list-none pl-0 mt-3 space-y-1 text-neon-blue">
            <li>Email: foolishnessenvy@gmail.com</li>
            <li>Phone: 270-709-0697</li>
            <li>Mail: FOOLISHNESS ENVY INC, PO Box 231, Hardin, KY 42048</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
