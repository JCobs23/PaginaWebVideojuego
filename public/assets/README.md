# Assets Guide - Fallen Souls Website

## Estructura de Assets

Los assets del sitio web están organizados en la carpeta `public/assets/` siguiendo una estructura específica por tipo de contenido.

## Carpetas y Convenciones

### `hero/`
Assets del hero section (video de fondo y poster).

**Archivos esperados:**
- `hero_loop_01_1080.mp4` - Loop de video principal (8-12s, 1080p)
- `hero_poster_1920.webp` - Imagen de fallback, 1920x1080

**Especificaciones:**
- Video: MP4 H.264, sin audio, 1080p (1920x1080), 8-12 segundos
- Poster: WebP, 1920x1080, optimizado <500KB

### `backgrounds/`
Layers de parallax para el hero y otras secciones.

**Archivos esperados:**
- `bg_far.webp` - Capa lejana, efecto parallax lento
- `bg_mid.webp` - Capa media
- `bg_near.webp` - Capa cercana, parallax rápido

**Especificaciones:**
- Formato: WebP
- Resolución: 2K (2560x1440) mínimo
- Tema: Paisaje gótico low poly
- Tamaño: <800KB cada una

### `characters/`
Imágenes de personajes principales.

**Convención de naming:** `char_NAME_VARIANT_SIZE.webp`

**Ejemplos:**
- `char_prince_silhouette_512.webp`
- `char_guardian_default_512.webp`
- `char_sovereign_detailed_1024.webp`

**Especificaciones:**
- Formato: WebP/AVIF
- Resolución: 512px-1024px (tamaño visual)
- Fondo: Transparente (PNG) o bajo poly
- Tamaño: <100KB

### `weeks/week-XX/`
Screenshots y assets relacionados con cada semana de desarrollo.

**Estructura:**
```
weeks/
??? week-05/
?   ??? screenshot_01.webp
?   ??? screenshot_02.webp
?   ??? screenshot_03.webp
?   ??? screenshot_04.webp
??? week-06/
??? ...
```

**Especificaciones:**
- 3-4 screenshots por semana
- Resolución: 1920x1080 o 2560x1440
- Formato: WebP
- Tamaño: <300KB cada una

### `ui/`
Iconos y elementos de interfaz.

**Archivos SVG dibujados a mano:**
- `icon_sword_ui_24.svg`
- `icon_shield_ui_24.svg`
- `icon_health_ui_24.svg`
- etc.

**Especificaciones:**
- Formato: SVG (escalable)
- Tamaño base: 24px
- Color: Blanco o gradiente
- Stroke: 2px

### `textures/`
Texturas especiales y overlays.

**Archivo obligatorio:**
- `ink_overlay_2048.png` - Overlay de tinta, 2048x2048, con canal alfa

**Especificaciones:**
- Formato: PNG (para canal alpha)
- Resolución: 2048x2048
- Blend mode: Multiply
- Tamaño: <500KB

## Optimización de Imágenes

### Herramientas Recomendadas

```bash
# Convertir a WebP
cwebp -q 80 imagen.png -o imagen.webp

# Optimizar WebP
cwebp -q 80 -m 6 imagen.png -o imagen.webp

# Batch conversion (con ImageMagick)
mogrify -format webp -quality 80 *.png

# Convertir a AVIF (más comprimido)
avifenc --quality 70 imagen.png imagen.avif
```

### Tamaños Recomendados

| Tipo | Ancho | Alto | Tamaño máximo |
|------|-------|------|---------------|
| Hero poster | 1920 | 1080 | 500 KB |
| Background parallax | 2560 | 1440 | 800 KB |
| Character 512 | 512 | 512 | 100 KB |
| Character 1024 | 1024 | 1024 | 250 KB |
| Screenshot | 1920 | 1080 | 300 KB |
| Screenshot 4K | 2560 | 1440 | 500 KB |

## Cómo Agregar Assets

### 1. Copiar Archivos
```bash
# Copiar assets locales
cp mis_assets/* public/assets/

# O usar el script
bash scripts/import-assets.sh ./mis_assets_locales
```

### 2. Crear Nueva Semana con Assets
```bash
# Crear semana 8
node scripts/add-week.js --week 8

# Crear carpeta de assets
mkdir -p public/assets/weeks/week-08

# Copiar screenshots
cp screenshots/*.webp public/assets/weeks/week-08/
```

### 3. Actualizar Contenido
Editar `content/weeks/week-XX.md` para referenciar las imágenes.

## Paleta de Colores Obligatoria

```json
{
  "primary": "#2b2b2f",
  "accent": "#4a6bd6",
  "accent2": "#6b4ad6",
  "danger": "#c62828",
  "gold": "#b07a2a"
}
```

## Notas Importantes

- ? Todos los assets deben estar optimizados para web
- ? Mantener nombres de archivo consistentes
- ? Usar WebP como formato principal
- ? Proporcionar fallbacks PNG para navegadores antiguos
- ? No subir videos >15MB directamente; usar servicios de streaming
- ? SVG para iconos (siempre escalable)

## Hosting de Assets

### Netlify/Vercel
- Los assets en `public/` se sirven automáticamente
- Máximo 100MB por archivo
- CDN global incluido

### Alternativa: CDN Externo
Para archivos muy grandes (videos, downloads):
```
https://cdn.ejemplo.com/assets/fallen-souls/
```

Configurar en `.env.local`:
```env
NEXT_PUBLIC_CDN_URL=https://cdn.ejemplo.com/assets/fallen-souls/
```

## Checklist de Preparación

Antes de desplegar, asegúrate de:

- [ ] Hero loop video presente y optimizado
- [ ] Hero poster en 1920x1080 WebP
- [ ] 3 backgrounds parallax en formato WebP
- [ ] Personajes en 512px WebP
- [ ] Screenshots de semanas 5-7 presentes
- [ ] Ink overlay en 2048px PNG
- [ ] Todos los iconos SVG presentes
- [ ] Tamaños de archivo dentro de límites
- [ ] Sin rutas rotas en componentes

¡Listo para producción! ??
