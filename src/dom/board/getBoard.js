import { HTMLError } from "../error";
import { createDiv } from "../elements/divs";
import Ship from "../../classes/ships";
import { createImage } from "../elements/images";
import { getSquaresHeight, getSquaresWidth } from "./squares";

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
  // grid.style.position = "relative";

  // Make all the squares & append it to grid
  gameboard.gameboard.forEach((array) => {
    const squares = createDiv("squares");
    // Make the values of squares & append it to squares.
    array.forEach((value) => {
      const square = createDiv("square");

      // Add more classes if it is a ship.
      if (value !== null) {
        // Get the ship methods for the value.
        const instance = new Ship(1);
        Object.assign(instance, value);
        square.classList.add("occupied");

        // Shows ship images.
        // const shipImage = createImage(value.image, "ship-img");
        // if (value.orientation === "landscape") {
        //   shipImage.classList.add("horizontal");
        // }
        // shipImage.style.position = "absolute";
        // shipImage.style.top = (getSquaresHeight() * row + 1) + "px";
        // shipImage.style.left = (getSquaresWidth() * column + 1) + "px";

        // grid.appendChild(shipImage);

        if (instance.isSunk()) {
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
