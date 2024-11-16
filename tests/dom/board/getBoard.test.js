import { getBoard } from "../../../src/dom/board/getBoard";

// Test getBoard function.
describe("getBoard()", () => {
  test("should throw an error when no args is given.", () => {
    expect(() => getBoard()).toThrow(
      "getBoard() takes one argument, got none.",
    );
  });

  test("should throw an error when gameboard given is not a Gameboard.", () => {
    const errorMsg = "getBoard() must have a Gameboard type as argument.";
    expect(() => getBoard(1)).toThrow(errorMsg);
    expect(() => getBoard("Jonathan Joestar")).toThrow(errorMsg);
    expect(() => getBoard([9, 10, 8])).toThrow(errorMsg);
  });
});
