"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalCache)
/* harmony export */ });
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5165);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);


class GlobalCache {
    static converter = new showdown__WEBPACK_IMPORTED_MODULE_0__.Converter();
    static numberFormatter = new Intl.NumberFormat("es-ES");
    static numberFormatter2decimals = new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    static numberFormatter0decimals = new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    static cryptoTemplate = _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCryptoTemplate */ .Z.getCryptoTemplate();
    static dateFormatter = new Intl.DateTimeFormat("es-ES");
}


/***/ }),

/***/ 9927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _definitions_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2545);

class Utils {
    static isObjectEmpty(object) {
        return !Object.keys(object).length;
    }
    static formatNumber(value) {
        if (!value) return "-";
        return _definitions_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(value);
    }
    // TODO la comparacion es un if ridiculo
    static formatNumberWithDollar(value) {
        if (!value) return "-";
        return _definitions_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(value) + "$";
    }
    static formatNumberNonNullCheck(value) {
        return _definitions_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(value);
    }
    // TODO la comparacion es un if ridiculo
    static formatNumberWithDollarNonNullCheck(value) {
        return _definitions_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(value) + "$";
    }
    // Output: 14 Dic, 2022
    static formatDateDayShortMonthYear(date) {
        const auxDate = new Date(date);
        const options = {
            month: "short"
        };
        let month = auxDate.toLocaleDateString("es-ES", options);
        month = month.charAt(0).toUpperCase() + month.slice(1);
        return auxDate.getDate() + " " + month + "," + " " + auxDate.getFullYear();
    }
    static roundToTwo(number) {
        return +(Math.round(number + "e+2") + "e-2");
    }
    static roundToOne(number) {
        return +(Math.round(number + "e+2") + "e-1");
    }
}


/***/ })

};
;