(() => {
var exports = {};
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 9814:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "button_button__AbnlE",
	"showMore": "button_showMore__9ivW9"
};


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Guia),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/helmet.tsx
var helmet = __webpack_require__(6337);
// EXTERNAL MODULE: ./stores/GuiaStore.ts
var GuiaStore = __webpack_require__(7441);
// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__(9927);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3059);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: ./definitions/global.ts
var global = __webpack_require__(4862);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: ./components/mediaPost/readPost.tsx








class ReadPost extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            referencesCollapsed: true
        };
    }
    // After the component did mount
    componentDidMount() {
        const references = Array.from(document.querySelectorAll("span.crossReference"));
        references.map((element)=>element.addEventListener("click", this.handleCrossReferenceClick));
    }
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.props)) return "";
        const rawContent = this.props.Post.content;
        const elementContent = this.constructFakeElement(rawContent);
        let lowerPost = this.lowerPost(elementContent);
        const editedContent = this.constructContent(elementContent);
        const purifiedcontent = external_isomorphic_dompurify_default().sanitize(editedContent);
        let upperPost = this.upperPost();
        let midPost = this.midPost(purifiedcontent);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "readPost",
            children: [
                upperPost,
                midPost,
                lowerPost
            ]
        });
    }
    upperPost() {
        const guia = this.props;
        const post = guia.Post;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "title",
                    children: post.title
                }),
                this.renderAuthorsWrappers(guia.authors, guia.reviewer),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wrapperImage",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "coverImage",
                        src: global/* default.host */.ZP.host + post.coverImage?.url,
                        alt: post.coverImage.alternativeText,
                        width: 500,
                        height: 500
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "extraInfo",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "updatedDate",
                            children: "Actualizaci\xf3n: " + this.formatDate(this.props.updatedAt)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dataCenter",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        " ",
                                        "3,3k",
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "readTimeLong",
                            children: "Tiempo de lectura: " + post.readTime + "min."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    style: {
                        marginBottom: "2rem"
                    }
                })
            ]
        });
    }
    renderAuthorsWrappers(authors, reviewer) {
        if (!authors.length || !reviewer) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "authorsWrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "authors",
                    children: [
                        authors.map((author, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "profilePic",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: global/* default.host */.ZP.host + author.profilePic.url,
                                    alt: "Foto de perfil de " + author.name,
                                    width: 50,
                                    height: 50
                                })
                            }, index);
                        }),
                        this.constructAuthorsString(authors)
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "reviewer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "reviewerHref",
                            children: [
                                "Revisado por: ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/sobre-nosotros/" + reviewer.URL,
                                    children: reviewer.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "profilePic",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: global/* default.host */.ZP.host + reviewer.profilePic.url,
                                alt: "Foto de perfil de " + reviewer.name,
                                width: 50,
                                height: 50
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructAuthorsString(authors) {
        let aux = "Escrito por: ";
        const authorsHrefs = authors.map((author, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/sobre-nosotros/" + author.URL,
                        children: author.name
                    }),
                    index < authors.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: " y "
                    }) : ""
                ]
            }, index);
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "authorsHrefs",
            children: [
                aux,
                authorsHrefs
            ]
        });
    }
    midPost(content) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: content
                }
            })
        });
    }
    lowerPost(element) {
        const references = this.constructReferences(element);
        const referencesHTML = references.map((reference, index)=>this.referenceHTML(reference, index));
        const collapsed = this.state.referencesCollapsed;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "dropdownMobile bibliography",
            id: "bibliography",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdownMobilePlaceholder",
                    id: "dropdownMobilePlaceholder",
                    onClick: (event)=>this.setVisibility(event),
                    children: [
                        "Bibliograf\xeda",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "arrow"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdownMobileMenu",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Empezar a Invertir exige a sus redactores que utilicen fuentes fiables para respaldar los articulos. Entre ellas se incluyen informes oficiales, white papers, entrevistas, articulos acad\xe9micos y otros datos de expertos en la materia. En caso de que sea necesario, tambi\xe9n hacemos referencia a investigaciones originales de otras editoriales de prestigio. Si quieres obtener m\xe1s informaci\xf3n sobre las normas que seguimos para producir los articulos y su contenido puedes consultar nuestra pol\xedtica de editorial."
                        }),
                        collapsed ? "" : referencesHTML
                    ]
                })
            ]
        });
    }
    setVisibility(event) {
        event.currentTarget.parentElement?.classList.toggle("active");
        const aux = this.state.referencesCollapsed;
        this.setState({
            referencesCollapsed: !aux
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
    constructFakeElement(rawContent) {
        const { document: document1  } = new external_jsdom_namespaceObject.JSDOM("<!DOCTYPE html>").window;
        const element = document1.createElement("div");
        element.innerHTML = rawContent;
        return element;
    }
    constructContent(element) {
        element = this.transformImg(element);
        element = this.transformSpan(element);
        element = this.transfromHeadings(element);
        return element.innerHTML;
    }
    transformImg(element) {
        Array.from(element.querySelectorAll("img")).map((element)=>element.outerHTML = `<Image alt="${element.getAttribute("alt")}"
                src="${global/* default.host */.ZP.host + element.getAttribute("src")}"
                width=500 height=500 decoding="async" data-nimg="1"
                class="coverImage" loading="lazy" style="color:transparent" />`);
        return element;
    }
    transformSpan(element) {
        let counter = 1;
        Array.from(element.querySelectorAll("span.editableSpan")).map((element)=>element.outerHTML = `<span class="crossReference">[${counter++}]</span>`);
        return element;
    }
    transfromHeadings(element) {
        Array.from(element.querySelectorAll("h2,h3")).map((element)=>element.id = element.textContent ? utils/* default.idGeneratorFromString */.Z.idGeneratorFromString(element.textContent) : "");
        return element;
    }
    constructReferences(element) {
        const references = Array.from(element.querySelectorAll("span.editableSpan")).map((element)=>({
                URL: element.getAttribute("info-url") ?? "",
                displayText: element.getAttribute("info-text") ?? ""
            }));
        return references;
    }
    referenceHTML(reference, index) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "externalLink",
            children: [
                `[${++index}]. `,
                reference.displayText
            ]
        }, index);
    // return <a className={"externalLink"} key={index} href={reference.URL} type="externalLink" target="_blank" rel="noopener noreferrer nofollow">{reference.displayText}</a>
    }
    handleCrossReferenceClick = ()=>{
        const element = document.getElementById("bibliography");
        element?.scrollIntoView({
            behavior: "smooth"
        });
        if (this.state.referencesCollapsed) {
            document.getElementById("dropdownMobilePlaceholder")?.click();
        }
    };
}

;// CONCATENATED MODULE: ./components/mediaPost/readIndex.tsx




// TODO se puede hacer que conforme vayas bajando el dom se vaya ilumando en que seccion estas
class ReadIndex extends external_react_.Component {
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.props)) return "";
        const headings = this.construct();
        let countH1 = 1;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "readIndex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "title",
                    children: "Tabla de Contenidos"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: headings.map((heading, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                style: {
                                    marginLeft: `${heading.level - 2}em`
                                },
                                onClick: ()=>this.scrollMediaPost(heading.id),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "leftSide",
                                            children: heading.level === 2 ? countH1++ + "." : ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "rightSide",
                                            children: heading.text
                                        })
                                    ]
                                })
                            }, index))
                    })
                })
            ]
        });
    }
    construct() {
        const { document: document1  } = new external_jsdom_namespaceObject.JSDOM("<!DOCTYPE html>").window;
        const element = document1.createElement("div");
        element.innerHTML = this.props.content;
        const headings = Array.from(element.querySelectorAll("h2, h3")).map((element)=>({
                id: element.textContent ? utils/* default.idGeneratorFromString */.Z.idGeneratorFromString(element.textContent) : "",
                text: element.textContent ?? "",
                level: Number(element.tagName.substring(1))
            }));
        return headings;
    }
    scrollMediaPost(id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth"
        });
    }
}
/* harmony default export */ const readIndex = (ReadIndex);

// EXTERNAL MODULE: ./utils/withRouter.tsx
var withRouter = __webpack_require__(3433);
;// CONCATENATED MODULE: ./components/mediaPost/relatedPosts.tsx






class RelatedPosts extends external_react_.Component {
    constructor(props){
        super(props);
    }
    // After the component did mount
    componentDidMount() {}
    render() {
        if (utils/* default.isObjectEmpty */.Z.isObjectEmpty(this.props)) return "";
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relatedPosts",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "title",
                    children: "Publicaciones Relacionadas"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: this.renderOneRelatedPost()
                })
            ]
        });
    }
    renderOneRelatedPost() {
        return this.props.relatedPosts.map((post, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block",
                onClick: ()=>this.redirect(post.url),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: global/* default.hostFront */.ZP.hostFront + "/" + post.url,
                    onClick: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "leftSide",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "coverImage",
                                src: global/* default.host */.ZP.host + post.coverImage.formats.thumbnail.url,
                                alt: post.coverImage.alternativeText,
                                width: 150,
                                height: 150
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "rightSide",
                            children: post.title
                        })
                    ]
                })
            }, index);
        });
    }
    redirect(URL) {
        const postLink = "/" + URL;
        this.props.navigateWrapped(postLink);
    }
}
/* harmony default export */ const relatedPosts = ((0,withRouter/* default */.Z)(RelatedPosts));

;// CONCATENATED MODULE: ./containers/post.tsx





class Post extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mediaPost",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "leftColumnPost",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "stickyWrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(readIndex, {
                            ...this.getPropsReadIndex()
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "midColumnPost",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ReadPost, {
                        ...this.getPropsReadPost()
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rightColumnPost",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(relatedPosts, {
                        ...this.getPropsRelatedPosts()
                    })
                })
            ]
        });
    }
    getPropsReadIndex() {
        return this.props.guia.Post;
    }
    getPropsReadPost() {
        return this.props.guia;
    }
    getPropsRelatedPosts() {
        return {
            relatedPosts: this.props.relationedPosts
        };
    }
}

// EXTERNAL MODULE: ./definitions/cache.ts
var cache = __webpack_require__(2545);
// EXTERNAL MODULE: ./components/cryptoCard/cryptoCard.tsx
var cryptoCard = __webpack_require__(3003);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/sectionWrapper.tsx
var sectionWrapper = __webpack_require__(2366);
// EXTERNAL MODULE: ./components/guia/carousel.tsx + 1 modules
var carousel = __webpack_require__(8653);
// EXTERNAL MODULE: ./styles/button.module.scss
var button_module = __webpack_require__(9814);
var button_module_default = /*#__PURE__*/__webpack_require__.n(button_module);
;// CONCATENATED MODULE: ./components/category/categoryNav.tsx





class CategoryNav extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        const category = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: category.name
                }),
                this.renderGuides(),
                this.renderNavButton(category.URL)
            ]
        });
    }
    renderGuides() {
        if (!this.props.guias) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const copyGuides = [
            ...this.props.guias
        ].slice(0, 3);
        return /*#__PURE__*/ jsx_runtime_.jsx(carousel/* default */.Z, {
            ...copyGuides
        });
    }
    renderNavButton(url) {
        // TODO Hay que hacer que el boton este sea un componente unico
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: url,
            className: (button_module_default()).button,
            children: "▷ Ver todos"
        });
    }
}

;// CONCATENATED MODULE: ./components/category/categoryShowMore.tsx




class CategoryShowMore extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
        };
    }
    render() {
        const category = this.props;
        const guideLength = this.props.guias.length;
        const showMore = guideLength > 3 && this.state.collapsed ? this.renderShowMoreButton() : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: category.name
                }),
                this.renderGuides(guideLength),
                showMore
            ]
        });
    }
    renderGuides(guideLength) {
        if (!guideLength) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const maxGuidesToShow = this.state.collapsed ? 3 : guideLength;
        const copyGuides = [
            ...this.props.guias
        ].slice(0, maxGuidesToShow);
        return /*#__PURE__*/ jsx_runtime_.jsx(carousel/* default */.Z, {
            ...copyGuides
        });
    }
    renderShowMoreButton() {
        // TODO Hay que hacer que el boton este sea un componente unico
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(button_module_default()).button} ${(button_module_default()).showMore}`,
            onClick: ()=>this.showMore(),
            children: "▽ Mostrar m\xe1s"
        });
    }
    showMore() {
        this.setState({
            collapsed: false
        });
    }
}

// EXTERNAL MODULE: ./styles/global.module.scss
var global_module = __webpack_require__(841);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
;// CONCATENATED MODULE: ./containers/category/CategoryWrapper.tsx







class CategoryWrapper extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (global_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: this.props.name
                }),
                this.renderUpSide(),
                this.renderCategories(),
                this.renderDownSide()
            ]
        });
    }
    renderCategories() {
        return this.props.categories.map((category, index)=>{
            return this.renderCategory(category, index);
        });
    }
    renderCategory(category, index) {
        if (category.categories.length) return /*#__PURE__*/ jsx_runtime_.jsx(CategoryNav, {
            ...this.getGuiasFromCategoryWrapper(category)
        }, index);
        return category.landing ? /*#__PURE__*/ jsx_runtime_.jsx(CategoryNav, {
            ...category
        }, index) : /*#__PURE__*/ jsx_runtime_.jsx(CategoryShowMore, {
            ...category
        }, index);
    }
    getGuiasFromCategoryWrapper(category) {
        let guides = [];
        for (const auxCategory of category.categories){
            guides = guides.concat(auxCategory.guias);
            if (guides.length > 2) break;
        }
        const categoryCopy = {
            ...category
        };
        categoryCopy.guias = guides;
        categoryCopy.categories = [];
        return categoryCopy;
    }
    renderUpSide() {
        const content = this.props.upsideHTML;
        if (!content) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: external_isomorphic_dompurify_default().sanitize(this.convertMarkDown(content))
            }
        });
    }
    renderDownSide() {
        const content = this.props.downsideHTML;
        if (!content) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: external_isomorphic_dompurify_default().sanitize(this.convertMarkDown(content))
            }
        });
    }
    convertMarkDown(content) {
        return cache/* default.converter.makeHtml */.Z.converter.makeHtml(content);
    }
}

;// CONCATENATED MODULE: ./containers/category/GuideWrapper.tsx







class GuideWrapper extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: this.props.downsideHTML && this.props.guias.length > 3 ? true : false
        };
    }
    render() {
        const category = this.props;
        const showMore = this.state.collapsed ? this.renderShowMoreButton() : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (global_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: category.name
                }),
                this.renderUpSide(),
                this.renderGuides(),
                showMore,
                this.renderDownSide()
            ]
        });
    }
    renderGuides() {
        const guideLength = this.props.guias.length;
        if (!guideLength) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        const maxGuidesToShow = this.state.collapsed ? 3 : guideLength;
        const copyGuides = [
            ...this.props.guias
        ].slice(0, maxGuidesToShow);
        return /*#__PURE__*/ jsx_runtime_.jsx(carousel/* default */.Z, {
            ...copyGuides
        });
    }
    renderShowMoreButton() {
        // TODO Hay que hacer que el boton este sea un componente unico
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `${(button_module_default()).button} ${(button_module_default()).showMore}`,
            onClick: ()=>this.showMore(),
            children: "▽ Mostrar m\xe1s"
        });
    }
    showMore() {
        this.setState({
            collapsed: false
        });
    }
    renderUpSide() {
        const content = this.props.upsideHTML;
        if (!content) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: external_isomorphic_dompurify_default().sanitize(this.convertMarkDown(content))
            }
        });
    }
    renderDownSide() {
        const content = this.props.downsideHTML;
        if (!content) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
                __html: external_isomorphic_dompurify_default().sanitize(this.convertMarkDown(content))
            }
        });
    }
    convertMarkDown(content) {
        return cache/* default.converter.makeHtml */.Z.converter.makeHtml(content);
    }
}

;// CONCATENATED MODULE: ./pages/guias/[...url]/index.tsx











function Guia(props) {
    const router = (0,router_.useRouter)();
    const getPostProps = ()=>{
        let guia = props.guia;
        guia.Post.content = cache/* default.converter.makeHtml */.Z.converter.makeHtml(guia.Post.content);
        const relationedPosts = props.relationedGuias.map((guia)=>{
            const aux = guia.Post;
            aux.url = "guias/" + guia.URL;
            return aux;
        });
        return {
            guia,
            relationedPosts: relationedPosts
        };
    };
    const getCryptoCardProps = ()=>{
        return {
            crypto: props.guia.crypto
        };
    };
    const getSectionWrapperProps = ()=>{
        return {
            title: "\xdaltimas Publicaciones",
            guias: props.lastGuias
        };
    };
    const getMetaTags = ()=>{
        const main = !utils/* default.isObjectEmpty */.Z.isObjectEmpty(props.guia) ? props.guia : props.category;
        const metaTags = !utils/* default.isObjectEmpty */.Z.isObjectEmpty(props.guia) ? props.guia.MetaTags : props.category.MetaTags;
        return {
            title: metaTags.title,
            description: metaTags.description,
            canonical: router.asPath,
            published_time: main.published_at,
            modified_time: main.updatedAt
        };
    };
    switch(props.type){
        case "guia":
            let header = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
            if (props.guia.crypto) header = /*#__PURE__*/ jsx_runtime_.jsx(cryptoCard/* default */.Z, {
                ...getCryptoCardProps()
            });
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    (0,helmet/* getHead */.c)(getMetaTags()),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "post",
                        children: [
                            header,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mediaPostWrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Post, {
                                    ...getPostProps()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sectionWrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(sectionWrapper/* default */.Z, {
                                        ...getSectionWrapperProps()
                                    }),
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            });
        // Aqui hay dos casos:
        // 1: La categoria es un wrapper de categorias
        // Hay que comprobar que los hijos tengan o no landing y si tienen al menos un articulo, sino no se muestra
        // 2: La categoria es un wrapper de guias. Aqui puede mostrar o no un articulo html
        case "category":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    (0,helmet/* getHead */.c)(getMetaTags()),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "category",
                        children: props.category.categories.length ? /*#__PURE__*/ jsx_runtime_.jsx(CategoryWrapper, {
                            ...props.category
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(GuideWrapper, {
                            ...props.category
                        })
                    })
                ]
            });
        default:
            return "";
    }
}
const getServerSideProps = async (context)=>{
    const constructLastGuias = (lastGuias)=>{
        return lastGuias.slice(0, 6);
    };
    const removeRepeated = (lastGuias, relationedGuias)=>{
        return lastGuias.filter((guiaA)=>!relationedGuias.some((guiaB)=>guiaA.id === guiaB._id));
    };
    const constructRelationedGuias = (lastGuias, relationedGuias)=>{
        const relationedGuiasLength = relationedGuias.length;
        if (relationedGuiasLength < 5) {
            const auxAdd = 5 - relationedGuiasLength;
            const slicedElements = lastGuias.splice(0, auxAdd);
            return relationedGuias.concat(slicedElements);
        }
        return relationedGuias;
    };
    try {
        const { url  } = context.params; // = [ 'analisis-tecnico', 'indicadores' ];
        let type = "";
        let urlConcat = "";
        if (url && Array.isArray(url)) urlConcat = url.join("@");
        const nonUrl = url.join("/");
        const [category, guia, auxLastGuias] = await Promise.all([
            GuiaStore/* default.getCategory */.Z.getCategory(urlConcat),
            GuiaStore/* default.getGuia */.Z.getGuia(urlConcat),
            GuiaStore/* default.getGuias */.Z.getGuias(11, "DESC", nonUrl)
        ]);
        let lastGuias = auxLastGuias;
        let relationedGuias = [];
        if (!utils/* default.isObjectEmpty */.Z.isObjectEmpty(guia)) {
            type = "guia";
            const categoriesId = guia.categories.map((category)=>category.id);
            relationedGuias = await GuiaStore/* default.getGuiasFindRelationedGuias */.Z.getGuiasFindRelationedGuias(categoriesId, nonUrl);
            lastGuias = removeRepeated(lastGuias, relationedGuias);
            relationedGuias = constructRelationedGuias(lastGuias, relationedGuias);
        }
        if (!utils/* default.isObjectEmpty */.Z.isObjectEmpty(category)) {
            if (!category.landing) throw new Error("Tiene category sin landing") // TODO mejor hacer todo al final
            ;
            type = "category";
        }
        if (type === "") throw new Error("No tiene landing ni guia");
        lastGuias = constructLastGuias(lastGuias);
        return {
            props: {
                type,
                guia,
                category,
                relationedGuias,
                lastGuias
            }
        };
    } catch (error) {
        console.log(error);
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
var __webpack_exports__ = __webpack_require__.X(0, [398,675,505,664,553,927,337,441,366,3,295], () => (__webpack_exec__(1467)));
module.exports = __webpack_exports__;

})();