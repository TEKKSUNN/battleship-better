import { HTMLError } from "../error";
import create from "../helpers";

// Returns an HTMLAnchorElement.
export function createAnchor(textContent, link, className, id) {
  const a = create("a");

  // Throw an error when no textContent.
  if (!textContent && textContent !== "") {
    throw new HTMLError("createAnchor() must have a textContent.");
  }

  // Throw an error when no link.
  if (!link) {
    throw new HTMLError("createAnchor() must have a link.");
  }

  // Set attributes of anchor.
  a.textContent = textContent;
  a.href = link;
  if (className) {
    a.className = className;
  }
  if (id) {
    a.id = id;
  }

  // Set rel for security purposes.
  a.rel = "noreferrer noopener";

  // Set target to new tab.
  a.target = "_blank";

  return a;
}
