#!/usr/bin/env node

const mdLinks = require('./mdlinks');

mdLinks.mdLinks(process.argv[2], process.argv[3])
.then(data=>{console.log(data)})
.catch((err)=>{console.log(err)})