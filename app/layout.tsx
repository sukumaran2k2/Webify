import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Vibecods | Premier Vibe Coding & AI Web Development Agency',
    template: '%s | Vibecods AI Web Agency',
  },
  description:
    'Vibecods is a top-tier web development agency specializing in Vibe Coding and AI-driven development. We build lightning-fast, modern, and scalable Next.js and React applications.',
  keywords: [
    'Vibe Coding',
    'Vibe Coding Agency',
    'AI Web Development',
    'AI Coding Agency',
    'Next.js Agency',
    'React Development Agency',
    'Modern Web Development',
    'Hire Vibe Coders',
    'AI-powered Developers',
    'Top Web Development Agency',
    'Vibecods',
  ],
  authors: [{ name: 'Vibecods Team' }],
  creator: 'Vibecods',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Vibecods AI Web Development',
    title: 'Vibecods | Premier Vibe Coding & AI Web Development Agency',
    description:
      'The leading agency for Vibe Coding and AI-driven web development. We deliver robust Next.js and React products faster than ever before.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibecods | AI-Powered Vibe Coding Agency',
    description:
      'We combine human intuition with advanced AI models to build modern, lightning-fast web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
