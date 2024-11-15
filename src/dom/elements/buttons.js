import { HTMLError } from "../error";
import create from "../helpers";
import { createImage } from "./images";

// Creates a button (can be assigned a callbackfn).
export function createButton(textContent, className, callbackfn) {
  const btn = create("button");

  // Throw error when no textContent.
  if (!textContent && textContent !== "") {
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

// Returns an HTMLButtonElement, but with an image inside it.
export function createImageButton(imageURL, className, callbackfn) {
  // Throw an error when imageURL is not given.
  if (!imageURL) {
    throw new HTMLError("createImageButton() must have an imageURL.");
  }

  // Make button.
  const button = createButton("", className, callbackfn);

  // Get the image & append to button.
  const image = createImage(imageURL, "btn-img");
  button.appendChild(image);

  return button;
}

// Returns an HTMLButtonElement with type: submit.
export function createSubmitButton(textContent, className, callbackfn) {
  // Make button.
  const button = createButton(textContent, className, callbackfn);

  // Set type of button.
  button.setAttribute("type", "submit");

  return button;
}

// Returns an HTMLButtonElement with type: submit.
export function createImageSubmitButton(imageURL, className, callbackfn) {
  // Make button.
  const button = createImageButton(imageURL, className, callbackfn);

  // Set type of button.
  button.setAttribute("type", "submit");

  return button;
}
