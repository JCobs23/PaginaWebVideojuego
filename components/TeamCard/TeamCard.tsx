'use client';

import React from 'react';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
}

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
      {bio && <p className={styles.bio}>{bio}</p>}
    </div>
  );
}
