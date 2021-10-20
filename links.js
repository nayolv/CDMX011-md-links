const fs = require("fs");
const marked = require("marked");
const renderer = new marked.Renderer();

let arrayLinks = [];

const links = (file) => {
  file.forEach((item) => {
    const mdFile = fs.readFileSync(item, "utf-8"); //Se leen archivos md

    renderer.link = (href, ordered, text) => {
      //Método link para token del marked.Renderer
      if (href.startsWith("http") == true) {
        //Verificamos que sean url válidas
        arrayLinks.push({
          Type: "Validation.....................................",
          href: href,
          text: text.substr(0, 49),
          file: item,
        }); //Insertamos objeto en array
      }
    };
    marked(mdFile, { renderer }); //Ejecutamos el render
  });
  return arrayLinks;
};

exports.links = links;
