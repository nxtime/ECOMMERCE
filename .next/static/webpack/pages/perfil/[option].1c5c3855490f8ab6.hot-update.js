"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/perfil/[option]",{

/***/ "./components/atoms/Textfield/index.tsx":
/*!**********************************************!*\
  !*** ./components/atoms/Textfield/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextField\": function() { return /* binding */ TextField; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/atoms/Textfield/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\marco\\\\OneDrive\\\\Documents\\\\PROJECTS\\\\ECOMMERCE\\\\components\\\\atoms\\\\Textfield\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n// eslint-disable-next-line import/prefer-default-export\nvar TextField = function TextField(_ref) {\n  _s();\n\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? \"text\" : _ref$type,\n      name = _ref.name,\n      label = _ref.label,\n      id = _ref.id;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      currentValue = _useState[0],\n      setCurrentValue = _useState[1];\n\n  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [label !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"label\", {\n      htmlFor: id,\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 37\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"input__actions\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: type,\n        ref: inputRef,\n        value: currentValue,\n        id: id,\n        name: name,\n        onChange: function onChange() {\n          return (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.value) !== null ? setCurrentValue(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.value) : setCurrentValue(\"\");\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TextField, \"xEYP72HcXhjAd0jqVtASUsP9I8Y=\");\n\n_c = TextField;\n\nvar _c;\n\n$RefreshReg$(_c, \"TextField\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1RleHRmaWVsZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0E7QUFDTyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF3RDtFQUFBOztFQUFBLHFCQUFyREMsSUFBcUQ7RUFBQSxJQUFyREEsSUFBcUQsMEJBQTlDLE1BQThDO0VBQUEsSUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztFQUFBLElBQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7RUFBQSxJQUF6QkMsRUFBeUIsUUFBekJBLEVBQXlCOztFQUM3RSxnQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtFQUFBLElBQU9PLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0EsSUFBTUMsUUFBUSxHQUFHViw2Q0FBTSxDQUFtQixJQUFuQixDQUF2QjtFQUNBLG9CQUNJLDhEQUFDLCtDQUFEO0lBQUEsV0FDS00sS0FBSyxLQUFLSyxTQUFWLGlCQUF1QjtNQUFPLE9BQU8sRUFBRUosRUFBaEI7TUFBQSxVQUFxQkQ7SUFBckI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUQ1QixlQUVJO01BQUssU0FBUyxFQUFDLGdCQUFmO01BQUEsdUJBQ0k7UUFDSSxJQUFJLEVBQUVGLElBRFY7UUFFSSxHQUFHLEVBQUVNLFFBRlQ7UUFHSSxLQUFLLEVBQUVGLFlBSFg7UUFJSSxFQUFFLEVBQUVELEVBSlI7UUFLSSxJQUFJLEVBQUVGLElBTFY7UUFNSSxRQUFRLEVBQUU7VUFBQSxPQUFPLENBQUFLLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFRSxPQUFWLENBQW1CQyxLQUFuQixNQUE2QixJQUE3QixHQUFvQ0osZUFBZSxDQUFDQyxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRUUsT0FBVixDQUFtQkMsS0FBcEIsQ0FBbkQsR0FBZ0ZKLGVBQWUsQ0FBQyxFQUFELENBQXRHO1FBQUE7TUFOZDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBZUgsQ0FsQk07O0dBQU1OOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL1RleHRmaWVsZC9pbmRleC50c3g/YTQzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3R5bGVkVGV4dGZpZWxkIGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFRleHRGaWVsZFByb3BzIGV4dGVuZHMgUHJvcHNXaXRoQ2hpbGRyZW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIHR5cGU/OiBcInRleHRcIjtcclxuICAgIGlkOiBhbnk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBUZXh0RmllbGQgPSAoeyB0eXBlID0gXCJ0ZXh0XCIsIG5hbWUsIGxhYmVsLCBpZCB9OiBUZXh0RmllbGRQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRWYWx1ZSwgc2V0Q3VycmVudFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRUZXh0ZmllbGQ+XHJcbiAgICAgICAgICAgIHtsYWJlbCAhPT0gdW5kZWZpbmVkICYmIDxsYWJlbCBodG1sRm9yPXtpZH0+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gKGlucHV0UmVmPy5jdXJyZW50IS52YWx1ZSAhPT0gbnVsbCA/IHNldEN1cnJlbnRWYWx1ZShpbnB1dFJlZj8uY3VycmVudCEudmFsdWUpIDogc2V0Q3VycmVudFZhbHVlKFwiXCIpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkVGV4dGZpZWxkPlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiU3R5bGVkVGV4dGZpZWxkIiwiVGV4dEZpZWxkIiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsImlkIiwiY3VycmVudFZhbHVlIiwic2V0Q3VycmVudFZhbHVlIiwiaW5wdXRSZWYiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/Textfield/index.tsx\n"));

/***/ })

});