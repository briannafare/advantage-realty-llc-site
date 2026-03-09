import type { Metadata } from 'next';
import { BuyPageClient } from './client';

export const metadata: Metadata = {
  title: 'Buy a Home in Clackamas, OR \u2014 First-Time Buyer Specialists',
  description: "Buying your first home in Clackamas County? Our trilingual team guides you from pre-approval to closing. Download our free Homebuyer's Playbook.",
};

export default function BuyPage() {
  return <BuyPageClient />;
}
