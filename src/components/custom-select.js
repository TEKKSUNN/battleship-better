// Get default dropdown icon.
import DropdownIcon from "../../assets/menu/dropdown-icon.png";

import { createDiv } from "../dom/elements/divs";
import { createLI, createUL } from "../dom/elements/lists";
import { createSpan } from "../dom/elements/span";
import { appendAll } from "../dom/helpers";
import { createButton } from "../dom/elements/buttons";
import { createImage } from "../dom/elements/images";
import ComponentError from "./error";

// Returns a custom select input element.
export default function createCustomSelect(
  options,
  valueID,
  otherSpecs = {
    className: "select",
    optionClassName: "option",
    listClassName: "optList",
    valueClassName: "value",
    dropdownIcon: DropdownIcon,
  },
) {
  // Throw error when options is not given.
  if (!options) {
    throw new ComponentError(
      "createCustomSelect() must have an array of options.",
    );
  }

  // Throw error when options is not an array.
  if (!Array.isArray(options)) {
    throw new ComponentError(
      "createCustomSelect() must have an array as options.",
    );
  }

  // Throw error when no valueID.
  if (!valueID) {
    throw new ComponentError("createCustomSelect() must have a valueID.");
  }

  // Fill in missing elements, incase otherSpecs is given.
  if (!otherSpecs.hasOwnProperty("className")) {
    otherSpecs.className = "select";
  }
  if (!otherSpecs.hasOwnProperty("optionClassName")) {
    otherSpecs.optionClassName = "option";
  }
  if (!otherSpecs.hasOwnProperty("listClassName")) {
    otherSpecs.listClassName = "optList";
  }
  if (!otherSpecs.hasOwnProperty("valueClassName")) {
    otherSpecs.valueClassName = "value";
  }
  if (!otherSpecs.hasOwnProperty("dropdownIcon")) {
    otherSpecs.dropdownIcon = DropdownIcon;
  }

  // Make the custom input div.
  const customInput = createDiv(otherSpecs.className);

  // Make the value text and dropdown icon & wrap them together.
  const wrapper = createDiv("select-viewable");
  const value = createSpan(options[0], otherSpecs.valueClassName, valueID);
  const icon = createButton("", "dropdown-icon");

  // Get dropdown image & push it to icon.
  const iconImage = createImage(otherSpecs.dropdownIcon, "dropdown-image");
  icon.appendChild(iconImage);

  appendAll(wrapper, value, icon);

  // Make unordered list of options.
  const optList = createUL(otherSpecs.listClassName);
  options.forEach((option) => {
    const listItem = createLI(option, otherSpecs.optionClassName);
    optList.appendChild(listItem);

    // Add click event to update the selected value and close the dropdown.
    listItem.addEventListener("click", () => {
      value.textContent = option;
      optList.style.display = "none"; // Close the dropdown after selecting
    });

    // Add keyboard navigation event to each option (for arrow key navigation)
    listItem.setAttribute("tabindex", 0); // Make options focusable for keyboard navigation
    listItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        value.textContent = option;
        optList.style.display = "none";
      }
    });
  });

  // Initially hide the options list.
  optList.style.display = "none";
  optList.style.maxHeight = "200px"; // Set maximum height for the dropdown list
  optList.style.overflowY = "auto"; // Enable scrolling if options exceed the height

  // Toggle dropdown visibility when the input is clicked.
  icon.addEventListener("click", () => {
    optList.style.display = optList.style.display === "none" ? "block" : "none";
  });

  // Close dropdown if the user clicks outside the custom select input.
  document.addEventListener("click", (event) => {
    if (!customInput.contains(event.target)) {
      optList.style.display = "none";
    }
  });

  // Add keyboard navigation for the select (arrow keys to navigate, Enter to select)
  customInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      const nextOption = document.activeElement.nextElementSibling;
      if (nextOption) {
        nextOption.focus();
      }
    } else if (e.key === "ArrowUp") {
      const prevOption = document.activeElement.previousElementSibling;
      if (prevOption) {
        prevOption.focus();
      }
    }
  });

  // Append everything together.
  appendAll(customInput, wrapper, optList);

  // Make customInput focusable using keyboard.
  customInput.setAttribute("tabindex", "0");

  return customInput;
}
