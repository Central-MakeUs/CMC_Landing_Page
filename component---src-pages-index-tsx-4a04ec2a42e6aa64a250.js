"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[691],{4270:function(e){const a=/[\p{Lu}]/u,t=/[\p{Ll}]/u,s=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,r=new RegExp("^"+i.source),c=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):i(e);return e!==i(e)&&(e=((e,s,n)=>{let i=!1,r=!1,c=!1;for(let l=0;l<e.length;l++){const o=e[l];i&&a.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,c=r,r=!0,l++):r&&c&&t.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),c=r,r=!1,i=!0):(i=s(o)===o&&n(o)!==o,c=r,r=n(o)===o&&s(o)!==o)}return e})(e,i,o)),e=e.replace(r,""),e=n.preserveConsecutiveUppercase?((e,a)=>(s.lastIndex=0,e.replace(s,(e=>a(e)))))(e,i):i(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,a)=>(c.lastIndex=0,l.lastIndex=0,e.replace(c,((e,t)=>a(t))).replace(l,(e=>a(e)))))(e,o)};e.exports=o,e.exports.default=o},6885:function(e,a,t){t.d(a,{L:function(){return m},M:function(){return w},P:function(){return C},S:function(){return W},_:function(){return c},a:function(){return r},b:function(){return d},g:function(){return u},h:function(){return l}});var s=t(9953),n=(t(4270),t(7225)),i=t.n(n);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},r.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a.indexOf(t=i[s])>=0||(n[t]=e[t]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,a,t){const s={};let n="gatsby-image-wrapper";return"fixed"===t?(s.width=e,s.height=a):"constrained"===t&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:s}}function d(e,a,t,s,n){return void 0===n&&(n={}),r({},t,{loading:s,shouldLoad:e,"data-main-image":"",style:r({},n,{opacity:a?1:0})})}function u(e,a,t,s,n,i,c,l){const o={};i&&(o.backgroundColor=i,"fixed"===t?(o.width=s,o.height=n,o.backgroundColor=i,o.position="relative"):("constrained"===t||"fullWidth"===t)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),l&&(o.objectPosition=l);const d=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:a?0:1,transition:"opacity 500ms linear"},o)});return d}const p=["children"],g=function(e){let{layout:a,width:t,height:n}=e;return"fullWidth"===a?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/t*100+"%"}}):"constrained"===a?s.createElement("div",{style:{maxWidth:t,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:a}=e,t=c(e,p);return s.createElement(s.Fragment,null,s.createElement(g,r({},t)),a,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:a,srcSet:t,loading:n,alt:i="",shouldLoad:l}=e,o=c(e,h);return s.createElement("img",r({},o,{decoding:"async",loading:n,src:l?a:void 0,"data-src":l?void 0:a,srcSet:l?t:void 0,"data-srcset":l?void 0:t,alt:i}))},x=function(e){let{fallback:a,sources:t=[],shouldLoad:n=!0}=e,i=c(e,b);const l=i.sizes||(null==a?void 0:a.sizes),o=s.createElement(f,r({},i,a,{sizes:l,shouldLoad:n}));return t.length?s.createElement("picture",null,t.map((e=>{let{media:a,srcSet:t,type:i}=e;return s.createElement("source",{key:`${a}-${i}-${t}`,type:i,media:a,srcSet:n?t:void 0,"data-srcset":n?void 0:t,sizes:l})})),o):o};var j;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},x.displayName="Picture",x.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],C=function(e){let{fallback:a}=e,t=c(e,v);return a?s.createElement(x,r({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):s.createElement("div",r({},t))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(j=x.propTypes)?void 0:j.sources,alt:function(e,a,t){return e[a]?new Error(`Invalid prop \`${a}\` supplied to \`${t}\`. Validation failed.`):null}};const w=function(e){return s.createElement(s.Fragment,null,s.createElement(x,r({},e)),s.createElement("noscript",null,s.createElement(x,r({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=x.propTypes;const y=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],_=["style","className"],N=e=>e.replace(/\n/g,""),L=function(e,a,t){for(var s=arguments.length,n=new Array(s>3?s-3:0),r=3;r<s;r++)n[r-3]=arguments[r];return e.alt||""===e.alt?i().string.apply(i(),[e,a,t].concat(n)):new Error(`The "alt" prop is required in ${t}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:i().object.isRequired,alt:L},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],M=new Set;let P,T;const I=function(e){let{as:a="div",image:n,style:i,backgroundColor:d,className:u,class:p,onStartLoad:g,onLoad:m,onError:h}=e,b=c(e,E);const{width:f,height:x,layout:j}=n,v=o(f,x,j),{style:C,className:w}=v,y=c(v,k),_=(0,s.useRef)(),N=(0,s.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(u=p);const L=function(e,a,t){let s="";return"fullWidth"===e&&(s=`<div aria-hidden="true" style="padding-top: ${t/a*100}%;"></div>`),"constrained"===e&&(s=`<div style="max-width: ${a}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${t}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),s}(j,f,x);return(0,s.useEffect)((()=>{P||(P=t.e(781).then(t.bind(t,2781)).then((e=>{let{renderImageToString:a,swapPlaceholderImage:t}=e;return T=a,{renderImageToString:a,swapPlaceholderImage:t}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function a(){e.removeEventListener("load",a),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void M.add(N);if(T&&M.has(N))return;let a,s;return P.then((e=>{let{renderImageToString:t,swapPlaceholderImage:c}=e;_.current&&(_.current.innerHTML=t(r({isLoading:!0,isLoaded:M.has(N),image:n},b)),M.has(N)||(a=requestAnimationFrame((()=>{_.current&&(s=c(_.current,N,M,i,g,m,h))}))))})),()=>{a&&cancelAnimationFrame(a),s&&s()}}),[n]),(0,s.useLayoutEffect)((()=>{M.has(N)&&T&&(_.current.innerHTML=T(r({isLoading:M.has(N),isLoaded:M.has(N),image:n},b)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,s.createElement)(a,r({},y,{style:r({},C,i,{backgroundColor:d}),className:`${w}${u?` ${u}`:""}`,ref:_,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},O=(0,s.memo)((function(e){return e.image?(0,s.createElement)(I,e):null}));O.propTypes=S,O.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(a){let{src:t,__imageData:n,__error:i}=a,l=c(a,z);return i&&console.warn(i),n?s.createElement(e,r({image:n},l)):(console.warn("Image not loaded",t),null)}}const $=R((function(e){let{as:a="div",className:t,class:n,style:i,image:l,loading:p="lazy",imgClassName:g,imgStyle:h,backgroundColor:b,objectFit:f,objectPosition:x}=e,j=c(e,y);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(t=n),h=r({objectFit:f,objectPosition:x,backgroundColor:b},h);const{width:v,height:L,layout:S,images:E,placeholder:k,backgroundColor:M}=l,P=o(v,L,S),{style:T,className:I}=P,O=c(P,_),z={fallback:void 0,sources:[]};return E.fallback&&(z.fallback=r({},E.fallback,{srcSet:E.fallback.srcSet?N(E.fallback.srcSet):void 0})),E.sources&&(z.sources=E.sources.map((e=>r({},e,{srcSet:N(e.srcSet)})))),s.createElement(a,r({},O,{style:r({},T,i,{backgroundColor:b}),className:`${I}${t?` ${t}`:""}`}),s.createElement(m,{layout:S,width:v,height:L},s.createElement(C,r({},u(k,!1,S,v,L,M,f,x))),s.createElement(w,r({"data-gatsby-image-ssr":"",className:g},j,d("eager"===p,!1,z,p,h)))))})),A=function(e,a){for(var t=arguments.length,s=new Array(t>2?t-2:0),n=2;n<t;n++)s[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==a&&"height"!==a||!e[a]?i().number.apply(i(),[e,a].concat(s)):new Error(`"${a}" ${e[a]} may not be passed when layout is fullWidth.`)},D=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:L,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};$.displayName="StaticImage",$.propTypes=q;const W=R(O);W.displayName="StaticImage",W.propTypes=q},573:function(e,a,t){t.r(a),t.d(a,{Head:function(){return I},default:function(){return T}});var s={};t.r(s),t.d(s,{ut:function(){return b},b8:function(){return f},R2:function(){return x},cW:function(){return j},YN:function(){return v},rv:function(){return C},uY:function(){return w},TU:function(){return y},dc:function(){return _},ze:function(){return N},pQ:function(){return L}});var n=t(8073),i=t(6885),r=t(9953);var c=t(1874);const l=()=>{const{isVisible:e,scrollToTop:a}=(()=>{const{0:e,1:a}=(0,r.useState)(!1),t=()=>{const e=window.scrollY;a(e>200)};return(0,r.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[]),{isVisible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}})();return(0,c.jsx)("button",{type:"button",onClick:a,className:(0,n.Z)("floating-button-module--button--644e8",{"floating-button-module--visible--84a20":e}),children:(0,c.jsx)(i.S,{src:"./images/top-button.png",alt:"위를 가리키는 흰색 화살표",__imageData:t(1955)})})};const o=e=>{let{className:a,children:t}=e;return(0,c.jsx)("section",{className:(0,n.Z)("section-module--section--46e7e",a),children:t})};o.Header=e=>{let{title:a,description:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"section-module--heading--21429",children:a}),(0,c.jsx)("p",{className:"section-module--description--7e522",children:t}),(0,c.jsx)("div",{className:"section-module--background_container--94d68",children:(0,c.jsx)("div",{className:"section-module--background--c51dc"})})]})};var d="challenger-section-module--active_button--f7eb0";const u={Plan:{name:"Planner",description:"사용자의 니즈와 비즈니스 목표를 고려하여 서비스의\n전략을 수립하고 설계합니다. 또한 PM으로써\n관리 프로세스를 주도하며 조율하는 역할을 수행합니다."},Design:{name:"Designer",description:"사용자가 편안하게 사용 가능한 화면을 디자인 함으로써,\n사용자에게 최적의 시각적, 기능적 경험을 제공합니다."},Client:{name:"Client Developer",description:"디자이너와 서버 개발자간 긴밀한 협력을 통해 최상의\n프로덕트를 구현하기 위한 코드를 구현합니다."},Server:{name:"Server Developer",description:"기획자와 클라이언트 개발자와의 협력을 통해 최상의\n성능을 발휘하는 코드를 구현합니다."}};let p=function(e){return e.PLAN="Plan",e.DESIGN="Design",e.CLIENT="Client",e.SERVER="Server",e}({});const g=()=>{const{0:e,1:a}=(0,r.useState)(p.PLAN);return(0,c.jsxs)(o,{className:"challenger-section-module--challenger--d6f3c",children:[(0,c.jsx)(o.Header,{title:"cmc challenger",description:"CMC는 기획자 디자이너 개발자가\n함께 모여 성장합니다"}),(0,c.jsxs)("div",{className:"challenger-section-module--role--41533",children:[(0,c.jsxs)("nav",{children:[(0,c.jsx)("button",{type:"button",onClick:()=>a(p.PLAN),className:(0,n.Z)({[d]:e===p.PLAN}),children:"Plan"}),(0,c.jsx)("button",{type:"button",onClick:()=>a(p.DESIGN),className:(0,n.Z)({[d]:e===p.DESIGN}),children:"Design"}),(0,c.jsx)("button",{type:"button",onClick:()=>a(p.CLIENT),className:(0,n.Z)({[d]:e===p.CLIENT}),children:"Web • iOS • AOS"}),(0,c.jsx)("button",{type:"button",onClick:()=>a(p.SERVER),className:(0,n.Z)({[d]:e===p.SERVER}),children:"Server"})]}),(0,c.jsxs)("div",{className:"challenger-section-module--mobile_card--3ac84",children:[(0,c.jsxs)("h3",{children:[u[e].name,e===p.CLIENT&&(0,c.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,c.jsx)("p",{children:u[e].description})]}),(0,c.jsx)("div",{className:"challenger-section-module--card_grid--bd477",children:Object.keys(u).map((e=>{const a=u[e];return(0,c.jsxs)("div",{className:"challenger-section-module--pc_card--acbe7",children:[(0,c.jsxs)("h3",{children:[a.name,e===p.CLIENT&&(0,c.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,c.jsx)("p",{children:a.description})]},e)}))})]})]})};var m=t(1025),h=t.n(m),b="features-section-module--end--11114",f="features-section-module--experience--ad0b3",x="features-section-module--features--36e5d",j="features-section-module--grid_container--dafbe",v="features-section-module--mobile_empty_space--46bf1",C="features-section-module--mobile_horizontal_divider--79cec",w="features-section-module--mobile_vertical_divider--874f3",y="features-section-module--pc_empty_space--0f15d",_="features-section-module--pc_horizontal_divider--bf901",N="features-section-module--pc_horizontal_space--2d10e",L="features-section-module--pc_vertical_divider--43517";const S=()=>(0,c.jsxs)(o,{className:x,children:[(0,c.jsx)(o.Header,{title:"cmc features",description:"CMC는 실력있는 리더진, 챌린저들과\n다양한 경험을 쌓을 수 있습니다"}),(0,c.jsxs)("div",{className:j,children:[(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"실력있는 리더진"}),(0,c.jsxs)("p",{children:["성공적인 런칭 노하우를 가진",(0,c.jsx)("br",{}),"리더진들이 여러분의 성공적인",(0,c.jsx)("br",{}),"런칭을 위해 도움을 드립니다."]})]}),(0,c.jsx)("div",{className:w}),(0,c.jsx)("div",{className:L}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"네트워킹"}),(0,c.jsxs)("p",{children:["CMC는 실력 있는 챌린저로",(0,c.jsx)("br",{}),"구성되어 있습니다.",(0,c.jsx)("br",{}),"이들과 네트워킹을 통해 훌륭한 인재들과 교류할 수 있으며 여러분의 성공적인 런칭을 위해 도움을 드립니다."]})]}),(0,c.jsx)("div",{className:C}),(0,c.jsx)("div",{className:v}),(0,c.jsx)("div",{className:L}),(0,c.jsx)("div",{className:(0,n.Z)(C,s.mobile_end)}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"기획 멘토링"}),(0,c.jsxs)("p",{children:["기획안의 완성도와 비지니스",(0,c.jsx)("br",{}),"모델 디벨롭을 위한 현직",(0,c.jsx)("br",{}),"전문가의 피드백을 제공합니다."]})]}),(0,c.jsx)("div",{className:w}),(0,c.jsx)("div",{className:_}),(0,c.jsx)("div",{className:y}),(0,c.jsx)("div",{className:_}),(0,c.jsx)("div",{className:_}),(0,c.jsxs)("div",{className:N,children:[(0,c.jsx)("div",{className:_}),(0,c.jsx)(h(),{})]}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"GUI 멘토링"}),(0,c.jsx)("p",{children:"UI/UX를 개선하기 위한 구체적인 방안을 현직 전문가의 피드백을 제공합니다."})]}),(0,c.jsx)("div",{className:C}),(0,c.jsx)("div",{className:L}),(0,c.jsx)("div",{className:v}),(0,c.jsx)("div",{className:(0,n.Z)(C,b)}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"개발 컨퍼런스"}),(0,c.jsx)("p",{children:"지식을 공유하면 성장할 수 있는 만큼,우리가 우리의 지식을 공유하는 과정에서도 더욱 성장할 수 있습니다."})]}),(0,c.jsx)("div",{className:L}),(0,c.jsx)("div",{className:w}),(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("h3",{children:"데모데이"}),(0,c.jsx)("p",{children:"VC 및 다양한 기업 관계자들이 참여하는 데모데이에서 CMC 활동을 통해 만든 프로덕트를 홍보합니다."})]})]})]});var E="identity-section-module--image--2f8a9",k="identity-section-module--overlay--34962";const M=()=>(0,c.jsxs)(o,{className:"identity-section-module--identity--1e96d",children:[(0,c.jsx)(o.Header,{title:"cmc identity",description:"CMC는 도전을 즐기며,\n새로운 도전에 맞서는 사람들입니다"}),(0,c.jsxs)("div",{className:"identity-section-module--people--028e8",children:[(0,c.jsxs)("figure",{children:[(0,c.jsx)(i.S,{src:"./images/challenger.png",alt:"너디너리 데모데이 간판",objectFit:"fill",className:E,__imageData:t(2566)}),(0,c.jsx)("div",{className:k}),(0,c.jsx)("figcaption",{children:"도전자"}),(0,c.jsxs)("p",{children:["우리는 도전자입니다. 우리는 모두 도전을",(0,c.jsx)("br",{}),"즐기며, 새로운 도전에 맞서는 사람들입니다.",(0,c.jsx)("br",{}),"우리는 끊임없이 도전하는 자세를 가지고 있으며,",(0,c.jsx)("br",{}),"이를 통해 성장하고 혁신을 이루어냅니다.",(0,c.jsx)("br",{}),'우리는 자신을 "챌린저"라 하며, 어려움을',(0,c.jsx)("br",{}),"극복하고 목표를 달성하는 역량을 갖추고 있습니다."]})]}),(0,c.jsxs)("figure",{children:[(0,c.jsx)(i.S,{src:"./images/pioneer.png",alt:"주먹을 쥐고 앉아서 정면을 바라보는 사람들",objectFit:"fill",className:E,__imageData:t(8433)}),(0,c.jsx)("div",{className:k}),(0,c.jsx)("figcaption",{children:"개척가"}),(0,c.jsxs)("p",{children:["우리는 기존의 틀에 얽매이지 않고,",(0,c.jsx)("br",{}),"새로운 영역을 개척하는 사람들입니다.",(0,c.jsx)("br",{}),"우리는 혁신적인 아이디어와 독창적인",(0,c.jsx)("br",{}),"접근으로 새로운 틀을 만들어내며,",(0,c.jsx)("br",{}),"미래를 모색하고 이끌어갑니다."]})]}),(0,c.jsxs)("figure",{children:[(0,c.jsx)(i.S,{src:"./images/expert.png",alt:"노트북을 하고있는 사람들",objectFit:"fill",className:E,__imageData:t(1155)}),(0,c.jsx)("div",{className:k}),(0,c.jsx)("figcaption",{children:"전문가"}),(0,c.jsxs)("p",{children:["전문가들로 이루어진 CMC의 팀은 각자의",(0,c.jsx)("br",{}),"전문 분야에 집중하여 협업합니다.",(0,c.jsx)("br",{}),"우리 프로젝트에서 나의 역할이 없다면,",(0,c.jsx)("br",{}),"팀은 앞으로 나아갈 수 없습니다."]})]})]})]});const P=()=>(0,c.jsxs)(o,{className:"intro-section-module--intro--06041",children:[(0,c.jsx)(o.Header,{title:"introduction",description:"우리만의 룰을 세워 세상을 바꾸는\n우리는 CMC ‘챌린저’입니다"}),(0,c.jsxs)("div",{className:"intro-section-module--grid_container--a0dac",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"현재까지 CMC의 팀"}),(0,c.jsx)("span",{children:"80+"})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{children:["지금까지 런칭된 앱 수",(0,c.jsx)("br",{}),"(Android, iOS 스토어)"]}),(0,c.jsx)("span",{children:"130+"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"CMC앱 전체 다운로드 수"}),(0,c.jsx)("span",{children:"5000+"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"CMC 챌린저의 외주연계 횟수"}),(0,c.jsx)("span",{children:"100+"})]})]})]});var T=()=>(0,c.jsxs)("main",{children:[(0,c.jsx)(P,{}),(0,c.jsx)(M,{}),(0,c.jsx)(g,{}),(0,c.jsx)(S,{}),(0,c.jsx)(l,{}),(0,c.jsx)("div",{className:"home-module--space--12e23"})]});const I=()=>(0,c.jsx)("title",{children:"CMC"})},2566:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#786858","images":{"fallback":{"src":"/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png","srcSet":"/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/81b6a/challenger.png 279w,\\n/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/89e2c/challenger.png 558w,\\n/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/de1a4/challenger.webp 279w,\\n/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/a79b9/challenger.webp 558w,\\n/CMC_Landing_Page/static/8777464a403dc3881024ab12d8ccefaf/f0f4c/challenger.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},1955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7878c8","images":{"fallback":{"src":"/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png","srcSet":"/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/f2a56/top-button.png 38w,\\n/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/7458e/top-button.png 75w,\\n/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/0852d/top-button.webp 38w,\\n/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/18188/top-button.webp 75w,\\n/CMC_Landing_Page/static/022da01af7e1fdbc0ed8824b02181185/c65bc/top-button.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},8433:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a8a8","images":{"fallback":{"src":"/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png","srcSet":"/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/81b6a/pioneer.png 279w,\\n/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/89e2c/pioneer.png 558w,\\n/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/de1a4/pioneer.webp 279w,\\n/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/a79b9/pioneer.webp 558w,\\n/CMC_Landing_Page/static/410d4db1d6a8b9f2313c576e24c3d6f8/f0f4c/pioneer.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},1155:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png","srcSet":"/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/81b6a/expert.png 279w,\\n/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/89e2c/expert.png 558w,\\n/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/de1a4/expert.webp 279w,\\n/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/a79b9/expert.webp 558w,\\n/CMC_Landing_Page/static/c8900cc1ec055b971efc7acb82e484a0/f0f4c/expert.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4a04ec2a42e6aa64a250.js.map