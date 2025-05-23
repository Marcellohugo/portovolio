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

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const speedVariants = [0.03, -0.04, 0.02, -0.03, 0.04, -0.02];

  return (
    <section className="relative overflow-hidden py-5">
      {/* Parallax photos grid */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 max-w-[1200px] w-full p-6">
          {photoConfigs.map((cfg, index) => (
            <motion.div
              key={index}
              style={{ y: offsetY * speedVariants[index % speedVariants.length] }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            >
              <div
                style={{ width: `${cfg.size}rem`, height: `${cfg.size}rem` }}
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
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo1.png"
            alt="Logo"
            width={800}
            height={800}
            className="pointer-events-none drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
