/*const files = require("./files");
const urls = require("./links");
const validate = require("./validate");
*/
const stats = (objComp, array=[]) => {
  let links = [];
  let broken = [];
  let unique = [];

  objComp.map((item) => {
    if(item !== undefined){
      links.push(item.href);
    }
    if (item !== undefined && item.status == 404) {
      broken.push(item.href);
    }
  });

  const sortLinks = links.sort();
  for (let i = 0; i < sortLinks.length; i++) {
    if (sortLinks[i + 1] !== sortLinks[i]) {
      unique.push(sortLinks[i]);
    }
  }

  array.push({
    Type: 'Statistics.....................................',
    Total: links.length,
    Broken: broken.length,
    Unique: unique.length,
  });
  return array;
};

const promiseStats = (validateUrl) => {
  return new Promise((res, rej) => {
    res(
      validateUrl.then((data) => {
        return stats(data);
      })
    );
    rej(
      validateUrl.catch((err) => {
        console.log(err);
      })
    );
  });
};
/*
promiseStats(validate.validateObj(urls.links(files.directorios(process.argv[2]))))
.then(data=>console.log(data));*/

exports.promiseStats = promiseStats;