"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data-tag/search",{

/***/ "./pages/data-tag/search/index.js":
/*!****************************************!*\
  !*** ./pages/data-tag/search/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DataTagSearchPage = ()=>{\n    _s();\n    const [searchBuildNumber, setSearchBuildNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [resultDatatag, setResultDatatag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const searchDatatag = async ()=>{\n        if (!searchBuildNumber || searchBuildNumber.trim().length !== 9) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Build number should be 9 charcters long\");\n            return;\n        }\n        try {\n            setLoading(true);\n            let data = {\n                searchBuildNumber: searchBuildNumber.toUpperCase()\n            };\n            let link = \"/api/search\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(link, data);\n            console.log(response.data);\n            //handle if data has an error\n            if (response.data.error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(response.data.error);\n                setLoading(false);\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Done\");\n                if (response.data.found) {\n                    setResultDatatag(response.data.found.tagNumber);\n                }\n            // setBuildNumber('')\n            // setDatatagID('')\n            // setClockCard('')\n            // setValidationErrors({})\n            }\n            setLoading(false);\n        } catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Somehing went wrong\");\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-5 w-[600px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-white mb-2 font-bold text-xl text-center\",\n                                htmlFor: \"searchBuildNumber\",\n                                children: \"Enter Build Number:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"rounded p-4 w-full border-2 border-gray-200 text-black text-lg placeholder-gray-500\",\n                                type: \"text\",\n                                id: \"searchBuildNumber\",\n                                value: searchBuildNumber,\n                                onChange: (e)=>setSearchBuildNumber(e.target.value),\n                                placeholder: \"Enter Build Number\",\n                                maxLength: 9\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-white mb-2 font-bold text-xl text-center\",\n                                htmlFor: \"resultDatatag\",\n                                children: \"Datatag ID:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"rounded p-4 border-2 border-gray-200 text-black text-lg placeholder-gray-500 \",\n                                type: \"text\",\n                                id: \"resultDatatag\",\n                                value: resultDatatag,\n                                placeholder: \"Datatag ID will appear here\",\n                                readOnly: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-8 p-6 w-full text-lg font-bold text-white rounded hover:bg-green-700 bg-jcb\",\n                        onClick: searchDatatag,\n                        disabled: !searchBuildNumber || searchBuildNumber.trim().length !== 9 || loading,\n                        children: \"Search Datatag\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\search\\\\index.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DataTagSearchPage, \"Ukglx/XFo9azKmILkL3qz5kzyTA=\");\n_c = DataTagSearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTagSearchPage);\nvar _c;\n$RefreshReg$(_c, \"DataTagSearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRhLXRhZy9zZWFyY2gvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1A7QUFDYztBQUV2QyxNQUFNRyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1VLGdCQUFnQjtRQUNwQixJQUFJLENBQUNOLHFCQUFxQkEsa0JBQWtCTyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1lBQy9EVixrREFBS0EsQ0FBQ1csS0FBSyxDQUFDO1lBQ1o7UUFDRjtRQUVBLElBQUk7WUFDRkosV0FBVztZQUNYLElBQUlLLE9BQU87Z0JBQ1RWLG1CQUFtQkEsa0JBQWtCVyxXQUFXO1lBQ2xEO1lBRUEsSUFBSUMsT0FBTztZQUVYLE1BQU1DLFdBQVcsTUFBTWhCLGtEQUFVLENBQUNlLE1BQU1GO1lBRXhDSyxRQUFRQyxHQUFHLENBQUNILFNBQVNILElBQUk7WUFFekIsNkJBQTZCO1lBQzdCLElBQUlHLFNBQVNILElBQUksQ0FBQ0QsS0FBSyxFQUFFO2dCQUN2Qlgsa0RBQUtBLENBQUNXLEtBQUssQ0FBQ0ksU0FBU0gsSUFBSSxDQUFDRCxLQUFLO2dCQUMvQkosV0FBVztZQUNiLE9BQU87Z0JBQ0xQLGtEQUFLQSxDQUFDbUIsT0FBTyxDQUFDO2dCQUVkLElBQUlKLFNBQVNILElBQUksQ0FBQ1EsS0FBSyxFQUFFO29CQUN2QmYsaUJBQWlCVSxTQUFTSCxJQUFJLENBQUNRLEtBQUssQ0FBQ0MsU0FBUztnQkFDaEQ7WUFFQSxxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDNUI7WUFFQWQsV0FBVztRQUNiLEVBQUUsT0FBT0ksT0FBTztZQUNkWCxrREFBS0EsQ0FBQ1csS0FBSyxDQUFDO1lBQ1pKLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNlO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FDQ0QsV0FBVTtnQ0FDVkUsU0FBUTswQ0FDVDs7Ozs7OzBDQUdELDhEQUFDQztnQ0FDQ0gsV0FBVTtnQ0FDVkksTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBTzNCO2dDQUNQNEIsVUFBVSxDQUFDQyxJQUFNNUIscUJBQXFCNEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUNwREksYUFBWTtnQ0FDWkMsV0FBVzs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDWjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUNDRCxXQUFVO2dDQUNWRSxTQUFROzBDQUNUOzs7Ozs7MENBR0QsOERBQUNDO2dDQUNDSCxXQUFVO2dDQUNWSSxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPekI7Z0NBQ1A2QixhQUFZO2dDQUNaRSxRQUFROzs7Ozs7Ozs7Ozs7a0NBSVosOERBQUNDO3dCQUNDYixXQUFVO3dCQUNWYyxTQUFTN0I7d0JBQ1Q4QixVQUNFLENBQUNwQyxxQkFDREEsa0JBQWtCTyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxLQUNwQ0o7a0NBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBckdNTDtLQUFBQTtBQXVHTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RhdGEtdGFnL3NlYXJjaC9pbmRleC5qcz8yMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5jb25zdCBEYXRhVGFnU2VhcmNoUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2VhcmNoQnVpbGROdW1iZXIsIHNldFNlYXJjaEJ1aWxkTnVtYmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtyZXN1bHREYXRhdGFnLCBzZXRSZXN1bHREYXRhdGFnXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBzZWFyY2hEYXRhdGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZWFyY2hCdWlsZE51bWJlciB8fCBzZWFyY2hCdWlsZE51bWJlci50cmltKCkubGVuZ3RoICE9PSA5KSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdCdWlsZCBudW1iZXIgc2hvdWxkIGJlIDkgY2hhcmN0ZXJzIGxvbmcnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIHNlYXJjaEJ1aWxkTnVtYmVyOiBzZWFyY2hCdWlsZE51bWJlci50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbGluayA9ICcvYXBpL3NlYXJjaCdcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChsaW5rLCBkYXRhKVxyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIC8vaGFuZGxlIGlmIGRhdGEgaGFzIGFuIGVycm9yXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcilcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0RvbmUnKVxyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5mb3VuZCkge1xyXG4gICAgICAgICAgc2V0UmVzdWx0RGF0YXRhZyhyZXNwb25zZS5kYXRhLmZvdW5kLnRhZ051bWJlcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldEJ1aWxkTnVtYmVyKCcnKVxyXG4gICAgICAgIC8vIHNldERhdGF0YWdJRCgnJylcclxuICAgICAgICAvLyBzZXRDbG9ja0NhcmQoJycpXHJcbiAgICAgICAgLy8gc2V0VmFsaWRhdGlvbkVycm9ycyh7fSlcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdTb21laGluZyB3ZW50IHdyb25nJylcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gbXQtNCBtYi0xMCBwLTUgYmctZ3JheS04MDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWF4LXctc20nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC01IHctWzYwMHB4XSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtYi0yIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGh0bWxGb3I9J3NlYXJjaEJ1aWxkTnVtYmVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW50ZXIgQnVpbGQgTnVtYmVyOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQgcC00IHctZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgdGV4dC1ibGFjayB0ZXh0LWxnIHBsYWNlaG9sZGVyLWdyYXktNTAwJ1xyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgaWQ9J3NlYXJjaEJ1aWxkTnVtYmVyJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hCdWlsZE51bWJlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaEJ1aWxkTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgQnVpbGQgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17OX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG1iLTIgZm9udC1ib2xkIHRleHQteGwgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj0ncmVzdWx0RGF0YXRhZydcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhdGF0YWcgSUQ6XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZCBwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHRleHQtYmxhY2sgdGV4dC1sZyBwbGFjZWhvbGRlci1ncmF5LTUwMCAnXHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBpZD0ncmVzdWx0RGF0YXRhZydcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVzdWx0RGF0YXRhZ31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGF0YXRhZyBJRCB3aWxsIGFwcGVhciBoZXJlJ1xyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXQtOCBwLTYgdy1mdWxsIHRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ncmVlbi03MDAgYmctamNiJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtzZWFyY2hEYXRhdGFnfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgIXNlYXJjaEJ1aWxkTnVtYmVyIHx8XHJcbiAgICAgICAgICAgICAgc2VhcmNoQnVpbGROdW1iZXIudHJpbSgpLmxlbmd0aCAhPT0gOSB8fFxyXG4gICAgICAgICAgICAgIGxvYWRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWFyY2ggRGF0YXRhZ1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFnU2VhcmNoUGFnZVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInRvYXN0IiwiRGF0YVRhZ1NlYXJjaFBhZ2UiLCJzZWFyY2hCdWlsZE51bWJlciIsInNldFNlYXJjaEJ1aWxkTnVtYmVyIiwicmVzdWx0RGF0YXRhZyIsInNldFJlc3VsdERhdGF0YWciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlYXJjaERhdGF0YWciLCJ0cmltIiwibGVuZ3RoIiwiZXJyb3IiLCJkYXRhIiwidG9VcHBlckNhc2UiLCJsaW5rIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJmb3VuZCIsInRhZ051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInJlYWRPbmx5IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/data-tag/search/index.js\n"));

/***/ })

});