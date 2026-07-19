'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const photos = [
  '/images/img1.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
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
  const { scrollY } = useScroll();

  return (
    <section className="relative mt-20 overflow-hidden sm:mt-28 sm:py-5 lg:mt-32">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-3 grid-rows-4 gap-x-2 gap-y-40 px-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-20 lg:gap-x-16 lg:gap-y-20">
          {photos.map((photo, index) => {
            const { direction } = positions[index];

            return <ParallaxPhoto key={photo} photo={photo} index={index} direction={direction} scrollY={scrollY} />;
          })}
        </div>
      </div>

      <div className="relative z-10 flex h-[95vh] items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo1.png"
            alt="Logo"
            width={800}
            height={800}
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 800px"
            className="pointer-events-none h-auto w-[min(80vw,800px)] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ParallaxPhoto({
  photo,
  index,
  direction,
  scrollY,
}: {
  photo: string;
  index: number;
  direction: number;
  scrollY: MotionValue<number>;
}) {
  const className = positions[index].className;
  const y = useTransform(scrollY, (value) => 0.2 * value * direction);

  return (
    <motion.div style={{ y }} className={className}>
      <div className="relative h-[min(27vw,22rem)] w-[min(27vw,22rem)] overflow-hidden rounded-xl">
        <Image
          src={photo}
          alt={`photo-${index}`}
          fill
          sizes="27vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
