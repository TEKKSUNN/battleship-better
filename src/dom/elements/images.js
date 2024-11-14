import { HTMLError } from "../error";
import create from "../helpers";

// Creates an HTML img element.
export function createImage(imageURL, className, id) {
  const img = create("img");

  // If no imageURL is given:
  if (!imageURL) {
    throw new HTMLError("createImage() must have an imageURL.");
  }

  // Set attributes of image.
  img.src = imageURL;
  if (className) {
    img.className = className;
  }
  if (id) {
    img.id = id;
  }

  return img;
}
