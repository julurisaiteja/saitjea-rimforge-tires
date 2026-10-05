'use client';
import Link from 'next/link';
import { useState } from 'react';
import { brand } from '../lib/brand';
import { useCart } from '../lib/cart';
import AIAssistant from './AIAssistant';

export default function Shell({ children }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '/shop', label: brand.nav[0] },
    { href: '/special', label: brand.nav[1] },
    { href: '/special#bay', label: brand.nav[2] },
    { href: '/#services', label: brand.nav[3] },
  ];

  return (
    <div data-diamond="batch-1" data-style={brand.styleMarker}>
      <a href="#main" className="skip-link">Skip to catalog</a>
      <div className="offer-banner swiss-shell-banner">
        {brand.offer.code} · {brand.offer.label} — {brand.offer.detail}
      </div>
      <header className="swiss-shell-header">
        <div className="swiss-shell-grid">
          <Link href="/" className="swiss-shell-mark">
            <span className="swiss-label">Bay / SYS</span>
            {brand.name}
          </Link>
          <nav className="swiss-shell-nav" aria-label="Primary">
            {nav.map((item, i) => (
              <Link key={item.label} href={item.href} className="swiss-shell-link">
                <span className="swiss-label">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="swiss-shell-actions">
            <Link href="/cart" className="swiss-shell-cart">
              Cart{count > 0 ? ` / ${count}` : ''}
            </Link>
            <button
              type="button"
              className="swiss-shell-burger md:hidden"
              aria-expanded={open}
              aria-controls="swiss-mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Nav'}
            </button>
          </div>
        </div>
        {open && (
          <div id="swiss-mobile-nav" className="swiss-shell-drawer">
            {nav.map((item, i) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                <span className="swiss-label">{String(i + 1).padStart(2, '0')}</span> {item.label}
              </Link>
            ))}
            <Link href="/cart" onClick={() => setOpen(false)}>
              Cart{count > 0 ? ` / ${count}` : ''}
            </Link>
          </div>
        )}
      </header>
      <main id="main">{children}</main>
      <footer className="swiss-shell-footer">
        <div className="swiss-shell-footer-grid">
          <div className="swiss-cell">
            <p className="swiss-label">Spec</p>
            <p className="swiss-brand" style={{ fontSize: '2.5rem' }}>
              {brand.name}
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{brand.description}</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 px-3 py-2 text-sm outline-none bg-surface"
                style={{ border: '1px solid var(--muted)', borderRadius: 0, fontFamily: 'ui-monospace,monospace' }}
                placeholder="Email / bay alerts"
                aria-label="Email for bay alerts"
              />
              <button type="submit" className="btn-brand !py-2">
                Join
              </button>
            </form>
          </div>
          <div className="swiss-cell">
            <p className="swiss-label mb-3">Index</p>
            <div className="space-y-2 text-sm" style={{ fontFamily: 'ui-monospace,monospace' }}>
              <div><Link href="/shop">Tire catalog</Link></div>
              <div><Link href="/special">Fitment desk</Link></div>
              <div><Link href="/checkout">Checkout</Link></div>
              <div><Link href="/#reviews">Field notes</Link></div>
            </div>
          </div>
          <div className="swiss-cell">
            <p className="swiss-label mb-3">Garage</p>
            <div className="space-y-2 text-sm text-muted" style={{ fontFamily: 'ui-monospace,monospace' }}>
              <div>Mount & balance / 60–90m</div>
              <div>Fitment accuracy 99%</div>
              <div>Rimforge Shield / 3yr</div>
            </div>
          </div>
        </div>
        <p className="swiss-shell-legal">Demo garage · no real payments · {brand.name}</p>
      </footer>
      <div className="sticky-cta md:hidden">
        <Link href="/shop" className="btn-brand !py-2 !px-4 text-sm">
          Tires
        </Link>
        <Link href="/special" className="btn-ghost !py-2 !px-4 text-sm">
          Fitment
        </Link>
      </div>
      <AIAssistant />
    </div>
  );
}
