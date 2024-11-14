import create from "../helpers";

// Creates a HTMLDivElement.
export function createDiv(className, id) {
  const div = create("div");

  // Sets the attributes of the div.
  if (className) {
    div.className = className;
  }
  if (id) {
    div.id = id;
  }

  return div;
}
