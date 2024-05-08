import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creon - The world's first platform for Tokenizing AI blockchain projects",
  description: "Hold the Creon Pass NFT and earn passive income from AI Tools",
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
