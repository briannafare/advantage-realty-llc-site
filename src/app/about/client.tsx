'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function AboutPageClient() { return (<div className="pb-20 lg:pb-0">
  <section className="relative pt-[72px] bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-24 text-center max-w-3xl mx-auto"><FadeIn>
    <p className="text-sienna text-xs font-heading font-semibold tracking-[0.14em] uppercase mb-3">About</p>
    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">Three agents. One mission. <span className="text-sienna">Your advantage.</span></h1>
    <p className="text-white/50 text-lg leading-relaxed">Small team on purpose. Personal attention from experienced agents who know this market cold.</p>
  </FadeIn></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn>
    <h2 className="font-heading text-3xl font-bold text-fg mb-6">Our story.</h2>
    <div className="text-muted leading-relaxed space-y-4"><p>Advantage Realty was built on a simple idea: real estate works better when your agent understands your goals, your community, and your market.</p>
    <p>Based in Clackamas, Oregon, we have spent 16+ years helping families and investors across the Portland metro. We carved out a niche nobody else was serving: care home investment consulting.</p>
    <p>We also serve Portland&apos;s East African community with full support in Oromo and Amharic.</p>
    <p>Three people. No franchise. Experienced agents who care about the outcome.</p></div>
  </FadeIn></div></section>

  <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-14"><p className="overline mb-3">The team</p><h2 className="font-heading text-3xl font-bold text-fg">Meet your agents.</h2></FadeIn>
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">{team.map(m => (<StaggerItem key={m.name}><div className="group bg-warm-50 rounded-2xl border border-warm-300/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[3/4] relative overflow-hidden"><Image src={m.image} alt={`${m.name}, ${m.role}`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /></div>
      <div className="p-6"><h3 className="font-heading text-xl font-bold text-fg">{m.name}</h3><p className="text-sienna text-sm font-semibold mb-3">{m.role}</p><p className="text-muted text-[15px] leading-relaxed mb-4">{m.bio}</p>
        <div className="space-y-1.5 text-sm"><a href={`tel:${m.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-muted hover:text-sienna transition-colors"><Phone className="w-3.5 h-3.5" />{m.phone}</a><a href={`mailto:${m.email}`} className="flex items-center gap-2 text-muted hover:text-sienna transition-colors"><Mail className="w-3.5 h-3.5" />{m.email}</a></div>
        {m.languages.length > 1 && <div className="flex gap-1.5 mt-3">{m.languages.map(l => <span key={l} className="px-2 py-0.5 rounded-md bg-forest-50 text-forest text-xs font-medium">{l}</span>)}</div>}
      </div></div></StaggerItem>))}</StaggerContainer>
  </div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-14"><p className="overline mb-3">Values</p><h2 className="font-heading text-3xl font-bold text-fg">What we stand for.</h2></FadeIn>
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">{[
      {t:'Personal Service',d:'Same agent start to finish.'},{t:'Niche Expertise',d:'Care homes, 1031, investment.'},{t:'Local Knowledge',d:'16+ years in Clackamas County.'},{t:'Community',d:'We live here. We give back.'},
    ].map(v => (<StaggerItem key={v.t}><div className="text-center"><CheckCircle className="w-8 h-8 text-forest mx-auto mb-4" /><h3 className="font-heading font-bold text-fg mb-2">{v.t}</h3><p className="text-muted text-[15px] leading-relaxed">{v.d}</p></div></StaggerItem>))}</StaggerContainer>
  </div></section>

  <section className="py-20 md:py-24 bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">Let&apos;s talk about your goals.</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
</div>); }
