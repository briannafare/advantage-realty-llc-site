import type { Metadata } from 'next';
import { SellPageClient } from './client';

export const metadata: Metadata = {
  title: 'Sell Your Home in Clackamas, OR \u2014 Free Property Evaluation',
  description: 'Get a free property evaluation from Advantage Realty. Accurate pricing, strategic marketing, and a vendor team that gets your Clackamas County home sold.',
};

export default function SellPage() {
  return <SellPageClient />;
}
