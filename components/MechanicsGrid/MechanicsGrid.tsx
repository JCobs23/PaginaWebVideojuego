'use client';

import React from 'react';
import styles from './MechanicsGrid.module.css';

interface Mechanic {
  title: string;
  icon: string;
  description: string;
}

interface MechanicsGridProps {
  mechanics: Mechanic[];
  title?: string;
}

export default function MechanicsGrid({ mechanics, title }: MechanicsGridProps) {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.grid}>
        {mechanics.map((mechanic, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{mechanic.icon}</span>
            </div>
            <h3>{mechanic.title}</h3>
            <p>{mechanic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
