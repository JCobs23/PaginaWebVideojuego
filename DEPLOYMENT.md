# Guía de Despliegue - Fallen Souls Website

## Opciones de Despliegue

### ? Opción 1: Netlify (Recomendado)

Netlify es la opción más simple y recomendada para este proyecto.

#### A. Setup Inicial (Una sola vez)

1. **Crear cuenta en Netlify**
   - Ir a https://netlify.com
   - Sign up (puedes usar GitHub)

2. **Conectar repositorio**
   - En Netlify dashboard: "New site from Git"
   - Seleccionar GitHub
   - Autorizar Netlify en GitHub
   - Seleccionar repositorio `fallen-souls-website`

3. **Configurar build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables: (dejar en blanco por ahora)
   - Haz clic en "Deploy site"

4. **Esperar deployment**
   - Netlify mostrará un subdomain (ej: `happy-sloth-a1b2c3.netlify.app`)
   - Tu sitio está vivo en ~3-5 minutos

#### B. Deploy Automático

Una vez configurado, cada push a `main` dispara automáticamente un nuevo build:

```bash
# Editar archivo
nano content/weeks/week-08.md

# Commit y push
git add content/weeks/week-08.md
git commit -m "feat: Add week 8 content"
git push origin main

# ? Netlify automáticamente reconstruye y despliega
# Puedes ver el progreso en Netlify dashboard
```

#### C. Deploy Manual (Sin cambios en Git)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Autenticar
netlify login

# Deploy
netlify deploy --prod

# Seguir las instrucciones en terminal
```

#### D. Variables de Entorno (Si es necesario)

1. En Netlify dashboard: Site settings ? Build & deploy ? Environment
2. Agregar variables:
   ```
   NEXT_PUBLIC_SITE_URL = https://tu-dominio.netlify.app
   NODE_ENV = production
   ```

#### E. Dominio Personalizado

1. En Netlify: Domain management ? Add domain
2. Apunta tu dominio a Netlify (CNAME o Name Servers)
3. Esperar verificación (5-48 horas)

**Ejemplo DNS:**
```
CNAME: www ? happy-sloth-a1b2c3.netlify.app
```

---

### ?? Opción 2: Vercel

Alternativa de Vercel (makers de Next.js).

#### Setup Inicial

1. Ir a https://vercel.com
2. Sign up con GitHub
3. "Import Project" ? seleccionar `fallen-souls-website`
4. Deploy automático

#### Deploy Automático
- Igual que Netlify: cada push a `main` = nuevo deploy
- Vercel proporciona previews para PRs

---

### ?? Opción 3: Despliegue Manual (Avanzado)

Deployar en tu propio servidor/VPS.

#### Requisitos:
- Servidor con Node.js 18+
- Docker (opcional)
- PM2 o similar para gestionar proceso

#### Pasos:

```bash
# 1. SSH al servidor
ssh usuario@tu-servidor.com

# 2. Clonar repositorio
git clone https://github.com/tu-usuario/fallen-souls-website.git
cd fallen-souls-website

# 3. Instalar dependencias
npm install --production

# 4. Build
npm run build

# 5. Iniciar con PM2
npm install -g pm2
pm2 start "npm start" --name "fallen-souls"
pm2 save

# 6. Configurar Nginx/Apache como reverse proxy
```

**Nginx config (ejemplo):**
```nginx
server {
    listen 80;
    server_name fallensoulsgame.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Checklist Pre-Deploy

Antes de cualquier despliegue:

```bash
# 1. Verificar código
npm run type-check
npm run lint
npm run format

# 2. Build local
npm run build

# 3. Probar build localmente
npm start

# 4. Visitar http://localhost:3000 en navegador
# 5. Probar todas las rutas:
#    - /
#    - /desarrollo
#    - /media
#    - /descargas
#    - /equipo
#    - /api/content?type=home

# 6. Verificar assets
#    - Hero video presente
#    - Screenshots cargando
#    - Caracteres visibles

# 7. Verificar performance
#    - Abrir Chrome DevTools ? Lighthouse
#    - Ejecutar auditoría completa
#    - Score > 85 en todas categorías
```

---

## Monitoreo Post-Deploy

### Verificar Despliegue

1. **Acceso público**
   ```bash
   curl https://tu-dominio.com
   # Debe retornar HTML
   ```

2. **Verificar Lighthouse en producción**
   - Ir a tu sitio
   - Chrome DevTools ? Lighthouse
   - Ejecutar auditoría
   - Anotar scores

3. **Verificar SEO**
   ```bash
   curl -I https://tu-dominio.com
   # Buscar headers importantes
   ```

4. **Monitoreo de rendimiento**
   - Registrarse en https://web.dev
   - Agregar URL de sitio
   - Web Vitals data mostrará en 24h

### Logs

#### Netlify
```bash
netlify build:log
```

#### Vercel
- Ver en dashboard ? Deployments ? Logs

#### Servidor manual
```bash
pm2 logs fallen-souls
```

---

## Solución de Problemas

### Build falla

**Netlify/Vercel:**
1. Ver logs en dashboard
2. Común: `npm install` incompleto
3. Solución: Clear cache y redeploy

```bash
# En Netlify: Site settings ? Builds ? Clear build cache
# En Vercel: Settings ? Git ? Redeploy
```

### Sitio lento

1. Verificar assets:
   ```bash
   # Comprobar tamaño
   du -sh public/assets/
   # Debe ser < 50MB
   ```

2. Verificar images.tsconfig
   ```bash
   # En next.config.js
   # devices sizes correcto?
   ```

3. Limpiar caché del navegador (Ctrl+Shift+Del)

### Rutas 404

**Causa común:** `.next` publicado incorrectamente

**Solución:**
- Netlify: Publish directory = `.next`
- Vercel: Debería ser automático
- Manual: Verificar ruta en nginx/apache

### Assets no se muestran

1. Verificar nombres de archivo
2. Verificar rutas en componentes
3. Verificar que archivos están en `public/assets/`

```bash
ls -la public/assets/hero/
# Debe mostrar: hero_loop_01_1080.mp4, hero_poster_1920.webp
```

### GitHub Actions falla

Si está configurado, revisar `.github/workflows/deploy.yml`:

1. Verificar secretos en GitHub
2. Verificar `NETLIFY_AUTH_TOKEN` válido
3. Ver logs en GitHub Actions tab

```bash
# Regenerar token
netlify login
# Copiar token a GitHub Secrets
```

---

## Actualizar Despliegue

### Pequeños cambios (contenido)

```bash
# Editar y push
git push origin main

# ? Automáticamente desplegado en 2-3 minutos
```

### Cambios mayores (deps, config)

```bash
# Actualizar package.json
npm install nuevo-paquete

# Commit y push
git add package.json package-lock.json
git commit -m "deps: update packages"
git push origin main

# Verificar que build completa en dashboard
```

### Rollback (si algo se rompe)

#### Netlify
1. Deployments ? Seleccionar versión anterior
2. Click "Publish deploy"

#### Vercel
1. Deployments ? Seleccionar versión anterior
2. Promote to Production

#### Git
```bash
git log  # Ver commits
git revert COMMIT_HASH
git push origin main
# Netlify/Vercel automáticamente redeploya
```

---

## Optimizaciones de Producción

### 1. Enable Compression

**Netlify:** Automático ?

**Vercel:** Automático ?

**Manual:** Nginx
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

### 2. CDN para Assets

Considerar usar:
- Cloudflare
- AWS CloudFront
- Bunny CDN

```env
NEXT_PUBLIC_CDN_URL=https://cdn.ejemplo.com/assets
```

Luego usar en componentes:
```tsx
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || '/assets';
<img src={`${cdnUrl}/hero/hero_poster.webp`} />
```

### 3. Caching Headers

**netlify.toml** ya incluye:
```toml
Cache-Control = "public, max-age=31536000" # Assets
Cache-Control = "public, max-age=0, must-revalidate" # HTML
```

---

## Respaldo (Backup)

### Contenido

Los datos en `content/` están en Git:
```bash
git pull origin main  # Recuperar cualquier versión anterior
```

### Assets

```bash
# Descargar assets desde Netlify
wget -r https://tu-dominio.com/assets/
# O desde Vercel
wget -r https://tu-vercel-url.vercel.app/assets/
```

### Base de datos (si la hay)

No hay BD en este proyecto.

---

## SSL/HTTPS

### Netlify & Vercel
- Automático ?
- Let's Encrypt gratis
- Renovación automática

### Dominio personalizado
- Ir a Site settings
- Add custom domain
- Seleccionar opción HTTPS

---

## Migrar de Netlify a Vercel (o viceversa)

1. Desconectar deployment antiguo (en Netlify/Vercel)
2. Conectar nuevo servicio
3. Apuntar dominio al nuevo servicio
4. Esperar propagación DNS (5-48h)

---

## Monitoreo Continuo

### Herramientas Recomendadas

1. **Uptime monitoring**
   - UptimeRobot (gratuito)
   - Pingdom

2. **Analytics**
   - Google Analytics
   - Plausible (sin cookies)

3. **Error tracking**
   - Sentry
   - LogRocket

### Configurar Analytics

En `app/layout.tsx`:
```tsx
import Script from 'next/script';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## Referencia Rápida

| Tarea | Netlify | Vercel | Manual |
|-------|---------|--------|--------|
| Deploy inicial | 5 min | 5 min | 30 min |
| Deploy automático | ? | ? | Requiere CI/CD |
| Dominio gratis | ? | ? | ? |
| SSL gratis | ? | ? | ? (Let's Encrypt) |
| Build cache | ? | ? | Manual |
| Rollback | ? | ? | Git |
| Monitoreo | Básico | Básico | Requiere setup |
| Costo | Gratuito | Gratuito | Varía |

---

**¡Tu sitio está listo para producción! ??**

Para preguntas: Revisar README.md principal o abrir issue en GitHub.

Versión: 1.0.0
Última actualización: 2024
