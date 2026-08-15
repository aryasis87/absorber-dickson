import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi EthyleneAbsorber — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
};

const sections = [
  { h: 'Informasi yang Kami Kumpulkan', p: 'Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, dan nomor telepon saat Anda menghubungi kami atau mengisi formulir permintaan sample. Kami juga mengumpulkan data teknis dasar (seperti jenis perangkat dan halaman yang dikunjungi) untuk meningkatkan layanan.' },
  { h: 'Penggunaan Informasi', p: 'Informasi digunakan untuk merespons permintaan Anda, menyusun perhitungan dosis, memproses pesanan, serta meningkatkan kualitas produk dan layanan kami. Kami tidak menjual data pribadi Anda kepada pihak ketiga.' },
  { h: 'Cookie', p: 'Situs kami dapat menggunakan cookie untuk mengingat preferensi dan menganalisis lalu lintas. Anda dapat menonaktifkan cookie melalui pengaturan browser, meski beberapa fitur mungkin tidak berfungsi optimal.' },
  { h: 'Keamanan Data', p: 'Kami menerapkan langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses, pengungkapan, atau perubahan yang tidak sah.' },
  { h: 'Hak Anda', p: 'Anda berhak mengakses, memperbarui, atau meminta penghapusan data pribadi Anda kapan saja dengan menghubungi kami melalui halaman Kontak.' },
  { h: 'Perubahan Kebijakan', p: 'Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini beserta tanggal pembaruan terbaru.' },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      doc="P1"
      eyebrow="Dokumen Legal"
      title="Kebijakan Privasi"
      updated="6 Juli 2026"
      intro="Privasi Anda penting bagi kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan situs dan layanan kami."
      sections={sections}
    />
  );
}
