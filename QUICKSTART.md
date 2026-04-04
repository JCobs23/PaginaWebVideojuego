# ? Quick Start - Fallen Souls Website

Guía rápida para empezar en 5 minutos.

## 1?? Clonar e Instalar

```bash
git clone https://github.com/tu-usuario/fallen-souls-website.git
cd fallen-souls-website
npm install
```

## 2?? Ejecutar Localmente

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## 3?? Editar Contenido

### Agregar Nueva Semana
```bash
npm run add-week -- --week 8
nano content/weeks/week-08.md
```

### Agregar Screenshots
```bash
cp screenshots/*.webp public/assets/weeks/week-08/
```

### Editar Home Page
```bash
nano app/page.tsx
# O editar datos
nano content/home.json
```

## 4?? Desplegar

### A Netlify (Recomendado)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### A Vercel
```bash
npm install -g vercel
vercel --prod
```

## ?? Archivos Principales

```
app/page.tsx              ? Home page
app/desarrollo/page.tsx   ? Development timeline
app/media/page.tsx        ? Gallery
content/home.json         ? Hero data
content/weeks/week-XX.md  ? Development logs
public/assets/            ? Images, videos, etc.
styles/global.css         ? Color palette
```

## ?? Personalizar Colores

Editar `styles/global.css`:

```css
--color-primary: #2b2b2f;    /* Gris */
--color-accent: #4a6bd6;     /* Azul */
--color-accent2: #6b4ad6;    /* Púrpura */
--color-danger: #c62828;     /* Rojo */
--color-gold: #b07a2a;       /* Dorado */
```

## ?? Agregar Assets

Carpetas esperadas:

```
public/assets/
??? hero/hero_loop_01_1080.mp4
??? hero/hero_poster_1920.webp
??? backgrounds/bg_far.webp
??? backgrounds/bg_mid.webp
??? backgrounds/bg_near.webp
??? characters/char_*.webp
??? textures/ink_overlay_2048.png
```

O usar el script:
```bash
bash scripts/import-assets.sh ./mis_assets
```

## ?? Scripts Útiles

```bash
npm run dev          # Development
npm run build        # Production build
npm start            # Run production build
npm run lint         # Check code
npm run lint:fix     # Auto-fix
npm run format       # Format code
npm run type-check   # TypeScript check
npm run add-week     # Create new week
npm run import-assets # Copy image assets
```

## ? Verificar Antes de Desplegar

```bash
npm run type-check
npm run lint
npm run build
```

## ?? Desplegar Cambios

```bash
git add .
git commit -m "feat: descripción"
git push origin main

# ? Automáticamente desplegado en Netlify/Vercel!
```

## ?? Documentación Completa

- [README.md](README.md) - Documentación completa
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de despliegue
- [CONTRIBUTING.md](CONTRIBUTING.md) - Cómo contribuir
- [content/schema.md](content/schema.md) - Formato de contenido

## ?? Problemas?

### Build falla
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Assets no se muestran
- Verificar ruta: `/assets/...`
- Verificar archivo existe en `public/assets/`
- Hard refresh: Ctrl+Shift+Del

### TypeScript errors
```bash
npm run type-check  # Ver detalles
npm run lint:fix    # Auto-corregir
```

## ?? Próximos Pasos

1. ? Instalar dependencias
2. ? Ejecutar `npm run dev`
3. ? Explorar el sitio
4. ? Editar contenido en `content/`
5. ? Agregar assets a `public/assets/`
6. ? Deploy a Netlify/Vercel

---

**¡Listo! Ahora ve a README.md para documentación completa.** ??

Tiempo estimado: 5 minutos ??
