(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[691],{8037:function(e,s,c){var t=c(9953);function a(e){return t.createElement("svg",e,t.createElement("g",{id:"Group 482"},[t.createElement("circle",{id:"Ellipse 60",cx:"25",cy:"25",r:"24.25",stroke:"#615DFF",strokeWidth:"1.5",key:0}),t.createElement("path",{id:"Vector 29",d:"M14 22.5L25.5 33.5L37 22.5",stroke:"#615DFF",strokeWidth:"1.5",key:1})]))}a.defaultProps={width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",className:"my-class"},e.exports=a,a.default=a},3746:function(e,s,c){"use strict";c.d(s,{T:function(){return d},p:function(){return l}});var t=c(8073),a=c(6885),i=c(9953);var n=c(1874);const d=()=>{const{isVisible:e,scrollToTop:s}=(()=>{const{0:e,1:s}=(0,i.useState)(!1),c=()=>{const e=window.scrollY;s(e>200)};return(0,i.useEffect)((()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)})),[]),{isVisible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}})();return(0,n.jsx)("button",{type:"button",onClick:s,className:(0,t.Z)("floating-button-module--button--644e8",{"floating-button-module--visible--84a20":e}),children:(0,n.jsx)(a.S,{src:"./images/top-button.png",alt:"위를 가리키는 흰색 화살표",__imageData:c(1955)})})};var r=c(535);const l=e=>{let{title:s,description:c,heroImage:t,pathname:a,children:i}=e;const d=(0,r.useStaticQuery)("65692087"),{title:l,description:o,siteUrl:p}=d.site.siteMetadata,{publicURL:m}=d.file,b={title:s||l,description:c||o,url:`${p}${"/"===a?"":a}`,image:`${p}${t||m}`};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:b.title}),(0,n.jsx)("link",{rel:"canonical",href:b.url}),(0,n.jsx)("meta",{name:"description",content:b.description}),(0,n.jsx)("meta",{name:"image",content:b.image}),(0,n.jsx)("meta",{property:"og:title",content:b.title}),(0,n.jsx)("meta",{property:"og:description",content:b.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:b.url}),(0,n.jsx)("meta",{property:"og:image",content:b.image}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:b.title}),(0,n.jsx)("meta",{name:"twitter:description",content:b.description}),(0,n.jsx)("meta",{property:"twitter:image",content:b.image}),i]})}},5814:function(e,s,c){"use strict";c.r(s),c.d(s,{Head:function(){return D},default:function(){return E}});var t=c(6885),a=c(3746),i=c(8073),n=c(9953),d=c(1874);const r=e=>{let{className:s,children:c}=e;return(0,d.jsx)("section",{className:(0,i.Z)("section-module--section--46e7e",s),children:c})};r.Header=e=>{let{title:s,description:c}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:"section-module--heading--21429",children:s}),(0,d.jsx)("p",{className:"section-module--description--7e522",children:c}),(0,d.jsx)("div",{className:"section-module--background_container--94d68",children:(0,d.jsx)("div",{className:"section-module--background--c51dc"})})]})};var l="challenger-section-module--active_button--f7eb0";const o={Plan:{name:"Planner",description:"사용자의 니즈와 비즈니스 목표를 고려하여 서비스의\n전략을 수립하고 설계합니다. 또한 PM으로써\n관리 프로세스를 주도하며 조율하는 역할을 수행합니다."},Design:{name:"Designer",description:"사용자가 편안하게 사용 가능한 화면을 디자인 함으로써,\n사용자에게 최적의 시각적, 기능적 경험을 제공합니다."},Client:{name:"Client Developer",description:"디자이너와 서버 개발자간 긴밀한 협력을 통해 최상의\n프로덕트를 구현하기 위한 코드를 구현합니다."},Server:{name:"Server Developer",description:"기획자와 클라이언트 개발자와의 협력을 통해 최상의\n성능을 발휘하는 코드를 구현합니다."}};let p=function(e){return e.PLAN="Plan",e.DESIGN="Design",e.CLIENT="Client",e.SERVER="Server",e}({});const m=()=>{const{0:e,1:s}=(0,n.useState)(p.PLAN);return(0,d.jsxs)(r,{className:"challenger-section-module--challenger--d6f3c",children:[(0,d.jsx)(r.Header,{title:"cmc challenger",description:"CMC는 기획자 디자이너 개발자가\n함께 모여 성장합니다"}),(0,d.jsxs)("div",{className:"challenger-section-module--role--41533",children:[(0,d.jsxs)("nav",{children:[(0,d.jsx)("button",{type:"button",onClick:()=>s(p.PLAN),className:(0,i.Z)({[l]:e===p.PLAN}),children:"Plan"}),(0,d.jsx)("button",{type:"button",onClick:()=>s(p.DESIGN),className:(0,i.Z)({[l]:e===p.DESIGN}),children:"Design"}),(0,d.jsx)("button",{type:"button",onClick:()=>s(p.CLIENT),className:(0,i.Z)({[l]:e===p.CLIENT}),children:"Web • iOS • AOS"}),(0,d.jsx)("button",{type:"button",onClick:()=>s(p.SERVER),className:(0,i.Z)({[l]:e===p.SERVER}),children:"Server"})]}),(0,d.jsxs)("div",{className:"challenger-section-module--mobile_card--3ac84",children:[(0,d.jsxs)("h3",{children:[o[e].name,e===p.CLIENT&&(0,d.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,d.jsx)("p",{children:o[e].description})]}),(0,d.jsx)("div",{className:"challenger-section-module--card_grid--bd477",children:Object.keys(o).map((e=>{const s=o[e];return(0,d.jsxs)("div",{className:"challenger-section-module--pc_card--acbe7",children:[(0,d.jsxs)("h3",{children:[s.name,e===p.CLIENT&&(0,d.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,d.jsx)("p",{children:s.description})]},e)}))})]})]})};var b=c(1025),x=c.n(b),h="features-section-module--experience--ad0b3",u="features-section-module--mobile_empty_space--46bf1",j="features-section-module--mobile_horizontal_divider--79cec",f="features-section-module--mobile_vertical_divider--874f3",g="features-section-module--pc_horizontal_divider--bf901",w="features-section-module--pc_vertical_divider--43517";const v=()=>(0,d.jsxs)(r,{className:"features-section-module--features--36e5d",children:[(0,d.jsx)(r.Header,{title:"cmc features",description:"CMC는 실력있는 리더진, 챌린저들과\n다양한 경험을 쌓을 수 있습니다"}),(0,d.jsxs)("div",{className:"features-section-module--grid_container--dafbe",children:[(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"실력있는 리더진"}),(0,d.jsxs)("p",{children:["성공적인 런칭 노하우를 가진",(0,d.jsx)("br",{}),"리더진들이 여러분의 성공적인",(0,d.jsx)("br",{}),"런칭을 위해 도움을 드립니다."]})]}),(0,d.jsx)("div",{className:f}),(0,d.jsx)("div",{className:w}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"네트워킹"}),(0,d.jsxs)("p",{children:["CMC는 실력 있는 챌린저로",(0,d.jsx)("br",{}),"구성되어 있습니다.",(0,d.jsx)("br",{}),"이들과 네트워킹을 통해 훌륭한 인재들과 교류할 수 있으며 여러분의 성공적인 런칭을 위해 도움을 드립니다."]})]}),(0,d.jsx)("div",{className:j}),(0,d.jsx)("div",{className:u}),(0,d.jsx)("div",{className:w}),(0,d.jsx)("div",{className:j}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"기획 멘토링"}),(0,d.jsxs)("p",{children:["기획안의 완성도와 비지니스",(0,d.jsx)("br",{}),"모델 디벨롭을 위한 현직",(0,d.jsx)("br",{}),"전문가의 피드백을 제공합니다."]})]}),(0,d.jsx)("div",{className:f}),(0,d.jsx)("div",{className:g}),(0,d.jsx)("div",{className:"features-section-module--pc_empty_space--0f15d"}),(0,d.jsx)("div",{className:g}),(0,d.jsx)("div",{className:g}),(0,d.jsxs)("div",{className:"features-section-module--pc_horizontal_space--2d10e",children:[(0,d.jsx)("div",{className:g}),(0,d.jsx)(x(),{})]}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"GUI 멘토링"}),(0,d.jsx)("p",{children:"UI/UX를 개선하기 위한 구체적인 방안을 현직 전문가의 피드백을 제공합니다."})]}),(0,d.jsx)("div",{className:j}),(0,d.jsx)("div",{className:w}),(0,d.jsx)("div",{className:u}),(0,d.jsx)("div",{className:(0,i.Z)(j,"features-section-module--end--11114")}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"개발 컨퍼런스"}),(0,d.jsx)("p",{children:"지식을 공유하면 성장할 수 있는 만큼,우리가 우리의 지식을 공유하는 과정에서도 더욱 성장할 수 있습니다."})]}),(0,d.jsx)("div",{className:w}),(0,d.jsx)("div",{className:f}),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h3",{children:"데모데이"}),(0,d.jsx)("p",{children:"VC 및 다양한 기업 관계자들이 참여하는 데모데이에서 CMC 활동을 통해 만든 프로덕트를 홍보합니다."})]})]})]});var N="identity-section-module--image--2f8a9",C="identity-section-module--overlay--34962";const S=()=>(0,d.jsxs)(r,{className:"identity-section-module--identity--1e96d",children:[(0,d.jsx)(r.Header,{title:"cmc identity",description:"CMC는 도전을 즐기며,\n새로운 도전에 맞서는 사람들입니다"}),(0,d.jsxs)("div",{className:"identity-section-module--people--028e8",children:[(0,d.jsxs)("figure",{children:[(0,d.jsx)(t.S,{src:"./images/challenger.png",alt:"너디너리 데모데이 간판",objectFit:"fill",className:N,__imageData:c(2566)}),(0,d.jsx)("div",{className:C}),(0,d.jsx)("figcaption",{children:"도전자"}),(0,d.jsxs)("p",{children:["우리는 도전자입니다. 우리는 모두 도전을",(0,d.jsx)("br",{}),"즐기며, 새로운 도전에 맞서는 사람들입니다.",(0,d.jsx)("br",{}),"우리는 끊임없이 도전하는 자세를 가지고 있으며,",(0,d.jsx)("br",{}),"이를 통해 성장하고 혁신을 이루어냅니다.",(0,d.jsx)("br",{}),'우리는 자신을 "챌린저"라 하며, 어려움을',(0,d.jsx)("br",{}),"극복하고 목표를 달성하는 역량을 갖추고 있습니다."]})]}),(0,d.jsxs)("figure",{children:[(0,d.jsx)(t.S,{src:"./images/pioneer.png",alt:"주먹을 쥐고 앉아서 정면을 바라보는 사람들",objectFit:"fill",className:N,__imageData:c(8433)}),(0,d.jsx)("div",{className:C}),(0,d.jsx)("figcaption",{children:"개척가"}),(0,d.jsxs)("p",{children:["우리는 기존의 틀에 얽매이지 않고,",(0,d.jsx)("br",{}),"새로운 영역을 개척하는 사람들입니다.",(0,d.jsx)("br",{}),"우리는 혁신적인 아이디어와 독창적인",(0,d.jsx)("br",{}),"접근으로 새로운 틀을 만들어내며,",(0,d.jsx)("br",{}),"미래를 모색하고 이끌어갑니다."]})]}),(0,d.jsxs)("figure",{children:[(0,d.jsx)(t.S,{src:"./images/expert.png",alt:"노트북을 하고있는 사람들",objectFit:"fill",className:N,__imageData:c(1155)}),(0,d.jsx)("div",{className:C}),(0,d.jsx)("figcaption",{children:"전문가"}),(0,d.jsxs)("p",{children:["전문가들로 이루어진 CMC의 팀은 각자의",(0,d.jsx)("br",{}),"전문 분야에 집중하여 협업합니다.",(0,d.jsx)("br",{}),"우리 프로젝트에서 나의 역할이 없다면,",(0,d.jsx)("br",{}),"팀은 앞으로 나아갈 수 없습니다."]})]})]})]});const _=()=>(0,d.jsxs)(r,{className:"intro-section-module--intro--06041",children:[(0,d.jsx)(r.Header,{title:"introduction",description:"우리만의 룰을 세워 세상을 바꾸는\n우리는 CMC ‘챌린저’입니다"}),(0,d.jsxs)("div",{className:"intro-section-module--grid_container--a0dac",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"현재까지 CMC의 팀"}),(0,d.jsx)("span",{children:"80+"})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{children:["지금까지 런칭된 앱 수",(0,d.jsx)("br",{}),"(Android, iOS 스토어)"]}),(0,d.jsx)("span",{children:"130+"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"CMC앱 전체 다운로드 수"}),(0,d.jsx)("span",{children:"5000+"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"CMC 챌린저의 외주연계 횟수"}),(0,d.jsx)("span",{children:"100+"})]})]})]});var k=c(8037),y=c.n(k);var E=()=>(0,d.jsxs)("main",{children:[(0,d.jsxs)("section",{className:"home-module--image_container--ce213",children:[(0,d.jsx)(t.S,{src:"./images/desktop-main.png",alt:"CMC",className:"home-module--desktop_main--6724f",__imageData:c(9364)}),(0,d.jsx)(t.S,{src:"./images/mobile-main.png",alt:"CMC",className:"home-module--mobile_main--eddf9",__imageData:c(1908)})]}),(0,d.jsx)("div",{className:"home-module--mobile_button--919ad",children:(0,d.jsx)(y(),{})}),(0,d.jsx)(_,{}),(0,d.jsx)(S,{}),(0,d.jsx)(m,{}),(0,d.jsx)(v,{}),(0,d.jsx)(a.T,{}),(0,d.jsx)("div",{className:"home-module--space--12e23"})]});const D=e=>{let{location:{pathname:s}}=e;return(0,d.jsx)(a.p,{pathname:s})}},2566:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#786858","images":{"fallback":{"src":"/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png","srcSet":"/static/8777464a403dc3881024ab12d8ccefaf/81b6a/challenger.png 279w,\\n/static/8777464a403dc3881024ab12d8ccefaf/89e2c/challenger.png 558w,\\n/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/8777464a403dc3881024ab12d8ccefaf/de1a4/challenger.webp 279w,\\n/static/8777464a403dc3881024ab12d8ccefaf/a79b9/challenger.webp 558w,\\n/static/8777464a403dc3881024ab12d8ccefaf/f0f4c/challenger.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},9364:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/348efaa2793aacdd33a9501d905c8594/8f213/desktop-main.png","srcSet":"/static/348efaa2793aacdd33a9501d905c8594/cbc24/desktop-main.png 1300w,\\n/static/348efaa2793aacdd33a9501d905c8594/6a4bc/desktop-main.png 2600w,\\n/static/348efaa2793aacdd33a9501d905c8594/8f213/desktop-main.png 5200w","sizes":"(min-width: 5200px) 5200px, 100vw"},"sources":[{"srcSet":"/static/348efaa2793aacdd33a9501d905c8594/cb53e/desktop-main.webp 1300w,\\n/static/348efaa2793aacdd33a9501d905c8594/96031/desktop-main.webp 2600w,\\n/static/348efaa2793aacdd33a9501d905c8594/749f9/desktop-main.webp 5200w","type":"image/webp","sizes":"(min-width: 5200px) 5200px, 100vw"}]},"width":5200,"height":3232}')},1955:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7878c8","images":{"fallback":{"src":"/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png","srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/f2a56/top-button.png 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/7458e/top-button.png 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/0852d/top-button.webp 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/18188/top-button.webp 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/c65bc/top-button.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},8433:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a8a8","images":{"fallback":{"src":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png","srcSet":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/81b6a/pioneer.png 279w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/89e2c/pioneer.png 558w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/de1a4/pioneer.webp 279w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/a79b9/pioneer.webp 558w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/f0f4c/pioneer.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},1155:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png","srcSet":"/static/c8900cc1ec055b971efc7acb82e484a0/81b6a/expert.png 279w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/89e2c/expert.png 558w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/c8900cc1ec055b971efc7acb82e484a0/de1a4/expert.webp 279w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/a79b9/expert.webp 558w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/f0f4c/expert.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},1908:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0ec40829177f01549e123e4243e9bb6c/650a1/mobile-main.png","srcSet":"/static/0ec40829177f01549e123e4243e9bb6c/981da/mobile-main.png 375w,\\n/static/0ec40829177f01549e123e4243e9bb6c/24b08/mobile-main.png 750w,\\n/static/0ec40829177f01549e123e4243e9bb6c/650a1/mobile-main.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/static/0ec40829177f01549e123e4243e9bb6c/795db/mobile-main.webp 375w,\\n/static/0ec40829177f01549e123e4243e9bb6c/47304/mobile-main.webp 750w,\\n/static/0ec40829177f01549e123e4243e9bb6c/52b78/mobile-main.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1928}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-77f574feb89b280f7aaf.js.map