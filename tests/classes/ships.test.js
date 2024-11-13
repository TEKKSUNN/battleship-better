import Ship from "../../src/classes/ships";

describe("Ship Class", () => {
  describe("Constructor", () => {
    test("should return a ship object", () => {
      const ships = [
        {
          s: new Ship(5),
          t: {
            length: 5,
            hits: 0,
            misses: 0,
          },
          s: new Ship(3),
          t: {
            length: 3,
            hits: 0,
            misses: 0,
          },
          s: new Ship(1),
          t: {
            length: 1,
            hits: 0,
            misses: 0,
          },
        },
      ];
      ships.forEach((ship) => {
        expect(ship.s).toEqual(ship.t);
      });
    });

    test("should throw an error when length has decimal", () => {
      const errorMsg = "Ship must have an integer as length.";
      expect(() => new Ship(5.1)).toThrow(errorMsg);
      expect(() => new Ship(2.1)).toThrow(errorMsg);
      expect(() => new Ship(3.99)).toThrow(errorMsg);
    });

    test("should throw an error when length is less than or equal to 0", () => {
      const errorMsg = "Ship length cannot be less than or equal to 0.";
      expect(() => new Ship(0)).toThrow(errorMsg);
      expect(() => new Ship(-10)).toThrow(errorMsg);
      expect(() => new Ship(-218)).toThrow(errorMsg);
    });
  });

  describe("Methods", () => {
    // Make a test value that will be initialized each test.
    let ships;

    beforeEach(() => {
      ships = [new Ship(5), new Ship(4), new Ship(3)];
    });

    describe("hit()", () => {
      test("should increment the ship's hits", () => {
        ships.forEach((ship) => {
          const hitsBefore = ship.hits;
          ship.hit();
          ship.hit();
          expect(ship.hits).toBe(hitsBefore + 2);
        });
      });
    });

    describe("isSunk()", () => {
      test("should return true when ship is sunk", () => {
        ships.forEach((ship) => {
          for (let i = 0; i < ship.length; i++) {
            ship.hit();
          }
          expect(ship.isSunk()).toBeTruthy();
        });
      });

      test("should return false when ship is not sunk", () => {
        ships.forEach((ship) => {
          for (let i = 0; i < ship.length - 1; i++) {
            ship.hit();
          }
          expect(ship.isSunk()).toBeFalsy();
        });
      });
    });
  });
});
