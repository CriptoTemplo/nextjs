"use strict";
exports.id = 651;
exports.ids = [651];
exports.modules = {

/***/ 5651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _definitions_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2545);






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
        const content = this.convertMarkDown(this.props.content);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_3___default().sanitize(content)
                }
            })
        });
    }
    convertMarkDown(content) {
        return _definitions_cache__WEBPACK_IMPORTED_MODULE_4__/* ["default"].converter.makeHtml */ .Z.converter.makeHtml(content);
    }
}


/***/ })

};
;