# Fallen Souls - Official Website

## ?? Descripción

Sitio web oficial de **Fallen Souls**, un videojuego indie roguelike FPS con estética dark fantasy low poly PS2. El sitio está construido con **Next.js 14**, **TypeScript** y **CSS Modules**, optimizado para performance y desplegable en Netlify/Vercel.

**Stack:**
- ?? Framework: Next.js 14 con App Router
- ?? Lenguaje: TypeScript
- ?? Estilos: CSS Modules + Global Styles
- ? Optimización: next/image, lazy loading, prefetching
- ?? Linting: ESLint + Prettier
- ?? Deploy: Netlify/Vercel con GitHub Actions

---

## ?? Tabla de Contenidos

1. [Instalación](#instalación)
2. [Desarrollo Local](#desarrollo-local)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Cómo Agregar/Editar Semanas](#cómo-agregareditar-semanas)
5. [Gestión de Assets](#gestión-de-assets)
6. [Despliegue](#despliegue)
7. [Modificaciones con IA](#modificaciones-con-ia)

---

## ?? Instalación

### Requisitos Previos
- Node.js 18.17+ ([descargar](https://nodejs.org/))
- npm o yarn
- Git

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/fallen-souls-website.git
cd fallen-souls-website

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env.local (opcional)
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# 4. Generar assets placeholders
mkdir -p public/assets/{hero,backgrounds,characters,weeks/{week-05,week-06,week-07},ui,textures}
```

---

## ??? Desarrollo Local

### Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting (verificar)
npm run lint

# Linting (corregir automáticamente)
npm run lint:fix

# Formatear código
npm run format

# Verificar tipos TypeScript
npm run type-check

# Importar assets (ver sección de Assets)
npm run import-assets

# Crear nueva semana de desarrollo
npm run add-week -- --week 8
```

---

## ?? Estructura del Proyecto

```
fallen-souls-website/
??? app/                          # App Router (Next.js 14)
?   ??? layout.tsx               # Layout raíz
?   ??? page.tsx                 # Home page
?   ??? desarrollo/
?   ?   ??? page.tsx             # Página de desarrollo (tabs)
?   ?   ??? desarrollo.module.css
?   ??? media/
?   ?   ??? page.tsx             # Galería y vídeos
?   ?   ??? media.module.css
?   ??? descargas/
?   ?   ??? page.tsx             # Descargas y press kit
?   ?   ??? descargas.module.css
?   ??? equipo/
?   ?   ??? page.tsx             # Miembros del equipo
?   ?   ??? equipo.module.css
?   ??? api/
?       ??? content/route.ts      # API para contenido JSON
?
??? components/                   # Componentes reutilizables
?   ??? Header/
?   ?   ??? Header.tsx
?   ?   ??? Header.module.css
?   ??? Footer/
?   ??? Hero/
?   ??? VideoModal/
?   ??? Gallery/
?   ??? CharacterCard/
?   ??? MechanicsGrid/
?   ??? TabsWeeks/
?   ??? TeamCard/
?   ??? DownloadButton/
?
??? content/                      # Contenido editable (JSON + Markdown)
?   ??? home.json                # Datos del hero y mecánicas
?   ??? schema.md                # Documentación de estructura
?   ??? weeks/
?       ??? week-05.md           # Semana 5
?       ??? week-06.md           # Semana 6
?       ??? week-07.md           # Semana 7
?       ??? week-XX.md           # Más semanas...
?
??? public/
?   ??? assets/                  # Assets estáticos
?       ??? hero/                # Video + poster
?       ??? backgrounds/         # Parallax layers
?       ??? characters/          # Modelos/siluetas de personajes
?       ??? weeks/
?       ?   ??? week-05/
?       ?   ??? week-06/
?       ?   ??? ...
?       ??? ui/                  # Iconos SVG
?       ??? textures/            # Ink overlay, etc.
?       ??? downloads/           # PDFs, press kit
?
??? styles/
?   ??? global.css               # Estilos globales + variables CSS
?
??? scripts/                      # Scripts de utilidad
?   ??? import-assets.sh         # Copiar/procesar assets
?   ??? add-week.js              # Crear nueva semana
?   ??? README.md                # Documentación de scripts
?
??? .github/workflows/            # GitHub Actions CI/CD
?   ??? deploy.yml               # Pipeline build + deploy
?
??? tsconfig.json                # Configuración TypeScript
??? next.config.js               # Configuración Next.js
??? package.json                 # Dependencias
??? .eslintrc.json               # Configuración ESLint
??? .prettierrc.json             # Configuración Prettier
??? README.md                    # Este archivo
```

---

## ?? Cómo Agregar/Editar Semanas

### Crear Nueva Semana

```bash
# Crear la semana 8
npm run add-week -- --week 8
```

Esto crea:
- `content/weeks/week-08.md` con template precompletado
- Carpeta para assets: `public/assets/weeks/week-08/`

### Editar Semana Existente

```bash
# Editar semana 6
nano content/weeks/week-06.md
```

**Formato Markdown + Frontmatter YAML:**

```markdown
---
weekNumber: 6
title: "Sistema de Combate Beta"
date: "2024-01-22"
buildVersion: "0.2.0"
status: "completed"
---

# Semana 6: Sistema de Combate Beta

## Descripción General
[Tu contenido]

## Logros Principales
- ? Logro 1
- ? Logro 2

## Complicaciones Encontradas
- Complicación 1

## Próximos Pasos
- Siguiente paso 1

## Attachments
- archivo.zip
```

**Estados disponibles:** `completed`, `in_progress`, `planned`

### Agregar Screenshots

```bash
# Copiar screenshots a semana 6
cp screenshots/*.webp public/assets/weeks/week-06/
```

Los screenshots aparecerán automáticamente en la galería `/media`.

---

## ??? Gestión de Assets

### Estructura Esperada

```
public/assets/
??? hero/
?   ??? hero_loop_01_1080.mp4      (requerido)
?   ??? hero_poster_1920.webp      (requerido)
??? backgrounds/
?   ??? bg_far.webp                (requerido)
?   ??? bg_mid.webp                (requerido)
?   ??? bg_near.webp               (requerido)
??? characters/
?   ??? char_prince_silhouette_512.webp
?   ??? char_guardian_512.webp
?   ??? char_sovereign_512.webp
??? weeks/week-XX/
?   ??? screenshot_01.webp
?   ??? screenshot_02.webp
?   ??? screenshot_03.webp
??? ui/
?   ??? icon_*.svg
??? textures/
    ??? ink_overlay_2048.png       (requerido)
```

### Importar Assets Locales

```bash
# Método 1: Manual
cp -r mis_assets/* public/assets/

# Método 2: Script automatizado
bash scripts/import-assets.sh ./mi_carpeta_assets

# Método 3: Netlify UI
# Drag & drop en Netlify Files o usar `netlify deploy`
```

### Optimización de Imágenes

Recomendamos WebP para mejor compresión:

```bash
# Instalar herramientas (una sola vez)
npm install --save-dev sharp

# Convertir PNG a WebP
cwebp -q 80 imagen.png -o imagen.webp

# Batch conversion
for file in *.png; do cwebp -q 80 "$file" -o "${file%.png}.webp"; done
```

Ver `public/assets/README.md` para especificaciones detalladas.

---

## ?? Despliegue

### Opción 1: Netlify (Recomendado)

#### Setup Manual

1. Conectar repositorio en [Netlify](https://netlify.com)
2. Configurar build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Agregar variables de entorno si es necesario
4. Deploy automático en cada push a `main`

#### Deploy con CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticar
netlify login

# Deploy
netlify deploy --prod
```

#### GitHub Actions (Automático)

El repositorio incluye `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=.next
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

**Configurar secretos en GitHub:**
1. Settings ? Secrets and variables ? Actions
2. Agregar:
   - `NETLIFY_AUTH_TOKEN` (de `netlify login`)
   - `NETLIFY_SITE_ID` (de Netlify dashboard)

### Opción 2: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

O conectar repositorio en [Vercel Dashboard](https://vercel.com).

### Verificación Pre-Deploy

```bash
# Verificar compilación
npm run build

# Verificar tipos
npm run type-check

# Verificar linting
npm run lint

# Prueba local del build
npm start
```

---

## ?? Modificaciones con IA

### Ejemplo: Actualizar Solo el Componente Hero

Usa este prompt con Copilot/ChatGPT:

```
Actualiza el componente Hero usando este JSON:
{
  "hero": {
    "title": "Fallen Souls",
    "subtitle": "Roguelike FPS — Dark fantasy psicológico",
    "videoUrl": "https://youtu.be/NUEVO_VIDEO_ID",
    "poster": "/assets/hero/hero_poster_1920.webp"
  }
}

Devuélveme únicamente:
1. components/Hero/Hero.tsx (actualizado)
2. components/Hero/Hero.module.css (sin cambios, pero inclúyelo)

No incluyas explicaciones, solo los archivos.
```

### Ejemplo: Actualizar Página Completa

```
Actualiza la página /media con esta nueva galería:

{
  "title": "Media - Fallen Souls",
  "images": [
    {"src": "/assets/weeks/week-08/ss01.webp", "title": "Screenshot 1"},
    {"src": "/assets/weeks/week-08/ss02.webp", "title": "Screenshot 2"}
  ]
}

Devuélveme: app/media/page.tsx actualizado
```

### Estructura para Prompts Efectivos

1. **Contexto:** "Estoy trabajando en una web de videojuego con Next.js 14"
2. **Datos:** JSON o Markdown con el contenido
3. **Solicitud:** "Actualiza SOLO estos archivos: ..."
4. **Formato:** "Devuélveme solo el código, sin explicaciones"
5. **Limitación:** "Usa CSS Modules, colores de la paleta #2b2b2f, #4a6bd6, etc."

### Archivos Modificables Frecuentemente

```
?? Fáciles de actualizar (sin dependencias):
- app/page.tsx (Home)
- app/desarrollo/page.tsx
- app/media/page.tsx
- content/home.json
- content/weeks/week-XX.md

?? Con cuidado (pueden romper cosas):
- components/* (verificar imports)
- styles/global.css (pueden afectar todo)
- next.config.js (configuración crítica)

?? No tocar sin saber:
- tsconfig.json
- .github/workflows/*
```

---

## ?? Configuración de Estética

### Paleta de Colores

Los colores están definidos en `styles/global.css` como variables CSS:

```css
--color-primary: #2b2b2f;        /* Gris plomo base */
--color-accent: #4a6bd6;         /* Azul eléctrico principal */
--color-accent2: #6b4ad6;        /* Púrpura neón */
--color-danger: #c62828;         /* Rojo - alertas/peligro */
--color-gold: #b07a2a;           /* Dorado oxidado */
```

### Tipografías

- **Display:** Cinzel (títulos, encabezados)
- **UI:** Inter (body, botones, UI)

Cargadas automáticamente desde Google Fonts.

### Tema Dark

El sitio usa `color-scheme: dark` automáticamente. Para cambiar a light:

Editar en `app/layout.tsx`:
```tsx
<html lang="es" data-theme="light">
```

Y agregar a `styles/global.css`:
```css
[data-theme="light"] {
  --color-bg-dark: #ffffff;
  /* ... más overrides */
}
```

---

## ?? Performance y SEO

### Optimizaciones Incluidas

? Next.js Image Optimization (`next/image`)
? Lazy loading automático
? Route prefetching
? CSS crítico inline en Hero
? Metadata automático
? Sitemap generado
? Robots.txt para SEO

### Métricas Esperadas

- **Lighthouse Score:** 90+
- **LCP (Largest Contentful Paint):** <2.5s
- **CLS (Cumulative Layout Shift):** <0.1

Ver en Chrome DevTools ? Lighthouse.

---

## ?? Troubleshooting

### El build falla

```bash
# Limpiar caché
rm -rf .next node_modules

# Reinstalar
npm install

# Build nuevamente
npm run build
```

### Los assets no se muestran

1. Verificar ruta en componente (ej: `/assets/hero/hero_poster_1920.webp`)
2. Verificar que el archivo existe en `public/assets/`
3. Verificar permisos de archivo
4. Hacer hard refresh en navegador (Ctrl+Shift+R)

### Estilos rotos

```bash
# Verificar CSS Modules están correctos
npm run lint

# Limpiar y compilar
npm run build
```

### TypeScript errors

```bash
# Verificar tipos
npm run type-check

# Arreglar automáticamente algunos errores
npm run lint:fix
```

---

## ?? Recursos Útiles

- ?? [Documentación Next.js 14](https://nextjs.org/docs)
- ?? [CSS Modules Docs](https://github.com/css-modules/css-modules)
- ?? [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- ?? [Netlify Docs](https://docs.netlify.com)
- ??? [WebP Guide](https://developers.google.com/speed/webp)

---

## ?? Checklist de Lanzamiento

Antes de publicar, asegúrate de:

- [ ] `npm run build` compila sin errores
- [ ] `npm run type-check` sin warnings
- [ ] `npm run lint` sin problemas
- [ ] Assets en lugar (hero, backgrounds, characters)
- [ ] Home page con Hero section funcional
- [ ] Tabs de desarrollo con contenido de semanas 5-7
- [ ] Galería con screenshots
- [ ] Equipo rellenado
- [ ] Enlaces en Footer correctos
- [ ] Metadata correcta en `app/layout.tsx`
- [ ] URL de despliegue configurada en variables de entorno
- [ ] CI/CD en GitHub Actions activado
- [ ] Sitemap generado automáticamente

---

## ?? Soporte y Contacto

Para preguntas o problemas:

1. Revisar la sección de Troubleshooting
2. Consultar documentación de contenido en `content/schema.md`
3. Ver guía de assets en `public/assets/README.md`
4. Abrir issue en el repositorio

---

## ?? Licencia

[Especificar licencia - ej. MIT, GPL, etc.]

---

## ?? Créditos

Sitio web desarrollado con Next.js, TypeScript y CSS Modules.
Inspirado en estética low poly PS2 y diseño gótico.

**Fallen Souls © 2024 - Todos los derechos reservados.**

---

**¡Listo para comenzar! ?? Sigue leyendo el archivo específico para cada sección: `public/assets/README.md`, `content/schema.md` y `scripts/README.md` para obtener más detalles.**
