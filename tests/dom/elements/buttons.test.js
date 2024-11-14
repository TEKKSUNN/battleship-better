import { createButton } from "../../../src/dom/elements/buttons";

describe("Buttons", () => {
  describe("createButton()", () => {
    test("should throw an error when no textContent is given.", () => {
      expect(() => createButton()).toThrow(
        "createButton() must have a textContent.",
      );
    });
  });
});
