'use client';
import Link from 'next/link';
import { brand, products } from '../lib/brand';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 2800);
    return () => clearInterval(t);
  }, []);
  const live =
    typeof brand.stats[0].value === 'number'
      ? brand.stats[0].value + (tick % 7)
      : brand.stats[0].value;

  const steps = [
    { n: '01', t: 'Size / fitment', d: 'Year-make-model or sidewall code → exact matches.' },
    { n: '02', t: 'Select set', d: 'Filter season, load, noise — open SKU for warranty.' },
    { n: '03', t: 'Book bay', d: 'Mount & balance in 60–90 minutes. Same-day slots.' },
  ];

  return (
    <>
      <section className="swiss-hero">
        <div className="swiss-hero-media">
          <video autoPlay muted loop playsInline poster={brand.poster}>
            <source src={brand.video} type="video/mp4" />
          </video>
        </div>
        <div className="swiss-hero-copy">
          <p className="swiss-label">Bay system / 01</p>
          <p className="swiss-brand">{brand.name}</p>
          <div className="swiss-rule" />
          <h1 className="text-xl md:text-2xl font-medium">{brand.tagline}</h1>
          <p className="mt-4 text-muted text-sm leading-relaxed">{brand.description}</p>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/special" className="btn-brand">
              Fitment desk
            </Link>
            <Link href="/shop" className="btn-ghost">
              Tire catalog
            </Link>
          </div>
          <p className="swiss-label mt-8">
            {brand.offer.code} · {brand.offer.label}
          </p>
        </div>
      </section>

      <section id="services" className="swiss-process reveal">
        <p className="swiss-label mb-4 px-4 md:px-6">Process / bay flow</p>
        <div className="swiss-grid">
          {steps.map((s) => (
            <div key={s.n} className="swiss-cell" style={{ gridColumn: 'span 4' }}>
              <p className="swiss-label">{s.n}</p>
              <p className="swiss-brand mt-2" style={{ fontSize: '1.75rem' }}>
                {s.t}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="film-strip swiss-film">
        {products.map((p) => (
          <Link key={p.id} href={`/product/${p.id}`} className="film-cell swiss-film-cell">
            <img src={p.img} alt={p.name} />
            <span>
              {p.name} · {p.size}
            </span>
          </Link>
        ))}
      </div>

      <section className="swiss-grid">
        {brand.stats.map((s, i) => (
          <div key={s.label} className="swiss-cell" style={{ gridColumn: 'span 4' }}>
            <p className="swiss-label">{String(i + 1).padStart(2, '0')}</p>
            <p className="swiss-brand" style={{ fontSize: '2.5rem' }}>
              {i === 0 ? live : s.value}
            </p>
            <p className="swiss-label mt-2">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="loyalty-band swiss-loyalty reveal">
        <div>
          <p className="swiss-label">Offer / mount package</p>
          <p className="swiss-brand mt-2" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            {brand.offer.code}
          </p>
          <p className="mt-2 text-sm">{brand.offer.label}</p>
        </div>
        <Link href="/shop" className="btn-brand">
          Apply to set of 4
        </Link>
      </section>

      <section className="px-4 py-10 md:px-6 max-w-6xl mx-auto">
        <p className="swiss-label mb-4">Catalog preview</p>
        <table className="swiss-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Category</th>
              <th>Size</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 5).map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.cat}</td>
                <td>{p.size || '—'}</td>
                <td>${p.price}</td>
                <td>
                  <Link href={`/product/${p.id}`} style={{ color: 'var(--brand)' }}>
                    OPEN
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/shop" className="btn-ghost mt-6 inline-flex">
          Full index
        </Link>
      </section>

      <section id="reviews" className="px-4 py-12 max-w-6xl mx-auto">
        <p className="swiss-label mb-4">Field notes</p>
        <div className="grid gap-4 md:grid-cols-2 stagger">
          {brand.reviews.map((r) => (
            <blockquote key={r.name} className="swiss-cell swiss-review">
              <p className="swiss-label">
                {r.name} · {r.stars}/5
              </p>
              <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
