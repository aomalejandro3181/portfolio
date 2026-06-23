import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "../globals.css";

export const metadata: Metadata = {
  title: 'AOM | Full-Stack Developer Portfolio',
  description: 'Portafolio de Ingeniería de Software enfocado en el desarrollo de aplicaciones SaaS multi-tenant, plataformas móviles y diseño neobrutalista.',
  applicationName: 'AOM Portfolio',
  authors: [{ name: 'Alejandro Olivar' }],
  
  // Open Graph para LinkedIn, Facebook, WhatsApp
  openGraph: {
    title: 'AOM | Full-Stack Developer Portfolio',
    description: 'Casos de estudio detallados sobre arquitectura de software, donde voy dejando mis experiencias y aprendizajes en el desarrollo de aplicaciones.',
    url: 'https://portfolio-three-topaz-81.vercel.app', // Cambia por tu dominio final si lo actualizas
    siteName: 'AOM Portfolio',
    images: [
      {
        url: 'https://portfolio-three-topaz-81.vercel.app/portfolioweb2.png', // URL absoluta de la imagen
        width: 1200,
        height: 630,
        alt: 'AOM Portfolio Preview',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },

  // Tarjetas específicas para X (Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'AOM | Full-Stack Developer Portfolio',
    description: 'Casos de estudio detallados sobre arquitectura de software y diseño neobrutalista.',
    images: ['https://portfolio-three-topaz-81.vercel.app/og-image.png'],
    creator: '@aomalejandroDev',
  },
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


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
