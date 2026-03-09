'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Target, Wrench, MessageCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';

const sellerFaqs = [
  { q: 'How do I find out what my home is worth in Clackamas County?', a: "We provide a free, no-obligation property evaluation. Our team analyzes recent comparable sales in your neighborhood, current market conditions, and your home's specific features to give you an accurate market value." },
  { q: 'How long does it take to sell a home in the Portland metro area?', a: 'Well-priced homes in Clackamas County typically sell within 30-60 days. Proper pricing from day one is the biggest factor in selling quickly.' },
  { q: 'Do I need to make repairs before listing my home?', a: "Not necessarily \u2014 but strategic improvements can significantly increase your sale price. During our consultation, we'll identify which repairs offer the best return on investment." },
  { q: 'Can you help me sell my home if I don\'t speak English fluently?', a: "Yes. Huluka and Hunde speak fluent Oromo and Amharic. We'll handle all negotiations, paperwork, and communication in your preferred language." },
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

export function SellPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      {/* HERO */}
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/40 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">Sell Your Clackamas County Home <span className="text-primary">&mdash; Priced Right, Marketed Smart, Sold Fast</span></h1>
              <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">We take the stress out of selling. From accurate pricing to closing day, our team handles every detail so you can focus on what&apos;s next.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#evaluation" className="btn-primary">Get Your Free Property Evaluation <ArrowRight className="w-4 h-4" /></a>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn-secondary"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                <Image src="/images/generated/sell-hero-home-exterior.png" alt="Beautiful single-family home in Portland Oregon area" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">What You Get When You List With Advantage</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Accurate Pricing That Sells', body: 'We use in-depth comparative market analysis \u2014 not guesswork \u2014 to price your home. Our goal: sell for top dollar in the shortest time on market.' },
              { icon: Wrench, title: 'A Vendor Team Ready to Go', body: 'Need repairs or upgrades before listing? Our trusted vendor network handles everything \u2014 from painting to landscaping \u2014 so your home shines.' },
              { icon: MessageCircle, title: 'Clear Communication, Zero Surprises', body: "You'll never wonder what's happening with your listing. We keep you updated on showings, feedback, and market activity." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-5 mx-auto"><item.icon className="w-7 h-7 text-accent" /></div>
                  <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PROPERTY EVALUATION FORM */}
      <section id="evaluation" className="section-padding bg-surface-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">What&apos;s Your Home Worth?</h2>
              <p className="text-muted leading-relaxed mb-6">Get a complimentary property evaluation from our team. We&apos;ll analyze recent sales in your area and give you an honest assessment &mdash; no pressure, no obligation.</p>
              <ul className="space-y-3 text-muted text-sm">
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent">&#10003;</span> Based on real comparable sales data</li>
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent">&#10003;</span> Accounts for current market conditions</li>
                <li className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent">&#10003;</span> 100% free, no strings attached</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="first_name" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                    <input type="text" name="last_name" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="text" name="property_address" placeholder="Property Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="hidden" name="source" value="website-sell-evaluation" />
                  <button className="btn-primary w-full justify-center text-base">Get My Free Evaluation <ArrowRight className="w-4 h-4" /></button>
                  <p className="text-xs text-muted text-center">Your information stays with us.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Seller Questions & Answers</h2></FadeIn>
          <FadeIn delay={0.1}><div>{sellerFaqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Sell?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#evaluation" className="btn-on-dark">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition-all"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
