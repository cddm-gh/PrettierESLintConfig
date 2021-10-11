const deep = require("./deep");

describe("Deeper", () => {
  it("should return the deep text", () => {
    const text = deep();
    expect(typeof text).toBe("string");
    expect(text).toEqual("this is deep");
  });
});
