import create from "../../src/dom/helpers";

describe("DOM Helpers", () => {
  describe("create()", () => {
    test("should throw an error when no string value is given.", () => {
      const errorMsg = "create() can only accept a string value.";
      expect(() => create(1)).toThrow(errorMsg);
      expect(() => create()).toThrow(errorMsg);
      expect(() => create([1, 2, 3])).toThrow(errorMsg);
    });
  });
});
