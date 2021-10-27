const fs = require("fs");
const marked = require("marked");
const renderer = new marked.Renderer();
//const files = require("./files")


const links = (file) => {
  let arrayLinks = [];

  file.forEach((item) => {
    const mdFile = fs.readFileSync(item, "utf-8");

    renderer.link = (href, ordered, text) => {
      if (href.startsWith("http") == true) {
        arrayLinks.push({
          type: "Validation.....................................",
          href: href,
          text: text.substr(0, 49),
          file: item,
        });
      }
    };
    marked(mdFile, { renderer });
  });
//  console.log(arrayLinks)

  return arrayLinks;
};

exports.links = links;