'use client';

export function HouseOutline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M60 8L8 50h14v40h76V50h14L60 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <rect x="45" y="60" width="16" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="72" y="52" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="28" y="52" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function KeyIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 24l18 18M36 36l6-6M38 38l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChartUpIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="28" width="8" height="16" rx="1" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="16" y="20" width="8" height="24" rx="1" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="28" y="12" width="8" height="32" rx="1" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="40" y="4" width="4" height="40" rx="1" fill="currentColor" opacity="0.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 6l12 8 12-4 16-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 4L6 14v12c0 11 8 20 18 22 10-2 18-11 18-22V14L24 4z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccentBlob({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="currentColor" d="M45.2,-57.8C55.9,-48.2,59.8,-30.6,63.4,-12.5C67,5.6,70.3,24.2,62.8,37.2C55.3,50.2,37,57.6,19.3,61.3C1.5,65,-15.7,65,-30.1,58.2C-44.5,51.4,-56.2,37.8,-62.4,22C-68.6,6.1,-69.4,-12.1,-62.3,-26.1C-55.2,-40.1,-40.3,-50,-25.4,-57.8C-10.5,-65.5,4.4,-71.2,18.9,-69.3C33.5,-67.4,47.8,-57.8,45.2,-57.8Z" transform="translate(100 100)" />
    </svg>
  );
}

export function MapPinCluster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30 35c0-11 9-20 20-20s20 9 20 20c0 15-20 30-20 30S30 50 30 35z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="33" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M70 25c0-8 6.5-15 15-15s15 7 15 15c0 11-15 22-15 22S70 36 70 25z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" opacity="0.6" />
      <circle cx="85" cy="23" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M10 45c0-6 5-11 11-11s11 5 11 11c0 8-11 16-11 16S10 53 10 45z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" opacity="0.4" />
    </svg>
  );
}
