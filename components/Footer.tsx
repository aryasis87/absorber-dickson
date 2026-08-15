import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const navigasi = [
  { label: 'Beranda', href: '/' },
  { label: 'Latar Masalah', href: '/#masalah' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Masa Pakai', href: '/#masa-pakai' },
  { label: 'Katalog Produk', href: '/#produk' },
  { label: 'Penerapan', href: '/#penerapan' },
  { label: 'Pertanyaan Umum', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const standar = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
  ['Keberlanjutan', 'EcoTain®'],
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-deep text-white/70">
      <div aria-hidden="true" className="bp-grid-dark absolute inset-0" />
      <div aria-hidden="true" className="tick-rail absolute inset-x-0 top-0 h-2.5 text-lime" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)_minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Kop perusahaan */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 72%, 78% 100%, 0 100%)' }}
                aria-hidden="true"
              >
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <circle cx="4" cy="7" r="2.6" fill="#8CCF42" />
                  <circle cx="18" cy="7" r="2.6" fill="#8CCF42" />
                  <path
                    d="M5.6 5.2h10.8M5.6 8.8h10.8"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="leading-none">
                <span className="block text-[1.0625rem] font-extrabold tracking-tight text-white">
                  Ethylene<span className="font-normal text-lime">Absorber</span>
                </span>
                <span className="tech-label mt-1 block text-[0.5625rem] text-white/45">
                  PT Dickson Synergy
                </span>
              </span>
            </div>

            <p className="mb-7 max-w-xs text-sm leading-relaxed text-white/60">
              Pemasok ethylene absorber, silica gel, dan desiccant untuk industri pangan segar,
              manufaktur, dan ekspor di Indonesia.
            </p>

            <p className="tech-label leading-[1.7] text-white/40">
              Reg. BPOM RI
              <span className="mt-1 block text-lime">NA18191100273</span>
            </p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <h2 className="tech-label mb-5 border-b border-white/15 pb-3 font-semibold text-white">
              Navigasi
            </h2>
            <ul className="space-y-3">
              {navigasi.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-lime"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Register standar */}
          <div>
            <h2 className="tech-label mb-5 border-b border-white/15 pb-3 font-semibold text-white">
              Standar
            </h2>
            <dl className="space-y-3.5">
              {standar.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-white/70">{k}</dt>
                  <dd className="tech mt-0.5 text-[0.75rem] text-white/45">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kontak */}
          <div>
            <h2 className="tech-label mb-5 border-b border-white/15 pb-3 font-semibold text-white">
              Hubungi
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-lime" strokeWidth={2} />
                <div>
                  <span className="tech-label block text-white/40">Telepon</span>
                  <a
                    href="tel:+628123456789"
                    className="text-sm transition-colors hover:text-lime"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-lime" strokeWidth={2} />
                <div>
                  <span className="tech-label block text-white/40">Surel</span>
                  <a
                    href="mailto:info@ethyleneabsorber.com"
                    className="text-sm break-all transition-colors hover:text-lime"
                  >
                    info@ethyleneabsorber.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-lime" strokeWidth={2} />
                <div>
                  <span className="tech-label block text-white/40">Alamat</span>
                  <span className="text-sm leading-relaxed">
                    Jl. Teknologi No. 123, Bandung, Indonesia 40234
                  </span>
                </div>
              </li>
              <li className="flex gap-3.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-lime" strokeWidth={2} />
                <div>
                  <span className="tech-label block text-white/40">Jam Kerja</span>
                  <span className="text-sm leading-relaxed">
                    Sen–Jum 08.00–17.00 · Sab 08.00–12.00
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Kaki dokumen — halaman menandatangani dirinya seperti lembar data */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="tech-label text-white/40">
            © {tahun} PT Dickson Synergy · Dok. EA-KORP-01 · Rev. {tahun}.01
          </p>
          <div className="flex gap-7">
            <Link href="/privacy" className="text-sm transition-colors hover:text-lime">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-sm transition-colors hover:text-lime">
              Syarat Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
