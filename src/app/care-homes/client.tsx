'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';
import { ShieldCheckIcon } from '@/components/svg/Illustrations';

const faqs = [
  { q: 'What is an adult care home in Oregon?', a: 'A residential property licensed by the Department of Human Services to provide care for up to 5 adults needing daily living assistance. Regulated by the state with specific property and operational requirements.' },
  { q: 'What are the ADA requirements for care home properties?', a: 'Wheelchair-accessible entrances and bathrooms, appropriate door widths, grab bars, emergency systems, and more. We evaluate properties against these requirements before you make an offer.' },
  { q: 'Is care home investing profitable?', a: 'Care facilities can generate significantly higher monthly income than traditional rentals. However, they also require operational expertise — this is not passive income.' },
  { q: 'Do you help with licensing?', a: 'We handle the property side — finding compliant properties, evaluating ADA requirements, guiding the acquisition. For licensing and operations, we connect you with specialists.' },
  { q: 'Can you help me buy an existing operating care home?', a: 'Yes. Existing facilities offer a faster path to income since they come with licensing and residents already in place.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group">
        <span className="font-heading text-lg text-foreground pr-8 group-hover:text-accent transition-colors">{q}</span>
        <span className={`text-muted transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-5 text-muted leading-relaxed text-[15px]">{a}</p>
      </motion.div>
    </div>
  );
}

export function CareHomesPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-accent/30 bg-accent/10 text-[13px] text-accent font-semibold mb-5">
                <ShieldCheckIcon className="w-4 h-4" /> Portland&apos;s Only Care Home RE Specialists
              </div>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-6 font-medium">Care home investment in Portland <span className="text-accent">&mdash; ADA compliance, state requirements, expert guidance</span></h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">We are the only brokerage in the Portland metro dedicated to helping investors find, evaluate, and acquire properties for adult care facilities.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-on-dark">Download the Care Home Guide <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-ghost-light">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src="/images/generated/care-homes-hero.png" alt="Accessible residential property for adult care in Oregon" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">The Opportunity</p>
            <h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight mb-6">Care home investing in Oregon</h2>
            <div className="text-muted leading-relaxed space-y-4 text-[15px]">
              <p>Adult care homes are residential properties licensed to provide care for adults who need assistance with daily living. Oregon regulates these through the Department of Human Services.</p>
              <p>The opportunity is significant. According to the <strong className="text-foreground">Oregon DHS</strong>, the state&apos;s 65+ population is projected to grow by 59% by 2050 — from roughly 807,000 to over 1.28 million. The <strong className="text-foreground">Oregon Office of Economic Analysis</strong> forecasts elderly population growth at 1.6% annually through 2035, more than three times the overall rate. Demand for quality care facilities consistently outpaces supply.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site">
          <FadeIn className="mb-12"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">What We Do</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">Requirements we help you meet</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: 'Property Identification', d: "We find properties that meet or can be modified for Oregon's requirements." },
              { t: 'ADA & State Review', d: 'We evaluate each property against ADA accessibility and Oregon DHS standards.' },
              { t: 'Financial Analysis', d: 'Acquisition cost, modification estimates, projected income, and ROI timeline.' },
              { t: 'Acquisition & Consulting', d: 'We handle the purchase and provide guidance from contractors to licensing.' },
            ].map(s => (
              <StaggerItem key={s.t}>
                <div className="bg-cream rounded-2xl p-6 border border-border/50 h-full">
                  <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-heading text-lg text-foreground mb-2">{s.t}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-cream-dark">
        <div className="container-site max-w-2xl text-center">
          <FadeIn>
            <div className="flex gap-0.5 justify-center mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}</div>
            <p className="text-xl text-foreground leading-relaxed font-heading italic mb-4">&ldquo;{testimonials[2].text}&rdquo;</p>
            <p className="font-semibold text-sm">{testimonials[2].name} <span className="text-muted font-normal">&middot; {testimonials[2].context}</span></p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="mb-12"><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">Care home investment Q&amp;A</h2></FadeIn>
          <FadeIn delay={0.1}><div>{faqs.map((f,i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 font-medium">Ready to explore care home investing?</h2>
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
