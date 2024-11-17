// Get exit game button icon
import ExitIcon from "../../assets/exit-game.png";

import { createImageButton } from "../dom/elements/buttons";
import loadMenu from "../tabs/menu";

export default function createExitGameButton() {
  const exitBtn = createImageButton(ExitIcon, "exit-btn", loadMenu);
  return exitBtn;
}
