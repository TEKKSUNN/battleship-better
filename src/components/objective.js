import { createDiv } from "../dom/elements/divs";
import { createPara } from "../dom/elements/texts";
import { appendAll } from "../dom/helpers";
import ComponentError from "./error";

// Makes the objective label on top of game phases.
export default function createObjective(objectiveMsg) {
  // Throw error when no objectiveMsg.
  if (!objectiveMsg) {
    throw new ComponentError("createObjective() must have an objectiveMsg.");
  }

  // Make div to group the elements.
  const objectiveDiv = createDiv("obj");

  // Make the elements.
  const label = createPara("Objective:", "obj-label");
  const objective = createPara(objectiveMsg, "obj-msg");

  appendAll(objectiveDiv, label, objective);

  return objectiveDiv;
}
