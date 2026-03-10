'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const faqs = [
  { q: 'Down payment needed in Clackamas County?', a: "FHA: 3.5%. Conventional: 5-20%. Oregon also has assistance programs. We connect you with lenders during your free consultation." },
  { q: 'How long does it take to buy here?', a: '60-90 days typical. Getting pre-approved first speeds things up.' },
  { q: 'Best neighborhoods for first-time buyers?', a: "Happy Valley for newer builds. Milwaukie for walkability + light rail. Oregon City for value and larger lots." },
  { q: "What does a buyer's agent cost?", a: "Usually part of the transaction — no direct cost to you. We explain during consultation." },
  { q: 'Do you work in other languages?', a: 'Huluka and Hunde speak Oromo and Amharic in addition to English.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (<div className="border-b border-warm-300/60 last:border-0"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-6 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sienna transition-colors">{q}</span><div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sienna rotate-45' : 'bg-warm-100'}`}><span className={`text-lg font-semibold leading-none ${open ? 'text-white' : 'text-fg'}`}>+</span></div></button><motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="pb-6 text-muted leading-relaxed pr-14">{a}</p></motion.div></div>);
}

export function BuyPageClient() {
  const bt = testimonials.filter((_,i)=>i!==2);
  return (<div className="pb-20 lg:pb-0">
    <section className="relative pt-[72px] bg-warm-800 overflow-hidden">
      <div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn><p className="text-sienna text-xs font-heading font-semibold tracking-[0.14em] uppercase mb-3">Buyer Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">Buy a home in Clackamas County <span className="text-sienna">with agents who put you first.</span></h1>
          <p className="text-white/50 text-lg mb-8 max-w-xl leading-relaxed">First home or fifth — we guide every step so you feel confident from offer to closing.</p>
          <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-on-dark">Download the Homebuyer&apos;s Playbook <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-ghost">Schedule a Consultation</Link></div></FadeIn>
        <FadeIn delay={0.2} direction="right"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"><Image src="/images/generated/buy-hero-neighborhood.png" alt="Clackamas neighborhood" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
      </div></div>
    </section>

    <section className="py-8 bg-white border-b border-warm-300/50"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">Per the <strong className="text-fg">2025 NAR Profile</strong>, 88% of buyers used an agent and first-time buyer median age hit 40. The right guidance matters.</p></FadeIn></div></section>

    <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8">
      <FadeIn className="mb-12"><p className="overline mb-3">Our approach</p><h2 className="font-heading text-3xl md:text-4xl font-bold text-fg">We solve buyer problems.</h2></FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[{t:"Don't know where to start",d:'Free consultation. We map goals, budget, timeline.'},{t:'Worried about overpaying',d:'We analyze comps and conditions before every offer.'},{t:'Bad agent experiences',d:'Three agents. Same person start to finish. 5.0 Google rating.'},{t:'Process feels overwhelming',d:'We pre-tour, handle inspections, manage all paperwork.'}].map(p => (
          <StaggerItem key={p.t}><div className="bg-white rounded-2xl p-7 border border-warm-300/50 h-full hover:border-sienna/30 hover:shadow-md transition-all duration-300"><h3 className="font-heading text-lg font-bold text-fg mb-2">{p.t}</h3><p className="text-muted text-[15px] leading-relaxed">{p.d}</p></div></StaggerItem>
        ))}
      </StaggerContainer>
    </div></section>

    <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl">
      <FadeIn className="mb-12"><p className="overline mb-3">Step by step</p><h2 className="font-heading text-3xl font-bold text-fg">How buying works with us.</h2></FadeIn>
      {[{n:'01',t:'Consultation + Pre-Approval',d:'Budget, neighborhoods, must-haves. We connect you with lenders.'},{n:'02',t:'Personalized Search',d:'Tech + local knowledge. We pre-tour so you only see the best.'},{n:'03',t:'Showings + Offer',d:'Tour together. Pros and cons. Competitive offer when ready.'},{n:'04',t:'Negotiate + Due Diligence',d:'We handle inspections, appraisals, lender requirements.'},{n:'05',t:'Closing',d:'Every detail managed. Keys in hand. We stay available after.'}].map((s,i) => (
        <FadeIn key={s.n} delay={i*0.08}><div className="flex gap-5 py-6 border-b border-warm-300/50 last:border-0"><span className="text-2xl font-heading font-bold text-warm-200 w-8 flex-shrink-0">{s.n}</span><div><h3 className="font-heading text-lg font-bold text-fg mb-1">{s.t}</h3><p className="text-muted leading-relaxed">{s.d}</p></div></div></FadeIn>
      ))}
    </div></section>

    <section className="section-y bg-warm-100/60"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-10"><h2 className="font-heading text-3xl font-bold text-fg">From our buyers.</h2></FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{bt.map((t,i) => (<FadeIn key={i} delay={i*0.1}><div className="bg-white rounded-2xl p-6 border border-warm-300/50 h-full flex flex-col"><div className="flex gap-0.5 mb-3">{[...Array(5)].map((_,j) => <Star key={j} className="w-3.5 h-3.5 text-sienna fill-sienna" />)}</div><p className="text-fg text-sm leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p><p className="font-semibold text-xs mt-4 pt-3 border-t border-warm-300/40">{t.name} <span className="text-muted font-normal">&middot; {t.ctx}</span></p></div></FadeIn>))}</div>
    </div></section>

    <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-bold text-fg">Buyer Q&amp;A.</h2></FadeIn><FadeIn delay={0.1}><div className="bg-warm-50 rounded-2xl border border-warm-300/50 p-6 md:p-8">{faqs.map((f,i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

    <section className="py-20 md:py-24 bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">Ready to find your home?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
  </div>);
}
