const fs = require("fs");
const path = require("path");

let array = [];

const directorios = (dir) => {
  if (dir != undefined) {
    const absolute = path.resolve(dir); //Ruta absoluta
    const list = fs.readdirSync(absolute);
    list.forEach((item) => {
      const route = path.join(absolute, item); //Concatena ruta con archivo a leer
      if (fs.statSync(route).isDirectory()) {
        directorios(route); //Función recursiva lee dir dentro dir
      } else if (
        path.extname(route) == ".md" ||
        path.extname(route) == ".markdown"
      ) {
        array.push(route);
      }
    });
  }
  return array;
};

exports.directorios = directorios;
