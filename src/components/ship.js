import { createDiv } from "../dom/elements/divs";
import { createImage } from "../dom/elements/images";
import ComponentError from "./error";

// Returns a squares div w/ length of ShipObject.
export default function createShipSquares(ShipObject, ShipImage) {
  // Throw error when not valid ShipObject.
  if (typeof ShipObject !== "object") {
    throw new ComponentError(
      "createShipSquares() must have an object as ShipObject.",
    );
  }

  // Throw error when no ShipImage
  if (!ShipImage) {
    throw new ComponentError("createShipSquares() must have a ShipImage.");
  }

  // Make ship squares.
  const shipSquares = createDiv("ship-squares");
  for (let i = 0; i < ShipObject.length; i++) {
    const square = createDiv("ship-square square");
    shipSquares.appendChild(square);
  }

  const image = createImage(ShipImage, "ship-img");
  shipSquares.appendChild(image);

  return shipSquares;
}
