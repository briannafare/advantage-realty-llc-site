'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, Quote, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';
import { HouseOutline } from '@/components/svg/Illustrations';

const buyerFaqs = [
  { q: 'How much do I need for a down payment in Clackamas County?', a: "Down payment requirements vary by loan type. FHA loans require as little as 3.5%, conventional loans 5-20%. Oregon also offers down payment assistance programs. We will connect you with trusted lenders during your free consultation." },
  { q: 'How long does it take to buy a house in the Portland area?', a: 'Typically 60-90 days from first search to closing. Getting pre-approved before you start looking speeds things up significantly.' },
  { q: 'What neighborhoods are best for first-time buyers in Clackamas County?', a: "Happy Valley offers newer construction and family-friendly amenities. Milwaukie has a walkable downtown and light rail access. Oregon City provides historic charm and larger lots at better value. We will match you to the right fit." },
  { q: "What does it cost to hire a buyer's agent?", a: "In most transactions, buyer's agent compensation is negotiated as part of the deal. We explain exactly how it works during your free consultation — no surprises." },
  { q: 'Can you help if English is not my first language?', a: 'Yes. Huluka and Hunde are fluent in Oromo and Amharic. We can guide you through the entire buying process in the language you are most comfortable with.' },
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

export function BuyPageClient() {
  const buyerTestimonials = testimonials.filter((_, i) => i !== 2);
  return (
    <div className="pb-20 lg:pb-0">
      {/* HERO */}
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">Buyer Services</p>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-6 font-medium">
                Buy a home in Clackamas County <span className="text-accent">&mdash; with agents who put you first</span>
              </h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">First home or fifth &mdash; we walk you through every step so you feel confident from offer to closing.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-on-dark">Download the Homebuyer&apos;s Playbook <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-ghost-light">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src="/images/generated/buy-hero-neighborhood.png" alt="Clackamas County Oregon neighborhood" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STAT */}
      <section className="py-8 bg-white border-b border-border/60">
        <div className="container-site text-center">
          <FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to the <strong className="text-foreground">2025 NAR Profile</strong>, 88% of buyers purchased through an agent and the median first-time buyer age hit 40 &mdash; a record. The right guidance matters more than ever.</p></FadeIn>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section-y bg-cream">
        <div className="container-site">
          <FadeIn className="mb-12"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Our Approach</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight">We solve the problems buyers actually have</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { problem: "You don't know where to start", solution: "Free consultation to map your goals, budget, and timeline. No jargon." },
              { problem: "You're worried about overpaying", solution: "We analyze comps, market trends, and property conditions before every offer. We negotiate hard." },
              { problem: "You've heard horror stories about bad agents", solution: "Three agents, not fifty. Same person start to finish. Check our 5.0 Google rating." },
              { problem: "The process feels overwhelming", solution: "We pre-tour properties so you only see the best. We handle inspections, appraisals, and paperwork." },
            ].map(p => (
              <StaggerItem key={p.problem}>
                <div className="bg-white rounded-2xl p-7 border border-border/50 h-full">
                  <h3 className="font-heading text-lg text-foreground mb-2">{p.problem}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{p.solution}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y bg-white relative overflow-hidden">
        <HouseOutline className="absolute top-10 right-6 w-40 h-32 text-border/30 hidden lg:block" />
        <div className="container-site max-w-3xl relative z-10">
          <FadeIn className="mb-12"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Step by Step</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">How buying with Advantage works</h2></FadeIn>
          <div className="space-y-8">
            {[
              { n: '01', t: 'Free Consultation & Pre-Approval', d: "We meet to discuss budget, neighborhoods, and must-haves. We connect you with trusted lenders." },
              { n: '02', t: 'Personalized Home Search', d: 'We use tech and local knowledge to find matches. We pre-tour so you only see the best.' },
              { n: '03', t: 'Showings & Offer Strategy', d: "We tour together, point out pros and cons, then craft a competitive offer when you're ready." },
              { n: '04', t: 'Negotiation & Due Diligence', d: 'We negotiate on your behalf and coordinate inspections, appraisals, and lender requirements.' },
              { n: '05', t: 'Closing Day', d: 'We manage every detail through closing. You get the keys. We stay available after.' },
            ].map((s, idx) => (
              <FadeIn key={s.n} delay={idx * 0.08}>
                <div className="flex gap-5">
                  <span className="text-3xl font-heading font-bold text-accent/20 leading-none pt-1 w-10 flex-shrink-0">{s.n}</span>
                  <div><h3 className="font-heading text-lg text-foreground mb-1">{s.t}</h3><p className="text-muted text-[15px] leading-relaxed">{s.d}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-cream-dark">
        <div className="container-site">
          <FadeIn className="mb-12"><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">From our buyers</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {buyerTestimonials.map((t, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-border/50 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />)}</div>
                  <p className="text-foreground text-sm leading-relaxed mb-4 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-2 pt-3 border-t border-border/40">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-xs font-bold text-primary">{t.name.charAt(0)}</span></div>
                    <div><p className="font-semibold text-xs">{t.name}</p><p className="text-xs text-muted">{t.context}</p></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="mb-12"><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">Buyer questions &amp; answers</h2></FadeIn>
          <FadeIn delay={0.1}><div>{buyerFaqs.map((f, idx) => <FaqItem key={idx} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 font-medium">Ready to find your home?</h2>
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
