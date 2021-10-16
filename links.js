const fs = require("fs");
const marked = require("marked");
const renderer = new marked.Renderer();
const dir = require("./files");
const arr = dir.directorios(process.argv[2]);

let arrayLinks = [];

const links = (file) => {
  file.forEach((item) => {
    const mdFile = fs.readFileSync(item, "utf-8");//Se leen archivos md

    renderer.link = (href, ordered, text) => {//Método link para token del marked.Renderer
      if (href.startsWith("http") == true ) {//Verificamos que sean url válidas
        arrayLinks.push({ href: href, text: text.substr(0, 49), file: item }); //Insertamos objeto en array
      }
    };
    marked(mdFile, { renderer }); //Ejecutamos el render
  });
  return arrayLinks;
};
links(arr);

module.exports = {
  links,
};
