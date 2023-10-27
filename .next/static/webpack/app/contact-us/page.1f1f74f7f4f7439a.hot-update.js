"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact-us/page",{

/***/ "(app-pages-browser)/./src/app/endpoints/api.ts":
/*!**********************************!*\
  !*** ./src/app/endpoints/api.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateDeveloperProfile: function() { return /* binding */ CreateDeveloperProfile; },\n/* harmony export */   CreateJob: function() { return /* binding */ CreateJob; },\n/* harmony export */   GetApplicantProfile: function() { return /* binding */ GetApplicantProfile; },\n/* harmony export */   GetDeveloperProfile: function() { return /* binding */ GetDeveloperProfile; },\n/* harmony export */   GetStaffInfo: function() { return /* binding */ GetStaffInfo; },\n/* harmony export */   PostContact: function() { return /* binding */ PostContact; },\n/* harmony export */   UpdateDeveloperProfile: function() { return /* binding */ UpdateDeveloperProfile; },\n/* harmony export */   UpdateJob: function() { return /* binding */ UpdateJob; },\n/* harmony export */   UserLogin: function() { return /* binding */ UserLogin; },\n/* harmony export */   registerOrganisation: function() { return /* binding */ registerOrganisation; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   resetPassword: function() { return /* binding */ resetPassword; },\n/* harmony export */   sendOTP: function() { return /* binding */ sendOTP; },\n/* harmony export */   uploadCV: function() { return /* binding */ uploadCV; },\n/* harmony export */   uploadProfilePic: function() { return /* binding */ uploadProfilePic; },\n/* harmony export */   verifyOtp: function() { return /* binding */ verifyOtp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// api.js\n\nconst url = \"http://localhost:8080\";\nconst renderUrl = \"https://viconet-vercel.vercel.app\";\nasync function registerUser(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Registration successful\");\n            return true;\n        } else {\n            console.error(\"Registration failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UserLogin(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"login successful\");\n            return response.data;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadProfilePic(profilePic, userId) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_profilepicture/\").concat(userId), profilePic, config);\n    console.log(\"profilePicRes\", resp);\n    return resp;\n}\nasync function GetDeveloperProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/personnelByUserId/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function GetStaffInfo(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/staffuser/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function CreateDeveloperProfile(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateDeveloperProfile(payload, id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel/\").concat(id), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function PostContact(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://eov2bsfe8acwzc6.m.pipedream.net\", payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadCV(formData) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_cv/1\"), formData, config);\n    return resp;\n}\nasync function CreateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Job Updated\");\n            return true;\n        } else {\n            console.error(\"Job not updated\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function GetApplicantProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login/\").concat(id));\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function resetPassword(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/resetPassword\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function sendOTP(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/sendOTP\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"otp sent successful\");\n            if (response.data._doc) {\n                return response.data._doc;\n            } else {\n                return false;\n            }\n        } else {\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function registerOrganisation(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/organisation\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function verifyOtp(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users/verify\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            if (response.data.code === 400) {\n                return false;\n            } else {\n                console.log(\"otp verified successful\");\n                return true;\n            }\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVM7QUFDaUI7QUFLMUIsTUFBTUMsTUFBTTtBQUNaLE1BQU1DLFlBQVk7QUFFWCxlQUFlQyxhQUFhQyxPQUFhO0lBQzlDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0REMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNULE9BQU87WUFFTEQsUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBRWRGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDLFVBQVVQLE9BQWtCO0lBQ2hELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0RCxnRkFBZ0Y7WUFDaEZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9KLFNBQVNPLElBQUk7UUFDdEIsT0FBTztZQUNMSixRQUFRRSxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZUcsaUJBQWlCQyxVQUFvQixFQUFFQyxNQUFhO0lBRXhFLE1BQU1DLFNBQVM7UUFDWEMsU0FBUztZQUFFLGdCQUFnQjtZQUF3QiwrQkFBK0I7UUFBRztJQUV6RjtJQUNELE1BQU1DLE9B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Q2xFLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLHNCQUFvQkc7UUFFN0QsSUFBSUMsU0FBU0UsTUFBTSxLQUFLLE9BQU9GLFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBRXREQyxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPO1FBQ1QsT0FBTztZQUNMRCxRQUFRRSxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU87SUFDVDtBQUNGO0FBR08sZUFBZXlCLFVBQVUvQixPQUFrQjtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNTCw2Q0FBS0EsQ0FBQ00sSUFBSSxDQUFDLEdBQU8sT0FBSkwsS0FBSSxzQkFBb0JHO1FBRTdELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUV0RCxJQUFHRixTQUFTTyxJQUFJLENBQUN3QixJQUFJLEtBQUssS0FBSTtnQkFFNUIsT0FBTztZQUVULE9BQUs7Z0JBQ0Q1QixRQUFRQyxHQUFHLENBQUM7Z0JBQ2QsT0FBTztZQUVUO1FBQ0Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQ3hCLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cz9iOWFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS5qc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBJQ29udGFjdEZvcm0sIElEZXZlbG9wZXJQcm9maWxlLCBJVXNlciwgSVVzZXJMb2dpbiwgSVVzZXJSZXNldFBhc3N3b3JkLCBJVXNlclNlbmRPVFAsIElWZXJpZnlPdHAgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xyXG5pbXBvcnQge0lDb21wYW55UmVnaXN0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL29yZ2FuaXNhdGlvbic7XHJcbmltcG9ydCB7IElKb2JBcHBsaWNhdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvSUpvYkFwcGxpY2F0aW9uJztcclxuXHJcbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XHJcbmNvbnN0IHJlbmRlclVybCA9IFwiaHR0cHM6Ly92aWNvbmV0LXZlcmNlbC52ZXJjZWwuYXBwXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHBheWxvYWQ6SVVzZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3VzZXJzYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiBcclxuICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgIFxyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVzZXJMb2dpbihwYXlsb2FkOklVc2VyTG9naW4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL2xvZ2luYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCB5b3UgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIG9yIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2UuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignbG9naW4gZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljKHByb2ZpbGVQaWM6IEZvcm1EYXRhLCB1c2VySWQ6c3RyaW5nKXtcclxuXHJcbiAgY29uc3QgY29uZmlnID0geyAgICAgXHJcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwifSxcclxuICAgICAgXHJcbiAgfVxyXG4gY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvdXBsb2FkX3Byb2ZpbGVwaWN0dXJlLyR7dXNlcklkfWAsIHByb2ZpbGVQaWMsIGNvbmZpZylcclxuIGNvbnNvbGUubG9nKFwicHJvZmlsZVBpY1Jlc1wiLCByZXNwKVxyXG4gcmV0dXJuIHJlc3A7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0RGV2ZWxvcGVyUHJvZmlsZShpZDpzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkvcGVyc29ubmVsQnlVc2VySWQvJHtpZH1gKTtcclxuZGVidWdnZXI7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3JldHJpZXZlIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0U3RhZmZJbmZvKGlkOnN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9L2FwaS9zdGFmZnVzZXIvJHtpZH1gKTtcclxuZGVidWdnZXI7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3JldHJpZXZlIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENyZWF0ZURldmVsb3BlclByb2ZpbGUocGF5bG9hZDpJRGV2ZWxvcGVyUHJvZmlsZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvcGVyc29ubmVsYCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VwZGF0ZSBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZURldmVsb3BlclByb2ZpbGUocGF5bG9hZDpJRGV2ZWxvcGVyUHJvZmlsZSwgaWQ6c3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9wZXJzb25uZWwvJHtpZH1gLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcigndXBkYXRlIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQb3N0Q29udGFjdChwYXlsb2FkOklDb250YWN0Rm9ybSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vZW92MmJzZmU4YWN3emM2Lm0ucGlwZWRyZWFtLm5ldGAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXBkYXRlIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZENWKGZvcm1EYXRhOiBGb3JtRGF0YSl7XHJcblxyXG4gIGNvbnN0IGNvbmZpZyA9IHsgICAgIFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIn0sXHJcbiAgICAgIFxyXG4gIH1cclxuIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3VwbG9hZF9jdi8xYCwgZm9ybURhdGEsIGNvbmZpZylcclxuIHJldHVybiByZXNwO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDcmVhdGVKb2IocGF5bG9hZDpJSm9iQXBwbGljYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL2pvYkFwcGxpY2F0aW9uc2AsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvZ2luIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUpvYihwYXlsb2FkOklKb2JBcHBsaWNhdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL2pvYkFwcGxpY2F0aW9uc2AsIHBheWxvYWQpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSm9iIFVwZGF0ZWQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdKb2Igbm90IHVwZGF0ZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXRBcHBsaWNhbnRQcm9maWxlKGlkOnN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvbG9naW4vJHtpZH1gKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdsb2dpbiBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQYXNzd29yZChwYXlsb2FkOklVc2VyUmVzZXRQYXNzd29yZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3JlbmRlclVybH0vYXBpL3VzZXIvcmVzZXRQYXNzd29yZGAsIHBheWxvYWQpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAvLyBSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCwgeW91IGNhbiByZWRpcmVjdCB0aGUgdXNlciBvciBzaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzd29yZCByZXNldCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFzc3dvcmQgcmVzZXQgZmFpbGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRPVFAocGF5bG9hZDpJVXNlclNlbmRPVFApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtyZW5kZXJVcmx9L2FwaS91c2VyL3NlbmRPVFBgLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ290cCBzZW50IHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICBpZiAoIHJlc3BvbnNlLmRhdGEuX2RvYyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLl9kb2M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyT3JnYW5pc2F0aW9uKHBheWxvYWQ6IElDb21wYW55UmVnaXN0ZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9vcmdhbmlzYXRpb25gLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzd29yZCByZXNldCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFzc3dvcmQgcmVzZXQgZmFpbGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5T3RwKHBheWxvYWQ6SVZlcmlmeU90cCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3VzZXJzL3ZlcmlmeWAsIHBheWxvYWQpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuXHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDApe1xyXG4gICAgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1lbHNleyAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ290cCB2ZXJpZmllZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXJsIiwicmVuZGVyVXJsIiwicmVnaXN0ZXJVc2VyIiwicGF5bG9hZCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlVzZXJMb2dpbiIsImRhdGEiLCJ1cGxvYWRQcm9maWxlUGljIiwicHJvZmlsZVBpYyIsInVzZXJJZCIsImNvbmZpZyIsImhlYWRlcnMiLCJyZXNwIiwiR2V0RGV2ZWxvcGVyUHJvZmlsZSIsImlkIiwiZ2V0IiwiR2V0U3RhZmZJbmZvIiwiQ3JlYXRlRGV2ZWxvcGVyUHJvZmlsZSIsIlVwZGF0ZURldmVsb3BlclByb2ZpbGUiLCJQb3N0Q29udGFjdCIsInVwbG9hZENWIiwiZm9ybURhdGEiLCJDcmVhdGVKb2IiLCJVcGRhdGVKb2IiLCJHZXRBcHBsaWNhbnRQcm9maWxlIiwicmVzZXRQYXNzd29yZCIsInNlbmRPVFAiLCJfZG9jIiwicmVnaXN0ZXJPcmdhbmlzYXRpb24iLCJ2ZXJpZnlPdHAiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/endpoints/api.ts\n"));

/***/ })

});