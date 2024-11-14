import create from "../helpers";

// Returns an HTMLDivElement.
export function createDialog(className, id) {
  const dialog = create("dialog");

  // Set attributes of the dialog.
  if (className) {
    dialog.className = className;
  }
  if (id) {
    dialog.id = id;
  }

  return dialog;
}
