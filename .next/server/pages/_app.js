(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9152:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "dropdown_dropdown__5N5Ht",
	"dropdownPlaceholder": "dropdown_dropdownPlaceholder__XEg0_",
	"dropdownMenu": "dropdown_dropdownMenu__BmEcr",
	"dropdownItem": "dropdown_dropdownItem__Q5wvH"
};


/***/ }),

/***/ 4333:
/***/ ((module) => {

// Exports
module.exports = {
	"searchBar": "searchBar_searchBar__HnGeO"
};


/***/ }),

/***/ 376:
/***/ ((module) => {

// Exports
module.exports = {
	"toast": "toast_toast__2HPQR",
	"informational": "toast_informational__mgakw",
	"sucess": "toast_sucess__eJxhi",
	"warning": "toast_warning__KmzN6",
	"error": "toast_error__MZuvV"
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

/***/ 2806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/highlights-telegram.ae453e96.svg","height":371,"width":416});

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

/***/ 7796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app_App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./stores/GlobalStore.ts
var GlobalStore = __webpack_require__(5553);
// EXTERNAL MODULE: ./utils/withRouter.tsx
var withRouter = __webpack_require__(3433);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./styles/dropdown.module.scss
var dropdown_module = __webpack_require__(9152);
var dropdown_module_default = /*#__PURE__*/__webpack_require__.n(dropdown_module);
;// CONCATENATED MODULE: ./components/dropdown/dropdown.tsx




class Dropdown extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (dropdown_module_default()).dropdown,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (dropdown_module_default()).dropdownPlaceholder,
                    onClick: this.props.main.action,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: global/* default.hostFront */.ZP.hostFront + this.props.main.url,
                        onClick: (e)=>e.preventDefault(),
                        children: this.props.main.title
                    })
                }),
                !this.props.actions.length ? "" : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (dropdown_module_default()).dropdownMenu,
                    children: this.renderDropdownMenu()
                })
            ]
        });
    }
    renderDropdownMenu() {
        return this.props.actions.map((option, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (dropdown_module_default()).dropdownItem,
                onClick: option.action,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: global/* default.hostFront */.ZP.hostFront + option.url,
                    onClick: (e)=>e.preventDefault(),
                    children: option.title
                })
            }, index);
        });
    }
}

// EXTERNAL MODULE: ./styles/searchBar.module.scss
var searchBar_module = __webpack_require__(4333);
var searchBar_module_default = /*#__PURE__*/__webpack_require__.n(searchBar_module);
;// CONCATENATED MODULE: ./components/header/searchBar.tsx



class SearchBar extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (searchBar_module_default()).searchBar,
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Buscar"
            })
        });
    }
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo_thumbnail.webp
/* harmony default export */ const logo_thumbnail = ({"src":"/_next/static/media/logo_thumbnail.2580b602.webp","height":156,"width":86,"blurDataURL":"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAAAwAABwAAQUxQSCEAAAAAAJV1NBidoJ97TX50nKvTUbqPNJ2+WGKomKyqlhdOQCIAVlA4ICwAAADwAQCdASoEAAgAAkA4JZwCdH8AGBvawQAA/v2UHDuBFLC9yNxGYjwoZYOAAA==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./containers/header/header.tsx







class Header extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "wrapperHeader",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "homeButton",
                        onClick: ()=>this.redirectHome(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: global/* default.hostFront */.ZP.hostFront,
                            onClick: (e)=>e.preventDefault(),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "imgLogo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "coverImage",
                                        src: logo_thumbnail,
                                        alt: "Toca para volver al incio",
                                        width: 150,
                                        height: 150
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "nameLogo",
                                    children: "Empezar a Invertir"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdownContainer",
                        children: this.renderDropdowns()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
                    this.renderSVG(),
                    this.renderMenuButton()
                ]
            })
        });
    }
    redirectHome() {
        this.redirect("/");
        if (document.getElementById("headerButton")?.className.includes("active")) {
            document.getElementById("headerButton")?.click();
        }
    }
    renderDropdowns() {
        return this.props.header.Header.map((dropdown, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                ...this.getDropdownProps(dropdown)
            }, index);
        });
    }
    getDropdownProps(dropdown) {
        const dropdownList = dropdown.dropdown.map((option)=>{
            return {
                title: option[0],
                action: ()=>this.redirect(option[1]),
                url: option[1]
            };
        });
        return {
            main: {
                title: dropdown.main[0],
                action: ()=>this.redirect(dropdown.main[1]),
                url: dropdown.main[1]
            },
            actions: dropdownList
        };
    }
    redirect(route) {
        this.props.redirect(route);
    }
    setVisibilityHeaderMobile() {
        const headerMobile = document.getElementById("headerMobile");
        if (headerMobile) {
            headerMobile.classList.toggle("active");
            document.body.classList.toggle("no-scroll");
            const visibility = headerMobile.style.visibility;
            if (visibility === "visible") {
                headerMobile.style.visibility = "hidden";
            } else {
                headerMobile.style.visibility = "visible";
            }
        }
    }
    renderSVG() {
        return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                    id: "gooeyness",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "2.2",
                            result: "blur"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                            in: "blur",
                            mode: "matrix",
                            values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
                            result: "gooeyness"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("feComposite", {
                            in: "SourceGraphic",
                            in2: "gooeyness",
                            operator: "atop"
                        })
                    ]
                })
            })
        });
    }
    renderMenuButton() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "plate plate2",
            id: "headerButton",
            onClick: (e)=>{
                e.currentTarget.classList.toggle("active");
                this.setVisibilityHeaderMobile();
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "burger",
                    version: "1.1",
                    height: "100",
                    width: "100",
                    viewBox: "0 0 100 100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line1",
                            d: "M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line2",
                            d: "M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line3",
                            d: "M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line4",
                            d: "M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line5",
                            d: "M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line line6",
                            d: "M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "x",
                    version: "1.1",
                    height: "100",
                    width: "100",
                    viewBox: "0 0 100 100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line",
                            d: "M 34,32 L 66,68"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            className: "line",
                            d: "M 66,32 L 34,68"
                        })
                    ]
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/dropdown/dropdownMobile.tsx




class DropdownMobile extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
        };
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "dropdownMobile",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdownMobilePlaceholder",
                    onClick: (event)=>this.setVisibility(event),
                    children: [
                        this.props.main.title,
                        !this.props.actions.length ? "" : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "arrow"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dropdownMobileMenu",
                    children: this.state.collapsed && this.props.actions.length ? "" : this.renderDropdownMenu()
                })
            ]
        });
    }
    renderDropdownMenu() {
        return this.props.actions.map((option, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dropdownMobileItem",
                onClick: ()=>this.onClickOption(option.action),
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: global/* default.hostFront */.ZP.hostFront + option.url,
                    onClick: (e)=>e.preventDefault(),
                    children: "\uD83D\uDD39 " + option.title
                })
            }, index);
        });
    }
    onClickOption(action) {
        action();
        document.getElementById("headerButton")?.click();
    }
    setVisibility(event) {
        // event.currentTarget.parentElement?.toggleAttribute("collapsed");
        event.currentTarget.parentElement?.classList.toggle("active");
        const aux = this.state.collapsed;
        this.setState({
            collapsed: !aux
        });
    }
}

;// CONCATENATED MODULE: ./containers/header/headerMobile.tsx



// TODO Hacer una clase abstracta padre que contenga los dos headers
class HeaderMobile extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "headerMobile",
            className: "headerMobile",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "headerMobileWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dropdownContainerMobile",
                    children: this.renderDropdowns()
                })
            })
        });
    }
    renderDropdowns() {
        return this.props.header.Header.map((dropdown, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(DropdownMobile, {
                ...this.getDropdownProps(dropdown)
            }, index);
        });
    }
    getDropdownProps(dropdown) {
        const dropdownList = dropdown.dropdown.map((option)=>{
            return {
                title: option[2] ? option[2] : option[0],
                action: ()=>this.redirect(option[1]),
                url: option[1]
            };
        });
        return {
            main: {
                title: dropdown.main[2] ? dropdown.main[2] : dropdown.main[0],
                action: ()=>this.redirect(dropdown.main[1]),
                url: dropdown.main[1]
            },
            actions: dropdownList
        };
    }
    redirect(route) {
        this.props.redirect(route);
    }
}

// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(9927);
;// CONCATENATED MODULE: ./containers/header/headerWrapper.tsx







class HeaderWrapper extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            header: {}
        };
    }
    async componentDidMount() {
        this.getHeaderInfo();
    }
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.state.header)) return "";
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                    ...this.getHeaderProps()
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderMobile, {
                    ...this.getHeaderProps()
                })
            ]
        });
    }
    async getHeaderInfo() {
        const header = await GlobalStore/* default.getHeader */.Z.getHeader();
        this.setState({
            header
        });
    }
    redirect = (route)=>{
        this.props.navigateWrapped(route);
    };
    getHeaderProps() {
        return {
            header: this.state.header,
            redirect: this.redirect
        };
    }
}
/* harmony default export */ const headerWrapper = ((0,withRouter/* default */.Z)(HeaderWrapper));

;// CONCATENATED MODULE: ./components/returnTop.tsx


class ReturnTop extends external_react_.Component {
    element = /*#__PURE__*/ external_react_.createRef();
    active = false;
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.initScrollEvent();
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "returnTop",
            ref: this.element,
            onClick: ()=>this.scrollTop()
        });
    }
    initScrollEvent() {
        document.addEventListener("scroll", ()=>this.checkScrollPosition()); // NO HACE FALTA DESTRUIRLO PORQUE SIEMPRE ESTA ACTIVO
    }
    toggleButton() {
        if (this.element && this.element.current) this.element.current.classList.toggle("show");
    }
    // 200 = Numero de pixeles desde el top del document
    checkScrollPosition() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (!this.active && scrollTop > 200) {
            this.active = true;
            return this.toggleButton();
        }
        if (this.active && scrollTop < 200) {
            this.active = false;
            return this.toggleButton();
        }
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

// EXTERNAL MODULE: ./public/highlights-youtube.svg
var highlights_youtube = __webpack_require__(6389);
// EXTERNAL MODULE: ./public/highlights-telegram.svg
var highlights_telegram = __webpack_require__(2806);
// EXTERNAL MODULE: ./public/highlights-twitter.svg
var highlights_twitter = __webpack_require__(2892);
;// CONCATENATED MODULE: ./public/highlights-tiktok.svg
/* harmony default export */ const highlights_tiktok = ({"src":"/_next/static/media/highlights-tiktok.5dd8050c.svg","height":383,"width":347});
// EXTERNAL MODULE: ./public/highlights-mail.svg
var highlights_mail = __webpack_require__(4407);
// EXTERNAL MODULE: ./public/highlights-instagram.svg
var highlights_instagram = __webpack_require__(2182);
;// CONCATENATED MODULE: ./containers/footer/footer.tsx











class Footer extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapperFooter",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "socialWrapper",
                            children: this.footerSocialLinks()
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lower",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapperFooter",
                        children: this.footerTextLinks()
                    })
                })
            ]
        });
    }
    footerSocialLinks() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_youtube/* default */.Z,
                        alt: "Link para ir al canal de Youtube de Empezar a Invertir",
                        width: 48,
                        height: 48
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_telegram/* default */.Z,
                        alt: "Link para ir al canal de Telegram de Empezar a Invertir",
                        width: 48,
                        height: 48
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_twitter/* default */.Z,
                        alt: "Link para ir al Twitter de Empezar a Invertir",
                        width: 48,
                        height: 48
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_instagram/* default */.Z,
                        alt: "Link para ir al Instagram de Empezar a Invertir"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_tiktok,
                        alt: "Link para ir al canal de TikTok de Empezar a Invertir",
                        width: 48,
                        height: 48
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "socialLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: highlights_mail/* default */.Z,
                        alt: "Link para ir enviar un e-mail a Empezar a Invertir",
                        width: 48,
                        height: 48
                    })
                })
            ]
        });
    }
    footerTextLinks() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "imgLogo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: logo_thumbnail,
                        alt: "Logo en grande de Empezar a Invertir",
                        width: 300,
                        height: 300
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footerLinks",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "title",
                            children: "Cursos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Trading"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Bolsa"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Criptomonedas"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Grupo inversion"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footerLinks",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "title",
                            children: "Cursos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Trading"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Bolsa"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Criptomonedas"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Grupo inversion"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footerLinks",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "title",
                            children: "Cursos"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Trading"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Bolsa"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Criptomonedas"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "link",
                            children: "Grupo inversion"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footerLinks",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/sitemap",
                        className: "title",
                        children: "Sitemap"
                    })
                })
            ]
        });
    }
}

// EXTERNAL MODULE: ./styles/toast.module.scss
var toast_module = __webpack_require__(376);
var toast_module_default = /*#__PURE__*/__webpack_require__.n(toast_module);
;// CONCATENATED MODULE: ./components/toast.tsx



class Toast extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            type: "Informational",
            isRendering: false
        };
    }
    componentWillUnmount() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }
    render() {
        const displayStyle = this.state.isRendering ? "block" : "block";
        const opacity = this.state.isRendering ? "1" : "0";
        const className = `${(toast_module_default()).toast} ${this.getClassname(this.state.type)}`;
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: className,
            style: {
                display: displayStyle,
                opacity: opacity
            },
            children: this.state.text
        });
    }
    showToast(text, type) {
        if (text === this.state.text && type === this.state.type && this.timeoutId) return;
        this.setState({
            text,
            type,
            isRendering: true
        });
        // Clear the existing timeout before setting a new one
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
        // Set a new timeout to hide the toast after 3 seconds
        this.timeoutId = setTimeout(()=>{
            this.setState({
                isRendering: false
            });
            this.timeoutId = undefined;
        }, 3000);
    }
    getClassname(type) {
        switch(type){
            case "Informational":
                return (toast_module_default()).informational;
            case "Sucess":
                return (toast_module_default()).sucess;
            case "Warning":
                return (toast_module_default()).warning;
            case "Error":
                return (toast_module_default()).error;
            default:
                return "";
        }
    }
}

// EXTERNAL MODULE: ./definitions/cache.ts
var cache = __webpack_require__(2545);
;// CONCATENATED MODULE: external "react-ga4"
const external_react_ga4_namespaceObject = require("react-ga4");
var external_react_ga4_default = /*#__PURE__*/__webpack_require__.n(external_react_ga4_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/App.scss
var App = __webpack_require__(8911);
// EXTERNAL MODULE: ./styles/header.scss
var header = __webpack_require__(6018);
// EXTERNAL MODULE: ./styles/dropdownMobile.scss
var dropdownMobile = __webpack_require__(2756);
// EXTERNAL MODULE: ./styles/footer.scss
var footer = __webpack_require__(2266);
// EXTERNAL MODULE: ./styles/table.scss
var table = __webpack_require__(8676);
// EXTERNAL MODULE: ./styles/sitemap.scss
var sitemap = __webpack_require__(7031);
// EXTERNAL MODULE: ./styles/ckeditor.scss
var ckeditor = __webpack_require__(6688);
;// CONCATENATED MODULE: ./pages/_app.tsx
















function _app_App({ Component , pageProps  }) {
    external_react_default().useEffect(()=>{
        external_react_ga4_default().initialize("G-Z3D5DH5P3F");
    });
    cache/* default.addSanitizeHook */.Z.addSanitizeHook();
    // TODO revisar el return TOP
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "▶️ C\xf3mo empezar a Invertir | Criptomonedas, Trading y Bolsa \uD83E\uDD47"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "▶️ C\xf3mo EMPEZAR a INVERTIR | Criptomonedas, Trading y Bolsa \uD83E\uDD47"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "\xbfQuieres empezar a invertir? Encontrar\xe1s todo lo que necesitas sobre criptomonedas, trading, bolsa y mucho m\xe1s ✅"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "es_ES"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "▶️ C\xf3mo EMPEZAR a INVERTIR | Criptomonedas, Trading y Bolsa \uD83E\uDD47"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "\xbfQuieres empezar a invertir? Encontrar\xe1s todo lo que necesitas sobre criptomonedas, trading, bolsa y mucho m\xe1s ✅"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Empezar a Invertir"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://empezarainvertir.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://empezarainvertir.com/logo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: "es_ES"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "globalWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(headerWrapper, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapperMain",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Toast, {
                        ref: cache/* default.toast */.Z.toast
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ReturnTop, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
} /*
export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<div className="globalWrapper">
			<HeaderWrapper />
			<div className="wrapperMain">
				{router.pathname === '/' && <Home />}
				{router.pathname === '/criptomonedas' && <Criptomonedas />}
				{router.pathname === '/criptomonedas/[post]' && <CryptoData />}
				{router.pathname === '/exchanges' && <Exchanges />}
				{router.pathname === '/sitemap' && <Sitemap />}
				{router.pathname === '*' && <ErrorPage />}
			</div>
			<ReturnTop />
			<Footer />
		</div>
	);
}
*/ 


/***/ }),

/***/ 3433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const history = [];
// eslint-disable-next-line react/display-name
const withRouter = (Component)=>(props)=>{
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const params = router.query;
        const navigateWrapped = (url)=>{
            if (url !== router.pathname) {
                history.push(router.asPath);
                return router.push(url);
            }
        //window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        const checkHistory = (key)=>{
            return history.includes(key);
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props,
            router,
            params,
            navigateWrapped,
            checkHistory
        });
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRouter);


/***/ }),

/***/ 8911:
/***/ (() => {



/***/ }),

/***/ 6688:
/***/ (() => {



/***/ }),

/***/ 2756:
/***/ (() => {



/***/ }),

/***/ 2266:
/***/ (() => {



/***/ }),

/***/ 6018:
/***/ (() => {



/***/ }),

/***/ 7031:
/***/ (() => {



/***/ }),

/***/ 8676:
/***/ (() => {



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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [398,675,505,664,553,927], () => (__webpack_exec__(7796)));
module.exports = __webpack_exports__;

})();