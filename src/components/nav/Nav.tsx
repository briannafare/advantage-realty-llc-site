'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-heading text-xl font-bold">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-lg text-primary font-bold leading-none block">Advantage</span>
            <span className="text-[11px] text-muted font-body tracking-wide uppercase">Realty LLC</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="btn-secondary justify-center">
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
                Schedule a Free Consultation
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted text-center">English &bull; Oromo &bull; Amharic</p>
          </nav>
        </div>
      )}
    </header>
  );
}
