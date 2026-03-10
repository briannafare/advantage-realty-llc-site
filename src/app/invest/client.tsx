'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Phone, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { siteConfig, testimonials, team } from '@/lib/data';

export function InvestPageClient() { return (<div className="pb-20 lg:pb-0">
  <section className="relative pt-[72px] bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <FadeIn><p className="text-sienna text-xs font-heading font-semibold tracking-[0.14em] uppercase mb-3">Investor Services</p><h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">Portland real estate investment — <span className="text-sienna">rentals, care homes & 1031 exchanges.</span></h1><p className="text-white/50 text-lg mb-8 max-w-xl">Properties that cash flow, appreciate, and fit your goals.</p><div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-on-dark">Get the Investment Checklist <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-ghost">Schedule a Consultation</Link></div></FadeIn>
    <FadeIn delay={0.2} direction="right"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"><Image src="/images/generated/invest-hero-portland.png" alt="Portland skyline" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
  </div></div></section>

  <section className="py-8 bg-white border-b border-warm-300/50"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">Per <strong className="text-fg">NAR 2025</strong>, 26% of buyers paid all cash — an all-time high. Expert guidance is critical.</p></FadeIn></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-12"><p className="overline mb-3">Strategies</p><h2 className="font-heading text-3xl font-bold text-fg">Investment types we deliver.</h2></FadeIn>
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">{[
      {t:'Rentals',d:'SFH, duplex, multi-family. Cap rate analysis, demand and appreciation.',hl:false},
      {t:'Care Homes',d:"ADA-compliant properties for adult care. We know Oregon's requirements cold.",hl:true,link:'/care-homes'},
      {t:'1031 Exchanges',d:'Defer taxes. Jenni Anderson leads our exchange services.',hl:false},
    ].map(s=>(<StaggerItem key={s.t}><div className={`bg-white rounded-2xl p-7 border h-full transition-all hover:shadow-md ${s.hl?'border-sienna/40 shadow-sm':'border-warm-300/50 hover:border-sienna/30'}`}><h3 className="font-heading text-xl font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-[15px] leading-relaxed mb-3">{s.d}</p>{s.link && <Link href={s.link} className="text-sienna text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn more <ArrowUpRight className="w-3.5 h-3.5" /></Link>}</div></StaggerItem>))}</StaggerContainer>
  </div></section>

  <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    <FadeIn><p className="overline mb-3">1031 Exchange</p><h2 className="font-heading text-3xl font-bold text-fg leading-tight mb-4">Grow your portfolio tax-free.</h2><p className="text-muted leading-relaxed mb-6">Defer capital gains by reinvesting into qualifying replacement property. Jenni Anderson leads our 1031 services.</p><Link href="/contact" className="btn-primary">Schedule a 1031 Consultation <ArrowRight className="w-4 h-4" /></Link></FadeIn>
    <FadeIn delay={0.15} direction="right"><div className="bg-warm-50 rounded-2xl p-6 border border-warm-300/50"><Image src={team[2].image} alt={team[2].name} width={400} height={500} className="rounded-xl object-cover object-top w-full h-72 mb-4" /><h3 className="font-heading text-xl font-bold text-fg">{team[2].name}</h3><p className="text-sienna text-sm font-semibold">{team[2].role}</p><a href={`tel:${team[2].phone.replace(/\D/g,'')}`} className="flex items-center gap-1 text-sm text-muted hover:text-sienna mt-2 transition-colors"><Phone className="w-3.5 h-3.5" />{team[2].phone}</a></div></FadeIn>
  </div></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn className="mb-10 text-center"><h2 className="font-heading text-3xl font-bold text-fg">From our investors.</h2></FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[testimonials[2],testimonials[3]].map((t,i)=>(<FadeIn key={i} delay={i*0.1}><div className="bg-white rounded-2xl p-6 border border-warm-300/50 h-full"><div className="flex gap-0.5 mb-3">{[...Array(5)].map((_,j)=><Star key={j} className="w-3.5 h-3.5 text-sienna fill-sienna" />)}</div><p className="text-fg text-sm leading-relaxed italic mb-3">&ldquo;{t.text}&rdquo;</p><p className="font-semibold text-xs">{t.name} <span className="text-muted font-normal">&middot; {t.ctx}</span></p></div></FadeIn>))}</div>
  </div></section>

  <section className="py-20 md:py-24 bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">Ready to invest?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
</div>); }
