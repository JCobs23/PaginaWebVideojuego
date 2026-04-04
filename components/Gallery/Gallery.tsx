'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex ?? 0) === images.length - 1 ? 0 : (selectedIndex ?? 0) + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedIndex(null);
  };

  return (
    <>
      <div className={styles.galleryContainer}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${image.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedIndex(index);
                }
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <p className={styles.imageTitle}>{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className={styles.lightboxOverlay} onClick={() => setSelectedIndex(null)}></div>
          <div className={styles.lightboxContent}>
            <button
              className={styles.lightboxClose}
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar galería"
              type="button"
            >
              ?
            </button>
            <button
              className={styles.lightboxPrev}
              onClick={handlePrevious}
              aria-label="Imagen anterior"
              type="button"
            >
              ‹
            </button>
            <div className={styles.lightboxImageContainer}>
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>
            <button
              className={styles.lightboxNext}
              onClick={handleNext}
              aria-label="Siguiente imagen"
              type="button"
            >
              ›
            </button>
            <p className={styles.lightboxCaption}>{images[selectedIndex].title}</p>
          </div>
        </div>
      )}
    </>
  );
}
