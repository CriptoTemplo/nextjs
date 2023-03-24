(() => {
var exports = {};
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 5205:
/***/ ((module) => {

// Exports
module.exports = {
	"h2": "authorCarousel_h2__8gVJ4",
	"carouselContainer": "authorCarousel_carouselContainer__B5fvv",
	"carousel": "authorCarousel_carousel__cLuOU",
	"card": "authorCarousel_card__izPnf",
	"button": "authorCarousel_button__yCn_A",
	"left": "authorCarousel_left__8PU9_",
	"right": "authorCarousel_right__9__ul"
};


/***/ }),

/***/ 841:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "global_wrapper__OXESG"
};


/***/ }),

/***/ 7555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SobreNosotros),
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
// EXTERNAL MODULE: ./stores/GlobalStore.ts
var GlobalStore = __webpack_require__(5553);
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/author/authorCard.tsx






class AuthorCard extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const author = this.props;
        const image = author.profilePic;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (authorBanner_module_default()).authorCard,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: global/* default.hostFront */.ZP.hostFront + "/nuestro-equipo/" + author.URL,
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
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: author.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: author.job
                    })
                ]
            })
        });
    }
}

// EXTERNAL MODULE: ./styles/authorCarousel.module.scss
var authorCarousel_module = __webpack_require__(5205);
var authorCarousel_module_default = /*#__PURE__*/__webpack_require__.n(authorCarousel_module);
;// CONCATENATED MODULE: ./containers/author/authorCarousel.tsx




// TODO rename de esto a carouselButton
class AuthorCarousel extends external_react_.Component {
    carouselRef = /*#__PURE__*/ external_react_.createRef();
    carouselContainerRef = /*#__PURE__*/ external_react_.createRef();
    constructor(props){
        super(props);
        this.state = {
            canGoPrev: false,
            canGoNext: false
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        if (this.elementsHidden(this.carouselRef.current)) {
            this.setState({
                canGoNext: true
            });
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    render() {
        const authors = Object.values(this.props);
        const authorCards = this.renderAuthorCars(authors);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (authorCarousel_module_default()).h2,
                    children: "Nuestro equipo"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (authorCarousel_module_default()).carouselContainer,
                    ref: this.carouselContainerRef,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (authorCarousel_module_default()).button,
                            onClick: ()=>this.handleNavigation("previous"),
                            disabled: !this.state.canGoPrev,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: (authorCarousel_module_default()).left
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (authorCarousel_module_default()).carousel,
                            ref: this.carouselRef,
                            children: authorCards
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (authorCarousel_module_default()).button,
                            onClick: ()=>this.handleNavigation("next"),
                            disabled: !this.state.canGoNext,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: (authorCarousel_module_default()).right
                            })
                        })
                    ]
                })
            ]
        });
    }
    renderAuthorCars(authors) {
        return authors.map((author, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (authorCarousel_module_default()).card,
                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthorCard, {
                    ...author
                }, index)
            }, index);
        });
    }
    handleNavigation(direction) {
        const container = this.carouselRef.current;
        const absoluteScrollNumber = container.scrollWidth / container.children.length;
        const scrollNumber = direction === "next" ? absoluteScrollNumber : -absoluteScrollNumber;
        container.scrollBy({
            left: scrollNumber,
            behavior: "smooth"
        });
        // HACK hacemos la suma de scrollLeft porque no tenemos este dato en tiempo real
        // como esta behavior: "smooth", este valor no lo vemos reflejado hasta que vuelve a hacer un setState
        const containerScrollLeft = container.scrollLeft + scrollNumber;
        this.setState({
            canGoPrev: this.canScrollLeft(containerScrollLeft),
            canGoNext: this.canScrollRight(container, containerScrollLeft)
        });
    }
    canScrollLeft(containerScrollLeft) {
        return containerScrollLeft > 0;
    }
    // HACK hacemos la suma de + 3 porque gracias a la exactitud de javascript vamos perdiendo precision
    canScrollRight(container, containerScrollLeft) {
        const scrollMax = container.scrollWidth - container.clientWidth;
        return containerScrollLeft + 3 < scrollMax;
    }
    // HACK Hacemos esto porque como cambia el ancho de los elementos de dentro, se desalinean los elementos
    handleResize = ()=>{
        const container = this.carouselRef.current;
        const scrollNumber = -container.scrollWidth;
        container.scrollBy({
            left: scrollNumber,
            behavior: "smooth"
        });
        this.setState({
            canGoPrev: this.canScrollLeft(scrollNumber),
            canGoNext: this.canScrollRight(container, scrollNumber)
        });
    };
    elementsHidden(container) {
        return container.scrollWidth > container.clientWidth;
    }
}

// EXTERNAL MODULE: ./components/article.tsx
var article = __webpack_require__(2663);
;// CONCATENATED MODULE: ./pages/nuestro-equipo/index.tsx







function SobreNosotros(props) {
    const getMetaTags = ()=>{
        return {
            title: props.landing.MetaTags.title,
            description: props.landing.MetaTags.description,
            canonical: "/nuestro-equipo",
            published_time: props.landing.published_at,
            modified_time: props.landing.updatedAt
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (0,helmet/* getHead */.c)(getMetaTags()),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (global_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(article/* default */.Z, {
                        content: props.landing.content
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AuthorCarousel, {
                        ...props.authors
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (context)=>{
    try {
        const [authors, landing] = await Promise.all([
            AuthorStore/* default.find */.Z.find(),
            GlobalStore/* default.getLandingAboutUs */.Z.getLandingAboutUs()
        ]);
        return {
            props: {
                authors,
                landing
            }
        };
    } catch (error) {
        throw new Error("Ha fallado algo");
    }
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,505,664,553,927,337,642], () => (__webpack_exec__(7555)));
module.exports = __webpack_exports__;

})();