import type { Metadata } from 'next';
import { InvestPageClient } from './client';
export const metadata: Metadata = { title: 'Real Estate Investment in Portland, OR', description: 'Portland real estate investment: rental properties, care home facilities, and 1031 exchanges. Advantage Realty helps investors find opportunities that perform.' };
export default function InvestPage() { return <InvestPageClient />; }
