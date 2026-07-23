/**
 * tech.ts
 * Resuelve logos de tecnología desde `simple-icons` POR SLUG en build-time.
 * - Devuelve { path, hex } del logo oficial (color de marca incluido).
 * - Si el slug no existe (renombres, ej. amazonaws → amazonwebservices),
 *   prueba una lista de candidatos y, si nada, devuelve null → el chip
 *   hace fallback a un punto de color. NUNCA rompe el diseño.
 *
 * Slugs de referencia: https://simpleicons.org  (clic en un logo → slug)
 */
import * as SI from 'simple-icons';

type SIIcon = { slug: string; path: string; hex: string; title: string };

// Filtramos solo los objetos-icono del namespace (excluye helpers/version).
const ICONS = (Object.values(SI) as unknown as Array<Partial<SIIcon>>).filter(
    (i): i is SIIcon =>
        typeof i?.slug === 'string' && typeof i?.path === 'string'
);

export type TechMeta = { path: string; hex: string };

/** Acepta un slug o varios candidatos (por robustez ante renombres). */
export function getTechMeta(slugs?: string | string[]): TechMeta | null {
    if (!slugs) return null;
    const list = Array.isArray(slugs) ? slugs : [slugs];
    for (const slug of list) {
        const hit = ICONS.find((i) => i.slug === slug);
        if (hit) return { path: hit.path, hex: `#${hit.hex}` }; // hex viene sin #
    }
    return null;
}