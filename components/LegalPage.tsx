import Link from 'next/link';
import React from 'react';

/* Halaman legal memakai tata rupa lembar data yang sama seperti halaman lain,
   supaya identitas tidak terputus saat pengunjung menelusuri tautan footer. */
export default function LegalPage({
  doc,
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  doc: string;
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <div className="bg-white">
      <header className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="bp-grid-dark absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-36 pb-16 md:pt-44 md:pb-20">
          <p className="mb-6 flex items-center gap-3">
            <span className="tech inline-flex h-[1.375rem] items-center justify-center border border-lime/45 px-1.5 text-[0.6875rem] font-semibold text-lime">
              {doc}
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-lime/45" />
            <span className="tech-label font-semibold text-lime">{eyebrow}</span>
          </p>
          <h1 className="text-[2rem] leading-[1.1] font-extrabold sm:text-[2.75rem]">{title}</h1>
          <p className="tech-label mt-5 text-white/50">Terakhir diperbarui: {updated}</p>
          <p className="mt-6 leading-relaxed text-white/72">{intro}</p>
        </div>
      </header>

      <div className="relative overflow-hidden bg-paper py-16 md:py-24">
        <div aria-hidden="true" className="bp-grid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <div className="border-t-2 border-ink/12 bg-white">
            {sections.map((s, i) => (
              <section key={s.h} className="border-b border-ink/12 px-6 py-7 sm:px-8">
                <h2 className="mb-3 flex gap-4 text-base font-bold text-ink sm:text-lg">
                  <span className="tech mt-1 shrink-0 text-[0.6875rem] font-semibold text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.h}
                </h2>
                <p className="pl-[2.25rem] text-sm leading-relaxed text-slate-600">{s.p}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 border-l-2 border-brand bg-white px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-slate-700">
              Ada pertanyaan mengenai ketentuan di atas?
            </p>
            <Link
              href="/kontak"
              className="shrink-0 text-sm font-bold text-brand underline-offset-4 hover:underline"
            >
              Hubungi kami →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
