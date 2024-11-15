import { createSpan } from "../../../src/dom/elements/span";

describe("Span", () => {
  describe("createSpan()", () => {
    test("should throw an error when textContent is not given.", () => {
      expect(() => createSpan()).toThrow(
        "createSpan() must have a textContent.",
      );
    });
  });
});
