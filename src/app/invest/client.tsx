'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Building, ShieldCheck, Repeat, ArrowRight, Phone, Quote, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { siteConfig, testimonials, team } from '@/lib/data';

export function InvestPageClient() {
  const investTestimonials = [testimonials[2], testimonials[3]];
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">Portland Real Estate Investment <span className="text-primary">&mdash; Rentals, Care Homes, and 1031 Exchanges</span></h1>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">We help investors find properties that cash flow, appreciate, and meet their financial goals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Get the Investment Checklist <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image src="/images/generated/invest-hero-portland.png" alt="Portland Oregon skyline with Mt Hood" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Investment Strategies We Specialize In</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building, title: 'Rental Properties', desc: 'Single-family, duplex, and multi-family properties in Portland metro. We analyze cap rates, rental demand, and appreciation trends.', highlight: false },
              { icon: ShieldCheck, title: 'Care Home Facilities', desc: "Our unique specialty. We find properties that meet Oregon's care home requirements and ADA compliance standards.", highlight: true },
              { icon: Repeat, title: '1031 Exchanges', desc: 'Grow your portfolio tax-free. Our team helps you identify qualifying replacement properties and execute exchanges seamlessly.', highlight: false },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className={`bg-white rounded-2xl p-8 border h-full ${s.highlight ? 'border-accent shadow-lg' : 'border-border'}`}>
                  <s.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                  {s.highlight && <Link href="/care-homes" className="inline-flex items-center gap-1 text-sm font-semibold text-accent mt-4 hover:text-accent-hover transition-colors">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Portland&apos;s Care Home Investment Specialists</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">Adult care facilities are one of Oregon&apos;s fastest-growing real estate niches. We&apos;re the only brokerage with dedicated care home expertise.</p>
            <Link href="/care-homes" className="btn-on-dark">Learn About Care Home Investing <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Grow Your Portfolio Tax-Free With 1031 Exchanges</h2>
              <p className="text-muted leading-relaxed mb-4">A 1031 Exchange lets you defer capital gains taxes by reinvesting proceeds from a property sale into a new qualifying property. It&apos;s one of the most powerful wealth-building tools in real estate.</p>
              <p className="text-muted leading-relaxed mb-6">Jenni Anderson leads our 1031 Exchange services with deep experience in tax-deferred exchanges.</p>
              <Link href="/contact" className="btn-primary">Schedule a 1031 Consultation <ArrowRight className="w-4 h-4" /></Link>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <Image src={team[2].image} alt={team[2].name} width={300} height={400} className="rounded-xl object-cover object-top w-full h-64 mb-4" />
                <h3 className="font-heading text-xl text-foreground">{team[2].name}</h3>
                <p className="text-muted text-sm">{team[2].role}</p>
                <a href={`tel:${team[2].phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1 text-sm text-accent mt-2"><Phone className="w-3.5 h-3.5" />{team[2].phone}</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">From Our Investors</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {investTestimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-surface-alt rounded-2xl p-6 border border-border h-full flex flex-col">
                  <Quote className="w-6 h-6 text-accent/30 mb-3" />
                  <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-xs font-bold text-primary">{t.name.charAt(0)}</span></div>
                    <div><p className="font-semibold text-xs">{t.name}</p><p className="text-xs text-muted">{t.context}</p></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Invest?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-on-dark">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition-all"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
