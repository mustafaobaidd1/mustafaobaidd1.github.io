// Generates temporary preview images until real screenshots exist (dev only).
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const items = [
  ['karman-wind-tunnel', '#0b0c0e', '#ff4d2e', '01'],
  ['scatter-sky-lab', '#3b6fa8', '#ffd29a', '02'],
  ['heliograph-solar', '#f4efe6', '#e3a22a', '03'],
  ['strut-topology', '#f2f1ed', '#151515', '04'],
  ['fixture-league-scheduler', '#f3eee4', '#0b6e4f', '05'],
  ['quiet-zone-qr', '#fbfbf9', '#1f4bff', '06'],
  ['horocycle-hyperbolic', '#141a3a', '#c9a227', '07'],
  ['monochord-string-lab', '#f3eadb', '#2f6f73', '08'],
  ['deep-focus-earthquakes', '#0e1116', '#7b3cff', '09'],
  ['game', '#123b6d', '#e8c36a', '10'],
  ['TheSecret', '#ffffff', '#7cb342', 'TS'],
  ['MansafjiV2', '#f0ece2', '#222', 'MJ'],
  ['todo-list', '#e9e4d8', '#092e20', 'DJ'],
  ['aspnetcore-identity-demo', '#e9e4d8', '#512bd4', '.N'],
];
await mkdir('src/assets/previews', { recursive: true });
for (const [slug, bg, fg, label] of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900"><rect width="100%" height="100%" fill="${bg}"/><circle cx="1080" cy="420" r="260" fill="none" stroke="${fg}" stroke-width="10"/><text x="96" y="760" font-family="Georgia" font-size="320" fill="${fg}">${label}</text></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`src/assets/previews/${slug}.png`);
}
console.log('placeholders written');
