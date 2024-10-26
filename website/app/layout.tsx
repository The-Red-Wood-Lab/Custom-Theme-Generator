import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theme Generator - Build Stunning Color Schemes Instantly",
  description:
    "Create beautiful and harmonious color palettes for your projects with our instant preview and export-ready code. No design experience needed.",
  keywords: [
    "theme generator",
    "color palette generator",
    "custom color schemes",
    "export ready code",
    "instant preview",
    "UI themes",
    "Next.js app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar />
        {children}
      </body>
    </html>
  );
}
