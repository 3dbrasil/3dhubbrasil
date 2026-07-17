import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const items = [
  { name: '3D Kitbash', color: '#FF6B35' },
  { name: 'Astroprint', color: '#00B4D8' },
  { name: 'Free3D', color: '#4CAF50' },
  { name: 'Pinshape', color: '#E91E63' },
  { name: 'PrintPal', color: '#9C27B0' },
  { name: 'Redpah', color: '#F44336' },
  { name: 'Sculpteo', color: '#FF9800' },
  { name: 'Shapeways', color: '#2196F3' },
  { name: 'TurboSquid', color: '#673AB7' },
  { name: 'YouMagine', color: '#009688' },
];

const dir = path.join(__dirname, 'public', 'toolimages');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function generatePlaceholder(item) {
  const safeName = item.name.replace(/[^\w\-]/g, '_');
  const outputPath = path.join(dir, `${safeName}.webp`);
  
  if (fs.existsSync(outputPath)) {
    console.log(`✓ ${safeName}.webp already exists`);
    return;
  }

  try {
    const svg = `
      <svg width="480" height="270" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${item.color};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${item.color}DD;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
              font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="white">
          ${item.name}
        </text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✓ Generated ${safeName}.webp`);
  } catch (err) {
    console.error(`✗ Failed ${item.name}: ${err.message}`);
  }
}

async function main() {
  for (const item of items) {
    await generatePlaceholder(item);
  }
  console.log('Done!');
}

main();