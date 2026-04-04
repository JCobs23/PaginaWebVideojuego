# ?? Guía de Prompts para IA - Fallen Souls Website

Esta guía te ayuda a pedir cambios específicos a Copilot, ChatGPT o similar, facilitando que la IA devuelva exactamente lo que necesitas.

## ?? Estructura Base de un Prompt Efectivo

```
1. [CONTEXTO] Estoy trabajando en...
2. [REQUISITOS] Necesito que...
3. [DATOS] Aquí están los datos:
4. [SOLICITUD] Por favor, devuelve solo:
5. [RESTRICCIONES] Con estas limitaciones:
```

---

## ?? Ejemplos por Tipo de Tarea

### Ejemplo 1: Actualizar Hero Component

```
Contexto: Estoy trabajando en la web de "Fallen Souls", 
un videojuego indie hecho con Next.js 14, TypeScript y CSS Modules.

Necesito que actualices el componente Hero con estos datos:
{
  "title": "Fallen Souls - Temporada 2",
  "subtitle": "El reino despierta... nuevas amenazas te esperan",
  "videoUrl": "https://www.youtube.com/embed/VIDEO_ID_NUEVO",
  "poster": "/assets/hero/hero_poster_temporada_2.webp"
}

Por favor, devuelve SOLO estos archivos, sin explicaciones:
1. components/Hero/Hero.tsx (actualizado)
2. components/Hero/Hero.module.css (sin cambios, pero completo)

Restricciones:
- Mantén los colores de la paleta: #2b2b2f, #4a6bd6, #6b4ad6
- Mantén las animaciones parallax existentes
- Usa CSS Modules (no Tailwind)
- TypeScript strict mode
```

### Ejemplo 2: Agregar Nueva Página

```
Stack: Next.js 14, TypeScript, CSS Modules, estética low poly PS2 gótica

Necesito crear una nueva página en /lore que muestre la historia del juego.

Estructura esperada:
- Página en: app/lore/page.tsx
- Estilos en: app/lore/lore.module.css
- Contenido:
  - Hero section con título "Lore de Fallen Souls"
  - 3 secciones de historia con texto e imágenes
  - Galería de 4 conceptos artísticos

Requisitos:
- Usar componentes existentes: Gallery, Hero backgrounds
- Colores: grises plomo (#2b2b2f), azul eléctrico (#4a6bd6), dorado (#b07a2a)
- Responsive (mobile first)
- Accesible (ARIA, navegación por teclado)

Devuelve SOLO:
1. app/lore/page.tsx
2. app/lore/lore.module.css

Estructura de carpetas esperada:
content/lore.json contiene { title, sections: [...] }
```

### Ejemplo 3: Crear Nuevo Componente

```
Proyecto: Next.js 14 + TypeScript + CSS Modules
Estética: Low poly PS2, oscuro, gótico

Crea un componente "TimelineItem" que muestre un evento del desarrollo:

Props:
{
  date: string,        // "2024-01-15"
  title: string,       // "Nombre del milestone"
  description: string, // "Descripción corta"
  status: "completed" | "in_progress" | "planned",
  icon?: string        // emoji
}

Ejemplo de uso:
<TimelineItem
  date="2024-01-15"
  title="Sistema de combate beta"
  description="Implementadas mecánicas básicas de combate"
  status="completed"
  icon="??"
/>

Requisitos:
- TypeScript con types explícitos
- CSS Modules
- Colores: #2b2b2f (base), #4a6bd6 (azul), #c62828 (danger)
- Animación smooth al hover
- Responsive

Devuelve SOLO:
1. components/TimelineItem/TimelineItem.tsx
2. components/TimelineItem/TimelineItem.module.css
```

### Ejemplo 4: Actualizar Contenido (JSON)

```
Necesito actualizar content/home.json con nueva información del juego:

Datos a incluir:
{
  "title": "Fallen Souls - Edición Definitiva",
  "summary": "Roguelike FPS con roguelike y sistema de almas...",
  "characters": [
    {
      "name": "El Peregrino",
      "role": "Protagonista",
      "bio": "Un guerrero marcado...",
      "image": "/assets/characters/char_prince_512.webp"
    }
    // + 2 más
  ],
  "mechanics": [
    {
      "title": "Roguelike Progression",
      "icon": "??",
      "description": "..."
    }
    // + 3 más
  ]
}

Devuelve SOLO el contenido de content/home.json actualizado.
Mantén la estructura del archivo existente.
```

### Ejemplo 5: Agregar Semana de Desarrollo

```
Estoy usando un proyecto Next.js con contenido en Markdown + Frontmatter YAML.

Necesito crear la semana 9 de desarrollo con estos datos:

- Semana: 9
- Título: "Optimización Visual y Audio"
- Fecha: 2024-02-15
- Versión: 0.5.0
- Estado: in_progress
- Logros: [
    "Particulas mejoradas con GPU",
    "Sistema de sonido 3D implementado",
    "Optimización de memoria en 30%"
  ]
- Complicaciones: [
    "Ruido de fondo interfería con efectos"
  ]
- Próximos pasos: [
    "Agregar lip-sync a personajes",
    "Mejorar reverberación de espacios"
  ]

Devuelve SOLO el contenido del archivo content/weeks/week-09.md
en formato Markdown + Frontmatter YAML.
```

---

## ?? Prompts para Diseño y Estética

### Cambiar Paleta de Colores

```
Stack: Next.js 14, CSS Modules, Variables CSS

Necesito cambiar la paleta de colores en styles/global.css.

Paleta actual:
--color-primary: #2b2b2f;
--color-accent: #4a6bd6;
--color-accent2: #6b4ad6;
--color-danger: #c62828;
--color-gold: #b07a2a;

Nueva paleta (estética más cálida):
--color-primary: #1a1612;
--color-accent: #d4611f;
--color-accent2: #f79f24;
--color-danger: #e74c3c;
--color-gold: #e8b44a;

Devuelve SOLO el bloque de variables CSS actualizado
manteniendo el resto del archivo igual.
```

### Agregar Tipografía Adicional

```
Necesito agregar una tipografía adicional para botones especiales.

Font actual: "Cinzel" para display, "Inter" para UI

Quiero agregar:
- Fuente: "Playfair Display" (serif elegante) para subtítulos épicos
- Variable CSS: --font-epic
- Aplicarla a: componentes de boss enemigos

Devuelve SOLO:
1. La importación de Google Fonts a agregar en global.css
2. La nueva variable CSS --font-epic
3. Un ejemplo de cómo usarla en un componente
```

---

## ?? Prompts para Fix y Debugging

### Corregir Bug

```
Stack: Next.js 14 TypeScript

Bug: Los tabs en /desarrollo no cambian de contenido al hacer click.

Archivo afectado: components/TabsWeeks/TabsWeeks.tsx

Síntomas:
- Click en tab no actualiza activeTab
- El panel sigue mostrando la pestaña anterior
- Console: sin errores

Devuelve SOLO el código corregido de TabsWeeks.tsx
Mantén la estructura de props igual.
```

### Optimizar Performance

```
Project: Next.js 14 web
Current issue: Lighthouse score bajo (72/100)

Componente: components/Gallery/Gallery.tsx
Problema: Lazy loading de imágenes no funcionando bien

Datos:
- Galería tiene 20+ imágenes de 2-3MB cada una
- Load time > 5 segundos

Optimizaciones necesarias:
1. Lazy load con blur placeholder
2. Usar next/image con priority
3. WebP con fallback JPG
4. Thumbnail preload

Devuelve SOLO el componente Gallery.tsx optimizado
con todas las mejoras listadas.
```

---

## ?? Prompts para Responsive/Mobile

```
Stack: CSS Modules, Mobile First

Componente: components/Hero/Hero.tsx

Problema: Hero section se ve mal en móviles (<640px)

Requisitos:
- Título debe escalar de 4rem (desktop) a 2rem (móvil)
- Video background no debe verse, solo poster
- Parallax layers solo en desktop
- Touch-friendly button size

Devuelve SOLO:
1. Hero.module.css actualizado con media queries
2. Hero.tsx si necesita cambios lógicos (null check, etc)
```

---

## ?? Prompts para Documentación

```
Necesito documentación en Markdown para explicar
cómo contribuir contenido al sitio.

Incluir:
1. Cómo crear nueva semana
2. Cómo agregar screenshots
3. Cómo editar home.json
4. Convenciones de naming
5. Checklist antes de commit

Formato: Markdown con ejemplos de código
Público: Para contribuidores

Devuelve SOLO el archivo en Markdown.
```

---

## ? Tips para Prompts Efectivos

### ? Haz

- **Sé específico**: "Actualiza Hero component" vs "Haz que el hero se vea mejor"
- **Incluye contexto**: Qué stack, qué estética, qué problema
- **Pasa datos reales**: JSON, números, strings exactos
- **Especifica salida**: "Devuelve SOLO estos archivos"
- **Menciona restricciones**: Colores, frameworks, tipos

### ? No hagas

- Prompts muy largos y confusos
- Mezclar múltiples tareas en uno
- Pedir explicaciones innecesarias ("también explica por qué...")
- Cambiar frameworks (no pidas Tailwind si tienes CSS Modules)
- Olvidar mencionar TypeScript/tipos

### ?? Template Reusable

```
[PROYECTO]
Stack: Next.js 14, TypeScript, CSS Modules
Estética: Low poly PS2, oscura, gótica

[TAREA]
Necesito que [acción específica]

[DATOS]
[Pegar JSON, código, o ejemplos concretos]

[REQUISITOS]
- Requisito 1
- Requisito 2
- Restricción 1
- Restricción 2

[SALIDA]
Devuelve SOLO:
1. Archivo 1
2. Archivo 2

Sin explicaciones.
```

---

## ?? Flujo de Trabajo Recomendado

1. **Preparar datos**
   - Tener JSON/Markdown listos
   - Conocer ruta exacta de archivos
   - Saber qué colores/estilos usar

2. **Escribir prompt**
   - Copiar template de arriba
   - Rellenar con datos concretos
   - Revisar antes de enviar

3. **Enviar a IA**
   - Copilot, ChatGPT, Claude, etc.
   - Pedir revisión si es crítico

4. **Integrar respuesta**
   - Copiar archivos devueltos
   - Reemplazar en carpeta correcta
   - Probar localmente (`npm run dev`)

5. **Commit y deploy**
   ```bash
   git add .
   git commit -m "feat: Updated via IA prompt"
   git push origin main
   ```

---

## ?? Soporte

Si necesitas ayuda con prompts:

1. Ver ejemplos en este archivo
2. Consultar README.md (sección "Modificaciones con IA")
3. Revisar CONTRIBUTING.md
4. Abrir issue en GitHub con el error

---

**¡Ahora ya sabes cómo pedir cambios a la IA! ??**

Versión: 1.0.0
Última actualización: 2024
