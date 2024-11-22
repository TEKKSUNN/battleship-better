import { HTMLError } from "../error";
import { createDiv } from "../elements/divs";
import Ship from "../../classes/ships";
import { createImage } from "../elements/images";
import { getSquaresHeight, getSquaresWidth } from "./squares";

// Returns the gameboard, but now in html form.
export function getBoard(GameboardObject, GameboardStorageFN) {
  // Throw error when no gameboard.
  if (!GameboardObject) {
    throw new HTMLError("getBoard() takes one argument, got none.");
  }

  // Throw error when gameboard is not an object.
  if (typeof GameboardObject !== "object") {
    throw new HTMLError("getBoard() must have an object as gameboard.");
  }

  // Throw error when no GameboardStorageFN or not a function
  if (!GameboardStorageFN | (typeof GameboardStorageFN !== "function")) {
    throw new HTMLError(
      "getBoard() GameboardStorageFN missing or not a function",
    );
  }

  // Declare grid.
  const grid = createDiv("grid");
  // grid.style.position = "relative";

  // Make all the squares & append it to grid
  GameboardObject.gameboard.forEach((array, rowIndex) => {
    const row = createDiv(`board-row ${rowIndex}`);
    array.forEach((value, cellIndex) => {
      const cell = createDiv(`board-cell ${cellIndex}`);
      row.appendChild(cell);
    });
    grid.appendChild(row);
  });

  // Add appropriate drag events to grid
  setupBoard(grid, GameboardObject, GameboardStorageFN);

  return grid;
}

// Sets the drag event listeners for a grid/gameboard
function setupBoard(GameboardHTML, GameboardObject, GameboardStorageFN) {
  // Make squares hovered change color
  GameboardHTML.addEventListener("dragover", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/json");

    // Change color of hovered cells
    if (data.orientation === "horizontal") {
      for (let i = 0; i < data.shipLength; i++) {
        const cellHovered = document.querySelector(
          `.board-row.${data.rowIndex} .board-cell.${data.cellIndex + i}`,
        );
        cellHovered.classList.add("dragover");
      }
    } else {
      for (let i = 0; i < data.shipLength; i++) {
        const cellHovered = document.querySelector(
          `.board-row.${data.rowIndex + i} .board-cell.${data.cellIndex}`,
        );
        cellHovered.classList.add("dragover");
      }
    }
  });

  // Drop ship to board visually and in data
  GameboardHTML.addEventListener("drop", (e) => {
    const data = e.dataTransfer.getData("text/json");

    // Show board change visually
    if (data.orientation === "horizontal") {
      for (let i = 0; i < data.shipLength; i++) {
        const cellHovered = document.querySelector(
          `.board-row.${data.rowIndex} .board-cell.${data.cellIndex + i}`,
        );
        cellHovered.classList.add("occupied");
      }
    } else {
      for (let i = 0; i < data.shipLength; i++) {
        const cellHovered = document.querySelector(
          `.board-row.${data.rowIndex + i} .board-cell.${data.cellIndex}`,
        );
        cellHovered.classList.add("occupied");
      }
    }

    // Show board change in data
    GameboardObject.placeShip(
      data.shipObject,
      data.rowIndex,
      data.cellIndex,
      data.orientation,
    );
    GameboardStorageFN(GameboardObject);
  });
}
