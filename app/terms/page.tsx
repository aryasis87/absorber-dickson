import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat & ketentuan penggunaan situs dan layanan EthyleneAbsorber.',
};

const sections = [
  { h: 'Penerimaan Ketentuan', p: 'Dengan mengakses dan menggunakan situs ini, Anda menyetujui untuk terikat oleh Syarat & Ketentuan berikut. Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan kami.' },
  { h: 'Penggunaan Layanan', p: 'Anda setuju menggunakan situs dan produk kami hanya untuk tujuan yang sah. Anda tidak diperkenankan menyalahgunakan, mengganggu, atau mencoba mengakses sistem kami tanpa izin.' },
  { h: 'Produk & Pemesanan', p: 'Kami berupaya menampilkan informasi produk seakurat mungkin. Ketersediaan, harga, dan spesifikasi dapat berubah sewaktu-waktu. Konfirmasi pesanan akan dikomunikasikan sebelum transaksi diselesaikan.' },
  { h: 'Hak Kekayaan Intelektual', p: 'Seluruh konten, logo, dan materi di situs ini adalah milik kami dan dilindungi hukum. Dilarang menyalin atau mendistribusikan tanpa izin tertulis.' },
  { h: 'Batasan Tanggung Jawab', p: 'Layanan disediakan "sebagaimana adanya". Kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs, sejauh diizinkan oleh hukum yang berlaku.' },
  { h: 'Perubahan Ketentuan', p: 'Kami dapat memperbarui ketentuan ini kapan saja. Versi terbaru akan selalu tersedia di halaman ini.' },
];

export default function TermsPage() {
  return (
    <LegalPage
      doc="P2"
      eyebrow="Dokumen Legal"
      title="Syarat & Ketentuan"
      updated="6 Juli 2026"
      intro="Ketentuan berikut mengatur penggunaan situs dan layanan EthyleneAbsorber oleh Anda. Mohon dibaca sebelum menggunakan layanan kami."
      sections={sections}
    />
  );
}
