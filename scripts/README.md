# Scripts de Utilidad - Fallen Souls Website

## Descripción General

La carpeta `scripts/` contiene herramientas automatizadas para facilitar la gestión de contenido y assets del proyecto.

## Scripts Disponibles

### 1. `add-week.js`

Crea una nueva semana de desarrollo con template Markdown precompletado.

**Uso:**
```bash
node scripts/add-week.js --week NUMBER
npm run add-week -- --week 8
```

**Ejemplo:**
```bash
npm run add-week -- --week 8
```

**Salida:**
- Crea `content/weeks/week-08.md` con frontmatter YAML
- Crea carpeta `public/assets/weeks/week-08/` para screenshots
- Imprime instrucciones para agregar contenido

**Template Generado:**
```markdown
---
weekNumber: 8
title: "Semana 8 - Título del Hito"
date: "2024-01-XX"
buildVersion: "0.X.0"
status: "in_progress"
---

# Semana 8: Descripción del Hito
...
```

**Opciones:**
- `--week NUMBER` (5-17): Número de semana a crear (obligatorio)

**Errores Comunes:**
- `Error: Especifica un número de semana válido (5-17)`
  ? Asegúrate de usar un número entre 5 y 17
- `Error: El archivo week-XX.md ya existe`
  ? La semana ya está creada; edita la existente

---

### 2. `import-assets.sh`

Script bash para copiar y procesar imágenes desde un directorio local a `public/assets/`.

**Uso:**
```bash
bash scripts/import-assets.sh [DIRECTORIO_ORIGEN]
npm run import-assets
```

**Ejemplos:**
```bash
# Importar desde carpeta local
bash scripts/import-assets.sh ./mis_assets

# Importar desde ubicación específica
bash scripts/import-assets.sh ~/Descargas/fallen-souls-assets

# Usar valor por defecto (.)
bash scripts/import-assets.sh
```

**Estructura Esperada:**
```
mis_assets/
??? hero/
?   ??? hero_loop_01_1080.mp4
?   ??? hero_poster_1920.webp
??? backgrounds/
?   ??? bg_far.webp
?   ??? bg_mid.webp
?   ??? bg_near.webp
??? characters/
?   ??? *.webp
??? weeks/
    ??? week-XX/
        ??? screenshot_*.webp
```

**Salida:**
```
?? Starting asset import process...
? Copied hero_loop_01_1080.mp4
? Copied hero_poster_1920.webp
? Copied bg_far.webp
? Copied bg_mid.webp
? Copied bg_near.webp
? Asset import completed successfully!
```

**Carpetas Creadas:**
- `public/assets/hero/`
- `public/assets/backgrounds/`
- `public/assets/characters/`
- `public/assets/weeks/`
- `public/assets/ui/`
- `public/assets/textures/`

**Notas:**
- Copia archivos tal cual están (no realiza conversión)
- Para convertir a WebP, usa `cwebp` por separado
- Los archivos existentes se sobreescriben

---

## Workflow Recomendado

### Agregar Nueva Semana con Screenshots

```bash
# 1. Crear estructura de semana
npm run add-week -- --week 8

# 2. Copiar screenshots a carpeta local (opcional)
cp ~/Downloads/week8/*.webp ./temp_assets/weeks/week-08/

# 3. Importar assets
bash scripts/import-assets.sh ./temp_assets

# 4. Editar contenido markdown
nano content/weeks/week-08.md

# 5. Commit y push
git add content/ public/assets/
git commit -m "feat: Add week 8 content and screenshots"
git push origin main
```

### Actualizar Assets Globales

```bash
# 1. Preparar archivos localmente
# (convertir a WebP, optimizar, nombrar correctamente)

# 2. Copiar a proyecto
bash scripts/import-assets.sh /ruta/a/nuevos/assets

# 3. Probar localmente
npm run dev

# 4. Deploy
git add public/assets/
git commit -m "chore: Update assets"
git push origin main
```

---

## Requisitos Previos

### Para `add-week.js`
- Node.js 14+
- NPM o Yarn

### Para `import-assets.sh`
- Bash 4.0+
- Permisos de lectura/escritura en `public/assets/`

**Verificar bash:**
```bash
bash --version
# GNU bash, version 5.x.x...
```

---

## Integración con npm

Los scripts están registrados en `package.json`:

```json
{
  "scripts": {
    "add-week": "node scripts/add-week.js",
    "import-assets": "bash scripts/import-assets.sh"
  }
}
```

**Ejecutar como:**
```bash
npm run add-week -- --week 8
npm run import-assets
```

---

## Variables de Entorno

Los scripts no requieren variables de entorno, pero pueden ser afectados por:

- `NODE_ENV`: Si está seteado a `production`
- `PWD`: Directorio de trabajo actual
- `HOME`: Para rutas relativas

---

## Troubleshooting

### Script no encontrado
```bash
# Asegúrate de estar en la raíz del proyecto
cd fallen-souls-website

# Verifica que exists
ls -la scripts/add-week.js
```

### Permisos denegados (bash)
```bash
# Dar permisos de ejecución
chmod +x scripts/import-assets.sh

# O ejecutar con bash explícitamente
bash scripts/import-assets.sh
```

### Node.js no encontrado
```bash
# Verificar instalación
node --version
npm --version

# Reinstalar si es necesario
# Ver https://nodejs.org/
```

### Archivos no se copian
```bash
# Verificar que la carpeta origen existe
ls -la ./mis_assets/hero/

# Verificar permisos
stat ./mis_assets/hero/hero_loop_01_1080.mp4

# Copiar manualmente si script falla
cp -r ./mis_assets/* public/assets/
```

---

## Extensiones Futuras

Posibles mejoras a los scripts:

- [ ] Generador de thumbnails automático
- [ ] Convertidor de imágenes PNG ? WebP
- [ ] Validador de estructura de assets
- [ ] Generador de galería JSON desde archivos
- [ ] Script para sincronizar con CDN externo

---

## Support

Para preguntas o problemas con los scripts:

1. Revisar esta documentación
2. Consultar `README.md` principal
3. Ver ejemplos en `content/weeks/week-*.md`
4. Abrir issue en el repositorio

---

**Última actualización:** 2024
**Versión:** 1.0.0
