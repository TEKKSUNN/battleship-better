import createObjective from "../../../components/objective";
import loadComputerPlaceStage from "./computer";
import { createRandomPlaceButton } from "../../../components/random-place";
import { createShipBar } from "../../../components/ships-bar";
import { getBoard } from "../../../dom/board/getBoard";
import { createButton } from "../../../dom/elements/buttons";
import { createDiv } from "../../../dom/elements/divs";
import { getContent, clearContent, appendAll } from "../../../dom/helpers";
import { getPlayerBoard, setPlayerBoard } from "../../../storage/player";
import createExitGameButton from "../../../components/exit-game";

// Loads place stage tab for Player in Player Vs Computer option.
export function loadPlayerPlaceStage() {
  // Get content from template.html for alteration.
  const content = getContent();

  // Get exit button.
  const exitBtn = createExitGameButton();

  // Get objective.
  const objective = createObjective("Place your ships");

  // Make board, ships image, and rotate button.
  const shipHandleDiv = createDiv("ship-handle");
  const board = getBoard(getPlayerBoard(), setPlayerBoard);
  const shipBar = createShipBar();
  appendAll(shipHandleDiv, board, shipBar);

  // Make ready button, and random place button.
  const finishDiv = createDiv("finish-place-btns");
  const readyButton = createButton(
    "READY",
    "ready-button not-ready",
    loadComputerPlaceStage,
  );
  const randomButton = createRandomPlaceButton(getPlayerBoard(), board);
  appendAll(finishDiv, readyButton, randomButton);

  // Clear content.
  clearContent();

  // Append all to content.
  appendAll(content, exitBtn, objective, shipHandleDiv, finishDiv);

  // Change class name of content.
  content.className = "place-ship";
}
