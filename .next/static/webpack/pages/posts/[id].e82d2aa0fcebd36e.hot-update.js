"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ \"./components/date.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar __N_SSG = true;\n// If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.\n// If fallback is true, then the behavior of getStaticProps changes:\n// The paths returned from getStaticPaths will be rendered to HTML at build time.\n// The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.\n// In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.\n// If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.\nfunction Post(param) {\n    var postData = param.postData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingXl),\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightText),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            dateString: postData.date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: postData.contentHtml\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\emma9\\\\Desktop\\\\CodeProjects\\\\NextjsCourseNotes\\\\ExampleProject\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUVoQjtBQUNZO0FBQ2M7O0FBa0J2RCxpR0FBaUc7QUFDakcsb0VBQW9FO0FBQ3BFLGlGQUFpRjtBQUNqRix3TEFBd0w7QUFDeEwsZ01BQWdNO0FBQ2hNLDZKQUE2SjtBQUU5SSxTQUFTSSxJQUFJLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTtJQUNyQyxxQkFDRSw4REFBQ0wsMERBQU07OzBCQUNMLDhEQUFDQyxrREFBSTswQkFDSCw0RUFBQ0ssT0FBSzs4QkFBRUQsUUFBUSxDQUFDQyxLQUFLOzs7Ozt3QkFBUzs7Ozs7b0JBQzFCOzBCQUNQLDhEQUFDQyxTQUFPOztrQ0FDTiw4REFBQ0MsSUFBRTt3QkFBQ0MsU0FBUyxFQUFFTiwyRUFBb0I7a0NBQUdFLFFBQVEsQ0FBQ0MsS0FBSzs7Ozs7NEJBQU07a0NBQzFELDhEQUFDSyxLQUFHO3dCQUFDRixTQUFTLEVBQUVOLDJFQUFvQjtrQ0FDbEMsNEVBQUNELHdEQUFJOzRCQUFDVyxVQUFVLEVBQUVSLFFBQVEsQ0FBQ1MsSUFBSTs7Ozs7Z0NBQUk7Ozs7OzRCQUMvQjtrQ0FDTiw4REFBQ0gsS0FBRzt3QkFBQ0ksdUJBQXVCLEVBQUU7NEJBQUVDLE1BQU0sRUFBRVgsUUFBUSxDQUFDWSxXQUFXO3lCQUFFOzs7Ozs0QkFBSTs7Ozs7O29CQUMxRDs7Ozs7O1lBQ0gsQ0FDVDtDQUNIO0FBZnVCYixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgRGF0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGUnO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4vLyBJZiBmYWxsYmFjayBpcyBmYWxzZSwgdGhlbiBhbnkgcGF0aHMgbm90IHJldHVybmVkIGJ5IGdldFN0YXRpY1BhdGhzIHdpbGwgcmVzdWx0IGluIGEgNDA0IHBhZ2UuXHJcbi8vIElmIGZhbGxiYWNrIGlzIHRydWUsIHRoZW4gdGhlIGJlaGF2aW9yIG9mIGdldFN0YXRpY1Byb3BzIGNoYW5nZXM6XHJcbi8vIFRoZSBwYXRocyByZXR1cm5lZCBmcm9tIGdldFN0YXRpY1BhdGhzIHdpbGwgYmUgcmVuZGVyZWQgdG8gSFRNTCBhdCBidWlsZCB0aW1lLlxyXG4vLyBUaGUgcGF0aHMgdGhhdCBoYXZlIG5vdCBiZWVuIGdlbmVyYXRlZCBhdCBidWlsZCB0aW1lIHdpbGwgbm90IHJlc3VsdCBpbiBhIDQwNCBwYWdlLiBJbnN0ZWFkLCBOZXh0LmpzIHdpbGwgc2VydmUgYSDigJxmYWxsYmFja+KAnSB2ZXJzaW9uIG9mIHRoZSBwYWdlIG9uIHRoZSBmaXJzdCByZXF1ZXN0IHRvIHN1Y2ggYSBwYXRoLlxyXG4vLyBJbiB0aGUgYmFja2dyb3VuZCwgTmV4dC5qcyB3aWxsIHN0YXRpY2FsbHkgZ2VuZXJhdGUgdGhlIHJlcXVlc3RlZCBwYXRoLiBTdWJzZXF1ZW50IHJlcXVlc3RzIHRvIHRoZSBzYW1lIHBhdGggd2lsbCBzZXJ2ZSB0aGUgZ2VuZXJhdGVkIHBhZ2UsIGp1c3QgbGlrZSBvdGhlciBwYWdlcyBwcmUtcmVuZGVyZWQgYXQgYnVpbGQgdGltZS5cclxuLy8gSWYgZmFsbGJhY2sgaXMgYmxvY2tpbmcsIHRoZW4gbmV3IHBhdGhzIHdpbGwgYmUgc2VydmVyLXNpZGUgcmVuZGVyZWQgd2l0aCBnZXRTdGF0aWNQcm9wcywgYW5kIGNhY2hlZCBmb3IgZnV0dXJlIHJlcXVlc3RzIHNvIGl0IG9ubHkgaGFwcGVucyBvbmNlIHBlciBwYXRoLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1hsfT57cG9zdERhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxyXG4gICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZCIsIkRhdGUiLCJ1dGlsU3R5bGVzIiwiUG9zdCIsInBvc3REYXRhIiwidGl0bGUiLCJhcnRpY2xlIiwiaDEiLCJjbGFzc05hbWUiLCJoZWFkaW5nWGwiLCJkaXYiLCJsaWdodFRleHQiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});