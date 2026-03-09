import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { MobileCTA } from '@/components/cta/MobileCTA';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Advantage Realty LLC — Real Estate Agents in Clackamas, OR',
    template: '%s | Advantage Realty LLC',
  },
  description: 'Clackamas County real estate team. Buying, selling, investing, and care home consulting. Fluent in English, Oromo & Amharic. Schedule your free consultation.',
  metadataBase: new URL('https://advantage-realty-llc-site.vercel.app'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Advantage Realty LLC — Clackamas, OR Real Estate',
    description: 'Buy, sell, or invest with a team that speaks your language. English, Oromo & Amharic.',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Advantage Realty LLC',
  description: 'Clackamas County real estate brokerage specializing in buying, selling, investing, and care home consulting. Fluent in English, Oromo, and Amharic.',
  url: 'https://advantage-realty-llc-site.vercel.app',
  telephone: '(503) 793-7520',
  email: 'huluka@advantageor.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13100 SE Sunnyside Rd, Suite B',
    addressLocality: 'Clackamas',
    addressRegion: 'OR',
    postalCode: '97015',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4168,
    longitude: -122.5740,
  },
  areaServed: [
    { '@type': 'City', name: 'Clackamas, OR' },
    { '@type': 'City', name: 'Happy Valley, OR' },
    { '@type': 'City', name: 'Milwaukie, OR' },
    { '@type': 'City', name: 'Oregon City, OR' },
    { '@type': 'City', name: 'Gladstone, OR' },
    { '@type': 'City', name: 'West Linn, OR' },
    { '@type': 'City', name: 'Portland, OR' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '[CLIENT TO PROVIDE]',
  },
  knowsLanguage: ['en', 'om', 'am'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
