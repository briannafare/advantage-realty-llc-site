'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';

const faqs = [
  { q: 'How do I find out what my home is worth?', a: 'Free property evaluation. We analyze recent comps and current conditions. No obligation.' },
  { q: 'How long to sell in the Portland metro?', a: 'Well-priced homes: 30-60 days. Pricing right on day one is the biggest factor.' },
  { q: 'Do I need repairs first?', a: "Not always. We identify which improvements have the best ROI. Our vendor team handles the work." },
  { q: 'What does listing cost?', a: 'Competitive and transparent. We walk through commission in detail during your free consultation.' },
];
function FaqItem({ q, a }: { q: string; a: string }) { const [open, setOpen] = useState(false); return (<div className="border-b border-warm-300/60 last:border-0"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-6 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sienna transition-colors">{q}</span><div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open?'bg-sienna rotate-45':'bg-warm-100'}`}><span className={`text-lg font-semibold leading-none ${open?'text-white':'text-fg'}`}>+</span></div></button><motion.div initial={false} animate={{ height:open?'auto':0, opacity:open?1:0 }} transition={{ duration:0.3 }} className="overflow-hidden"><p className="pb-6 text-muted leading-relaxed pr-14">{a}</p></motion.div></div>); }

export function SellPageClient() { return (<div className="pb-20 lg:pb-0">
  <section className="relative pt-[72px] bg-warm-800 overflow-hidden"><div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <FadeIn><p className="text-sienna text-xs font-heading font-semibold tracking-[0.14em] uppercase mb-3">Seller Services</p><h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">Sell your Clackamas County home — <span className="text-sienna">priced right, sold fast.</span></h1><p className="text-white/50 text-lg mb-8 max-w-xl leading-relaxed">Accurate pricing, vendor team for prep, clear communication listing to close.</p><div className="flex flex-col sm:flex-row gap-3"><a href="#eval" className="btn-on-dark">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn>
    <FadeIn delay={0.2} direction="right"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"><Image src="/images/generated/sell-hero-home-exterior.png" alt="Home exterior Portland" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
  </div></div></section>

  <section className="py-8 bg-white border-b border-warm-300/50"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">Per the <strong className="text-fg">2025 NAR Profile</strong>, 91% of sellers used an agent (record high), FSBO hit 5% (all-time low), agent-listed homes sold at 99% of asking.</p></FadeIn></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-12"><p className="overline mb-3">What you get</p><h2 className="font-heading text-3xl font-bold text-fg">Listing with Advantage.</h2></FadeIn>
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{t:'Accurate Pricing',d:'In-depth CMA. We price to sell fast and for top dollar.'},{t:'Vendor Team',d:'Painting, landscaping, staging. Our network handles prep.'},{t:'Zero Surprises',d:'Showings, feedback, market shifts — all communicated.'}].map(s=>(<StaggerItem key={s.t}><div className="bg-white rounded-2xl p-7 border border-warm-300/50 h-full hover:border-sienna/30 hover:shadow-md transition-all"><CheckCircle className="w-6 h-6 text-forest mb-4" /><h3 className="font-heading text-lg font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-[15px] leading-relaxed">{s.d}</p></div></StaggerItem>))}</StaggerContainer>
  </div></section>

  <section id="eval" className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <FadeIn><p className="overline mb-3">Free evaluation</p><h2 className="font-heading text-3xl md:text-4xl font-bold text-fg leading-tight mb-4">What is your home worth?</h2><p className="text-muted leading-relaxed mb-6">Complimentary evaluation. Real data. No pressure.</p>
      <ul className="space-y-2 text-muted text-[15px]">{['Real comparable sales data','Current Clackamas market conditions','100% free — no strings'].map(i=>(<li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-forest flex-shrink-0" />{i}</li>))}</ul></FadeIn>
    <FadeIn delay={0.15} direction="right"><div className="bg-warm-50 rounded-2xl p-7 border border-warm-300/50"><p className="font-heading font-bold text-lg text-fg mb-5">Request your free evaluation</p><div className="space-y-3">
      <div className="grid grid-cols-2 gap-3"><input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" /><input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" /></div>
      <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
      <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
      <input type="text" name="property_address" placeholder="Property address" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
      <input type="hidden" name="source" value="website-sell-evaluation" /><button className="btn-primary w-full justify-center">Get My Free Evaluation <ArrowRight className="w-4 h-4" /></button><p className="text-xs text-muted text-center">Your info stays with us.</p>
    </div></div></FadeIn>
  </div></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-bold text-fg">Seller Q&amp;A.</h2></FadeIn><FadeIn delay={0.1}><div className="bg-white rounded-2xl border border-warm-300/50 p-6 md:p-8">{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

  <section className="py-20 md:py-24 bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">Ready to sell?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><a href="#eval" className="btn-on-dark">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
</div>); }
