'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

export function AboutPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
        <div className="container-site relative z-10 py-16 md:py-24 text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-4">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.05] text-white mb-6 font-medium">Three agents. One mission. <span className="text-accent">Your advantage.</span></h1>
            <p className="text-white/60 text-lg leading-relaxed">We are a small team on purpose. Every client gets personal attention from an experienced agent who knows this market cold.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground mb-6">Our story</h2>
            <div className="text-muted leading-relaxed space-y-4 text-[15px]">
              <p>Advantage Realty LLC was built on a simple idea: real estate works better when your agent truly understands your goals, your community, and your market.</p>
              <p>Based in Clackamas, Oregon, our team has spent over 16 years helping families and investors across the Portland metro. We serve buyers, sellers, and investors — with deep expertise in Clackamas County neighborhoods and a specialized niche in care home investment consulting.</p>
              <p>We also serve Portland&apos;s East African community with full support in Oromo and Amharic — because navigating the biggest financial decision of your life should not require a translator.</p>
              <p>We are not a franchise. We are not a tech platform. We are three people who are very good at this and care about the outcome.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site">
          <FadeIn className="mb-14"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">The Team</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">Meet your agents</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(m => (
              <StaggerItem key={m.name}>
                <div className="group bg-cream rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image src={m.image} alt={`${m.name}, ${m.role} at Advantage Realty LLC`} fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground">{m.name}</h3>
                    <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
                    <p className="text-muted text-[15px] leading-relaxed mb-4">{m.bio}</p>
                    <div className="space-y-1.5 text-sm">
                      <a href={`tel:${m.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-muted hover:text-accent transition-colors"><Phone className="w-3.5 h-3.5" />{m.phone}</a>
                      <a href={`mailto:${m.email}`} className="flex items-center gap-2 text-muted hover:text-accent transition-colors"><Mail className="w-3.5 h-3.5" />{m.email}</a>
                    </div>
                    {m.languages.length > 1 && (
                      <div className="flex gap-1.5 mt-3">{m.languages.map(l => <span key={l} className="px-2 py-0.5 rounded bg-primary/5 text-primary text-xs font-medium">{l}</span>)}</div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-site">
          <FadeIn className="mb-14"><p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Our Values</p><h2 className="font-heading text-3xl md:text-[2.5rem] text-foreground">What we stand for</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Personal Attention', d: 'Same agent, start to finish. No handoffs, no call centers.' },
              { t: 'Niche Expertise', d: 'Care home consulting, 1031 exchanges, investment strategy.' },
              { t: 'Local Knowledge', d: '16+ years in Clackamas County. We know every micro-market.' },
              { t: 'Community First', d: 'We live here. We volunteer here. Real estate should strengthen communities.' },
            ].map(v => (
              <StaggerItem key={v.t}>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg text-foreground mb-2">{v.t}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6 font-medium">Let&apos;s talk about your goals</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-on-dark">Schedule a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-ghost-light"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
