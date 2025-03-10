import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Open_Sans } from "next/font/google";

import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-geist-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TANSIRA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="body"
        style={{ 
          '--max-width': '2480px', 
          '--main-color': '#2b3530',
          '--main-color-light': '#808a85',
          '--secondary-color': '#c37a55', 
          '--tetiary-color': '#30493d',
          '--text-color': '#ced1bf',
          '--text-color2': '#c4c7b3'
        } as React.CSSProperties} 
        className={`${interSans.variable} ${openSans.variable} ${geistSans.variable} ${geistMono.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
