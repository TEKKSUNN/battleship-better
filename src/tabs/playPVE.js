import { resetAll } from "../storage/reset";
import { loadPlayerPlaceStage } from "./pve/place-stage/player";

// Moves to (player) place ship phase of the game (Player Vs Computer Option).
export default function loadPVE() {
  resetAll();
  loadPlayerPlaceStage();
}
