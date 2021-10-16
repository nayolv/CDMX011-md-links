const validate = require("./validate");
const urls = require("./links.js");
const files = require("./files.js");
const arrayCompleto = validate.validateObj(
  urls.links(files.directorios(process.argv[2]))
);

function promiseStats(validateUrl) {//Funcion promesa ejecuta a la fn stats
  return new Promise((res, rej) => {
    res(
    validateUrl.then((data) => {
        return stats(data);
      }));
  });
}

function stats(objComp) {
  let links = [];
  let broken = [];
  let unique = [];
  let array = [];

  objComp.map((item) => {
    
      links.push(item.href);
    if (item.status == 404) {//Condicional para saber si un link esta roto
      broken.push(item.href);
    }
  });

  const sortLinks = links.sort(); //Links ordenados
  for (let i = 0; i < sortLinks.length; i++) {
    if (sortLinks[i + 1] !== sortLinks[i]) { //Agregamos links diferentes
      unique.push(sortLinks[i]);
    }
  }

  array.push({
    Total: links.length,
    Broken: broken.length,
    Unique: unique.length,
  });
  return array
}

promiseStats(arrayCompleto)
.then(data => console.log(data))