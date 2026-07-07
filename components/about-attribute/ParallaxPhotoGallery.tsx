'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoConfig {
  src: string;
  size: number; // in rem
}

// 6 foto (ditempatkan di 4 baris: baris 1 & 4 hanya 1 foto di tengah, baris 2 & 3 masing-masing 2 foto di kiri dan kanan)
const photoConfigs: PhotoConfig[] = [
  { src: '/images/img1.jpg', size: 22 }, // Row 1, Col 2
  { src: '/images/img3.jpg', size: 22 }, // Row 2, Col 1
  { src: '/images/img4.jpg', size: 22 }, // Row 2, Col 3
  { src: '/images/img5.jpg', size: 22 }, // Row 3, Col 1
  { src: '/images/img6.jpg', size: 22 }, // Row 3, Col 3
  { src: '/images/img7.jpg', size: 22 }, // Row 4, Col 2
];

export default function ParallaxPhotoGallery() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // 1. Tangkap scroll position (offsetY)
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Deteksi ukuran viewport untuk responsive scaling
  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      if (w <= 640) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (w <= 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // 3. Kecepatan parallax (sama untuk semua foto)
  const speed = 0.2;

  // 4. Sesuaikan skala foto berdasarkan device
  const sizeFactor = isMobile
    ? 0.40   // mobile: skala 40%
    : isTablet
    ? 0.70   // tablet: skala 90%
    : 1;     // desktop: 100%

  // 5. Ukuran logo berdasarkan device
  const logoSize = isMobile
    ? 300
    : isTablet
    ? 500
    : 800;

  // 6. Initial scale logo
  const initialLogoScale = isMobile
    ? 0.8
    : isTablet
    ? 0.9
    : 1;

  // 7. Penentuan posisi grid untuk setiap foto
  //    - index 0 → baris 1, kolom 2
  //    - index 1 → baris 2, kolom 1
  //    - index 2 → baris 2, kolom 3
  //    - index 3 → baris 3, kolom 1
  //    - index 4 → baris 3, kolom 3
  //    - index 5 → baris 4, kolom 2
  const gridPositions = [
    { rowStart: 1, colStart: 2 },
    { rowStart: 2, colStart: 1 },
    { rowStart: 2, colStart: 3 },
    { rowStart: 3, colStart: 1 },
    { rowStart: 3, colStart: 3 },
    { rowStart: 4, colStart: 2 },
  ];

  return (
    <section className="relative overflow-hidden sm:py-5">
      {/* Parallax photos grid */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/*
          • Grid dengan 3 kolom dan 4 baris.
          • Baris 1 & 4 hanya satu foto di tengah (col-start-2).
          • Baris 2 & 3 dua foto di kiri dan kanan (col-start-1 & col-start-3).
          • Gap-X dan Gap-Y diperbesar agar jarak antar baris lebih tinggi.
        */}
        <div className="grid grid-cols-3 grid-rows-4 gap-x-0 gap-y-40 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-20 lg:gap-x-20 lg:gap-y-20 max-w-[1200px] w-full sm:px-0">
          {photoConfigs.map((cfg, index) => {
            const { rowStart, colStart } = gridPositions[index];

            // Tentukan apakah foto termasuk "baris atas" (row 1 & 2) atau "baris bawah" (row 3 & 4)
            //   - Baris 1,2 (rowStart <= 2) → bergerak ke bawah
            //   - Baris 3,4 (rowStart >= 3) → bergerak ke atas
            const isTopHalf = rowStart <= 2;
            const directionMultiplier = isTopHalf ? 1 : -1;

            return (
              <motion.div
                key={index}
                className={`row-start-${rowStart} col-start-${colStart}`}
                style={{ y: offsetY * speed * directionMultiplier }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              >
                <div
                  style={{
                    width: `${cfg.size * sizeFactor}rem`,
                    height: `${cfg.size * sizeFactor}rem`,
                  }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={cfg.src}
                    alt={`photo-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Central logo */}
      <div className="relative z-10 flex justify-center items-center h-[95vh]">
        <motion.div
          initial={{ scale: initialLogoScale, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo1.png"
            alt="Logo"
            width={logoSize}
            height={logoSize}
            className="pointer-events-none drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
