/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutPage\": () => (/* binding */ createAboutPage)\n/* harmony export */ });\nconst createAboutPage = () => {\r\n  const details = document.getElementById(\"details\");\r\n  while (details.firstChild) {\r\n    details.removeChild(details.lastChild);\r\n  }\r\n\r\n  details.classList.remove(\"home-page\");\r\n  details.classList.remove(\"menu-page\");\r\n  details.classList.add(\"about-page\");\r\n\r\n  const branding = document.createElement(\"div\");\r\n  branding.classList.add(\"branding\");\r\n  branding.textContent = \"Global Pizzeria\";\r\n\r\n  const heading = document.createElement(\"div\");\r\n  heading.classList.add(\"about-heading\");\r\n  heading.textContent = \"OUR STORY\";\r\n\r\n  const headingHR = document.createElement(\"hr\");\r\n  headingHR.classList.add(\"double-hr\");\r\n\r\n  const aboutText = document.createElement(\"div\");\r\n  aboutText.classList.add(\"about-content\");\r\n  aboutText.textContent =\r\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod\";\r\n\r\n  details.appendChild(branding);\r\n  details.appendChild(heading);\r\n  details.appendChild(headingHR);\r\n  details.appendChild(aboutText);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\r\n\r\nconst createHomePage = () => {\r\n  const details = document.getElementById(\"details\");\r\n  while (details.firstChild) {\r\n    details.removeChild(details.lastChild);\r\n  }\r\n  details.classList.remove(\"menu-page\");\r\n  details.classList.remove(\"about-page\");\r\n  details.classList.add(\"home-page\");\r\n\r\n  const branding = document.createElement(\"div\");\r\n  branding.classList.add(\"branding\");\r\n  branding.textContent = \"Global Pizzeria\";\r\n\r\n  const heading = document.createElement(\"div\");\r\n  heading.classList.add(\"home-heading\");\r\n  heading.textContent = \"THE PIZZA HEAVEN\";\r\n\r\n  const headingHR = document.createElement(\"hr\");\r\n  headingHR.classList.add(\"double-hr\");\r\n\r\n  const tagLine = document.createElement(\"span\");\r\n  tagLine.classList.add(\"home-tag-line\");\r\n  tagLine.textContent = \"The Epitome of Pizza!\";\r\n\r\n  const viewMenuBtn = document.createElement(\"button\");\r\n  viewMenuBtn.classList.add(\"view-menu-button\");\r\n  viewMenuBtn.textContent = \"View Menu\";\r\n  viewMenuBtn.addEventListener(\"click\", () => (0,_menuPage__WEBPACK_IMPORTED_MODULE_0__.createMenuPage)());\r\n\r\n  details.appendChild(branding);\r\n  details.appendChild(heading);\r\n  details.appendChild(headingHR);\r\n  details.appendChild(tagLine);\r\n  details.appendChild(viewMenuBtn);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loader */ \"./src/page-loader.js\");\n\r\n\r\nconst content = document.getElementById(\"content\");\r\nconst header = document.createElement(\"header\");\r\nconst details = document.createElement(\"div\");\r\nconst footer = document.createElement(\"footer\");\r\nconst tabs = [\"home\", \"menu\", \"about\"];\r\n\r\nfor (let i = 0; i < 3; i++) {\r\n  const newTab = document.createElement(\"span\");\r\n  newTab.textContent = tabs[i];\r\n  newTab.id = tabs[i];\r\n  newTab.classList.add(\"tab\");\r\n\r\n  newTab.addEventListener(\"click\", (e) => {\r\n    const tabId = e.target.id;\r\n    (0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.loadPage)(tabId);\r\n  });\r\n\r\n  header.appendChild(newTab);\r\n}\r\n\r\nfooter.innerHTML =\r\n  'Copyright &copy; 2022 JayArya <a href=\"https://github.com/JayArya/restaurant-page\" target=\"_blank\"><img class=\"github-icon\" src=\"./assets/GitHub-Mark-Light-32px.png\" alt=\"GitHub-Mark\"/></a>';\r\n\r\ndetails.id = \"details\";\r\n\r\ncontent.appendChild(header);\r\ncontent.appendChild(details);\r\ncontent.appendChild(footer);\r\n\r\n(0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.loadPage)(\"home\");\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuPage\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\nconst createMenuPage = () => {\r\n  const menuData = [\r\n    {\r\n      itemName: \"New York Style\",\r\n      itemDescription: \"The iconic New York style pie\",\r\n      itemPrice: \"₹499\",\r\n    },\r\n    {\r\n      itemName: \"Neopolitan\",\r\n      itemDescription: \"The authentic & fresh pizza from Italy\",\r\n      itemPrice: \"₹799\",\r\n    },\r\n    {\r\n      itemName: \"Chicago Deep Dish\",\r\n      itemDescription: \"The heavenly Chicago style pie\",\r\n      itemPrice: \"₹899\",\r\n    },\r\n    {\r\n      itemName: \"Desi\",\r\n      itemDescription:\r\n        \"Because everything gets better with a little bit of Indian\",\r\n      itemPrice: \"₹749\",\r\n    },\r\n  ];\r\n\r\n  const details = document.getElementById(\"details\");\r\n  while (details.firstChild) {\r\n    details.removeChild(details.lastChild);\r\n  }\r\n\r\n  details.classList.remove(\"home-page\");\r\n  details.classList.remove(\"menu-page\");\r\n  details.classList.add(\"menu-page\");\r\n\r\n  const branding = document.createElement(\"div\");\r\n  branding.classList.add(\"branding\");\r\n  branding.textContent = \"Global Pizzeria\";\r\n\r\n  const heading = document.createElement(\"div\");\r\n  heading.classList.add(\"menu-heading\");\r\n  heading.textContent = \"MENU\";\r\n\r\n  const headingHR = document.createElement(\"hr\");\r\n  headingHR.classList.add(\"double-hr\");\r\n\r\n  details.appendChild(branding);\r\n  details.appendChild(heading);\r\n  details.appendChild(headingHR);\r\n\r\n  const menuItems = document.createElement(\"div\");\r\n  menuItems.classList.add(\"menu-items\");\r\n  for (let i = 0; i < menuData.length; i++) {\r\n    const menuItem = document.createElement(\"div\");\r\n    menuItem.classList.add(\"menu-item-wrapper\");\r\n    const itemName = document.createElement(\"div\");\r\n    itemName.classList.add(\"item-name\");\r\n    itemName.textContent = menuData[i].itemName;\r\n\r\n    const itemDescription = document.createElement(\"div\");\r\n    itemDescription.classList.add(\"item-description\");\r\n    itemDescription.textContent = menuData[i].itemDescription;\r\n\r\n    const itemPrice = document.createElement(\"div\");\r\n    itemPrice.classList.add(\"item-price\");\r\n    itemPrice.textContent = menuData[i].itemPrice;\r\n\r\n    menuItem.appendChild(itemName);\r\n    menuItem.appendChild(itemDescription);\r\n    menuItem.appendChild(itemPrice);\r\n\r\n    if (i !== menuData.length - 1) {\r\n      const itemHR = document.createElement(\"hr\");\r\n      itemHR.classList.add(\"single-hr\");\r\n      menuItem.appendChild(itemHR);\r\n    }\r\n    menuItems.appendChild(menuItem);\r\n  }\r\n  details.appendChild(menuItems);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n\r\n\r\n\r\n\r\nconst loadPage = (tabId) => {\r\n  if (tabId === \"home\") (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\r\n  else if (tabId === \"menu\") (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();\r\n  else if (tabId === \"about\") (0,_aboutPage__WEBPACK_IMPORTED_MODULE_2__.createAboutPage)();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-loader.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;