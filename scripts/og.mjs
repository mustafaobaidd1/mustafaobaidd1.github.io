// Renders scripts/og.html to public/og-image.png (1200x630). Run after all previews exist.
import { chromium } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.goto(pathToFileURL(resolve('scripts/og.html')).href);
await p.waitForLoadState('networkidle');
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(300);
await p.screenshot({ path: 'public/og-image.png' });
await b.close();
console.log('wrote public/og-image.png');
