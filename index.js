#!/usr/bin/env node
const mdlinksFn = require("./modules/md_links");
const gradient = require("gradient-string");
var figlet = require('figlet');
const chalk = require("chalk");

const cli = (args) => {
  mdlinksFn.mdlinksRes(args)
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        const obj = data[i][j];
        for (const [key, value] of Object.entries(obj)) {
         console.log(chalk.bold(chalk.yellowBright(key))+': '+ gradient.vice(value),'\n')
        }
      }
    }
  })
  .catch(()=>{
    console.log(gradient.teen(figlet.textSync('MDLinks', {
      font: 'doom',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
  })));
  console.log(chalk.bgMagentaBright("Enter a path and a command to continue"));
  console.log(chalk.bgMagentaBright("         --validate or --stats        "));
  })
};

cli(process.argv[2]);