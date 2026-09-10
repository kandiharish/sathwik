const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const allowedFolders = [
  'Ap medical equipment 1 crore',
  'Ap medical equipment 1 crore project',
  'Bihar ro plant 50 lakhs',
  'blind school porject',
  'Cycle project karimnagar',
  'inaugral_files',
  'Karnataka ro plant',
  'Medical equipment ghatkesar hyd 1 crore',
  'Medical equipment hyd 1 crore',
  'Medical equipment karimnagar',
  'nandhyala project 3cr',
  'nellore waterplant project 1cr',
  'Nutrition kits in hyd',
  'Open air gym in hyd',
  'ranchi nutrition porject',
  'RO plant janaagama',
  'Sathanapally ap medical equipment',
  'Skill development Mamidikudhuru ap 1 cr',
  'Up medical equipment 1 crore'
];

let items = [];

allowedFolders.forEach(folder => {
  const fullPath = path.join(publicDir, folder);
  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath);
    files.forEach(file => {
      if (file.match(/\.(jpeg|jpg|png|webp)$/i)) {
        const relativePath = `/${folder}/${file}`;
        items.push(`  {
    url: encodeURI("${relativePath}"),
    caption: "${folder}",
    category: "ALL"
  }`);
      }
    });
  } else {
    console.warn('Directory not found: ' + folder);
  }
});

const fileContent = `export interface GalleryImage {
  url: string;
  caption: string;
  category: string;
  projectSlug?: string;
}

export const galleryImages: GalleryImage[] = [\n${items.join(',\n')}\n];\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'gallery.ts'), fileContent);
console.log('Generated galleryImages with ' + items.length + ' images from the specified folders.');
