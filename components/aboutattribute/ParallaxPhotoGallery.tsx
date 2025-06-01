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

  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const speedVariants = [0.03, -0.04, 0.02, -0.03, 0.04, -0.02];
  const sizeFactor = isMobile ? 0.40 : 1; // adjust scale for mobile

  return (
    <section className="relative overflow-hidden sm:py-5 ">
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
                style={{ width: `${cfg.size * sizeFactor}rem`, height: `${cfg.size * sizeFactor}rem` }}
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
          initial={{ scale: isMobile ? 0.8 : 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo1.png"
            alt="Logo"
            width={isMobile ? 300 : 800}
            height={isMobile ? 300 : 800}
            className="pointer-events-none drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
