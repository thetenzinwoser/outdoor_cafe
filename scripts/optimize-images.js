const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const ORIGINALS_DIR = path.join(PUBLIC_DIR, 'originals');

// Images that need optimization (2MB+ or unused)
const IMAGES_TO_OPTIMIZE = [
  'hero_evanston.jpg',
  'cover2.jpg',
  'chicago.jpg',
  'evanston.jpg',
  'shared.png',
];

// Unused images to move to backup
const UNUSED_IMAGES = [
  'evanston2.jpg',
  'cover.jpg',
  'patio-hero.png',
];

// Responsive sizes for hero images
const RESPONSIVE_SIZES = [640, 1024, 1920];

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function backupOriginal(filename) {
  const sourcePath = path.join(PUBLIC_DIR, filename);
  const destPath = path.join(ORIGINALS_DIR, filename);

  try {
    await fs.copyFile(sourcePath, destPath);
    console.log(`✓ Backed up ${filename} to originals/`);
  } catch (error) {
    console.log(`⚠ Could not backup ${filename}: ${error.message}`);
  }
}

async function optimizeImage(filename, isHero = false) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\nOptimizing ${filename} (${metadata.width}x${metadata.height})...`);

    // Backup original first
    await backupOriginal(filename);

    if (isHero) {
      // Create responsive versions for hero images
      for (const width of RESPONSIVE_SIZES) {
        // WebP version
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(path.join(PUBLIC_DIR, `${basename}-${width}w.webp`));

        // JPEG fallback
        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          .jpeg({ quality: 85, mozjpeg: true })
          .toFile(path.join(PUBLIC_DIR, `${basename}-${width}w.jpg`));

        console.log(`  ✓ Created ${width}w versions (WebP + JPEG)`);
      }
    }

    // Always create optimized default version
    const tempPath = path.join(PUBLIC_DIR, `${basename}_temp${ext}`);

    if (ext === '.png') {
      // PNG: convert to WebP + optimized PNG
      await image
        .clone()
        .webp({ quality: 85 })
        .toFile(path.join(PUBLIC_DIR, `${basename}.webp`));

      await image
        .clone()
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(tempPath);

      // Replace original with optimized version
      await fs.rename(tempPath, inputPath);
      console.log(`  ✓ Optimized PNG and created WebP version`);
    } else {
      // JPEG: create WebP + optimized JPEG
      await image
        .clone()
        .webp({ quality: 82 })
        .toFile(path.join(PUBLIC_DIR, `${basename}.webp`));

      await image
        .clone()
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(tempPath);

      // Replace original with optimized version
      await fs.rename(tempPath, inputPath);
      console.log(`  ✓ Optimized JPEG and created WebP version`);
    }

    // Get new file size
    const stats = await fs.stat(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`  ✓ New size: ${sizeMB}MB`);

  } catch (error) {
    console.error(`  ✗ Error optimizing ${filename}: ${error.message}`);
  }
}

async function moveUnusedImages() {
  console.log('\n=== Moving unused images to backup ===\n');

  for (const filename of UNUSED_IMAGES) {
    const sourcePath = path.join(PUBLIC_DIR, filename);
    const destPath = path.join(ORIGINALS_DIR, filename);

    try {
      await fs.copyFile(sourcePath, destPath);
      await fs.unlink(sourcePath);
      console.log(`✓ Moved ${filename} to originals/`);
    } catch (error) {
      console.log(`⚠ Could not move ${filename}: ${error.message}`);
    }
  }
}

async function main() {
  console.log('=== Outdoor Café Image Optimization ===\n');

  // Ensure originals directory exists
  await ensureDir(ORIGINALS_DIR);

  // Move unused images first
  await moveUnusedImages();

  // Optimize hero images (need responsive versions)
  console.log('\n=== Optimizing hero images ===');
  const heroImages = ['hero_evanston.jpg', 'cover2.jpg'];
  for (const img of heroImages) {
    if (IMAGES_TO_OPTIMIZE.includes(img)) {
      await optimizeImage(img, true);
    }
  }

  // Optimize other large images
  console.log('\n=== Optimizing other images ===');
  const otherImages = IMAGES_TO_OPTIMIZE.filter(img => !heroImages.includes(img));
  for (const img of otherImages) {
    await optimizeImage(img, false);
  }

  console.log('\n=== Optimization complete! ===\n');
  console.log('Next steps:');
  console.log('1. Check the optimized images in /public');
  console.log('2. Originals are backed up in /public/originals');
  console.log('3. Update your code to use Next.js Image component');
}

main().catch(console.error);
