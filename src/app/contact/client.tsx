'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function ContactPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[68px] bg-gradient-to-br from-sage-50 via-white to-coral-50">
        <div className="container-site py-16 md:py-20 text-center"><FadeIn>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-fg leading-[1.08] mb-4">Get in touch.</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">Call, email, or fill out the form. We respond within one business day.</p>
        </FadeIn></div>
      </section>

      <section className="section-y bg-white"><div className="container-site"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FadeIn><h2 className="font-heading text-2xl font-bold text-fg mb-6">Contact info</h2>
          <div className="space-y-4 mb-10">{[
            {icon:MapPin,label:'Office',value:siteConfig.address},
            {icon:Phone,label:'Phone',value:siteConfig.phone,href:`tel:${siteConfig.phone.replace(/\D/g,'')}`},
            {icon:Mail,label:'Email',value:siteConfig.email,href:`mailto:${siteConfig.email}`},
            {icon:Globe,label:'Languages',value:'English · Oromo · Amharic'},
          ].map(c=>(<div key={c.label} className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center flex-shrink-0"><c.icon className="w-5 h-5 text-sage" /></div><div><p className="font-heading font-semibold text-sm">{c.label}</p>{c.href ? <a href={c.href} className="text-muted text-sm hover:text-sage transition-colors">{c.value}</a> : <p className="text-muted text-sm">{c.value}</p>}</div></div>))}</div>
          <h3 className="font-heading text-xl font-bold text-fg mb-4">Reach us directly</h3>
          <div className="space-y-3">{team.map(m=>(<div key={m.name} className="flex items-center gap-3 p-3 bg-sage-50 rounded-2xl"><Image src={m.image} alt={m.name} width={44} height={44} className="w-11 h-11 rounded-xl object-cover object-top" /><div className="flex-1 min-w-0"><p className="font-heading font-semibold text-sm">{m.name}</p><p className="text-xs text-muted">{m.role}</p></div><a href={`tel:${m.phone.replace(/\D/g,'')}`} className="text-coral text-sm font-semibold hover:text-coral-400 transition-colors flex-shrink-0">{m.phone}</a></div>))}</div>
        </FadeIn>

        <FadeIn delay={0.15} direction="right"><div className="bg-sage-50 rounded-3xl p-7 border border-border"><h2 className="font-heading text-2xl font-bold text-fg mb-2">Schedule your free consultation</h2><p className="text-muted text-sm mb-6">Tell us about your goals and we will reach out.</p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3"><input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" /><input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" /></div>
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
            <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
            <select name="service_interest" className="w-full px-4 py-3 rounded-xl border border-border bg-white text-muted focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all"><option value="">What are you interested in?</option><option value="buying">Buying</option><option value="selling">Selling</option><option value="investing">Investment</option><option value="care-home">Care Home</option><option value="1031">1031 Exchange</option><option value="other">Other</option></select>
            <textarea name="message" placeholder="Tell us about your goals (optional)" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all resize-none" />
            <input type="hidden" name="source" value="website-contact" /><button className="btn-primary w-full justify-center">Book My Consultation <ArrowRight className="w-4 h-4" /></button><p className="text-xs text-muted text-center">Your info stays with us.</p>
          </div>
        </div></FadeIn>
      </div></div></section>

      <section className="py-8 bg-sage-50 border-t border-border"><div className="container-site text-center text-sm text-muted"><p>Equal Housing Opportunity · Oregon Licensed Real Estate Brokerage · Principal Broker: Huluka Abebe</p></div></section>
    </div>);
}
