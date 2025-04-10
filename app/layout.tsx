import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Nice Rhino - Consulting that delivers",
  description:
    "An Australian consultancy that provides advice, ideas and support when you need them most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 scroll-smooth antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
