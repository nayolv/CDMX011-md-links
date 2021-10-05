const fs = require("fs");

let arrayLinks = [];

const links = (file) => {
  file.forEach((item) => {
    const file = fs.readFileSync(item, "utf-8");
    const regEx =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (regEx.test(file)) {
      arrayLinks.push(file);
    }
  });
  return arrayLinks;
};


module.exports = {
  links,
};
