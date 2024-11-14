import { createImage } from "../../../src/dom/elements/images";

describe("createImage()", () => {
  test("should throw an error when no Image URL is given.", () => {
    expect(() => createImage()).toThrow("createImage() must have an imageURL.");
  });
});
