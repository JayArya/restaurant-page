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
      const details = document.getElementById("details");
      while (details.firstChild) {
        details.removeChild(details.lastChild);
      }
      const tabId = e.target.id;
      if (tabId === "home") createHomePage();
      else if (tabId === "menu") createMenuPage();
      else if (tabId === "about") createAboutPage();
    });

    header.appendChild(newTab);
  }

  footer.textContent = "Copyright";
  details.id = "details";

  content.appendChild(header);
  content.appendChild(details);
  content.appendChild(footer);
};

const createHomePage = () => {
  const details = document.getElementById("details");
  details.classList.remove("menu-page");
};
const createMenuPage = () => {
  const menuData = [
    {
      itemName: "New York Style",
      itemDescription: "The iconic New York style pie",
      itemPrice: "₹499",
    },
    {
      itemName: "Neopolitan",
      itemDescription: "The authentic & fresh pizza from Italy",
      itemPrice: "₹799",
    },
    {
      itemName: "Chicago Deep Dish",
      itemDescription: "The heavenly Chicago style pie",
      itemPrice: "₹899",
    },
    {
      itemName: "Desi",
      itemDescription:
        "Because everything gets better with a little bit of Indian",
      itemPrice: "₹749",
    },
  ];

  const details = document.getElementById("details");
  details.classList.add("menu-page");

  const branding = document.createElement("div");
  branding.classList.add("branding");
  branding.textContent = "Global Pizzzeria";

  const heading = document.createElement("div");
  heading.classList.add("menu-heading");
  heading.textContent = "MENU";

  const headingHR = document.createElement("hr");
  headingHR.classList.add("double-hr");

  details.appendChild(branding);
  details.appendChild(heading);
  details.appendChild(headingHR);

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");
  for (let i = 0; i < menuData.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item-wrapper");
    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = menuData[i].itemName;

    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = menuData[i].itemDescription;

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = menuData[i].itemPrice;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    if (i !== menuData.length - 1) {
      const itemHR = document.createElement("hr");
      itemHR.classList.add("single-hr");
      menuItem.appendChild(itemHR);
    }
    menuItems.appendChild(menuItem);
  }
  details.appendChild(menuItems);
};
const createAboutPage = () => {
  const details = document.getElementById("details");
  details.classList.remove("menu-page");
};

export { loadPage };
