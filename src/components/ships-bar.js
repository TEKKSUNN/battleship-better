// Get rotate button image
import RotateIcon from "../../assets/place-stage/cg-rotate.png";

import { createDiv } from "../dom/elements/divs";
import { createImageButton } from "../dom/elements/buttons";
import { getOrientation, toggleOrientation } from "../storage/orientation";
import { createPara } from "../dom/elements/texts";
import { appendAll } from "../dom/helpers";
import { getShipSquares } from "./ship";

// Returns a ship bar w/ rotate button.
export function createShipBar() {
  const shipBar = createDiv("ship-bar");

  // Get ships.
  const ships = getShipSquares();

  // Sets the orientation.
  toggleOrientation();

  // Make the rotate button.
  const rotateDiv = createDiv("rotate-div");
  const rotateLabel = createPara(getOrientation(), "rotate-label");
  const rotateButton = createImageButton(RotateIcon, "rotate-btn", () => {
    toggleOrientation();
    rotateLabel.textContent = getOrientation();
  });
  appendAll(rotateDiv, rotateButton, rotateLabel);

  // Wrap everything up.
  appendAll(shipBar, ships, rotateDiv);

  return shipBar;
}
