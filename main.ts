// The world's news of Monday 23 November 2026, on one page.
// src/page.html is the hand-written HTML/SVG layout; src/render.mjs turned it into entry.png once.
// This program needs no network: it copies that PNG to the output directory byte for byte.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
