(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(14186)}])},5651:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(85893),i=n(67294),r=n(59927),a=n(29238),o=n.n(a),c=n(12545);class l extends i.Component{render(){return r.Z.isObjectEmpty(this.props)?"":(0,s.jsx)("div",{className:"article",children:this.mountHtmlContent()})}mountHtmlContent(){let e=this.convertMarkDown(this.props.content);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:o().sanitize(e)}})})}convertMarkDown(e){return c.Z.converter.makeHtml(e)}constructor(e){super(e),this.state={}}}},52366:function(e,t,n){"use strict";var s=n(85893),i=n(67294),r=n(54862),a=n(63433),o=n(25675),c=n.n(o);class l extends i.Component{render(){return(0,s.jsxs)("div",{className:"sectionWrapperPosts",children:[(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("span",{children:this.props.title})}),(0,s.jsx)("div",{className:"postsWrapper",children:this.renderSectionPostAll()})]})}renderSectionPost(e,t){let n=e.Post,i=n.coverImage.formats.small?n.coverImage.formats.small.url:n.coverImage.formats.thumbnail.url;return(0,s.jsx)("div",{className:"post",onClick:()=>this.redirect(e.URL),children:(0,s.jsxs)("a",{href:r.ZP.hostFront+"/guias/"+e.URL,onClick:e=>e.preventDefault(),children:[(0,s.jsx)("div",{className:"imageWrapper",children:(0,s.jsx)(c(),{className:"coverImage",src:r.ZP.host+i,alt:n.coverImage.alternativeText,width:300,height:300})}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("span",{className:"cardTitle",children:n.title}),(0,s.jsxs)("div",{className:"extraInfo",children:[(0,s.jsx)("div",{className:"difficulty",children:(0,s.jsx)("span",{children:n.difficulty})}),(0,s.jsx)("div",{className:"publishedDate",children:this.formatDate(e.updatedAt)}),(0,s.jsxs)("div",{className:"readTime",children:[(0,s.jsx)("i",{className:"icon"}),(0,s.jsxs)("span",{children:[" ",n.readTime+"min."," "]})]})]})]})]})},t)}renderSectionPostAll(){var e;return null===(e=this.props.guias)||void 0===e?void 0:e.map((e,t)=>this.renderSectionPost(e,t))}redirect(e){this.props.navigateWrapped("/guias/"+e)}formatDate(e){let t=new Date(e),n=t.toLocaleDateString("es-ES",{month:"short"});return n=n.charAt(0).toUpperCase()+n.slice(1),t.getDate()+" "+n+", "+t.getFullYear()}constructor(e){super(e),this.state={}}}t.Z=(0,a.Z)(l)},14186:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return o},default:function(){return c}});var s=n(85893),i=n(5651),r=n(52366),a=n(26337),o=!0;function c(e){return(0,s.jsxs)(s.Fragment,{children:[(0,a.c)({title:e.landingInfo.MetaTags.title,description:e.landingInfo.MetaTags.description,canonical:"",published_time:e.landingInfo.published_at,modified_time:e.landingInfo.updatedAt}),(0,s.jsxs)("div",{className:"home",children:[(0,s.jsx)("div",{className:"articleWrapper",children:(0,s.jsx)(i.Z,{content:e.landingInfo.content})}),(0,s.jsx)("div",{className:"sectionWrapper latestPosts",children:(0,s.jsx)(r.Z,{title:"\xdaltimas Publicaciones",guias:e.guias})})]})]})}},26337:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var s=n(85893),i=n(54862),r=n(9008),a=n.n(r);function o(e,t){let n=i.ZP.hostFront+e.canonical,r=t?(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"}):(0,s.jsx)(s.Fragment,{});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"title",content:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description}),(0,s.jsx)("link",{rel:"canonical",href:n}),(0,s.jsx)("meta",{property:"article:published_time",content:e.published_time}),(0,s.jsx)("meta",{property:"article:modified_time",content:e.modified_time}),(0,s.jsx)("meta",{property:"og:updated_time",content:e.modified_time}),(0,s.jsx)("meta",{property:"og:title",content:e.title}),(0,s.jsx)("meta",{property:"og:description",content:e.description}),(0,s.jsx)("meta",{property:"og:url",content:n}),r]})})}}},function(e){e.O(0,[238,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);