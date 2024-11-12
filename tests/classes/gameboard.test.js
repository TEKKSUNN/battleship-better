import Gameboard from "../../src/classes/gameboard";

describe("Gameboard", () => {
  describe("Constructor", () => {
    test("should return a gameboard object.", () => {
      expect(new Gameboard()).toEqual({
        gameboard: [
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
          [[], [], [], [], [], [], [], [], [], []],
        ],
      });
    });

    test("should throw an error when size isn't a safe integer.", () => {
      const errorMsg = "Gameboard size must be a safe integer.";
      expect(() => new Gameboard(5.9)).toThrow(errorMsg);
      expect(() => new Gameboard(7.6)).toThrow(errorMsg);
      expect(() => new Gameboard(4.3)).toThrow(errorMsg);
    });

    test("should throw an error when size is less than or equal to 0.", () => {
      const errorMsg = "Gameboard size must be greater than 0.";
      expect(() => new Gameboard(0)).toThrow(errorMsg);
      expect(() => new Gameboard(-5)).toThrow(errorMsg);
      expect(() => new Gameboard(-9)).toThrow(errorMsg);
    });
  });
});
