const fnFiles = require('../modules/files.js');



describe('Testeando filtro por tipo', () => {
  
  it('Debería ser una función', () => {
    expect(typeof fnFiles.directorios).toBe('function');
  });

  it('Debería ser objeto', () => {
    expect(typeof fnFiles.directorios('../README.md')).toBe('object')
  })
  it('Debería filtrar archivos md', () => {
    expect(fnFiles.directorios('../README.md')).toStrictEqual(["C:\\Users\\nattk\\Desktop\\README.md", "C:\\Users\\nattk\\Desktop\\README.md"])
  })
});

