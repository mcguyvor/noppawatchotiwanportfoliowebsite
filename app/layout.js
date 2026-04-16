import './globals.css';
import JsonLd from './components/JsonLd';

export const metadata = {
  title: 'Noppawat Chotiwan | Senior Software Engineer',
  description:
    'Senior Software Engineer with 6+ years of experience building scalable web applications using Next.js, React, and TypeScript. Portfolio showcasing work at Kaidee, FPT Software, MoneyHero Group, and more.',
  keywords: [
    'Noppawat Chotiwan',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Bangkok',
    'Thailand',
    'Portfolio',
  ],
  authors: [{ name: 'Noppawat Chotiwan' }],
  creator: 'Noppawat Chotiwan',
  metadataBase: new URL('https://noppawatchotiwan1996.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Noppawat Chotiwan | Senior Software Engineer',
    description:
      'Senior Software Engineer with 6+ years of experience in React, Next.js, and TypeScript. View my portfolio and work experience.',
    url: 'https://noppawatchotiwan1996.web.app',
    siteName: 'Noppawat Chotiwan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noppawat Chotiwan | Senior Software Engineer',
    description:
      'Senior Software Engineer with 6+ years of experience in React, Next.js, and TypeScript.',
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
  other: {
    'theme-color': '#1a0b2e',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&family=Preahvihear&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
