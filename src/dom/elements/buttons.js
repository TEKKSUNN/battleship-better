import { HTMLError } from "../error";
import create from "../helpers";

// Creates a button (can be assigned a callbackfn).
export function createButton(textContent, className, callbackfn) {
  const btn = create("button");

  // Throw error when no textContent.
  if (!textContent) {
    throw new HTMLError("createButton() must have a textContent.");
  }

  // Set attributes of btn.
  btn.textContent = textContent;
  if (className) {
    btn.className = className;
  }
  if (callbackfn) {
    btn.addEventListener("click", callbackfn);
  }

  return btn;
}
