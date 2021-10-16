const fetch = require("node-fetch");
const urls = require("./links.js");
const files = require("./files.js");
//const arr = urls.links(files.directorios(process.argv[2]));

function validateObj(arrayLinks){
  return new Promise((res, rej) => {//Se crea promesa
    res(Promise.all(arrayLinks.map((item) => validate(item))))
  });
}

const validate = (object) => {
  
  return fetch(object.href) //Modulo fetch para validar status
    .then((code) => {
      if (code.status >= 200 && code.status <= 299) {
        object.status = code.status;
        object.message = "ok";
        return object;
      } else {
        object.status = code.status;
        object.message = "fail";
        return object;
      }
    })
    .catch((err) => {
      if (err) {
        object.error = 'Failed validation'
      }
    });
}

module.exports = {
  validateObj,
};