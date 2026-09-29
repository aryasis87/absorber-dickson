/* ============================================================================
   "Catatan Teknis" — tulisan konsep Lembar Data. Setiap catatan bernomor
   dokumen (CT-01…), punya ringkasan temuan, dan memakai tabel bila angka
   lebih jelas dari kalimat. Isinya pengetahuan pascapanen umum ditambah
   fakta produk dari brief.
   ========================================================================== */

export type Blok =
  | { p: string }
  | { h: string }
  | { daftar: string[] }
  | { tabel: { kepala: string[]; baris: string[][] } }
  | { rumus: string; ket: string }
  | { catatan: string }

export type Catatan = {
  slug: string
  kode: string
  judul: string
  ringkas: string
  menit: number
  temuan: string[]
  isi: Blok[]
}

export const CATATAN: Catatan[] = [
  {
    slug: 'dosis-kontainer-20-dan-40-ft',
    kode: 'CT-01',
    judul: 'Menghitung dosis untuk kontainer 20 ft dan 40 ft',
    ringkas: 'Dasarnya volume ruang, bukan berat muatan. Contoh perhitungan untuk tiga ukuran kontainer standar.',
    menit: 5,
    temuan: [
      'Hitung dari volume ruang tertutup, bukan dari tonase muatan.',
      'Satu sachet untuk 1–2 m³; ambil batas rapat (1 m³) untuk komoditas penghasil etilen tinggi.',
      'Pelayaran 3–4 minggu selesai sebelum batas 30 hari masa efektif.',
    ],
    isi: [
      { p: 'Pertanyaan yang paling sering kami terima dari eksportir bukan "apakah produknya bekerja", melainkan "berapa banyak". Jawabannya selalu dimulai dari hal yang sama: berapa meter kubik udara yang harus dijaga, bukan berapa ton buah yang dimuat.' },
      { h: 'Rumus dasar' },
      { rumus: 'Jumlah sachet = Volume ruang (m³) ÷ cakupan per sachet (1–2 m³)', ket: 'Hasilnya berupa rentang. Batas atas (÷ 1) untuk komoditas penghasil etilen tinggi atau muatan yang padat; batas bawah (÷ 2) untuk komoditas yang lebih tenang.' },
      { h: 'Contoh untuk kontainer standar' },
      {
        tabel: {
          kepala: ['Kontainer', 'Volume dalam', 'Rentang sachet', 'Contoh komoditas'],
          baris: [
            ['20 ft', '± 33 m³', '17 – 33', 'Mangga, alpukat → ambil batas atas'],
            ['40 ft', '± 67 m³', '34 – 67', 'Campuran sayur buah → di tengah'],
            ['40 ft HC', '± 76 m³', '38 – 76', 'Bunga potong → batas atas'],
          ],
        },
      },
      { h: 'Kenapa bukan berat muatan' },
      { p: 'Etilen adalah gas; ia mengisi seluruh ruang, termasuk celah di atas dan di sela peti. Dua kontainer dengan tonase sama bisa memiliki volume udara berbeda tergantung cara penyusunan. Karena itu dasar perhitungannya selalu volume.' },
      { h: 'Yang menggeser angka' },
      { daftar: ['Jenis komoditas: buah klimakterik (mangga, pisang, alpukat) melepas etilen jauh lebih banyak.', 'Kepadatan susunan: susunan rapat mengurangi sirkulasi, sachet perlu disebar lebih merata.', 'Lama perjalanan: di atas 30 hari, rencanakan titik penggantian atau gunakan kondisi ideal (hingga 45 hari).'] },
      { catatan: 'Angka di atas adalah titik awal. Untuk muatan Anda, tim teknis menyusun perhitungan dosis tertulis berdasarkan komoditas, volume, dan rute — dokumen yang sama bisa dilampirkan saat audit buyer.' },
    ],
  },
  {
    slug: 'membaca-indikator-warna',
    kode: 'CT-02',
    judul: 'Membaca indikator warna: kapan sachet harus diganti',
    ringkas: 'Kalium permanganat berubah dari ungu ke cokelat saat bereaksi dengan etilen. Cara membacanya di setiap titik transit.',
    menit: 4,
    temuan: [
      'Ungu berarti masih aktif; cokelat merata berarti jenuh.',
      'Periksa di titik yang bisa dijangkau: gudang, pelabuhan muat, dan tujuan.',
      'Sachet yang sudah dibuka tidak bisa disimpan kembali.',
    ],
    isi: [
      { p: 'Warna indikator bukan hiasan. Kalium permanganat (KMnO₄) berwarna ungu pekat; saat bereaksi dengan etilen ia teroksidasi menjadi mangan dioksida yang berwarna cokelat. Artinya, perubahan warna adalah bukti kimia bahwa sachet sedang bekerja.' },
      { h: 'Empat tahap yang terlihat' },
      {
        tabel: {
          kepala: ['Tahap', 'Warna', 'Artinya', 'Tindakan'],
          baris: [
            ['Baru dibuka', 'Ungu pekat merata', 'Daya serap penuh', '—'],
            ['Bekerja', 'Ungu dengan bintik cokelat', 'Reaksi berjalan normal', 'Lanjutkan'],
            ['Mendekati jenuh', 'Lebih banyak cokelat dari ungu', 'Sisa daya kecil', 'Siapkan pengganti'],
            ['Jenuh', 'Cokelat merata', 'Tidak lagi menyerap', 'Ganti'],
          ],
        },
      },
      { h: 'Di mana memeriksanya' },
      { daftar: ['Gudang pengepakan, sebelum kontainer disegel.', 'Pelabuhan muat, bila ada pemeriksaan.', 'Gudang tujuan — catat warnanya sebagai data untuk pengiriman berikutnya.'] },
      { p: 'Pada pengapalan laut 3–4 minggu, sachet umumnya tiba masih di tahap "bekerja" atau "mendekati jenuh". Bila di tujuan sudah cokelat merata, itu tanda dosis perlu dinaikkan untuk rute yang sama.' },
      { catatan: 'Sertakan foto indikator saat mengajukan klaim mutu — warna adalah bukti yang paling cepat dibaca oleh kedua pihak.' },
    ],
  },
  {
    slug: 'penghasil-dan-peka-etilen',
    kode: 'CT-03',
    judul: 'Etilen dan komoditas: siapa penghasil, siapa yang peka',
    ringkas: 'Beberapa komoditas melepas banyak etilen, yang lain rusak karenanya. Mencampur keduanya tanpa perlindungan adalah kesalahan paling mahal.',
    menit: 5,
    temuan: [
      'Apel, pir, alpukat, dan pisang yang mulai matang adalah penghasil etilen tinggi.',
      'Sayuran daun, brokoli, mentimun, dan bunga potong sangat peka.',
      'Jangan mencampur keduanya dalam satu ruang tanpa penyerap etilen.',
    ],
    isi: [
      { p: 'Etilen tidak hanya mematangkan buah yang melepasnya, tetapi juga semua komoditas lain di ruang yang sama. Satu kotak pisang yang matang di kontainer campuran bisa menguningkan brokoli dan membuat kelopak bunga rontok sebelum tiba.' },
      { h: 'Peta umum' },
      {
        tabel: {
          kepala: ['Komoditas', 'Melepas etilen', 'Peka terhadap etilen'],
          baris: [
            ['Apel, pir, alpukat', 'Sangat tinggi', 'Tinggi'],
            ['Pisang yang mulai matang, melon', 'Tinggi', 'Sedang–tinggi'],
            ['Mangga, tomat, pepaya', 'Sedang', 'Sedang–tinggi'],
            ['Jeruk, anggur, stroberi', 'Rendah', 'Rendah'],
            ['Brokoli, sayuran daun, mentimun', 'Sangat rendah', 'Tinggi'],
            ['Bunga potong', 'Sangat rendah', 'Sangat tinggi'],
          ],
        },
      },
      { h: 'Tiga aturan penataan' },
      { daftar: ['Pisahkan penghasil tinggi dari komoditas yang sangat peka bila memungkinkan.', 'Bila harus satu ruang, pasang penyerap etilen dengan dosis batas atas.', 'Untuk komoditas yang peka tapi tidak melepas etilen, penyerap tetap berguna karena etilen bisa datang dari sumber lain di gudang.'] },
      { h: 'Etilen dan kelembapan itu dua masalah' },
      { p: 'Penyerap etilen tidak menahan uap air, dan desiccant tidak menahan etilen. Pada pengapalan laut, keduanya sering diperlukan bersama: EthyleneAbsorber di dalam peti, Container Dry® II di dinding kontainer.' },
      { catatan: 'Peta di atas adalah gambaran umum dari literatur pascapanen. Untuk varietas dan kondisi panen tertentu, uji sample di fasilitas Anda tetap yang paling bisa diandalkan.' },
    ],
  },
]

export const catatanBySlug = (slug: string) => CATATAN.find((c) => c.slug === slug)
