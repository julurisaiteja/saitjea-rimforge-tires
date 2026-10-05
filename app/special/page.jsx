'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../../lib/brand';
export default function SpecialPage(){
  const [year,setYear]=useState('2022'); const [make,setMake]=useState('Toyota'); const [model,setModel]=useState('Camry');
  const [sidewall,setSidewall]=useState('225/45R17'); const [bay,setBay]=useState('Bay A — Express');
  const [slot,setSlot]=useState('Tomorrow 10:30 AM');
  const matches=useMemo(()=>products.filter(p=>(p.size||'').includes(sidewall.split('R')[1]||'')||p.size===sidewall).slice(0,4),[sidewall]);
  const list=matches.length?matches:products.slice(0,4);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <header className="special-chrome reveal">
        <p className="swiss-label">Desk / 03</p>
        <h1 className="swiss-brand mt-2" style={{ fontSize: 'clamp(2.2rem,6vw,3.8rem)' }}>Fitment & bay booking</h1>
        <div className="swiss-rule" />
        <p className="text-muted text-sm">Vehicle size finder + install appointment.</p>
      </header>
      <div id="bay" />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card-soft p-6 space-y-3">
          <p className="font-semibold">Vehicle</p>
          <div className="grid grid-cols-3 gap-2">
            <input value={year} onChange={e=>setYear(e.target.value)} className="rounded-xl px-3 py-2 bg-surface" style={{border:'1px solid color-mix(in srgb, var(--muted) 30%, transparent)'}} placeholder="Year" />
            <input value={make} onChange={e=>setMake(e.target.value)} className="rounded-xl px-3 py-2 bg-surface" style={{border:'1px solid color-mix(in srgb, var(--muted) 30%, transparent)'}} placeholder="Make" />
            <input value={model} onChange={e=>setModel(e.target.value)} className="rounded-xl px-3 py-2 bg-surface" style={{border:'1px solid color-mix(in srgb, var(--muted) 30%, transparent)'}} placeholder="Model" />
          </div>
          <p className="font-semibold pt-2">Or sidewall</p>
          <input value={sidewall} onChange={e=>setSidewall(e.target.value.toUpperCase())} className="w-full rounded-xl px-3 py-2 bg-surface" style={{border:'1px solid color-mix(in srgb, var(--muted) 30%, transparent)'}} />
          <p className="text-sm text-muted">{year} {make} {model} → showing fits near {sidewall}</p>
        </div>
        <div className="card-soft p-6 space-y-3">
          <p className="font-semibold">Book install bay</p>
          <div className="flex flex-wrap gap-2">{['Bay A — Express','Bay B — Alignment','Bay C — Truck'].map(b=><button key={b} onClick={()=>setBay(b)} className="chip" style={{outline:bay===b?'2px solid var(--brand)':undefined}}>{b}</button>)}</div>
          <div className="flex flex-wrap gap-2">{['Today 3:00 PM','Tomorrow 10:30 AM','Tomorrow 2:00 PM','Sat 9:00 AM'].map(s=><button key={s} onClick={()=>setSlot(s)} className="chip" style={{outline:slot===s?'2px solid var(--brand)':undefined}}>{s}</button>)}</div>
          <p className="text-sm">Held (demo): <strong>{bay}</strong> · {slot}</p>
          <Link href="/shop" className="btn-brand">Pick tires for this bay</Link>
        </div>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{list.map(p=>(
        <Link key={p.id} href={`/product/${p.id}`} className="card-soft overflow-hidden">
          <img src={p.img} alt="" className="aspect-video w-full object-cover" />
          <div className="p-3"><p className="font-semibold text-sm">{p.name}</p><p className="text-xs text-muted">{p.size} · ${p.price}</p></div>
        </Link>))}</div>
    </div>
  );
}
