const createAboutPage = () => {
  const details = document.getElementById("details");
  while (details.firstChild) {
    details.removeChild(details.lastChild);
  }

  details.classList.remove("home-page");
  details.classList.remove("menu-page");
  details.classList.add("about-page");

  const branding = document.createElement("div");
  branding.classList.add("branding");
  branding.textContent = "Global Pizzeria";

  const heading = document.createElement("div");
  heading.classList.add("about-heading");
  heading.textContent = "OUR STORY";

  const headingHR = document.createElement("hr");
  headingHR.classList.add("double-hr");

  const aboutText = document.createElement("div");
  aboutText.classList.add("about-content");
  aboutText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod";

  details.appendChild(branding);
  details.appendChild(heading);
  details.appendChild(headingHR);
  details.appendChild(aboutText);
};

export { createAboutPage };
