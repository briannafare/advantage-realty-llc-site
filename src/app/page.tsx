'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Phone, MapPin, Star, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { SoftBlob, DotGrid } from '@/components/svg/Illustrations';
import { siteConfig, services, testimonials, homeFaqs, serviceAreas } from '@/lib/data';

/* ── Counter ── */
function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const num = parseFloat(value);
  const dec = value.includes('.');
  useEffect(() => {
    if (!inView) return;
    const dur = 1200, start = Date.now();
    const tick = () => { const p = Math.min((Date.now() - start) / dur, 1); setCount((1 - Math.pow(1 - p, 3)) * num); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [inView, num]);
  return <span ref={ref}>{dec ? count.toFixed(1) : Math.round(count)}{value.includes('+') ? '+' : ''}</span>;
}

/* ── FAQ ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-5 text-left group">
        <span className="font-heading font-semibold text-fg text-[17px] pr-6 group-hover:text-sage transition-colors">{q}</span>
        <div className={`w-7 h-7 rounded-full border-2 border-sage-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-sage border-sage rotate-45' : 'group-hover:border-sage'}`}>
          <span className={`text-sm font-bold leading-none ${open ? 'text-white' : 'text-sage'}`}>+</span>
        </div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-5 text-muted leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

/* ── Testimonial Carousel ── */
function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const len = testimonials.length;
  useEffect(() => { const t = setInterval(() => setI(p => (p + 1) % len), 7000); return () => clearInterval(t); }, [len]);
  const t = testimonials[i];
  return (
    <div className="relative">
      <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
        <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-coral fill-coral" />)}</div>
        <p className="text-fg text-lg md:text-xl leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-sage-50 flex items-center justify-center border border-sage-200">
            <span className="text-sm font-bold text-sage">{t.name.charAt(0)}</span>
          </div>
          <div><p className="font-heading font-semibold text-sm text-fg">{t.name}</p><p className="text-xs text-muted">{t.context}</p></div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => setI((i - 1 + len) % len)} className="w-10 h-10 rounded-full bg-sage-50 hover:bg-sage-100 flex items-center justify-center transition-colors" aria-label="Previous"><ChevronLeft className="w-5 h-5 text-sage" /></button>
        <div className="flex gap-2">{testimonials.map((_, idx) => <button key={idx} onClick={() => setI(idx)} className={`h-2.5 rounded-full transition-all duration-300 ${idx === i ? 'bg-coral w-8' : 'bg-sage-100 w-2.5'}`} />)}</div>
        <button onClick={() => setI((i + 1) % len)} className="w-10 h-10 rounded-full bg-sage-50 hover:bg-sage-100 flex items-center justify-center transition-colors" aria-label="Next"><ChevronRight className="w-5 h-5 text-sage" /></button>
      </div>
    </div>
  );
}

/* ═══════════════════ HOMEPAGE ═══════════════════ */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div className="pb-20 lg:pb-0">

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-coral-50 pt-[72px]">
        {/* Decorative elements */}
        <motion.div style={{ scale: blobScale, rotate: blobRotate }} className="absolute -top-20 -right-32 w-[600px] h-[600px]">
          <SoftBlob className="w-full h-full" />
        </motion.div>
        <DotGrid className="absolute bottom-10 left-8 text-sage hidden lg:block" />

        <div className="container-site relative z-10 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Text — 7 cols */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-sm mb-6">
                  <Star className="w-4 h-4 text-coral fill-coral" />
                  <span className="font-heading font-semibold text-fg">5.0</span>
                  <span className="text-muted">on Google</span>
                  <span className="w-px h-4 bg-border mx-1" />
                  <span className="text-muted">Clackamas, OR</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] leading-[1.08] text-fg font-extrabold mb-6">
                  Real estate that actually<br />
                  <span className="text-sage">revolves around you.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.35}>
                <p className="text-muted text-lg max-w-lg mb-8 leading-relaxed">
                  Boutique Clackamas County team. 16+ years of local market knowledge. Three agents who pick up the phone. Buy, sell, or invest with people who give a damn.
                </p>
              </FadeIn>
              <FadeIn delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">
                    Book a free consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-secondary">
                    <Phone className="w-4 h-4" />{siteConfig.phone}
                  </a>
                </div>
              </FadeIn>
              {/* Mini stats */}
              <FadeIn delay={0.55}>
                <div className="flex gap-8 mt-10 pt-8 border-t border-border">
                  {[{ v: '16+', l: 'Years' }, { v: '5.0', l: 'Google Rating' }, { v: '3', l: 'Languages' }].map(s => (
                    <div key={s.l}><p className="text-2xl font-heading font-extrabold text-sage"><Counter value={s.v} /></p><p className="text-xs text-muted mt-0.5">{s.l}</p></div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Image — 5 cols */}
            <FadeIn delay={0.3} direction="right" className="lg:col-span-5">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image src="/images/team/team-group.jpg" alt="Advantage Realty team in Clackamas, Oregon" fill={false} width={600} height={750}
                    className="w-full h-auto object-cover" priority sizes="(max-width: 768px) 100vw, 40vw" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-border px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-fg">Care Home Specialists</p>
                    <p className="text-xs text-muted">Only team in Portland metro</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeIn className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="overline mb-3">What we do</p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg leading-tight mb-4">Four ways we help you win.</h2>
              <p className="text-muted leading-relaxed mb-6">Every service backed by 16 years of Clackamas County expertise and a 5.0 Google rating.</p>
              <Link href="/contact" className="btn-primary">Let&apos;s talk <ArrowRight className="w-4 h-4" /></Link>
            </FadeIn>
            <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, idx) => (
                <StaggerItem key={s.title}>
                  <Link href={s.href} className="card group block h-full">
                    <div className="w-12 h-12 rounded-2xl bg-sage-50 flex items-center justify-center mb-5 group-hover:bg-sage group-hover:scale-105 transition-all duration-300">
                      <span className="text-xl font-heading font-extrabold text-sage group-hover:text-white transition-colors">0{idx + 1}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-fg mb-2 group-hover:text-sage transition-colors">{s.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className="text-coral text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATORS ═══ */}
      <section className="section-y bg-sage-50 relative overflow-hidden">
        <DotGrid className="absolute top-8 right-10 text-sage opacity-50 hidden lg:block" />
        <div className="container-site relative z-10">
          <FadeIn className="text-center mb-14 max-w-2xl mx-auto">
            <p className="overline mb-3">Why us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Not your average brokerage.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { t: 'Care Home Expertise', d: "We are the only Portland-area brokerage specializing in ADA-compliant properties for adult care facilities. We know Oregon's requirements cold.", tag: 'Unique niche' },
              { t: 'Three Agents, Zero Runaround', d: 'You work with Huluka, Hunde, or Jenni from day one to closing. No handoffs to junior agents. No getting lost in a pipeline.', tag: 'Personal service' },
              { t: 'Investment DNA', d: 'Rentals, multi-family, 1031 exchanges, care homes. We help you build wealth — not just buy houses.', tag: 'Investor focused' },
              { t: '16 Years in This Market', d: 'Every neighborhood, every micro-trend, every shortcut. That local knowledge is the difference between a good deal and a great one.', tag: 'Local expertise' },
            ].map((item) => (
              <StaggerItem key={item.t}>
                <div className="bg-white rounded-3xl p-7 border border-border h-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-sage-50 text-sage text-xs font-heading font-semibold mb-4">{item.tag}</span>
                  <h3 className="font-heading text-lg font-bold text-fg mb-2">{item.t}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-14">
            <p className="overline mb-3">How it works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Three steps. That&apos;s it.</h2>
          </FadeIn>
          <div className="space-y-0">
            {[
              { n: '01', t: 'Free consultation', d: 'Tell us your goals — buying, selling, or investing. We listen, ask the right questions, and map a plan around your timeline.' },
              { n: '02', t: 'Custom strategy', d: 'No cookie-cutter playbooks. We build a search, marketing, or investment roadmap tailored to you and the current market.' },
              { n: '03', t: 'We handle everything', d: 'Inspections, appraisals, negotiations, paperwork. We manage every detail through closing. You stay informed without the stress.' },
            ].map((step, idx) => (
              <FadeIn key={step.n} delay={idx * 0.1}>
                <div className="flex gap-6 py-8 border-b border-border last:border-0 group">
                  <div className="w-14 h-14 rounded-2xl bg-coral-50 flex items-center justify-center flex-shrink-0 group-hover:bg-coral group-hover:scale-105 transition-all duration-300">
                    <span className="font-heading font-extrabold text-coral group-hover:text-white transition-colors">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-fg mb-1">{step.t}</h3>
                    <p className="text-muted leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-y bg-sage-50">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <p className="overline mb-3">Client stories</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Real results from real people.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ═══ LEAD MAGNET ═══ */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="bg-gradient-to-br from-sage-50 to-coral-50 rounded-4xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <DotGrid className="absolute -top-4 -right-4 text-sage opacity-30" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <FadeIn>
                <p className="overline mb-3">Free resource</p>
                <h2 className="font-heading text-3xl md:text-[2.5rem] font-extrabold text-fg leading-tight mb-4">The Portland Homebuyer&apos;s Playbook</h2>
                <p className="text-muted leading-relaxed mb-4">A step-by-step guide to buying your first home in the Portland metro — pre-approval to closing day.</p>
                <ul className="space-y-2 text-muted text-sm">
                  {['Neighborhood breakdowns for Clackamas County', 'Closing cost calculator & timeline', 'Inspection checklist & red flags', 'How to compete in a tight market'].map(item => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.15} direction="right">
                <div className="bg-white rounded-3xl p-7 shadow-lg border border-border">
                  <p className="font-heading font-bold text-lg text-fg mb-4">Get your free copy</p>
                  <div className="space-y-3">
                    <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-border bg-sage-50/30 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
                    <input type="email" name="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-border bg-sage-50/30 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
                    <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-sage-50/30 placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all" />
                    <input type="hidden" name="source" value="website-home-lead-magnet" />
                    <button className="btn-primary w-full justify-center">Download the free guide <ArrowRight className="w-4 h-4" /></button>
                    <p className="text-xs text-muted text-center">No spam. Your info stays with us.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="section-y bg-sage-50">
        <div className="container-site text-center">
          <FadeIn>
            <p className="overline mb-3">Where we work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg mb-4">Clackamas County &amp; SE Portland</h2>
            <p className="text-muted max-w-lg mx-auto mb-10">Based in Clackamas, OR. Serving the southeast Portland metro.</p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => (
              <StaggerItem key={area}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-fg hover:bg-sage hover:text-white hover:border-sage transition-all duration-300 cursor-default shadow-sm">
                  <MapPin className="w-3.5 h-3.5" />{area}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-fg">Questions? We&apos;ve got answers.</h2>
          </FadeIn>
          <FadeIn delay={0.1}><div>{homeFaqs.map((f, idx) => <FaqItem key={idx} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 md:py-32 bg-sage relative overflow-hidden">
        <DotGrid className="absolute top-6 left-6 text-white opacity-10" />
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-6">Ready to make your move?</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">A free consultation is the best place to start. No pressure, no obligation — just a conversation about your goals.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-on-dark">Book a free consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-ghost"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
