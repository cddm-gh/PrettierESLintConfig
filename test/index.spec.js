const coreFunction = require("../core/index");
describe("Main Tests", () => {
  it("should return the main text", () => {
    const response = coreFunction();
    expect(response).toEqual("im core");
  });
});
