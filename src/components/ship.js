// Get ship images
// import BattleshipImg from "../../assets/place-stage/battleship.png";
// import CruiserImg from "../../assets/place-stage/cruiser.png";
// import DestroyerImg from "../../assets/place-stage/destroyer.png";
// import PatrolBoatImg from "../../assets/place-stage/patrolboat.png";
// import RescueShipImg from "../../assets/place-stage/rescueship.png";

// Get ship-used images
// import UsedBattleshipImg from "../../assets/place-stage/battleship-used.png";
// import UsedCruiserImg from "../../assets/place-stage/cruiser-used.png";
// import UsedDestroyerImg from "../../assets/place-stage/destroyer-used.png";
// import UsedPatrolBoatImg from "../../assets/place-stage/patrolboat-used.png";
// import UsedRescueShipImg from "../../assets/place-stage/rescueship-used.png";

// Get ship templates
import {
  Battleship,
  Cruiser,
  Destroyer,
  PatrolBoat,
  RescueShip,
} from "../classes/ships";

import { createDiv } from "../dom/elements/divs";
import { createImage } from "../dom/elements/images";
import ComponentError from "./error";
import { appendAll } from "../dom/helpers";
import { getOrientation } from "../storage/orientation";

// Returns a squares div w/ length of ShipObject.
export default function createShipSquares(ShipObject /* , ShipImage */) {
  // Throw error when not valid ShipObject.
  if (typeof ShipObject !== "object") {
    throw new ComponentError(
      "createShipSquares() must have an object as ShipObject.",
    );
  }

  // Throw error when no ShipImage
  // if (!ShipImage) {
  //   throw new ComponentError("createShipSquares() must have a ShipImage.");
  // }

  // Make ship squares.
  const shipSquares = createDiv("ship-squares");
  for (let i = 0; i < ShipObject.length; i++) {
    const square = createDiv("ship-square square");
    shipSquares.appendChild(square);
  }

  // const image = createImage(ShipImage, "ship-img");
  // shipSquares.appendChild(image);

  shipSquares.draggable = "true";

  setupShipSquares(shipSquares, ShipObject);

  return shipSquares;
}

function setupShipSquares(shipSquares, ShipObject) {
  shipSquares.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        shipLength: ShipObject.length,
        shipObject: ShipObject,
        orientation: getOrientation(),
      }),
    );
  });

  shipSquares.addEventListener("dragend", (e) => {
    shipSquares.classList.add("used");
    shipSquares.setAttribute("draggable", "false");
    shipSquares.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  });
}

export function getShipSquares() {
  // Make the ships.
  const ships = createDiv("ships");

  const shipParts1 = createDiv("ship-group");

  const battleship = createShipSquares(new Battleship());

  const cruiser = createShipSquares(new Cruiser());

  appendAll(shipParts1, battleship, cruiser);

  const shipParts2 = createDiv("ship-group");

  const destroyer = createShipSquares(new Destroyer());

  const patrolBoat = createShipSquares(new PatrolBoat());

  const rescueShip = createShipSquares(new RescueShip());

  appendAll(shipParts2, destroyer, patrolBoat, rescueShip);

  appendAll(ships, shipParts1, shipParts2);

  return ships;
}
