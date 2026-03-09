'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, ClipboardCheck, Calculator, Handshake, ShieldCheck, ArrowRight, Phone, ChevronDown, Quote, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig, testimonials } from '@/lib/data';

const careHomeFaqs = [
  { q: 'What is an adult care home in Oregon?', a: 'An adult care home in Oregon is a residential property licensed by the Department of Human Services to provide care for up to 5 adults who need help with daily living activities. These facilities offer a home-like environment and are regulated by the state.' },
  { q: 'What are the ADA requirements for care home properties in Oregon?', a: 'ADA-compliant care home properties must meet specific accessibility standards including wheelchair-accessible entrances and bathrooms, appropriate door widths, grab bars, and emergency systems. Our team evaluates properties against these requirements before you make an offer.' },
  { q: 'Is care home investing profitable in Oregon?', a: 'Care home facilities can generate significantly higher monthly income than traditional residential rentals. However, care homes also require operational expertise \u2014 this is not passive income like traditional rentals.' },
  { q: 'Do you help with care home licensing in Oregon?', a: 'We provide consulting on the property side \u2014 finding compliant properties, evaluating ADA requirements, and guiding the acquisition. For licensing and operational setup, we can connect you with specialists.' },
  { q: 'Can you help me find an existing care home to buy?', a: 'Yes. We can help investors acquire existing operating care homes, which offer a faster path to income since they come with existing licensing and residents.' },
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

export function CareHomesPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/40 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-semibold mb-6"><ShieldCheck className="w-4 h-4" /> Portland&apos;s Only Care Home Real Estate Specialists</div>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">Care Home Investment in Portland <span className="text-primary">&mdash; ADA Compliance, State Requirements, Expert Guidance</span></h1>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">We&apos;re the only brokerage in the Portland metro dedicated to helping investors find, evaluate, and acquire properties for adult care facilities.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Download the Care Home Guide <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Schedule a Consultation</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image src="/images/generated/care-homes-hero.png" alt="Accessible residential property suitable for adult care home in Oregon" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn><h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">What Care Home Investing Looks Like in Oregon</h2>
            <p className="text-muted leading-relaxed mb-6">Adult care homes are residential properties licensed to provide care services for adults who need assistance with daily living. In Oregon, these facilities are regulated by the Department of Human Services and must meet specific property and operational requirements.</p>
            <p className="text-muted leading-relaxed mb-6">The opportunity is significant: Oregon&apos;s aging population is growing, and demand for quality care facilities consistently outpaces supply. According to the <span className="font-semibold text-foreground">Oregon Department of Human Services</span>, the state&apos;s 65+ population is projected to grow by 59% by 2050 &mdash; from roughly 807,000 to over 1.28 million residents. The Oregon Office of Economic Analysis forecasts elderly population growth at 1.6% annually through 2035, more than three times the rate of the overall population. For investors, this means strong occupancy rates and rental income that can significantly exceed traditional residential returns.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Key Requirements We Help You Meet</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Property Identification', desc: "We search for properties that meet or can be modified to meet Oregon's care home requirements." },
              { icon: ClipboardCheck, title: 'ADA & State Review', desc: 'We evaluate each property against ADA accessibility standards and Oregon DHS requirements.' },
              { icon: Calculator, title: 'Financial Analysis', desc: 'We help you understand acquisition cost, modification costs, projected income, and ROI timeline.' },
              { icon: Handshake, title: 'Acquisition & Consulting', desc: 'We handle the purchase and provide consulting on next steps from contractors to licensing.' },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-white rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-light via-accent-light/50 to-background">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Free: The Portland Care Home Investment Guide</h2>
            <p className="text-muted max-w-xl mx-auto mb-8">Everything you need to know about investing in adult care facilities in Oregon &mdash; property requirements, ADA compliance checklist, financial considerations, and licensing overview.</p>
            <Link href="/contact" className="btn-primary">Download the Free Guide <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site max-w-2xl text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
            <p className="text-xl text-foreground leading-relaxed mb-6 font-heading italic">&ldquo;{testimonials[2].text}&rdquo;</p>
            <p className="font-semibold text-foreground">{testimonials[2].name}</p>
            <p className="text-sm text-muted">{testimonials[2].context}</p>
            <div className="flex gap-0.5 justify-center mt-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}</div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Care Home Investment Questions & Answers</h2></FadeIn>
          <FadeIn delay={0.1}><div>{careHomeFaqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}</div></FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Explore Care Home Investing?</h2>
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
