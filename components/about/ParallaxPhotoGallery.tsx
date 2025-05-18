'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '/public/images/logo.png';

const imageList = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
];

export default function ParallaxPhotoGallery() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallax = (index: number) => {
    const direction = index % 2 === 0 ? 1 : -1;
    return `translateY(${(offsetY * 0.05 * direction).toFixed(2)}px)`;
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-black overflow-hidden py-20">
      {/* Foto-foto */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 relative z-10 max-w-5xl">
          {imageList.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg"
              style={{
                transform: parallax(i),
                transition: 'transform 0.2s ease-out',
              }}
            >
              <Image
                src={src}
                alt={`photo-${i}`}
                width={180}
                height={180}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Logo Tengah */}
      <div className="z-20">
        <Image
          src={Logo}
          alt="Logo"
          width={280}
          height={280}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}
