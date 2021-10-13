const fs = require("fs");
const marked = require('marked');
const { JSDOM } = require("jsdom");
const path = require("path");

let arrayLinks = [];

const links = (file) => {
  file.forEach(item => {
    const mdFile = fs.readFileSync(item, "utf-8");
    const html = marked(mdFile);
    const dom = new JSDOM(html);

    dom.window.document.querySelectorAll('a').forEach(a=>{
      const url = a.href;
      const text = a.textContent;

      if(!url.startsWith('about:blank#')){ 
        arrayLinks.push({href: url, text: text, file: item});
      }
    });
  });
 
 return arrayLinks;
};

module.exports = {
  links,
};
