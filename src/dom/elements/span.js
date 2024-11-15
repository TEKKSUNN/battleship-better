import create from "../helpers";

// Returns an HTMLSpanElement.
export function createSpan(className, id) {
  const span = create("span");

  // Set the attributes of span.
  if (className) {
    span.className = className;
  }
  if (id) {
    span.id = id;
  }

  return span;
}