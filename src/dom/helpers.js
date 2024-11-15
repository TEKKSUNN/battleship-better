import { HTMLError } from "./error";

export default function create(HTMLElementTagName) {
  if (typeof HTMLElementTagName !== "string") {
    throw new HTMLError("create() can only accept a string value.");
  }
  return document.createElement(HTMLElementTagName);
}

export const getContent = () => document.getElementById("content");

export const getDialogs = () => document.getElementById("dialogs");

export function appendAll(parentElement, ...elements) {
  elements.forEach((element) => {
    parentElement.append(element);
  });
}
