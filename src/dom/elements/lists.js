import { HTMLError } from "../error";
import create from "../helpers";

// Returns an HTMLUnorderedListElement
export function createUL(className, id) {
  const ul = create("ul");

  // Set attributes of ul.
  if (className) {
    ul.className = className;
  }
  if (id) {
    ul.id = id;
  }

  return ul;
}

// Returns an HTMLListElement.
export function createLI(textContent, className, id) {
  const li = create("li");

  // Throw an error when no textContent.
  if (!textContent) {
    throw new HTMLError("createLI() must have a textContent.");
  }

  // Set attributes of li.
  li.textContent = textContent;
  if (className) {
    li.className = className;
  }
  if (id) {
    li.id = id;
  }

  return li;
}
