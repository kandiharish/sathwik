const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(publicDir);
const imageFiles = allFiles.filter(file => file.match(/\.(jpeg|jpg|png|webp)$/i));

const items = imageFiles.map(file => {
  const relativePath = file.replace(publicDir, '').replace(/\\/g, '/');
  return `  {
    url: encodeURI("${relativePath}"),
    caption: "${path.basename(file)}",
    category: "ALL"
  }`;
});

const fileContent = `export interface GalleryImage {
  url: string;
  caption: string;
  category: string;
  projectSlug?: string;
}

export const galleryImages: GalleryImage[] = [\n${items.join(',\n')}\n];\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'gallery.ts'), fileContent);
console.log('Generated galleryImages with ' + items.length + ' images.');
