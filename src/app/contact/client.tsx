'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function ContactPageClient() { return (<div className="pb-20 lg:pb-0">
  <section className="relative pt-[72px] bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-20 text-center"><FadeIn>
    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-4">Get in touch.</h1>
    <p className="text-white/50 text-lg max-w-xl mx-auto">Call, email, or fill out the form. We respond within one business day.</p>
  </FadeIn></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <FadeIn><h2 className="font-heading text-2xl font-bold text-fg mb-6">Contact info</h2>
      <div className="space-y-4 mb-10">{[
        {icon:MapPin,l:'Office',v:siteConfig.address},{icon:Phone,l:'Phone',v:siteConfig.phone,href:`tel:${siteConfig.phone.replace(/\D/g,'')}`},{icon:Mail,l:'Email',v:siteConfig.email,href:`mailto:${siteConfig.email}`},{icon:Globe,l:'Languages',v:'English · Oromo · Amharic'},
      ].map(c => (<div key={c.l} className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-sienna-50 flex items-center justify-center flex-shrink-0"><c.icon className="w-5 h-5 text-sienna" /></div><div><p className="font-heading font-semibold text-sm">{c.l}</p>{c.href ? <a href={c.href} className="text-muted text-sm hover:text-sienna transition-colors">{c.v}</a> : <p className="text-muted text-sm">{c.v}</p>}</div></div>))}</div>
      <h3 className="font-heading text-xl font-bold text-fg mb-4">Reach us directly</h3>
      <div className="space-y-3">{team.map(m => (<div key={m.name} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-warm-300/50"><Image src={m.image} alt={m.name} width={44} height={44} className="w-11 h-11 rounded-lg object-cover object-top" /><div className="flex-1 min-w-0"><p className="font-heading font-semibold text-sm">{m.name}</p><p className="text-xs text-muted">{m.role}</p></div><a href={`tel:${m.phone.replace(/\D/g,'')}`} className="text-sienna text-sm font-semibold hover:text-sienna-600 transition-colors flex-shrink-0">{m.phone}</a></div>))}</div>
    </FadeIn>

    <FadeIn delay={0.15} direction="right"><div className="bg-white rounded-2xl p-7 border border-warm-300/50 shadow-sm"><h2 className="font-heading text-2xl font-bold text-fg mb-2">Schedule your free consultation</h2><p className="text-muted text-sm mb-6">Tell us about your goals.</p>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3"><input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" /><input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" /></div>
        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
        <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
        <select name="service_interest" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 text-muted focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all"><option value="">Interested in...</option><option value="buying">Buying</option><option value="selling">Selling</option><option value="investing">Investment</option><option value="care-home">Care Home</option><option value="1031">1031 Exchange</option><option value="other">Other</option></select>
        <textarea name="message" placeholder="Tell us about your goals (optional)" rows={4} className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all resize-none" />
        <input type="hidden" name="source" value="website-contact" /><button className="btn-primary w-full justify-center">Book My Consultation <ArrowRight className="w-4 h-4" /></button><p className="text-xs text-muted text-center">Your info stays with us.</p>
      </div>
    </div></FadeIn>
  </div></div></section>

  <section className="py-8 bg-white border-t border-warm-300/50"><div className="max-w-site mx-auto px-5 md:px-8 text-center text-sm text-muted"><p>Equal Housing Opportunity · Oregon Licensed Real Estate Brokerage · Principal Broker: Huluka Abebe</p></div></section>
</div>); }
