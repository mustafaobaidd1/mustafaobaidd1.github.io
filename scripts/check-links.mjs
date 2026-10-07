// Checks every link in the built site (dist/): internal links must resolve to a built file,
// external links must answer 2xx/3xx. Run after `npm run build`.
// Usage: node scripts/check-links.mjs [--internal-only]
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = 'dist';
const internalOnly = process.argv.includes('--internal-only');
const SITE = 'https://mustafaobaidd1.github.io';

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

const pages = walk(dist);
const internal = new Map();
const external = new Map();

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const from =
    '/' +
    relative(dist, page)
      .split(sep)
      .join('/')
      .replace(/index\.html$/, '');
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1].replaceAll('&amp;', '&');
    if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('data:')) continue;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // Links to the user site itself are checked as internal paths when they point at the hub.
      if (!external.has(url)) external.set(url, from);
    } else {
      const clean = new URL(url, `${SITE}${from}`).pathname;
      if (!internal.has(clean)) internal.set(clean, from);
    }
  }
}

const problems = [];
for (const [path, from] of internal) {
  const target = join(dist, decodeURIComponent(path));
  const ok =
    existsSync(target) && statSync(target).isFile() ? true : existsSync(join(target, 'index.html'));
  if (!ok) problems.push(`internal 404: ${path} (linked from ${from})`);
}

if (!internalOnly) {
  const entries = [...external];
  const results = await Promise.all(
    entries.map(async ([url, from]) => {
      try {
        let res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        if (res.status === 405 || res.status === 403)
          res = await fetch(url, { redirect: 'follow' });
        return { url, from, status: res.status };
      } catch (err) {
        return { url, from, status: 0, error: String(err) };
      }
    }),
  );
  for (const r of results) {
    if (r.status < 200 || r.status >= 400) {
      problems.push(`external ${r.status || 'ERR'}: ${r.url} (linked from ${r.from})`);
    }
  }
  console.log(`checked ${internal.size} internal and ${external.size} external links`);
} else {
  console.log(`checked ${internal.size} internal links`);
}

if (problems.length) {
  console.log(problems.join('\n'));
  process.exit(1);
}
console.log('all links OK');
