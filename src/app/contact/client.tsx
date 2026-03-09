'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function ContactPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <FadeIn className="text-center mb-6">
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-4">Let&apos;s Get Your Real Estate Journey Started</h1>
            <p className="text-lg text-muted max-w-xl mx-auto">Call, email, or fill out the form below. We&apos;ll get back to you within one business day &mdash; and we&apos;ll speak your language.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white -mt-8">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: info */}
            <FadeIn>
              <h2 className="font-heading text-2xl text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-accent" /></div>
                  <div><p className="font-semibold text-sm">Office Address</p><p className="text-muted text-sm">{siteConfig.address}</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-accent" /></div>
                  <div><p className="font-semibold text-sm">Phone</p><a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="text-muted text-sm hover:text-primary transition-colors">{siteConfig.phone}</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-accent" /></div>
                  <div><p className="font-semibold text-sm">Email</p><a href={`mailto:${siteConfig.email}`} className="text-muted text-sm hover:text-primary transition-colors">{siteConfig.email}</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0"><Globe className="w-5 h-5 text-accent" /></div>
                  <div><p className="font-semibold text-sm">Languages</p><p className="text-muted text-sm">English &bull; Oromo &bull; Amharic</p></div>
                </div>
              </div>

              <h3 className="font-heading text-xl text-foreground mb-4">Reach Us Directly</h3>
              <div className="space-y-4">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center gap-4 p-4 bg-surface-alt rounded-xl">
                    <Image src={m.image} alt={m.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover object-top" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{m.name}</p>
                      <p className="text-xs text-muted">{m.role}</p>
                    </div>
                    <a href={`tel:${m.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors flex-shrink-0">
                      <Phone className="w-3.5 h-3.5" />{m.phone}
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.2} direction="right">
              <div className="bg-surface-alt rounded-2xl p-8 border border-border">
                <h2 className="font-heading text-2xl text-foreground mb-2">Schedule Your Free Consultation</h2>
                <p className="text-muted text-sm mb-6">Tell us a little about what you&apos;re looking for and we&apos;ll reach out to set up a time to talk.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="first_name" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                    <input type="text" name="last_name" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <select name="service_interest" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all">
                    <option value="">What are you interested in?</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Real Estate Investment</option>
                    <option value="care-home">Care Home Investment</option>
                    <option value="1031">1031 Exchange</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea name="message" placeholder="Tell us a bit about your goals (optional)" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" />
                  <input type="hidden" name="source" value="website-contact" />
                  <button className="btn-primary w-full justify-center text-base">Book My Consultation <ArrowRight className="w-4 h-4" /></button>
                  <p className="text-xs text-muted text-center">Your information stays with us. We&apos;ll use it only to schedule your consultation.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface-alt">
        <div className="container-site text-center text-sm text-muted">
          <p>Equal Housing Opportunity &bull; Oregon Licensed Real Estate Brokerage</p>
        </div>
      </section>
    </div>
  );
}
