import { getBoard } from "../../../src/dom/board/getBoard";

// Test getBoard function.
describe("getBoard()", () => {
  test("should throw an error when no args is given.", () => {
    expect(() => getBoard()).toThrow(
      "getBoard() takes one argument, got none.",
    );
  });

  test("should throw an error when gameboard is not an object.", () => {
    const errorMsg = "getBoard() must have an object as gameboard.";
    expect(() => getBoard(1)).toThrow(errorMsg);
    expect(() => getBoard("hee hee")).toThrow(errorMsg);
  });
});
