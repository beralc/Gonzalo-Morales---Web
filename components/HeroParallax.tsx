'use client';

import { useEffect, useState } from 'react';

export default function HeroParallax({
  imageSrc,
  alt
}: {
  imageSrc: string;
  alt: string;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
    </div>
  );
}
