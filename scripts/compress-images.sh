#!/usr/bin/env bash
#
# compress-images.sh
# Usage:
#   Dry-run (log only): ./scripts/compress-images.sh --dry-run
#   Actual compress:    ./scripts/compress-images.sh
#
# Notes:
# - Recursively processes public/images/
# - JPEG/JPG/WEBP: sips -s formatOptions 80 --resampleWidth 1600
# - PNG: sips -Z 1600 (lossless resize)
# - SVG: skipped
# - Requires macOS built-in `sips`

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMG_ROOT="$ROOT/public/images"
DRY_RUN=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
fi

if [[ ! -d "$IMG_ROOT" ]]; then
  echo "public/images not found at $IMG_ROOT"
  exit 1
fi

echo "Mode: $([[ $DRY_RUN == true ]] && echo DRY-RUN || echo ACTUAL)"
echo "Image root: $IMG_ROOT"

before_size() {
  du -sh "$IMG_ROOT"
}

process_file() {
  local f="$1"
  local ext="${f##*.}"
  ext="${ext,,}" # lowercase
  case "$ext" in
    jpg|jpeg|webp)
      if [[ $DRY_RUN == true ]]; then
        echo "[DRY] sips -s formatOptions 80 --resampleWidth 1600 \"$f\""
      else
        sips -s formatOptions 80 --resampleWidth 1600 "$f" >/dev/null
      fi
      ;;
    png)
      if [[ $DRY_RUN == true ]]; then
        echo "[DRY] sips -Z 1600 \"$f\""
      else
        sips -Z 1600 "$f" >/dev/null
      fi
      ;;
    svg)
      # skip
      ;;
    *)
      # ignore other types
      ;;
  esac
}

echo "Before size:"
before_size

while IFS= read -r -d '' file; do
  process_file "$file"
done < <(find "$IMG_ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.svg" -o -iname "*.gif" \) -print0)

echo "After size:"
before_size

echo "Done."
