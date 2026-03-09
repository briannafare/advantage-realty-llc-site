'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  {
    label: 'Invest',
    href: '/invest',
    children: [
      { label: 'Investment Overview', href: '/invest' },
      { label: 'Care Home Consulting', href: '/care-homes' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-5 md:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-white font-heading text-xl font-bold">A</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-lg text-primary font-bold leading-none block">Advantage</span>
            <span className="text-[11px] text-muted font-body tracking-wide uppercase">Realty LLC</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {mainLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdown(!dropdown)}
                  onMouseEnter={() => setDropdown(true)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`} />
                </button>
                {dropdown && (
                  <div
                    onMouseLeave={() => setDropdown(false)}
                    className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-border py-2"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdown(false)}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-surface-alt transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Free Consultation
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40">
          <nav className="flex flex-col p-8 gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">Home</Link>
            <Link href="/buy" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">Buy</Link>
            <Link href="/sell" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">Sell</Link>
            <Link href="/invest" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">Invest</Link>
            <Link href="/care-homes" onClick={() => setOpen(false)} className="text-lg text-accent font-medium py-2.5 border-b border-border/50 hover:text-accent-hover transition-colors pl-5">Care Home Consulting</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-xl font-heading text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors">Contact</Link>
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
