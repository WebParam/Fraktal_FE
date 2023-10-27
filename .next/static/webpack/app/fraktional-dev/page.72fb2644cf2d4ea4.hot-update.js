"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/fraktional-dev/page",{

/***/ "(app-pages-browser)/./src/app/auth/company-register/verify-otp.tsx":
/*!******************************************************!*\
  !*** ./src/app/auth/company-register/verify-otp.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VerifyOtp: function() { return /* binding */ VerifyOtp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _DevOverview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevOverview.scss */ \"(app-pages-browser)/./src/app/auth/company-register/DevOverview.scss\");\n/* harmony import */ var _otpStyle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otpStyle.scss */ \"(app-pages-browser)/./src/app/auth/company-register/otpStyle.scss\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-modal/styles.css */ \"(app-pages-browser)/./node_modules/react-responsive-modal/styles.css\");\n/* harmony import */ var _endpoints_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../endpoints/api */ \"(app-pages-browser)/./src/app/endpoints/api.ts\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/es6/index.js\");\n/* __next_internal_client_entry_do_not_use__ VerifyOtp auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nconst VerifyOtp = (param)=>{\n    let { email } = param;\n    _s();\n    const [invalidOTP, setInvalidOTP] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [optSent, setOtpSent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [otpValues, setOtpValues] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"\",\n        \"\",\n        \"\",\n        \"\",\n        \"\"\n    ]);\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null)\n    ];\n    const handleInputChange = (e, index)=>{\n        const value = e.target.value;\n        if (/^[0-9]$/.test(value)) {\n            const newOtpValues = [\n                ...otpValues\n            ];\n            newOtpValues[index] = value;\n            setOtpValues(newOtpValues);\n            if (index < 4 && inputRefs[index + 1].current) {\n                var _inputRefs__current;\n                (_inputRefs__current = inputRefs[index + 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n            }\n            // Remove the \"incorrect\" class when a valid input is entered\n            e.target.classList.remove(\"incorrect\");\n        } else {\n            // Clear the input if the value is not a number\n            const newOtpValues = [\n                ...otpValues\n            ];\n            newOtpValues[index] = \"\";\n            setOtpValues(newOtpValues);\n            // Optionally, you can move focus back to the previous input\n            if (index > 0 && inputRefs[index - 1].current) {\n                var _inputRefs__current1;\n                (_inputRefs__current1 = inputRefs[index - 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n            }\n            // Add the \"incorrect\" class to trigger the animation\n            e.target.classList.add(\"incorrect\");\n        }\n    };\n    const handleFormSubmitOTP = async (e)=>{\n        e.preventDefault();\n        setOtpSent(false);\n        setInvalidOTP(false);\n        const otp = Number(otpValues.join(\"\"));\n        if (otp.toString().length == 5) {\n            const verify = await (0,_endpoints_api__WEBPACK_IMPORTED_MODULE_5__.verifyOtp)({\n                email,\n                otp\n            });\n            if (verify) {\n                window.location.href = \"/company-overview\";\n            } else {\n                setInvalidOTP(true);\n            }\n        }\n    };\n    const ResendOtp = async (e)=>{\n        setInvalidOTP(false);\n        setOtpSent(false);\n        e.preventDefault();\n        try {\n            const onSubmitOTP = await (0,_endpoints_api__WEBPACK_IMPORTED_MODULE_5__.sendOTP)({\n                email: email\n            }); // Rename the constant\n            if (onSubmitOTP !== 400) {\n                setOtpSent(true);\n            } else if (onSubmitOTP == 400) {\n                setOtpSent(false);\n                console.error(\"OTP failed\");\n            }\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"content\",\n        role: \"main\",\n        className: \"bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"otp\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"otpMain\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"otpForm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Enter the OTP\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter the OTP sent to the email you provided\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 15\n                                                }, undefined),\n                                                invalidOTP && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    style: {\n                                                        color: \"tomato\",\n                                                        fontWeight: \"600\",\n                                                        fontSize: \"small\"\n                                                    },\n                                                    children: \"Invalid OTP\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 32\n                                                }, undefined),\n                                                optSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    style: {\n                                                        color: \"green\",\n                                                        fontWeight: \"600\",\n                                                        fontSize: \"small\"\n                                                    },\n                                                    children: \"OTP sent successfully\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                                    lineNumber: 126,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"cta\",\n                                                    onClick: ResendOtp,\n                                                    style: {\n                                                        color: \"var(--bs-heading-color)\"\n                                                    },\n                                                    children: \"resend OTP\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                                    lineNumber: 127,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"otpInputs\",\n                                            children: inputRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    id: \"input\".concat(index + 1),\n                                                    maxLength: 1,\n                                                    ref: ref,\n                                                    value: otpValues[index],\n                                                    onChange: (e)=>handleInputChange(e, index),\n                                                    className: \"otpInput \".concat(otpValues[index] !== \"\" ? \"incorrect\" : \"\"),\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 5\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleFormSubmitOTP,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n                lineNumber: 114,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n            lineNumber: 111,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\company-register\\\\verify-otp.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyOtp, \"dMUXlL6C6+VmJA5104BRS/EaFHM=\");\n_c = VerifyOtp;\nvar _c;\n$RefreshReg$(_c, \"VerifyOtp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9jb21wYW55LXJlZ2lzdGVyL3ZlcmlmeS1vdHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBSTRCO0FBQ0g7QUFJd0M7QUFFdEI7QUFFbUY7QUFDdkY7QUFDdkMsTUFBTUssVUFBVSxJQUFJRCx3REFBT0E7QUFVcEIsTUFBTUUsWUFBMkM7UUFBQyxFQUN6REMsS0FBSyxFQUNKOztJQUVDLE1BQU0sQ0FBQ0MsWUFBYUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUN2RCxNQUFNLENBQUNTLFNBQVVDLFdBQVcsR0FBR1YsK0NBQVFBLENBQVU7SUFFakQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO1FBQUM7UUFBSTtRQUFJO1FBQUk7UUFBSTtLQUFHO0lBQy9ELE1BQU1hLFlBQVk7UUFDaEJkLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO0tBQzFCO0lBRUQsTUFBTWUsb0JBQW9CLENBQUNDLEdBQWtDQztRQUMzRCxNQUFNQyxRQUFRRixFQUFFRyxNQUFNLENBQUNELEtBQUs7UUFFNUIsSUFBSSxVQUFVRSxJQUFJLENBQUNGLFFBQVE7WUFDekIsTUFBTUcsZUFBZTttQkFBSVQ7YUFBVTtZQUNuQ1MsWUFBWSxDQUFDSixNQUFNLEdBQUdDO1lBQ3RCTCxhQUFhUTtZQUViLElBQUlKLFFBQVEsS0FBS0gsU0FBUyxDQUFDRyxRQUFRLEVBQUUsQ0FBQ0ssT0FBTyxFQUFFO29CQUM3Q1I7aUJBQUFBLHNCQUFBQSxTQUFTLENBQUNHLFFBQVEsRUFBRSxDQUFDSyxPQUFPLGNBQTVCUiwwQ0FBQUEsb0JBQThCUyxLQUFLO1lBQ3JDO1lBRUEsNkRBQTZEO1lBQzdEUCxFQUFFRyxNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzVCLE9BQU87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Ozs7QUFRaEQsRUFBQztHQWhJWXJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9jb21wYW55LXJlZ2lzdGVyL3ZlcmlmeS1vdHAudHN4Pzc2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW1nOSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltZy8xNjB4MTYwL2ltZzkuanBnXCI7XHJcbmltcG9ydCB0b3BWZW5kb3IgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvaWxsdXN0cmF0aW9ucy90b3AtdmVuZG9yLnN2Z1wiO1xyXG5pbXBvcnQgJy4vRGV2T3ZlcnZpZXcuc2Nzcyc7XHJcbmltcG9ydCAnLi9vdHBTdHlsZS5zY3NzJztcclxuaW1wb3J0IGRyb3Bib3hpY29uIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JyYW5kcy9kcm9wYm94LWljb24uc3ZnXCI7XHJcbmltcG9ydCB2YXJzaXR5IGZyb20gXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2JyYW5kcy90aGUtdW5pdmVyc2l0eS1vZi1tYW5jaGVzdGVyLnN2Z1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLW1vZGFsJztcclxuaW1wb3J0ICdyZWFjdC1yZXNwb25zaXZlLW1vZGFsL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBJRGV2ZWxvcGVyUHJvZmlsZSwgSUVkdWNhdGlvbkluZm9ybWF0aW9uLCBJVXNlclNlbmRPVFAsIElWZXJpZnlPdHAsIElXb3JrRXhwZXJpZW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3VzZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlRGV2ZWxvcGVyUHJvZmlsZSwgR2V0RGV2ZWxvcGVyUHJvZmlsZSwgVXBkYXRlRGV2ZWxvcGVyUHJvZmlsZSwgc2VuZE9UUCwgdmVyaWZ5T3RwIH0gZnJvbSBcIi4uLy4uL2VuZHBvaW50cy9hcGlcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuaW50ZXJmYWNlIHZlcmlmeU90cE1vZGFsUHJvcHMge1xyXG4gIG9uQ2xvc2U6ICgpID0+IGFueTtcclxuICBlbWFpbDogc3RyaW5nO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVmVyaWZ5T3RwOiBSZWFjdC5GQzx2ZXJpZnlPdHBNb2RhbFByb3BzPiA9ICh7XHJcbmVtYWlsXHJcbn0pID0+IHsgXHJcblxyXG4gIGNvbnN0IFtpbnZhbGlkT1RQICwgc2V0SW52YWxpZE9UUF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbb3B0U2VudCAsIHNldE90cFNlbnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtvdHBWYWx1ZXMsIHNldE90cFZhbHVlc10gPSB1c2VTdGF0ZShbJycsICcnLCAnJywgJycsICcnXSk7XHJcbiAgY29uc3QgaW5wdXRSZWZzID0gW1xyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gIFxyXG4gICAgaWYgKC9eWzAtOV0kLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICBjb25zdCBuZXdPdHBWYWx1ZXMgPSBbLi4ub3RwVmFsdWVzXTtcclxuICAgICAgbmV3T3RwVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICBzZXRPdHBWYWx1ZXMobmV3T3RwVmFsdWVzKTtcclxuICBcclxuICAgICAgaWYgKGluZGV4IDwgNCAmJiBpbnB1dFJlZnNbaW5kZXggKyAxXS5jdXJyZW50KSB7XHJcbiAgICAgICAgaW5wdXRSZWZzW2luZGV4ICsgMV0uY3VycmVudD8uZm9jdXMoKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBSZW1vdmUgdGhlIFwiaW5jb3JyZWN0XCIgY2xhc3Mgd2hlbiBhIHZhbGlkIGlucHV0IGlzIGVudGVyZWRcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgaWYgdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlclxyXG4gICAgICBjb25zdCBuZXdPdHBWYWx1ZXMgPSBbLi4ub3RwVmFsdWVzXTtcclxuICAgICAgbmV3T3RwVmFsdWVzW2luZGV4XSA9ICcnO1xyXG4gICAgICBzZXRPdHBWYWx1ZXMobmV3T3RwVmFsdWVzKTtcclxuICBcclxuICAgICAgLy8gT3B0aW9uYWxseSwgeW91IGNhbiBtb3ZlIGZvY3VzIGJhY2sgdG8gdGhlIHByZXZpb3VzIGlucHV0XHJcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5wdXRSZWZzW2luZGV4IC0gMV0uY3VycmVudCkge1xyXG4gICAgICAgIGlucHV0UmVmc1tpbmRleCAtIDFdLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gQWRkIHRoZSBcImluY29ycmVjdFwiIGNsYXNzIHRvIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0T1RQID0gYXN5bmMoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPdHBTZW50KGZhbHNlKVxyXG4gICAgc2V0SW52YWxpZE9UUChmYWxzZSlcclxuICAgIGNvbnN0IG90cCA9IE51bWJlcihvdHBWYWx1ZXMuam9pbignJykpO1xyXG5cclxuICAgIGlmKG90cC50b1N0cmluZygpLmxlbmd0aCA9PSA1KXtcclxuICAgICAgY29uc3QgdmVyaWZ5ID0gYXdhaXQgdmVyaWZ5T3RwKHtlbWFpbCxvdHB9KVxyXG4gICAgICBpZih2ZXJpZnkpe1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2NvbXBhbnktb3ZlcnZpZXdcIlxyXG4gICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHNldEludmFsaWRPVFAodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIGNvbnN0IFJlc2VuZE90cCA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgc2V0SW52YWxpZE9UUChmYWxzZSlcclxuICAgIHNldE90cFNlbnQoZmFsc2UpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9uU3VibWl0T1RQID0gYXdhaXQgc2VuZE9UUCggeyBlbWFpbDogZW1haWwgfSBhcyBJVXNlclNlbmRPVFApOyAvLyBSZW5hbWUgdGhlIGNvbnN0YW50XHJcbiAgICAgIGlmKG9uU3VibWl0T1RQICE9PSA0MDApe1xyXG4gICAgICAgIHNldE90cFNlbnQodHJ1ZSlcclxuICAgICAgfWVsc2UgaWYgKG9uU3VibWl0T1RQID09IDQwMCkge1xyXG4gICAgICAgIHNldE90cFNlbnQoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignT1RQIGZhaWxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICBcclxuICAgICAgwqAgY29uc29sZS5sb2coJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgfSBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPG1haW4gaWQ9XCJjb250ZW50XCIgcm9sZT1cIm1haW5cIiBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdHBcIj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdHBNYWluXCI+XHJcbiAgIFxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdHBGb3JtXCI+XHJcbiAgICAgICAgPGgyPkVudGVyIHRoZSBPVFA8L2gyPlxyXG4gICAgICAgIDxwPkVudGVyIHRoZSBPVFAgc2VudCB0byB0aGUgZW1haWwgeW91IHByb3ZpZGVkPC9wPlxyXG5cclxuICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtpbnZhbGlkT1RQICYmICAgPHNwYW4gc3R5bGU9e3tjb2xvciA6XCJ0b21hdG9cIiwgZm9udFdlaWdodDogXCI2MDBcIiAsIGZvbnRTaXplOlwic21hbGxcIn19PkludmFsaWQgT1RQPC9zcGFuPn1cclxuICAgICAgICAgICAge29wdFNlbnQgJiYgICA8c3BhbiBzdHlsZT17e2NvbG9yIDpcImdyZWVuXCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgLCBmb250U2l6ZTpcInNtYWxsXCJ9fT5PVFAgc2VudCBzdWNjZXNzZnVsbHk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3RhJyBvbkNsaWNrPXtSZXNlbmRPdHB9IHN0eWxlID17e2NvbG9yIDogXCJ2YXIoLS1icy1oZWFkaW5nLWNvbG9yKVwifX0+cmVzZW5kIE9UUDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J290cElucHV0cyc+XHJcbiAge2lucHV0UmVmcy5tYXAoKHJlZiwgaW5kZXgpID0+IChcclxuICAgIDxpbnB1dFxyXG4gICAgICBrZXk9e2luZGV4fVxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIGlkPXtgaW5wdXQke2luZGV4ICsgMX1gfVxyXG4gICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICB2YWx1ZT17b3RwVmFsdWVzW2luZGV4XX1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLCBpbmRleCl9XHJcbiAgICAgIGNsYXNzTmFtZT17YG90cElucHV0ICR7b3RwVmFsdWVzW2luZGV4XSAhPT0gJycgPyAnaW5jb3JyZWN0JyA6ICcnfWB9XHJcbiAgICAgIHJlcXVpcmVkXHJcbiAgICAvPlxyXG4gICkpfVxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRm9ybVN1Ym1pdE9UUH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG48L21haW4+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNlbmRPVFAiLCJ2ZXJpZnlPdHAiLCJDb29raWVzIiwiY29va2llcyIsIlZlcmlmeU90cCIsImVtYWlsIiwiaW52YWxpZE9UUCIsInNldEludmFsaWRPVFAiLCJvcHRTZW50Iiwic2V0T3RwU2VudCIsIm90cFZhbHVlcyIsInNldE90cFZhbHVlcyIsImlucHV0UmVmcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsImluZGV4IiwidmFsdWUiLCJ0YXJnZXQiLCJ0ZXN0IiwibmV3T3RwVmFsdWVzIiwiY3VycmVudCIsImZvY3VzIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlRm9ybVN1Ym1pdE9UUCIsInByZXZlbnREZWZhdWx0Iiwib3RwIiwiTnVtYmVyIiwiam9pbiIsInRvU3RyaW5nIiwibGVuZ3RoIiwidmVyaWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiUmVzZW5kT3RwIiwib25TdWJtaXRPVFAiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJtYWluIiwiaWQiLCJyb2xlIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImRpdiIsImgyIiwicCIsImZvcm0iLCJsYWJlbCIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwib25DbGljayIsIm1hcCIsInJlZiIsImlucHV0IiwidHlwZSIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/company-register/verify-otp.tsx\n"));

/***/ })

});