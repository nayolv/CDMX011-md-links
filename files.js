const fs = require("fs");
const path = require("path");
//MI FUNCION DIRECTORIOS RECORRE CADA ARCHIVO, SI ES DIRECTORIO LO ABRE Y ASI SUCESIVAMENTE, FILTRA LOS ARCHIVOS QUE SON MD

let array = [];
const directorios = (dir) => {
  const absolute = path.resolve(dir); //Ruta absoluta
  const list = fs.readdirSync(absolute)

  list.forEach(item =>{
    const route = path.join(absolute, item);
    if(fs.statSync(route).isDirectory()){
      //directorios(route);
      directorios(route);

    }else if(path.extname(route) == ".md" ||
    path.extname(route) == ".markdown"){
      array.push(route);
    }
  });
  return array
};


module.exports = {
  directorios,
};


///\[([-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+( [-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+)*)\]\(https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*\)/gi;                //------->