"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/developer-overview/page",{

/***/ "(app-pages-browser)/./src/app/endpoints/api.ts":
/*!**********************************!*\
  !*** ./src/app/endpoints/api.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateDeveloperProfile: function() { return /* binding */ CreateDeveloperProfile; },\n/* harmony export */   CreateJob: function() { return /* binding */ CreateJob; },\n/* harmony export */   GetApplicantProfile: function() { return /* binding */ GetApplicantProfile; },\n/* harmony export */   GetDeveloperProfile: function() { return /* binding */ GetDeveloperProfile; },\n/* harmony export */   GetStaffInfo: function() { return /* binding */ GetStaffInfo; },\n/* harmony export */   PostContact: function() { return /* binding */ PostContact; },\n/* harmony export */   UpdateDeveloperProfile: function() { return /* binding */ UpdateDeveloperProfile; },\n/* harmony export */   UpdateJob: function() { return /* binding */ UpdateJob; },\n/* harmony export */   UserLogin: function() { return /* binding */ UserLogin; },\n/* harmony export */   registerOrganisation: function() { return /* binding */ registerOrganisation; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   resetPassword: function() { return /* binding */ resetPassword; },\n/* harmony export */   sendOTP: function() { return /* binding */ sendOTP; },\n/* harmony export */   uploadCV: function() { return /* binding */ uploadCV; },\n/* harmony export */   uploadProfilePic: function() { return /* binding */ uploadProfilePic; },\n/* harmony export */   verifyOtp: function() { return /* binding */ verifyOtp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// api.js\n\nconst url = \"http://localhost:8080\";\nconst renderUrl = \"https://viconet-vercel.vercel.app\";\nasync function registerUser(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Registration successful\");\n            return true;\n        } else {\n            console.error(\"Registration failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UserLogin(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"login successful\");\n            return response.data;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadProfilePic(profilePic, userId) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_profilepicture/\").concat(userId), profilePic, config);\n    console.log(\"profilePicRes\", resp);\n    return resp;\n}\nasync function GetDeveloperProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/personnelByUserId/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function GetStaffInfo(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/staffuser/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function CreateDeveloperProfile(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"update successful\");\n            return true;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateDeveloperProfile(payload, id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel/\").concat(id), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"update successful\");\n            return true;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function PostContact(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://eov2bsfe8acwzc6.m.pipedream.net\", payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"update successful\");\n            return true;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadCV(formData) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_cv/1\"), formData, config);\n    return resp;\n}\nasync function CreateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Job Updated\");\n            return true;\n        } else {\n            console.error(\"Job not updated\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function GetApplicantProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login/\").concat(id));\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function resetPassword(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/resetPassword\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function sendOTP(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/sendOTP\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"otp sent successful\");\n            if (response.data._doc) {\n                return response.data._doc;\n            } else {\n                return false;\n            }\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function registerOrganisation(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/organisation\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function verifyOtp(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users/verify\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            if (response.data.code === 400) {\n                return false;\n            } else {\n                console.log(\"otp verified successful\");\n                return true;\n            }\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVM7QUFDaUI7QUFLMUIsTUFBTUMsTUFBTTtBQUNaLE1BQU1DLFlBQVk7QUFFWCxlQUFlQyxhQUFhQyxPQUFhO0lBQzlDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0REMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNULE9BQU87WUFFTEQsUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBRWRGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDLFVBQVVQLE9BQWtCO0lBQ2hELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0RCxnRkFBZ0Y7WUFDaEZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9KLFNBQVNPLElBQUk7UUFDdEIsT0FBTztZQUNMLG1FQUFtRTtZQUNuRUosUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2QsaUNBQWlDO1FBQ2pDRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlRyxpQkFBaUJDLFVBQW9CLEVBQUVDLE1BQWE7SUFFeEUsTUFBTUMsU0FBUztRQUNYQyxTQUFTO1lBQUUsZ0JBQWdCO1lBQXdCLCtCQUEr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O0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2VuZHBvaW50cy9hcGkudHM/YjlhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkuanNcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgSUNvbnRhY3RGb3JtLCBJRGV2ZWxvcGVyUHJvZmlsZSwgSVVzZXIsIElVc2VyTG9naW4sIElVc2VyUmVzZXRQYXNzd29yZCwgSVVzZXJTZW5kT1RQLCBJVmVyaWZ5T3RwIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyJztcclxuaW1wb3J0IHtJQ29tcGFueVJlZ2lzdGVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9vcmdhbmlzYXRpb24nO1xyXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lKb2JBcHBsaWNhdGlvbic7XHJcblxyXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5jb25zdCByZW5kZXJVcmwgPSBcImh0dHBzOi8vdmljb25ldC12ZXJjZWwudmVyY2VsLmFwcFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihwYXlsb2FkOklVc2VyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91c2Vyc2AsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICBcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVc2VyTG9naW4ocGF5bG9hZDpJVXNlckxvZ2luKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9sb2dpbmAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCwgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBzaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxyXG4gICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQsIGhhbmRsZSBlcnJvciAoZS5nLiwgZGlzcGxheSBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgY29uc29sZS5lcnJvcignbG9naW4gZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFByb2ZpbGVQaWMocHJvZmlsZVBpYzogRm9ybURhdGEsIHVzZXJJZDpzdHJpbmcpe1xyXG5cclxuICBjb25zdCBjb25maWcgPSB7ICAgICBcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJ9LFxyXG4gICAgICBcclxuICB9XHJcbiBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91cGxvYWRfcHJvZmlsZXBpY3R1cmUvJHt1c2VySWR9YCwgcHJvZmlsZVBpYywgY29uZmlnKVxyXG4gY29uc29sZS5sb2coXCJwcm9maWxlUGljUmVzXCIsIHJlc3ApXHJcbiByZXR1cm4gcmVzcDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXREZXZlbG9wZXJQcm9maWxlKGlkOnN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9L2FwaS9wZXJzb25uZWxCeVVzZXJJZC8ke2lkfWApO1xyXG5kZWJ1Z2dlcjtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCwgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBzaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxyXG4gICAgICBjb25zb2xlLmxvZygncmV0cmlldmVkIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZCwgaGFuZGxlIGVycm9yIChlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICBjb25zb2xlLmVycm9yKCdyZXRyaWV2ZSBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gSGFuZGxlIG5ldHdvcmsgb3Igb3RoZXIgZXJyb3JzXHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0U3RhZmZJbmZvKGlkOnN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9L2FwaS9zdGFmZnVzZXIvJHtpZH1gKTtcclxuZGVidWdnZXI7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQsIGhhbmRsZSBlcnJvciAoZS5nLiwgZGlzcGxheSBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgY29uc29sZS5lcnJvcigncmV0cmlldmUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRGV2ZWxvcGVyUHJvZmlsZShwYXlsb2FkOklEZXZlbG9wZXJQcm9maWxlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9wZXJzb25uZWxgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZCwgaGFuZGxlIGVycm9yIChlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZURldmVsb3BlclByb2ZpbGUocGF5bG9hZDpJRGV2ZWxvcGVyUHJvZmlsZSwgaWQ6c3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9wZXJzb25uZWwvJHtpZH1gLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZCwgaGFuZGxlIGVycm9yIChlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdENvbnRhY3QocGF5bG9hZDpJQ29udGFjdEZvcm0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL2VvdjJic2ZlOGFjd3pjNi5tLnBpcGVkcmVhbS5uZXRgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZCwgaGFuZGxlIGVycm9yIChlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkQ1YoZm9ybURhdGE6IEZvcm1EYXRhKXtcclxuXHJcbiAgY29uc3QgY29uZmlnID0geyAgICAgXHJcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwifSxcclxuICAgICAgXHJcbiAgfVxyXG4gY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvdXBsb2FkX2N2LzFgLCBmb3JtRGF0YSwgY29uZmlnKVxyXG4gcmV0dXJuIHJlc3A7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUpvYihwYXlsb2FkOklKb2JBcHBsaWNhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvam9iQXBwbGljYXRpb25zYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignbG9naW4gZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gVXBkYXRlSm9iKHBheWxvYWQ6SUpvYkFwcGxpY2F0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvam9iQXBwbGljYXRpb25zYCwgcGF5bG9hZCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdKb2IgVXBkYXRlZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0pvYiBub3QgdXBkYXRlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldEFwcGxpY2FudFByb2ZpbGUoaWQ6c3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9sb2dpbi8ke2lkfWApO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvZ2luIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNldFBhc3N3b3JkKHBheWxvYWQ6SVVzZXJSZXNldFBhc3N3b3JkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cmVuZGVyVXJsfS9hcGkvdXNlci9yZXNldFBhc3N3b3JkYCwgcGF5bG9hZCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCB5b3UgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIG9yIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2UuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Bhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdwYXNzd29yZCByZXNldCBmYWlsZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAocGF5bG9hZDpJVXNlclNlbmRPVFApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtyZW5kZXJVcmx9L2FwaS91c2VyL3NlbmRPVFBgLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgICBjb25zb2xlLmxvZygnb3RwIHNlbnQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIGlmICggcmVzcG9uc2UuZGF0YS5fZG9jKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuX2RvYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZCwgaGFuZGxlIGVycm9yIChlLmcuLCBkaXNwbGF5IGVycm9yIG1lc3NhZ2UpLlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlck9yZ2FuaXNhdGlvbihwYXlsb2FkOiBJQ29tcGFueVJlZ2lzdGVyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvb3JnYW5pc2F0aW9uYCwgcGF5bG9hZCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQsIGhhbmRsZSBlcnJvciAoZS5nLiwgZGlzcGxheSBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCdwYXNzd29yZCByZXNldCBmYWlsZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5T3RwKHBheWxvYWQ6SVZlcmlmeU90cCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3VzZXJzL3ZlcmlmeWAsIHBheWxvYWQpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuXHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDApe1xyXG4gICAgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1lbHNleyAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ290cCB2ZXJpZmllZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXJsIiwicmVuZGVyVXJsIiwicmVnaXN0ZXJVc2VyIiwicGF5bG9hZCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlVzZXJMb2dpbiIsImRhdGEiLCJ1cGxvYWRQcm9maWxlUGljIiwicHJvZmlsZVBpYyIsInVzZXJJZCIsImNvbmZpZyIsImhlYWRlcnMiLCJyZXNwIiwiR2V0RGV2ZWxvcGVyUHJvZmlsZSIsImlkIiwiZ2V0IiwiR2V0U3RhZmZJbmZvIiwiQ3JlYXRlRGV2ZWxvcGVyUHJvZmlsZSIsIlVwZGF0ZURldmVsb3BlclByb2ZpbGUiLCJQb3N0Q29udGFjdCIsInVwbG9hZENWIiwiZm9ybURhdGEiLCJDcmVhdGVKb2IiLCJVcGRhdGVKb2IiLCJHZXRBcHBsaWNhbnRQcm9maWxlIiwicmVzZXRQYXNzd29yZCIsInNlbmRPVFAiLCJfZG9jIiwicmVnaXN0ZXJPcmdhbmlzYXRpb24iLCJ2ZXJpZnlPdHAiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/endpoints/api.ts\n"));

/***/ })

});