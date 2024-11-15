import { createAnchor } from "../../../src/dom/elements/hyperlinks";

// Test hyperlinks.js
describe("Hyperlinks", () => {
  describe("createAnchor()", () => {
    test("should throw an error when no textContent is given.", () => {
      expect(() => createAnchor()).toThrow(
        "createAnchor() must have a textContent.",
      );
    });

    test("should throw an error when no link is given.", () => {
      const errorMsg = "createAnchor() must have a link.";
      expect(() => createAnchor("123")).toThrow(errorMsg);
      expect(() => createAnchor("Hanna")).toThrow(errorMsg);
      expect(() => createAnchor("Yeehaw")).toThrow(errorMsg);
    });
  });
});
