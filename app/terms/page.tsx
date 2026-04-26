import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the FOOLISHNESS ENVY INC website.",
};

const LAST_UPDATED = "April 26, 2026";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-display text-neon-purple mb-3">Terms of Service</h1>
      <p className="text-sm text-neutral-500 mb-12">Last updated: {LAST_UPDATED}</p>

      <div className="space-y-10 text-neutral-200 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">1. Acceptance</h2>
          <p>
            By using foolishnessenvy.org (the "Site") you agree to these Terms of Service. If you do not
            agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">2. Who We Are</h2>
          <p>
            The Site is operated by FOOLISHNESS ENVY INC, a Kentucky non-profit corporation, mailing address
            PO Box 231, Hardin, KY 42048. 501(c)(3) tax-exempt status is pending with the IRS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">3. Donations</h2>
          <p>
            <strong className="text-neon-pink">Important: 501(c)(3) status is pending.</strong> Until the IRS
            issues a determination letter, donations made to FOOLISHNESS ENVY INC are not yet
            tax-deductible. We will notify donors by email and update this site once the determination is
            received. By donating you acknowledge this status.
          </p>
          <p className="mt-3">
            All donations are voluntary and non-refundable, except where required by law or where we
            specifically agree in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">4. Use of the Site</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Use the Site for any unlawful purpose.</li>
            <li>Interfere with the operation of the Site or any user&apos;s access.</li>
            <li>Attempt to gain unauthorized access to systems or data.</li>
            <li>Submit false or misleading information through any form.</li>
            <li>Impersonate another person or entity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">5. Communications</h2>
          <p>
            By contacting us, you agree to receive a response by the channel(s) you provide. By opting in to
            our newsletter or SMS program you agree to those program-specific terms (
            <Link href="/sms-terms" className="text-neon-blue underline">SMS Terms</Link>) and our{" "}
            <Link href="/privacy" className="text-neon-blue underline">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">6. Intellectual Property</h2>
          <p>
            All site content (text, graphics, logos) is the property of FOOLISHNESS ENVY INC or used with
            permission. You may share and link to our content for non-commercial purposes with attribution.
            For other uses, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">7. No Warranty</h2>
          <p>
            The Site is provided "as is" without warranties of any kind, express or implied. We do not
            warrant that the Site will be uninterrupted, error-free, or completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, FOOLISHNESS ENVY INC, its directors, officers,
            volunteers, and agents shall not be liable for any indirect, incidental, consequential, or
            punitive damages arising from your use of the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Commonwealth of Kentucky, without regard to
            conflict of laws principles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">10. Changes</h2>
          <p>
            We may update these Terms. The "Last updated" date reflects the most recent change. Continued
            use of the Site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display text-neon-blue mb-3">11. Contact</h2>
          <p>
            FOOLISHNESS ENVY INC<br />
            PO Box 231, Hardin, KY 42048<br />
            foolishnessenvy@gmail.com<br />
            270-709-0697
          </p>
        </section>
      </div>
    </div>
  );
}
