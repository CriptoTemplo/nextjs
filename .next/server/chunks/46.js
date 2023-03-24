exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 8212:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__iXn89",
	"imageWrapper": "card_imageWrapper__Sd7y8",
	"coverImage": "card_coverImage__usOYA",
	"content": "card_content__Zoa40",
	"cardTitle": "card_cardTitle__llZJq",
	"extraInfo": "card_extraInfo__kVSQq",
	"difficulty": "card_difficulty__obThm",
	"publishedDate": "card_publishedDate__1eliy",
	"readTime": "card_readTime__t4xik",
	"icon": "card_icon__r96WG"
};


/***/ }),

/***/ 2861:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "carousel_carousel__1IAjs"
};


/***/ }),

/***/ 841:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "global_wrapper__OXESG"
};


/***/ }),

/***/ 3542:
/***/ ((module) => {

// Exports
module.exports = {
	"socialWrapper": "socialNetworks_socialWrapper__TUwUO",
	"href": "socialNetworks_href__5V_JS",
	"socialLogo": "socialNetworks_socialLogo__bz8_c"
};


/***/ }),

/***/ 4407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/highlights-mail.511f1cf8.svg","height":340,"width":422});

/***/ }),

/***/ 2892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/highlights-twitter.5fb9fb3e.svg","height":351,"width":418});

/***/ }),

/***/ 8653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(9927);
// EXTERNAL MODULE: ./styles/card.module.scss
var card_module = __webpack_require__(8212);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
;// CONCATENATED MODULE: ./components/guia/card.tsx







class GuiaCard extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const guia = this.props;
        const post = this.props.Post;
        const imageSrc = post.coverImage.formats.small ? post.coverImage.formats.small.url : post.coverImage.formats.thumbnail.url;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (card_module_default()).card,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: global/* default.hostFront */.ZP.hostFront + "/guias/" + guia.URL,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (card_module_default()).imageWrapper,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (card_module_default()).coverImage,
                            src: global/* default.host */.ZP.host + imageSrc,
                            alt: post.coverImage.alternativeText,
                            width: 300,
                            height: 300
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (card_module_default()).content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (card_module_default()).cardTitle,
                                children: post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (card_module_default()).extraInfo,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (card_module_default()).difficulty,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: post.difficulty
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (card_module_default()).publishedDate,
                                        children: utils/* default.formatDateDayShortMonthYear */.Z.formatDateDayShortMonthYear(guia.updatedAt)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (card_module_default()).readTime,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: (card_module_default()).icon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
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
        });
    }
}

// EXTERNAL MODULE: ./styles/carousel.module.scss
var carousel_module = __webpack_require__(2861);
var carousel_module_default = /*#__PURE__*/__webpack_require__.n(carousel_module);
;// CONCATENATED MODULE: ./components/guia/carousel.tsx




// TODO anyadir recursividad para las guia card en caso de que sea h2 en vez de h3
class Carousel extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (carousel_module_default()).carousel,
            children: this.renderElements()
        });
    }
    renderElements() {
        const array = Object.values(this.props);
        return array.map((guia, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(GuiaCard, {
                ...guia
            }, index);
        });
    }
}


/***/ })

};
;