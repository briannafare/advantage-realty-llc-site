'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/data';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { const h = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); }; document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white/70 backdrop-blur-sm'}`}>
      <div className="max-w-site mx-auto px-5 md:px-8 flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-sage flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-heading text-lg font-extrabold leading-none">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-[16px] font-bold text-fg leading-none block">Advantage</span>
            <span className="text-[10px] text-muted tracking-[0.12em] uppercase font-body">Realty LLC</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => link.children ? (
            <div key={link.href} className="relative" ref={ddRef}>
              <button onClick={() => setDd(!dd)} onMouseEnter={() => setDd(true)}
                className="flex items-center gap-1 text-[13px] font-medium text-fg/70 hover:text-sage transition-colors">
                {link.label} <ChevronDown className={`w-3 h-3 transition-transform ${dd ? 'rotate-180' : ''}`} />
              </button>
              {dd && (
                <div onMouseLeave={() => setDd(false)} className="absolute top-full left-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-border py-2 z-50">
                  {link.children.map(c => <Link key={c.href} href={c.href} onClick={() => setDd(false)} className="block px-4 py-2.5 text-sm text-fg/70 hover:text-sage hover:bg-sage-50 transition-colors rounded-lg mx-1">{c.label}</Link>)}
                </div>
              )}
            </div>
          ) : (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium text-fg/70 hover:text-sage transition-colors">{link.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="text-[13px] font-medium text-muted hover:text-sage transition-colors flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{siteConfig.phone}</a>
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-[13px]">Free Consultation</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Menu">{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-white z-40 overflow-y-auto">
          <nav className="flex flex-col p-8 gap-0.5">
            <Link href="/" onClick={() => setOpen(false)} className="text-xl font-heading font-bold py-3 border-b border-border/40 hover:text-sage">Home</Link>
            {navLinks.map(link => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="text-xl font-heading font-bold py-3 border-b border-border/40 hover:text-sage block">{link.label}</Link>
                {link.children?.map(c => <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-base text-muted py-2.5 pl-4 border-b border-border/20 hover:text-sage block">{c.label}</Link>)}
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone.replace(/\D/g,'')}`} className="btn-secondary justify-center"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">Schedule a Free Consultation</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
