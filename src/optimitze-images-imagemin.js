// Replace these lines
// const imagemin = require('imagemin');
// const imageminPngquant = require('imagemin-pngquant');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminGifsicle = require('imagemin-gifsicle');
// const imageminSvgo = require('imagemin-svgo');

// With these lines
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

// Continue with the rest of your code as is
// ...

// Example:
(async () => {
  await imagemin(['test/img/*.{jpg,png,gif,svg}'], {
    destination: 'test/dist/',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminGifsicle(),
      imageminSvgo(),
    ],
  });

  console.log('Images optimized');
})();
