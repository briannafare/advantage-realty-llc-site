'use client';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
export function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-warm-300 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="flex-1 btn-secondary !py-2.5 text-sm justify-center"><Phone className="w-4 h-4" />Call</a>
        <Link href="/contact" className="flex-1 btn-primary !py-2.5 text-sm justify-center">Free Consultation</Link>
      </div>
    </div>
  );
}
