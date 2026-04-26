import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  glow?: "blue" | "pink" | "green" | "purple" | "none";
  className?: string;
};

export function GlassCard({ children, glow = "none", className }: Props) {
  const glowClass = {
    blue: "border-neon-blue",
    pink: "border-neon-pink",
    green: "border-neon-green",
    purple: "border-neon-purple",
    none: "border-white/10",
  }[glow];

  return (
    <div
      className={cn(
        "glass-strong rounded-2xl p-6 sm:p-8 transition-all duration-300",
        glow !== "none" && glowClass,
        glow !== "none" && "hover:scale-[1.01]",
        className
      )}
    >
      {children}
    </div>
  );
}
