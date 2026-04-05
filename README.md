# FALLEN SOULS — Sitio Web del Proyecto Final

**Proyecto Final de Videojuegos 2026**  
**Autor:** Juan David Silva Colorado  
**Fecha:** Abril 2026

---

## Descripción

Sitio web multipágina para el proyecto final de videojuegos **Fallen Souls**, un roguelike de acción en primera persona (FPS Roguelike) con estética dark fantasy psicológico. El sitio presenta el concepto, personajes, mecánicas, desarrollo semana a semana, galería de media y descargas del proyecto.

---

## Estructura del Proyecto

```
fallen-souls/
├── home.html           # Página de inicio (héroe, historia, personajes, mecánicas, niveles)
├── home.css            # Estilos de inicio
├── desarrollo.html     # Diario de desarrollo semana 5–17 con pestañas
├── desarrollo.css      # Estilos del desarrollo
├── media.html          # Galería de imágenes y vídeos con lightbox y filtros
├── media.css           # Estilos de media
├── descargas.html      # Documentos y assets descargables
├── descargas.css       # Estilos de descargas
├── equipo.html         # Equipo del proyecto y herramientas
├── equipo.css          # Estilos del equipo
├── contacto.html       # Formulario de contacto simulado
├── contacto.css        # Estilos del contacto
├── global.css          # Variables, tipografía, reset, navbar, footer
├── js/
│   ├── home.js         # Partículas, parallax, animaciones del héroe
│   ├── desarrollo.js   # Sistema de pestañas por semana
│   ├── media.js        # Lightbox y filtros de galería
│   └── contacto.js     # Validación y simulación del formulario
├── images/
│   ├── hero/           # hero.mp4, ink_overlay.png
│   ├── backgrounds/    # Fondos de secciones
│   ├── characters/     # Renders de personajes
│   ├── weeks/          # Capturas por semana (week-05/ ... week-17/)
│   └── ui/             # Iconos SVG e interfaz
└── README.md
```

---

## Instrucciones de Uso

### Abrir en navegador

1. Descarga o clona la carpeta del proyecto.
2. Abre `home.html` directamente en cualquier navegador moderno.
3. La navegación entre páginas funciona con rutas relativas.

> **No requiere servidor** — funciona completamente como archivos estáticos.

### Agregar imágenes

Coloca tus imágenes siguiendo la convención de nombres:

```
images/characters/char_prince_512.webp
images/backgrounds/bg_ruins_layer1_1920.webp
images/weeks/week-05/screenshot_01.webp
images/hero/hero_loop_01_1080.mp4
```

### Agregar video del héroe

Reemplaza el comentario en `home.html`:
```html
<!-- Replace with actual video: -->
<video class="hero-video" src="images/hero/hero.mp4" autoplay loop muted playsinline></video>
```

### Actualizar semanas de desarrollo

Edita `desarrollo.html` — busca el panel correspondiente `data-panel="N"` y completa:
- Título del avance
- Descripción
- Checklist de objetivos
- Imágenes (reemplazar `.week-img-slot.empty`)
- Complicaciones y próximos pasos
- Cambiar `status-pending` → `status-done`

---

## Paleta de Colores

| Variable | Color | Uso |
|---|---|---|
| `--gray-deep` | `#2b2b2f` | Fondo principal |
| `--blue-elec` | `#4a6bd6` | Azul eléctrico — acentos |
| `--purple-neon` | `#6b4ad6` | Morado neón — bordes, tabs |
| `--red-intense` | `#c62828` | Rojo intenso — CTA, jefes |
| `--gold-oxidized` | `#b07a2a` | Dorado oxidado — títulos |

---

## Tipografías

- **Títulos:** [Cinzel](https://fonts.google.com/specimen/Cinzel) (Google Fonts)
- **Cuerpo:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

---

## Tecnologías

- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- JavaScript vanilla (ES6+)
- Google Fonts
- Sin frameworks ni dependencias externas

---

## Compatibilidad

Probado en:
- Chrome 120+
- Firefox 120+
- Safari 16+
- Edge 120+

---

## Licencia

Proyecto académico — © 2026 Juan David Silva Colorado.  
Todos los derechos reservados.
