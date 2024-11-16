// Get ship images
import BattleshipImg from "../../assets/place-stage/battleship.png";
import CruiserImg from "../../assets/place-stage/cruiser.png";
import DestroyerImg from "../../assets/place-stage/destroyer.png";
import PatrolBoatImg from "../../assets/place-stage/patrolboat.png";
import RescueShipImg from "../../assets/place-stage/rescueship.png";

// Get ship-used images
import UsedBattleshipImg from "../../assets/place-stage/battleship-used.png";
import UsedCruiserImg from "../../assets/place-stage/cruiser-used.png";
import UsedDestroyerImg from "../../assets/place-stage/destroyer-used.png";
import UsedPatrolBoatImg from "../../assets/place-stage/patrolboat-used.png";
import UsedRescueShipImg from "../../assets/place-stage/rescueship-used.png";

// Get ship templates
import {
  Battleship,
  Cruiser,
  Destroyer,
  PatrolBoat,
  RescueShip,
} from "../classes/ships";

// Get rotate button image
import RotateIcon from "../../assets/place-stage/cg-rotate.png";

import { createDiv } from "../dom/elements/divs";
import createShipSquares from "./ship";
import { createImageButton } from "../dom/elements/buttons";
import { getOrientation, toggleOrientation } from "../storage/orientation";
import { createPara } from "../dom/elements/texts";
import { appendAll } from "../dom/helpers";

// Returns a ship bar w/ rotate button.
export function createShipBar() {
  const shipBar = createDiv("ship-bar");

  // Make the ships.
  const ships = createDiv("ships");

  // Utility to add click/hold behavior
  function addShipClickBehavior(shipElement, usedImageSrc) {
    let timer;
    let isHeld = false;

    // Click behavior
    shipElement.addEventListener("click", () => {
      if (!isHeld) {
        shipElement.querySelector("img").src = usedImageSrc;
      }
    });

    // Click-and-hold behavior
    shipElement.addEventListener("mousedown", () => {
      isHeld = false;
      timer = setTimeout(() => {
        isHeld = true;
        document.style.cursor = "grabbing";
        shipElement.querySelector("img").src = usedImageSrc;
      }, 500); // Hold for 500ms to trigger
    });

    // Cancel hold on mouseup or mouseleave
    shipElement.addEventListener("mouseup", () => clearTimeout(timer));
    shipElement.addEventListener("mouseleave", () => clearTimeout(timer));
  }

  const battleship = createShipSquares(new Battleship(), BattleshipImg);
  addShipClickBehavior(battleship, UsedBattleshipImg);

  const cruiser = createShipSquares(new Cruiser(), CruiserImg);
  addShipClickBehavior(cruiser, UsedCruiserImg);

  const destroyer = createShipSquares(new Destroyer(), DestroyerImg);
  addShipClickBehavior(destroyer, UsedDestroyerImg);

  const patrolBoat = createShipSquares(new PatrolBoat(), PatrolBoatImg);
  addShipClickBehavior(patrolBoat, UsedPatrolBoatImg);

  const rescueShip = createShipSquares(new RescueShip(), RescueShipImg);
  addShipClickBehavior(rescueShip, UsedRescueShipImg);

  appendAll(ships, battleship, cruiser, destroyer, patrolBoat, rescueShip);

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
