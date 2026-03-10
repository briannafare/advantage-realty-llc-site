import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { team, siteConfig, serviceAreas } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-warm-800 text-white/80">
      <div className="max-w-site mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5"><div className="w-9 h-9 rounded-lg bg-sienna flex items-center justify-center"><span className="text-white font-heading text-lg font-bold">A</span></div><span className="font-heading text-[17px] font-bold text-white">Advantage <span className="font-normal text-white/50">Realty</span></span></div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">Boutique team in Clackamas County. Buying, selling, investing & care home consulting.</p>
            <div className="flex items-start gap-2 text-sm text-white/40"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />{siteConfig.address}</div>
          </div>
          <div><h4 className="font-heading font-bold text-white text-sm mb-5">Navigate</h4><ul className="space-y-2">{[{l:'Home',h:'/'},{l:'Buy',h:'/buy'},{l:'Sell',h:'/sell'},{l:'Invest',h:'/invest'},{l:'Care Homes',h:'/care-homes'},{l:'About',h:'/about'},{l:'Contact',h:'/contact'}].map(n => <li key={n.h}><Link href={n.h} className="text-sm text-white/40 hover:text-sienna transition-colors">{n.l}</Link></li>)}</ul></div>
          <div><h4 className="font-heading font-bold text-white text-sm mb-5">Areas</h4><ul className="space-y-2">{serviceAreas.map(a => <li key={a} className="text-sm text-white/40">{a}</li>)}</ul></div>
          <div><h4 className="font-heading font-bold text-white text-sm mb-5">Team</h4><ul className="space-y-3">{team.map(m => <li key={m.name}><p className="text-sm font-semibold text-white">{m.name}</p><p className="text-xs text-white/30">{m.role}</p><a href={`tel:${m.phone.replace(/\D/g,'')}`} className="flex items-center gap-1 text-sm text-white/40 hover:text-sienna transition-colors mt-0.5"><Phone className="w-3 h-3" />{m.phone}</a></li>)}</ul></div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Advantage Realty LLC. Equal Housing Opportunity.</p>
          <p className="text-xs text-white/25">Oregon Licensed Brokerage &middot; Principal Broker: Huluka Abebe &middot; Clackamas, OR 97015</p>
        </div>
      </div>
    </footer>
  );
}
