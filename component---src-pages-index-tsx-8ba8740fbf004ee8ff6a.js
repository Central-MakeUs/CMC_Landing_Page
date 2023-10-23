"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[691],{3746:function(e,s,c){c.d(s,{T:function(){return r},p:function(){return l}});var t=c(8073),i=c(6885),a=c(9953);var n=c(1874);const r=()=>{const{isVisible:e,scrollToTop:s}=(()=>{const{0:e,1:s}=(0,a.useState)(!1),c=()=>{const e=window.scrollY;s(e>200)};return(0,a.useEffect)((()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)})),[]),{isVisible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}})();return(0,n.jsx)("button",{type:"button",onClick:s,className:(0,t.Z)("floating-button-module--button--644e8",{"floating-button-module--visible--84a20":e}),children:(0,n.jsx)(i.S,{src:"./images/top-button.png",alt:"위를 가리키는 흰색 화살표",__imageData:c(734)})})};var d=c(535);const l=e=>{let{title:s,description:c,heroImage:t,pathname:i,children:a}=e;const r=(0,d.useStaticQuery)("65692087"),{title:l,description:o,siteUrl:p}=r.site.siteMetadata,x={title:s||l,description:c||o,url:`${p}${"/"===i?"":i}`,image:`${p}${t}`};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:x.title}),(0,n.jsx)("link",{rel:"canonical",href:x.url}),(0,n.jsx)("meta",{name:"description",content:x.description}),(0,n.jsx)("meta",{property:"og:title",content:x.title}),(0,n.jsx)("meta",{property:"og:description",content:x.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:x.url}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:x.title}),(0,n.jsx)("meta",{name:"twitter:description",content:x.description}),a]})}},5814:function(e,s,c){c.r(s),c.d(s,{Head:function(){return k},default:function(){return y}});var t=c(3746),i=c(8073),a=c(9953),n=c(1874);const r=e=>{let{className:s,children:c}=e;return(0,n.jsx)("section",{className:(0,i.Z)("section-module--section--46e7e",s),children:c})};r.Header=e=>{let{title:s,description:c}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"section-module--heading--21429",children:s}),(0,n.jsx)("p",{className:"section-module--description--7e522",children:c}),(0,n.jsx)("div",{className:"section-module--background_container--94d68",children:(0,n.jsx)("div",{className:"section-module--background--c51dc"})})]})};var d="challenger-section-module--active_button--f7eb0";const l={Plan:{name:"Planner",description:"사용자의 니즈와 비즈니스 목표를 고려하여 서비스의\n전략을 수립하고 설계합니다. 또한 PM으로써\n관리 프로세스를 주도하며 조율하는 역할을 수행합니다."},Design:{name:"Designer",description:"사용자가 편안하게 사용 가능한 화면을 디자인 함으로써,\n사용자에게 최적의 시각적, 기능적 경험을 제공합니다."},Client:{name:"Client Developer",description:"디자이너와 서버 개발자간 긴밀한 협력을 통해 최상의\n프로덕트를 구현하기 위한 코드를 구현합니다."},Server:{name:"Server Developer",description:"기획자와 클라이언트 개발자와의 협력을 통해 최상의\n성능을 발휘하는 코드를 구현합니다."}};let o=function(e){return e.PLAN="Plan",e.DESIGN="Design",e.CLIENT="Client",e.SERVER="Server",e}({});const p=()=>{const{0:e,1:s}=(0,a.useState)(o.PLAN);return(0,n.jsxs)(r,{className:"challenger-section-module--challenger--d6f3c",children:[(0,n.jsx)(r.Header,{title:"cmc challenger",description:"CMC는 기획자 디자이너 개발자가\n함께 모여 성장합니다"}),(0,n.jsxs)("div",{className:"challenger-section-module--role--41533",children:[(0,n.jsxs)("nav",{children:[(0,n.jsx)("button",{type:"button",onClick:()=>s(o.PLAN),className:(0,i.Z)({[d]:e===o.PLAN}),children:"Plan"}),(0,n.jsx)("button",{type:"button",onClick:()=>s(o.DESIGN),className:(0,i.Z)({[d]:e===o.DESIGN}),children:"Design"}),(0,n.jsx)("button",{type:"button",onClick:()=>s(o.CLIENT),className:(0,i.Z)({[d]:e===o.CLIENT}),children:"Web • iOS • AOS"}),(0,n.jsx)("button",{type:"button",onClick:()=>s(o.SERVER),className:(0,i.Z)({[d]:e===o.SERVER}),children:"Server"})]}),(0,n.jsxs)("div",{className:"challenger-section-module--mobile_card--3ac84",children:[(0,n.jsxs)("h3",{children:[l[e].name,e===o.CLIENT&&(0,n.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,n.jsx)("p",{children:l[e].description})]}),(0,n.jsx)("div",{className:"challenger-section-module--card_grid--bd477",children:Object.keys(l).map((e=>{const s=l[e];return(0,n.jsxs)("div",{className:"challenger-section-module--pc_card--acbe7",children:[(0,n.jsxs)("h3",{children:[s.name,e===o.CLIENT&&(0,n.jsx)("span",{children:" (Web . iOS . AOS)"})]}),(0,n.jsx)("p",{children:s.description})]},e)}))})]})]})};var x=c(1025),b=c.n(x),m="features-section-module--experience--ad0b3",j="features-section-module--mobile_empty_space--46bf1",h="features-section-module--mobile_horizontal_divider--79cec",u="features-section-module--mobile_vertical_divider--874f3",f="features-section-module--pc_horizontal_divider--bf901",g="features-section-module--pc_vertical_divider--43517";const v=()=>(0,n.jsxs)(r,{className:"features-section-module--features--36e5d",children:[(0,n.jsx)(r.Header,{title:"cmc features",description:"CMC는 실력있는 리더진, 챌린저들과\n다양한 경험을 쌓을 수 있습니다"}),(0,n.jsxs)("div",{className:"features-section-module--grid_container--dafbe",children:[(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"실력있는 리더진"}),(0,n.jsxs)("p",{children:["성공적인 런칭 노하우를 가진",(0,n.jsx)("br",{}),"리더진들이 여러분의 성공적인",(0,n.jsx)("br",{}),"런칭을 위해 도움을 드립니다."]})]}),(0,n.jsx)("div",{className:u}),(0,n.jsx)("div",{className:g}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"네트워킹"}),(0,n.jsxs)("p",{children:["CMC는 실력 있는 챌린저로",(0,n.jsx)("br",{}),"구성되어 있습니다.",(0,n.jsx)("br",{}),"이들과 네트워킹을 통해 훌륭한 인재들과 교류할 수 있으며 여러분의 성공적인 런칭을 위해 도움을 드립니다."]})]}),(0,n.jsx)("div",{className:h}),(0,n.jsx)("div",{className:j}),(0,n.jsx)("div",{className:g}),(0,n.jsx)("div",{className:h}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"기획 멘토링"}),(0,n.jsxs)("p",{children:["기획안의 완성도와 비지니스",(0,n.jsx)("br",{}),"모델 디벨롭을 위한 현직",(0,n.jsx)("br",{}),"전문가의 피드백을 제공합니다."]})]}),(0,n.jsx)("div",{className:u}),(0,n.jsx)("div",{className:f}),(0,n.jsx)("div",{className:"features-section-module--pc_empty_space--0f15d"}),(0,n.jsx)("div",{className:f}),(0,n.jsx)("div",{className:f}),(0,n.jsxs)("div",{className:"features-section-module--pc_horizontal_space--2d10e",children:[(0,n.jsx)("div",{className:f}),(0,n.jsx)(b(),{})]}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"GUI 멘토링"}),(0,n.jsx)("p",{children:"UI/UX를 개선하기 위한 구체적인 방안을 현직 전문가의 피드백을 제공합니다."})]}),(0,n.jsx)("div",{className:h}),(0,n.jsx)("div",{className:g}),(0,n.jsx)("div",{className:j}),(0,n.jsx)("div",{className:(0,i.Z)(h,"features-section-module--end--11114")}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"개발 컨퍼런스"}),(0,n.jsx)("p",{children:"지식을 공유하면 성장할 수 있는 만큼,우리가 우리의 지식을 공유하는 과정에서도 더욱 성장할 수 있습니다."})]}),(0,n.jsx)("div",{className:g}),(0,n.jsx)("div",{className:u}),(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)("h3",{children:"데모데이"}),(0,n.jsx)("p",{children:"VC 및 다양한 기업 관계자들이 참여하는 데모데이에서 CMC 활동을 통해 만든 프로덕트를 홍보합니다."})]})]})]});var w=c(6885),N="identity-section-module--image--2f8a9",C="identity-section-module--overlay--34962";const S=()=>(0,n.jsxs)(r,{className:"identity-section-module--identity--1e96d",children:[(0,n.jsx)(r.Header,{title:"cmc identity",description:"CMC는 도전을 즐기며,\n새로운 도전에 맞서는 사람들입니다"}),(0,n.jsxs)("div",{className:"identity-section-module--people--028e8",children:[(0,n.jsxs)("figure",{children:[(0,n.jsx)(w.S,{src:"./images/challenger.png",alt:"너디너리 데모데이 간판",objectFit:"fill",className:N,__imageData:c(5497)}),(0,n.jsx)("div",{className:C}),(0,n.jsx)("figcaption",{children:"도전자"}),(0,n.jsxs)("p",{children:["우리는 도전자입니다. 우리는 모두 도전을",(0,n.jsx)("br",{}),"즐기며, 새로운 도전에 맞서는 사람들입니다.",(0,n.jsx)("br",{}),"우리는 끊임없이 도전하는 자세를 가지고 있으며,",(0,n.jsx)("br",{}),"이를 통해 성장하고 혁신을 이루어냅니다.",(0,n.jsx)("br",{}),'우리는 자신을 "챌린저"라 하며, 어려움을',(0,n.jsx)("br",{}),"극복하고 목표를 달성하는 역량을 갖추고 있습니다."]})]}),(0,n.jsxs)("figure",{children:[(0,n.jsx)(w.S,{src:"./images/pioneer.png",alt:"주먹을 쥐고 앉아서 정면을 바라보는 사람들",objectFit:"fill",className:N,__imageData:c(2474)}),(0,n.jsx)("div",{className:C}),(0,n.jsx)("figcaption",{children:"개척가"}),(0,n.jsxs)("p",{children:["우리는 기존의 틀에 얽매이지 않고,",(0,n.jsx)("br",{}),"새로운 영역을 개척하는 사람들입니다.",(0,n.jsx)("br",{}),"우리는 혁신적인 아이디어와 독창적인",(0,n.jsx)("br",{}),"접근으로 새로운 틀을 만들어내며,",(0,n.jsx)("br",{}),"미래를 모색하고 이끌어갑니다."]})]}),(0,n.jsxs)("figure",{children:[(0,n.jsx)(w.S,{src:"./images/expert.png",alt:"노트북을 하고있는 사람들",objectFit:"fill",className:N,__imageData:c(4302)}),(0,n.jsx)("div",{className:C}),(0,n.jsx)("figcaption",{children:"전문가"}),(0,n.jsxs)("p",{children:["전문가들로 이루어진 CMC의 팀은 각자의",(0,n.jsx)("br",{}),"전문 분야에 집중하여 협업합니다.",(0,n.jsx)("br",{}),"우리 프로젝트에서 나의 역할이 없다면,",(0,n.jsx)("br",{}),"팀은 앞으로 나아갈 수 없습니다."]})]})]})]});const _=()=>(0,n.jsxs)(r,{className:"intro-section-module--intro--06041",children:[(0,n.jsx)(r.Header,{title:"introduction",description:"우리만의 룰을 세워 세상을 바꾸는\n우리는 CMC ‘챌린저’입니다"}),(0,n.jsxs)("div",{className:"intro-section-module--grid_container--a0dac",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"현재까지 CMC의 팀"}),(0,n.jsx)("span",{children:"80+"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("span",{children:["지금까지 런칭된 앱 수",(0,n.jsx)("br",{}),"(Android, iOS 스토어)"]}),(0,n.jsx)("span",{children:"130+"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"CMC앱 전체 다운로드 수"}),(0,n.jsx)("span",{children:"5000+"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"CMC 챌린저의 외주연계 횟수"}),(0,n.jsx)("span",{children:"100+"})]})]})]});var y=()=>(0,n.jsxs)("main",{children:[(0,n.jsx)(_,{}),(0,n.jsx)(S,{}),(0,n.jsx)(p,{}),(0,n.jsx)(v,{}),(0,n.jsx)(t.T,{}),(0,n.jsx)("div",{className:"home-module--space--12e23"})]});const k=e=>{let{location:{pathname:s}}=e;return(0,n.jsx)(t.p,{pathname:s})}},4302:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png","srcSet":"/static/c8900cc1ec055b971efc7acb82e484a0/81b6a/expert.png 279w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/89e2c/expert.png 558w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/9ebb9/expert.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/c8900cc1ec055b971efc7acb82e484a0/de1a4/expert.webp 279w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/a79b9/expert.webp 558w,\\n/static/c8900cc1ec055b971efc7acb82e484a0/f0f4c/expert.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},734:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7878c8","images":{"fallback":{"src":"/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png","srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/f2a56/top-button.png 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/7458e/top-button.png 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/0852d/top-button.webp 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/18188/top-button.webp 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/c65bc/top-button.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},2474:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a8a8","images":{"fallback":{"src":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png","srcSet":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/81b6a/pioneer.png 279w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/89e2c/pioneer.png 558w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/9ebb9/pioneer.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/410d4db1d6a8b9f2313c576e24c3d6f8/de1a4/pioneer.webp 279w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/a79b9/pioneer.webp 558w,\\n/static/410d4db1d6a8b9f2313c576e24c3d6f8/f0f4c/pioneer.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')},5497:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#786858","images":{"fallback":{"src":"/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png","srcSet":"/static/8777464a403dc3881024ab12d8ccefaf/81b6a/challenger.png 279w,\\n/static/8777464a403dc3881024ab12d8ccefaf/89e2c/challenger.png 558w,\\n/static/8777464a403dc3881024ab12d8ccefaf/9ebb9/challenger.png 1116w","sizes":"(min-width: 1116px) 1116px, 100vw"},"sources":[{"srcSet":"/static/8777464a403dc3881024ab12d8ccefaf/de1a4/challenger.webp 279w,\\n/static/8777464a403dc3881024ab12d8ccefaf/a79b9/challenger.webp 558w,\\n/static/8777464a403dc3881024ab12d8ccefaf/f0f4c/challenger.webp 1116w","type":"image/webp","sizes":"(min-width: 1116px) 1116px, 100vw"}]},"width":1116,"height":927.0000000000001}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8ba8740fbf004ee8ff6a.js.map