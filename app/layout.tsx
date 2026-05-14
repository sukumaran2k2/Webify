import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sukumaran S – Frontend Developer | React & Next.js',
    template: '%s | Sukumaran S',
  },
  description:
    'Sukumaran S is a frontend developer specialising in React, Next.js, and TypeScript. Internship experience at Floretta India. Available for freelance projects.',
  keywords: [
    'Sukumaran',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'TypeScript developer',
    'freelance developer',
    'hire frontend developer',
    'Webify',
    'Redux developer',
  ],
  authors: [{ name: 'Sukumaran S' }],
  creator: 'Sukumaran S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Webify – Sukumaran S',
    title: 'Sukumaran S – Frontend Developer | React & Next.js',
    description:
      'Frontend developer specialising in React, Next.js, TypeScript and Redux. Internship at Floretta India. Available to hire.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukumaran S – Frontend Developer',
    description:
      'React & Next.js frontend developer. Internship experience. Available for freelance work.',
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
  icons: {
    icon: '/favicon.ico',
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
