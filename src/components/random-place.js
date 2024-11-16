// Get random place button icon.
import RandomIcon from "../../assets/place-stage/cg-random.png";
import { getBoard } from "../dom/board/getBoard";

import { createImageButton } from "../dom/elements/buttons";
import { getPlayerBoard, setPlayerBoard } from "../storage/player";

export function createRandomPlaceButton(GameboardObject, boardNode) {
  const button = createImageButton(RandomIcon, "random-btn", () => {
    GameboardObject.randomPlaceAllShips();
    setPlayerBoard(GameboardObject);
    boardNode.innerHTML = getBoard(getPlayerBoard()).innerHTML;
  });

  return button;
}
