import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/previews/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
  },
);

function find(name: string): ImageMetadata | undefined {
  for (const [path, mod] of Object.entries(files)) {
    const file = path.split('/').pop() ?? '';
    if (file.replace(/\.(png|jpe?g|webp)$/, '') === name) return mod.default;
  }
  return undefined;
}

/** Desktop preview for a project (required). */
export function preview(slug: string): ImageMetadata {
  const img = find(slug);
  if (!img) throw new Error(`Missing preview image for "${slug}" in src/assets/previews/`);
  return img;
}

/** Phone-sized preview, if one exists. */
export function mobilePreview(slug: string): ImageMetadata | undefined {
  return find(`${slug}-mobile`);
}
