(() => {
var exports = {};
exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 3889:
/***/ ((module) => {

// Exports
module.exports = {
	"authorWrapper": "author_authorWrapper__jcQ7A",
	"lowWrapper": "author_lowWrapper__9Nm44"
};


/***/ }),

/***/ 2243:
/***/ ((module) => {

// Exports
module.exports = {
	"authorBanner": "authorBanner_authorBanner__NNpQA",
	"imageWrapper": "authorBanner_imageWrapper__KRWiU",
	"coverImage": "authorBanner_coverImage__YWmcy",
	"rightSide": "authorBanner_rightSide__yrcqR",
	"h1": "authorBanner_h1__d4k_V",
	"socialWrapper": "authorBanner_socialWrapper__KW6ek",
	"quote": "authorBanner_quote__MAKkz",
	"authorCard": "authorBanner_authorCard__3DwII"
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

/***/ 2182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/highlights-instagram.352bf13e.svg","height":355,"width":355});

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

/***/ 6389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/highlights-youtube.99ae4cab.svg","height":346,"width":440});

/***/ }),

/***/ 3138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuthorServer),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/helmet.tsx
var helmet = __webpack_require__(6337);
// EXTERNAL MODULE: ./stores/AuthorStore.ts
var AuthorStore = __webpack_require__(8957);
// EXTERNAL MODULE: ./styles/global.module.scss
var global_module = __webpack_require__(841);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./components/Article.tsx
var Article = __webpack_require__(5651);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/authorBanner.module.scss
var authorBanner_module = __webpack_require__(2243);
var authorBanner_module_default = /*#__PURE__*/__webpack_require__.n(authorBanner_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./styles/socialNetworks.module.scss
var socialNetworks_module = __webpack_require__(3542);
var socialNetworks_module_default = /*#__PURE__*/__webpack_require__.n(socialNetworks_module);
// EXTERNAL MODULE: ./public/highlights-youtube.svg
var highlights_youtube = __webpack_require__(6389);
// EXTERNAL MODULE: ./public/highlights-twitter.svg
var highlights_twitter = __webpack_require__(2892);
// EXTERNAL MODULE: ./public/highlights-mail.svg
var highlights_mail = __webpack_require__(4407);
// EXTERNAL MODULE: ./public/highlights-instagram.svg
var highlights_instagram = __webpack_require__(2182);
;// CONCATENATED MODULE: ./components/author/socialNetworks.tsx








class SocialNetworks extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const linkedin = this.props.linkedin ? this.renderImageElement(this.props.linkedin, highlights_mail/* default */.Z) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const twitter = this.props.twitter ? this.renderImageElement(this.props.twitter, highlights_twitter/* default */.Z) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const instagram = this.props.instagram ? this.renderImageElement(this.props.instagram, highlights_instagram/* default */.Z) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const facebook = this.props.facebook ? this.renderImageElement(this.props.facebook, highlights_youtube/* default */.Z) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (socialNetworks_module_default()).socialWrapper,
            children: [
                linkedin,
                twitter,
                instagram,
                facebook
            ]
        });
    }
    renderImageElement(href, src, alt) {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: href,
            className: (socialNetworks_module_default()).href,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (socialNetworks_module_default()).socialLogo,
                src: src,
                alt: "Link para ir al canal de TikTok de Empezar a Invertir",
                width: 48,
                height: 48
            })
        });
    }
}

;// CONCATENATED MODULE: ./components/author/authorBanner.tsx






class AuthorBanner extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const author = this.props;
        const image = author.profilePic;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (authorBanner_module_default()).authorBanner,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (authorBanner_module_default()).imageWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (authorBanner_module_default()).coverImage,
                        src: global/* default.host */.ZP.host + image.formats.small.url,
                        alt: image.alternativeText,
                        width: 300,
                        height: 300
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (authorBanner_module_default()).rightSide,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (authorBanner_module_default()).h1,
                            children: author.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("q", {
                            className: (authorBanner_module_default()).quote,
                            children: author.quote
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (authorBanner_module_default()).socialWrapper,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SocialNetworks, {
                                ...author.socialNetworks
                            })
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./styles/author.module.scss
var author_module = __webpack_require__(3889);
var author_module_default = /*#__PURE__*/__webpack_require__.n(author_module);
;// CONCATENATED MODULE: ./containers/author/author.tsx





class Author extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (author_module_default()).authorWrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(AuthorBanner, {
                    ...this.props
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                    content: this.props.biography
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (author_module_default()).lowWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                            content: this.props.education
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                            content: this.props.specialty
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                            content: this.props.abilities
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./components/guia/carousel.tsx + 1 modules
var carousel = __webpack_require__(8653);
;// CONCATENATED MODULE: ./components/carouselWrapper.tsx



class CarouselWrapper extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        if (!this.props.guias.length) return "";
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    style: {
                        textAlign: "center",
                        marginTop: "4rem"
                    },
                    children: this.props.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(carousel/* default */.Z, {
                    ...this.props.guias
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./stores/GuiaStore.ts
var GuiaStore = __webpack_require__(7441);
;// CONCATENATED MODULE: ./pages/sobre-nosotros/[URL]/index.tsx







function AuthorServer(props) {
    const getMetaTags = ()=>{
        return {
            title: props.author.MetaTags.title,
            description: props.author.MetaTags.description,
            canonical: "sobre-nosotros/" + props.author.URL,
            published_time: props.author.published_at,
            modified_time: props.author.updatedAt
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (0,helmet/* getHead */.c)(getMetaTags(), true),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (global_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Author, {
                        ...props.author
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CarouselWrapper, {
                        guias: [
                            ...props.authorPosts
                        ],
                        title: "\xdaLTIMAS PUBLICACIONES DEL AUTOR"
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (context)=>{
    try {
        const { URL  } = context.params; // = [ 'analisis-tecnico', 'indicadores' ];
        const [author, authorPosts] = await Promise.all([
            AuthorStore/* default.findOne */.Z.findOne(URL),
            GuiaStore/* default.getGuiasFromAuthor */.Z.getGuiasFromAuthor(URL)
        ]);
        return {
            props: {
                author,
                authorPosts
            }
        };
    } catch (error) {
        throw new Error("Ha fallado algo");
    }
};


/***/ }),

/***/ 8957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthorStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3444);


class AuthorStore {
    static host = _definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/authors";
    static async find() {
        let url = new URL(AuthorStore.host);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async findOne(Url) {
        let url = new URL(AuthorStore.host + "/" + Url);
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
}


/***/ }),

/***/ 3059:
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5165:
/***/ ((module) => {

"use strict";
module.exports = require("showdown");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,505,664,553,927,337,441,651,295], () => (__webpack_exec__(3138)));
module.exports = __webpack_exports__;

})();