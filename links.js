const fs = require("fs");
const marked = require("marked");
const renderer = new marked.Renderer();
const dir = require("./files");
const arr = dir.directorios(process.argv[2]);

let arrayLinks = [];

const links = (file) => {
  file.forEach((item) => {
    const mdFile = fs.readFileSync(item, "utf-8");

    renderer.link = (href, ordered, text) => {
      if (href.startsWith("http") == true && text.includes("<img") == false) {
        arrayLinks.push({ href: href, text: text.substr(0, 49), file: item });
      }
    };
    marked(mdFile, { renderer });
  });
  return arrayLinks;
};
links(arr);

module.exports = {
  links,
};
