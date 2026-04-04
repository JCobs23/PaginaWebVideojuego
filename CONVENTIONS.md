# ?? Convenciones del Proyecto - Fallen Souls Website

Estándares y convenciones usadas en todo el proyecto para mantener consistencia.

## ??? Estructura de Carpetas

### Nombres de carpeta
- ? camelCase para carpetas que contienen código: `components/`, `styles/`
- ? PascalCase para componentes: `components/ComponentName/`
- ? kebab-case para rutas de páginas: `app/page-name/`

### Ejemplos
```
? Correcto:
- app/desarrollo/page.tsx
- components/CharacterCard/CharacterCard.tsx
- public/assets/heroes/

? Incorrecto:
- app/Desarrollo/page.tsx
- components/character-card/CharacterCard.tsx
- public/assets/Heroes/
```

## ?? Nombres de Archivos

### Regla General
```
[Purpose]_[Type]_[Variant]_[Size].[ext]

Ejemplos:
- hero_loop_01_1080.mp4       (purpose, type, variant, size)
- char_prince_silhouette_512.webp
- bg_castle_mid_2k.webp
- icon_sword_ui_24.svg
```

### Convenciones por tipo

| Tipo | Patrón | Ejemplo |
|------|--------|---------|
| Componentes | PascalCase.tsx | `Header.tsx` |
| Estilos | PascalCase.module.css | `Header.module.css` |
| Páginas | page.tsx | `app/page.tsx` |
| Módulos | camelCase.ts | `utils/formatDate.ts` |
| Assets imagen | snake_case | `hero_poster_1920.webp` |
| Assets video | snake_case | `hero_loop_01_1080.mp4` |
| JSON content | camelCase | `home.json` |
| Markdown content | kebab-case | `week-05.md` |

## ?? Componentes

### Estructura Mínima

```tsx
// components/ComponentName/ComponentName.tsx
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  prop1: string;
  prop2?: number;
}

export default function ComponentName({
  prop1,
  prop2,
}: ComponentNameProps) {
  return <div className={styles.container}>{prop1}</div>;
}
```

### Propiedades
- ? Usar interfaces explícitas para props
- ? Documentar tipos complejos
- ? Props opcionales con `?`
- ? Usar default values
- ? Mantener orden: required ? optional

### Ejemplo Completo

```tsx
interface ButtonProps {
  /** Etiqueta del botón */
  label: string;
  /** Callback cuando se hace click */
  onClick: () => void;
  /** Variante de estilo */
  variant?: 'primary' | 'secondary';
  /** Deshabilitar botón */
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
}
```

## ?? Estilos (CSS Modules)

### Estructura de Clase

```css
/* camelCase para clases */
.container {
  /* ... */
}

.headerTitle {
  /* ... */
}

.button--primary {
  /* Block__Element--Modifier */
}
```

### Variables CSS

```css
/* Siempre usar variables predefinidas */

/* ? Correcto */
.card {
  background: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

/* ? Incorrecto */
.card {
  background: #2b2b2f;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  transition: all 300ms ease-in-out;
}
```

### Media Queries

```css
/* Mobile-first approach */
.container {
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Animaciones

```css
/* Usar variables de timing */
.element {
  transition: all var(--transition-normal);
}

.element:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* Animaciones predefinidas */
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.hero {
  animation: slideInUp 0.6s ease-out;
}
```

## ?? Tipografía

### Uso de Fuentes

```tsx
/* Títulos - Cinzel */
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
}

/* Body - Inter */
p, span, button {
  font-family: var(--font-ui);
  font-weight: 400;
}
```

### Tamaños

```tsx
// Usar escala consistente
h1 { font-size: 3.5rem; }     // 56px
h2 { font-size: 2.5rem; }     // 40px
h3 { font-size: 1.875rem; }   // 30px
h4 { font-size: 1.5rem; }     // 24px
p  { font-size: 1rem; }       // 16px
small { font-size: 0.875rem; } // 14px
```

## ?? Colores

### Paleta Obligatoria

```css
/* En styles/global.css */
--color-primary: #2b2b2f;      /* Gris plomo base */
--color-accent: #4a6bd6;       /* Azul eléctrico */
--color-accent2: #6b4ad6;      /* Púrpura neón */
--color-danger: #c62828;       /* Rojo alertas */
--color-gold: #b07a2a;         /* Dorado oxidado */
```

### No hacer

```tsx
/* ? Evitar hard-coding colores */
.button {
  background: #4a6bd6;  /* ¡MAL! */
}

/* ? Usar variables */
.button {
  background: var(--color-accent);
}
```

## ?? Organización de Assets

### Naming Convention

```
[section]_[purpose]_[variant]_[size].[format]

Ejemplos:
hero_loop_01_1080.mp4
bg_castle_mid_2k.webp
char_prince_silhouette_512.webp
icon_sword_ui_24.svg
```

### Estructura

```
public/assets/
??? hero/              # Hero section video + poster
??? backgrounds/       # Parallax backgrounds
??? characters/        # Character models
??? weeks/
?   ??? week-05/
?   ??? week-06/
?   ??? ...
??? ui/                # Icons, buttons, etc
??? textures/          # Overlays, patterns
```

## ?? Contenido (Markdown + JSON)

### Frontmatter YAML

```markdown
---
weekNumber: 5
title: "Pre-Producción Inicial"
date: "2024-01-15"
buildVersion: "0.1.0"
status: "completed"
---
```

### JSON Format

```json
{
  "hero": {
    "title": "String en Title Case",
    "subtitle": "Descripción breve",
    "videoUrl": "URL de YouTube",
    "poster": "/assets/hero/hero_poster_1920.webp"
  }
}
```

### Markdown Headings

```markdown
# H1 - Título Principal
## H2 - Sección Principal
### H3 - Subsección
#### H4 - Punto Importante
```

## ?? Nomenclatura en Código

### Variables

```tsx
/* camelCase para variables */
const userName = 'John';
const isActive = true;
const itemCount = 5;

/* UPPER_SNAKE_CASE para constantes */
const MAX_ITEMS = 100;
const API_URL = 'https://api.example.com';
const DEFAULT_THEME = 'dark';
```

### Funciones y Métodos

```tsx
/* camelCase con verbo al inicio */
const getUserData = () => { /* ... */ }
const handleClick = () => { /* ... */ }
const formatDate = (date: Date) => { /* ... */ }
const isValidEmail = (email: string) => { /* ... */ }
```

### Tipos y Interfaces

```tsx
/* PascalCase */
interface UserProps {
  name: string;
  age?: number;
}

type Status = 'pending' | 'completed' | 'failed';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
```

## ?? TypeScript

### Tipos Explícitos

```tsx
/* ? Correcto */
const getName = (user: User): string => {
  return user.name;
};

/* ? Incorrecto */
const getName = (user) => {
  return user.name;
};
```

### No usar `any`

```tsx
/* ? Correcto */
interface Props {
  data: string[];
}

function Component({ data }: Props) {
  return <div>{data}</div>;
}

/* ? Incorrecto */
function Component({ data }: any) {
  return <div>{data}</div>;
}
```

### Optional Chaining

```tsx
/* ? Usar ?. */
const name = user?.profile?.name;

/* ? No hacer */
const name = user && user.profile && user.profile.name;
```

## ?? Comentarios

### Cuándo comentar

- ? Lógica compleja
- ? Por qué se hace así (no qué se hace)
- ? TODO items
- ? Workarounds/hacks

### No comentar

- ? Código obvio
- ? Cambios documentados en Git
- ? Lo que hace el código (debe ser claro)

### Formato

```tsx
// Comentario simple
/* Multi-line
   comment */

/** JSDoc para funciones públicas */
export function doSomething(x: number): number {
  // TODO: Mejorar rendimiento aquí
  return x * 2;
}

// Workaround: Firefox doesn't support X, so we do Y
if (isFirefox) {
  // ...
}
```

## ?? Performance

### Optimización de Imágenes

```tsx
/* ? Usar next/image */
import Image from 'next/image';

<Image
  src="/assets/hero/hero.webp"
  alt="Fallen Souls"
  width={1920}
  height={1080}
  priority
/>

/* ? No usar img directamente */
<img src="/assets/hero/hero.webp" alt="..." />
```

### Lazy Loading

```tsx
/* Componentes dinámicos */
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { loading: () => <p>Cargando...</p> }
);
```

## ? Accesibilidad

### ARIA Labels

```tsx
/* ? Correcto */
<button aria-label="Cerrar modal" onClick={onClose}>
  ?
</button>

/* ? Incorrecto */
<button onClick={onClose}>?</button>
```

### Semantic HTML

```tsx
/* ? Usar elementos semánticos */
<header role="banner">
  <nav aria-label="Principal">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

/* ? No hacer */
<div id="header">
  <div id="nav">
    <div id="list">
      <div><a href="/">Home</a></div>
    </div>
  </div>
</div>
```

## ?? Control de Versiones

### Commits

```
feat: Agregar nueva galería interactiva
fix: Corregir posición del video en móvil
docs: Actualizar instrucciones de instalación
style: Formatear código en Hero component
refactor: Simplificar lógica de tabs
perf: Optimizar carga de imágenes
test: Agregar tests para Gallery
chore: Actualizar dependencias
```

### Ramas

```
main                    # Producción
develop                 # Desarrollo
feature/nueva-galeria   # Nueva característica
fix/video-bug          # Corrección de bug
docs/readme-update     # Documentación
```

## ? Checklist de Calidad

Antes de hacer commit:

```
- [ ] TypeScript sin errores (`npm run type-check`)
- [ ] ESLint sin warnings (`npm run lint`)
- [ ] Código formateado (`npm run format`)
- [ ] Componentes documentados (JSDoc)
- [ ] Accesible (ARIA, navegación por teclado)
- [ ] Responsive (mobile-first)
- [ ] Performance checklist (images, lazy load)
- [ ] Sin console.errors
- [ ] Tests si es aplicable
```

---

**Versión: 1.0.0**
**Última actualización: 2024**

Seguir estas convenciones mantiene el proyecto limpio y mantenible. ??
