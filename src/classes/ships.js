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
  }
}

export class Cruiser extends Ship {
  constructor() {
    super(5);
    this.name = "Cruiser";
  }
}

export class PatrolBoat extends Ship {
  constructor() {
    super(3);
    this.name = "PatrolBoat";
  }
}

export class RescueShip extends Ship {
  constructor() {
    super(2);
    this.name = "RescueShip";
  }
}

export class Destroyer extends Ship {
  constructor() {
    super(3);
    this.name = "Destroyer";
  }
}
