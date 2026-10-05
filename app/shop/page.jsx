'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { brand, products } from '../../lib/brand';
import { useCart } from '../../lib/cart';

export default function ShopPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [sort, setSort] = useState('featured');
  const { toggleWish, wish } = useCart();
  useEffect(() => {
    try {
      const c = new URLSearchParams(window.location.search).get('cat');
      if (c) setCat(c);
    } catch {}
  }, []);
  const cats = ['All', ...Array.from(new Set(products.map((p) => p.cat)))];
  const list = useMemo(() => {
    let out = products.filter((p) => {
      const hay = (p.name + ' ' + p.blurb + ' ' + (p.tags || []).join(' ') + ' ' + (p.size || '')).toLowerCase();
      return (cat === 'All' || p.cat === cat) && hay.includes(q.toLowerCase());
    });
    if (sort === 'price-asc') out = [...out].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') out = [...out].sort((a, b) => b.price - a.price);
    if (sort === 'rating') out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, cat, sort]);

  return (
    <div className="swiss-shop">
      <header className="swiss-shop-head reveal">
        <p className="swiss-label">Catalog / 02 · {brand.offer.code}</p>
        <h1 className="swiss-brand" style={{ fontSize: 'clamp(2.5rem,7vw,4.5rem)' }}>
          Tire index
        </h1>
        <div className="swiss-rule" />
        <p className="text-sm text-muted max-w-xl">
          Industrial Swiss table with live filters — size, season, rating. Open a SKU for fitment detail.
        </p>
      </header>

      <div className="swiss-shop-filters reveal reveal-delay-1">
        <div className="swiss-filter-cell">
          <label className="swiss-label" htmlFor="swiss-q">
            Search
          </label>
          <input
            id="swiss-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="SKU, size, tag…"
            className="swiss-shop-input"
          />
        </div>
        <div className="swiss-filter-cell">
          <p className="swiss-label mb-2">Season / class</p>
          <div className="swiss-filter-chips">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`chip${cat === c ? ' swiss-chip-on' : ''}`}
                style={cat === c ? { background: 'var(--brand)', borderColor: 'var(--brand)', color: '#0a0a0a' } : undefined}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="swiss-filter-cell">
          <label className="swiss-label" htmlFor="swiss-sort">
            Sort
          </label>
          <select
            id="swiss-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="swiss-shop-input"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      <div className="swiss-shop-table-wrap reveal reveal-delay-2">
        <table className="swiss-table swiss-shop-table">
          <thead>
            <tr>
              <th>Wish</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Size</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="stagger">
            {list.map((p) => (
              <tr key={p.id}>
                <td>
                  <button type="button" onClick={() => toggleWish(p.id)} aria-label="Wishlist" className="swiss-wish">
                    {wish.includes(p.id) ? '●' : '○'}
                  </button>
                </td>
                <td>
                  <div className="swiss-sku-cell">
                    <img src={p.img} alt="" />
                    <div>
                      <Link href={`/product/${p.id}`} className="font-semibold">
                        {p.name}
                      </Link>
                      <p className="text-muted" style={{ fontSize: '.65rem', marginTop: '.25rem' }}>
                        {p.blurb}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{p.cat}</td>
                <td>{p.size || '—'}</td>
                <td>★ {p.rating}</td>
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
      </div>
      {!list.length && <p className="mt-8 swiss-label">No SKUs match — reset filters.</p>}
    </div>
  );
}
