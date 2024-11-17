// Get ship images
import BattleshipImg from "../../assets/place-stage/battleship.png";
import CruiserImg from "../../assets/place-stage/cruiser.png";
import DestroyerImg from "../../assets/place-stage/destroyer.png";
import PatrolBoatImg from "../../assets/place-stage/patrolboat.png";
import RescueShipImg from "../../assets/place-stage/rescueship.png";

import ClassError from "./error";

// The class to make all kinds of ships.
export default class Ship {
  constructor(length) {
    if (!Number.isInteger(length)) {
      throw new ClassError("Ship must have an integer as length.");
    }
    if (length <= 0) {
      throw new ClassError("Ship length cannot be less than or equal to 0.");
    }
    this.length = length;
    this.misses = 0;
    this.hits = 0;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.length <= this.hits;
  }
}

export class Battleship extends Ship {
  constructor() {
    super(4);
    this.name = "Battleship";
    this.image = BattleshipImg;
  }
}

export class Cruiser extends Ship {
  constructor() {
    super(5);
    this.name = "Cruiser";
    this.image = CruiserImg;
  }
}

export class PatrolBoat extends Ship {
  constructor() {
    super(3);
    this.name = "PatrolBoat";
    this.image = PatrolBoatImg;
  }
}

export class RescueShip extends Ship {
  constructor() {
    super(2);
    this.name = "RescueShip";
    this.image = RescueShipImg;
  }
}

export class Destroyer extends Ship {
  constructor() {
    super(3);
    this.name = "Destroyer";
    this.image = DestroyerImg;
  }
}
