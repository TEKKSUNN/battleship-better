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

  // Make form not reload the site when a button is clicked.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  return form;
}
