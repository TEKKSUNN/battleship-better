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
export function createLI(className, id) {
  const li = create("li");

  // Set attributes of li.
  if (className) {
    li.className = className;
  }
  if (id) {
    li.id = id;
  }

  return li;
}
