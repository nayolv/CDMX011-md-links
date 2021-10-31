const files = require("../modules/files.js");
const urls = require("../modules/links.js");
const validate = require("../modules/validate.js");

describe("Testeando fetch", () => {
  it("Debería ser una función", () => {
    expect(typeof validate.validateObj).toBe("function");
  });
  it("Debería devolver...", () => {
    return validate
      .validateObj(urls.links(files.directorios("./test")))
      .then((data) => {
        expect(data).toStrictEqual([
          {
            file: "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md",
            href: "https://trello.com/b/3jxYs1zJ/red-social",
            message: "ok",
            status: 200,
            text: " Trello ",
            type: "Validation.....................................",
          },
          {
            file: "C:\\Users\\nattk\\Desktop\\mdlinks\\test\\example\\example-file.md",
            href: "https://www.figma.com/file/Rn2atLBKgvIH16Tu6ufbW2/RED-SOCIAL?node-id=16%3A23",
            message: "ok",
            status: 200,
            text: " Figma ",
            type: "Validation.....................................",
          },
        ]);
      });
  });
});
