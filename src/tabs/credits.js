// Get exit icon
import ExitIcon from "../../assets/menu/cg-cancel-icon.png";

import { createImageButton } from "../dom/elements/buttons";
import { createDiv } from "../dom/elements/divs";
import { createAnchor } from "../dom/elements/hyperlinks";
import { createPara } from "../dom/elements/texts";
import { appendAll, clearContent, getContent } from "../dom/helpers";
import loadMenu from "./menu";

// Loads the credits tab.
export default function loadCredits() {
  // Get content from template.html for altering.
  const content = getContent();

  // Make shorthand fn for credit links
  const createCreditLink = (textContent, link) =>
    createAnchor(textContent, link, "credit-link");

  // Function to create a credit section dynamically.
  function createCreditSection(role, name, url) {
    const creditPara = createPara(`${role}: `, "credit");
    const creditLink = createCreditLink(name, url);
    creditPara.appendChild(creditLink);
    return creditPara;
  }

  // Credit data (role, name, and URL)
  const creditsData = [
    {
      role: "Programmer",
      name: "Emmanuel Leu Tecson",
      url: "https://github.com/TEKKSUNN/",
    },
    {
      role: "Web Developer",
      name: "Emmanuel Leu Tecson",
      url: "https://github.com/TEKKSUNN/",
    },
    {
      role: "Web Designer",
      name: "Emmanuel Leu Tecson",
      url: "https://github.com/TEKKSUNN/",
    },
    {
      role: "Back-end Developer",
      name: "Emmanuel Leu Tecson",
      url: "https://github.com/TEKKSUNN/",
    },
    {
      role: "Front-end Developer",
      name: "Emmanuel Leu Tecson",
      url: "https://github.com/TEKKSUNN/",
    },
    { role: "Icons", name: "Iconify", url: "https://iconify.design" },
  ];

  // Create the core elements.
  const div = createDiv("credits-div");
  const exit = createImageButton(ExitIcon, "credits-exit", loadMenu);

  // Create the credits div.
  const credits = createDiv("credits-group");

  // Loop through the credits data and create each credit section.
  creditsData.forEach((credit) => {
    const creditSection = createCreditSection(
      credit.role,
      credit.name,
      credit.url,
    );
    credits.appendChild(creditSection);
  });

  // Wrap everything up.
  appendAll(div, exit, credits);

  // Clear content.
  clearContent();

  // Append all to content.
  content.appendChild(div);

  // Change className of content.
  content.className = "credits";
}
