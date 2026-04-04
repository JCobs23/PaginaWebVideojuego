#!/usr/bin/env node

/**
 * add-week.js
 * Script para crear una nueva semana de desarrollo
 * Uso: node scripts/add-week.js --week 8
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const weekIndex = args.indexOf('--week');
const weekNumber = weekIndex !== -1 ? parseInt(args[weekIndex + 1]) : null;

if (!weekNumber || weekNumber < 5 || weekNumber > 17) {
  console.error('? Error: Especifica un número de semana válido (5-17)');
  console.error('Uso: node scripts/add-week.js --week NUMBER');
  process.exit(1);
}

const weekDir = path.join('content', 'weeks');
const fileName = `week-${String(weekNumber).padStart(2, '0')}.md`;
const filePath = path.join(weekDir, fileName);

if (!fs.existsSync(weekDir)) {
  fs.mkdirSync(weekDir, { recursive: true });
}

if (fs.existsSync(filePath)) {
  console.error(`? Error: El archivo ${fileName} ya existe`);
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0];
const template = `---
weekNumber: ${weekNumber}
title: "Semana ${weekNumber} - Título del Hito"
date: "${date}"
buildVersion: "0.${weekNumber - 4}.0"
status: "in_progress"
---

# Semana ${weekNumber}: Descripción del Hito

## Descripción General
Describe el objetivo principal de esta semana.

## Logros Principales
- ? Logro 1
- ? Logro 2
- ? Logro 3

## Complicaciones Encontradas
- Complicación 1
- Complicación 2

## Próximos Pasos
- Próximo paso 1
- Próximo paso 2

## Attachments
- archivo1.zip
- archivo2.pdf
`;

fs.writeFileSync(filePath, template);

console.log(`? Semana ${weekNumber} creada exitosamente!`);
console.log(`?? Archivo: ${filePath}`);
console.log(`\n?? Para agregar imágenes:`);
console.log(`   mkdir -p public/assets/weeks/week-${String(weekNumber).padStart(2, '0')}`);
