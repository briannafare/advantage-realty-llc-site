import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { MobileCTA } from '@/components/cta/MobileCTA';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap', weight: ['400','500','600','700','800'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300','400','500','600'] });

export const metadata: Metadata = {
  title: { default: 'Advantage Realty LLC — Clackamas County Real Estate', template: '%s | Advantage Realty' },
  description: 'Boutique real estate team in Clackamas, OR. Buying, selling, investing & care home consulting. 16+ years. 5.0 Google rating. Schedule a free consultation.',
  metadataBase: new URL('https://advantage-realty-llc-site.vercel.app'),
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Advantage Realty LLC', description: 'Clackamas County real estate done differently.', type: 'website' },
};

const schema = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent',
  name: 'Advantage Realty LLC',
  description: 'Boutique real estate brokerage in Clackamas, Oregon. Residential, investment, and adult care home consulting.',
  url: 'https://advantage-realty-llc-site.vercel.app',
  telephone: '(503) 793-7520', email: 'huluka@advantageor.com',
  address: { '@type': 'PostalAddress', streetAddress: '13100 SE Sunnyside Rd, Suite B', addressLocality: 'Clackamas', addressRegion: 'OR', postalCode: '97015', addressCountry: 'US' },
  areaServed: ['Clackamas','Happy Valley','Milwaukie','Oregon City','Gladstone','West Linn','SE Portland'].map(c => ({ '@type': 'City', name: c+', OR' })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1' },
  knowsLanguage: ['en','om','am'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></head>
      <body className="font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        {/* GHL_CHAT_WIDGET */}
      </body>
    </html>
  );
}
