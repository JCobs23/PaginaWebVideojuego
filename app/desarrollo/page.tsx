import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TabsWeeks from '@/components/TabsWeeks/TabsWeeks';
import React from 'react';
import styles from './desarrollo.module.css';

const weekTabs = [
  {
    weekNumber: 5,
    title: 'Semana 5 - Pre-producción',
    description:
      'Inicio del proyecto con conceptualización, diseño de mecánicas base y creación de assets iniciales.',
  },
  {
    weekNumber: 6,
    title: 'Semana 6 - Prototipado',
    description: 'Desarrollo del prototipo jugable, sistemas de combate básico y movimiento del jugador.',
  },
  {
    weekNumber: 7,
    title: 'Semana 7 - Mecánicas Avanzadas',
    description: 'Implementación de poderes especiales, sistema de drops y progresión de personaje.',
  },
  {
    weekNumber: 8,
    title: 'Semana 8 - Pulido Visual',
    description: 'Mejoras visuales, particulas, efectos de sonido y optimización gráfica.',
  },
];

export default function DesarrolloPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <section className={styles.heroSection}>
          <h1>Desarrollo de Fallen Souls</h1>
          <p>Seguimiento semanal del progreso del proyecto</p>
        </section>

        <section className={styles.container}>
          <TabsWeeks tabs={weekTabs} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
