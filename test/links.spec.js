const links =require("../modules/links.js");
const fnFiles = require('../modules/files.js');


describe('Testeando ...', () => {
  
    it('Debería ser una función', () => {
      expect(typeof links.links).toBe('function');
    });
  it('Debería devolver objeto con href:, text:, file:', () => {
    expect(links.links(fnFiles.directorios('./test'))).toStrictEqual([{"file": "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md", "href": "https://trello.com/b/3jxYs1zJ/red-social", "text": " Trello ", "type": "Validation....................................."}, {"file": "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md", "href": "https://www.figma.com/file/Rn2atLBKgvIH16Tu6ufbW2/RED-SOCIAL?node-id=16%3A23", "text": " Figma ", "type": "Validation....................................."}])
    })
  });