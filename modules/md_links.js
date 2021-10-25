const validate = require("./validate");
const urls = require("./links");
const files = require("./files");
const stats = require("./stats");
const program = require("commander");

const mdlinks = (args) => {
  const validateFn = validate.validateObj(urls.links(files.directorios(args)));
  const statsFn = stats.promiseStats(validateFn);
  program.option("-s, --stats", "statistics for md files");
  program.option("-v, --validate", "validation for status url");

  program.parse();

  const options = program.opts();
  if (options.validate && options.stats) return [validateFn, statsFn];
  if (options.validate) return [validateFn];
  if (options.stats) return [statsFn];
};

const mdlinksRes = (path) => {
  return new Promise((res) => {
    const map = mdlinks(path).map((item) => {
      return item;
    });
    res(Promise.all(map));
  });
};

exports.mdlinksRes = mdlinksRes;
