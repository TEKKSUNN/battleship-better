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

import { createDiv } from "../dom/elements/divs";
import { createImage } from "../dom/elements/images";
import ComponentError from "./error";
import { appendAll, getContent } from "../dom/helpers";

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

  shipSquares.draggable = "true";

  return shipSquares;
}

export function getShipSquares() {
  // Make the ships.
  const ships = createDiv("ships");

  const shipParts1 = createDiv("ship-group");

  const battleship = createShipSquares(new Battleship(), BattleshipImg);

  const cruiser = createShipSquares(new Cruiser(), CruiserImg);

  appendAll(shipParts1, battleship, cruiser);

  const shipParts2 = createDiv("ship-group");

  const destroyer = createShipSquares(new Destroyer(), DestroyerImg);

  const patrolBoat = createShipSquares(new PatrolBoat(), PatrolBoatImg);

  const rescueShip = createShipSquares(new RescueShip(), RescueShipImg);

  appendAll(shipParts2, destroyer, patrolBoat, rescueShip);

  appendAll(ships, shipParts1, shipParts2);

  return ships;
}
