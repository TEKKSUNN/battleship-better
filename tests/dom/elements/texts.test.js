import { createPara } from "../../../src/dom/elements/texts";

describe("Texts", () => {
  describe("createPara()", () => {
    test("should throw an error when it doesn't have a textContent.", () => {
      expect(() => createPara()).toThrow(
        "createPara() must have a textContent.",
      );
    });
  });
});
