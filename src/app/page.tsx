'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Phone, MapPin, Star, CheckCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { OrganicBlob, CrosshatchPattern, LeafAccent } from '@/components/svg/Illustrations';
import { siteConfig, services, testimonials, homeFaqs, serviceAreas } from '@/lib/data';

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [c, setC] = useState(0);
  const n = parseFloat(value); const d = value.includes('.');
  useEffect(() => { if (!inView) return; const dur=1200,s=Date.now(); const t=()=>{const p=Math.min((Date.now()-s)/dur,1);setC((1-Math.pow(1-p,3))*n);if(p<1)requestAnimationFrame(t);}; requestAnimationFrame(t); }, [inView,n]);
  return <span ref={ref}>{d?c.toFixed(1):Math.round(c)}{value.includes('+')?'+':''}</span>;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-300/60 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-6 text-left group">
        <span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sienna transition-colors">{q}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sienna rotate-45' : 'bg-warm-100 group-hover:bg-warm-200'}`}>
          <span className={`text-lg font-semibold leading-none ${open ? 'text-white' : 'text-fg'}`}>+</span>
        </div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-6 text-muted leading-relaxed pr-14">{a}</p>
      </motion.div>
    </div>
  );
}

function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const len = testimonials.length;
  useEffect(() => { const t = setInterval(() => setI(p => (p+1)%len), 7000); return () => clearInterval(t); }, [len]);
  const t = testimonials[i];
  return (
    <div className="relative">
      <motion.div key={i} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
        <div className="flex gap-1 mb-5">{[...Array(5)].map((_,j) => <Star key={j} className="w-5 h-5 text-sienna fill-sienna" />)}</div>
        <blockquote className="text-fg text-xl md:text-2xl leading-relaxed font-heading font-medium mb-8">&ldquo;{t.text}&rdquo;</blockquote>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-warm-100 flex items-center justify-center border border-warm-300/50">
            <span className="text-base font-heading font-bold text-sienna">{t.name.charAt(0)}</span>
          </div>
          <div><p className="font-heading font-semibold text-fg">{t.name}</p><p className="text-sm text-muted">{t.ctx}</p></div>
        </div>
      </motion.div>
      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-warm-300/40">
        <button onClick={() => setI((i-1+len)%len)} className="w-11 h-11 rounded-xl bg-warm-100 hover:bg-warm-200 flex items-center justify-center transition-colors" aria-label="Prev"><ChevronLeft className="w-5 h-5 text-fg" /></button>
        <div className="flex gap-2 flex-1">{testimonials.map((_,idx) => <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx===i?'bg-sienna flex-[3]':'bg-warm-200 flex-1'}`} />)}</div>
        <button onClick={() => setI((i+1)%len)} className="w-11 h-11 rounded-xl bg-warm-100 hover:bg-warm-200 flex items-center justify-center transition-colors" aria-label="Next"><ChevronRight className="w-5 h-5 text-fg" /></button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0,1], [0, -60]);
  const blobR = useTransform(scrollYProgress, [0,1], [0, 10]);

  return (
    <div className="pb-20 lg:pb-0">

      {/* ═══ HERO — centered text, no image ═══ */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-100 via-warm-50 to-warm-50" />
        <motion.div style={{ y: blobY, rotate: blobR }} className="absolute top-10 right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]">
          <OrganicBlob className="w-full h-full" />
        </motion.div>
        <CrosshatchPattern className="absolute bottom-4 left-6 text-fg hidden lg:block" />
        <LeafAccent className="absolute top-32 left-[8%] text-forest/30 w-16 h-24 hidden lg:block" />

        <div className="mx-site relative z-10 text-center py-10 md:py-20 max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-warm-300/60 shadow-sm text-sm mb-8">
              <Star className="w-4 h-4 text-sienna fill-sienna" />
              <span className="font-heading font-semibold text-fg">5.0</span>
              <span className="text-muted">Google Rating</span>
              <span className="w-px h-4 bg-warm-300 mx-0.5" />
              <span className="text-muted">Clackamas, OR</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-heading text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-fg font-bold mb-6">
              Real estate that works<br className="hidden sm:block" /> as hard as <span className="text-sienna">you do.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Boutique Clackamas County team. 16 years of local knowledge. Three agents who pick up the phone.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Book a free consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-secondary"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TEAM PHOTO + STATS BAND ═══ */}
      <section className="relative bg-warm-800 overflow-hidden">
        <div className="mx-site py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image src="/images/team/team-group.jpg" alt="Advantage Realty team" width={600} height={450} className="w-full h-auto object-cover" priority />
              </div>
            </FadeIn>
            <div className="lg:col-span-7 lg:pl-4">
              <FadeIn delay={0.15}>
                <p className="text-sienna text-xs font-heading font-semibold tracking-[0.14em] uppercase mb-3">The team behind the deals</p>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">Three experienced agents. No handoffs, no runaround. We specialize in Clackamas County residential, investment properties, and adult care home consulting.</p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="grid grid-cols-3 gap-6">
                  {[{ v:'16+', l:'Years Experience' }, { v:'5.0', l:'Google Rating' }, { v:'3', l:'Languages Spoken' }].map(s => (
                    <div key={s.l}><p className="text-3xl md:text-4xl font-heading font-bold text-white"><Counter value={s.v} /></p><p className="text-xs text-white/40 mt-1">{s.l}</p></div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — bento-ish ═══ */}
      <section className="section-y bg-warm-50">
        <div className="mx-site">
          <FadeIn className="mb-12 max-w-md">
            <p className="overline mb-3">What we do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg leading-tight">Four ways we get you where you want to be.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, idx) => (
              <StaggerItem key={s.title}>
                <Link href={s.href} className={`group block rounded-2xl border border-warm-300/60 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-sienna/30 h-full ${idx === 3 ? 'bg-warm-800 text-white hover:bg-warm-800/95' : 'bg-white'}`}>
                  <span className={`inline-block text-xs font-heading font-bold tracking-widest uppercase mb-4 ${idx === 3 ? 'text-sienna' : 'text-forest'}`}>0{idx+1}</span>
                  <h3 className={`font-heading text-2xl font-bold mb-3 transition-colors ${idx === 3 ? 'text-white group-hover:text-sienna-100' : 'text-fg group-hover:text-sienna'}`}>{s.title}</h3>
                  <p className={`leading-relaxed mb-6 ${idx === 3 ? 'text-white/60' : 'text-muted'}`}>{s.desc}</p>
                  <span className={`text-sm font-heading font-semibold flex items-center gap-1.5 transition-all group-hover:gap-2.5 ${idx === 3 ? 'text-sienna' : 'text-sienna'}`}>
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="section-y bg-white relative overflow-hidden">
        <LeafAccent className="absolute top-20 right-10 text-forest/15 w-20 h-28 hidden lg:block" />
        <div className="mx-site relative z-10">
          <FadeIn className="text-center mb-14 max-w-xl mx-auto">
            <p className="overline mb-3">Why Advantage</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg">A different kind of brokerage.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { t:'Care Home Specialists', d:"Only Portland-area brokerage focused on ADA-compliant properties for adult care facilities. We know Oregon's requirements.", tag:'Niche' },
              { t:'Three Agents, Zero Layers', d:'Huluka, Hunde, or Jenni — start to finish. No junior agents. No pipeline shuffle.', tag:'Personal' },
              { t:'Investment-First Thinking', d:'Rentals, multi-family, 1031 exchanges, care homes. We build wealth, not just close transactions.', tag:'Strategic' },
              { t:'16 Years in This Market', d:'Every neighborhood trend, every shortcut, every micro-market in Clackamas County. That knowledge is your edge.', tag:'Local' },
            ].map(item => (
              <StaggerItem key={item.t}>
                <div className="bg-warm-50 rounded-2xl p-7 border border-warm-300/50 h-full hover:border-sienna/20 hover:shadow-md transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-lg bg-forest-50 text-forest text-xs font-heading font-semibold mb-4">{item.tag}</span>
                  <h3 className="font-heading text-lg font-bold text-fg mb-2">{item.t}</h3>
                  <p className="text-muted leading-relaxed text-[15px]">{item.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-y bg-warm-100/60">
        <div className="mx-site max-w-3xl">
          <FadeIn className="text-center mb-14">
            <p className="overline mb-3">How it works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg">Three steps. Seriously.</h2>
          </FadeIn>
          {[
            { n:'01', t:'Free consultation', d:'Tell us your goals. We listen, ask the right questions, and map out a plan around your timeline and budget.' },
            { n:'02', t:'Custom strategy', d:'No template playbooks. We build a search, marketing, or investment strategy specific to your situation and current market conditions.' },
            { n:'03', t:'We handle everything', d:'Inspections, appraisals, negotiations, paperwork. We manage every detail through closing. You stay in the loop without the stress.' },
          ].map((step, idx) => (
            <FadeIn key={step.n} delay={idx * 0.1}>
              <div className="flex gap-6 py-8 border-b border-warm-300/50 last:border-0 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-warm-300/60 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-sienna group-hover:border-sienna transition-all duration-300">
                  <span className="font-heading font-bold text-sienna group-hover:text-white transition-colors">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-fg mb-1.5">{step.t}</h3>
                  <p className="text-muted leading-relaxed">{step.d}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-y bg-white">
        <div className="mx-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-4">
              <p className="overline mb-3">Client stories</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg leading-tight">People trust us with their biggest decisions.</h2>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-8">
              <TestimonialCarousel />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ LEAD MAGNET ═══ */}
      <section className="section-y bg-warm-50">
        <div className="mx-site">
          <div className="bg-gradient-to-br from-warm-100 via-sienna-50 to-forest-50 rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <CrosshatchPattern className="absolute -top-4 -right-4 text-fg opacity-30" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <FadeIn>
                <p className="overline mb-3">Free resource</p>
                <h2 className="font-heading text-3xl md:text-[2.4rem] font-bold text-fg leading-tight mb-4">The Portland Homebuyer&apos;s Playbook</h2>
                <p className="text-muted leading-relaxed mb-4">Step-by-step guide to buying your first home in Portland metro. Pre-approval to keys.</p>
                <ul className="space-y-2.5 text-muted text-[15px]">
                  {['Clackamas County neighborhood breakdowns','Closing cost calculator & full timeline','Inspection checklist & red flags to watch','How to compete when inventory is tight'].map(item=>(
                    <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.15} direction="right">
                <div className="bg-white rounded-2xl p-7 shadow-lg border border-warm-300/40">
                  <p className="font-heading font-bold text-lg text-fg mb-5">Get your free copy</p>
                  <div className="space-y-3">
                    <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
                    <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
                    <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-warm-300 bg-warm-50 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sienna/20 focus:border-sienna transition-all" />
                    <input type="hidden" name="source" value="website-home-lead-magnet" />
                    <button className="btn-primary w-full justify-center">Download the free guide <ArrowRight className="w-4 h-4" /></button>
                    <p className="text-xs text-muted text-center">No spam. Ever.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="py-16 bg-white">
        <div className="mx-site text-center">
          <FadeIn>
            <p className="overline mb-3">Where we work</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-fg mb-8">Clackamas County &amp; SE Portland</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map(a => (
              <StaggerItem key={a}><span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-warm-100 border border-warm-300/50 text-sm font-medium text-fg hover:bg-sienna hover:text-white hover:border-sienna transition-all duration-300 cursor-default"><MapPin className="w-3.5 h-3.5" />{a}</span></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-y bg-warm-50">
        <div className="mx-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-fg">Questions? Answers.</h2>
          </FadeIn>
          <FadeIn delay={0.1}><div className="bg-white rounded-2xl border border-warm-300/50 p-6 md:p-8">{homeFaqs.map((f,idx) => <FaqItem key={idx} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-32 bg-warm-800 relative overflow-hidden">
        <OrganicBlob className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-30" />
        <div className="mx-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">Ready to make your move?</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-10 text-lg">Free consultation. No pressure. Just a conversation about what you want to accomplish.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
