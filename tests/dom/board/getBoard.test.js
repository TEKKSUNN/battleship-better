import { getBoard } from "../../../src/dom/board/getBoard";

// Test getBoard function.
describe("getBoard()", () => {
  test("should throw an error when no args is given.", () => {
    expect(() => getBoard()).toThrow(
      "getBoard() takes one argument, got none.",
    );
  });
});
