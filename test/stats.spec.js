const files = require("../modules/files.js");
const urls = require("../modules/links.js");
const validate = require("../modules/validate.js");
const stats = require("../modules/stats.js");

describe("Testeando stats...", () => {
  it("Debería ser una funcion...", () => {
    expect(typeof stats.promiseStats).toBe("function");
  });
  it("Debería devolver...", () => {
    return stats
      .promiseStats(
        validate.validateObj(urls.links(files.directorios("./test")))
      )
      .then((data) => {
        expect(data).toStrictEqual([
          {
            Broken: 0,
            Total: 2,
            Type: "Statistics.....................................",
            Unique: 2,
          },
        ]);
      });
  });
});
