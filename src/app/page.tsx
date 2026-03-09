'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Home, TrendingUp, BarChart2, ShieldCheck, Star, Calendar, Globe, Heart, Users, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Quote } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { siteConfig, services, testimonials, homeFaqs, trustStats, processSteps, whyAdvantage, serviceAreas } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = { Home, TrendingUp, BarChart2, ShieldCheck, Star, Calendar, Globe, Heart, Users };

/* ──────────────────── ANIMATED COUNTER ──────────────────── */
function Counter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * numericValue);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {value.includes('+') ? '+' : ''}{suffix}
    </span>
  );
}

/* ──────────────────── FAQ ITEM ──────────────────── */
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

/* ──────────────────── TESTIMONIAL CAROUSEL ──────────────────── */
function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const len = testimonials.length;
  const next = () => setActive((active + 1) % len);
  const prev = () => setActive((active - 1 + len) % len);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-10 border border-border"
        >
          <Quote className="w-8 h-8 text-accent/30 mb-4" />
          <p className="text-foreground text-lg leading-relaxed mb-6">&ldquo;{testimonials[active].text}&rdquo;</p>
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">{testimonials[active].name.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{testimonials[active].name}</p>
              <p className="text-xs text-muted">{testimonials[active].context}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-accent fill-accent" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt transition-colors" aria-label="Previous testimonial">
          <ChevronLeft className="w-5 h-5 text-muted" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === active ? 'bg-accent w-6' : 'bg-border'}`} aria-label={`Go to testimonial ${i + 1}`} />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface-alt transition-colors" aria-label="Next testimonial">
          <ChevronRight className="w-5 h-5 text-muted" />
        </button>
      </div>
    </div>
  );
}

/* ──────────────────── HOMEPAGE ──────────────────── */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="pb-20 lg:pb-0">
      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden pt-[72px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/60 via-background to-background" />
        {/* Decorative shapes with parallax */}
        <motion.div style={{ y: blob1Y }} className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <motion.div style={{ y: blob2Y }} className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-site relative z-10 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-border text-sm text-muted mb-6">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span>5.0 Google Rating &bull; English &bull; Oromo &bull; Amharic</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] text-foreground mb-6">
                  Clackamas County Real Estate{' '}
                  <span className="text-primary">&mdash; Your Language, Your Goals, Your Advantage</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.35}>
                <p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
                  Buy, sell, or invest with a team that knows every neighborhood in Clackamas County &mdash; and speaks English, Oromo, and Amharic.
                </p>
              </FadeIn>
              <FadeIn delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary text-base">
                    Schedule a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn-secondary text-base">
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Hero Image */}
            <FadeIn delay={0.3} direction="right" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/team/team-group.jpg"
                  alt="Advantage Realty LLC team - Clackamas Oregon real estate agents"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-6 py-4 border border-border">
                <p className="text-2xl font-heading font-bold text-primary">16+</p>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section className="bg-primary py-8 md:py-10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Star;
              return (
                <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                  <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                    <Counter value={stat.value} />
                  </p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">How We Help You Win in Real Estate</h2>
            <p className="text-muted max-w-2xl mx-auto">Whether you&apos;re buying your first home, selling for top dollar, or building an investment portfolio &mdash; we&apos;ve done it hundreds of times.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <StaggerItem key={service.title}>
                  <Link href={service.href} className="group block bg-white border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════ WHY ADVANTAGE ═══════ */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Why Families and Investors Choose Advantage</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyAdvantage.map((item) => {
              const Icon = iconMap[item.icon] || Heart;
              return (
                <StaggerItem key={item.title} className="text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════ PROCESS STEPS ═══════ */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Getting Started Is Simple</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-xl font-heading font-bold mb-6 mx-auto shadow-[0_4px_14px_rgba(212,145,92,0.3)]">
                  {step.number}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                )}
                <h3 className="font-heading text-lg text-foreground mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS CAROUSEL ═══════ */}
      <section className="section-padding bg-surface-alt overflow-hidden">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ═══════ LEAD MAGNET CTA ═══════ */}
      <section className="section-padding bg-gradient-to-br from-accent-light via-accent-light/50 to-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Free: The Portland Homebuyer&apos;s Playbook</h2>
              <p className="text-muted mb-4 leading-relaxed">A step-by-step guide to buying your first home in the Portland metro area &mdash; from pre-approval to closing day.</p>
              <p className="text-muted text-sm mb-6">Inside you&apos;ll find neighborhood breakdowns, a closing cost calculator, inspection tips, and the exact timeline to expect.</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-4">
                  <input type="text" name="first_name" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" />
                  <input type="hidden" name="source" value="website-home-lead-magnet" />
                  <button className="btn-primary w-full justify-center text-base">
                    Download the Free Guide
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-muted text-center">Your information stays with us. No spam, ever.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICE AREAS ═══════ */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Proudly Serving Clackamas County & SE Portland</h2>
            <p className="text-muted max-w-2xl mx-auto mb-10">
              Advantage Realty LLC is a real estate brokerage based in Clackamas, Oregon, serving buyers, sellers, and investors across the greater Portland metro area.
            </p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <StaggerItem key={area}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-alt border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default">
                  <MapPin className="w-3.5 h-3.5" />
                  {area}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="section-padding bg-surface-alt">
        <div className="container-site max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              {homeFaqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-site relative z-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">Ready to Make Your Move?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Whether you&apos;re buying your first home, selling your current one, or exploring investment opportunities &mdash; we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-on-dark text-base">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-body font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/60">
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
