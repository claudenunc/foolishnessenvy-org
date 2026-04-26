import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-display text-lg text-neon-pink mb-2">FooLiSHNeSS eNVy</div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            FOOLISHNESS ENVY INC — Kentucky non-profit corporation.<br />
            501(c)(3) status pending.<br />
            PO Box 231, Hardin, KY 42048
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Site</div>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="/about" className="hover:text-neon-blue">About</Link></li>
            <li><Link href="/mission" className="hover:text-neon-blue">Mission</Link></li>
            <li><Link href="/programs" className="hover:text-neon-blue">Programs</Link></li>
            <li><Link href="/donate" className="hover:text-neon-blue">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-neon-blue">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="/privacy" className="hover:text-neon-blue">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-neon-blue">Terms of Service</Link></li>
            <li><Link href="/sms-terms" className="hover:text-neon-blue">SMS Terms</Link></li>
            <li><Link href="/opt-in" className="hover:text-neon-blue">SMS Opt-In</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>foolishnessenvy@gmail.com</li>
            <li>270-709-0697</li>
            <li>PO Box 231<br />Hardin, KY 42048</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500">
          <span>© {year} FOOLISHNESS ENVY INC. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">Built with care, in public.</span>
        </div>
      </div>
    </footer>
  );
}
