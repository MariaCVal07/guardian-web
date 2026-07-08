import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GUARDIAN AI",
  description: "AI-Assisted Risk-Based Quality Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}