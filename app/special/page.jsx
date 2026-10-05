'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../../lib/brand';
const catalog={
  '2022-toyota-camry':['225/45R17','205/55R16'],
  '2020-honda-crv':['235/55R18','225/65R17'],
  '2019-f150':['275/65R18','265/70R17'],
};
export default function SpecialPage(){
  const [ym,setYm]=useState('2022'); const [make,setMake]=useState('toyota'); const [model,setModel]=useState('camry');
  const [sidewall,setSidewall]=useState('');
  const key=`${ym}-${make}-${model}`;
  const sizes=useMemo(()=>{
    if(sidewall.trim()) return [sidewall.trim().toUpperCase()];
    return catalog[key]||['225/45R17'];
  },[key,sidewall]);
  const matches=products.filter(p=>sizes.includes((p.size||'').toUpperCase())||sizes.some(s=> (p.size||'').includes(s.split('R')[0])));
  const list=matches.length?matches:products.filter(p=>p.cat!=='Value').slice(0,4);
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <header className="special-chrome reveal">
        <p className="swiss-label">Fitment desk</p>
        <h1 className="swiss-brand mt-2" style={{fontSize:'clamp(2rem,5vw,3.5rem)'}}>Size finder</h1>
        <p className="text-muted mt-3 text-sm">Year / make / model or paste a sidewall code.</p>
      </header>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        <input className="card-soft px-3 py-2" value={ym} onChange={e=>setYm(e.target.value)} placeholder="Year" />
        <input className="card-soft px-3 py-2" value={make} onChange={e=>setMake(e.target.value)} placeholder="Make" />
        <input className="card-soft px-3 py-2" value={model} onChange={e=>setModel(e.target.value)} placeholder="Model" />
        <input className="card-soft px-3 py-2" value={sidewall} onChange={e=>setSidewall(e.target.value)} placeholder="225/45R17" />
      </div>
      <p className="swiss-label mt-6">Matches · {sizes.join(' · ')}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {list.map(p=>(
          <Link key={p.id} href={`/product/${p.id}`} className="card-soft p-4 flex gap-3">
            <img src={p.img} alt="" className="h-20 w-20 object-cover" />
            <div><p className="font-semibold">{p.name}</p><p className="text-sm text-muted">{p.size} · ${p.price}</p></div>
          </Link>
        ))}
      </div>
      <Link href="/shop" className="btn-ghost mt-8 inline-flex">Browse full catalog</Link>
    </div>
  );
}
