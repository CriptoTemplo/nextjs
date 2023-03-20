"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5651);
/* harmony import */ var _components_sectionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2366);
/* harmony import */ var _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5553);
/* harmony import */ var _utils_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6337);
/* harmony import */ var _stores_GuiaStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7441);






function Home(props) {
    const getMetaTags = ()=>{
        return {
            title: props.landingInfo.MetaTags.title,
            description: props.landingInfo.MetaTags.description,
            canonical: "",
            published_time: props.landingInfo.published_at,
            modified_time: props.landingInfo.updatedAt
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,_utils_helmet__WEBPACK_IMPORTED_MODULE_4__/* .getHead */ .c)(getMetaTags()),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "home",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "articleWrapper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Article__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            content: props.landingInfo.content
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sectionWrapper latestPosts",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sectionWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            title: "\xdaltimas Publicaciones",
                            guias: props.guias
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    try {
        const [landingInfo, guias] = await Promise.all([
            _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getLanding */ .Z.getLanding(),
            _stores_GuiaStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getGuias */ .Z.getGuias(6, "DESC")
        ]);
        return {
            props: {
                landingInfo,
                guias
            }
        };
    } catch (error) {
        throw new Error("Ha fallado algo");
    }
};


/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5165:
/***/ ((module) => {

module.exports = require("showdown");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,553,927,337,441,651,366], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();