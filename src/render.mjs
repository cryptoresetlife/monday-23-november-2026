// Renders src/page.html to ../entry.png at exactly 1024x1024 with headless Chrome.
// Run once by hand after editing the page: node src/render.mjs
// (The entry program main.ts never runs this; it only copies the finished PNG.)
import { execFileSync } from 'node:child_process';
import { statSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const page = pathToFileURL(join(here, 'page.html')).href;
const out = join(here, '..', 'entry.png');

const candidates = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) throw new Error('Chrome not found; set CHROME=<path>');

execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  '--default-background-color=00000000',
  '--virtual-time-budget=2000',
  `--screenshot=${out}`,
  page,
], { stdio: 'inherit' });

const bytes = statSync(out).size;
console.log(`wrote ${out} (${bytes} bytes)`);
if (bytes > 1048576) throw new Error('entry.png is over 1 MiB');
