(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{68423:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/criptomonedas",function(){return r(24853)}])},5651:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(85893),a=r(67294),n=r(59927),i=r(29238),c=r.n(i),o=r(12545);class l extends a.Component{render(){return n.Z.isObjectEmpty(this.props)?"":(0,s.jsx)("div",{className:"article",children:this.mountHtmlContent()})}mountHtmlContent(){let e=this.convertMarkDown(this.props.content);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c().sanitize(e)}})})}convertMarkDown(e){return o.Z.converter.makeHtml(e)}constructor(e){super(e),this.state={}}}},64244:function(e,t,r){"use strict";var s=r(85893),a=r(67294),n=r(54862),i=r(63433),c=r(25675),o=r.n(c);class l extends a.Component{render(){return(0,s.jsxs)("div",{className:"sectionWrapperPosts",children:[(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("span",{children:this.props.title})}),(0,s.jsx)("div",{className:"postsWrapper",children:this.renderSectionPostAll()})]})}renderSectionPost(e,t){return(0,s.jsx)("div",{className:"post",onClick:()=>this.redirect(e.url),children:(0,s.jsxs)("a",{href:n.ZP.hostFront+"/"+e.url,onClick:e=>e.preventDefault(),children:[(0,s.jsx)("div",{className:"imageWrapper",children:(0,s.jsx)(o(),{className:"coverImage",src:n.ZP.host+e.coverImage.formats.small.url,alt:e.coverImage.alternativeText,width:300,height:300})}),(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("span",{className:"cardTitle",children:e.title}),(0,s.jsxs)("div",{className:"extraInfo",children:[(0,s.jsx)("div",{className:"difficulty",children:(0,s.jsx)("span",{children:e.difficulty})}),(0,s.jsx)("div",{className:"publishedDate",children:this.formatDate(e.updatedAt)}),(0,s.jsxs)("div",{className:"readTime",children:[(0,s.jsx)("i",{className:"icon"}),(0,s.jsxs)("span",{children:[" ",e.readTime+"min."," "]})]})]})]})]})},t)}renderSectionPostAll(){return this.props.posts.map((e,t)=>this.renderSectionPost(e,t))}redirect(e){this.props.navigateWrapped("/"+e)}formatDate(e){let t=new Date(e),r=t.toLocaleDateString("es-ES",{month:"short"});return r=r.charAt(0).toUpperCase()+r.slice(1),t.getDate()+" "+r+", "+t.getFullYear()}constructor(e){super(e),this.state={}}}t.Z=(0,i.Z)(l)},24853:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return j},default:function(){return v}});var s,a,n=r(85893),i=r(67294),c=r(5651);(s=a||(a={})).name="name",s.price="price",s.volume24h="total_volume",s.market_cap_rank="market_cap_rank",s.market_cap="market_cap",s.circulating_supply="circulating_supply",s.price24h="price_change_percentage_24h";class o extends i.Component{render(){return(0,n.jsx)("div",{className:"wrapperTable",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:this.renderHeaderTable()}),(0,n.jsx)("tbody",{children:this.renderBodyTable()})]})})}renderHeaderTable(){return(0,n.jsx)("tr",{children:this.renderHeaderTh()})}renderHeaderTh(){return this.props.TableProps.headers.map((e,t)=>(0,n.jsx)("th",{className:e.field===a.name?"name":"",children:e.display},t))}renderBodyTable(){return this.props.TableProps.rows.map((e,t)=>(0,n.jsx)("tr",{children:this.renderBodyTd(e)},t))}renderBodyTd(e){return e.map((e,t)=>(0,n.jsx)("td",{children:e},t))}constructor(e){super(e),this.state={}}}var l=r(12545),p=r(54862),d=r(59927),h=r(63433);class m extends i.Component{render(){return d.Z.isObjectEmpty(this.props)?"":(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o,{...this.getTableProps()})})}getTableProps(){return{TableProps:{headers:this.props.headers,rows:this.constructRows()}}}constructRows(){return this.props.cryptos.map(e=>[e.market_cap_rank,this.switchCryptoFields(e,a.name),this.switchCryptoFields(e,a.price),this.switchCryptoFields(e,a.price24h),this.switchCryptoFields(e,a.market_cap),this.switchCryptoFields(e,a.volume24h),this.switchCryptoFields(e,a.circulating_supply)])}switchCryptoFields(e,t){switch(t){case a.name:return this.getName(e);case a.price:return l.Z.numberFormatter2decimals.format(e.current_price)+"$";case a.price24h:return this.getPrice24h(e.price_change_percentage_24h);case a.volume24h:return l.Z.numberFormatter.format(e.total_volume)+"$";case a.market_cap:return l.Z.numberFormatter.format(e.market_cap)+"$";case a.market_cap_rank:return e.market_cap_rank;case a.circulating_supply:return l.Z.numberFormatter0decimals.format(e.circulating_supply)}}getName(e){return(0,n.jsx)("a",{href:p.ZP.hostFront+"/criptomonedas/"+e.slug,onClick:t=>{t.preventDefault(),this.redirect(e.slug)},children:(0,n.jsx)("span",{className:"name",children:e.name})})}getPrice24h(e){return(0,n.jsx)("span",{className:Math.sign(e)>=0?"greenText":"redText",children:l.Z.numberFormatter2decimals.format(e)+"%"})}redirect(e){this.props.navigateWrapped("/criptomonedas/"+e)}constructor(e){super(e),this.state={}}}var u=(0,h.Z)(m),g=r(64244),_=r(63444);class y{static async getAllPosts(){let e=new URL(y.host+"/posts"),t=e.toString();return _.Z.baseFetch(t,"GET","")}static async getCryptoPosts(){let e=new URL(y.host+"/crypto-posts"),t=e.toString();return _.Z.baseFetch(t,"GET","")}static async getCryptoPost(e){let t=new URL(y.host+"/crypto-posts/"+e),r=t.toString();return _.Z.baseFetch(r,"GET","")}static async getCryptoArticle(e){let t=new URL(y.host+"/crypto-articles/"+e),r=t.toString();return _.Z.baseFetch(r,"GET","")}}y.host=p.ZP.host;class x{static async getAllCoins(e,t){let r=new URL(x.host+"/coins/markets");r.searchParams.append("vs_currency","usd"),r.searchParams.append("order","market_cap_desc"),r.searchParams.append("page",(e||1).toString()),r.searchParams.append("per_page",(t||250).toString());let s=r.toString();return _.Z.baseFetch(s,"GET","")}static async getHistoricalCoin(e,t){let r=new URL(x.host+"/coins/"+e+"/market_chart");r.searchParams.append("vs_currency","usd"),r.searchParams.append("days",t.toString());let s=r.toString();return _.Z.baseFetch(s,"GET","")}static async getHistoricalCoinRange(e,t,r){let s=new URL(x.host+"/coins/"+e+"/market_chart/range");s.searchParams.append("vs_currency","usd"),s.searchParams.append("from",t.toString()),s.searchParams.append("to",r.toString());let a=s.toString();return _.Z.baseFetch(a,"GET","")}static async getCurrentData(e){let t=new URL(x.host+"/coins/"+e);t.searchParams.append("localization","false"),t.searchParams.append("tickers","false"),t.searchParams.append("market_data","true"),t.searchParams.append("community_data","false"),t.searchParams.append("developer_data","false"),t.searchParams.append("sparkline","false");let r=t.toString();return _.Z.baseFetch(r,"GET","")}static async getStrapiCrypto(e){let t=new URL(y.host+"/cryptos/"+e),r=t.toString();return _.Z.baseFetch(r,"GET","")}static async getStrapiCryptoAll(e,t,r){let s=new URL(y.host+"/cryptos");s.searchParams.append("_sort",r||"market_cap_rank"),s.searchParams.append("_start",(e||0).toString()),s.searchParams.append("_limit",(t||100).toString());let a=s.toString();return _.Z.baseFetch(a,"GET","")}static async getStrapiCryptoCount(){let e=new URL(y.host+"/cryptos/count"),t=e.toString();return _.Z.baseFetch(t,"GET","")}}x.host="https://api.coingecko.com/api/v3";var f=r(26337),j=!0;function v(e){let[t,r]=i.useState(0),[s,a]=i.useState(e.cryptos),o=async()=>{try{r(t+=25);let e=await x.getStrapiCryptoAll(t,25);a([...s,...e])}catch(e){console.error(e)}};return(0,n.jsxs)(n.Fragment,{children:[(0,f.c)({title:e.landingInfo.MetaTags.title,description:e.landingInfo.MetaTags.description,canonical:"/criptomonedas",published_time:e.landingInfo.published_at,modified_time:e.landingInfo.updatedAt}),(0,n.jsxs)("div",{className:"home",children:[(0,n.jsx)("div",{className:"articleWrapper",children:(0,n.jsx)(c.Z,{content:e.landingInfo.content})}),(0,n.jsxs)("div",{className:"rankingCryptoWrapper",children:[(0,n.jsx)(u,{cryptos:s,headers:[{display:"#",field:"market_cap_rank"},{display:"Nombre",field:"name"},{display:"Precio",field:"current_price"},{display:"24h %",field:"price_change_percentage_24h"},{display:"Cap. de Mercado",field:"market_cap"},{display:"Volumen (24h)",field:"total_volume"},{display:"Acciones en Circulaci\xf3n",field:"circulating_supply"}]}),(0,n.jsx)("div",{className:"showMore",children:(0,n.jsx)("div",{className:"button",onClick:()=>o(),children:"▽ Mostrar m\xe1s"})})]}),(0,n.jsx)("div",{className:"sectionWrapper latestPosts",children:(0,n.jsx)(g.Z,{title:"\xdaltimas Publicaciones",posts:e.posts})})]})]})}},26337:function(e,t,r){"use strict";r.d(t,{c:function(){return c}});var s=r(85893),a=r(54862),n=r(9008),i=r.n(n);function c(e){let t=a.ZP.hostFront+e.canonical;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"title",content:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description}),(0,s.jsx)("link",{rel:"canonical",href:t}),(0,s.jsx)("meta",{property:"article:published_time",content:e.published_time}),(0,s.jsx)("meta",{property:"article:modified_time",content:e.modified_time}),(0,s.jsx)("meta",{property:"og:title",content:e.title}),(0,s.jsx)("meta",{property:"og:description",content:e.description}),(0,s.jsx)("meta",{property:"og:url",content:t})]})})}}},function(e){e.O(0,[238,774,888,179],function(){return e(e.s=68423)}),_N_E=e.O()}]);