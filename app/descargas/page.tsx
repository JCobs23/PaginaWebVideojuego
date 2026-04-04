import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import DownloadButton from '@/components/DownloadButton/DownloadButton';
import React from 'react';
import styles from './descargas.module.css';

const downloads = [
  {
    category: 'Press Kit',
    items: [
      {
        label: 'Press Kit Completo (ZIP)',
        href: '/assets/downloads/press-kit.zip',
      },
      {
        label: 'Logo - PNG (1024x1024)',
        href: '/assets/downloads/logo.png',
      },
      {
        label: 'Screenshots (RAR)',
        href: '/assets/downloads/screenshots.rar',
      },
    ],
  },
  {
    category: 'Documentación',
    items: [
      {
        label: 'Game Design Document (PDF)',
        href: '/assets/downloads/gdd.pdf',
      },
      {
        label: 'Especificaciones Técnicas (PDF)',
        href: '/assets/downloads/tech-specs.pdf',
      },
    ],
  },
];

export default function DescargasPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <section className={styles.heroSection}>
          <h1>Descargas</h1>
          <p>Recursos, press kit y documentación de Fallen Souls</p>
        </section>

        <section className={styles.container}>
          {downloads.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2>{section.category}</h2>
              <div className={styles.downloadGrid}>
                {section.items.map((item, itemIndex) => (
                  <DownloadButton
                    key={itemIndex}
                    href={item.href}
                    label={item.label}
                    type="primary"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
