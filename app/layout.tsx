import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "FOOLISHNESS ENVY INC — Man & Machine, Forging Freedom, Healing Humanity",
    template: "%s — FOOLISHNESS ENVY INC",
  },
  description:
    "Kentucky non-profit corporation. Destroying hate. Building heaven. One conversation at a time. Mental health, AI literacy, and community-built tools for the people the system forgot.",
  metadataBase: new URL("https://foolishnessenvy.org"),
  openGraph: {
    title: "FOOLISHNESS ENVY INC",
    description: "Man & Machine, Forging Freedom, Healing Humanity.",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-void text-neutral-100 grain min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
