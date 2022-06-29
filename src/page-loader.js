import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createAboutPage } from "./aboutPage";

const loadPage = (tabId) => {
  if (tabId === "home") createHomePage();
  else if (tabId === "menu") createMenuPage();
  else if (tabId === "about") createAboutPage();
};

export { loadPage };
