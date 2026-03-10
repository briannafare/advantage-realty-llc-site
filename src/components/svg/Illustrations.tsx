'use client';

export function OrganicBlob({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ob" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C2571A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#3B7A57" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <path fill="url(#ob)" d="M250,50 C350,50 450,120 440,230 C430,340 380,430 270,450 C160,470 60,400 50,280 C40,160 150,50 250,50Z" />
    </svg>
  );
}

export function CrosshatchPattern({ className = '' }: { className?: string }) {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} opacity={0.08 + i * 0.01}>
          <line x1={i * 20} y1="0" x2={i * 20} y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1={i * 20} x2="160" y2={i * 20} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

export function LeafAccent({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M40 10 C60 30 70 60 60 90 C50 110 30 115 20 100 C10 85 15 55 25 35 C30 25 35 15 40 10Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
      <path d="M40 20 L40 100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
