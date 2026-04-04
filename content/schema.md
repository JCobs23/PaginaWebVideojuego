# Content Schema Documentation

## Estructura General

La configuración de contenido se basa en dos formatos: **JSON** para datos estructurados y **Markdown con Frontmatter YAML** para contenido textual.

## Formato Hero

```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "videoUrl": "string (YouTube/Vimeo embed URL)",
    "poster": "string (URL a imagen WebP/PNG)"
  }
}
```

### Ejemplo
```json
{
  "hero": {
    "title": "Fallen Souls",
    "subtitle": "Roguelike FPS — Dark fantasy psicológico",
    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "poster": "/assets/hero/hero_poster_1920.webp"
  }
}
```

## Formato de Personajes

```json
{
  "characters": [
    {
      "name": "string",
      "role": "string",
      "bio": "string",
      "image": "string (URL a WebP, máx 1024px)"
    }
  ]
}
```

## Formato de Mecánicas

```json
{
  "mechanics": [
    {
      "title": "string",
      "icon": "string (emoji o símbolo)",
      "description": "string"
    }
  ]
}
```

## Formato de Semanas (Markdown + Frontmatter)

```markdown
---
weekNumber: number (5-17)
title: "string"
date: "YYYY-MM-DD"
buildVersion: "semver"
status: "completed | in_progress | planned"
---

# Contenido en Markdown

## Secciones

- Descripción General
- Logros Principales
- Complicaciones Encontradas
- Próximos Pasos
- Attachments
```

### Ejemplo Completo
```markdown
---
weekNumber: 5
title: "Pre-Producción Inicial"
date: "2024-01-15"
buildVersion: "0.1.0"
status: "completed"
---

# Semana 5: Pre-Producción Inicial

## Descripción General
...

## Logros Principales
- ? Item 1
- ? Item 2
```

## Convenciones de Naming de Assets

**Patrón**: `section_purpose_variant_size.ext`

### Ejemplos
- `hero_loop_01_1080.mp4` - Video loop del hero en 1080p
- `bg_castle_mid_2k.webp` - Fondo del castillo, capa media, 2K
- `char_prince_silhouette_512.webp` - Personaje príncipe, silueta, 512px
- `icon_sword_ui_24.svg` - Icono de espada para UI, 24px
- `ink_overlay_2048.png` - Overlay de tinta, 2048px

## Estructura de Carpetas

```
content/
??? home.json
??? schema.md (este archivo)
??? weeks/
    ??? week-05.md
    ??? week-06.md
    ??? week-07.md
    ??? ... week-17.md

public/assets/
??? hero/
?   ??? hero_loop_01_1080.mp4
?   ??? hero_poster_1920.webp
??? backgrounds/
?   ??? bg_far.webp
?   ??? bg_mid.webp
?   ??? bg_near.webp
??? characters/
?   ??? char_prince_silhouette_512.webp
?   ??? char_guardian_512.webp
?   ??? char_sovereign_512.webp
??? weeks/
?   ??? week-05/
?   ?   ??? screenshot_01.webp
?   ?   ??? ...
?   ??? ...
??? ui/
?   ??? icon_sword_ui_24.svg
?   ??? ...
??? textures/
    ??? ink_overlay_2048.png
```

## Formatos Recomendados

| Tipo | Formato | Notas |
|------|---------|-------|
| Imágenes (personajes) | WebP/AVIF | 512-1024px, optimizadas |
| Imágenes (backgrounds) | WebP | 2K-4K, parallax layers |
| Video (loops) | MP4 | 8-12s, 1080p mínimo |
| Iconos | SVG | Dibujados a mano, escalables |
| Overlays/texturas | PNG | Con canal alfa, 2048px+ |

## Campos Opcionales

En el frontmatter de semanas, los siguientes campos son opcionales:
- `complications`: Array de strings
- `nextSteps`: Array de strings
- `attachments`: Array de strings (nombres de archivos)
