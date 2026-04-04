#!/bin/bash

# import-assets.sh
# Script para copiar y procesar imágenes a public/assets/
# Uso: bash scripts/import-assets.sh

set -e

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

ASSETS_DIR="public/assets"
SOURCE_DIR="${1:-.}"

echo -e "${BLUE}?? Starting asset import process...${NC}"

# Crear directorios necesarios
mkdir -p "$ASSETS_DIR"/{hero,backgrounds,characters,weeks,ui,textures}

# Función para procesar imagen y crear variantes
process_image() {
  local input=$1
  local output_dir=$2
  local filename=$(basename "$input")
  local name="${filename%.*}"
  local ext="${filename##*.}"

  if [ ! -f "$input" ]; then
    echo -e "${RED}? Source file not found: $input${NC}"
    return 1
  fi

  # Copiar original
  cp "$input" "$output_dir/$filename"
  echo -e "${GREEN}? Copied $filename${NC}"
}

# Procesar assets hero
if ls "$SOURCE_DIR"/hero/* 1> /dev/null 2>&1; then
  for file in "$SOURCE_DIR"/hero/*; do
    process_image "$file" "$ASSETS_DIR/hero"
  done
fi

# Procesar backgrounds
if ls "$SOURCE_DIR"/backgrounds/* 1> /dev/null 2>&1; then
  for file in "$SOURCE_DIR"/backgrounds/*; do
    process_image "$file" "$ASSETS_DIR/backgrounds"
  done
fi

# Procesar characters
if ls "$SOURCE_DIR"/characters/* 1> /dev/null 2>&1; then
  for file in "$SOURCE_DIR"/characters/*; do
    process_image "$file" "$ASSETS_DIR/characters"
  done
fi

echo -e "${GREEN}? Asset import completed successfully!${NC}"
