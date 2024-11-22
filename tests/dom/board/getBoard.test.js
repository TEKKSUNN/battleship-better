import { getBoard } from "../../../src/dom/board/getBoard";
import Gameboard from "../../../src/classes/gameboard";

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

  test("should throw an error when no GameboardStorageFN is given or not a function.", () => {
    const errorMsg = "getBoard() GameboardStorageFN missing or not a function";
    expect(() => getBoard(new Gameboard())).toThrow(errorMsg);
    expect(() => getBoard(new Gameboard(), "String")).toThrow(errorMsg);
    expect(() => getBoard(new Gameboard(), 1)).toThrow(errorMsg);
  });
});
