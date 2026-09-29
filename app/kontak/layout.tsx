// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Permintaan Sample',
  description:
    'Ajukan permintaan sample EthyleneAbsorber: sebutkan komoditas, volume ruang, dan rute — tim teknis menyiapkan perhitungan dosis tertulis.',
  alternates: { canonical: 'https://absorber-dickson.vercel.app/kontak' },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
