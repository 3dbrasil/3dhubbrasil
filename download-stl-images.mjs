import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const items = [
  { name: '3D Kitbash', url: 'https://3dkitbash.com' },
  { name: 'Astroprint', url: 'https://www.astroprint.com' },
  { name: 'Free3D', url: 'https://free3d.com' },
  { name: 'Pinshape', url: 'https://pinshape.com' },
  { name: 'PrintPal', url: 'https://printpal.io' },
  { name: 'Redpah', url: 'https://www.redpah.com' },
  { name: 'Sculpteo', url: 'https://www.sculpteo.com' },
  { name: 'Shapeways', url: 'https://www.shapeways.com' },
  { name: 'TurboSquid', url: 'https://www.turbosquid.com' },
  { name: 'YouMagine', url: 'https://youmagine.com' },
];

const dir = path.join(__dirname, 'public', 'toolimages');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImage(item) {
  const safeName = item.name.replace(/[^\w\-]/g, '_');
  const outputPath = path.join(dir, `${safeName}.webp`);
  
  if (fs.existsSync(outputPath)) {
    console.log(`✓ ${safeName}.webp already exists`);
    return;
  }

  try {
    // Try thum.io with simpler format
    const apiUrl = `https://image.thum.io/get/width/600/${encodeURIComponent(item.url)}`;
    const res = await fetch(apiUrl);
    
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✓ Downloaded ${safeName}.webp (${buffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`✗ Failed ${item.name}: ${err.message}`);
  }
}

async function main() {
  for (const item of items) {
    await downloadImage(item);
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('Done!');
}

main();