// Importem totes les llibreries que necessitem 
import imagemin from 'imagemin';
// Hi ha llibreria per cada tipus d'imatge
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminWebp from 'imagemin-webp';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

// Executem la funció
(async () => {
  // Optimitzar JPG
  await imagemin(['test/img/*.jpg'], {
    destination: 'test/dist', // Carpeta destí
    plugins: [
      // Optimitza JPG significa que es carrega de mica en mica i la qualitat de la imatge 50 
    imageminJpegtran({ progressive: true, quality: 50 }), 
    ],
  });

  // Optimitzar PNG
  await imagemin(['test/img/*.png'], {
    destination: 'test/dist/',
    plugins: [
      imageminPngquant({
        quality: [0.4, 0.6],// Qualitat de la imatge entre 0.4 i 0.6 respecte la qualitat original
        speed: 1, // Velocitat de compressió
      }),
    ],
  });

  // Convertir imágenes a formato WebP
  await imagemin(['test/img/*.{jpg,png}'], {
    destination: 'test/dist/',
    plugins: [
      imageminWebp({ quality: 50 }), 
    ],
  });

  console.log('Imágenes optimizadas');
})();