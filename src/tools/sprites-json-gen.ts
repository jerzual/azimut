import { TexturePackerSchema } from '../assets/sprites';
import { numberLiteralTypeAnnotation } from '@babel/types';

const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');

// sprites data structure
const sprites: TexturePackerSchema = { frames: {} };
// input file path
const spritesPath = path.join(__dirname, '..', 'assets', 'sprites');
// data structure
export interface FileDimensions {
  fileName: string;
  width: number;
  height: number;
}
// read sprite assets
fs.readdir(
  spritesPath,
  {
    encoding: 'UTF-8',
  },
  (err: Error, files: string[]) => {
    if (err) {
      console.error(err);
      return process.exit(0);
    }
    // read dimensions from image files
    Promise.all(
      files.map(
        fileName =>
          new Promise<{ fileName: string; width: number; height: number }>(
            (resolve, reject) => {
              imageSize(
                path.join(spritesPath, fileName),
                (error: Error, dimensions) => {
                  if (error) {
                    return reject(error);
                  }
                  return resolve({
                    fileName,
                    width: dimensions.width,
                    height: dimensions.height,
                  });
                },
              );
            },
          ),
      ),
    ).then(all => {
      // create a json from png file name and dimensions
      all.forEach(val => {
        sprites.frames[val.fileName] = {
          frame: { x: 0, y: 0, w: val.width, h: val.height },
        };
      });

      // write it
      fs.writeFile(
        path.join(__dirname, '..', 'assets', 'data', 'sprites.json'),
        JSON.stringify(sprites),
        (error, args) => {
          if (error) {
            console.error(error);
            return process.exit(0);
          }
          console.log(args);
        },
      );
    });
  },
);
