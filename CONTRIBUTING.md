# Guía de Contribución - Fallen Souls Website

¡Gracias por tu interés en contribuir a la web de Fallen Souls! Esta guía te ayudará a entender cómo colaborar.

## Cómo Empezar

### 1. Fork y Clone
```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/fallen-souls-website.git
cd fallen-souls-website
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Crear Rama
```bash
# Usa nombres descriptivos
git checkout -b feature/nombre-de-la-caracteristica
# O para fixes
git checkout -b fix/descripcion-del-bug
```

## Tipos de Contribución

### ?? Contenido (Más Fácil)

**Agregar nueva semana:**
```bash
npm run add-week -- --week 8
nano content/weeks/week-08.md
# Editar y guardar
```

**Actualizar página existente:**
- Editar archivos en `app/` (ej: `app/media/page.tsx`)
- Editar contenido en `content/` (JSON o Markdown)

**Agregar Assets:**
```bash
# Copiar imágenes a carpeta correcta
cp mis_images/*.webp public/assets/weeks/week-08/

# O usar el script
bash scripts/import-assets.sh ./mis_assets
```

### ?? Componentes UI

1. Crear componente en `components/NombreComponente/`
   - `NombreComponente.tsx`
   - `NombreComponente.module.css`

2. Ejemplo:
```tsx
// components/NuevoComponente/NuevoComponente.tsx
import styles from './NuevoComponente.module.css';

export default function NuevoComponente() {
  return <div className={styles.container}>Contenido</div>;
}
```

3. Agregar estilos:
```css
/* components/NuevoComponente/NuevoComponente.module.css */
.container {
  background: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}
```

### ?? Bug Fixes

1. Crear issue describiendo el bug
2. Crear rama `fix/descripcion-corta`
3. Corregir el problema
4. Agregar tests si es posible
5. Push y crear Pull Request

### ? Performance & SEO

- Verificar Lighthouse score: `npm run build` y auditar con Chrome DevTools
- Optimizar imágenes a WebP
- Asegurar metadata correcta en `app/layout.tsx`

## Estándares de Código

### TypeScript
- Usar tipos explícitos siempre
- Evitar `any`
- Verificar tipos: `npm run type-check`

### Estilos
- Usar CSS Modules (no estilos inline)
- Usar variables CSS predefinidas
- Mantener consistencia con la paleta de colores

### Componentes
- Funcionales + hooks
- Props tipados
- Componentes accesibles (ARIA, navegación por teclado)

### Ejemplos

? **Bueno:**
```tsx
interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  onClick, 
  label, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button 
      className={styles[variant]}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

? **Malo:**
```tsx
export default function Button(props: any) {
  return (
    <button style={{ color: 'blue' }} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
```

## Workflow Recomendado

### 1. Crear rama y hacer cambios
```bash
git checkout -b feature/nueva-galeria
# Editar archivos
npm run dev # Probar localmente
```

### 2. Verificar calidad
```bash
npm run type-check
npm run lint
npm run lint:fix  # Auto-corregir si es posible
npm run format
npm run build
```

### 3. Commit y Push
```bash
git add .
git commit -m "feat: Agregar nueva galería interactiva"
git push origin feature/nueva-galeria
```

### 4. Crear Pull Request
- En GitHub, crear PR contra `main`
- Describir cambios claramente
- Referenciar issues relacionadas: `Closes #123`
- Esperar revisión

## Formato de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(scope): descripción breve

Descripción detallada si es necesario.

Closes #número-de-issue
```

### Tipos Válidos:
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato (no afectan lógica)
- `refactor`: Cambio de código sin nueva funcionalidad
- `perf`: Mejora de performance
- `test`: Agregar o actualizar tests
- `chore`: Cambios en build, deps, etc.

### Ejemplos:
```
feat(media): agregar lightbox accesible a galería
fix(hero): corregir posición del video en móvil
docs(readme): actualizar instrucciones de instalación
chore(deps): actualizar Next.js a v14.1
```

## Estructura de Archivos - Convenciones

```
? Correcto:
- components/ComponenteName/ComponenteName.tsx
- components/ComponenteName/ComponenteName.module.css
- app/page-name/page.tsx
- app/page-name/page-name.module.css

? Incorrecto:
- components/component.tsx (sin carpeta)
- app/page_name.tsx (snake_case)
- styles/Component.css (sin module)
```

## Testing (Futuro)

Aunque no hay tests actualmente, se recomienda:
- Mantener componentes puros y testables
- Evitar lógica compleja en componentes
- Separar lógica en funciones reutilizables

## Performance Checklist

Antes de hacer PR, asegúrate de:

- [ ] Imágenes en WebP/AVIF optimizadas
- [ ] Videos comprimidos (<500KB para web)
- [ ] Componentes lazy-loaded donde sea posible
- [ ] CSS crítico no duplicado
- [ ] Sin console.errors en modo dev
- [ ] Lighthouse score > 85

## Accesibilidad Checklist

- [ ] Color contrast ratio >= 4.5:1
- [ ] Elementos interactivos focusables
- [ ] ARIA labels apropiados
- [ ] Navegación por teclado funcional
- [ ] Alt text en imágenes
- [ ] Semantic HTML5

## Recursos Útiles

- ?? [Next.js Docs](https://nextjs.org/docs)
- ?? [CSS Modules](https://github.com/css-modules/css-modules)
- ? [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- ? [Web Vitals](https://web.dev/vitals/)

## Preguntas o Problemas?

- ?? Abre una discussion en GitHub
- ?? Reporta bugs con issue template
- ?? Revisa CONTRIBUTING.md y README.md

---

**¡Gracias por contribuir a Fallen Souls! ??**

Versión: 1.0.0
