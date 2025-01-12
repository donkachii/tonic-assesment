import type { Metadata } from "next";
import { Open_Sans, Manrope } from 'next/font/google';
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',         
  variable: '--font-open-sans'
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
      url: "/logo.png",
    },
  ],
  title: "Boldo Template",
  description: "A template for building fast with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
