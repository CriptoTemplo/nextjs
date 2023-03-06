"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 3433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const history = [];
// eslint-disable-next-line react/display-name
const withRouter = (Component)=>(props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const params = router.query;
        const navigateWrapped = (url)=>{
            if (url !== router.pathname) {
                history.push(router.asPath);
                return router.push(url);
            }
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        const checkHistory = (key)=>{
            return history.includes(key);
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props,
            router,
            params,
            navigateWrapped,
            checkHistory
        });
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRouter);


/***/ })

};
;