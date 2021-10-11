const deeper = require("./deeper");
describe("Deeper", () => {
  it("should return the deeper text", () => {
    const text = deeper();
    expect(text).toEqual("this is deeper");
  });
});
