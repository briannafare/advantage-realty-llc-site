import type { Metadata } from 'next';
import { AboutPageClient } from './client';
export const metadata: Metadata = { title: 'About Advantage Realty LLC \u2014 Clackamas, OR Real Estate Team', description: 'Meet Huluka Abebe, Hunde Abebe, and Jenni Anderson. 16+ years of experience. English, Oromo, and Amharic.' };
export default function AboutPage() { return <AboutPageClient />; }
