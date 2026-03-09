'use client';
import Link from 'next/link';
import Image from 'next/image';
import { UserCheck, Globe, TrendingUp, Heart, ArrowRight, Phone, Mail } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/sections/Animate';
import { team, siteConfig } from '@/lib/data';

const values = [
  { icon: UserCheck, title: 'Personal Attention', desc: 'You work with one of us from first meeting to closing. No handoffs, no rotating agents, no call centers.' },
  { icon: Globe, title: 'Multilingual Service', desc: "We serve Portland's diverse community in English, Oromo, and Amharic \u2014 because understanding matters." },
  { icon: TrendingUp, title: 'Investment Expertise', desc: "From rental properties to care home facilities to 1031 exchanges \u2014 we help you build wealth, not just buy houses." },
  { icon: Heart, title: 'Community First', desc: "We live here. We volunteer here. We believe real estate should build stronger communities, not just commissions." },
];

export function AboutPageClient() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/30 via-background to-background" />
        <div className="container-site relative z-10 py-16 md:py-24 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground mb-6">Meet the Team Behind Advantage Realty</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">We&apos;re a small team on purpose. Three experienced agents. One shared mission: help our community build wealth through real estate &mdash; in the language and culture they&apos;re most comfortable with.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Our Story</h2>
            <div className="prose text-muted leading-relaxed space-y-4">
              <p>Advantage Realty LLC was founded on a simple idea: real estate works better when your agent truly understands your goals, your culture, and your community.</p>
              <p>Based in Clackamas, Oregon, our team has spent over 16 years helping families and investors across the Portland metro area. We serve buyers, sellers, and investors &mdash; with a special focus on Portland&apos;s East African community, where we provide full-service real estate support in Oromo and Amharic.</p>
              <p>We also carved out a niche nobody else was serving: care home investment consulting. Our knowledge of ADA compliance and Oregon&apos;s care facility requirements has helped investors build profitable portfolios in one of the state&apos;s fastest-growing real estate sectors.</p>
              <p>We&apos;re not a franchise. We&apos;re not a tech platform. We&apos;re three people who are really good at this and genuinely care about the outcome.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-surface-alt">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">Meet the Team</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/4] relative">
                    <Image src={member.image} alt={`${member.name}, ${member.role} at Advantage Realty LLC`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="space-y-2 text-sm">
                      <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-muted hover:text-primary transition-colors"><Phone className="w-3.5 h-3.5" />{member.phone}</a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-muted hover:text-primary transition-colors"><Mail className="w-3.5 h-3.5" />{member.email}</a>
                    </div>
                    {member.languages.length > 1 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {member.languages.map((lang) => (
                          <span key={lang} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{lang}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <FadeIn className="text-center mb-14"><h2 className="font-heading text-3xl md:text-4xl text-foreground">What We Stand For</h2></FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-5 mx-auto"><v.icon className="w-7 h-7 text-accent" /></div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Let&apos;s Talk About Your Goals</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">Whether you&apos;re buying, selling, or investing &mdash; a free consultation is the best place to start.</p>
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
