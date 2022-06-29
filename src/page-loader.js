import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createAboutPage } from "./aboutPage";

const content = document.getElementById("content");

const loadPage = () => {
  const header = document.createElement("header");
  const details = document.createElement("div");
  const footer = document.createElement("footer");
  const tabs = ["home", "menu", "about"];

  for (let i = 0; i < 3; i++) {
    const newTab = document.createElement("span");
    newTab.textContent = tabs[i];
    newTab.id = tabs[i];
    newTab.classList.add("tab");

    newTab.addEventListener("click", (e) => {
      const tabId = e.target.id;
      if (tabId === "home") createHomePage();
      else if (tabId === "menu") createMenuPage();
      else if (tabId === "about") createAboutPage();
    });

    header.appendChild(newTab);
  }

  footer.innerHTML =
    'Copyright &copy; 2022 JayArya <a href="https://github.com/JayArya/restaurant-page" target="_blank"><img class="github-icon" src="./assets/GitHub-Mark-Light-32px.png" alt="GitHub-Mark"/></a>';
  details.id = "details";

  content.appendChild(header);
  content.appendChild(details);
  content.appendChild(footer);
  createHomePage();
};

export { loadPage };
