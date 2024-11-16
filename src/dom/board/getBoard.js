import { HTMLError } from "../error";
import { createDiv } from "../elements/divs";

// Returns the gameboard, but now in html form.
export function getBoard(gameboard) {
  // Throw error when no gameboard.
  if (!gameboard) {
    throw new HTMLError("getBoard() takes one argument, got none.");
  }

  // Throw error when gameboard is not an object.
  if (typeof gameboard !== "object") {
    throw new HTMLError("getBoard() must have an object as gameboard.");
  }

  // Declare grid.
  const grid = createDiv("grid");

  // Make all the squares & append it to grid
  gameboard.gameboard.forEach((array) => {
    const squares = createDiv("squares");
    // Make the values of squares & append it to squares.
    array.forEach((value) => {
      const square = createDiv("square");

      // Add more classes if it is a ship.
      if (typeof value === "ship") {
        square.classList.add("ship-square");
        if (value.isSunk()) {
          square.classList.add("ship-sunk");
        }
      }

      squares.appendChild(square);
    });

    // Append to grid.
    grid.appendChild(squares);
  });

  return grid;
}