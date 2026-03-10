import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="text-8xl font-heading font-extrabold text-sage-100 mb-4">404</p>
        <h1 className="font-heading text-3xl font-bold text-fg mb-4">Page not found</h1>
        <p className="text-muted mb-8">This page doesn&apos;t exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
