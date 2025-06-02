'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoConfig {
  src: string;
  size: number; // in rem
}

const photoConfigs: PhotoConfig[] = [
  { src: '/images/img1.jpg', size: 18 },
  { src: '/images/img3.jpg', size: 18 },
  { src: '/images/img4.jpg', size: 20 },
  { src: '/images/img5.jpg', size: 20 },
  { src: '/images/img6.jpg', size: 18 },
  { src: '/images/img7.jpg', size: 18 },
];

export default function ParallaxPhotoGallery() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect viewport size (mobile, tablet, desktop)
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

  // Kecepatan parallax untuk tiap foto
  const speedVariants = [0.03, -0.04, 0.02, -0.03, 0.04, -0.02];

  // Sesuaikan skala foto untuk mobile / tablet
  const sizeFactor = isMobile
    ? 0.40      // misal di mobile, foto diperkecil 40%
    : isTablet
    ? 0.90      // di tablet, foto diperkecil 70%
    : 1;        // di desktop full ukuran

  // Ukuran logo berdasarkan device
  const logoSize = isMobile
    ? 300       // mobile
    : isTablet
    ? 500       // tablet
    : 800;      // desktop

  // Initial scale logo
  const initialLogoScale = isMobile
    ? 0.8
    : isTablet
    ? 0.9
    : 1;

  return (
    <section className="relative overflow-hidden sm:py-5">
      {/* Parallax photos grid */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-0 sm:gap-4 max-w-[1200px] w-full p-0 sm:p-4">
          {photoConfigs.map((cfg, index) => (
            <motion.div
              key={index}
              style={{ y: offsetY * speedVariants[index % speedVariants.length] }}
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
          ))}
        </div>
      </div>

      {/* Central logo */}
      <div className="relative z-10 flex justify-center items-center h-[90vh]">
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
