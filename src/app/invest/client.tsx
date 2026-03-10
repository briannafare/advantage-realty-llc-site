'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Star, Quote } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { siteConfig, testimonials, team } from '@/lib/data';
import { ShieldCheckIcon, ChartUpIcon } from '@/components/svg/Illustrations';

export function InvestPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">Investor Services</p>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-6 font-medium">Portland real estate investment <span className="text-accent">&mdash; rentals, care homes &amp; 1031 exchanges</span></h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">We help investors find properties that cash flow, appreciate, and meet long-term financial goals.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-on-dark">Get the Investment Checklist <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-ghost-light">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src="/images/generated/invest-hero-portland.png" alt="Portland Oregon skyline" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-border/60">
        <div className="container-site text-center">
          <FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to <strong className="text-foreground">NAR&apos;s 2025 Profile</strong>, 26% of all buyers paid cash — a continuing all-time high. Investors are dominating the market, making expert guidance critical for finding deals before they go under contract.</p></FadeIn>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site">
          <FadeIn className="mb-12"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Our Specialties</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight">Investment strategies we deliver</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: 'Rental Properties', d: 'Single-family, duplex, and multi-family in Portland metro. We analyze cap rates, demand, and appreciation.', highlight: false },
              { t: 'Care Home Facilities', d: "Our unique niche. ADA-compliant properties for adult care. We know Oregon's requirements cold.", highlight: true, link: '/care-homes' },
              { t: '1031 Exchanges', d: 'Grow your portfolio tax-free. Jenni Anderson leads our exchange services with deep experience.', highlight: false },
            ].map(s => (
              <StaggerItem key={s.t}>
                <div className={`bg-white rounded-2xl p-7 border h-full ${s.highlight ? 'border-accent/40 shadow-md' : 'border-border/50'}`}>
                  <div className="text-accent mb-4">{s.highlight ? <ShieldCheckIcon className="w-10 h-10" /> : <ChartUpIcon className="w-10 h-10" />}</div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{s.t}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mb-3">{s.d}</p>
                  {s.link && <Link href={s.link} className="text-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn more <ArrowRight className="w-3.5 h-3.5" /></Link>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">1031 Exchange</p>
              <h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight mb-4">Grow your portfolio tax-free</h2>
              <p className="text-muted leading-relaxed mb-4">A 1031 Exchange lets you defer capital gains taxes by reinvesting sale proceeds into qualifying replacement property. It is one of the most powerful wealth-building tools in real estate.</p>
              <p className="text-muted leading-relaxed mb-6">Jenni Anderson leads our 1031 Exchange services.</p>
              <Link href="/contact" className="btn-primary">Schedule a 1031 Consultation <ArrowRight className="w-4 h-4" /></Link>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="bg-cream rounded-2xl p-6 border border-border/50">
                <Image src={team[2].image} alt={team[2].name} width={400} height={500} className="rounded-xl object-cover object-top w-full h-72 mb-4" />
                <h3 className="font-heading text-xl text-foreground">{team[2].name}</h3>
                <p className="text-accent text-sm font-medium">{team[2].role}</p>
                <a href={`tel:${team[2].phone.replace(/\D/g,'')}`} className="flex items-center gap-1 text-sm text-muted hover:text-accent mt-2 transition-colors"><Phone className="w-3.5 h-3.5" />{team[2].phone}</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site max-w-3xl">
          <FadeIn className="mb-10"><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground text-center">From our investors</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[testimonials[2], testimonials[3]].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border/50 h-full">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />)}</div>
                  <p className="text-foreground text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-semibold text-xs">{t.name} <span className="text-muted font-normal">&middot; {t.context}</span></p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 font-medium">Ready to invest?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-on-dark">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost-light"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
