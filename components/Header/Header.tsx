import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Fallen Souls</span>
        </Link>
        <nav className={styles.nav} role="navigation" aria-label="Navegación principal">
          <ul className={styles.navList}>
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
            <li>
              <Link href="/equipo">Equipo</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
