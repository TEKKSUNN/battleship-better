import {
  createButton,
  createImageButton,
} from "../../../src/dom/elements/buttons";

describe("Buttons", () => {
  describe("createButton()", () => {
    test("should throw an error when no textContent is given.", () => {
      expect(() => createButton()).toThrow(
        "createButton() must have a textContent.",
      );
    });
  });

  describe("createImageButton()", () => {
    test("should throw an error when no imageURL is given.", () => {
      expect(() => createImageButton()).toThrow(
        "createImageButton() must have an imageURL.",
      );
    });
  });
});
