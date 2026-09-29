import React from 'react';

/* Kop halaman dalam bergaya lembar data: panel navy bergrid, kode dokumen,
   label, judul, dan pengantar. Dipakai halaman produk, catatan teknis, dan
   legal supaya semua halaman dalam terbaca sebagai satu berkas. */
export default function PageHead({
  doc,
  eyebrow,
  title,
  intro,
  meta,
  children,
}: {
  doc: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="bp-grid-dark absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16 md:pt-44 md:pb-20 lg:px-10">
        <p className="mb-6 flex items-center gap-3">
          <span className="tech inline-flex h-[1.375rem] items-center justify-center border border-lime/45 px-1.5 text-[0.6875rem] font-semibold text-lime">
            {doc}
          </span>
          <span aria-hidden="true" className="h-px w-7 bg-lime/45" />
          <span className="tech-label font-semibold text-lime">{eyebrow}</span>
        </p>
        <h1 className="max-w-3xl text-[2rem] leading-[1.1] font-extrabold sm:text-[2.75rem] lg:text-[3.2rem]">{title}</h1>
        {meta && <p className="tech-label mt-5 text-white/70">{meta}</p>}
        {intro && <p className="mt-6 max-w-2xl leading-relaxed text-white/80">{intro}</p>}
        {children}
      </div>
    </header>
  );
}
