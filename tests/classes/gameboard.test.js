import Gameboard from "../../src/classes/gameboard";
import Ship from "../../src/classes/ships";

describe("Gameboard", () => {
  describe("Constructor", () => {
    test("should return a gameboard object.", () => {
      expect(new Gameboard()).toEqual({
        gameboard: [
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null, null, null],
        ],
        misses: 0,
      });
    });

    test("should throw an error when size isn't a safe integer.", () => {
      const errorMsg = "Gameboard size must be a safe integer.";
      expect(() => new Gameboard(5.9)).toThrow(errorMsg);
      expect(() => new Gameboard(7.6)).toThrow(errorMsg);
      expect(() => new Gameboard(4.3)).toThrow(errorMsg);
    });

    test("should throw an error when size is less than or equal to 0.", () => {
      const errorMsg = "Gameboard size must be greater than 0.";
      expect(() => new Gameboard(0)).toThrow(errorMsg);
      expect(() => new Gameboard(-5)).toThrow(errorMsg);
      expect(() => new Gameboard(-9)).toThrow(errorMsg);
    });
  });

  describe("Methods", () => {
    // Make a test value that will be initialized each test.
    let gameboard;
    beforeEach(() => {
      gameboard = new Gameboard();
    });

    describe("placeShip()", () => {
      test("should throw an error when missing variables.", () => {
        const errorMsg = "Gameboard.placeShip() doesn't have enough arguments.";
        expect(() => gameboard.placeShip(new Ship(5), 3, 5)).toThrow(errorMsg);
        expect(() => gameboard.placeShip(new Ship(5), 3)).toThrow(errorMsg);
        expect(() => gameboard.placeShip(new Ship(5))).toThrow(errorMsg);
        expect(() => gameboard.placeShip()).toThrow(errorMsg);
      });

      test("should throw an error when positions aren't safe integers.", () => {
        const errorMsg =
          "Gameboard.placeShip() xPos, yPos must be safe integers.";
        expect(() =>
          gameboard.placeShip(new Ship(5), 3.4, 5.8, "landscape"),
        ).toThrow(errorMsg);
        expect(() =>
          gameboard.placeShip(new Ship(5), 2.5, 7.9, "vertical"),
        ).toThrow(errorMsg);
        expect(() =>
          gameboard.placeShip(new Ship(5), 9.2, 4.4, "vertical"),
        ).toThrow(errorMsg);
      });

      test("should throw an error when positions are greater than or less than board's indice length", () => {
        const errorMsg =
          "Gameboard.placeShip() xPos, yPos must be within board's indice length.";
        expect(() =>
          gameboard.placeShip(new Ship(5), 3, -1, "landscape"),
        ).toThrow(errorMsg);
        expect(() =>
          gameboard.placeShip(new Ship(5), 100, -5, "vertical"),
        ).toThrow(errorMsg);
        expect(() =>
          gameboard.placeShip(new Ship(5), 1, 90, "vertical"),
        ).toThrow(errorMsg);
      });

      test("should throw an error when orientation isn't landscape nor portrait.", () => {
        const errorMsg =
          'Gameboard.placeShip() orientation must be "landscape" or "portrait".';
        expect(() => gameboard.placeShip(new Ship(5), 3, 5, "orange")).toThrow(
          errorMsg,
        );
        expect(() => gameboard.placeShip(new Ship(5), 3, 5, "apple")).toThrow(
          errorMsg,
        );
        expect(() => gameboard.placeShip(new Ship(5), 3, 5, "mango")).toThrow(
          errorMsg,
        );
      });

      test("should be able to place ships horizontally.", () => {
        // Tests the X axis of the gameboard.
        function testXCoords(ship, yPos, xPos) {
          for (let i = xPos; i < ship.length; i++) {
            expect(gameboard.gameboard[yPos][i]).not.toBeNull();
          }
        }

        // Make ships for testing.
        const ships = [new Ship(5), new Ship(3), new Ship(2)];

        // Test all ships.
        ships.forEach((ship, index) => {
          gameboard.placeShip(ship, index, 0, "landscape");
          testXCoords(ship, index, 0);
        });
      });

      test("should be able to place ships vertically.", () => {
        // Tests the X axis of the gameboard.
        function testYCoords(ship, yPos, xPos) {
          for (let i = yPos; i < ship.length; i++) {
            expect(gameboard.gameboard[i][xPos]).not.toBeNull();
          }
        }

        // Make ships for testing.
        const ships = [new Ship(5), new Ship(3), new Ship(2)];

        // Test all ships.
        ships.forEach((ship, index) => {
          gameboard.placeShip(ship, 0, index, "portrait");
          testYCoords(ship, 0, index);
        });
      });
    });

    describe("receiveAttack()", () => {
      test("should record misses", () => {
        for (let i = 0; i < 10; i++) {
          gameboard.receiveAttack(i, i);
        }
        expect(gameboard.misses).toBe(10);
      });

      test("should record attacks", () => {
        // Make ships for testing.
        const ships = [new Ship(5), new Ship(3), new Ship(2)];

        // Place all ships.
        ships.forEach((ship, index) => {
          gameboard.placeShip(ship, index, 0, "landscape");
        });

        // Hit vertically-downward.
        for (let i = 0; i < ships.length; i++) {
          gameboard.receiveAttack(i, 0);
        }

        ships.forEach((ship) => {
          expect(ship.hits).toBe(1);
        });
      });
    });

    describe("isAllShipSunk()", () => {
      test("should return true if all ships are sunk", () => {
        // Make ships for testing.
        const ships = [new Ship(5), new Ship(3), new Ship(2)];

        // Will hit all ships squares based on ship length.
        function hitAllHorizontally(ship, yPos, start) {
          for (let i = start; i < ship.length; i++) {
            gameboard.receiveAttack(yPos, i);
          }
        }

        // Place and hit all ships.
        ships.forEach((ship, index) => {
          gameboard.placeShip(ship, index, 0, "landscape");
          hitAllHorizontally(ship, index, 0);
        });

        // Make sure all ships were sunk.
        expect(gameboard.isAllShipSunk()).toBeTruthy();
      });

      test("should return false if not all ships are sunk", () => {
        // Make ships for testing.
        const ships = [new Ship(5), new Ship(3), new Ship(2)];

        // Will hit all ships squares based on ship length.
        function hitAllHorizontally(ship, yPos, start) {
          for (let i = start; i < ship.length; i++) {
            gameboard.receiveAttack(yPos, i);
          }
        }

        // Place and hit all ships except the last ship.
        ships.forEach((ship, index) => {
          gameboard.placeShip(ship, index, 0, "landscape");
          if (index !== ships.length - 1) {
            hitAllHorizontally(ship, index, 0);
          }
        });

        // Make sure all ships weren't sunk.
        expect(gameboard.isAllShipSunk()).toBeFalsy();
      });
    });
  });
});
