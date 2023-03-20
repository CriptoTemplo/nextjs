"use strict";
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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ErrorPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.replace(\"/\");\n    });\n    return null;\n};\n/* Additionally, we're using the getInitialProps method to handle the server-side rendering of the error page.\r\nIf there's a server-side error, we're redirecting to the home page using the res.writeHead method. */ ErrorPage.getInitialProps = ({ res  })=>{\n    if (res) {\n        res.writeHead(302, {\n            Location: \"/\"\n        });\n        res.end();\n    }\n    return {};\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ047QUFFbEMsTUFBTUUsWUFBWSxJQUFNO0lBQ3ZCLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNmRSxPQUFPQyxPQUFPLENBQUM7SUFDaEI7SUFFQSxPQUFPLElBQUk7QUFFWjtBQUVBO21HQUNtRyxHQUNuR0YsVUFBVUcsZUFBZSxHQUFHLENBQUMsRUFBRUMsSUFBRyxFQUFtQixHQUFLO0lBQ3pELElBQUlBLEtBQUs7UUFDUkEsSUFBSUMsU0FBUyxDQUFDLEtBQUs7WUFDbEJDLFVBQVU7UUFDWDtRQUNBRixJQUFJRyxHQUFHO0lBQ1IsQ0FBQztJQUVELE9BQU8sQ0FBQztBQUNUO0FBRUEsaUVBQWVQLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9wYWdlcy9fZXJyb3IudHN4PzI2MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRXJyb3JQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cm91dGVyLnJlcGxhY2UoJy8nKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIG51bGw7XHJcblxyXG59O1xyXG5cclxuLyogQWRkaXRpb25hbGx5LCB3ZSdyZSB1c2luZyB0aGUgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZCB0byBoYW5kbGUgdGhlIHNlcnZlci1zaWRlIHJlbmRlcmluZyBvZiB0aGUgZXJyb3IgcGFnZS5cclxuSWYgdGhlcmUncyBhIHNlcnZlci1zaWRlIGVycm9yLCB3ZSdyZSByZWRpcmVjdGluZyB0byB0aGUgaG9tZSBwYWdlIHVzaW5nIHRoZSByZXMud3JpdGVIZWFkIG1ldGhvZC4gKi9cclxuRXJyb3JQYWdlLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcyB9OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcclxuXHRpZiAocmVzKSB7XHJcblx0XHRyZXMud3JpdGVIZWFkKDMwMiwge1xyXG5cdFx0XHRMb2NhdGlvbjogJy8nLFxyXG5cdFx0fSk7XHJcblx0XHRyZXMuZW5kKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkVycm9yUGFnZSIsInJvdXRlciIsInJlcGxhY2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_error.tsx"));
module.exports = __webpack_exports__;

})();