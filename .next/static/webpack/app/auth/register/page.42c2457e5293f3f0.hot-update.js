"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/register/page",{

/***/ "(app-pages-browser)/./src/app/auth/register/verify-otp.tsx":
/*!**********************************************!*\
  !*** ./src/app/auth/register/verify-otp.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VerifyOtp: function() { return /* binding */ VerifyOtp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _DevOverview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevOverview.scss */ \"(app-pages-browser)/./src/app/auth/register/DevOverview.scss\");\n/* harmony import */ var _otpStyle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otpStyle.scss */ \"(app-pages-browser)/./src/app/auth/register/otpStyle.scss\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-modal/styles.css */ \"(app-pages-browser)/./node_modules/react-responsive-modal/styles.css\");\n/* harmony import */ var _endpoints_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../endpoints/api */ \"(app-pages-browser)/./src/app/endpoints/api.ts\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal-cookie */ \"(app-pages-browser)/./node_modules/universal-cookie/es6/index.js\");\n/* __next_internal_client_entry_do_not_use__ VerifyOtp auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nconst VerifyOtp = (param)=>{\n    let { email } = param;\n    _s();\n    const [invalidOTP, setInvalidOTP] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [optSent, setOtpSent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [otpValues, setOtpValues] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        \"\",\n        \"\",\n        \"\",\n        \"\",\n        \"\"\n    ]);\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null)\n    ];\n    const handleInputChange = (e, index)=>{\n        const value = e.target.value;\n        if (/^[0-9]$/.test(value)) {\n            const newOtpValues = [\n                ...otpValues\n            ];\n            newOtpValues[index] = value;\n            setOtpValues(newOtpValues);\n            if (index < 4 && inputRefs[index + 1].current) {\n                var _inputRefs__current;\n                (_inputRefs__current = inputRefs[index + 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n            }\n            // Remove the \"incorrect\" class when a valid input is entered\n            e.target.classList.remove(\"incorrect\");\n        } else {\n            // Clear the input if the value is not a number\n            const newOtpValues = [\n                ...otpValues\n            ];\n            newOtpValues[index] = \"\";\n            setOtpValues(newOtpValues);\n            // Optionally, you can move focus back to the previous input\n            if (index > 0 && inputRefs[index - 1].current) {\n                var _inputRefs__current1;\n                (_inputRefs__current1 = inputRefs[index - 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n            }\n            // Add the \"incorrect\" class to trigger the animation\n            e.target.classList.add(\"incorrect\");\n        }\n    };\n    const handleFormSubmitOTP = async (e)=>{\n        e.preventDefault();\n        setOtpSent(false);\n        setInvalidOTP(false);\n        const otp = Number(otpValues.join(\"\"));\n        if (otp.toString().length == 5) {\n            const verify = await (0,_endpoints_api__WEBPACK_IMPORTED_MODULE_6__.verifyOtp)({\n                email,\n                otp\n            });\n            if (verify) {\n                window.location.href = \"/developer-overview\";\n            } else {\n                setInvalidOTP(true);\n            }\n        }\n    };\n    const ResendOtp = async (e)=>{\n        setInvalidOTP(false);\n        setOtpSent(false);\n        e.preventDefault();\n        try {\n            const onSubmitOTP = await (0,_endpoints_api__WEBPACK_IMPORTED_MODULE_6__.sendOTP)({\n                email: email\n            }); // Rename the constant\n            if (onSubmitOTP !== 400) {\n                setOtpSent(true);\n            } else if (onSubmitOTP == 400) {\n                setOtpSent(false);\n                console.error(\"OTP failed\");\n            }\n        } catch (error) {\n            console.log(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"content\",\n        role: \"main\",\n        className: \"bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"otp\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"otpMain\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"otpForm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Enter the OTP\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Enter the OTP sent to the email you provided\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 15\n                                                }, undefined),\n                                                invalidOTP && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    style: {\n                                                        color: \"tomato\",\n                                                        fontWeight: \"600\",\n                                                        fontSize: \"small\"\n                                                    },\n                                                    children: \"Invalid OTP\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 32\n                                                }, undefined),\n                                                optSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    style: {\n                                                        color: \"green\",\n                                                        fontWeight: \"600\",\n                                                        fontSize: \"small\"\n                                                    },\n                                                    children: \"OTP sent successfully\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"cta\",\n                                                    onClick: ResendOtp,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                        href: \"#\",\n                                                        children: \"resend otp\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 57\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                    lineNumber: 126,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"otpInputs\",\n                                            children: inputRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    id: \"input\".concat(index + 1),\n                                                    maxLength: 1,\n                                                    ref: ref,\n                                                    value: otpValues[index],\n                                                    onChange: (e)=>handleInputChange(e, index),\n                                                    className: \"otpInput \".concat(otpValues[index] !== \"\" ? \"incorrect\" : \"\"),\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 5\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleFormSubmitOTP,\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n                lineNumber: 113,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n            lineNumber: 110,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kwane\\\\OneDrive\\\\Desktop\\\\Fraktal_FE\\\\src\\\\app\\\\auth\\\\register\\\\verify-otp.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyOtp, \"dMUXlL6C6+VmJA5104BRS/EaFHM=\");\n_c = VerifyOtp;\nvar _c;\n$RefreshReg$(_c, \"VerifyOtp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci92ZXJpZnktb3RwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTRCO0FBQ0g7QUFHSTtBQUNvQztBQUV0QjtBQUVtRjtBQUN2RjtBQUN2QyxNQUFNTSxVQUFVLElBQUlELHdEQUFPQTtBQVVwQixNQUFNRSxZQUEyQztRQUFDLEVBQ3pEQyxLQUFLLEVBQ0o7O0lBRUMsTUFBTSxDQUFDQyxZQUFhQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFVO0lBQ3ZELE1BQU0sQ0FBQ1MsU0FBVUMsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBVTtJQUVqRCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7UUFBQztRQUFJO1FBQUk7UUFBSTtRQUFJO0tBQUc7SUFDL0QsTUFBTWEsWUFBWTtRQUNoQmQsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7S0FDMUI7SUFFRCxNQUFNZSxvQkFBb0IsQ0FBQ0MsR0FBa0NDO1FBQzNELE1BQU1DLFFBQVFGLEVBQUVHLE1BQU0sQ0FBQ0QsS0FBSztRQUU1QixJQUFJLFVBQVVFLElBQUksQ0FBQ0YsUUFBUTtZQUN6QixNQUFNRyxlQUFlO21CQUFJVDthQUFVO1lBQ25DUyxZQUFZLENBQUNKLE1BQU0sR0FBR0M7WUFDdEJMLGFBQWFRO1lBRWIsSUFBSUosUUFBUSxLQUFLSCxTQUFTLENBQUNHLFFBQVEsRUFBRSxDQUFDSyxPQUFPLEVBQUU7b0JBQzdDUjtpQkFBQUEsc0JBQUFBLFNBQVMsQ0FBQ0csUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJSLDBDQUFBQSxvQkFBOEJTLEtBQUs7WUFDckM7WUFFQSw2REFBNkQ7WUFDN0RQLEVBQUVHLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDNUIsT0FBTztZQUNMLCtDQUErQztZQUMvQyxNQUFNSixlQUFlO21CQUFJVDthQUFVO1lBQ25DUyxZQUFZLENBQUNKLE1BQU0sR0FBRztZQUN0QkosYUFBYVE7WUFFYiw0REFBNEQ7WUFDNUQsSUFBSUosUUFBUSxLQUFLSCxTQUFTLENBQUNHLFFBQVEsRUFBRSxDQUFDSyxPQUFPLEVBQUU7b0JBQzdDUjtpQkFBQUEsdUJBQUFBLFNBQVMsQ0FBQ0csUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJSLDJDQUFBQSxxQkFBOEJTLEtBQUs7WUFDckM7WUFFQSxxREFBcUQ7WUFDckRQLEVBQUVHLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxHQUFHLENBQUM7UUFDekI7SUFDRjtJQUVBLE1BQU1DLHNCQUFzQixPQUFNWDtRQUNoQ0EsRUFBRVksY0FBYztRQUNoQmpCLFdBQVc7UUFDWEYsY0FBYztRQUNkLE1BQU1vQixNQUFNQyxPQUFPbEIsVUFBVW1CLElBQUksQ0FBQztRQUVsQyxJQUFHRixJQUFJRyxRQUFRLEdBQUdDLE1BQU0sSUFBSSxHQUFFO1lBQzVCLE1BQU1DLFNBQVMsTUFBTS9CLHlEQUFTQSxDQUFDO2dCQUFDSTtnQkFBTXNCO1lBQUc7WUFDekMsSUFBR0ssUUFBTztnQkFDUkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUU7WUFDeEIsT0FBSztnQkFDSDVCLGNBQWM7WUFDaEI7UUFDRjtJQUNGO0lBR0EsTUFBTTZCLFlBQVksT0FBT3RCO1FBQ3ZCUCxjQUFjO1FBQ2RFLFdBQVc7UUFDWEssRUFBRVksY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTVcsY0FBYyxNQUFNckMsdURBQU9BLENBQUU7Z0JBQUVLLE9BQU9BO1lBQU0sSUFBb0Isc0JBQXNCO1lBQzVGLElBQUdnQyxnQkFBZ0IsS0FBSTtnQkFDckI1QixXQUFXO1lBQ2IsT0FBTSxJQUFJNEIsZUFBZSxLQUFLO2dCQUM1QjVCLFdBQVc7Z0JBQ1g2QixRQUFRQyxLQUFLLENBQUM7WUFDaEI7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFFWkQsUUFBUUUsR0FBRyxDQUFDLFVBQVVEO1FBQzFCO0lBRUY7SUFFRSxxQkFDQSw4REFBQ0U7UUFBS0MsSUFBRztRQUFVQyxNQUFLO1FBQU9DLFdBQVU7a0JBQzFDLDRFQUFDQztZQUFRRCxXQUFVO3NCQUdsQiw0RUFBQ0U7Z0JBQUlGLFdBQVU7MEJBR2IsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDYiw4REFBQ0c7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7OztzQ0FFSCw4REFBQ0M7OzhDQUNDLDhEQUFDSDs7c0RBQ0MsOERBQUNJOzs4REFDQyw4REFBQ0M7Ozs7O2dEQUNBN0MsNEJBQWdCLDhEQUFDNkM7b0RBQUtDLE9BQU87d0RBQUNDLE9BQU87d0RBQVVDLFlBQVk7d0RBQVFDLFVBQVM7b0RBQU87OERBQUc7Ozs7OztnREFDeEYvQyx5QkFBYSw4REFBQzJDO29EQUFLQyxPQUFPO3dEQUFDQyxPQUFPO3dEQUFTQyxZQUFZO3dEQUFRQyxVQUFTO29EQUFPOzhEQUFHOzs7Ozs7OERBQ2pGLDhEQUFDSjtvREFBS1AsV0FBVTtvREFBTVksU0FBU3BCOzhEQUFXLDRFQUFDdkMsa0RBQUlBO3dEQUFDc0MsTUFBSztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBRTVELDhEQUFDVzs0Q0FBSUYsV0FBVTtzREFDeEJoQyxVQUFVNkMsR0FBRyxDQUFDLENBQUNDLEtBQUszQyxzQkFDbkIsOERBQUM0QztvREFFQ0MsTUFBSztvREFDTGxCLElBQUksUUFBa0IsT0FBVjNCLFFBQVE7b0RBQ3BCOEMsV0FBVztvREFDWEgsS0FBS0E7b0RBQ0wxQyxPQUFPTixTQUFTLENBQUNLLE1BQU07b0RBQ3ZCK0MsVUFBVSxDQUFDaEQsSUFBTUQsa0JBQWtCQyxHQUFHQztvREFDdEM2QixXQUFXLFlBQXVELE9BQTNDbEMsU0FBUyxDQUFDSyxNQUFNLEtBQUssS0FBSyxjQUFjO29EQUMvRGdELFFBQVE7bURBUkhoRDs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FjRCw4REFBQ2lEO29DQUFPUixTQUFTL0I7OENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEQsRUFBQztHQS9IWXJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci92ZXJpZnktb3RwLnRzeD80NjY1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGltZzkgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvMTYweDE2MC9pbWc5LmpwZ1wiO1xyXG5pbXBvcnQgdG9wVmVuZG9yIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvc3ZnL2lsbHVzdHJhdGlvbnMvdG9wLXZlbmRvci5zdmdcIjtcclxuaW1wb3J0ICcuL0Rldk92ZXJ2aWV3LnNjc3MnO1xyXG5pbXBvcnQgJy4vb3RwU3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBkcm9wYm94aWNvbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9icmFuZHMvZHJvcGJveC1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgdmFyc2l0eSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9icmFuZHMvdGhlLXVuaXZlcnNpdHktb2YtbWFuY2hlc3Rlci5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1tb2RhbCc7XHJcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1tb2RhbC9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgSURldmVsb3BlclByb2ZpbGUsIElFZHVjYXRpb25JbmZvcm1hdGlvbiwgSVVzZXJTZW5kT1RQLCBJVmVyaWZ5T3RwLCBJV29ya0V4cGVyaWVuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy91c2VyXCI7XHJcbmltcG9ydCB7IENyZWF0ZURldmVsb3BlclByb2ZpbGUsIEdldERldmVsb3BlclByb2ZpbGUsIFVwZGF0ZURldmVsb3BlclByb2ZpbGUsIHNlbmRPVFAsIHZlcmlmeU90cCB9IGZyb20gXCIuLi8uLi9lbmRwb2ludHMvYXBpXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmludGVyZmFjZSB2ZXJpZnlPdHBNb2RhbFByb3BzIHtcclxuICBvbkNsb3NlOiAoKSA9PiBhbnk7XHJcbiAgZW1haWw6IHN0cmluZztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmeU90cDogUmVhY3QuRkM8dmVyaWZ5T3RwTW9kYWxQcm9wcz4gPSAoe1xyXG5lbWFpbFxyXG59KSA9PiB7IFxyXG5cclxuICBjb25zdCBbaW52YWxpZE9UUCAsIHNldEludmFsaWRPVFBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW29wdFNlbnQgLCBzZXRPdHBTZW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBbb3RwVmFsdWVzLCBzZXRPdHBWYWx1ZXNdID0gdXNlU3RhdGUoWycnLCAnJywgJycsICcnLCAnJ10pO1xyXG4gIGNvbnN0IGlucHV0UmVmcyA9IFtcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICBcclxuICAgIGlmICgvXlswLTldJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgY29uc3QgbmV3T3RwVmFsdWVzID0gWy4uLm90cFZhbHVlc107XHJcbiAgICAgIG5ld090cFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgc2V0T3RwVmFsdWVzKG5ld090cFZhbHVlcyk7XHJcbiAgXHJcbiAgICAgIGlmIChpbmRleCA8IDQgJiYgaW5wdXRSZWZzW2luZGV4ICsgMV0uY3VycmVudCkge1xyXG4gICAgICAgIGlucHV0UmVmc1tpbmRleCArIDFdLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBcImluY29ycmVjdFwiIGNsYXNzIHdoZW4gYSB2YWxpZCBpbnB1dCBpcyBlbnRlcmVkXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ2xlYXIgdGhlIGlucHV0IGlmIHRoZSB2YWx1ZSBpcyBub3QgYSBudW1iZXJcclxuICAgICAgY29uc3QgbmV3T3RwVmFsdWVzID0gWy4uLm90cFZhbHVlc107XHJcbiAgICAgIG5ld090cFZhbHVlc1tpbmRleF0gPSAnJztcclxuICAgICAgc2V0T3RwVmFsdWVzKG5ld090cFZhbHVlcyk7XHJcbiAgXHJcbiAgICAgIC8vIE9wdGlvbmFsbHksIHlvdSBjYW4gbW92ZSBmb2N1cyBiYWNrIHRvIHRoZSBwcmV2aW91cyBpbnB1dFxyXG4gICAgICBpZiAoaW5kZXggPiAwICYmIGlucHV0UmVmc1tpbmRleCAtIDFdLmN1cnJlbnQpIHtcclxuICAgICAgICBpbnB1dFJlZnNbaW5kZXggLSAxXS5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIEFkZCB0aGUgXCJpbmNvcnJlY3RcIiBjbGFzcyB0byB0cmlnZ2VyIHRoZSBhbmltYXRpb25cclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdE9UUCA9IGFzeW5jKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0T3RwU2VudChmYWxzZSlcclxuICAgIHNldEludmFsaWRPVFAoZmFsc2UpXHJcbiAgICBjb25zdCBvdHAgPSBOdW1iZXIob3RwVmFsdWVzLmpvaW4oJycpKTtcclxuXHJcbiAgICBpZihvdHAudG9TdHJpbmcoKS5sZW5ndGggPT0gNSl7XHJcbiAgICAgIGNvbnN0IHZlcmlmeSA9IGF3YWl0IHZlcmlmeU90cCh7ZW1haWwsb3RwfSlcclxuICAgICAgaWYodmVyaWZ5KXtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9Jy9kZXZlbG9wZXItb3ZlcnZpZXcnOyAgICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc2V0SW52YWxpZE9UUCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgY29uc3QgUmVzZW5kT3RwID0gYXN5bmMgKGU6YW55KSA9PiB7XHJcbiAgICBzZXRJbnZhbGlkT1RQKGZhbHNlKVxyXG4gICAgc2V0T3RwU2VudChmYWxzZSlcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb25TdWJtaXRPVFAgPSBhd2FpdCBzZW5kT1RQKCB7IGVtYWlsOiBlbWFpbCB9IGFzIElVc2VyU2VuZE9UUCk7IC8vIFJlbmFtZSB0aGUgY29uc3RhbnRcclxuICAgICAgaWYob25TdWJtaXRPVFAgIT09IDQwMCl7XHJcbiAgICAgICAgc2V0T3RwU2VudCh0cnVlKVxyXG4gICAgICB9ZWxzZSBpZiAob25TdWJtaXRPVFAgPT0gNDAwKSB7XHJcbiAgICAgICAgc2V0T3RwU2VudChmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdPVFAgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgIFxyXG4gICAgICDCoCBjb25zb2xlLmxvZygnRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICB9IFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8bWFpbiBpZD1cImNvbnRlbnRcIiByb2xlPVwibWFpblwiIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm90cFwiPlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm90cE1haW5cIj5cclxuICAgXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90cEZvcm1cIj5cclxuICAgICAgICA8aDI+RW50ZXIgdGhlIE9UUDwvaDI+XHJcbiAgICAgICAgPHA+RW50ZXIgdGhlIE9UUCBzZW50IHRvIHRoZSBlbWFpbCB5b3UgcHJvdmlkZWQ8L3A+XHJcblxyXG4gICAgICAgIDxmb3JtID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAge2ludmFsaWRPVFAgJiYgICA8c3BhbiBzdHlsZT17e2NvbG9yIDpcInRvbWF0b1wiLCBmb250V2VpZ2h0OiBcIjYwMFwiICwgZm9udFNpemU6XCJzbWFsbFwifX0+SW52YWxpZCBPVFA8L3NwYW4+fVxyXG4gICAgICAgICAgICB7b3B0U2VudCAmJiAgIDxzcGFuIHN0eWxlPXt7Y29sb3IgOlwiZ3JlZW5cIiwgZm9udFdlaWdodDogXCI2MDBcIiAsIGZvbnRTaXplOlwic21hbGxcIn19Pk9UUCBzZW50IHN1Y2Nlc3NmdWxseTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdGEnIG9uQ2xpY2s9e1Jlc2VuZE90cH0+PExpbmsgaHJlZj1cIiNcIiA+cmVzZW5kIG90cDwvTGluaz48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdHBJbnB1dHMnPlxyXG4gIHtpbnB1dFJlZnMubWFwKChyZWYsIGluZGV4KSA9PiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAga2V5PXtpbmRleH1cclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBpZD17YGlucHV0JHtpbmRleCArIDF9YH1cclxuICAgICAgbWF4TGVuZ3RoPXsxfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgdmFsdWU9e290cFZhbHVlc1tpbmRleF19XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZSwgaW5kZXgpfVxyXG4gICAgICBjbGFzc05hbWU9e2BvdHBJbnB1dCAke290cFZhbHVlc1tpbmRleF0gIT09ICcnID8gJ2luY29ycmVjdCcgOiAnJ31gfVxyXG4gICAgICByZXF1aXJlZFxyXG4gICAgLz5cclxuICApKX1cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXRPVFB9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJlZiIsInVzZVN0YXRlIiwic2VuZE9UUCIsInZlcmlmeU90cCIsIkNvb2tpZXMiLCJjb29raWVzIiwiVmVyaWZ5T3RwIiwiZW1haWwiLCJpbnZhbGlkT1RQIiwic2V0SW52YWxpZE9UUCIsIm9wdFNlbnQiLCJzZXRPdHBTZW50Iiwib3RwVmFsdWVzIiwic2V0T3RwVmFsdWVzIiwiaW5wdXRSZWZzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwiaW5kZXgiLCJ2YWx1ZSIsInRhcmdldCIsInRlc3QiLCJuZXdPdHBWYWx1ZXMiLCJjdXJyZW50IiwiZm9jdXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVGb3JtU3VibWl0T1RQIiwicHJldmVudERlZmF1bHQiLCJvdHAiLCJOdW1iZXIiLCJqb2luIiwidG9TdHJpbmciLCJsZW5ndGgiLCJ2ZXJpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJSZXNlbmRPdHAiLCJvblN1Ym1pdE9UUCIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1haW4iLCJpZCIsInJvbGUiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZGl2IiwiaDIiLCJwIiwiZm9ybSIsImxhYmVsIiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJvbkNsaWNrIiwibWFwIiwicmVmIiwiaW5wdXQiLCJ0eXBlIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/register/verify-otp.tsx\n"));

/***/ })

});