import { createMenuPage } from "./menuPage";

const createHomePage = () => {
  const details = document.getElementById("details");
  while (details.firstChild) {
    details.removeChild(details.lastChild);
  }
  details.classList.remove("menu-page");
  details.classList.remove("about-page");
  details.classList.add("home-page");

  const branding = document.createElement("div");
  branding.classList.add("branding");
  branding.textContent = "Global Pizzeria";

  const heading = document.createElement("div");
  heading.classList.add("home-heading");
  heading.textContent = "THE PIZZA HEAVEN";

  const headingHR = document.createElement("hr");
  headingHR.classList.add("double-hr");

  const tagLine = document.createElement("span");
  tagLine.classList.add("home-tag-line");
  tagLine.textContent = "The Epitome of Pizza!";

  const viewMenuBtn = document.createElement("button");
  viewMenuBtn.classList.add("view-menu-button");
  viewMenuBtn.textContent = "View Menu";
  viewMenuBtn.addEventListener("click", () => {
    createMenuPage();
  });

  details.appendChild(branding);
  details.appendChild(heading);
  details.appendChild(headingHR);
  details.appendChild(tagLine);
  details.appendChild(viewMenuBtn);
};

export { createHomePage };
