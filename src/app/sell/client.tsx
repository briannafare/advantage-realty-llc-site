'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/data';

const sellerFaqs = [
  { q: 'How do I find out what my home is worth in Clackamas County?', a: "We provide a free, no-obligation property evaluation based on recent comparable sales, current market conditions, and your home's features." },
  { q: 'How long does it take to sell in the Portland metro?', a: 'Well-priced homes in Clackamas County typically sell within 30-60 days. Pricing right on day one is the single biggest factor.' },
  { q: 'Do I need to make repairs before listing?', a: "Not always. We will identify which improvements offer the best ROI during our consultation. Our vendor team handles the work." },
  { q: 'What does it cost to list with Advantage?', a: 'Our commission structure is competitive and transparent. We will walk through it in detail during your free consultation — no surprises.' },
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

export function SellPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">Seller Services</p>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-6 font-medium">Sell your Clackamas County home <span className="text-accent">&mdash; priced right, marketed smart</span></h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">We take the stress out of selling. Accurate pricing, a vendor team for prep, and clear communication from listing to closing.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#evaluation" className="btn-on-dark">Get Your Free Property Evaluation <ArrowRight className="w-4 h-4" /></a>
                <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost-light"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src="/images/generated/sell-hero-home-exterior.png" alt="Beautiful home in Portland Oregon area" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-border/60">
        <div className="container-site text-center">
          <FadeIn><p className="text-sm text-muted max-w-2xl mx-auto">According to the <strong className="text-foreground">2025 NAR Profile</strong>, 91% of sellers used an agent — a record high — while FSBO transactions dropped to just 5%, the lowest ever. Sellers who listed with an agent typically sold for 99% of asking price.</p></FadeIn>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site">
          <FadeIn className="mb-12"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">What You Get</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight">Listing with Advantage</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: 'Accurate Pricing', d: 'In-depth comparative market analysis — not guesswork. We price to sell fast and for top dollar.' },
              { t: 'Vendor Team Ready', d: 'Painting, landscaping, staging. Our network handles prep so your home shines on day one.' },
              { t: 'Zero Surprises', d: 'You will never wonder what is happening. We keep you updated on showings, feedback, and market shifts.' },
            ].map(s => (
              <StaggerItem key={s.t}>
                <div className="bg-white rounded-2xl p-7 border border-border/50 h-full">
                  <CheckCircle2 className="w-6 h-6 text-accent mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-2">{s.t}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="evaluation" className="section-y bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Free Evaluation</p>
              <h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight mb-4">What is your home worth?</h2>
              <p className="text-muted leading-relaxed mb-6">Get a complimentary property evaluation. We analyze recent sales in your area and give you an honest assessment — no pressure.</p>
              <ul className="space-y-2 text-muted text-[15px]">
                {['Based on real comparable sales data', 'Accounts for current Clackamas County conditions', 'Completely free — no strings attached'].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />{i}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="bg-cream rounded-2xl p-7 border border-border/50">
                <p className="font-heading text-lg text-foreground mb-5">Request your free evaluation</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                    <input type="text" name="last_name" placeholder="Last name" className="w-full px-4 py-3 rounded-lg border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  </div>
                  <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="tel" name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="text" name="property_address" placeholder="Property address" className="w-full px-4 py-3 rounded-lg border border-border bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="hidden" name="source" value="website-sell-evaluation" />
                  <button className="btn-primary w-full justify-center">Get My Free Evaluation <ArrowRight className="w-4 h-4" /></button>
                  <p className="text-xs text-muted text-center">Your info stays with us.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site max-w-3xl">
          <FadeIn className="mb-12"><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">Seller questions &amp; answers</h2></FadeIn>
          <FadeIn delay={0.1}><div>{sellerFaqs.map((f,i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 font-medium">Ready to sell?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#evaluation" className="btn-on-dark">Get Your Free Evaluation <ArrowRight className="w-4 h-4" /></a>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost-light"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
