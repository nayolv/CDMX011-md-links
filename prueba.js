const validate = require("./validate.js");
const stadistics = require('./stats');
const urls = require("./links.js");
const files = require("./files.js");


const arr = validate.validation(urls.links(files.directorios("C:/Users/nattk/Desktop/nodjs")));

arr.then(data =>
    console.log(data))