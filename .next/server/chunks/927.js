"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalCache)
/* harmony export */ });
/* harmony import */ var _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5553);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4862);




class GlobalCache {
    static numberFormatter = new Intl.NumberFormat("es-ES");
    static numberFormatter2decimals = new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    static numberFormatter0decimals = new Intl.NumberFormat("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    static cryptoTemplate = _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCryptoTemplate */ .Z.getCryptoTemplate();
    static dateFormatter = new Intl.DateTimeFormat("es-ES");
    static toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    static addSanitizeHook = ()=>{
        isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_2___default().addHook("afterSanitizeAttributes", function(node) {
            // set all elements owning target to target=_blank
            if ("target" in node) {
                const href = node.getAttribute("href") ?? "";
                const isInternal = href.startsWith(_global__WEBPACK_IMPORTED_MODULE_3__/* ["default"].hostFront */ .ZP.hostFront);
                if (isInternal) return;
                let rel = node.getAttribute("rel") ?? "";
                if (!rel) {
                    node.setAttribute("rel", "noopener noreferrer nofollow");
                } else if (!rel.includes("noopener noreferrer")) {
                    node.setAttribute("rel", "noopener noreferrer nofollow");
                }
                node.setAttribute("target", "_blank");
            }
        });
    };
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
    static idGeneratorFromString(string) {
        // Replace spaces with "-"
        string = string.replace(/\s+/g, "-");
        // Remove Spanish accents
        string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return string;
    }
    static loadTwitterScript() {
        if (false) {}
    }
}


/***/ })

};
;