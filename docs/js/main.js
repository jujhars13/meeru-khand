/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_meeruKhand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/meeruKhand.js */ \"./src/js/meeruKhand.js\");\n/* harmony import */ var _js_meeruKhand_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_meeruKhand_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst container = document.getElementById(\"container\");\nconst surs = _js_meeruKhand_js__WEBPACK_IMPORTED_MODULE_0__(null, null);\ncontainer.innerHTML = surs;\n\n//# sourceURL=webpack://meeru-khand/./src/index.js?");

/***/ }),

/***/ "./src/js/meeruKhand.js":
/*!******************************!*\
  !*** ./src/js/meeruKhand.js ***!
  \******************************/
/***/ ((module) => {

eval("/**\n * meerukhand.js\n * function to output meerukhand swars for a given scale\n * 2016-03-31 jujhar@jujhar.com\n */\n\nvar surs = [\n  [\"S\", \"R\", \"G\"],\n  [\"R\", \"G\", \"M\"],\n  [\"G\", \"M\", \"P\"],\n  [\"M\", \"P\", \"D\"],\n  [\"P\", \"D\", \"N\"],\n  [\"D\", \"N\", \"S^\"],\n];\n\nvar pattern = [\n  [1, 2, 3],\n  [2, 1, 3],\n  [1, 3, 2],\n  [3, 1, 2],\n  [2, 3, 1],\n  [3, 2, 1],\n];\n\n\nmodule.exports = (inputSurs, number = 3) => {\n  // const output = [];\n  // inputSurs.split(\"\").map((sur) => {\n\n  // \tconsole.log(sur);\n  // });\n\n  // return output;\n  const overallOutput = [];\n  surs.map((surSet) => {\n    pattern.forEach(function (el, index, arr) {\n      let output = el.map((e) => surSet[e - 1]);\n      overallOutput.push([output]);\n    });\n    overallOutput.push([\"-\"]);\n  });\n  console.log(overallOutput);\n  return overallOutput;\n};\n\n\n//# sourceURL=webpack://meeru-khand/./src/js/meeruKhand.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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