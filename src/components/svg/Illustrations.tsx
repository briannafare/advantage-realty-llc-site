'use client';

export function DotGrid({ className = '' }: { className?: string }) {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={9 + col * 18} cy={9 + row * 18} r="2" fill="currentColor" opacity={0.15 + Math.random() * 0.15} />
        ))
      )}
    </svg>
  );
}

export function SoftBlob({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FBDAB" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#E8795A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3D6B5E" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path fill="url(#blobGrad)" d="M420,300Q400,420,300,440Q200,460,140,380Q80,300,140,200Q200,100,300,120Q400,140,430,220Q460,300,420,300Z" />
    </svg>
  );
}

export function WaveDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <path d="M0,40 C320,80 480,0 720,40 C960,80 1120,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
    </svg>
  );
}
