import { createLI } from "../../../src/dom/elements/lists";

// Test lists.js
describe("Lists", () => {
  describe("createLI()", () => {
    test("should throw an error when no textContent is given.", () => {
      expect(() => createLI()).toThrow("createLI() must have a textContent.");
    });
  });
});
