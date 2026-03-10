import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { MobileCTA } from '@/components/cta/MobileCTA';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-heading', display: 'swap', weight: ['400', '500', '600', '700', '800'] });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: { default: 'Advantage Realty LLC — Clackamas County Real Estate', template: '%s | Advantage Realty LLC' },
  description: 'Boutique real estate team in Clackamas, OR. Buying, selling, investing, and care home consulting. 16+ years of local expertise. Schedule a free consultation.',
  metadataBase: new URL('https://advantage-realty-llc-site.vercel.app'),
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Advantage Realty LLC — Clackamas County Real Estate', description: 'Boutique real estate team in Clackamas, OR. 16+ years. 5.0 Google rating.', type: 'website' },
};

const schema = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent',
  name: 'Advantage Realty LLC',
  description: 'Boutique real estate brokerage in Clackamas, Oregon specializing in residential buying, selling, investment properties, and adult care home consulting.',
  url: 'https://advantage-realty-llc-site.vercel.app',
  telephone: '(503) 793-7520', email: 'huluka@advantageor.com',
  address: { '@type': 'PostalAddress', streetAddress: '13100 SE Sunnyside Rd, Suite B', addressLocality: 'Clackamas', addressRegion: 'OR', postalCode: '97015', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 45.4168, longitude: -122.5740 },
  areaServed: ['Clackamas', 'Happy Valley', 'Milwaukie', 'Oregon City', 'Gladstone', 'West Linn', 'SE Portland'].map(c => ({ '@type': 'City', name: c + ', OR' })),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', bestRating: '5', worstRating: '1' },
  knowsLanguage: ['en', 'om', 'am'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="bg-cream text-foreground font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        {/* GHL_CHAT_WIDGET */}
      </body>
    </html>
  );
}
