'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';

const faqs = [
  { q: 'How do I find out what my home is worth?', a: "Free, no-obligation property evaluation based on recent comparable sales and current market conditions." },
  { q: 'How long to sell in the Portland metro?', a: 'Well-priced homes typically sell in 30-60 days. Pricing right on day one is the biggest factor.' },
  { q: 'Do I need repairs before listing?', a: "Not always. We identify which improvements offer the best ROI. Our vendor team handles the work." },
  { q: 'What does it cost to list with you?', a: 'Competitive and transparent. We walk through commission in detail during your free consultation.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (<div className="border-b border-border"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sage transition-colors">{q}</span><div className={`w-7 h-7 rounded-full border-2 border-sage-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sage border-sage rotate-45' : ''}`}><span className={`text-sm font-bold ${open ? 'text-white' : 'text-sage'}`}>+</span></div></button><motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="pb-5 text-muted leading-relaxed">{a}</p></motion.div></div>);
}

export function SellPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[68px] bg-gradient-to-br from-coral-50 via-white to-sage-50 overflow-hidden">
        <div className="container-site py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="overline mb-3">Seller Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-fg leading-[1.08] mb-6">Sell your Clackamas County home — <span className="text-sage">priced right, marketed smart.</span></h1>
            <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">Accurate pricing, a vendor team for prep, and clear communication from listing to closing.</p>
            <div className="flex flex-col sm:flex-row gap-3"><a href="#evaluation" className="btn-primary">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-secondary"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right"><div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"><Image src="/images/generated/sell-hero-home-exterior.png" alt="Home in Portland Oregon" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
        </div></div>
      </section>

      <section className="py-8 bg-white border-y border-border"><div className="container-site text-center"><FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to the <strong className="text-fg">2025 NAR Profile</strong>, 91% of sellers used an agent (record high), FSBO dropped to 5% (all-time low), and agent-listed homes sold for 99% of asking.</p></FadeIn></div></section>

      <section className="section-y bg-sage-50"><div className="container-site">
        <FadeIn className="mb-12"><p className="overline mb-3">What you get</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Listing with Advantage.</h2></FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">{[{t:'Accurate Pricing',d:'In-depth CMA — not guesswork. We price to sell fast and for top dollar.'},{t:'Vendor Team Ready',d:'Painting, landscaping, staging. Our network handles prep so your home shines.'},{t:'Zero Surprises',d:'You always know what is happening. Showings, feedback, market shifts — all communicated.'}].map(s=>(<StaggerItem key={s.t}><div className="card h-full"><CheckCircle2 className="w-6 h-6 text-sage mb-4" /><h3 className="font-heading text-lg font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-sm leading-relaxed">{s.d}</p></div></StaggerItem>))}</StaggerContainer>
      </div></section>

      <section id="evaluation" className="section-y bg-white"><div className="container-site"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn><p className="overline mb-3">Free evaluation</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-4">What is your home worth?</h2><p className="text-muted leading-relaxed mb-6">Complimentary evaluation based on real data. No pressure, no obligation.</p>
          <ul className="space-y-2 text-muted text-sm">{['Based on real comparable sales','Current Clackamas County conditions','100% free — no strings'].map(i=>(<li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />{i}</li>))}</ul>
        </FadeIn>
        <FadeIn delay={0.15} direction="right"><div className="bg-sage-50 rounded-3xl p-7 border border-border"><p className="font-heading font-bold text-lg text-fg mb-5">Request your free evaluation</p><div className="space-y-3">
          <div className="grid grid-cols-2 gap-3"><input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" /><input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" /></div>
          <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
          <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
          <input type="text" name="property_address" placeholder="Property address" className="w-full px-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
          <input type="hidden" name="source" value="website-sell-evaluation" /><button className="btn-primary w-full justify-center">Get My Free Evaluation <ArrowRight className="w-4 h-4" /></button><p className="text-xs text-muted text-center">Your info stays with us.</p>
        </div></div></FadeIn>
      </div></div></section>

      <section className="section-y bg-sage-50"><div className="container-site max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-extrabold text-fg">Seller Q&A.</h2></FadeIn><FadeIn delay={0.1}><div>{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

      <section className="py-20 md:py-24 bg-sage"><div className="container-site text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-extrabold mb-6">Ready to sell?</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><a href="#evaluation" className="btn-on-dark">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
    </div>
  );
}
