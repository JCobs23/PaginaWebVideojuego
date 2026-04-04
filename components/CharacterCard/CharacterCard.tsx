'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function CharacterCard({ name, role, bio, image }: CharacterCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h3>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <p className={styles.roleBadge}>{role}</p>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
