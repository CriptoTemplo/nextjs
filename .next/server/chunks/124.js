"use strict";
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 4244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4862);
/* harmony import */ var _utils_withRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3433);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





class SectionWrapper extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sectionWrapperPosts",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: this.props.title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "postsWrapper",
                    children: this.renderSectionPostAll()
                })
            ]
        });
    }
    renderSectionPost(post, index) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "post",
            onClick: ()=>this.redirect(post.url),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: _definitions_global__WEBPACK_IMPORTED_MODULE_2__/* ["default"].hostFront */ .ZP.hostFront + "/" + post.url,
                onClick: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "imageWrapper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "coverImage",
                            src: _definitions_global__WEBPACK_IMPORTED_MODULE_2__/* ["default"].host */ .ZP.host + post.coverImage.formats.small.url,
                            alt: post.coverImage.alternativeText,
                            width: 300,
                            height: 300
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cardTitle",
                                children: post.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "extraInfo",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "difficulty",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: post.difficulty
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "publishedDate",
                                        children: this.formatDate(post.updatedAt)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "readTime",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "icon"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    " ",
                                                    post.readTime + "min.",
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }, index);
    }
    renderSectionPostAll() {
        return this.props.posts.map((post, index)=>{
            return this.renderSectionPost(post, index);
        });
    }
    redirect(URL) {
        const postLink = "/" + URL;
        this.props.navigateWrapped(postLink);
    }
    formatDate(date) {
        const auxDate = new Date(date);
        const options = {
            month: "short"
        };
        let month = auxDate.toLocaleDateString("es-ES", options);
        month = month.charAt(0).toUpperCase() + month.slice(1);
        return auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_withRouter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(SectionWrapper));


/***/ }),

/***/ 7834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3444);


// import {Headers} from 'node-fetch';
class PostStore {
    // static basicHeaders = this.constructHeaders();
    static host = _definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host;
    static async getAllPosts() {
        let url = new URL(PostStore.host + "/posts");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoPosts() {
        let url = new URL(PostStore.host + "/crypto-posts");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoPost(id) {
        let url = new URL(PostStore.host + "/crypto-posts/" + id);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoArticle(id) {
        let url = new URL(PostStore.host + "/crypto-articles/" + id);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
}


/***/ })

};
;