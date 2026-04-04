import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import React from 'react';
import styles from './media.module.css';

const galleryImages = [
  {
    src: '/assets/weeks/week-05/screenshot_01.webp',
    alt: 'Screenshot del juego - Semana 5',
    title: 'Prototipo Inicial',
  },
  {
    src: '/assets/weeks/week-05/screenshot_02.webp',
    alt: 'Screenshot del juego - Mecánicas',
    title: 'Mecánicas Base',
  },
  {
    src: '/assets/weeks/week-05/screenshot_03.webp',
    alt: 'Screenshot del juego - Combate',
    title: 'Sistema de Combate',
  },
  {
    src: '/assets/weeks/week-05/screenshot_04.webp',
    alt: 'Screenshot del juego - Boss',
    title: 'Encuentro con Jefe',
  },
];

export default function MediaPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <section className={styles.heroSection}>
          <h1>Media</h1>
          <p>Galería de imágenes, vídeos y contenido multimedia de Fallen Souls</p>
        </section>

        <section className={styles.container}>
          <Gallery images={galleryImages} title="Galería de Screenshots" />
        </section>

        <section className={styles.videosSection}>
          <div className={styles.container}>
            <h2>Vídeos Destacados</h2>
            <div className={styles.videoGrid}>
              <div className={styles.videoCard}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Trailer de Fallen Souls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Trailer Oficial</h3>
              </div>
              <div className={styles.videoCard}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Gameplay de Fallen Souls"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Gameplay en Vivo</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
