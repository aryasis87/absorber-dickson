import React from 'react';
import { SectionHead } from '@/components/ui';

const stats = [
  { value: '18+', label: 'Tahun di solusi industri' },
  { value: '120+', label: 'Klien manufaktur & ekspor' },
  { value: '9', label: 'Sektor industri dilayani' },
  { value: '48 jam', label: 'Respons permintaan sample' },
];

const quotes = [
  {
    quote:
      'Sebelumnya kami selalu menyisihkan anggaran untuk klaim buah lewat matang di pelabuhan tujuan. Sejak sachet dipasang per peti, klaim itu turun drastis dan pembeli berhenti menawar harga di menit akhir.',
    name: 'Ir. Hendra Wijaya',
    role: 'Kepala Ekspor',
    company: 'Eksportir hortikultura, Surabaya',
  },
  {
    quote:
      'Yang membuat kami bertahan bukan cuma produknya, tapi lembar data dan sertifikatnya lengkap. Waktu audit buyer Jepang, semua dokumen yang diminta bisa kami serahkan hari itu juga.',
    name: 'Maria Sitanggang',
    role: 'Manajer Mutu',
    company: 'Cold storage, Medan',
  },
];

const Testimonials = () => {
  return (
    <section id="bukti" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Pita angka perusahaan */}
        <dl className="mb-20 grid grid-cols-2 border-y-2 border-ink/12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-8 ${i % 2 === 1 ? '' : 'border-r border-ink/10'} ${
                i < 2 ? 'border-b border-ink/10 lg:border-b-0' : ''
              } lg:border-r lg:last:border-r-0`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="tech block text-3xl font-semibold tracking-tight text-brand md:text-[2.25rem]">
                  {s.value}
                </span>
                <span className="tech-label mt-2.5 block leading-[1.5] text-slate-500">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <SectionHead
          no="06"
          eyebrow="Rekam Jejak"
          title="Dinilai dari yang tidak jadi rusak"
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="corner-frame flex flex-col border border-ink/12 bg-paper p-8 md:p-9"
              style={{ ['--corner' as string]: 'rgb(25 135 84 / 0.5)' }}
            >
              <blockquote className="mb-7 text-[0.95rem] leading-relaxed text-slate-700">
                {q.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-ink/12 pt-5">
                <span className="tech flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-sm font-semibold text-lime">
                  {q.name
                    .split(' ')
                    .filter((w) => /^[A-Z]/.test(w))
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div>
                  <div className="text-sm font-bold text-ink">{q.name}</div>
                  <div className="tech-label mt-1 text-slate-500">
                    {q.role} · {q.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="tech-label mt-8 leading-[1.6] text-slate-400">
          Kutipan di atas adalah ilustrasi skenario penggunaan untuk keperluan purwarupa desain.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
