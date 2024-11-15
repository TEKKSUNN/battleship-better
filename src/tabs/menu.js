// Get website logo.
import WebsiteLogo from "../../assets/menu/battleship-logo.png";

import { createDiv } from "../dom/elements/divs";
import { createButton } from "../dom/elements/buttons";
import { createImage } from "../dom/elements/images";
import { appendAll, clearContent, getContent } from "../dom/helpers";
import loadCredits from "./credits";
import loadSettings from "./settings";
import loadChooseGamemode from "./menu/choose-gamemode";

// Loads menu.
export default function loadMenu() {
  const content = getContent();

  // Make the image.
  const websiteLogo = createImage(WebsiteLogo, "web-logo", "web-logo");

  // Make the buttons.
  const buttonDiv = createDiv("btn-div");
  const playButton = createButton("Play Game", "menu-btn", loadChooseGamemode);
  const settingsButton = createButton("Settings", "menu-btn", loadSettings);
  const creditsButton = createButton("Credits", "menu-btn", loadCredits);
  appendAll(buttonDiv, playButton, settingsButton, creditsButton);

  // Clear content.
  clearContent();

  // Append all to content.
  appendAll(content, websiteLogo, buttonDiv);

  // Change class name of content.
  content.className = "menu";
}
