'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Compass, DollarSign, Globe, ShieldCheck, ArrowRight, Phone, ChevronDown, Star, Quote } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const buyerFaqs = [
  { q: 'How much do I need for a down payment to buy a home in Clackamas County?', a: "Down payment requirements vary by loan type. FHA loans require as little as 3.5% down, while conventional loans typically require 5-20%. There are also down payment assistance programs available in Oregon. During your free consultation, we'll connect you with trusted lenders who can walk you through your options." },
  { q: 'How long does it take to buy a house in the Portland area?', a: 'The typical timeline from first search to closing is 60-90 days, though it can vary based on market conditions and your specific situation. Getting pre-approved before you start looking can speed up the process significantly.' },
  { q: 'What are the best neighborhoods in Clackamas County for first-time buyers?', a: "Happy Valley, Milwaukie, and Oregon City are popular with first-time buyers for their combination of value, space, and access to Portland. Each has its own character \u2014 Happy Valley is family-oriented with newer construction, Milwaukie has a walkable downtown, and Oregon City offers historic charm and larger lots." },
  { q: 'Do I need to speak English to buy a home with you?', a: 'No. Our agents Huluka and Hunde speak fluent Oromo and Amharic in addition to English. We can guide you through the entire buying process in the language you are most comfortable with.' },
  { q: "What does it cost to hire a buyer's agent?", a: "In most cases, buyer's agent compensation is negotiated as part of the transaction \u2014 so there is no direct cost to you. We will explain exactly how agent compensation works during your free consultation." },
  { q: 'Can you help me buy an investment property in Portland?', a: 'Absolutely. We work with investors looking for rental properties, multi-family units, and even care home facilities. We also have 1031 Exchange expertise for tax-deferred portfolio growth.' },
];

const painPoints = [
  { problem: "You don't know where to start", solution: "We begin with a free consultation to understand your goals, budget, and timeline. Then we create a step-by-step plan \u2014 no jargon, no confusion.", icon: Compass },
  { problem: "You're worried about overpaying", solution: "Our team analyzes comparable sales, market trends, and property conditions before every offer. We negotiate hard so you don't leave money on the table.", icon: DollarSign },
  { problem: 'You want an agent who understands your culture', solution: "Huluka and Hunde are fluent in Oromo and Amharic. For Portland's East African community, we make homeownership accessible in the language you think in.", icon: Globe },
  { problem: "You've heard horror stories about unreliable agents", solution: "We're a team of three \u2014 not a call center. You'll work with the same person from first showing to closing day. Check our 5.0 Google rating.", icon: ShieldCheck },
];

const buySteps = [
  { n: 1, title: 'Free Consultation', desc: "We meet to discuss your budget, neighborhood preferences, and must-haves. We'll also connect you with trusted lenders for pre-approval." },
  { n: 2, title: 'Personalized Home Search', desc: 'We use technology and local knowledge to find homes that match your criteria. We pre-tour properties so we only show you the best options.' },
  { n: 3, title: 'Showings & Selection', desc: "We tour homes together. We point out the pros, the cons, and the things you might miss \u2014 so you make an informed decision." },
  { n: 4, title: 'Offer & Negotiation', desc: 'We craft a competitive offer and negotiate on your behalf. With 16+ years of experience, we know how to win without overpaying.' },
  { n: 5, title: 'Inspection to Closing', desc: 'We coordinate inspections, appraisals, and lender requirements. We handle the paperwork and keep you informed every step of the way.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group">
        <span className="font-heading text-lg text-foreground pr-8 group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-5 text-muted leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export function BuyPageClient() {
  const buyerTestimonials = testimonials.filter((_, i) => i !== 2);
  return (
    <div className="pb-20 lg:pb-0">
      {/* HERO */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/40 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">Buy a Home in Clackamas County <span className="text-primary">&mdash; Guided by Agents Who Put You First</span></h1>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">Buying a home doesn&apos;t have to be overwhelming. We walk you through every step &mdash; in English, Oromo, or Amharic &mdash; so you feel confident from offer to closing.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Download the Homebuyer&apos;s Playbook <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image src="/images/generated/buy-hero-neighborhood.png" alt="Family-friendly neighborhood in Clackamas County Oregon" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INDUSTRY STAT */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container-site">
          <FadeIn className="text-center">
            <p className="text-sm text-muted max-w-2xl mx-auto">According to the <span className="font-semibold text-foreground">2025 NAR Profile of Home Buyers and Sellers</span>, 88% of buyers purchased through a real estate agent &mdash; and the median age of first-time buyers hit 40 for the first time ever. Having the right guide matters more than it used to.</p>
          </FadeIn>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">We Know What Keeps Buyers Up at Night</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <StaggerItem key={p.problem}>
                <div className="bg-white rounded-2xl p-8 border border-border h-full">
                  <p.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-heading text-lg text-foreground mb-2">{p.problem}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.solution}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">How Buying With Advantage Works</h2></FadeIn>
          <div className="space-y-8">
            {buySteps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold flex-shrink-0 shadow-sm">{step.n}</div>
                  <div><h3 className="font-heading text-lg text-foreground mb-1">{step.title}</h3><p className="text-muted text-sm leading-relaxed">{step.desc}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MULTILINGUAL CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">We Speak Your Language</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">Buying a home is complex. Doing it in your second language is even harder. Our team speaks English, Oromo, and Amharic &mdash; so nothing gets lost in translation.</p>
            <Link href="/contact" className="btn-on-dark">Schedule in Your Preferred Language <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">From Our Buyers</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buyerTestimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border h-full flex flex-col">
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

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Buyer Questions & Answers</h2></FadeIn>
          <FadeIn delay={0.1}><div>{buyerFaqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Find Your Home?</h2>
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
