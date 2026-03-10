'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, Star, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const faqs = [
  { q: 'What is an adult care home in Oregon?', a: 'A residential property licensed by DHS to provide care for up to 5 adults. Regulated with specific property and operational requirements.' },
  { q: 'What are the ADA requirements?', a: 'Wheelchair-accessible entrances and bathrooms, proper door widths, grab bars, emergency systems. We evaluate properties against these before you offer.' },
  { q: 'Is it profitable?', a: 'Care homes can generate significantly higher monthly income than traditional rentals. But they require operational expertise — not passive income.' },
  { q: 'Do you help with licensing?', a: 'We handle the property side. For licensing and operations, we connect you with specialists.' },
  { q: 'Can I buy an existing operating care home?', a: 'Yes. Existing facilities offer faster income since they come with licensing and residents in place.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (<div className="border-b border-border"><button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group"><span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sage transition-colors">{q}</span><div className={`w-7 h-7 rounded-full border-2 border-sage-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sage border-sage rotate-45' : ''}`}><span className={`text-sm font-bold ${open ? 'text-white' : 'text-sage'}`}>+</span></div></button><motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><p className="pb-5 text-muted leading-relaxed">{a}</p></motion.div></div>);
}

export function CareHomesPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[68px] bg-gradient-to-br from-sage-50 via-white to-coral-50 overflow-hidden">
        <div className="container-site py-16 md:py-24"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-sage text-[13px] font-heading font-semibold mb-5"><CheckCircle2 className="w-4 h-4" /> Portland&apos;s Only Care Home RE Specialists</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-fg leading-[1.08] mb-6">Care home investment in Portland — <span className="text-sage">ADA compliance, expert guidance.</span></h1>
            <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">We are the only brokerage in the Portland metro dedicated to helping investors acquire properties for adult care facilities.</p>
            <div className="flex flex-col sm:flex-row gap-3"><Link href="/contact" className="btn-primary">Download the Care Home Guide <ArrowRight className="w-4 h-4" /></Link><Link href="/contact" className="btn-secondary">Schedule a Consultation</Link></div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right"><div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5"><Image src="/images/generated/care-homes-hero.png" alt="Accessible residential property in Oregon" width={600} height={400} className="w-full h-auto object-cover" /></div></FadeIn>
        </div></div>
      </section>

      <section className="section-y bg-white"><div className="container-site max-w-3xl"><FadeIn>
        <p className="overline mb-3">The opportunity</p><h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-6">Care home investing in Oregon.</h2>
        <div className="text-muted leading-relaxed space-y-4"><p>Adult care homes are residential properties licensed for adults needing daily living assistance. Oregon regulates these through the Department of Human Services.</p>
        <p>According to the <strong className="text-fg">Oregon DHS</strong>, the state&apos;s 65+ population will grow 59% by 2050 — from 807K to over 1.28 million. The <strong className="text-fg">Oregon Office of Economic Analysis</strong> forecasts elderly growth at 1.6% annually through 2035, three times the overall rate. Demand outpaces supply.</p></div>
      </FadeIn></div></section>

      <section className="section-y bg-sage-50"><div className="container-site">
        <FadeIn className="mb-12"><p className="overline mb-3">What we do</p><h2 className="font-heading text-3xl font-extrabold text-fg">Requirements we help you meet.</h2></FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{[
          {t:'Property ID',d:"Find properties meeting Oregon's care home requirements."},
          {t:'ADA Review',d:'Evaluate against ADA accessibility and DHS standards.'},
          {t:'Financial Analysis',d:'Acquisition cost, modifications, projected income, ROI.'},
          {t:'Acquisition',d:'Handle the purchase, provide setup consulting.'},
        ].map(s=>(<StaggerItem key={s.t}><div className="card h-full"><CheckCircle2 className="w-6 h-6 text-sage mb-4" /><h3 className="font-heading font-bold text-fg mb-2">{s.t}</h3><p className="text-muted text-sm leading-relaxed">{s.d}</p></div></StaggerItem>))}</StaggerContainer>
      </div></section>

      <section className="py-14 bg-white"><div className="container-site max-w-2xl text-center"><FadeIn>
        <div className="flex gap-0.5 justify-center mb-4">{[...Array(5)].map((_,j)=><Star key={j} className="w-5 h-5 text-coral fill-coral" />)}</div>
        <p className="text-xl text-fg leading-relaxed italic font-heading mb-4">&ldquo;{testimonials[2].text}&rdquo;</p>
        <p className="font-semibold text-sm">{testimonials[2].name} <span className="text-muted font-normal">&middot; {testimonials[2].context}</span></p>
      </FadeIn></div></section>

      <section className="section-y bg-sage-50"><div className="container-site max-w-3xl"><FadeIn className="mb-12"><h2 className="font-heading text-3xl font-extrabold text-fg">Care home Q&A.</h2></FadeIn><FadeIn delay={0.1}><div>{faqs.map((f,i)=><FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn></div></section>

      <section className="py-20 md:py-24 bg-sage"><div className="container-site text-center"><FadeIn><h2 className="font-heading text-3xl md:text-4xl text-white font-extrabold mb-6">Explore care home investing.</h2><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link><a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a></div></FadeIn></div></section>
    </div>);
}
