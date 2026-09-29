'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { KONTAINER } from '@/lib/produk';

/* Kalkulator dosis EthyleneAbsorber: volume ruang ÷ cakupan 1–2 m³ per
   sachet. Hasilnya rentang, lalu disempitkan menurut jenis komoditas.
   Angka akhir tetap harus dikonfirmasi lewat perhitungan dosis tertulis. */

const KOMODITAS = [
  { id: 'tinggi', nama: 'Penghasil etilen tinggi', contoh: 'apel, pir, alpukat, pisang matang', bagi: 1 },
  { id: 'sedang', nama: 'Sedang / campuran', contoh: 'mangga, tomat, pepaya, muatan campur', bagi: 1.5 },
  { id: 'rendah', nama: 'Penghasil rendah', contoh: 'jeruk, anggur — atau hanya peka etilen', bagi: 2 },
];

export default function KalkulatorDosis() {
  const [kontainer, setKontainer] = useState('20');
  const [manual, setManual] = useState('');
  const [komoditas, setKomoditas] = useState('sedang');

  const k = KONTAINER.find((x) => x.id === kontainer);
  const volume = kontainer === 'manual' ? Math.max(0, Number(manual.replace(',', '.')) || 0) : k!.m3;
  const kom = KOMODITAS.find((x) => x.id === komoditas)!;
  const min = Math.ceil(volume / 2);
  const max = Math.ceil(volume / 1);
  const saran = Math.ceil(volume / kom.bagi);

  return (
    <div className="corner-frame relative border border-ink/15 bg-white">
      <div className="flex items-center justify-between border-b border-ink/15 bg-paper px-6 py-3">
        <span className="tech-label font-semibold text-ink">Kalkulator dosis · EA-01</span>
        <span className="tech-label text-slate-600">1 sachet / 1–2 m³</span>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
        <div className="space-y-7">
          <fieldset>
            <legend className="tech-label mb-3 font-semibold text-slate-600">1 · Ruang</legend>
            <div className="grid grid-cols-2 gap-2">
              {[...KONTAINER.map((x) => ({ id: x.id, nama: x.nama, ket: `± ${x.m3} m³` })), { id: 'manual', nama: 'Isi sendiri', ket: 'm³' }].map((x) => (
                <label key={x.id} className={`cursor-pointer border px-3 py-2.5 text-sm transition-colors ${kontainer === x.id ? 'border-brand bg-mint' : 'border-ink/15 hover:border-ink/40'}`}>
                  <input type="radio" name="kontainer" value={x.id} checked={kontainer === x.id} onChange={() => setKontainer(x.id)} className="sr-only" />
                  <span className="block font-semibold text-ink">{x.nama}</span>
                  <span className="tech block text-xs text-slate-600">{x.ket}</span>
                </label>
              ))}
            </div>
            {kontainer === 'manual' && (
              <div className="mt-3">
                <label htmlFor="volume" className="tech-label mb-2 block text-slate-600">Volume ruang tertutup (m³)</label>
                <input
                  id="volume"
                  inputMode="decimal"
                  value={manual}
                  onChange={(e) => setManual(e.target.value)}
                  placeholder="mis. 12"
                  className="tech w-full border border-ink/20 px-3 py-2.5 text-ink focus:border-brand focus:outline-none"
                />
              </div>
            )}
          </fieldset>

          <fieldset>
            <legend className="tech-label mb-3 font-semibold text-slate-600">2 · Komoditas</legend>
            <div className="space-y-2">
              {KOMODITAS.map((x) => (
                <label key={x.id} className={`flex cursor-pointer gap-3 border px-3 py-2.5 transition-colors ${komoditas === x.id ? 'border-brand bg-mint' : 'border-ink/15 hover:border-ink/40'}`}>
                  <input type="radio" name="komoditas" value={x.id} checked={komoditas === x.id} onChange={() => setKomoditas(x.id)} className="mt-1 accent-[#157a4b]" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{x.nama}</span>
                    <span className="block text-xs text-slate-600">{x.contoh}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div aria-live="polite" className="flex flex-col justify-between border border-ink/15 bg-ink p-6 text-white">
          <div>
            <p className="tech-label text-lime">Perkiraan kebutuhan</p>
            <p className="mt-4 flex items-baseline gap-3">
              <span className="tech text-6xl font-semibold">{volume ? saran : '—'}</span>
              <span className="tech-label text-white/70">sachet</span>
            </p>
            <p className="tech mt-3 text-sm text-white/80">
              Rentang umum: {volume ? `${min} – ${max}` : '—'} sachet
            </p>
            <dl className="mt-6 space-y-2 border-t border-white/15 pt-5 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-white/70">Volume</dt><dd className="tech">{volume || 0} m³</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-white/70">Rumus</dt><dd className="tech">{volume || 0} ÷ {kom.bagi} m³</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-white/70">Masa efektif</dt><dd className="tech">30 hari (maks. 45)</dd></div>
            </dl>
          </div>
          <Link href="/kontak" className="mt-8 inline-flex items-center justify-center bg-lime px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-white">
            Minta perhitungan tertulis →
          </Link>
        </div>
      </div>
      <p className="border-t border-ink/15 px-6 py-3 text-xs leading-relaxed text-slate-600">
        Perkiraan awal. Kepadatan susunan dan lama perjalanan dapat menggeser angka — perhitungan dosis tertulis dari tim
        teknis yang menjadi acuan.
      </p>
    </div>
  );
}
