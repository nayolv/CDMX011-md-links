#!/usr/bin/env node

const validate = require("./validate.js");
const stadistics = require('./stats');
const urls = require("./links.js");
const files = require("./files.js");
const arr = validate.validation(urls.links(files.directorios(process.argv[2])));
const arrayCompleto = stadistics.stats(validate.validation(
    urls.links(files.directorios(process.argv[2]))
  ));
  
arrayCompleto.then(data =>
    console.log(data));

    arr.then(data =>
        console.log(data));

         mdlinks = () => {

        }