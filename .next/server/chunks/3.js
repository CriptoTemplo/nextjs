exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 7103:
/***/ ((module) => {

// Exports
module.exports = {
	"cryptoCard": "cryptoCard_cryptoCard__SnKol",
	"mainData": "cryptoCard_mainData__TzRNj",
	"imgRank": "cryptoCard_imgRank__V0GYL",
	"symbol": "cryptoCard_symbol__hmKUE",
	"property": "cryptoCard_property__XIAys"
};


/***/ }),

/***/ 3003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CryptoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7103);
/* harmony import */ var _styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




// TODO cada x segundos volvemos a coger los datos y hacemos un setState
class CryptoCard extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.state = {
            cryptoDetailed: {}
        };
    }
    render() {
        const crypto = this.props.crypto;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cryptoCard),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mainData),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imgRank),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: crypto.image,
                                alt: "Logo de la Criptomoneda " + crypto.name,
                                width: 50,
                                height: 50
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: crypto.name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().symbol),
                            children: [
                                "\xa0",
                                "(" + crypto.ticket.toUpperCase() + ")"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "Precio"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.current_price)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "Puesto"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: crypto.market_cap_rank
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "Cap. de Mercado"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.market_cap)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "Acciones en Circulaci\xf3n"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.circulating_supply, true)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "Acciones Totales"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.max_supply, true)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "M\xe1ximo Hist\xf3rico"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.ath)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().property),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                            children: "M\xednimo Hist\xf3rico"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_cryptoCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                            children: this.formatNumber(crypto.atl)
                        })
                    ]
                })
            ]
        });
    }
    formatNumber(value, withoutDollar) {
        if (!value) return "-";
        const x = new Intl.NumberFormat("es-ES");
        return x.format(value) + (withoutDollar ? "" : "$");
    }
}


/***/ })

};
;