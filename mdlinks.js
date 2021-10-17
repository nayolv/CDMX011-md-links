const validate = require('./validate');
const urls = require('./links.js');
const files = require('./files.js');
const stats = require('./stats')

const mdLinks = (path, option)=>{
 return new Promise ((res, rej)=>{
    if(path && option == '--validate' || option == '-v'){
        res(validate.validateObj(urls.links(files.directorios(path))))
    }else if(path && option == '--stats' || option == '-s'){
        res(stats.promiseStats(validate.validateObj(urls.links(files.directorios(path)))))
    }else{
        rej('Path error')
    }
});
}

/*
mdLinks(process.argv[2], process.argv[3])
.then(data => console.log(data))
.catch((err)=>{
    console.log(err)
});
*/
exports.mdLinks = mdLinks;