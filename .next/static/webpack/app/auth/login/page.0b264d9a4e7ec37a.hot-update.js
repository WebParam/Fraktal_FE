"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./src/app/endpoints/api.ts":
/*!**********************************!*\
  !*** ./src/app/endpoints/api.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateDeveloperProfile: function() { return /* binding */ CreateDeveloperProfile; },\n/* harmony export */   CreateJob: function() { return /* binding */ CreateJob; },\n/* harmony export */   GetApplicantProfile: function() { return /* binding */ GetApplicantProfile; },\n/* harmony export */   GetDeveloperProfile: function() { return /* binding */ GetDeveloperProfile; },\n/* harmony export */   GetStaffInfo: function() { return /* binding */ GetStaffInfo; },\n/* harmony export */   PostContact: function() { return /* binding */ PostContact; },\n/* harmony export */   UpdateDeveloperProfile: function() { return /* binding */ UpdateDeveloperProfile; },\n/* harmony export */   UpdateJob: function() { return /* binding */ UpdateJob; },\n/* harmony export */   UserLogin: function() { return /* binding */ UserLogin; },\n/* harmony export */   registerOrganisation: function() { return /* binding */ registerOrganisation; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   resetPassword: function() { return /* binding */ resetPassword; },\n/* harmony export */   sendOTP: function() { return /* binding */ sendOTP; },\n/* harmony export */   uploadCV: function() { return /* binding */ uploadCV; },\n/* harmony export */   uploadProfilePic: function() { return /* binding */ uploadProfilePic; },\n/* harmony export */   verifyOtp: function() { return /* binding */ verifyOtp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// api.js\n\nconst url = \"https://viconet-vercel.vercel.app\";\nconst renderUrl = \"https://viconet-vercel.vercel.app\";\nasync function registerUser(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Registration successful\");\n            return true;\n        } else {\n            console.error(\"Registration failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UserLogin(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return response.data;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadProfilePic(profilePic, userId) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_profilepicture/\").concat(userId), profilePic, config);\n    console.log(\"profilePicRes\", resp);\n    return resp;\n}\nasync function GetDeveloperProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/personnelByUserId/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function GetStaffInfo(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/staffuser/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function CreateDeveloperProfile(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateDeveloperProfile(payload, id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel/\").concat(id), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function PostContact(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://eov2bsfe8acwzc6.m.pipedream.net\", payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadCV(formData) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_cv/1\"), formData, config);\n    return resp;\n}\nasync function CreateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Job Updated\");\n            return true;\n        } else {\n            console.error(\"Job not updated\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function GetApplicantProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login/\").concat(id));\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function resetPassword(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/resetPassword\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function sendOTP(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/sendOTP\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"otp sent successful\");\n            if (response.data._doc) {\n                return response.data._doc;\n            } else {\n                return false;\n            }\n        } else {\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function registerOrganisation(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/organisation\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function verifyOtp(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users/verify\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            if (response.data.code === 400) {\n                return false;\n            } else {\n                console.log(\"otp verified successful\");\n                return true;\n            }\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVM7QUFDaUI7QUFhMUIsTUFBTUMsTUFBTTtBQUNaLE1BQU1DLFlBQVk7QUFFWCxlQUFlQyxhQUFhQyxPQUFjO0lBQy9DLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0REMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNULE9BQU87WUFDTEQsUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDLFVBQVVQLE9BQW1CO0lBQ2pELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0REMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT0osU0FBU08sSUFBSTtRQUN0QixPQUFPO1lBQ0xKLFFBQVFFLEtBQUssQ0FBQztZQUNkLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlRyxpQkFBaUJDLFVBQW9CLEVBQUVDLE1BQWM7SUFDekUsTUFBTUMsU0FBUztRQUNiQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLCtCQUErQjtRQUNqQztJQUNGO0lBQ0EsTUFBTUMsT0FBTyxNQUFNbEIsNkNB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QU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLHNCQUFvQkc7UUFFN0QsSUFBSUMsU0FBU0UsTUFBTSxLQUFLLE9BQU9GLFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBQ3REQyxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPO1FBQ1QsT0FBTztZQUNMRCxRQUFRRSxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZXlCLFVBQVUvQixPQUFtQjtJQUNqRCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNTCw2Q0FBS0EsQ0FBQ00sSUFBSSxDQUFDLEdBQU8sT0FBSkwsS0FBSSxzQkFBb0JHO1FBRTdELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0RCxJQUFJRixTQUFTTyxJQUFJLENBQUN3QixJQUFJLEtBQUssS0FBSztnQkFDOUIsT0FBTztZQUNULE9BQU87Z0JBQ0w1QixRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBTztZQUNUO1FBQ0Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cz9iOWFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS5qc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgSUNvbnRhY3RGb3JtLFxyXG4gIElEZXZlbG9wZXJQcm9maWxlLFxyXG4gIElVc2VyLFxyXG4gIElVc2VyTG9naW4sXHJcbiAgSVVzZXJSZXNldFBhc3N3b3JkLFxyXG4gIElVc2VyU2VuZE9UUCxcclxuICBJVmVyaWZ5T3RwLFxyXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL3VzZXJcIjtcclxuaW1wb3J0IHsgSUNvbXBhbnlSZWdpc3RlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL29yZ2FuaXNhdGlvblwiO1xyXG5pbXBvcnQgeyBJSm9iQXBwbGljYXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSm9iQXBwbGljYXRpb25cIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly92aWNvbmV0LXZlcmNlbC52ZXJjZWwuYXBwXCI7XHJcbmNvbnN0IHJlbmRlclVybCA9IFwiaHR0cHM6Ly92aWNvbmV0LXZlcmNlbC52ZXJjZWwuYXBwXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHBheWxvYWQ6IElVc2VyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91c2Vyc2AsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWdpc3RyYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVzZXJMb2dpbihwYXlsb2FkOiBJVXNlckxvZ2luKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9sb2dpbmAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2luIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcImxvZ2luIGZhaWxlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljKHByb2ZpbGVQaWM6IEZvcm1EYXRhLCB1c2VySWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgYCR7dXJsfS9hcGkvdXBsb2FkX3Byb2ZpbGVwaWN0dXJlLyR7dXNlcklkfWAsXHJcbiAgICBwcm9maWxlUGljLFxyXG4gICAgY29uZmlnXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcInByb2ZpbGVQaWNSZXNcIiwgcmVzcCk7XHJcbiAgcmV0dXJuIHJlc3A7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXREZXZlbG9wZXJQcm9maWxlKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkvcGVyc29ubmVsQnlVc2VySWQvJHtpZH1gKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmV0cmlldmVkIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZXRyaWV2ZSBmYWlsZWRcIik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0U3RhZmZJbmZvKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkvc3RhZmZ1c2VyLyR7aWR9YCk7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJldHJpZXZlZCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwicmV0cmlldmUgZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZURldmVsb3BlclByb2ZpbGUocGF5bG9hZDogSURldmVsb3BlclByb2ZpbGUpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3BlcnNvbm5lbGAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGRhdGUgZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZURldmVsb3BlclByb2ZpbGUoXHJcbiAgcGF5bG9hZDogSURldmVsb3BlclByb2ZpbGUsXHJcbiAgaWQ6IHN0cmluZ1xyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3BlcnNvbm5lbC8ke2lkfWAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1cGRhdGUgZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdENvbnRhY3QocGF5bG9hZDogSUNvbnRhY3RGb3JtKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYGh0dHBzOi8vZW92MmJzZmU4YWN3emM2Lm0ucGlwZWRyZWFtLm5ldGAsXHJcbiAgICAgIHBheWxvYWRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcInVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRDVihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91cGxvYWRfY3YvMWAsIGZvcm1EYXRhLCBjb25maWcpO1xyXG4gIHJldHVybiByZXNwO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlSm9iKHBheWxvYWQ6IElKb2JBcHBsaWNhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvam9iQXBwbGljYXRpb25zYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwibG9naW4gZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVXBkYXRlSm9iKHBheWxvYWQ6IElKb2JBcHBsaWNhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvam9iQXBwbGljYXRpb25zYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSm9iIFVwZGF0ZWRcIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkpvYiBub3QgdXBkYXRlZFwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXRBcHBsaWNhbnRQcm9maWxlKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL2xvZ2luLyR7aWR9YCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwibG9naW4gZmFpbGVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQocGF5bG9hZDogSVVzZXJSZXNldFBhc3N3b3JkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYCR7cmVuZGVyVXJsfS9hcGkvdXNlci9yZXNldFBhc3N3b3JkYCxcclxuICAgICAgcGF5bG9hZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCByZXNldCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYXNzd29yZCByZXNldCBmYWlsZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE9UUChwYXlsb2FkOiBJVXNlclNlbmRPVFApIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3JlbmRlclVybH0vYXBpL3VzZXIvc2VuZE9UUGAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm90cCBzZW50IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLl9kb2MpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5fZG9jO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlck9yZ2FuaXNhdGlvbihwYXlsb2FkOiBJQ29tcGFueVJlZ2lzdGVyKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9vcmdhbmlzYXRpb25gLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCByZXNldCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYXNzd29yZCByZXNldCBmYWlsZWRcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5T3RwKHBheWxvYWQ6IElWZXJpZnlPdHApIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3VzZXJzL3ZlcmlmeWAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvdHAgdmVyaWZpZWQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXJsIiwicmVuZGVyVXJsIiwicmVnaXN0ZXJVc2VyIiwicGF5bG9hZCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlVzZXJMb2dpbiIsImRhdGEiLCJ1cGxvYWRQcm9maWxlUGljIiwicHJvZmlsZVBpYyIsInVzZXJJZCIsImNvbmZpZyIsImhlYWRlcnMiLCJyZXNwIiwiR2V0RGV2ZWxvcGVyUHJvZmlsZSIsImlkIiwiZ2V0IiwiR2V0U3RhZmZJbmZvIiwiQ3JlYXRlRGV2ZWxvcGVyUHJvZmlsZSIsIlVwZGF0ZURldmVsb3BlclByb2ZpbGUiLCJQb3N0Q29udGFjdCIsInVwbG9hZENWIiwiZm9ybURhdGEiLCJDcmVhdGVKb2IiLCJVcGRhdGVKb2IiLCJHZXRBcHBsaWNhbnRQcm9maWxlIiwicmVzZXRQYXNzd29yZCIsInNlbmRPVFAiLCJfZG9jIiwicmVnaXN0ZXJPcmdhbmlzYXRpb24iLCJ2ZXJpZnlPdHAiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/endpoints/api.ts\n"));

/***/ })

});