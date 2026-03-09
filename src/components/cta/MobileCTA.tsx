'use client';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] safe-area-bottom">
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
          className="flex-1 btn-secondary !py-2.5 text-sm justify-center"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link href="/contact" className="flex-1 btn-primary !py-2.5 text-sm justify-center">
          Free Consultation
        </Link>
      </div>
    </div>
  );
}
