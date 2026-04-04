'use client';

import React from 'react';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
  href: string;
  label: string;
  icon?: string;
  type?: 'primary' | 'secondary';
}

export default function DownloadButton({
  href,
  label,
  icon = '?',
  type = 'primary',
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className={`${styles.button} ${styles[type]}`}
      aria-label={`Descargar ${label}`}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}
