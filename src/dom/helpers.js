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

export function clearDialogs() {
  getDialogs().innerHTML = "";
}

export function clearContent() {
  getContent().innerHTML = "";
}

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export function classAdd(element, className) {
  element.classList.add(className);
}

export function classRemove(element, className) {
  element.classList.remove(className);
}
