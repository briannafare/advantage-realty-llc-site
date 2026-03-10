'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Phone, MapPin, Star, Quote, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { HouseOutline, AccentBlob, MapPinCluster, ShieldCheckIcon, ChartUpIcon } from '@/components/svg/Illustrations';
import { siteConfig, services, testimonials, homeFaqs, processSteps, whyAdvantage, serviceAreas } from '@/lib/data';

/* ── COUNTER ── */
function Counter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const num = parseFloat(value);
  const dec = value.includes('.');
  useEffect(() => {
    if (!inView) return;
    const dur = 1400, start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setCount((1 - Math.pow(1 - p, 3)) * num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num]);
  return <span ref={ref}>{dec ? count.toFixed(1) : Math.round(count)}{value.includes('+') ? '+' : ''}{suffix}</span>;
}

/* ── FAQ ── */
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

/* ── TESTIMONIAL CAROUSEL ── */
function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const len = testimonials.length;
  const next = () => setI((i + 1) % len);
  const prev = () => setI((i - 1 + len) % len);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [i]);
  const t = testimonials[i];
  return (
    <div className="relative">
      <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl p-8 md:p-10 border border-border/60 shadow-sm">
        <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-accent fill-accent" />)}</div>
        <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-heading font-normal italic">&ldquo;{t.text}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
          </div>
          <div><p className="font-semibold text-sm">{t.name}</p><p className="text-xs text-muted">{t.context}</p></div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
        <div className="flex gap-2">{testimonials.map((_, idx) => <button key={idx} onClick={() => setI(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === i ? 'bg-accent w-8' : 'bg-border w-2'}`} aria-label={`Testimonial ${idx+1}`} />)}</div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </div>
  );
}

/* ── SERVICE ICON MAP ── */
const svcIcons: Record<string, React.ReactNode> = {
  home: <HouseOutline className="w-10 h-10" />,
  trending: <ChartUpIcon className="w-10 h-10" />,
  chart: <ChartUpIcon className="w-10 h-10" />,
  shield: <ShieldCheckIcon className="w-10 h-10" />,
};

/* ═══════════════════════════════ HOMEPAGE ═══════════════════════════════ */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="pb-20 lg:pb-0">

      {/* ═══ HERO — DARK ═══ */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary">
        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        {/* Accent blobs */}
        <motion.div style={{ y: blobY }} className="absolute top-24 -right-20 w-[500px] h-[500px] opacity-[0.07]">
          <AccentBlob className="w-full h-full text-accent" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

        <div className="container-site relative z-10 pb-16 pt-32 md:pb-24 md:pt-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Text — 7 cols */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.15}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[13px] text-white/60 mb-6 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  5.0 Google Rating &middot; Clackamas, OR
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] leading-[1.05] text-white mb-6 font-medium">
                  Real Estate Done Right<br />
                  <span className="text-accent">in Clackamas County</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed">
                  Buy, sell, or invest with a boutique team that knows every street in the county. 16+ years. Three dedicated agents. One goal: yours.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-on-dark">
                    Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-ghost-light">
                    <Phone className="w-4 h-4" />{siteConfig.phone}
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Image — 5 cols */}
            <FadeIn delay={0.35} direction="right" className="lg:col-span-5">
              <div className="relative">
                {/* Copper border accent */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-accent/20 -rotate-2 hidden md:block" />
                <motion.div style={{ scale: imgScale }} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4]">
                  <Image src="/images/team/team-group.jpg" alt="Advantage Realty team in Clackamas, Oregon" fill
                    className="object-cover object-top" priority sizes="(max-width: 768px) 100vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                </motion.div>
                {/* Floating stat badge */}
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl shadow-lg px-5 py-3 border border-border/60">
                  <p className="text-2xl font-heading font-bold text-primary"><Counter value="16+" /></p>
                  <p className="text-xs text-muted">Years in Portland RE</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="bg-white border-b border-border/60">
        <div className="container-site py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-accent fill-accent" /> <strong className="text-foreground">5.0</strong> Google Rating</span>
            <span className="hidden md:inline text-border">|</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> Clackamas, OR</span>
            <span className="hidden md:inline text-border">|</span>
            <span>Residential &middot; Investment &middot; Care Homes</span>
            <span className="hidden md:inline text-border">|</span>
            <span>English &middot; Oromo &middot; Amharic</span>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-y bg-cream">
        <div className="container-site">
          <FadeIn className="mb-14">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">What We Do</p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground leading-tight max-w-lg">Four ways we help you win in real estate</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link href={s.href} className="group block bg-white rounded-2xl p-7 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-accent mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-block">{svcIcons[s.icon]}</div>
                  <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-muted text-[15px] leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ WHY ADVANTAGE — SPLIT ═══ */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Why Advantage</p>
              <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground leading-tight mb-8">Not your average brokerage</h2>
              <div className="space-y-6">
                {whyAdvantage.map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted text-[15px] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-light rounded-3xl -rotate-3" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image src="/images/generated/home-neighborhood-clackamas.png" alt="Clackamas County Oregon neighborhood" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <MapPinCluster className="absolute -bottom-6 -right-6 w-24 h-16 text-accent/30" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section-y bg-cream-dark relative overflow-hidden">
        <HouseOutline className="absolute top-12 right-8 w-48 h-40 text-border/40 hidden lg:block" />
        <div className="container-site relative z-10">
          <FadeIn className="text-center mb-14">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">How It Works</p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground">Three steps to get started</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="relative">
                  <span className="text-[64px] font-heading font-bold text-accent/10 leading-none absolute -top-4 -left-2">{step.n}</span>
                  <div className="relative pt-10">
                    <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-y bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Client Stories</p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground">What our clients say</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ═══ LEAD MAGNET ═══ */}
      <section className="section-y bg-cream-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Free Resource</p>
              <h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground leading-tight mb-4">The Portland Homebuyer&apos;s Playbook</h2>
              <p className="text-muted leading-relaxed mb-3">A step-by-step guide to buying your first home in the Portland metro &mdash; from pre-approval to closing day.</p>
              <ul className="space-y-2 text-muted text-[15px] mb-6">
                {['Neighborhood breakdowns for Clackamas County', 'Closing cost calculator & timeline', 'Inspection checklist & red flags', 'How to compete in a tight market'].map(item => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/50">
                <p className="font-heading text-lg text-foreground mb-5">Get your free copy</p>
                <div className="space-y-3">
                  <input type="text" name="first_name" placeholder="First name" className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="email" name="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg border border-border bg-cream text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-[15px]" />
                  <input type="hidden" name="source" value="website-home-lead-magnet" />
                  <button className="btn-primary w-full justify-center">Download the Free Guide <ArrowRight className="w-4 h-4" /></button>
                  <p className="text-xs text-muted text-center">No spam. Your info stays with us.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="section-y bg-white">
        <div className="container-site text-center">
          <FadeIn>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Where We Work</p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground mb-4">Serving Clackamas County &amp; SE Portland</h2>
            <p className="text-muted max-w-xl mx-auto mb-10 text-[15px]">
              Advantage Realty LLC is a real estate brokerage based in Clackamas, Oregon, serving buyers, sellers, and investors across the southeast Portland metro.
            </p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <StaggerItem key={area}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cream border border-border/60 text-sm font-medium text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 cursor-default">
                  <MapPin className="w-3.5 h-3.5" />{area}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-y bg-cream">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-[2.75rem] text-foreground">Frequently asked questions</h2>
          </FadeIn>
          <FadeIn delay={0.1}><div>{homeFaqs.map((f, idx) => <FaqItem key={idx} q={f.q} a={f.a} />)}</div></FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA — DARK ═══ */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06]"><AccentBlob className="w-full h-full text-accent" /></div>
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6 font-medium">Ready to make your move?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
              Whether you are buying your first home, selling your current one, or building a portfolio &mdash; a free consultation is the best place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-on-dark">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="btn-ghost-light"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
