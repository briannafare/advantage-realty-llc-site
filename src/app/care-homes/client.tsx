'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const faqs = [
  { q: 'What is an adult care home in Oregon?', a: 'Residential property licensed by DHS for up to 5 adults needing daily living assistance. Specific property and operational requirements.' },
  { q: 'ADA requirements?', a: 'Wheelchair access, proper door widths, grab bars, emergency systems. We evaluate properties against these before you offer.' },
  { q: 'Profitable?', a: 'Higher monthly income than traditional rentals. But requires operational expertise — not passive.' },
  { q: 'Do you help with licensing?', a: 'We handle the property side. For licensing/operations, we connect you with specialists.' },
  { q: 'Can I buy an existing care home?', a: 'Yes. Existing facilities offer faster income since they come with licensing and residents.' },
];
function FaqItem({ q, a }: { q: string; a: string }) { const [open, setOpen] = useState(false); return (<div className="border-b border-warm-300/60 last:border-0"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-6 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sienna transition-colors">{q}</span><div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open?'bg-sienna rotate-45':'bg-warm-100'}`}><span className={`text-lg font-semibold leading-none ${open?'text-white':'text-fg'}`}>+</span></div></button><motion.div initial={false} animate={{ height:open?'auto':0, opacity:open?1:0 }} transition={{ duration:0.3 }} className="overflow-hidden"><p className="pb-6 text-muted leading-relaxed pr-14">{a}</p></motion.div></div>); }

export function CareHomesPageClient() { return (<div className="pb-20 lg:pb-0">
  <section className="relative pt-[72px] bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 relative z-10 py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <FadeIn><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sienna/10 border border-sienna/30 text-sienna text-[13px] font-heading font-semibold mb-5"><CheckCircle className="w-4 h-4" /> Portland&apos;s Only Care Home RE Specialists</div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">Care home investment — <span className="text-sienna">ADA compliance, expert guidance.</span></h1>
      <p className="text-white/50 text-lg mb-8 max-w-xl">Only brokerage in Portland metro dedicated to adult care facility property acquisitions.</p>
      <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-on-dark">Download the Care Home Guide <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-ghost">Consultation</Link></div></FadeIn>
    <FadeIn delay={0.2} direction="right"><div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"><Image src="/images/generated/care-homes-hero.png" alt="Accessible property Oregon" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
  </div></div></section>

  <section className="section-y bg-warm-50"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn><p className="overline mb-3">The opportunity</p><h2 className="font-heading text-3xl font-bold text-fg leading-tight mb-6">Care home investing in Oregon.</h2>
    <div className="text-muted leading-relaxed space-y-4"><p>Adult care homes are residential properties licensed for adults needing daily living assistance.</p><p>Per the <strong className="text-fg">Oregon DHS</strong>, 65+ population grows 59% by 2050 — 807K to 1.28M. The <strong className="text-fg">Oregon Office of Economic Analysis</strong> forecasts 1.6% annual elderly growth through 2035, three times the overall rate.</p></div>
  </FadeIn></div></section>

  <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8"><FadeIn className="mb-12"><p className="overline mb-3">What we do</p><h2 className="font-heading text-3xl font-bold text-fg">Requirements we help you meet.</h2></FadeIn>
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{[
      {t:'Find Properties',d:"Properties meeting Oregon's care home requirements."},{t:'ADA Review',d:'Evaluate against ADA and DHS standards.'},{t:'Financial Analysis',d:'Costs, modifications, projected income, ROI.'},{t:'Acquisition',d:'Handle purchase, provide setup consulting.'},
    ].map(s=>(<StaggerItem key={s.t}><div className="bg-warm-50 rounded-2xl p-6 border border-warm-300/50 h-full hover:border-sienna/30 hover:shadow-md transition-all"><CheckCircle className="w-6 h-6 text-forest mb-4" /><h3 className="font-heading font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-sm leading-relaxed">{s.d}</p></div></StaggerItem>))}</StaggerContainer>
  </div></section>

  <section className="py-14 bg-warm-100/60"><div className="max-w-site mx-auto px-5 md:px-8 max-w-2xl text-center"><FadeIn><div className="flex gap-0.5 justify-center mb-4">{[...Array(5)].map((_,j)=><Star key={j} className="w-5 h-5 text-sienna fill-sienna" />)}</div><p className="text-xl text-fg leading-relaxed italic font-heading mb-4">&ldquo;{testimonials[2].text}&rdquo;</p><p className="font-semibold text-sm">{testimonials[2].name} <span className="text-muted font-normal">&middot; {testimonials[2].ctx}</span></p></FadeIn></div></section>

  <section className="section-y bg-white"><div className="max-w-site mx-auto px-5 md:px-8 max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-bold text-fg">Care home Q&amp;A.</h2></FadeIn><FadeIn delay={0.1}><div className="bg-warm-50 rounded-2xl border border-warm-300/50 p-6 md:p-8">{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

  <section className="py-20 md:py-24 bg-warm-800"><div className="max-w-site mx-auto px-5 md:px-8 text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">Explore care home investing.</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
</div>); }
