import React from 'react';

/* Register kepatuhan — inti dari konsep "Korporat".
   Semua nomor di bawah ini nyata dan konsisten dengan halaman FAQ. */
const registry = [
  {
    authority: 'BPOM RI',
    code: 'NA18191100273',
    scope: 'Registrasi peredaran Indonesia',
  },
  {
    authority: 'FDA',
    code: '21 CFR 175.300',
    scope: 'Pelapis kontak pangan',
  },
  {
    authority: 'Uni Eropa',
    code: 'EU No 10/2011',
    scope: 'Material plastik kontak pangan',
  },
  {
    authority: 'JHOSPA',
    code: 'Jepang',
    scope: 'Standar higiene kemasan',
  },
];

const CertBar = () => {
  return (
    <section
      aria-label="Sertifikasi dan kepatuhan standar"
      className="relative border-y border-ink/12 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,0.62fr)_minmax(0,2.38fr)]">
          {/* Label register */}
          <div className="flex items-center gap-4 border-ink/10 py-7 lg:border-r lg:pr-10">
            <span
              aria-hidden="true"
              className="hatch hidden h-12 w-1.5 shrink-0 lg:block"
              style={{ ['--hatch' as string]: 'rgb(25 135 84 / 0.55)' }}
            />
            <div>
              <p className="tech-label font-semibold text-brand">Terdaftar &amp; memenuhi</p>
              <p className="mt-1.5 text-sm leading-snug font-bold text-ink">
                Empat otoritas keamanan pangan
              </p>
            </div>
          </div>

          {/* Baris register */}
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {registry.map((r) => (
              <div
                key={r.authority}
                className="border-t border-ink/10 py-5 sm:py-7 lg:border-t-0 lg:border-l lg:px-7 lg:first:border-l-0 [&:nth-child(odd)]:pr-4 lg:[&:nth-child(odd)]:pr-7"
              >
                <dt className="text-sm font-bold text-ink">{r.authority}</dt>
                <dd className="tech mt-1.5 text-[0.8125rem] font-semibold text-brand">{r.code}</dd>
                <dd className="tech-label mt-2 leading-[1.5] text-slate-400">{r.scope}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CertBar;
