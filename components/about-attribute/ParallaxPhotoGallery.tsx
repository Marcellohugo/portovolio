'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const photos = [
  { src: '/images/img1.jpg', size: 22 },
  { src: '/images/img3.jpg', size: 22 },
  { src: '/images/img4.jpg', size: 22 },
  { src: '/images/img5.jpg', size: 22 },
  { src: '/images/img6.jpg', size: 22 },
  { src: '/images/img7.jpg', size: 22 },
];

const positions = [
  { className: 'row-start-1 col-start-2', direction: 1 },
  { className: 'row-start-2 col-start-1', direction: 1 },
  { className: 'row-start-2 col-start-3', direction: 1 },
  { className: 'row-start-3 col-start-1', direction: -1 },
  { className: 'row-start-3 col-start-3', direction: -1 },
  { className: 'row-start-4 col-start-2', direction: -1 },
];

export default function ParallaxPhotoGallery() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const scale = isMobile ? 0.4 : isTablet ? 0.7 : 1;
  const logoSize = isMobile ? 300 : isTablet ? 500 : 800;

  return (
    <section className="relative mt-20 overflow-hidden sm:mt-28 sm:py-5 lg:mt-32">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-3 grid-rows-4 gap-x-0 gap-y-40 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-20 lg:gap-x-20 lg:gap-y-20 sm:px-0">
          {photos.map((photo, index) => {
            const { direction } = positions[index];

            return <ParallaxPhoto key={photo.src} photo={photo} index={index} scale={scale} direction={direction} scrollY={scrollY} />;
          })}
        </div>
      </div>

      <div className="relative z-10 flex h-[95vh] items-center justify-center">
        <motion.div
          initial={{ scale: isMobile ? 0.8 : isTablet ? 0.9 : 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo1.png"
            alt="Logo"
            width={logoSize}
            height={logoSize}
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 800px"
            className="pointer-events-none drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxPhoto({
  photo,
  index,
  scale,
  direction,
  scrollY,
}: {
  photo: { src: string; size: number };
  index: number;
  scale: number;
  direction: number;
  scrollY: number;
}) {
  const className = positions[index].className;

  return (
    <motion.div style={{ y: 0.2 * scrollY * direction }} className={className}>
      <div
        style={{ width: `${photo.size * scale}rem`, height: `${photo.size * scale}rem` }}
        className="relative overflow-hidden rounded-xl"
      >
        <Image
          src={photo.src}
          alt={`photo-${index}`}
          fill
          sizes="(max-width: 640px) 8.8rem, (max-width: 1024px) 15.4rem, 22rem"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
