import HomeClient from "./home.ciient";

// Fungsi ini sekarang async untuk menggunakan 'await'
export default async function Home() {
  // Tambahkan jeda buatan selama 700 milidetik (0.7 detik)
  // Ini akan memastikan CatLoader tampil cukup lama saat navigasi ke halaman utama
  await new Promise((resolve) => setTimeout(resolve, 700));

  return <HomeClient />;
}