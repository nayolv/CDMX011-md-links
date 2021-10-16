/*const validate = require("./validate.js");
const files = require("./files.js");
const urls = require("./links.js");
const arrayCompleto = validate.validation(
  urls.links(files.directorios(process.argv[2]))
);*/

const stats = async (arrData) => {
  let arr =[];

  const prom = await arrData
    .then(data => {
      let broken = [];
      let links = [];
      let unique = [];
      data.map((item) => {
        links.push(item.href);
        
        if (item.status == 404) {
          broken.push(item.href);
        }
      });

      const sortLinks = links.sort();
      for (let i = 0; i < sortLinks.length; i++) {
        if (sortLinks[i + 1] !== sortLinks[i]) {
          unique.push(sortLinks[i]);
        }
      }
      let result = ({
        Total: links.length,
        Broken: broken.length,
        Unique: unique.length,
      });

      return result;
    })
    .catch((err) => console.log(err));

    arr.push(prom);
    return arr

  };
/*
stats(arrayCompleto)
.then(data=>{
  console.log(data)
})*/

module.exports = {
  stats,
};
