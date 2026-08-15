import Hero from '@/components/Hero'
import CertBar from '@/components/CertBar'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Lifespan from '@/components/Lifespan'
import Products from '@/components/Products'
import Applications from '@/components/Applications'
import Testimonials from '@/components/Testimonials'
import FaqPreview from '@/components/FaqPreview'
import CTABand from '@/components/CTABand'

/* Halaman dibaca berurutan seperti lembar data:
   posisi → kepatuhan → masalah → mekanisme → masa pakai →
   katalog → penerapan → rekam jejak → tanya jawab → tindakan. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CertBar />
      <Problem />
      <HowItWorks />
      <Lifespan />
      <Products />
      <Applications />
      <Testimonials />
      <FaqPreview />
      <CTABand />
    </>
  )
}
