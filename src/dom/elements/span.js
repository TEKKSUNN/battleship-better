import { HTMLError } from "../error";
import create from "../helpers";

// Returns an HTMLSpanElement.
export function createSpan(textContent, className, id) {
  const span = create("span");

  // Throw error when no textContent.
  if (!textContent) {
    throw new HTMLError("createSpan() must have a textContent.");
  }

  // Set the attributes of span.
  span.textContent = textContent;
  if (className) {
    span.className = className;
  }
  if (id) {
    span.id = id;
  }

  return span;
}
