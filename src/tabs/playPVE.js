import { resetComputerBoard } from "../storage/computer";
import { resetPlayerBoard } from "../storage/player";
import { loadPlayerPlaceStage } from "./pve/place-stage/player";

// Moves to (player) place ship phase of the game (Player Vs Computer Option).
export default function loadPVE() {
  resetPlayerBoard();
  resetComputerBoard();
  loadPlayerPlaceStage();
}
