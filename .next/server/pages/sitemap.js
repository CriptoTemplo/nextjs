"use strict";
(() => {
var exports = {};
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 2682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5553);




const Sitemap = ({ content  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default().sanitize(content)
            }
        })
    });
const getStaticProps = async ()=>{
    const sitemapHTML = await _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getSitemap */ .Z.getSitemap();
    const content = sitemapHTML.content;
    return {
        props: {
            content
        },
        revalidate: 1800 // regenerate every 30 minutes (1800 seconds)
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);


/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [553], () => (__webpack_exec__(2682)));
module.exports = __webpack_exports__;

})();