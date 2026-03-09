import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, team, siteConfig, serviceAreas } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="max-w-site mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-accent font-heading text-xl font-bold">A</span>
              </div>
              <div>
                <span className="font-heading text-lg text-white font-bold leading-none block">Advantage</span>
                <span className="text-[11px] text-white/50 font-body tracking-wide uppercase">Realty LLC</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Clackamas County real estate team serving buyers, sellers, and investors. Fluent in English, Oromo, and Amharic.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              {siteConfig.address}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/care-homes" className="text-sm text-white/60 hover:text-accent transition-colors">
                  Care Home Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/60">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Contact the Team</h4>
            <ul className="space-y-4">
              {team.map((member) => (
                <li key={member.name}>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-white/50">{member.role}</p>
                  <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1.5 text-sm text-white/60 hover:text-accent transition-colors mt-1">
                    <Phone className="w-3 h-3" />
                    {member.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Advantage Realty LLC. All rights reserved. Equal Housing Opportunity.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>Oregon Licensed Real Estate Brokerage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
