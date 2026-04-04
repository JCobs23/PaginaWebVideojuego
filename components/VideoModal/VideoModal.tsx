'use client';

import React, { useEffect, useRef } from 'react';
import styles from './VideoModal.module.css';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label="Reproductor de vídeo"
      ref={modalRef}
      tabIndex={-1}
    >
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar"
          type="button"
        >
          ?
        </button>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Trailer de Fallen Souls"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
