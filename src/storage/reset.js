import { resetComputerBoard } from "./computer";
import { resetPlayerBoard } from "./player";
import { resetPlayer2Board } from "./player2";
import { resetOrientation } from "./orientation";

export function resetAll() {
  resetOrientation();
  resetPlayerBoard();
  resetComputerBoard();
  resetPlayer2Board();
}
