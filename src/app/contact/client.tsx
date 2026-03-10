'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function ContactPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-20 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-4 font-medium">Get in touch</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Call, email, or fill out the form. We respond within one business day.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="font-heading text-2xl text-foreground mb-6">Contact information</h2>
              <div className="space-y-4 mb-10">
                {[
                  { icon: MapPin, label: 'Office', value: siteConfig.address },
                  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\D/g,'')}` },
                  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: Globe, label: 'Languages', value: 'English · Oromo · Amharic' },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0"><c.icon className="w-5 h-5 text-accent" /></div>
                    <div><p className="font-semibold text-sm">{c.label}</p>
                      {c.href ? <a href={c.href} className="text-muted text-sm hover:text-accent transition-colors">{c.value}</a> : <p className="text-muted text-sm">{c.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="font-heading text-xl text-foreground mb-4">Reach us directly</h3>
              <div className="space-y-3">
                {team.map(m => (
                  <div key={m.name} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                    <Image src={m.image} alt={m.name} width={44} height={44} className="w-11 h-11 rounded-lg object-cover object-top" />
                    <div className="flex-1 min-w-0"><p className="font-semibold text-sm">{m.name}</p><p className="text-xs text-muted">{m.role}</p></div>
                    <a href={`tel:${m.phone.replace(/\D/g,'')}`} className="text-accent text-sm font-medium hover:text-accent-hover transition-colors flex-shrink-0">{m.phone}</a>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="bg-white rounded-2xl p-7 border border-border/50 shadow-sm">
                <h2 className="font-heading text-2xl text-foreground mb-2">Schedule your free consultation</h2>
                <p className="text-muted text-sm mb-6">Tell us about your goals and we will reach out to set up a time.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-border bg-cream placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                    <input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-lg border border-border bg-cream placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  </div>
                  <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-cream placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-border bg-cream placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <select name="service_interest" className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]">
                    <option value="">What are you interested in?</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Real Estate Investment</option>
                    <option value="care-home">Care Home Investment</option>
                    <option value="1031">1031 Exchange</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" placeholder="Tell us about your goals (optional)" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-cream placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px] resize-none" />
                  <input type="hidden" name="source" value="website-contact" />
                  <button className="btn-primary w-full justify-center">Book My Consultation <ArrowRight className="w-4 h-4" /></button>
                  <p className="text-xs text-muted text-center">Your info stays with us. We use it only to schedule your consultation.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-border/60">
        <div className="container-site text-center text-sm text-muted">
          <p>Equal Housing Opportunity · Oregon Licensed Real Estate Brokerage · Principal Broker: Huluka Abebe</p>
        </div>
      </section>
    </div>
  );
}
