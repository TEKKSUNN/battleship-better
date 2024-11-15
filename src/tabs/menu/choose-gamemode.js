// Get cancel & confirm icons
import CancelIcon from "../../../assets/menu/cg-cancel-icon.png";
import ConfirmIcon from "../../../assets/menu/cg-check-icon.png";

import createCustomSelect from "../../components/custom-select";
import {
  createImageButton,
  createImageSubmitButton,
} from "../../dom/elements/buttons";
import { createDialog } from "../../dom/elements/dialogs";
import { createDiv } from "../../dom/elements/divs";
import { createForm } from "../../dom/elements/forms";
import { createPara } from "../../dom/elements/texts";
import { appendAll, clearDialogs, getDialogs } from "../../dom/helpers";
import loadPVE from "../playPVE";
import loadPVP from "../playPVP";

// Loads the "Choose Gamemode" dialog.
export default function loadChooseGamemode() {
  // Get dialogs from template.html for alteration.
  const dialogDiv = getDialogs();

  // Make dialog.
  const dialog = createDialog("cg-dialog");

  // Make fn that closes the dialog & removes it from dialogs div.
  const closeDialog = () => {
    dialog.close();
    clearDialogs();
  };

  // Make dialog title.
  const title = createPara("Choose Gamemode", "cg-title");

  // Make form for choosing gamemode.
  const form = createForm("cg-form", "bs-form");

  // Make input group that will show "Player vs Player"/"Player vs Computer"
  const inputDiv = createDiv("cg-input-group");
  const defaultOption = createPara("Player", "cg-option");
  const vsLabel = createPara("vs", "cg-vs-label");
  const customSelect = createCustomSelect(["Computer", "Player"], "cg-value", {
    valueClassName: "cg-option",
  });
  appendAll(inputDiv, defaultOption, vsLabel, customSelect);

  // Make fn that changes tabs based on value of value.
  const changePhase = () => {
    closeDialog();
    const nextPhase = document.getElementById("cg-value").textContent;
    if (nextPhase === "Player") {
      loadPVP();
    } else {
      loadPVE();
    }
  };

  // Make cancel & confirm buttons & group them together.
  const dialogButtons = createDiv("cg-buttons");
  const cancelButton = createImageButton(
    CancelIcon,
    "cg-cancel cg-button",
    closeDialog,
  );
  const confirmButton = createImageSubmitButton(
    ConfirmIcon,
    "cg-confirm cg-button",
    changePhase,
  );
  appendAll(dialogButtons, cancelButton, confirmButton);

  // Wrap everything to use in form.
  appendAll(form, inputDiv, dialogButtons);

  // Wrap everything to dialog.
  appendAll(dialog, title, form);

  // Alter dialogs from template.html
  dialogDiv.appendChild(dialog);

  // Show the dialog
  dialog.showModal();
}
