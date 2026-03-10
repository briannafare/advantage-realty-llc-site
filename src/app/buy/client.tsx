'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const faqs = [
  { q: 'How much do I need for a down payment in Clackamas County?', a: "FHA loans: 3.5%. Conventional: 5-20%. Oregon also has down payment assistance programs. We connect you with lenders during your free consultation." },
  { q: 'How long does it take to buy a house here?', a: 'Typically 60-90 days from first search to closing. Pre-approval before you start looking speeds this up significantly.' },
  { q: 'Best neighborhoods for first-time buyers?', a: "Happy Valley (newer builds, families), Milwaukie (walkable, light rail), Oregon City (historic, larger lots, best value). We'll match you to the right fit." },
  { q: "What does a buyer's agent cost?", a: "In most transactions, buyer's agent compensation is part of the deal — no direct cost to you. We explain everything during your free consultation." },
  { q: 'Can you help if English is not my first language?', a: 'Yes. Huluka and Hunde speak Oromo and Amharic. We guide you through the entire process in your preferred language.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (<div className="border-b border-border"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sage transition-colors">{q}</span><div className={`w-7 h-7 rounded-full border-2 border-sage-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sage border-sage rotate-45' : ''}`}><span className={`text-sm font-bold ${open ? 'text-white' : 'text-sage'}`}>+</span></div></button><motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="pb-5 text-muted leading-relaxed">{a}</p></motion.div></div>);
}

export function BuyPageClient() {
  const bt = testimonials.filter((_, i) => i !== 2);
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[68px] bg-gradient-to-br from-sage-50 via-white to-coral-50 overflow-hidden">
        <div className="container-site py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="overline mb-3">Buyer Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-fg leading-[1.08] mb-6">Buy a home in Clackamas County <span className="text-sage">with agents who put you first.</span></h1>
            <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">First home or fifth — we walk you through every step so you feel confident from offer to closing.</p>
            <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-primary">Download the Homebuyer&apos;s Playbook <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-secondary">Schedule a Consultation</Link></div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right"><div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"><Image src="/images/generated/buy-hero-neighborhood.png" alt="Clackamas County neighborhood" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
        </div></div>
      </section>

      <section className="py-8 bg-white border-y border-border"><div className="container-site text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to the <strong className="text-fg">2025 NAR Profile</strong>, 88% of buyers purchased through an agent and the median first-time buyer age hit 40. The right guidance matters more than ever.</p></FadeIn></div></section>

      <section className="section-y bg-sage-50">
        <div className="container-site">
          <FadeIn className="mb-12"><p className="overline mb-3">Our approach</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">We solve the problems buyers actually have.</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{t:"You don't know where to start",d:'Free consultation. We map your goals, budget, and timeline. No jargon.'},{t:"You're worried about overpaying",d:'We analyze comps, trends, and conditions before every offer. We negotiate hard.'},{t:'Bad agent horror stories',d:'Three agents, not fifty. Same person start to finish. 5.0 Google rating.'},{t:'The process feels overwhelming',d:'We pre-tour properties, handle inspections and appraisals, manage all paperwork.'}].map(p=>(<StaggerItem key={p.t}><div className="card h-full"><h3 className="font-heading text-lg font-bold text-fg mb-2">{p.t}</h3><p className="text-muted text-sm leading-relaxed">{p.d}</p></div></StaggerItem>))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="mb-12"><p className="overline mb-3">Step by step</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">How buying with Advantage works.</h2></FadeIn>
          {[{n:'01',t:'Free Consultation & Pre-Approval',d:'We discuss budget, preferences, and connect you with trusted lenders.'},{n:'02',t:'Personalized Search',d:'We use tech + local knowledge. We pre-tour so you only see the best.'},{n:'03',t:'Showings & Offer',d:'We tour together, point out pros and cons, craft a competitive offer.'},{n:'04',t:'Negotiation & Due Diligence',d:'We negotiate and coordinate inspections, appraisals, lender requirements.'},{n:'05',t:'Closing Day',d:'We manage every detail. You get the keys. We stay available after.'}].map((s,idx)=>(<FadeIn key={s.n} delay={idx*0.08}><div className="flex gap-5 py-6 border-b border-border last:border-0"><span className="text-2xl font-heading font-extrabold text-sage-200 w-8 flex-shrink-0">{s.n}</span><div><h3 className="font-heading text-lg font-bold text-fg mb-1">{s.t}</h3><p className="text-muted leading-relaxed">{s.d}</p></div></div></FadeIn>))}
        </div>
      </section>

      <section className="section-y bg-sage-50">
        <div className="container-site"><FadeIn className="mb-10"><h2 className="font-heading text-3xl font-extrabold text-fg">From our buyers.</h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{bt.map((t,i)=>(<FadeIn key={i} delay={i*0.1}><div className="card h-full flex flex-col"><div className="flex gap-0.5 mb-3">{[...Array(5)].map((_,j)=><Star key={j} className="w-3.5 h-3.5 text-coral fill-coral" />)}</div><p className="text-fg text-sm leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p><p className="font-semibold text-xs mt-4 pt-3 border-t border-border">{t.name} <span className="text-muted font-normal">&middot; {t.context}</span></p></div></FadeIn>))}</div>
        </div>
      </section>

      <section className="section-y bg-white"><div className="container-site max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-extrabold text-fg">Buyer questions & answers.</h2></FadeIn><FadeIn delay={0.1}><div>{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

      <section className="py-20 md:py-24 bg-sage"><div className="container-site text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-extrabold mb-6">Ready to find your home?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
    </div>
  );
}
