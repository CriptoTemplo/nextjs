"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CryptoStore)
/* harmony export */ });
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3444);
/* harmony import */ var _PostStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);


// import {Headers} from 'node-fetch';
// https://www.coingecko.com/es/api/documentation
class CryptoStore {
    // static basicHeaders = this.constructHeaders();
    static host = "https://api.coingecko.com/api/v3";
    static async getAllCoins(page, per_page) {
        let url = new URL(CryptoStore.host + "/coins/markets");
        url.searchParams.append("vs_currency", "usd");
        url.searchParams.append("order", "market_cap_desc");
        url.searchParams.append("page", (page || 1).toString());
        url.searchParams.append("per_page", (per_page || 250).toString());
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    /*  Get historical market data include price, market cap, and 24h volume (granularity auto)

        Data granularity is automatic (cannot be adjusted)
        1 day from current time = 5 minute interval data
        1 - 90 days from current time = hourly data
        above 90 days from current time = daily data (00:00 UTC)
    */ static async getHistoricalCoin(id, days) {
        let url = new URL(CryptoStore.host + "/coins/" + id + "/market_chart");
        url.searchParams.append("vs_currency", "usd");
        url.searchParams.append("days", days.toString());
        // Aqui hay un parametro mas llamado interval, imagino que para poner HOURLY, DAILY, WEEKLY, MONTHLY, ETC...
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    /*  Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)

        Data granularity is automatic (cannot be adjusted)
        1 day from current time = 5 minute interval data
        1 - 90 days from current time = hourly data
        above 90 days from current time = daily data (00:00 UTC)
    */ static async getHistoricalCoinRange(id, from, to) {
        let url = new URL(CryptoStore.host + "/coins/" + id + "/market_chart/range");
        url.searchParams.append("vs_currency", "usd");
        url.searchParams.append("from", from.toString());
        url.searchParams.append("to", to.toString());
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCurrentData(id) {
        let url = new URL(CryptoStore.host + "/coins/" + id);
        url.searchParams.append("localization", "false");
        url.searchParams.append("tickers", "false");
        url.searchParams.append("market_data", "true");
        url.searchParams.append("community_data", "false");
        url.searchParams.append("developer_data", "false");
        url.searchParams.append("sparkline", "false");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCrypto(slug) {
        let url = new URL(_PostStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].host */ .Z.host + "/cryptos/" + slug);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCryptoAll(page, per_page, sortField) {
        let url = new URL(_PostStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].host */ .Z.host + "/cryptos");
        url.searchParams.append("_sort", sortField || "market_cap_rank");
        url.searchParams.append("_start", (page || 0).toString());
        url.searchParams.append("_limit", (per_page || 100).toString());
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCryptoCount() {
        let url = new URL(_PostStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].host */ .Z.host + "/cryptos/count");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
}


/***/ })

};
;