/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Header = ()=>{\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [pageTitle, setPageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const thisPageArr = pathname.split(\"/\");\n        const thisPage = thisPageArr[thisPageArr.length - 1];\n        let found = listOfPages.find((item)=>item.url === thisPage);\n        setPageTitle(found ? found.title : \"\");\n    }, [\n        pathname\n    ]);\n    let listOfPages = [\n        {\n            url: \"data-tag\",\n            title: \"SUBMIT DATATAG\"\n        },\n        {\n            url: \"search\",\n            title: \"DATATAG SEARCH\"\n        },\n        {\n            url: \"log\",\n            title: \"DATATAG LOG\"\n        },\n        {\n            url: \"reallocations\",\n            title: \"Reallocation Requests\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"header\",\n        style: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-buttons\",\n                style: {\n                    flex: 1.3\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer nav-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/data-tag\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer nav-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/data-tag/search\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer nav-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/data-tag/reallocations\",\n                            children: \"Reallocations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cursor-pointer nav-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/data-tag/log\",\n                            children: \"Log\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl\",\n                style: {\n                    flex: 2,\n                    textAlign: \"center\"\n                },\n                children: pageTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"header-logo\",\n                        src: \"/images/JCB_Logo (1)(1).png\",\n                        alt: \"Logo\",\n                        style: {\n                            visibility: \"hidden\",\n                            maxWidth: \"100%\",\n                            maxHeight: \"60px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"header-logo\",\n                src: \"/images/JCB_Logo (1)(1).png\",\n                alt: \"Logo\",\n                style: {\n                    flexShrink: 0,\n                    maxHeight: \"60px\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\components\\\\header\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2lCO0FBQ0Y7QUFFNUMsTUFBTUksU0FBUztJQUNiLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sY0FBY0gsU0FBU0ksS0FBSyxDQUFDO1FBQ25DLE1BQU1DLFdBQVdGLFdBQVcsQ0FBQ0EsWUFBWUcsTUFBTSxHQUFHLEVBQUU7UUFDcEQsSUFBSUMsUUFBUUMsWUFBWUMsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEdBQUcsS0FBS047UUFFcERILGFBQWFLLFFBQVFBLE1BQU1LLEtBQUssR0FBRztJQUNyQyxHQUFHO1FBQUNaO0tBQVM7SUFFYixJQUFJUSxjQUFjO1FBQ2hCO1lBQUVHLEtBQUs7WUFBWUMsT0FBTztRQUFpQjtRQUMzQztZQUFFRCxLQUFLO1lBQVVDLE9BQU87UUFBaUI7UUFDekM7WUFBRUQsS0FBSztZQUFPQyxPQUFPO1FBQWM7UUFDbkM7WUFBRUQsS0FBSztZQUFpQkMsT0FBTztRQUF3QjtLQUN4RDtJQUVELHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVO1FBQVNDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxZQUFZO1lBQVVDLGdCQUFnQjtRQUFnQjs7MEJBQ3pHLDhEQUFDQztnQkFBSUwsV0FBVTtnQkFBY0MsT0FBTztvQkFBRUssTUFBTTtnQkFBSTs7a0NBQzlDLDhEQUFDRDt3QkFBSUwsV0FBVTtrQ0FDYiw0RUFBQ25CLGtEQUFJQTs0QkFBQzBCLE1BQUs7c0NBQVk7Ozs7Ozs7Ozs7O2tDQUV6Qiw4REFBQ0Y7d0JBQUlMLFdBQVU7a0NBQ2IsNEVBQUNuQixrREFBSUE7NEJBQUMwQixNQUFLO3NDQUFtQjs7Ozs7Ozs7Ozs7a0NBRWhDLDhEQUFDRjt3QkFBSUwsV0FBVTtrQ0FDYiw0RUFBQ25CLGtEQUFJQTs0QkFBQzBCLE1BQUs7c0NBQTBCOzs7Ozs7Ozs7OztrQ0FFdkMsOERBQUNGO3dCQUFJTCxXQUFVO2tDQUNiLDRFQUFDbkIsa0RBQUlBOzRCQUFDMEIsTUFBSztzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ0Y7Z0JBQUlMLFdBQVU7Z0JBQVdDLE9BQU87b0JBQUVLLE1BQU07b0JBQUdFLFdBQVc7Z0JBQVM7MEJBQUlyQjs7Ozs7OzBCQUNwRSw4REFBQ2tCO2dCQUFJSixPQUFPO29CQUFFSyxNQUFNO2dCQUFFOztvQkFBRztrQ0FDdkIsOERBQUNHO3dCQUNDVCxXQUFVO3dCQUNWVSxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKVixPQUFPOzRCQUFFVyxZQUFZOzRCQUFVQyxVQUFVOzRCQUFRQyxXQUFXO3dCQUFPOzs7Ozs7Ozs7Ozs7MEJBR3ZFLDhEQUFDTDtnQkFDQ1QsV0FBVTtnQkFDVlUsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSlYsT0FBTztvQkFBRWMsWUFBWTtvQkFBR0QsV0FBVztnQkFBTzs7Ozs7Ozs7Ozs7O0FBSWxEO0FBRUEsaUVBQWU3QixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YS10YWcvLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz9lMGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgW3BhZ2VUaXRsZSwgc2V0UGFnZVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGhpc1BhZ2VBcnIgPSBwYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCB0aGlzUGFnZSA9IHRoaXNQYWdlQXJyW3RoaXNQYWdlQXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IGZvdW5kID0gbGlzdE9mUGFnZXMuZmluZCgoaXRlbSkgPT4gaXRlbS51cmwgPT09IHRoaXNQYWdlKTtcclxuXHJcbiAgICBzZXRQYWdlVGl0bGUoZm91bmQgPyBmb3VuZC50aXRsZSA6IFwiXCIpO1xyXG4gIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICBsZXQgbGlzdE9mUGFnZXMgPSBbXHJcbiAgICB7IHVybDogXCJkYXRhLXRhZ1wiLCB0aXRsZTogXCJTVUJNSVQgREFUQVRBR1wiIH0sXHJcbiAgICB7IHVybDogXCJzZWFyY2hcIiwgdGl0bGU6IFwiREFUQVRBRyBTRUFSQ0hcIiB9LFxyXG4gICAgeyB1cmw6IFwibG9nXCIsIHRpdGxlOiBcIkRBVEFUQUcgTE9HXCIgfSxcclxuICAgIHsgdXJsOiBcInJlYWxsb2NhdGlvbnNcIiwgdGl0bGU6IFwiUmVhbGxvY2F0aW9uIFJlcXVlc3RzXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1idXR0b25zXCIgc3R5bGU9e3sgZmxleDogMS4zIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbmF2LWJ1dHRvblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXRhLXRhZ1wiPlN1Ym1pdDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG5hdi1idXR0b25cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGF0YS10YWcvc2VhcmNoXCI+U2VhcmNoPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbmF2LWJ1dHRvblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXRhLXRhZy9yZWFsbG9jYXRpb25zXCI+UmVhbGxvY2F0aW9uczwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIG5hdi1idXR0b25cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGF0YS10YWcvbG9nXCI+TG9nPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIHN0eWxlPXt7IGZsZXg6IDIsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+e3BhZ2VUaXRsZX08L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PiB7LyogSW52aXNpYmxlIFNwYWNlciAqL31cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL0pDQl9Mb2dvICgxKSgxKS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnNjBweCcgfX0gLy8gTWFrZSB0aGUgbG9nbyBpbnZpc2libGVcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCJcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL0pDQl9Mb2dvICgxKSgxKS5wbmdcIlxyXG4gICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAsIG1heEhlaWdodDogJzYwcHgnIH19IC8vIEFjdHVhbCBsb2dvXHJcbiAgICAgIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJwYXRobmFtZSIsInBhZ2VUaXRsZSIsInNldFBhZ2VUaXRsZSIsInRoaXNQYWdlQXJyIiwic3BsaXQiLCJ0aGlzUGFnZSIsImxlbmd0aCIsImZvdW5kIiwibGlzdE9mUGFnZXMiLCJmaW5kIiwiaXRlbSIsInVybCIsInRpdGxlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGl2IiwiZmxleCIsImhyZWYiLCJ0ZXh0QWxpZ24iLCJpbWciLCJzcmMiLCJhbHQiLCJ2aXNpYmlsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJmbGV4U2hyaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"./components/header/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"top-center\",\n                gutter: 12\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFFQztBQUUxQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFOzswQkFDRSw4REFBQ0osMERBQU1BOzs7OzswQkFDUCw4REFBQ0Msb0RBQU9BO2dCQUFDSSxVQUFTO2dCQUFhQyxRQUFROzs7Ozs7MEJBQ3ZDLDhEQUFDSDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGEtdGFnLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcidcclxuXHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249J3RvcC1jZW50ZXInIGd1dHRlcj17MTJ9IC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiVG9hc3RlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBvc2l0aW9uIiwiZ3V0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "./action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();