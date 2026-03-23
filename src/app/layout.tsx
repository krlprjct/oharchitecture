import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OH Architecture — Award-winning Architecture Firm in Brisbane",
  description:
    "We design homes and spaces guided by your vision, bringing together thoughtful design, collaboration, and creativity to shape homes that simply work for how you live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
