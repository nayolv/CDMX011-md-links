const fs = require("fs");
const path = require("path");

const directorios = (dir, paths=[]) => {

  const absolute = path.resolve(dir);
  if(fs.statSync(absolute).isDirectory()) {
    const list = fs.readdirSync(absolute);
    list.forEach((item) => {
      const route = path.join(absolute, item);
       directorios(route, paths);
      
    });
 }  else if (
    path.extname(absolute) == ".md" ||
    path.extname(absolute) == ".markdown"
  ) {
    paths.push(absolute)
  }

return paths
};

//console.log(directorios(process.argv[2]));


exports.directorios = directorios;
