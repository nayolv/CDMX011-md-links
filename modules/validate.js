const fetch = require("node-fetch");
/*const files = require("./files");
const urls = require("./links");*/

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
        console.log(err)
      }
    });
}
const validateObj = (arrayLinks) => {
 return new Promise((res, rej) => {//Se crea promesa
    res(Promise.all(arrayLinks.map((item) => validate(item))))
    rej('Error')
  })
}

/*validateObj(urls.links(files.directorios(process.argv[2])))
.then(data => console.log(data))*/

exports.validateObj = validateObj;