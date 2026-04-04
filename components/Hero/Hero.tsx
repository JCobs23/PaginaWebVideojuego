'use client';

import React, { useState } from 'react';
import styles from './Hero.module.css';
import VideoModal from '@/components/VideoModal/VideoModal';

interface HeroProps {
  title: string;
  subtitle: string;
  videoUrl: string;
  poster: string;
}

export default function Hero({ title, subtitle, videoUrl, poster }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero} style={{ backgroundImage: `url(${poster})` }}>
        {/* Parallax Layers */}
        <div className={styles.parallaxContainer}>
          <div className={styles.parallaxLayer + ' ' + styles.layerFar}></div>
          <div className={styles.parallaxLayer + ' ' + styles.layerMid}></div>
          <div className={styles.parallaxLayer + ' ' + styles.layerNear}></div>
          <div className={styles.parallaxLayer + ' ' + styles.layerForeground}></div>
        </div>

        {/* Video Background */}
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="auto"
        >
          <source src="/assets/hero/hero_loop_01_1080.mp4" type="video/mp4" />
        </video>

        {/* Ink Overlay */}
        <div
          className={styles.inkOverlay}
          style={{ backgroundImage: 'url(/assets/textures/ink_overlay_2048.png)' }}
        ></div>

        {/* Vignette */}
        <div className={styles.vignette}></div>

        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <button
            className={styles.playButton}
            onClick={() => setIsModalOpen(true)}
            aria-label="Ver trailer"
          >
            <span className={styles.playIcon}>?</span>
            Ver Trailer
          </button>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        videoUrl={videoUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
