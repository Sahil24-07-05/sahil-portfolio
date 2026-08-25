import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Sahil Sabarwal — Full Stack Developer",
  description:
    "Full Stack Developer focused on building reliable web experiences with React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans bg-bg text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
