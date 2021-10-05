const  files  = require("./files.js");
const urls = require("./links.js");

const equis = urls.links(files.directorios(process.argv[2]));
console.log(equis);