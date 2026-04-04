import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Fallen Souls</h3>
            <p>Roguelike FPS Dark Fantasy - Experiencia indie de acción y horror psicológico.</p>
          </div>

          <div className={styles.section}>
            <h4>Links Rápidos</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/desarrollo">Desarrollo</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
              <li>
                <Link href="/descargas">Descargas</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Redes Sociales</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Fallen Souls. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
