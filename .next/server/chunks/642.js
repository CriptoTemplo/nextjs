exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 2243:
/***/ ((module) => {

// Exports
module.exports = {
	"authorBanner": "authorBanner_authorBanner__NNpQA",
	"imageWrapper": "authorBanner_imageWrapper__KRWiU",
	"coverImage": "authorBanner_coverImage__YWmcy",
	"rightSide": "authorBanner_rightSide__yrcqR",
	"h1": "authorBanner_h1__d4k_V",
	"socialWrapper": "authorBanner_socialWrapper__KW6ek",
	"quote": "authorBanner_quote__MAKkz",
	"authorCard": "authorBanner_authorCard__3DwII"
};


/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Article)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9927);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3__);





class Article extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"].isObjectEmpty */ .Z.isObjectEmpty(this.props)) return "";
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "article",
            children: this.mountHtmlContent()
        });
    }
    mountHtmlContent() {
        const content = this.props.content;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(content)
                }
            })
        });
    }
}


/***/ }),

/***/ 8957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthorStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3444);


class AuthorStore {
    static host = _definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/authors";
    static async find() {
        let url = new URL(AuthorStore.host);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async findOne(Url) {
        let url = new URL(AuthorStore.host + "/" + Url);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
}


/***/ })

};
;