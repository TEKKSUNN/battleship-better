// The class to make all kinds of ships.
export default class Ship {
  constructor(length) {
    if (!Number.isInteger(length)) {
      throw new Error("Ship Error: Ship must have an integer as length.");
    }
    if (length <= 0) {
      throw new Error(
        "Ship Error: Ship length cannot be less than or equal to 0.",
      );
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
