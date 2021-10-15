const validate = require("./validate");
const urls = require("./links.js");
const files = require("./files.js");
const arrayCompleto = validate.validateObj(
  urls.links(files.directorios(process.argv[2]))
);

const stats = (objComp) => {
  return new Promise((res, rej) => {
    objComp
      .then((data) => {
        let array = [];
        let broken = [];
        let links = [];
        let unique = [];
        data.map((item) => {
          if (item.href) {
            links.push(item.href);
          } else if (item.status == 404) {
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
          Total: links.length,
          Broken: broken.length,
          Unique: unique.length,
        });

        res(array); //Aquí se resuelve la promesa
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  });
};

stats(arrayCompleto).then((data) => console.log(data));
