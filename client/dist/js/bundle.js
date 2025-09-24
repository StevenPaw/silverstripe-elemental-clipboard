/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/boot/index.js":
/*!**********************************!*\
  !*** ./client/src/boot/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _registerComponents = _interopRequireDefault(__webpack_require__(/*! boot/registerComponents */ "./client/src/boot/registerComponents.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
window.document.addEventListener('DOMContentLoaded', () => {
  (0, _registerComponents.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/*!***********************************************!*\
  !*** ./client/src/boot/registerComponents.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _Injector = _interopRequireDefault(__webpack_require__(/*! lib/Injector */ "lib/Injector"));
var _CopyElementAction = _interopRequireDefault(__webpack_require__(/*! components/ElementActions/CopyElementAction */ "./client/src/components/ElementActions/CopyElementAction.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = () => {
  _Injector.default.transform('element-actions', updater => {
    updater.component('ElementActions', OriginalActions => props => React.createElement(React.Fragment, null, React.createElement(OriginalActions, props), props.element && React.createElement(_CopyElementAction.default, {
      element: props.element
    })));
  });
};
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ElementActions/CopyElementAction.js":
/*!*******************************************************************!*\
  !*** ./client/src/components/ElementActions/CopyElementAction.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CopyElementAction = ({
  element
}) => {
  const handleCopy = async () => {
    console.log('Element data:', element);
    const elementData = {
      Action: 'silverstripe-clipboard-copy',
      ClassName: element.blockSchema.typeName,
      Title: element.title,
      AllFields: element.blockSchema.allfields
    };
    const elementJSON = JSON.stringify(elementData, null, 2);
    try {
      await navigator.clipboard.writeText(elementJSON);
      alert('Block JSON copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return _react.default.createElement("button", {
    type: "button",
    className: "element-editor-action__action",
    onClick: handleCopy,
    title: "Copy block JSON to clipboard"
  }, _react.default.createElement("span", {
    role: "img",
    "aria-label": "Copy"
  }, "\uD83D\uDCCB"));
};
CopyElementAction.propTypes = {
  element: _propTypes.default.object.isRequired
};
var _default = exports["default"] = CopyElementAction;

/***/ }),

/***/ "lib/Injector":
/*!***************************!*\
  !*** external "Injector" ***!
  \***************************/
/***/ (function(module) {

module.exports = Injector;

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ (function(module) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./client/src/bundles/bundle.js ***!
  \**************************************/


__webpack_require__(/*! boot */ "./client/src/boot/index.js");
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map