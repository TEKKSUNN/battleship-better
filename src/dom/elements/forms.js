import create from "../helpers";

// Returns an HTMLFormElement.
export function createForm(id, className) {
  const form = create("form");

  // Set attributes of the form.
  if (id) {
    form.id = id;
  }
  if (className) {
    form.className = className;
  }

  return form;
}
