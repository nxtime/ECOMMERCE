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

/***/ "./components/pages/Perfil/Profile/index.tsx":
/*!***************************************************!*\
  !*** ./components/pages/Perfil/Profile/index.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var _components_atoms_Textfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/atoms/Textfield */ \"./components/atoms/Textfield/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/pages/Perfil/Profile/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\marco\\\\OneDrive\\\\Documents\\\\PROJECTS\\\\ECOMMERCE\\\\components\\\\pages\\\\Perfil\\\\Profile\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"Marcos\",\n    email: \"marcos@email.com\",\n    street: \"Rua de São Nunca\"\n  }),\n      currentUser = _useState[0],\n      setCurrentUser = _useState[1];\n\n  console.log(currentUser);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_atoms_Textfield__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n      name: \"nome_usuario\",\n      label: \"Nome do usu\\xE1rio\",\n      id: \"nome_usuario\",\n      defaultValue: currentUser,\n      onChange: function onChange(inputValue) {\n        return setCurrentUser(inputValue);\n      } // onInputChange={(inputValue: string) => setCurrentUser(inputValue)}\n      ,\n      disabled: true,\n      edit: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_atoms_Textfield__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n      name: \"email_usuario\",\n      label: \"Email do usu\\xE1rio\",\n      id: \"email_usuario\",\n      defaultValue: currentUser,\n      onChange: function onChange(inputValue) {\n        return setCurrentUser(inputValue);\n      } // onInputChange={(inputValue: string) => setCurrentUser(inputValue)}\n      ,\n      disabled: true,\n      edit: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Profile, \"iyiw50hlSHjwUDCbEd2tfXmwDBY=\");\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL1BlcmZpbC9Qcm9maWxlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVFlLFNBQVNHLE9BQVQsR0FBbUI7RUFBQTs7RUFDOUIsZ0JBQXNDRiwrQ0FBUSxDQUFTO0lBQ25ERyxJQUFJLEVBQUUsUUFENkM7SUFFbkRDLEtBQUssRUFBRSxrQkFGNEM7SUFHbkRDLE1BQU0sRUFBRTtFQUgyQyxDQUFULENBQTlDO0VBQUEsSUFBT0MsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7RUFDQSxvQkFDSSw4REFBQywrQ0FBRDtJQUFBLHdCQUNJLDhEQUFDLGtFQUFEO01BQ0ksSUFBSSxFQUFDLGNBRFQ7TUFFSSxLQUFLLEVBQUMsb0JBRlY7TUFHSSxFQUFFLEVBQUMsY0FIUDtNQUlJLFlBQVksRUFBRUEsV0FKbEI7TUFLSSxRQUFRLEVBQUUsa0JBQUNJLFVBQUQ7UUFBQSxPQUF3QkgsY0FBYyxDQUFDRyxVQUFELENBQXRDO01BQUEsQ0FMZCxDQU1JO01BTko7TUFPSSxRQUFRLE1BUFo7TUFRSSxJQUFJO0lBUlI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKLGVBV0ksOERBQUMsa0VBQUQ7TUFDSSxJQUFJLEVBQUMsZUFEVDtNQUVJLEtBQUssRUFBQyxxQkFGVjtNQUdJLEVBQUUsRUFBQyxlQUhQO01BSUksWUFBWSxFQUFFSixXQUpsQjtNQUtJLFFBQVEsRUFBRSxrQkFBQ0ksVUFBRDtRQUFBLE9BQXdCSCxjQUFjLENBQUNHLFVBQUQsQ0FBdEM7TUFBQSxDQUxkLENBTUk7TUFOSjtNQU9JLFFBQVEsTUFQWjtNQVFJLElBQUk7SUFSUjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBWEo7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUF3Qkg7O0dBL0J1QlI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFnZXMvUGVyZmlsL1Byb2ZpbGUvaW5kZXgudHN4PzhmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9UZXh0ZmllbGRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3R5bGVkUHJvZmlsZSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIFVzZXJQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgc3RyZWV0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KHtcbiAgICAgICAgbmFtZTogXCJNYXJjb3NcIixcbiAgICAgICAgZW1haWw6IFwibWFyY29zQGVtYWlsLmNvbVwiLFxuICAgICAgICBzdHJlZXQ6IFwiUnVhIGRlIFPDo28gTnVuY2FcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFByb2ZpbGU+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWVfdXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21lIGRvIHVzdcOhcmlvXCJcbiAgICAgICAgICAgICAgICBpZD1cIm5vbWVfdXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjdXJyZW50VXNlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGlucHV0VmFsdWU6IHN0cmluZykgPT4gc2V0Q3VycmVudFVzZXIoaW5wdXRWYWx1ZSl9XG4gICAgICAgICAgICAgICAgLy8gb25JbnB1dENoYW5nZT17KGlucHV0VmFsdWU6IHN0cmluZykgPT4gc2V0Q3VycmVudFVzZXIoaW5wdXRWYWx1ZSl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbF91c3VhcmlvXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsIGRvIHVzdcOhcmlvXCJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsX3VzdWFyaW9cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y3VycmVudFVzZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHNldEN1cnJlbnRVc2VyKGlucHV0VmFsdWUpfVxuICAgICAgICAgICAgICAgIC8vIG9uSW5wdXRDaGFuZ2U9eyhpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHNldEN1cnJlbnRVc2VyKGlucHV0VmFsdWUpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZWRpdFxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRQcm9maWxlPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwidXNlU3RhdGUiLCJTdHlsZWRQcm9maWxlIiwiUHJvZmlsZSIsIm5hbWUiLCJlbWFpbCIsInN0cmVldCIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pages/Perfil/Profile/index.tsx\n"));

/***/ })

});