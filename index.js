#!/usr/bin/env node
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const mdlinksFn = require("./md_links");
const figlet = require("figlet");
const chalk = require("chalk");

const cli = () => {
  mdlinksFn
    .mdlinksRes(args)
    .then((data) => {
      data.map((item) => {
        for (const key in item) {
          const element = item[key];

          for (const value in element) {
            const result =
              chalk.bgBlue(value) +
              ": " +
              chalk.yellowBright(element[value]) +
              "\n";
            console.log(result);
          }
        }
      });
    })
    .catch(() => {
      console.log(
        chalk.redBright(
          figlet.textSync("MDLinks", {
            font: "Standard",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 100,
            whitespaceBreak: true,
          })
        )
      );
      console.log(chalk.bgRed("Enter a path and a command to continue"));
      console.log(chalk.bgRedBright("         --validate or --stats        "));
    });
};

cli();