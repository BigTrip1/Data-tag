"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/data-tag",{

/***/ "./pages/data-tag/index.js":
/*!*********************************!*\
  !*** ./pages/data-tag/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_main_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/main-title */ \"./components/main-title/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst DataTagMainPage = ()=>{\n    _s();\n    const [buildNumber, setBuildNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [datatagID, setDatatagID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [clockCard, setClockCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleBuildNumberChange = (e)=>{\n        const value = e.target.value.toUpperCase();\n        setBuildNumber(value);\n        validateBuildNumber(value);\n    };\n    const handleDatatagIDChange = (e)=>{\n        const value = e.target.value.toUpperCase();\n        setDatatagID(value);\n        validateDatatagID(value);\n    };\n    const handleClockCardChange = (e)=>{\n        const value = e.target.value.toUpperCase();\n        setClockCard(value);\n        validateClockCard(value);\n    };\n    const validateBuildNumber = (value)=>{\n        if (!/^[A-Z]{3}\\d{6,9}$/.test(value)) {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    buildNumber: \"Build number must start with 3 letters followed by 6-9 numbers.\"\n                }));\n        } else {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    buildNumber: null\n                }));\n        }\n    };\n    const validateDatatagID = (value)=>{\n        if (value.includes(\"CFN\")) {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    datatagID: \"Incorrect barcode. Please see the SOP and try again.\"\n                }));\n        } else if (!/^\\d[A-Z0-9]{15}$/.test(value)) {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    datatagID: \"Barcodes scanned in the wrong sequence. Please see the SOP and try again.\"\n                }));\n        } else {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    datatagID: null\n                }));\n        }\n    };\n    const validateClockCard = (value)=>{\n        if (!/^01\\d{6}$/.test(value)) {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    clockCard: \"Invalid Clock Card. Please scan or enter full clock card number.\"\n                }));\n        } else {\n            setValidationErrors((prev)=>({\n                    ...prev,\n                    clockCard: null\n                }));\n        }\n    };\n    const validateAndSubmit = async ()=>{\n        if (!buildNumber || !datatagID || !clockCard) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Please fill in all fields\");\n            return;\n        }\n        if (validationErrors.buildNumber || validationErrors.datatagID || validationErrors.clockCard) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"data in wrong format\");\n            return;\n        }\n        let finalBuildNumber = buildNumber;\n        if (buildNumber.length > 9 && buildNumber.endsWith(\"001\")) {\n            finalBuildNumber = buildNumber.slice(0, -3);\n        }\n        // Add logic here to submit data or navigate\n        setLoading(true);\n        try {\n            let data = {\n                finalBuildNumber,\n                datatagID,\n                clockCard\n            };\n            let link = \"/api/data-tag\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(link, data);\n            console.log(response.data);\n            //handle if data has an error\n            if (response.data.error) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(response.data.error);\n                setLoading(false);\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Done\");\n                setBuildNumber(\"\");\n                setDatatagID(\"\");\n                setClockCard(\"\");\n                setValidationErrors({});\n            }\n            setLoading(false);\n        } catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Somehing went wrong\");\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto mt-4 mb-10 p-5 bg-gray-800 rounded-lg shadow-lg max-w-sm\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-white mb-2 font-bold text-xl text-center\",\n                                htmlFor: \"buildNumber\",\n                                children: \"Scan Build Number:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"rounded p-4 w-full border-2 \".concat(validationErrors.buildNumberscan ? \"border-red-500\" : \"border-gray-200\", \" text-black text-lg placeholder-gray-500\"),\n                                style: {\n                                    width: \"600px\"\n                                },\n                                type: \"text\",\n                                id: \"buildNumber\",\n                                value: buildNumber,\n                                onChange: handleBuildNumberChange,\n                                placeholder: \"Enter Build Number\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, undefined),\n                            validationErrors.buildNumber && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-sm\",\n                                children: validationErrors.buildNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 157,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-white mb-2 font-bold text-xl text-center\",\n                                htmlFor: \"datatagID\",\n                                children: \"Scan Datatag:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"rounded p-4 w-full border-2 \".concat(validationErrors.datatagID ? \"border-red-500\" : \"border-gray-200\", \" text-black text-lg placeholder-gray-500\"),\n                                type: \"text\",\n                                id: \"datatagID\",\n                                value: datatagID,\n                                onChange: handleDatatagIDChange,\n                                placeholder: \"Enter Datatag ID\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 171,\n                                columnNumber: 13\n                            }, undefined),\n                            validationErrors.datatagID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-sm\",\n                                children: validationErrors.datatagID\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 185,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                        lineNumber: 164,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-white mb-2 font-bold text-xl text-center\",\n                                htmlFor: \"clockCard\",\n                                children: \"Scan Clock Card:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 193,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"rounded p-4 w-full border-2 \".concat(validationErrors.clockCard ? \"border-red-500\" : \"border-gray-200\", \" text-black text-lg placeholder-gray-500\"),\n                                type: \"text\",\n                                id: \"clockCard\",\n                                value: clockCard,\n                                onChange: handleClockCardChange,\n                                placeholder: \"Enter Clock Card Number\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 199,\n                                columnNumber: 13\n                            }, undefined),\n                            validationErrors.clockCard && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-sm\",\n                                children: validationErrors.clockCard\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                                lineNumber: 213,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                        lineNumber: 192,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-8 p-6 w-full text-lg font-bold text-white rounded hover:bg-green-700\",\n                        style: {\n                            backgroundColor: \"rgb(249, 177, 1)\"\n                        },\n                        onClick: validateAndSubmit,\n                        disabled: loading,\n                        children: \"Submit Datatag\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                        lineNumber: 220,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adam.lawton\\\\Desktop\\\\web dev\\\\Data-tag\\\\pages\\\\data-tag\\\\index.js\",\n            lineNumber: 132,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(DataTagMainPage, \"DY1w8kwCnXF9FKTF/V8fax5JjY4=\");\n_c = DataTagMainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTagMainPage);\nvar _c;\n$RefreshReg$(_c, \"DataTagMainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw4REFBQ0M7Z0NBQ0NILFdBQVcsK0JBSVYsT0FIQy9CLGlCQUFpQkosU0FBUyxHQUN0QixtQkFDQSxtQkFDTDtnQ0FDRDBDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQyxPQUFPVjtnQ0FDUDRDLFVBQVU5QjtnQ0FDVitCLGFBQVk7Z0NBQ1pDLFFBQVE7Ozs7Ozs0QkFFVDFDLGlCQUFpQkosU0FBUyxrQkFDekIsOERBQUMrQztnQ0FBRVosV0FBVTswQ0FDVi9CLGlCQUFpQkosU0FBUzs7Ozs7Ozs7Ozs7O2tDQU1qQyw4REFBQ2tDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLFNBQVE7MENBQ1Q7Ozs7OzswQ0FHRCw4REFBQ0M7Z0NBQ0NILFdBQVcsK0JBSVYsT0FIQy9CLGlCQUFpQkYsU0FBUyxHQUN0QixtQkFDQSxtQkFDTDtnQ0FDRHdDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQyxPQUFPUjtnQ0FDUDBDLFVBQVU1QjtnQ0FDVjZCLGFBQVk7Z0NBQ1pDLFFBQVE7Ozs7Ozs0QkFFVDFDLGlCQUFpQkYsU0FBUyxrQkFDekIsOERBQUM2QztnQ0FBRVosV0FBVTswQ0FDVi9CLGlCQUFpQkYsU0FBUzs7Ozs7Ozs7Ozs7O2tDQU1qQyw4REFBQzhDO3dCQUNDYixXQUFVO3dCQUNWSyxPQUFPOzRCQUFFUyxpQkFBaUI7d0JBQW1CO3dCQUM3Q0MsU0FBUzdCO3dCQUNUOEIsVUFBVTdDO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWpPTVQ7S0FBQUE7QUFtT04sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGF0YS10YWcvaW5kZXguanM/MDcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWFpblRpdGxlIGZyb20gJ0AvY29tcG9uZW50cy9tYWluLXRpdGxlJ1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IERhdGFUYWdNYWluUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbYnVpbGROdW1iZXIsIHNldEJ1aWxkTnVtYmVyXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkYXRhdGFnSUQsIHNldERhdGF0YWdJRF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY2xvY2tDYXJkLCBzZXRDbG9ja0NhcmRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ZhbGlkYXRpb25FcnJvcnMsIHNldFZhbGlkYXRpb25FcnJvcnNdID0gdXNlU3RhdGUoe30pXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVCdWlsZE51bWJlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgIHNldEJ1aWxkTnVtYmVyKHZhbHVlKVxyXG4gICAgdmFsaWRhdGVCdWlsZE51bWJlcih2YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURhdGF0YWdJRENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcclxuICAgIHNldERhdGF0YWdJRCh2YWx1ZSlcclxuICAgIHZhbGlkYXRlRGF0YXRhZ0lEKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvY2tDYXJkQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICAgc2V0Q2xvY2tDYXJkKHZhbHVlKVxyXG4gICAgdmFsaWRhdGVDbG9ja0NhcmQodmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUJ1aWxkTnVtYmVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIS9eW0EtWl17M31cXGR7Niw5fSQvLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcnMoKHByZXYpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBidWlsZE51bWJlcjpcclxuICAgICAgICAgICdCdWlsZCBudW1iZXIgbXVzdCBzdGFydCB3aXRoIDMgbGV0dGVycyBmb2xsb3dlZCBieSA2LTkgbnVtYmVycy4nLFxyXG4gICAgICB9KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFZhbGlkYXRpb25FcnJvcnMoKHByZXYpID0+ICh7IC4uLnByZXYsIGJ1aWxkTnVtYmVyOiBudWxsIH0pKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGVEYXRhdGFnSUQgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnQ0ZOJykpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9ycygocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGRhdGF0YWdJRDogJ0luY29ycmVjdCBiYXJjb2RlLiBQbGVhc2Ugc2VlIHRoZSBTT1AgYW5kIHRyeSBhZ2Fpbi4nLFxyXG4gICAgICB9KSlcclxuICAgIH0gZWxzZSBpZiAoIS9eXFxkW0EtWjAtOV17MTV9JC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9ycygocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGRhdGF0YWdJRDpcclxuICAgICAgICAgICdCYXJjb2RlcyBzY2FubmVkIGluIHRoZSB3cm9uZyBzZXF1ZW5jZS4gUGxlYXNlIHNlZSB0aGUgU09QIGFuZCB0cnkgYWdhaW4uJyxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBkYXRhdGFnSUQ6IG51bGwgfSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUNsb2NrQ2FyZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCEvXjAxXFxkezZ9JC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgc2V0VmFsaWRhdGlvbkVycm9ycygocHJldikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGNsb2NrQ2FyZDpcclxuICAgICAgICAgICdJbnZhbGlkIENsb2NrIENhcmQuIFBsZWFzZSBzY2FuIG9yIGVudGVyIGZ1bGwgY2xvY2sgY2FyZCBudW1iZXIuJyxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWYWxpZGF0aW9uRXJyb3JzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBjbG9ja0NhcmQ6IG51bGwgfSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUFuZFN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghYnVpbGROdW1iZXIgfHwgIWRhdGF0YWdJRCB8fCAhY2xvY2tDYXJkKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB2YWxpZGF0aW9uRXJyb3JzLmJ1aWxkTnVtYmVyIHx8XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMuZGF0YXRhZ0lEIHx8XHJcbiAgICAgIHZhbGlkYXRpb25FcnJvcnMuY2xvY2tDYXJkXHJcbiAgICApIHtcclxuICAgICAgdG9hc3QuZXJyb3IoJ2RhdGEgaW4gd3JvbmcgZm9ybWF0JylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbmFsQnVpbGROdW1iZXIgPSBidWlsZE51bWJlclxyXG4gICAgaWYgKGJ1aWxkTnVtYmVyLmxlbmd0aCA+IDkgJiYgYnVpbGROdW1iZXIuZW5kc1dpdGgoJzAwMScpKSB7XHJcbiAgICAgIGZpbmFsQnVpbGROdW1iZXIgPSBidWlsZE51bWJlci5zbGljZSgwLCAtMylcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBzdWJtaXQgZGF0YSBvciBuYXZpZ2F0ZVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIGZpbmFsQnVpbGROdW1iZXIsXHJcbiAgICAgICAgZGF0YXRhZ0lELFxyXG4gICAgICAgIGNsb2NrQ2FyZCxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxpbmsgPSBgL2FwaS9kYXRhLXRhZ2BcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChsaW5rLCBkYXRhKVxyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIC8vaGFuZGxlIGlmIGRhdGEgaGFzIGFuIGVycm9yXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcilcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0RvbmUnKVxyXG5cclxuICAgICAgICBzZXRCdWlsZE51bWJlcignJylcclxuICAgICAgICBzZXREYXRhdGFnSUQoJycpXHJcbiAgICAgICAgc2V0Q2xvY2tDYXJkKCcnKVxyXG4gICAgICAgIHNldFZhbGlkYXRpb25FcnJvcnMoe30pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcignU29tZWhpbmcgd2VudCB3cm9uZycpXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIG10LTQgbWItMTAgcC01IGJnLWdyYXktODAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIG1heC13LXNtJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMTAnPlxyXG4gICAgICAgICAgey8qIEJ1aWxkIE51bWJlciBJbnB1dCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG1iLTIgZm9udC1ib2xkIHRleHQteGwgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj0nYnVpbGROdW1iZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTY2FuIEJ1aWxkIE51bWJlcjpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBwLTQgdy1mdWxsIGJvcmRlci0yICR7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmJ1aWxkTnVtYmVyc2NhblxyXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItcmVkLTUwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMjAwJ1xyXG4gICAgICAgICAgICAgIH0gdGV4dC1ibGFjayB0ZXh0LWxnIHBsYWNlaG9sZGVyLWdyYXktNTAwYH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzYwMHB4JyB9fSAvLyBDdXN0b20gd2lkdGhcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGlkPSdidWlsZE51bWJlcidcclxuICAgICAgICAgICAgICB2YWx1ZT17YnVpbGROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJ1aWxkTnVtYmVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBCdWlsZCBOdW1iZXInXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMuYnVpbGROdW1iZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIHRleHQtc20nPlxyXG4gICAgICAgICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMuYnVpbGROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIERhdGF0YWcgSUQgSW5wdXQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtYi0yIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGh0bWxGb3I9J2RhdGF0YWdJRCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNjYW4gRGF0YXRhZzpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBwLTQgdy1mdWxsIGJvcmRlci0yICR7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmRhdGF0YWdJRFxyXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItcmVkLTUwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMjAwJ1xyXG4gICAgICAgICAgICAgIH0gdGV4dC1ibGFjayB0ZXh0LWxnIHBsYWNlaG9sZGVyLWdyYXktNTAwYH1cclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGlkPSdkYXRhdGFnSUQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGF0YWdJRH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0YXRhZ0lEQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBEYXRhdGFnIElEJ1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt2YWxpZGF0aW9uRXJyb3JzLmRhdGF0YWdJRCAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXJlZC01MDAgdGV4dC1zbSc+XHJcbiAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5kYXRhdGFnSUR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIENsb2NrIENhcmQgSW5wdXQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtYi0yIGZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgIGh0bWxGb3I9J2Nsb2NrQ2FyZCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNjYW4gQ2xvY2sgQ2FyZDpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZCBwLTQgdy1mdWxsIGJvcmRlci0yICR7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmNsb2NrQ2FyZFxyXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItcmVkLTUwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMjAwJ1xyXG4gICAgICAgICAgICAgIH0gdGV4dC1ibGFjayB0ZXh0LWxnIHBsYWNlaG9sZGVyLWdyYXktNTAwYH1cclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGlkPSdjbG9ja0NhcmQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Nsb2NrQ2FyZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2xvY2tDYXJkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBDbG9jayBDYXJkIE51bWJlcidcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dmFsaWRhdGlvbkVycm9ycy5jbG9ja0NhcmQgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1yZWQtNTAwIHRleHQtc20nPlxyXG4gICAgICAgICAgICAgICAge3ZhbGlkYXRpb25FcnJvcnMuY2xvY2tDYXJkfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBTdWJtaXQgQnV0dG9uICovfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J210LTggcC02IHctZnVsbCB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctZ3JlZW4tNzAwJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ5LCAxNzcsIDEpJyB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt2YWxpZGF0ZUFuZFN1Ym1pdH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1Ym1pdCBEYXRhdGFnXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWdNYWluUGFnZVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYWluVGl0bGUiLCJ0b2FzdCIsImF4aW9zIiwiRGF0YVRhZ01haW5QYWdlIiwiYnVpbGROdW1iZXIiLCJzZXRCdWlsZE51bWJlciIsImRhdGF0YWdJRCIsInNldERhdGF0YWdJRCIsImNsb2NrQ2FyZCIsInNldENsb2NrQ2FyZCIsInZhbGlkYXRpb25FcnJvcnMiLCJzZXRWYWxpZGF0aW9uRXJyb3JzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVCdWlsZE51bWJlckNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRvVXBwZXJDYXNlIiwidmFsaWRhdGVCdWlsZE51bWJlciIsImhhbmRsZURhdGF0YWdJRENoYW5nZSIsInZhbGlkYXRlRGF0YXRhZ0lEIiwiaGFuZGxlQ2xvY2tDYXJkQ2hhbmdlIiwidmFsaWRhdGVDbG9ja0NhcmQiLCJ0ZXN0IiwicHJldiIsImluY2x1ZGVzIiwidmFsaWRhdGVBbmRTdWJtaXQiLCJlcnJvciIsImZpbmFsQnVpbGROdW1iZXIiLCJsZW5ndGgiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGF0YSIsImxpbmsiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiYnVpbGROdW1iZXJzY2FuIiwic3R5bGUiLCJ3aWR0aCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/data-tag/index.js\n"));

/***/ })

});