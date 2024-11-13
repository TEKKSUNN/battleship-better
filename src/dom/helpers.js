import { HTMLError } from "./error";

export default function create(HTMLElementTagName) {
  if (typeof HTMLElementTagName !== "string") {
    throw new HTMLError("create() can only accept a string value.");
  }
  return document.createElement(HTMLElementTagName);
}
