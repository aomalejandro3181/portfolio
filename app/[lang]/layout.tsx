import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "../globals.css";
import { Locale } from './dictionaries';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Professional portfolio of a full stack developer specialized in React, Node.js and modern technologies",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} antialiased`}
    >
      <body
        className={`${spaceGrotesk.variable} antialiased bg-bone`}
      >
        {children}
      </body>
    </html>
  );
}
