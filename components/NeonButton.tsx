"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type Color = "blue" | "pink" | "green" | "purple";

const COLOR_CLASS: Record<Color, string> = {
  blue: "border-neon-blue text-neon-blue hover:bg-neon-blue/10",
  pink: "border-neon-pink text-neon-pink hover:bg-neon-pink/10",
  green: "border-neon-green text-neon-green hover:bg-neon-green/10",
  purple: "border-neon-purple text-neon-purple hover:bg-neon-purple/10",
};

type Common = {
  color?: Color;
  className?: string;
  children: React.ReactNode;
};

export function NeonButton(
  props:
    | (Common & { href: string; type?: never; onClick?: never; disabled?: never })
    | (Common & { href?: never; type?: "button" | "submit"; onClick?: () => void; disabled?: boolean })
) {
  const { color = "blue", className, children } = props;
  const base = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 font-medium uppercase tracking-wider text-sm transition-all duration-200",
    COLOR_CLASS[color],
    className
  );
  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={base}
    >
      {children}
    </button>
  );
}
