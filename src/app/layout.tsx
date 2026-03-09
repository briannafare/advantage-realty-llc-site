import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { MobileCTA } from '@/components/cta/MobileCTA';

export const metadata: Metadata = {
  title: {
    default: 'Advantage Realty LLC \u2014 Real Estate Agents in Clackamas, OR',
    template: '%s | Advantage Realty LLC',
  },
  description: 'Clackamas County real estate team. Buying, selling, investing, and care home consulting. Fluent in English, Oromo & Amharic. Schedule your free consultation.',
  metadataBase: new URL('https://advantage-realty-llc-site.vercel.app'),
  openGraph: {
    title: 'Advantage Realty LLC \u2014 Clackamas, OR Real Estate',
    description: 'Buy, sell, or invest with a team that speaks your language. English, Oromo & Amharic.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        {/* GHL_CHAT_WIDGET */}
      </body>
    </html>
  );
}
