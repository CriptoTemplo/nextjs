"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Criptomonedas),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Article.tsx
var Article = __webpack_require__(5651);
;// CONCATENATED MODULE: ./definitions/crypto.ts
var ECryptoFields;
(function(ECryptoFields) {
    ECryptoFields["name"] = "name";
    ECryptoFields["price"] = "price";
    ECryptoFields["volume24h"] = "total_volume";
    ECryptoFields["market_cap_rank"] = "market_cap_rank";
    ECryptoFields["market_cap"] = "market_cap";
    ECryptoFields["circulating_supply"] = "circulating_supply";
    ECryptoFields["price24h"] = "price_change_percentage_24h";
})(ECryptoFields || (ECryptoFields = {}));

;// CONCATENATED MODULE: ./components/table.tsx



class Table extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wrapperTable",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: this.renderHeaderTable()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: this.renderBodyTable()
                    })
                ]
            })
        });
    }
    renderHeaderTable() {
        return /*#__PURE__*/ jsx_runtime_.jsx("tr", {
            children: this.renderHeaderTh()
        });
    }
    renderHeaderTh() {
        return this.props.TableProps.headers.map((row, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("th", {
                className: row.field === ECryptoFields.name ? "name" : "",
                children: row.display
            }, index);
        });
    }
    renderBodyTable() {
        return this.props.TableProps.rows.map((row, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                children: this.renderBodyTd(row)
            }, index);
        });
    }
    renderBodyTd(row) {
        return row.map((row, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: row
            }, index);
        });
    }
}

// EXTERNAL MODULE: ./definitions/cache.ts
var cache = __webpack_require__(2545);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(9927);
// EXTERNAL MODULE: ./utils/withRouter.tsx
var withRouter = __webpack_require__(3433);
;// CONCATENATED MODULE: ./containers/rankingCrypto/rankingCrypto.tsx








class RankingCrypto extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.props)) return "";
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Table, {
                ...this.getTableProps()
            })
        });
    }
    getTableProps() {
        return {
            TableProps: {
                headers: this.props.headers,
                rows: this.constructRows()
            }
        };
    }
    constructRows() {
        return this.props.cryptos.map((crypto)=>{
            return [
                crypto.market_cap_rank,
                this.switchCryptoFields(crypto, ECryptoFields.name),
                this.switchCryptoFields(crypto, ECryptoFields.price),
                this.switchCryptoFields(crypto, ECryptoFields.price24h),
                this.switchCryptoFields(crypto, ECryptoFields.market_cap),
                this.switchCryptoFields(crypto, ECryptoFields.volume24h),
                this.switchCryptoFields(crypto, ECryptoFields.circulating_supply)
            ];
        });
    }
    switchCryptoFields(crypto, type) {
        switch(type){
            case ECryptoFields.name:
                return this.getName(crypto);
            case ECryptoFields.price:
                // TODO shiba inu no se vera con esto
                return cache/* default.numberFormatter2decimals.format */.Z.numberFormatter2decimals.format(crypto.current_price) + "$";
            case ECryptoFields.price24h:
                return this.getPrice24h(crypto.price_change_percentage_24h);
            case ECryptoFields.volume24h:
                return cache/* default.numberFormatter.format */.Z.numberFormatter.format(crypto.total_volume) + "$";
            case ECryptoFields.market_cap:
                return cache/* default.numberFormatter.format */.Z.numberFormatter.format(crypto.market_cap) + "$";
            case ECryptoFields.market_cap_rank:
                return crypto.market_cap_rank;
            case ECryptoFields.circulating_supply:
                return cache/* default.numberFormatter0decimals.format */.Z.numberFormatter0decimals.format(crypto.circulating_supply);
        }
    }
    getName(crypto) {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: global/* default.hostFront */.ZP.hostFront + "/criptomonedas/" + crypto.slug,
            onClick: (e)=>{
                e.preventDefault();
                this.redirect(crypto.slug);
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "name",
                children: crypto.name
            })
        });
    }
    getPrice24h(number) {
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: Math.sign(number) >= 0 ? "greenText" : "redText",
            children: cache/* default.numberFormatter2decimals.format */.Z.numberFormatter2decimals.format(number) + "%"
        });
    }
    redirect(slug) {
        const postLink = "/criptomonedas/" + slug;
        this.props.navigateWrapped(postLink);
    }
}
/* harmony default export */ const rankingCrypto = ((0,withRouter/* default */.Z)(RankingCrypto));

// EXTERNAL MODULE: ./components/sectionWrapper.tsx
var sectionWrapper = __webpack_require__(2366);
// EXTERNAL MODULE: ./stores/CryptoStore.ts + 1 modules
var CryptoStore = __webpack_require__(1339);
// EXTERNAL MODULE: ./stores/GlobalStore.ts
var GlobalStore = __webpack_require__(5553);
// EXTERNAL MODULE: ./utils/helmet.tsx
var helmet = __webpack_require__(6337);
// EXTERNAL MODULE: ./stores/GuiaStore.ts
var GuiaStore = __webpack_require__(7441);
;// CONCATENATED MODULE: ./pages/criptomonedas/index.tsx









function Criptomonedas(props) {
    let [rankingStart, setRankingStart] = external_react_default().useState(0);
    const [cryptos, setCryptos] = external_react_default().useState(props.cryptos);
    const getSectionWrapperProps = ()=>{
        return {
            title: "\xdaltimas Publicaciones",
            guias: props.guias
        };
    };
    const getArticleProps = ()=>{
        return {
            content: props.landingInfo.content
        };
    };
    const getRankingCryptoProps = ()=>{
        return {
            cryptos: cryptos,
            headers: CRankingHeaders
        };
    };
    const CRankingHeaders = [
        {
            "display": "#",
            "field": "market_cap_rank"
        },
        {
            "display": "Nombre",
            "field": "name"
        },
        {
            "display": "Precio",
            "field": "current_price"
        },
        {
            "display": "24h %",
            "field": "price_change_percentage_24h"
        },
        {
            "display": "Cap. de Mercado",
            "field": "market_cap"
        },
        {
            "display": "Volumen (24h)",
            "field": "total_volume"
        },
        {
            "display": "Acciones en Circulaci\xf3n",
            "field": "circulating_supply"
        }
    ];
    const showMore = async ()=>{
        try {
            setRankingStart(rankingStart += 25);
            const cryptosAux = await CryptoStore/* default.getStrapiCryptoAll */.Z.getStrapiCryptoAll(rankingStart, 25);
            setCryptos([
                ...cryptos,
                ...cryptosAux
            ]);
        } catch (err) {
            console.error(err);
        }
    };
    const getMetaTags = ()=>{
        return {
            title: props.landingInfo.MetaTags.title,
            description: props.landingInfo.MetaTags.description,
            canonical: "/criptomonedas",
            published_time: props.landingInfo.published_at,
            modified_time: props.landingInfo.updatedAt
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (0,helmet/* getHead */.c)(getMetaTags()),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "home",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "articleWrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                            ...getArticleProps()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "rankingCryptoWrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(rankingCrypto, {
                                ...getRankingCryptoProps()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "showMore",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "button",
                                    onClick: ()=>showMore(),
                                    children: "▽ Mostrar m\xe1s"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sectionWrapper latestPosts",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sectionWrapper/* default */.Z, {
                            ...getSectionWrapperProps()
                        })
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    try {
        const [landingInfo, guias, cryptos] = await Promise.all([
            GlobalStore/* default.getLandingCriptomonedas */.Z.getLandingCriptomonedas(),
            GuiaStore/* default.getGuias */.Z.getGuias(6, "DESC"),
            CryptoStore/* default.getStrapiCryptoAll */.Z.getStrapiCryptoAll(0, 25)
        ]);
        return {
            props: {
                guias,
                landingInfo,
                cryptos
            }
        };
    } catch (error) {
        throw new Error("Ha fallado algo");
    }
};


/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5165:
/***/ ((module) => {

module.exports = require("showdown");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,553,927,337,441,651,366,339], () => (__webpack_exec__(2961)));
module.exports = __webpack_exports__;

})();