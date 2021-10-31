const fnFiles = require("../modules/files.js");

describe("Testeando recursividad", () => {
  it("Debería ser una función", () => {
    expect(typeof fnFiles.directorios).toBe("function");
  });
  it("Debería devolver array con rutas", () => {
    expect(fnFiles.directorios("./test")).toEqual([
      "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md",
    ]);
  });
  it("Debería agregar la ruta a un array", () => {
    expect(fnFiles.directorios("./test/example/example-file.md")).toEqual([
      "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md",
    ]);
  });
});
