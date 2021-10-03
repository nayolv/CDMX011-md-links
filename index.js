const app = require('./app.js');

const path = require('path');
const ruta = path.join('/Users/nattk/Desktop', '/nodjs');
const dir = app.directorios(ruta); // Ruta

dir.then(() => {
  console.log('\nArchivos filtrados con éxito...\n');
}).catch((error) => {
  console.log(`Error --> ${error}`);
});
