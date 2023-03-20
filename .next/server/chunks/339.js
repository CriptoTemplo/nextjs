"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 1339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CryptoStore)
});

// EXTERNAL MODULE: ./stores/BasicStore.ts
var BasicStore = __webpack_require__(3444);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
;// CONCATENATED MODULE: ./stores/PostStore.ts


// import {Headers} from 'node-fetch';
class PostStore {
    // static basicHeaders = this.constructHeaders();
    static host = global/* default.host */.ZP.host;
    static async getAllPosts() {
        let url = new URL(PostStore.host + "/posts");
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoPosts() {
        let url = new URL(PostStore.host + "/crypto-posts");
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoPost(id) {
        let url = new URL(PostStore.host + "/crypto-posts/" + id);
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoArticle(id) {
        let url = new URL(PostStore.host + "/crypto-articles/" + id);
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
}

;// CONCATENATED MODULE: ./stores/CryptoStore.ts


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
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
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
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
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
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
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
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCrypto(slug) {
        let url = new URL(PostStore.host + "/cryptos/" + slug);
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCryptoAll(page, per_page, sortField) {
        let url = new URL(PostStore.host + "/cryptos");
        url.searchParams.append("_sort", sortField || "market_cap_rank");
        url.searchParams.append("_start", (page || 0).toString());
        url.searchParams.append("_limit", (per_page || 100).toString());
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
    static async getStrapiCryptoCount() {
        let url = new URL(PostStore.host + "/cryptos/count");
        const urlString = url.toString();
        return BasicStore/* default.baseFetch */.Z.baseFetch(urlString, "GET", "");
    }
}


/***/ })

};
;