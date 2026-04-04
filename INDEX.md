# ?? Índice del Proyecto - Fallen Souls Website

## ?? Empezar Rápido

- **[QUICKSTART.md](QUICKSTART.md)** ?? 5 minutos
  - Instalación básica
  - Ejecución local
  - Primeros cambios

## ?? Documentación Principal

- **[README.md](README.md)** ?? Completa
  - Descripción del proyecto
  - Stack y requisitos
  - Estructura completa
  - Desarrollo local detallado
  - Despliegue en Netlify/Vercel
  - Troubleshooting

- **[DEPLOYMENT.md](DEPLOYMENT.md)** ?? Despliegue
  - Netlify setup (recomendado)
  - Vercel setup
  - Despliegue manual
  - Monitoreo y logs
  - Optimizaciones

- **[CONTRIBUTING.md](CONTRIBUTING.md)** ?? Colaborar
  - Cómo contribuir
  - Estándares de código
  - Workflow recomendado
  - Checklist de calidad

- **[AI_PROMPTS.md](AI_PROMPTS.md)** ?? Trabajar con IA
  - Estructura de prompts
  - Ejemplos por tarea
  - Tips efectivos
  - Template reusable

## ?? Documentación de Contenido

- **[content/schema.md](content/schema.md)** ?? Formato de contenido
  - Estructura JSON para hero
  - Formato Markdown + Frontmatter para semanas
  - Convenciones de naming de assets
  - Ejemplos de código

- **[public/assets/README.md](public/assets/README.md)** ??? Gestión de assets
  - Estructura de carpetas
  - Especificaciones de imágenes
  - Herramientas de optimización
  - Checklist de preparación

- **[scripts/README.md](scripts/README.md)** ?? Scripts de utilidad
  - `add-week.js` - crear nueva semana
  - `import-assets.sh` - importar imágenes
  - Workflow recomendado
  - Troubleshooting

## ??? Estructura de Carpetas

```
fallen-souls-website/
?
??? ?? app/                          # Next.js App Router
?   ??? layout.tsx                   # Layout raíz
?   ??? page.tsx                     # Home page
?   ??? desarrollo/page.tsx          # Development tabs
?   ??? media/page.tsx               # Gallery
?   ??? descargas/page.tsx           # Downloads
?   ??? equipo/page.tsx              # Team
?   ??? api/content/route.ts         # API endpoints
?
??? ?? components/                   # React components
?   ??? Header/                      # Navigation
?   ??? Footer/                      # Footer
?   ??? Hero/                        # Hero section
?   ??? VideoModal/                  # Video player modal
?   ??? Gallery/                     # Image gallery
?   ??? CharacterCard/               # Character display
?   ??? MechanicsGrid/               # Game mechanics
?   ??? TabsWeeks/                   # Development tabs
?   ??? TeamCard/                    # Team member card
?   ??? DownloadButton/              # Download CTA
?
??? ?? content/                      # Editable content
?   ??? home.json                    # Hero + mechanics data
?   ??? schema.md                    # Content format docs
?   ??? weeks/                       # Development logs
?       ??? week-05.md
?       ??? week-06.md
?       ??? week-07.md
?
??? ?? public/                       # Static assets
?   ??? assets/
?   ?   ??? hero/                    # Video + poster
?   ?   ??? backgrounds/             # Parallax layers
?   ?   ??? characters/              # Character models
?   ?   ??? weeks/                   # Screenshots
?   ?   ??? ui/                      # Icons
?   ?   ??? textures/                # Overlays
?   ??? favicon.svg                  # Site icon
?   ??? manifest.json                # PWA manifest
?   ??? robots.txt                   # SEO robots
?
??? ?? styles/                       # Global styles
?   ??? global.css                   # CSS variables + resets
?
??? ?? scripts/                      # Utility scripts
?   ??? add-week.js                  # Create week
?   ??? import-assets.sh             # Copy images
?   ??? README.md                    # Scripts docs
?
??? ?? .github/workflows/            # CI/CD
?   ??? deploy.yml                   # GitHub Actions
?
??? ?? Configuration files
?   ??? tsconfig.json                # TypeScript config
?   ??? next.config.js               # Next.js config
?   ??? package.json                 # Dependencies
?   ??? .eslintrc.json               # Linting rules
?   ??? .prettierrc.json             # Code formatting
?   ??? netlify.toml                 # Netlify config
?   ??? vercel.json                  # Vercel config
?   ??? middleware.ts                # Request middleware
?   ??? .env.example                 # Env template
?
??? ?? Documentation
?   ??? README.md                    # Main guide
?   ??? QUICKSTART.md                # Quick start
?   ??? DEPLOYMENT.md                # Deploy guide
?   ??? CONTRIBUTING.md              # Contribution guide
?   ??? AI_PROMPTS.md                # AI prompt guide
?   ??? INDEX.md                     # This file
?
??? ?? Other files
    ??? .gitignore                   # Git ignore
    ??? LICENSE                      # License
```

## ?? Tareas Comunes

### Agregar nueva semana de desarrollo
1. Lee: [QUICKSTART.md](QUICKSTART.md#2??-ejecutar-localmente) ? "Agregar Nueva Semana"
2. Ejecuta: `npm run add-week -- --week 8`
3. Edita: `content/weeks/week-08.md`
4. Consulta: [content/schema.md](content/schema.md) para formato

### Agregar imágenes y screenshots
1. Lee: [public/assets/README.md](public/assets/README.md)
2. Copia archivos a `public/assets/[tipo]/`
3. O usa: `bash scripts/import-assets.sh ./mi_carpeta`
4. Verifica: nombres siguen `section_purpose_variant_size.ext`

### Cambiar colores/estética
1. Abre: [styles/global.css](styles/global.css)
2. Edita: Variables CSS en `:root`
3. Prueba: `npm run dev`

### Crear nuevo componente
1. Lee: [CONTRIBUTING.md](CONTRIBUTING.md#-componentes-ui)
2. Crea: `components/NombreComponente/`
3. Agrega: `NombreComponente.tsx` + `NombreComponente.module.css`
4. Usa: en páginas que necesiten

### Desplegar a Netlify
1. Lee: [DEPLOYMENT.md](DEPLOYMENT.md#-opción-1-netlify-recomendado)
2. Sigue: instrucciones de "Setup Inicial"
3. Push: cambios a `main`
4. Netlify automáticamente despliega

### Pedir cambios con IA
1. Lee: [AI_PROMPTS.md](AI_PROMPTS.md)
2. Elige: ejemplo similar a tu tarea
3. Copia y adapta: template
4. Pega en: ChatGPT, Copilot, etc.

### Fijar un bug
1. Lee: [CONTRIBUTING.md](CONTRIBUTING.md#-bug-fixes)
2. Crea rama: `git checkout -b fix/descripcion`
3. Corrige código
4. Verifica: `npm run type-check && npm run lint`
5. Push y crear PR

## ?? Resumen de Archivos

| Archivo | Tipo | Propósito | Editable |
|---------|------|----------|----------|
| README.md | Docs | Guía completa | ? |
| QUICKSTART.md | Docs | Inicio rápido | ? |
| DEPLOYMENT.md | Docs | Deploy | ? |
| CONTRIBUTING.md | Docs | Colaborar | ? |
| AI_PROMPTS.md | Docs | Prompts IA | ? |
| content/home.json | Contenido | Hero data | ? |
| content/weeks/*.md | Contenido | Logs semanas | ? |
| content/schema.md | Docs | Formato | ?? |
| app/page.tsx | Código | Home page | ? |
| app/*/page.tsx | Código | Otras páginas | ? |
| components/*.tsx | Código | Componentes | ?? |
| styles/global.css | Estilos | Diseño global | ? |
| public/assets/ | Assets | Imágenes | ? |
| package.json | Config | Dependencias | ?? |
| next.config.js | Config | Next.js | ?? |
| tsconfig.json | Config | TypeScript | ?? |

**Leyenda:**
- ? Seguro editar frecuentemente
- ?? Editar con cuidado (puede romper cosas)
- ?? No editar sin saber qué haces

## ?? Referencias Rápidas

### Documentación externa
- [Next.js 14 Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1 (Accesibilidad)](https://www.w3.org/WAI/WCAG21/quickref/)

### Recursos de despliegue
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)

### Recursos de contenido
- [Markdown Syntax](https://www.markdownguide.org/)
- [YAML Syntax](https://yaml.org/spec/1.2/spec.html)
- [JSON Spec](https://www.json.org/)

## ?? ¿Por dónde empiezo?

**Si acabas de clonar el proyecto:**
1. Abre [QUICKSTART.md](QUICKSTART.md)
2. Instala dependencias: `npm install`
3. Ejecuta: `npm run dev`
4. Explora el sitio

**Si quieres agregar contenido:**
1. Lee [content/schema.md](content/schema.md)
2. Abre [public/assets/README.md](public/assets/README.md)
3. Usa scripts: `npm run add-week`

**Si quieres desplegar:**
1. Lee [DEPLOYMENT.md](DEPLOYMENT.md)
2. Sigue "Opción 1: Netlify" (más fácil)

**Si quieres código nuevo:**
1. Lee [CONTRIBUTING.md](CONTRIBUTING.md)
2. Usa [AI_PROMPTS.md](AI_PROMPTS.md) si necesitas IA
3. Sigue workflow de rama + PR

**Si encontraste un bug:**
1. Verifica [README.md](README.md) sección "Troubleshooting"
2. Crea rama con `fix/`
3. Arreglalo siguiendo [CONTRIBUTING.md](CONTRIBUTING.md)

## ?? Tips

- ?? Todas las guías tienen ejemplos concretos
- ?? Los scripts son amigos: usa `npm run add-week`
- ?? Git es seguro: siempre puedes revertir cambios
- ?? Pregunta a la IA usando [AI_PROMPTS.md](AI_PROMPTS.md)
- ?? El diseño es configurable: ve a `styles/global.css`

## ?? Soporte

¿Perdido?

1. ?? **Busca en este INDEX** - Encuentra tu tarea
2. ?? **Lee el archivo recomendado** - Tendrá instrucciones
3. ?? **Consulta ejemplos** - La mayoría de archivos tienen ejemplos
4. ?? **Usa AI_PROMPTS.md** - Para pedir ayuda a IA
5. ?? **Abre un issue** - Si nada funciona

---

**Versión: 1.0.0**
**Última actualización: 2024**
**Happy coding! ??**
