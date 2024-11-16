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
import { appendAll, getContent } from "../dom/helpers";

// Returns a ship bar w/ rotate button.
export function createShipBar() {
  const shipBar = createDiv("ship-bar");

  // Make the ships.
  const ships = createDiv("ships");

  // Utility to add grabbing cursor behavior
  function addGrabbingBehavior(shipElement) {
    shipElement.addEventListener("mousedown", () => {
      getContent().style.cursor = "grabbing";
    });

    shipElement.addEventListener("mouseup", () => {
      getContent().style.cursor = "default";
    });

    shipElement.addEventListener("mouseleave", () => {
      getContent().style.cursor = "default";
    });
  }

  const shipParts1 = createDiv("ship-group");

  const battleship = createShipSquares(new Battleship(), BattleshipImg);
  addGrabbingBehavior(battleship);

  const cruiser = createShipSquares(new Cruiser(), CruiserImg);
  addGrabbingBehavior(cruiser);

  appendAll(shipParts1, battleship, cruiser);

  const shipParts2 = createDiv("ship-group");

  const destroyer = createShipSquares(new Destroyer(), DestroyerImg);
  addGrabbingBehavior(destroyer);

  const patrolBoat = createShipSquares(new PatrolBoat(), PatrolBoatImg);
  addGrabbingBehavior(patrolBoat);

  const rescueShip = createShipSquares(new RescueShip(), RescueShipImg);
  addGrabbingBehavior(rescueShip);

  appendAll(shipParts2, destroyer, patrolBoat, rescueShip);

  appendAll(ships, shipParts1, shipParts2);

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
