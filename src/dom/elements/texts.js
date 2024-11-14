import { HTMLError } from "../error";
import create from "../helpers";

// Creates HTMLParagraphElement.
export function createPara(textContent, className, id) {
  const para = create("p");

  // Throw error when textContent is missing.
  if (!textContent) {
    throw new HTMLError("createPara() must have a textContent.");
  }

  // Set attributes of paragraph
  para.textContent = textContent;
  if (className) {
    para.className = className;
  }
  if (id) {
    para.id = id;
  }

  return para;
}
