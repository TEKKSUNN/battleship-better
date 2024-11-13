import ClassError, { MethodError } from "./error";

// The board object that the Player and the Computer will use.
export default class Gameboard {
  constructor(size = 10) {
    if (!Number.isSafeInteger(size)) {
      throw new ClassError("Gameboard size must be a safe integer.");
    }

    if (size <= 0) {
      throw new ClassError("Gameboard size must be greater than 0.");
    }

    // This creates 10 arrays each on 10 arrays inside an array.
    // One-liner that saves memory.
    this.gameboard = Array.from({ length: size }, () =>
      new Array(size).fill(null),
    );
    this.misses = 0;
  }

  // Places a ship somewhere on the board.
  placeShip(ShipObject, yPos, xPos, orientation) {
    // If any of the values are missing:
    if (
      (ShipObject === undefined) |
      (xPos === undefined) |
      (yPos === undefined) |
      (orientation === undefined)
    ) {
      throw new MethodError(
        "Gameboard.placeShip() doesn't have enough arguments.",
      );
    }

    // Position values are invalid:
    // - when not a safe integer
    if (!Number.isSafeInteger(xPos) | !Number.isSafeInteger(yPos)) {
      throw new MethodError(
        "Gameboard.placeShip() xPos, yPos must be safe integers.",
      );
    }

    // - when lesser than 0 or greater than gameboard's length - 1
    if (
      (xPos < 0) |
      (xPos > this.indiceLength) |
      (yPos < 0) |
      (yPos > this.indiceLength)
    ) {
      throw new MethodError(
        "Gameboard.placeShip() xPos, yPos must be within board's indice length.",
      );
    }

    // If orientation value is invalid:
    if (orientation !== "landscape" && orientation !== "portrait") {
      throw new MethodError(
        'Gameboard.placeShip() orientation must be "landscape" or "portrait".',
      );
    }

    // Placing the ships.
    if (orientation === "landscape") {
      // Place ship horizontally-right 'till ship's length is reached.
      for (let i = xPos; i < ShipObject.length; i++) {
        this.gameboard[yPos][i] = ShipObject;
      }
    } else {
      // Place ship vertically-downward 'till ship's length is reached.
      for (let i = yPos; i < ShipObject.length; i++) {
        this.gameboard[i][xPos] = ShipObject;
      }
    }
  }

  receiveAttack(yPos, xPos) {
    // If there is a Ship on the coords:
    if (this.gameboard[yPos][xPos] !== null) {
      this.gameboard[yPos][xPos].hit();
      return "hit";
    }
    // Else, increment miss and return "miss"
    this.misses++;
    return "miss";
  }

  isAllShipSunk() {
    // Check all of gameboard and return false if a ship doesn't return true when it's method "isSunk" is called.
    let res = true;
    this.gameboard.forEach((array) => {
      array.forEach((value) => {
        if (value !== null) {
          if (!value.isSunk()) {
            res = false;
          }
        }
      });
    });
    return res;
  }

  get size() {
    return this.gameboard[0].length;
  }

  get indiceLength() {
    return this.size - 1;
  }
}
