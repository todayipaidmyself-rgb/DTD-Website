/*
Usage:
  Dry-run (safe preview): node scripts/cleanup-unused-images.js
  Actual deletion: DO_DELETE=true node scripts/cleanup-unused-images.js
  Optional: Uncomment backup block for copy to ./unused_backup/

Reminder: Always backup project first!
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//
// 1) Hard-code ALL referenced/used image paths here (from previous analysis).
//    Keep these paths exactly as they appear in code: leading slash, case-sensitive.
//
const USED = new Set([
  "/images/logo_fresh.svg",
  "/images/proposal_setup_roses.webp",
  "/images/lights-balloons-decor/signature-experiences/baby-shower-organic-balloon-arch-pink.webp",
  "/images/lights-balloons-decor/signature-experiences/balloon-ceiling-canopy-purple-luxury-event.webp",
  "/images/lights-balloons-decor/signature-experiences/botanical-organic-balloon-arch-white-gold.webp",
  "/images/lights-balloons-decor/signature-experiences/bridal-shower-organic-balloon-feature-pink.webp",
  "/images/lights-balloons-decor/signature-experiences/luxury-organic-balloon-garland-rose-gold.webp",
  "/images/lights-balloons-decor/signature-experiences/luxury-organic-balloon-ring-arch-blush.webp",
  "/images/lights-balloons-decor/signature-experiences/metallic-balloon-ring-arch-blue-celebration.webp",
  "/images/lights-balloons-decor/signature-experiences/organic-balloon-arch-dessert-cart-baby-blue-gold.webp",
  "/images/lights-balloons-decor/signature-experiences/organic-balloon-garland-table-styling.webp",
  "/images/lights-balloons-decor/signature-experiences/statement-organic-balloon-arch-luxury-event.webp",
  "/images/lights-balloons-decor/signature-experiences/superhero-themed-balloon-backdrop-kids-party.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-love-beach.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-love-night.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-love-poolside.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-beach.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-proposal.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-resort.webp",
  "/images/lights-decor/signature-light-experiences/light-letters-statement-marry-me-sunset.webp",
  "/images/lights-decor/signature-light-experiences/light-numbers-statement-1-birthday.webp",
  "/images/lights-decor/signature-light-experiences/light-numbers-statement-21-birthday.webp",
  "/images/lights-decor/signature-light-experiences/light-styling-elegant-baby-shower.webp",
  "/images/lights-decor/signature-light-experiences/light-styling-elegant-christening-detail.webp",
  "/images/lights-decor/signature-light-experiences/light-styling-elegant-christening.webp",
  "/images/lights-decor/signature-light-experiences/light-styling-elegant-first-birthday.webp",
  "/images/experiences/baby-showers-hero.webp",
  "/images/hero/christmas-parties-hero-v2.webp",
  "/images/hero/lights-balloons-decor-hero.webp",
  "/images/hero/little-ones-parties-hero.webp",
  "/images/hero/picnic-parties-hero.webp",
  "/images/hero/themed-parties-superhero-hero.webp",
  "/images/heroes/birthday-parties-hero-v2.webp",
  "/images/heroes/commercial-events-hero.webp",
  "/images/heroes/milestone-parties-hero.webp",
  "/images/heroes/new-years-eve-hero.webp",
  "/images/heroes/proposals-hero.webp",
  "/images/heroes/weddings-hero.webp",
  "/images/teepee-parties-hero.webp",
  "/images/about_balloon_installation.webp",
  "/images/about_hero_luxury_experiences.webp",
  "/images/about_proposal_scene.webp",
  "/images/about_table_styling.webp",
  "/images/heroes/about-page-hero.webp",
  "/images/logo_fresh.svg",
  "/images/experiences/baby-showers-hero.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_1.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_2.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_3.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_4.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_5.webp",
  "/images/experiences/baby-showers/inspo/baby_shower_gallery_6.webp",
  "/images/new_collection/18.webp",
  "/images/new_collection/10.webp",
  "/images/new_collection/3.webp",
  "/images/birthday_gallery_1.webp",
  "/images/birthday_gallery_2.webp",
  "/images/birthday_gallery_3.webp",
  "/images/birthday_gallery_4.webp",
  "/images/birthday_gallery_5.webp",
  "/images/birthday_gallery_6.webp",
  "/images/heroes/birthday-parties-hero-v2.webp",
  "/images/blog_baby_shower_gender_reveal.webp",
  "/images/blog_baby_shower_neutral.webp",
  "/images/blog_kids_party_fairy.webp",
  "/images/blog_kids_party_safari.webp",
  "/images/blog_picnic_group_celebration.webp",
  "/images/blog_picnic_sunset_romance.webp",
  "/images/blog_proposal_beach_sunset.webp",
  "/images/blog_proposal_private_dinner.webp",
  "/images/blog_styling_tips_color_palette.webp",
  "/images/blog_styling_tips_outdoor.webp",
  "/images/blog_teepee_boho_chic.webp",
  "/images/blog_teepee_movie_night.webp",
  "/images/cyprus_hero_terrace_v2.webp",
  "/images/hero_slide_baby_shower_luxury.webp",
  "/images/hero_slide_kids_luxury.webp",
  "/images/hero_slide_picnic_luxury.webp",
  "/images/hero_slide_proposal_luxury.webp",
  "/images/hero_slide_teepee_luxury.webp",
  "/images/VIZY1169.webp",
  "/images/VIZY1194.webp",
  "/images/VIZY1202.webp",
  "/images/VIZY1224.webp",
  "/images/VIZY1232.webp",
  "/images/VIZY1260.webp",
  "/images/VIZY1372.webp",
  "/images/VIZY1524.webp",
  "/images/experiences/christening-luxury.webp",
  "/images/new_collection/7.webp",
  "/images/christmas_gallery_1.webp",
  "/images/christmas_gallery_2.webp",
  "/images/christmas_gallery_3.webp",
  "/images/christmas_gallery_4.webp",
  "/images/christmas_gallery_5.webp",
  "/images/christmas_gallery_6.webp",
  "/images/hero/christmas-parties-hero-v2.webp",
  "/images/heroes/christmas-hero.webp",
  "/images/commercial_included.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_1.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_2.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_3.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_4.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_5.webp",
  "/images/experiences/commercial-events/inspo/commercial_gallery_6.webp",
  "/images/heroes/commercial-events-hero.webp",
  "/images/gallery_proposal_setup.webp",
  "/images/hero-slide-2.webp",
  "/images/hero-slide-3.webp",
  "/images/hero-slide-4.webp",
  "/images/hero-slide-5.webp",
  "/images/hero-slide-6.webp",
  "/images/hero-slide-7.webp",
  "/images/hero-slide-8.webp",
  "/images/occasions-little-ones.webp",
  "/images/occasions-picnic.webp",
  "/images/occasions-proposals.webp",
  "/images/occasions-teepee.webp",
  "/images/about_founder_portrait_style.webp",
  "/images/versatility-elegance.webp",
  "/images/experiences/kids-parties-hero.webp",
  "/images/new_collection/19.webp",
  "/images/experiences/light-up-letters-hero.webp",
  "/images/new_collection/20.webp",
  "/images/closeup_light_bulbs.webp",
  "/images/light_up_lights_showcase.webp",
  "/images/hero/lights-balloons-decor-hero.webp",
  "/images/lights-balloons-decor/event-decor-floral-design.webp",
  "/images/lights-balloons-decor/event-decor-prop-hire.webp",
  "/images/lights-balloons-decor/event-decor-table-styling.webp",
  "/images/lights-decor/2791548de8b44a95b1a031cb8a76f033-0001.webp",
  "/images/lights-decor/8cbf57def198102608709aac1848afc7.webp",
  "/images/lights-decor/C286468B-F893-401A-A3FE-DCB3A6221F92.webp",
  "/images/lights-decor/IMG_0400.JPG",
  "/images/lights-decor/IMG_2068.JPG",
  "/images/lights-decor/IMG_2228.webp",
  "/images/lights-decor/IMG_2229.JPG",
  "/images/lights-decor/IMG_2230.JPG",
  "/images/lights-decor/IMG_6701.JPG",
  "/images/lights-decor/IMG_6702.JPG",
  "/images/lights-decor/IMG_6703.JPG",
  "/images/lights-decor/IMG_6707.JPG",
  "/images/lights-decor/IMG_6709.JPG",
  "/images/lights-decor/IMG_6712.JPG",
  "/images/lights-decor/IMG_6715.JPG",
  "/images/lights-decor/IMG_6717.JPG",
  "/images/lights-decor/IMG_6719.JPG",
  "/images/lights-decor/IMG_6722.JPG",
  "/images/lights-decor/IMG_6727.JPG",
  "/images/lights-decor/IMG_6732.JPG",
  "/images/lights-decor/IMG_6735.JPG",
  "/images/lights-decor/IMG_6739.JPG",
  "/images/lights-decor/IMG_6744.JPG",
  "/images/lights-decor/IMG_6745.JPG",
  "/images/lights-decor/IMG_8163.JPG",
  "/images/lights-decor/IMG_8524.webp",
  "/images/lights-decor/MMC-Christening Setup Alassos-1.webp",
  "/images/lights-decor/MMC-Christening Setup Alassos-60.webp",
  "/images/lights-decor/MMCA-27.webp",
  "/images/lights-decor/MMCA-30.webp",
  "/images/lights-decor/SEA YOU BEACH BAR MARRY ME CYPRUS 13.webp",
  "/images/lights-decor/Santa Marina Villa Paphos Marry Me Cyprus 23.JPG",
  "/images/hero/little-ones-parties-hero.webp",
  "/images/blog_kids_party_fairy.webp",
  "/images/blog_kids_party_safari.webp",
  "/images/cyprus_kids_party_v2.webp",
  "/images/hero_slide_kids_luxury.webp",
  "/images/kids_party_superhero.webp",
  "/images/kids_tea_party.webp",
  "/images/lights-balloons-decor/signature-experiences/comic-book-superhero-balloon-arch-birthday.webp",
  "/images/lights-balloons-decor/signature-experiences/pastel-organic-balloon-birthday-arch.webp",
  "/images/lights-balloons-decor/signature-experiences/superhero-themed-balloon-backdrop-kids-party.webp",
  "/images/little-ones/baby-shower-cyprus.webp",
  "/images/little-ones/gender-reveal-cyprus.webp",
  "/images/afternoon_tea_luxury_v3.webp",
  "/images/baby_shower_elegant.webp",
  "/images/detail_balloons_pastel.webp",
  "/images/detail_light_bulb_vintage.webp",
  "/images/hero_teepee_interior.webp",
  "/images/princess_party_luxury_v2.webp",
  "/images/kids_party_superhero.webp",
  "/images/teddy_bear_picnic_luxury_v2.webp",
  "/images/hero/little-ones-parties-hero.webp",
  "/images/heroes/milestone-parties-hero.webp",
  "/images/milestone_18th_birthday.webp",
  "/images/milestone_40th_birthday.webp",
  "/images/milestone_elegant_anniversary.webp",
  "/images/milestone_graduation_party.webp",
  "/images/milestone_parties_detail.webp",
  "/images/milestone_retirement_celebration.webp",
  "/images/milestone_sweet16_birthday.webp",
  "/images/experiences/new-years-eve/inspo/nye_details.webp",
  "/images/experiences/new-years-eve/inspo/nye_gallery_1.webp",
  "/images/experiences/new-years-eve/inspo/nye_gallery_2.webp",
  "/images/experiences/new-years-eve/inspo/nye_gallery_3.webp",
  "/images/heroes/new-years-eve-hero.webp",
  "/images/nye_closeup_balloons.webp",
  "/images/nye_closeup_dining.webp",
  "/images/nye_closeup_floral.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-1.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-2.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-3.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-4.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-5.webp",
  "/images/experiences/picnic/inspo/picnic-inspo-6.webp",
  "/images/hero/picnic-parties-hero.webp",
  "/images/heroes/proposals-hero.webp",
  "/images/proposal_gallery_1.webp",
  "/images/proposal_gallery_2.webp",
  "/images/proposal_gallery_3.webp",
  "/images/proposal_gallery_4.webp",
  "/images/proposal_gallery_5.webp",
  "/images/proposal_gallery_6.webp",
  "/images/experiences/seasonal-general-luxury.webp",
  "/images/new_collection/16.webp",
  "/images/detail_teepee_fabric.webp",
  "/images/experiences/teepee-enhancements/cake.webp",
  "/images/experiences/teepee-enhancements/makeover.webp",
  "/images/experiences/teepee-enhancements/movie.webp",
  "/images/experiences/teepee-enhancements/numbers.webp",
  "/images/experiences/teepee-enhancements/sweets.webp",
  "/images/experiences/teepee-enhancements/tea.webp",
  "/images/teepee-gallery-1.webp",
  "/images/teepee-gallery-2.webp",
  "/images/teepee-gallery-3.webp",
  "/images/teepee-gallery-4.webp",
  "/images/teepee-gallery-5.webp",
  "/images/teepee-gallery-6.webp",
  "/images/teepee-parties-hero.webp",
  "/images/detail_balloons_pastel.webp",
  "/images/detail_teepee_fabric.webp",
  "/images/fabric_texture_draping.webp",
  "/images/hero_teepee_interior.webp",
  "/images/hero/themed-parties-superhero-hero.webp",
  "/images/themed_dc_party_10.webp",
  "/images/themed_disney_party_8.webp",
  "/images/themed_frozen_party_7.webp",
  "/images/themed_marvel_party_6.webp",
  "/images/themed_moana_party_12.webp",
  "/images/themed_parties_detail.webp",
  "/images/themed_princess_party_5.webp",
  "/images/heroes/weddings-hero.webp",
  "/images/wedding_gallery_1.webp",
  "/images/wedding_gallery_2.webp",
  "/images/wedding_gallery_3.webp",
  "/images/wedding_gallery_4.webp",
  "/images/wedding_gallery_5.webp",
  "/images/wedding_gallery_6.webp",
]);

//
// CONFIG
//
const ROOT = path.join(__dirname, '..', 'public', 'images');
const DO_DELETE = process.env.DO_DELETE === 'true'; // set to true to actually delete
const BACKUP_DIR = path.join(__dirname, '..', 'unused_backup');

const exts = new Set(['.jpg','.jpeg','.png','.webp','.svg','.gif','.JPG','.JPEG','.PNG','.WEBP','.SVG','.GIF']);

function listFiles(root) {
  const res = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else {
        const ext = path.extname(name);
        if (exts.has(ext)) {
          const rel = '/' + full.replace(path.join(__dirname, '..', 'public') + path.sep, '').replace(/\\\\/g,'/');
          res.push({full, rel});
        }
      }
    }
  }
  walk(root);
  return res;
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, {recursive: true});
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error('public/images not found at', ROOT);
    process.exit(1);
  }

  const all = listFiles(ROOT);
  const unused = all.filter(f => !USED.has(f.rel));
  const unusedByDir = {};
  for (const f of unused) {
    const dir = path.dirname(f.rel);
    unusedByDir[dir] = unusedByDir[dir] || [];
    unusedByDir[dir].push(f);
  }

  // DRY RUN REPORT
  console.log('--- DRY RUN ---');
  console.log('Total images:', all.length);
  console.log('Referenced (kept):', USED.size);
  console.log('Unused candidates:', unused.length);
  console.log('\\nBy folder:');
  Object.entries(unusedByDir).sort().forEach(([dir, files]) => {
    console.log(`  ${dir} -> ${files.length} file(s)`);
  });
  console.log('\\nUnused file list:');
  unused.forEach(f => console.log(f.rel));

  if (!DO_DELETE) {
    console.log('\\nDeletion is DISABLED (dry-run). To delete, run with DO_DELETE=true');
    console.log('Example: DO_DELETE=true node scripts/cleanup-unused-images.js');
    console.log('Back up your project before deleting. Optionally set BACKUP_DIR to copy unused files before removal.');
    return;
  }

  // OPTIONAL BACKUP (now active)
  ensureDir(BACKUP_DIR);
  for (const f of unused) {
    const dest = path.join(BACKUP_DIR, f.rel.replace(/^[\\/]/,''));
    ensureDir(path.dirname(dest));
    fs.copyFileSync(f.full, dest);
  }

  // DELETE unused files
  for (const f of unused) {
    try { fs.unlinkSync(f.full); } catch (e) { console.error('Failed to delete', f.full, e); }
  }

  // REMOVE EMPTY FOLDERS
  function prune(dir) {
    const entries = fs.readdirSync(dir);
    for (const e of entries) {
      const full = path.join(dir, e);
      if (fs.statSync(full).isDirectory()) prune(full);
    }
    // after pruning children, if empty, remove
    if (fs.readdirSync(dir).length === 0) {
      try { fs.rmdirSync(dir); } catch (e) {}
    }
  }
  prune(ROOT);

  console.log('Deletion complete.');
}

main();
