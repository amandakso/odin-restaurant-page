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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadContactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadContactPage */ \"./src/loadContactPage.js\");\n/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ \"./src/loadMenu.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\n\n// append navbar\nconst navbar = document.createElement('div');\nconst navItems = document.createElement('ul');\nlet nav1 = document.createElement('li');\nlet nav1Link = document.createElement('a')\nnav1Link.id = \"home\";\nnav1Link.innerText = \"Home\";\nnav1Link.href = \"#\";\nnav1.appendChild(nav1Link);\n\nlet nav2 = document.createElement('li');\nlet nav2Link = document.createElement('a');\nnav2Link.innerText = \"Menu\";\nnav2Link.id = \"menu\";\nnav2Link.href= \"#\";\nnav2.appendChild(nav2Link);\n\nlet nav3 = document.createElement('li');\nlet nav3Link = document.createElement('a');\nnav3Link.innerText = \"Contact Us\";\nnav3Link.id = \"contact\";\nnav3Link.href = \"#\";\nnav3.appendChild(nav3Link);\n\nnavbar.appendChild(nav1);\nnavbar.appendChild(nav2);\nnavbar.appendChild(nav3);\n\ncontent.appendChild(navbar);\n\n\n// append container\nconst container = document.createElement('div');\ncontainer.classList.add(\"container\");\nlet homePage = (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\ncontainer.appendChild(homePage);\ncontent.appendChild(container);\n\n\n// append footer\nlet footer = document.createElement('div');\nfooter.innerText = \"Created by Amanda Panda for the Odin Project\";\ncontent.appendChild(footer);\n\n// add event listeners to nav bar items\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\nconst contain = document.querySelector(\".container\");\n\nhome.addEventListener(\"click\", () => {\n    contain.removeChild(contain.firstElementChild);\n    contain.appendChild(homePage);\n});\n\nmenu.addEventListener(\"click\", () => {\n    contain.removeChild(contain.firstElementChild);\n    let menuPage = (0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n    contain.appendChild(menuPage);\n});\n\ncontact.addEventListener(\"click\", () => {\n    contain.removeChild(contain.firstElementChild);\n    let contactPage = (0,_loadContactPage__WEBPACK_IMPORTED_MODULE_1__.loadContactPage)();\n    contain.appendChild(contactPage);\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadContactPage.js":
/*!********************************!*\
  !*** ./src/loadContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst loadContactPage = () => {\n    const element = document.createElement('div');\n\n    const contactName = document.createElement('h1');\n    contactName.innerText = \"Contact Us\";\n    element.appendChild(contactName);\n\n    const phoneNumber = document.createElement('h4');\n    phoneNumber.innerText = \"Phone Number: 1-(800)-BOBATEA\";\n    element.appendChild(phoneNumber);\n\n    const emailAddress = document.createElement('h4');\n    emailAddress.innerText = \"Email: info@bobatea.com\";\n    element.appendChild(emailAddress);\n\n    return element;\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/loadContactPage.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _boba_tea_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boba-tea.png */ \"./src/boba-tea.png\");\n\n\nconst loadHomePage = () => {\n    const element = document.createElement('div');\n\n    const  shopName = document.createElement('h1');\n    shopName.innerText = \"Boba Tea Shop\";\n    element.appendChild(shopName);\n\n    const myIcon = new Image();\n    myIcon.src = _boba_tea_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    element.appendChild(myIcon);\n\n    const blurb = document.createElement('p');\n    blurb.innerText = \"blurb about the shop\";\n    \n    element.appendChild(blurb);\n\n    return element;\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/loadHomePage.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = () => {\n    const element = document.createElement('div');\n\n    const menuTitle = document.createElement('h1');\n    menuTitle.innerText = \"Menu\";\n    element.appendChild(menuTitle);\n\n    const milktea = document.createElement('ul');\n    milktea.innerText = \"Milk Tea\";\n\n    const milkteaDrinks = [\n        \"Classic Milk Tea\",\n        \"Jasmine Milk Tea\",\n        \"Oolong Milk Tea\", \n        \"Taro Milk Tea\",\n        \"Thai Milk Tea\",\n    ];\n\n    const fruittea = document.createElement('ul');\n    fruittea.innerText = \"Fruit Tea\";\n\n    const fruitteaDrinks = [\n        \"Lychee Green Tea\",\n        \"Mango Green Tea\",\n        \"Passion Fruit Green Tea\",\n        \"Pineapple Green Tea\",\n\n    ];\n\n    const toppings = document.createElement('ul');\n    toppings.innerText = \"Toppings\";\n\n    const toppingItems = [\n        \"Aloe Vera\",\n        \"Grass Jelly\",\n        \"Lychee Jelly\",\n        \"Tapioca Pearl\",\n        \"Red Bean\",\n    ];\n\n    const createList = (items, group) => {\n        for (let i = 0; i < items.length; i++) {\n            let item = document.createElement('li');\n            item.innerText =items[i];\n            group.appendChild(item);\n        }\n\n    }\n\n    createList(milkteaDrinks, milktea);\n    element.appendChild(milktea);\n\n    createList(fruitteaDrinks, fruittea);\n    element.appendChild(fruittea);\n\n    createList(toppingItems, toppings);\n    element.appendChild(toppings);\n\n    return element;\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/loadMenu.js?");

/***/ }),

/***/ "./src/boba-tea.png":
/*!**************************!*\
  !*** ./src/boba-tea.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfb8366faa0060c019e2.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/boba-tea.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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