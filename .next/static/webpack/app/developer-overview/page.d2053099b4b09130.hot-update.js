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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateDeveloperProfile: function() { return /* binding */ CreateDeveloperProfile; },\n/* harmony export */   CreateJob: function() { return /* binding */ CreateJob; },\n/* harmony export */   GetApplicantProfile: function() { return /* binding */ GetApplicantProfile; },\n/* harmony export */   GetDeveloperProfile: function() { return /* binding */ GetDeveloperProfile; },\n/* harmony export */   GetStaffInfo: function() { return /* binding */ GetStaffInfo; },\n/* harmony export */   PostContact: function() { return /* binding */ PostContact; },\n/* harmony export */   UpdateDeveloperProfile: function() { return /* binding */ UpdateDeveloperProfile; },\n/* harmony export */   UpdateJob: function() { return /* binding */ UpdateJob; },\n/* harmony export */   UserLogin: function() { return /* binding */ UserLogin; },\n/* harmony export */   registerOrganisation: function() { return /* binding */ registerOrganisation; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   resetPassword: function() { return /* binding */ resetPassword; },\n/* harmony export */   sendOTP: function() { return /* binding */ sendOTP; },\n/* harmony export */   uploadCV: function() { return /* binding */ uploadCV; },\n/* harmony export */   uploadProfilePic: function() { return /* binding */ uploadProfilePic; },\n/* harmony export */   verifyOtp: function() { return /* binding */ verifyOtp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// api.js\n\nconst url = \"http://localhost:8080\";\nconst renderUrl = \"https://viconet-vercel.vercel.app\";\nasync function registerUser(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Registration successful\");\n            return true;\n        } else {\n            console.error(\"Registration failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UserLogin(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"login successful\");\n            return response.data;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadProfilePic(profilePic, userId) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_profilepicture/\").concat(userId), profilePic, config);\n    console.log(\"profilePicRes\", resp);\n    return resp;\n}\nasync function GetDeveloperProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/personnelByUserId/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            // Registration failed, handle error (e.g., display error message).\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function GetStaffInfo(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(url, \"/api/staffuser/\").concat(id));\n        debugger;\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"retrieved successful\");\n            return response;\n        } else {\n            console.error(\"retrieve failed\");\n            return response;\n        }\n    } catch (error) {\n        // Handle network or other errors\n        console.error(\"Error:\", error);\n        return error;\n    }\n}\nasync function CreateDeveloperProfile(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateDeveloperProfile(payload, id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/personnel/\").concat(id), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function PostContact(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://eov2bsfe8acwzc6.m.pipedream.net\", payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"update successful\");\n            return true;\n        } else {\n            console.error(\"update failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function uploadCV(formData) {\n    const config = {\n        headers: {\n            \"content-type\": \"multipart/form-data\",\n            \"Access-Control-Allow-Origin\": \"*\"\n        }\n    };\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/upload_cv/1\"), formData, config);\n    return resp;\n}\nasync function CreateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function UpdateJob(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/jobApplications\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"Job Updated\");\n            return true;\n        } else {\n            console.error(\"Job not updated\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function GetApplicantProfile(id) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/login/\").concat(id));\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"login successful\");\n            return true;\n        } else {\n            console.error(\"login failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function resetPassword(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/resetPassword\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            // Registration successful, you can redirect the user or show a success message.\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function sendOTP(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(renderUrl, \"/api/user/sendOTP\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"otp sent successful\");\n            if (response.data._doc) {\n                return response.data._doc;\n            } else {\n                return false;\n            }\n        } else {\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function registerOrganisation(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/organisation\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            console.log(\"password reset successful\");\n            return true;\n        } else {\n            console.error(\"password reset failed\");\n            return false;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\nasync function verifyOtp(payload) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(url, \"/api/users/verify\"), payload);\n        if (response.status === 200 || response.status === 201) {\n            if (response.data.code === 400) {\n                return false;\n            } else {\n                console.log(\"otp verified successful\");\n                return true;\n            }\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return false;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW5kcG9pbnRzL2FwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVM7QUFDaUI7QUFLMUIsTUFBTUMsTUFBTTtBQUNaLE1BQU1DLFlBQVk7QUFFWCxlQUFlQyxhQUFhQyxPQUFhO0lBQzlDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0REMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBTztRQUNULE9BQU87WUFFTEQsUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBRWRGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDLFVBQVVQLE9BQWtCO0lBQ2hELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLGVBQWFHO1FBRXRELElBQUlDLFNBQVNFLE1BQU0sS0FBSyxPQUFPRixTQUFTRSxNQUFNLEtBQUssS0FBSztZQUN0RCxnRkFBZ0Y7WUFDaEZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9KLFNBQVNPLElBQUk7UUFDdEIsT0FBTztZQUNMLG1FQUFtRTtZQUNuRUosUUFBUUUsS0FBSyxDQUFDO1lBQ2QsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQSxPQUFPO1FBQ2QsaUNBQWlDO1FBQ2pDRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlRyxpQkFBaUJDLFVBQW9CLEVBQUVDLE1BQWE7SUFFeEUsTUFBTUMsU0FBUztRQUNYQyxTQUFTO1lBQUUsZ0JBQWdCO1lBQXdCLCtCQUEr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QUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFld0IscUJBQXFCOUIsT0FBeUI7SUFDbEUsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNNLElBQUksQ0FBQyxHQUFPLE9BQUpMLEtBQUksc0JBQW9CRztRQUU3RCxJQUFJQyxTQUFTRSxNQUFNLEtBQUssT0FBT0YsU0FBU0UsTUFBTSxLQUFLLEtBQUs7WUFFdERDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU87UUFDVCxPQUFPO1lBQ0xELFFBQVFFLEtBQUssQ0FBQztZQUNkLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0EsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0Y7QUFHTyxlQUFleUIsVUFBVS9CLE9BQWtCO0lBQ2hELElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQUMsR0FBTyxPQUFKTCxLQUFJLHNCQUFvQkc7UUFFN0QsSUFBSUMsU0FBU0UsTUFBTSxLQUFLLE9BQU9GLFNBQVNFLE1BQU0sS0FBSyxLQUFLO1lBRXRELElBQUdGLFNBQVNPLElBQUksQ0FBQ3dCLElBQUksS0FBSyxLQUFJO2dCQUU1QixPQUFPO1lBRVQsT0FBSztnQkFDRDVCLFFBQVFDLEdBQUcsQ0FBQztnQkFDZCxPQUFPO1lBRVQ7UUFDRjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9lbmRwb2ludHMvYXBpLnRzP2I5YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpLmpzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IElDb250YWN0Rm9ybSwgSURldmVsb3BlclByb2ZpbGUsIElVc2VyLCBJVXNlckxvZ2luLCBJVXNlclJlc2V0UGFzc3dvcmQsIElVc2VyU2VuZE9UUCwgSVZlcmlmeU90cCB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlcic7XHJcbmltcG9ydCB7SUNvbXBhbnlSZWdpc3RlciB9IGZyb20gJy4uL2ludGVyZmFjZXMvb3JnYW5pc2F0aW9uJztcclxuaW1wb3J0IHsgSUpvYkFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9JSm9iQXBwbGljYXRpb24nO1xyXG5cclxuY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcclxuY29uc3QgcmVuZGVyVXJsID0gXCJodHRwczovL3ZpY29uZXQtdmVyY2VsLnZlcmNlbC5hcHBcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIocGF5bG9hZDpJVXNlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvdXNlcnNgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuIFxyXG4gICAgICBjb25zb2xlLmVycm9yKCdSZWdpc3RyYXRpb24gZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgXHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVXNlckxvZ2luKHBheWxvYWQ6SVVzZXJMb2dpbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvbG9naW5gLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gZmFpbGVkLCBoYW5kbGUgZXJyb3IgKGUuZy4sIGRpc3BsYXkgZXJyb3IgbWVzc2FnZSkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvZ2luIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQcm9maWxlUGljKHByb2ZpbGVQaWM6IEZvcm1EYXRhLCB1c2VySWQ6c3RyaW5nKXtcclxuXHJcbiAgY29uc3QgY29uZmlnID0geyAgICAgXHJcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwifSxcclxuICAgICAgXHJcbiAgfVxyXG4gY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvdXBsb2FkX3Byb2ZpbGVwaWN0dXJlLyR7dXNlcklkfWAsIHByb2ZpbGVQaWMsIGNvbmZpZylcclxuIGNvbnNvbGUubG9nKFwicHJvZmlsZVBpY1Jlc1wiLCByZXNwKVxyXG4gcmV0dXJuIHJlc3A7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0RGV2ZWxvcGVyUHJvZmlsZShpZDpzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkvcGVyc29ubmVsQnlVc2VySWQvJHtpZH1gKTtcclxuZGVidWdnZXI7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQsIGhhbmRsZSBlcnJvciAoZS5nLiwgZGlzcGxheSBlcnJvciBtZXNzYWdlKS5cclxuICAgICAgY29uc29sZS5lcnJvcigncmV0cmlldmUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEhhbmRsZSBuZXR3b3JrIG9yIG90aGVyIGVycm9yc1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldFN0YWZmSW5mbyhpZDpzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9hcGkvc3RhZmZ1c2VyLyR7aWR9YCk7XHJcbmRlYnVnZ2VyO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZXRyaWV2ZWQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdyZXRyaWV2ZSBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gSGFuZGxlIG5ldHdvcmsgb3Igb3RoZXIgZXJyb3JzXHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDcmVhdGVEZXZlbG9wZXJQcm9maWxlKHBheWxvYWQ6SURldmVsb3BlclByb2ZpbGUpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL3BlcnNvbm5lbGAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXBkYXRlIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1cGRhdGUgZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVEZXZlbG9wZXJQcm9maWxlKHBheWxvYWQ6SURldmVsb3BlclByb2ZpbGUsIGlkOnN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvcGVyc29ubmVsLyR7aWR9YCwgcGF5bG9hZCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VwZGF0ZSBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUG9zdENvbnRhY3QocGF5bG9hZDpJQ29udGFjdEZvcm0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL2VvdjJic2ZlOGFjd3pjNi5tLnBpcGVkcmVhbS5uZXRgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcigndXBkYXRlIGZhaWxlZCcpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7O1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRDVihmb3JtRGF0YTogRm9ybURhdGEpe1xyXG5cclxuICBjb25zdCBjb25maWcgPSB7ICAgICBcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJ9LFxyXG4gICAgICBcclxuICB9XHJcbiBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91cGxvYWRfY3YvMWAsIGZvcm1EYXRhLCBjb25maWcpXHJcbiByZXR1cm4gcmVzcDtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlSm9iKHBheWxvYWQ6SUpvYkFwcGxpY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9qb2JBcHBsaWNhdGlvbnNgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdsb2dpbiBmYWlsZWQnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBVcGRhdGVKb2IocGF5bG9hZDpJSm9iQXBwbGljYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS9qb2JBcHBsaWNhdGlvbnNgLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0pvYiBVcGRhdGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignSm9iIG5vdCB1cGRhdGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR2V0QXBwbGljYW50UHJvZmlsZShpZDpzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3VybH0vYXBpL2xvZ2luLyR7aWR9YCk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignbG9naW4gZmFpbGVkJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQocGF5bG9hZDpJVXNlclJlc2V0UGFzc3dvcmQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtyZW5kZXJVcmx9L2FwaS91c2VyL3Jlc2V0UGFzc3dvcmRgLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdGhlIHVzZXIgb3Igc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZS5cclxuICAgICAgICBjb25zb2xlLmxvZygncGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Bhc3N3b3JkIHJlc2V0IGZhaWxlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT1RQKHBheWxvYWQ6SVVzZXJTZW5kT1RQKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cmVuZGVyVXJsfS9hcGkvdXNlci9zZW5kT1RQYCwgcGF5bG9hZCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvdHAgc2VudCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgICAgaWYgKCByZXNwb25zZS5kYXRhLl9kb2Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5fZG9jO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlck9yZ2FuaXNhdGlvbihwYXlsb2FkOiBJQ29tcGFueVJlZ2lzdGVyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7dXJsfS9hcGkvb3JnYW5pc2F0aW9uYCwgcGF5bG9hZCk7XHJcbiAgXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Bhc3N3b3JkIHJlc2V0IGZhaWxlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTs7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeU90cChwYXlsb2FkOklWZXJpZnlPdHApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHt1cmx9L2FwaS91c2Vycy92ZXJpZnlgLCBwYXlsb2FkKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcblxyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuY29kZSA9PT0gNDAwKXtcclxuICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9ZWxzZXsgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvdHAgdmVyaWZpZWQgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVybCIsInJlbmRlclVybCIsInJlZ2lzdGVyVXNlciIsInBheWxvYWQiLCJyZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJVc2VyTG9naW4iLCJkYXRhIiwidXBsb2FkUHJvZmlsZVBpYyIsInByb2ZpbGVQaWMiLCJ1c2VySWQiLCJjb25maWciLCJoZWFkZXJzIiwicmVzcCIsIkdldERldmVsb3BlclByb2ZpbGUiLCJpZCIsImdldCIsIkdldFN0YWZmSW5mbyIsIkNyZWF0ZURldmVsb3BlclByb2ZpbGUiLCJVcGRhdGVEZXZlbG9wZXJQcm9maWxlIiwiUG9zdENvbnRhY3QiLCJ1cGxvYWRDViIsImZvcm1EYXRhIiwiQ3JlYXRlSm9iIiwiVXBkYXRlSm9iIiwiR2V0QXBwbGljYW50UHJvZmlsZSIsInJlc2V0UGFzc3dvcmQiLCJzZW5kT1RQIiwiX2RvYyIsInJlZ2lzdGVyT3JnYW5pc2F0aW9uIiwidmVyaWZ5T3RwIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/endpoints/api.ts\n"));

/***/ })

});