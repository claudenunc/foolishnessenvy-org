"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl tracking-wider text-neon-pink">
          FooLiSHNeSS&nbsp;eNVy
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-neutral-300 hover:text-neon-blue transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-neutral-300"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 glass-strong">
          <nav className="flex flex-col p-4 gap-4 text-sm uppercase tracking-wider">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-neutral-300 hover:text-neon-blue py-2"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
