import '../styles/global.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import React from 'react';

export const metadata = {
  title: 'Fallen Souls - Roguelike FPS Dark Fantasy',
  description: 'Videojuego indie de acción dark fantasy. Sumérgete en un mundo de bajo poly PS2 con atmósfera gótica.',
};

export default function HomePage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <h1>Fallen Souls</h1>
        <p>Coming soon - Página en construcción</p>
      </main>
      <Footer />
    </div>
  );
}
