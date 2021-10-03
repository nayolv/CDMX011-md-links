const fs = require("fs");
const path = require("path");
// FUNCION DIRECTORIOS RECORRE CADA ARCHIVO, SI ES DIRECTORIO LO ABRE Y ASI SUCESIVAMENTE, FILTRA LOS ARCHIVOS QUE SON MD
const directorios = (dir) =>
  new Promise((res, rej) => {
    const absolute = path.resolve(dir); // Ruta absoluta
    fs.readdir(absolute, (err, data) => {
      if (err) {
        rej("Error al leer el directorio:...");
      } else {
        res(
          data.forEach((item) => {
            const route = path.join(absolute, item);
            fs.stat(route, (err, element) => {
              if (err) {
                rej("Hay un error... ");
              } else if (element.isDirectory()) {
                directorios(route);
              } else if (
                path.extname(route) === ".md" ||
                path.extname(route) === ".markdown"){
               
                fs.readFile(route, "utf8", (err, data) => {
                const regEx =/((\w+:\/\/\S+)|(\w+[\.:]\w+\S+))[^\s,\.]/ig;
                     if(regEx.test(data)){
                       console.log(data);
                     }          
                });
                //console.log('MD: ', route);
              }
            });
          })
        );
      }
    });
  });

  module.exports = {
  directorios,
};