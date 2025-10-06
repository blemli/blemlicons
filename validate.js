#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'fs';
import path from 'path';

const iconsDir = path.join(process.cwd(), 'icons');
let failed = false;

function error(file, msg) {
  console.error(`❌ ${file}: ${msg}`);
  failed = true;
}

for (const file of readdirSync(iconsDir)) {
  if (!file.endsWith('.svg')) continue;
  const fullPath = path.join(iconsDir, file);
  const content = readFileSync(fullPath, 'utf8');
  const stats = statSync(fullPath);
  if (stats.size > 3500) {
    error(file, 'file too large (>3.5kb)');
  }

  if (!content.includes('viewBox="0 0 24 24"')) {
    error(file, 'missing or wrong viewBox (should be 0 0 24 24)');
  }
  if (!content.includes('currentColor')) {
    error(file, 'should use currentColor for stroke/fill');
  }
  if (content.includes('xmlns:vectornator') || /\svectornator:/.test(content)) {
    error(file, 'contains Vectornator namespace/attributes — run `npm run svgo` to strip');
  }
  if (/\s(width|height)="[0-9]+"/.test(content)) {
    error(file, 'should not have hardcoded width/height attributes');
  }
}

if (failed) {
  console.error('\nValidation failed. Fix errors above.');
  process.exit(1);
} else {
  console.log('✅ All SVG icons passed validation.');
}
