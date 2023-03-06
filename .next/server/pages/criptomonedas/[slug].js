"use strict";
(() => {
var exports = {};
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 5484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mediaPost)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3059);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(9927);
;// CONCATENATED MODULE: ./components/cryptoData/readPost copy.tsx





// TODO pls FIXME
class Auxiliar extends external_react_.Component {
    constructor(props){
        super(props);
    }
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.props)) return "";
        let midPost = this.midPost();
        let lowerPost = this.lowerPost();
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "readPost",
            children: [
                this.props.Post.coverImage ? this.upperPost() : "",
                midPost
            ]
        });
    }
    upperPost() {
        const post = this.props.Post;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "title",
                    children: post.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "extraInfo",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "difficulty",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: post.difficulty
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "readTime",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        post.readTime + "min.",
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "publishedDate",
                            children: "Publicaci\xf3n: " + this.formatDate(this.props.published_at)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "updatedDate",
                            children: "Actualizaci\xf3n: " + this.formatDate(this.props.updatedAt)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wrapperImage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "coverImage",
                        src: global/* default.host */.ZP.host + post.coverImage?.url,
                        alt: post.coverImage.alternativeText
                    })
                })
            ]
        });
    }
    midPost() {
        const test = this.mountHtmlContent();
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: test
        });
    }
    lowerPost() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    mountHtmlContent() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: external_isomorphic_dompurify_default().sanitize(this.props.Post.content)
                }
            })
        });
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
/* harmony default export */ const readPost_copy = (Auxiliar);

;// CONCATENATED MODULE: ./containers/mediaPost.tsx



class MediaPost extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    /*
    public shouldComponentUpdate(nextProps: Readonly<IMediaPostProps>, nextState: Readonly<IMediaPostState>, nextContext: any): boolean {
		if (nextProps.post.Post.content === this.props.post?.Post.content) return false;

		return true;
	}*/ render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mediaPost",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "midColumnPost",
                children: /*#__PURE__*/ jsx_runtime_.jsx(readPost_copy, {
                    ...this.getPropsReadPost()
                })
            })
        });
    }
    getPropsReadPost() {
        return this.props.post;
    }
}
/* harmony default export */ const mediaPost = (MediaPost);


/***/ }),

/***/ 7200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Criptomoneda),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6337);
/* harmony import */ var _stores_CryptoStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1339);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9927);
/* harmony import */ var _components_cryptoCard_cryptoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3003);
/* harmony import */ var _containers_mediaPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5484);
/* harmony import */ var _components_sectionWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2366);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _definitions_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2545);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stores_GuiaStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7441);











function Criptomoneda(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const coin = {
        name: props.crypto.name,
        ticket: props.crypto.ticket.toUpperCase(),
        currentPrice: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.current_price) + "$",
        high24h: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.high_24h) + "$",
        low24h: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.low_24h) + "$",
        price24h: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter2decimals.format */ .Z.numberFormatter2decimals.format(props.crypto.price_change_percentage_24h) + "%",
        totalVolume: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter0decimals.format */ .Z.numberFormatter0decimals.format(props.crypto.total_volume) + "$",
        marketCapRank: props.crypto.market_cap_rank,
        marketCap: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter0decimals.format */ .Z.numberFormatter0decimals.format(props.crypto.market_cap) + "$",
        marketCapChange24h: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter0decimals.format */ .Z.numberFormatter0decimals.format(props.crypto.market_cap_change_24h) + "$",
        marketCapChangePercentage24h: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter2decimals.format */ .Z.numberFormatter2decimals.format(props.crypto.market_cap_change_percentage_24h) + "%",
        circulatingSupply: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.circulating_supply),
        maxSupply: props.crypto.max_supply ? _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.max_supply) : "∞",
        supplyPercentage: props.crypto.max_supply ? _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter2decimals.format */ .Z.numberFormatter2decimals.format(props.crypto.circulating_supply / props.crypto.max_supply * 100) + "%" : "-",
        atl: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.atl) + "$",
        atlDate: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].dateFormatter.format */ .Z.dateFormatter.format(new Date(props.crypto.atl_date)),
        ath: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter.format */ .Z.numberFormatter.format(props.crypto.ath) + "$",
        athDate: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].dateFormatter.format */ .Z.dateFormatter.format(new Date(props.crypto.ath_date)),
        atlRoi: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter2decimals.format */ .Z.numberFormatter2decimals.format(props.crypto.current_price / props.crypto.atl * 100) + "%",
        athRoi: _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].numberFormatter2decimals.format */ .Z.numberFormatter2decimals.format(100 - props.crypto.current_price / props.crypto.ath * 100) + "%"
    };
    const getMetaTags = ()=>{
        return {
            title: convertLiteral(coin, props.template.MetaTags.title),
            description: convertLiteral(coin, props.template.MetaTags.description),
            canonical: router.asPath,
            published_time: props.crypto.published_at,
            modified_time: props.crypto.updatedAt
        };
    };
    const convertLiteral = (coin, literal)=>{
        literal = isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_7___default().sanitize(literal);
        return eval("`" + literal + "`");
    };
    const convertMarkDownCrypto = (coin, aux)=>{
        let content = _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].converter.makeHtml */ .Z.converter.makeHtml(aux);
        return convertLiteral(coin, content);
    };
    const getMediaPostProps = ()=>{
        let cryptoPost = {};
        cryptoPost.Post = {};
        cryptoPost.Post.content = convertMarkDownCrypto(coin, props.template.content);
        return {
            post: cryptoPost
        };
    };
    const getSectionWrapperProps = ()=>{
        return {
            title: "\xdaltimas Publicaciones",
            guias: props.relationedPosts
        };
    };
    const getCryptoCardProps = ()=>{
        return {
            crypto: props.crypto
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "post",
        children: [
            (0,_utils_helmet__WEBPACK_IMPORTED_MODULE_1__/* .getHead */ .c)(getMetaTags()),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cryptoCard_cryptoCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                ...getCryptoCardProps()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mediaPostWrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_mediaPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...getMediaPostProps()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sectionWrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sectionWrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    ...getSectionWrapperProps()
                })
            })
        ]
    });
}
const getServerSideProps = async (context)=>{
    try {
        // TODO aqui habra que hacer promise.all
        const { slug  } = context.params;
        if (!slug) throw new Error("Criptomoneda no existente"); // TODO ESTO NO TIENE SENTIDO
        const slugString = slug.toString();
        const crypto = await _stores_CryptoStore__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getStrapiCrypto */ .Z.getStrapiCrypto(slugString);
        if (_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"].isObjectEmpty */ .Z.isObjectEmpty(crypto)) throw new Error("Criptomoneda no existente");
        const posts = await _stores_GuiaStore__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getGuias */ .Z.getGuias(6, "DESC");
        return {
            props: {
                crypto,
                relationedPosts: posts,
                slug: slugString,
                template: await _definitions_cache__WEBPACK_IMPORTED_MODULE_8__/* ["default"].cryptoTemplate */ .Z.cryptoTemplate
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,260,553,927,337,433,675,3,339], () => (__webpack_exec__(7200)));
module.exports = __webpack_exports__;

})();