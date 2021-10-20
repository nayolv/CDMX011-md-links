const validate = require("./validate");
const urls = require("./links.js");
const files = require("./files.js");
const stats = require("./stats");

const validateFn = validate.validateObj(
  urls.links(files.directorios(process.argv[2])));
const statsFn = stats.promiseStats(validateFn);

const mdlinks = (args) => {
    let option = args._[0]
    if (args.validate || args.v) {
      option = "validate";
    }
    if (args.stats || args.s) {
      option = "stats";
    }
    if (
      (args.validate && args.stats) ||
      (args.v && args.s) ||
      (args.v && args.stats) ||
      (args.validate && args.s)
    ) {
      option = "validate + stats";
    }

    if (args.help || args.h) {
      option = "help";
    }

    switch (option) {
      case "validate": return Promise.all([validateFn]);
      case "stats": return Promise.all([statsFn]);
      case "validate + stats": return Promise.all([validateFn , statsFn]);
     
          case "help":
        return require("./help")(args);
      default:
        console.log("Enter a valid command or path");
        break;
    }
};

const mdlinksRes = (args) => {
  return new Promise ((res)=>{
    res(mdlinks(args).then(data => { 
      const mapeo = data.map(item => item);
      return mapeo
    }))
  })
}

exports.mdlinksRes = mdlinksRes;
