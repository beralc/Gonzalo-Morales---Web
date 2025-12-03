'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';
import LazyImage from './LazyImage';
import { Artwork } from '@/lib/getArtworks';

interface GalleryProps {
  artworks: Artwork[];
}

export default function Gallery({ artworks }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % artworks.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + artworks.length) % artworks.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.map((artwork, index) => (
          <button
            key={artwork.id}
            onClick={() => openLightbox(index)}
            className="group rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-square">
              <LazyImage
                src={artwork.path}
                alt={artwork.filename}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          imageSrc={artworks[selectedIndex].path}
          imageAlt={artworks[selectedIndex].filename}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
