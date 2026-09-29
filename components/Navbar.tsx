'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Masa Pakai', href: '/#masa-pakai' },
  { label: 'Katalog', href: '/produk' },
  { label: 'Catatan Teknis', href: '/catatan-teknis' },
  { label: 'FAQ', href: '/faq' },
]

const aktif = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : !href.startsWith('/#') && (pathname === href || pathname.startsWith(href + '/'))

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Kunci scroll & tutup dengan Escape saat laci mobile terbuka
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Tutup laci ketika rute berganti
  useEffect(() => setIsOpen(false), [pathname])

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Kop dokumen — nomor registrasi selalu terlihat, ini inti konsep korporat */}
      <div
        className={`hidden overflow-hidden bg-ink text-white/70 transition-[height,opacity] duration-300 md:block ${
          scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 lg:px-10">
          <p className="tech-label flex items-center gap-2.5">
            <span className="text-lime">REG. BPOM RI</span>
            <span className="text-white/85">NA18191100273</span>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <span>FDA 21 CFR 175.300</span>
            <span aria-hidden="true" className="h-3 w-px bg-white/20" />
            <span>EU No 10/2011</span>
          </p>
          <a
            href="tel:+628123456789"
            className="tech-label flex items-center gap-2 transition-colors hover:text-lime"
          >
            <Phone size={12} strokeWidth={2.5} />
            +62 812 3456 7890
          </a>
        </div>
      </div>

      {/* Baris navigasi utama */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-ink/10 bg-white/92 shadow-[0_1px_20px_rgba(0,60,92,0.07)] backdrop-blur-md'
            : 'border-transparent bg-white/85 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="EthyleneAbsorber — beranda">
            <BondMark />
            <span className="leading-none">
              <span className="block text-[1.0625rem] font-extrabold tracking-tight text-ink">
                Ethylene<span className="font-normal text-brand">Absorber</span>
              </span>
              <span className="tech-label mt-1 block text-[0.5625rem] text-slate-500">
                PT Dickson Synergy
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={aktif(pathname, item.href) ? 'page' : undefined}
                className={`group relative px-3 py-2 text-[0.8125rem] font-semibold transition-colors hover:text-ink ${aktif(pathname, item.href) ? 'text-ink' : 'text-slate-600'}`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 bottom-1 h-[2px] origin-left bg-brand transition-transform duration-300 group-hover:scale-x-100 ${aktif(pathname, item.href) ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </Link>
            ))}
            <Link
              href="/kontak"
              className="ml-3 inline-flex items-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-[0.8125rem] font-bold text-white transition-colors duration-300 hover:bg-brand-deep"
            >
              Minta Sample
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </nav>

          <button
            className="-mr-2 p-2 text-ink lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Buka menu"
            aria-expanded={isOpen}
          >
            <Menu size={22} />
          </button>
        </div>
        {/* Rel penggaris tipis — motif ukur yang mengikat seluruh halaman */}
        <div aria-hidden="true" className="tick-rail -mb-px h-1 text-ink opacity-20" />
      </div>

      {/* Laci mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={panelRef}
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
                <span className="tech-label font-semibold text-slate-500">Daftar Isi</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="-mr-2 p-2 text-ink"
                  aria-label="Tutup menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-2" aria-label="Navigasi mobile">
                {NAV.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 border-b border-ink/8 py-4 text-base font-bold text-ink transition-colors hover:text-brand"
                  >
                    <span className="tech text-[0.6875rem] font-semibold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-ink/10 p-6">
                <Link
                  href="/kontak"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-sm bg-brand py-3.5 text-sm font-bold text-white"
                >
                  Minta Sample Gratis
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <p className="tech-label mt-4 text-center text-slate-500">
                  REG. BPOM RI NA18191100273
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

/** Lambang: ikatan rangkap C=C pada molekul etilena, dibingkai potongan diagonal. */
function BondMark() {
  return (
    <span
      className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-ink"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 72%, 78% 100%, 0 100%)' }}
      aria-hidden="true"
    >
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <circle cx="4" cy="7" r="2.6" fill="#8CCF42" />
        <circle cx="18" cy="7" r="2.6" fill="#8CCF42" />
        <path d="M5.6 5.2h10.8M5.6 8.8h10.8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  )
}
