"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GuiaStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3444);


class GuiaStore {
    // static basicHeaders = this.constructHeaders();
    static host = _definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host;
    //TODO esta mal
    static async getLandingGuias() {
        let url = new URL(GuiaStore.host + "/guias");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCategories() {
        let url = new URL(GuiaStore.host + "/categories");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCategoriesCustom(where, populate) {
        let url = new URL(GuiaStore.host + "/categories");
        if (where) url.searchParams.append("_where", "[" + where[0] + "]" + "=" + where[1]);
        if (populate) url.searchParams.append("_populate", populate); // TODO Esta mierda no va
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCategory(id) {
        let url = new URL(GuiaStore.host + "/categories/" + id);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getGuias(limit, order, nonUrl, where) {
        let url = new URL(GuiaStore.host + "/guias");
        url.searchParams.append("_limit", (limit || 100).toString());
        url.searchParams.append("_sort", "createdAt:" + (order || "DESC"));
        if (nonUrl) url.searchParams.append("URL_ne", nonUrl);
        if (where) url.searchParams.append("_where", "[" + where[0] + "]" + "=" + where[1]);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getGuia(id) {
        let url = new URL(GuiaStore.host + "/guias/" + id);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getGuiasFindRelationedGuias(categories, nonUrl) {
        let url = new URL(GuiaStore.host + "/guias/findRelationedGuias");
        url.searchParams.append("categories", categories.join(","));
        url.searchParams.append("url", nonUrl);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getGuiasFromAuthor(authorUrl) {
        let url = new URL(GuiaStore.host + "/guias/findFromAuthor");
        url.searchParams.append("authorUrl", authorUrl);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async incrementViews(id) {
        let url = new URL(GuiaStore.host + "/guias/" + id + "/views");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "PUT", "");
    }
}


/***/ })

};
;