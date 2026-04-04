import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TeamCard from '@/components/TeamCard/TeamCard';
import React from 'react';
import styles from './equipo.module.css';

const teamMembers = [
  {
    name: 'Director Creativo',
    role: 'Game Designer',
    bio: 'Responsable de la visión general del juego, mecánicas y dirección artística.',
  },
  {
    name: 'Programador Lead',
    role: 'Lead Programmer',
    bio: 'Desarrollo del motor gráfico, sistemas principales y optimización técnica.',
  },
  {
    name: 'Artista 3D',
    role: 'Artist 3D',
    bio: 'Creación de modelos low poly y texturas para personajes y entornos.',
  },
  {
    name: 'Compositor',
    role: 'Audio Designer',
    bio: 'Música original, efectos de sonido y diseño sonoro completo.',
  },
];

export default function EquipoPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <section className={styles.heroSection}>
          <h1>Equipo de Desarrollo</h1>
          <p>Conoce al talentoso equipo detrás de Fallen Souls</p>
        </section>

        <section className={styles.container}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </section>

        <section className={styles.creditsSection}>
          <div className={styles.container}>
            <h2>Créditos Especiales</h2>
            <p>
              Fallen Souls es un proyecto pasional desarrollado con dedicación y amor por los
              videojuegos de acción indie. Agradecemos a toda la comunidad que ha apoyado el
              desarrollo de este proyecto.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
