'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Phone, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { siteConfig, testimonials, team } from '@/lib/data';

export function InvestPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[68px] bg-gradient-to-br from-sage-50 via-white to-sage-50 overflow-hidden">
        <div className="container-site py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn><p className="overline mb-3">Investor Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-fg leading-[1.08] mb-6">Portland real estate investment — <span className="text-sage">rentals, care homes & 1031 exchanges.</span></h1>
            <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">We help investors find properties that cash flow, appreciate, and meet long-term financial goals.</p>
            <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-primary">Get the Investment Checklist <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-secondary">Schedule a Consultation</Link></div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right"><div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"><Image src="/images/generated/invest-hero-portland.png" alt="Portland skyline" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
        </div></div>
      </section>

      <section className="py-8 bg-white border-y border-border"><div className="container-site text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to <strong className="text-fg">NAR&apos;s 2025 Profile</strong>, 26% of buyers paid all cash — an all-time high. Investors dominate the market, making expert guidance critical.</p></FadeIn></div></section>

      <section className="section-y bg-sage-50"><div className="container-site">
        <FadeIn className="mb-12"><p className="overline mb-3">Our specialties</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Investment strategies we deliver.</h2></FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">{[
          {t:'Rental Properties',d:'Single-family, duplex, multi-family in Portland metro. We analyze cap rates, demand, and appreciation.',hl:false},
          {t:'Care Home Facilities',d:"Our unique niche. ADA-compliant properties for adult care. We know Oregon's requirements cold.",hl:true,link:'/care-homes'},
          {t:'1031 Exchanges',d:'Grow your portfolio tax-free. Jenni Anderson leads our exchange services with deep experience.',hl:false},
        ].map(s=>(<StaggerItem key={s.t}><div className={`card h-full ${s.hl ? '!border-coral/30 ring-1 ring-coral/10' : ''}`}>
          <h3 className="font-heading text-xl font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-sm leading-relaxed mb-3">{s.d}</p>
          {s.link && <Link href={s.link} className="text-coral text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn more <ArrowUpRight className="w-3.5 h-3.5" /></Link>}
        </div></StaggerItem>))}</StaggerContainer>
      </div></section>

      <section className="section-y bg-white"><div className="container-site"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn><p className="overline mb-3">1031 Exchange</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-4">Grow your portfolio tax-free.</h2>
          <p className="text-muted leading-relaxed mb-4">Defer capital gains by reinvesting into qualifying replacement property. One of the most powerful wealth-building tools in real estate.</p>
          <p className="text-muted leading-relaxed mb-6">Jenni Anderson leads our 1031 services.</p>
          <Link href="/contact" className="btn-primary">Schedule a 1031 Consultation <ArrowRight className="w-4 h-4" /></Link>
        </FadeIn>
        <FadeIn delay={0.15} direction="right"><div className="bg-sage-50 rounded-3xl p-6 border border-border">
          <Image src={team[2].image} alt={team[2].name} width={400} height={500} className="rounded-2xl object-cover object-top w-full h-72 mb-4" />
          <h3 className="font-heading text-xl font-bold text-fg">{team[2].name}</h3><p className="text-coral text-sm font-medium">{team[2].role}</p>
          <a href={`tel:${team[2].phone.replace(/\D/g,'')}`} className="flex items-center gap-1 text-sm text-muted hover:text-sage mt-2 transition-colors"><Phone className="w-3.5 h-3.5" />{team[2].phone}</a>
        </div></FadeIn>
      </div></div></section>

      <section className="section-y bg-sage-50"><div className="container-site max-w-3xl"><FadeIn className="mb-10"><h2 className="font-heading text-3xl font-extrabold text-fg text-center">From our investors.</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[testimonials[2],testimonials[3]].map((t,i)=>(<FadeIn key={i} delay={i*0.1}><div className="card h-full"><div className="flex gap-0.5 mb-3">{[...Array(5)].map((_,j)=><Star key={j} className="w-3.5 h-3.5 text-coral fill-coral" />)}</div><p className="text-fg text-sm leading-relaxed italic mb-3">&ldquo;{t.text}&rdquo;</p><p className="font-semibold text-xs">{t.name} <span className="text-muted font-normal">&middot; {t.context}</span></p></div></FadeIn>))}</div>
      </div></section>

      <section className="py-20 md:py-24 bg-sage"><div className="container-site text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-extrabold mb-6">Ready to invest?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
    </div>);
}
