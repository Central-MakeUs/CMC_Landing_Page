"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[534],{3746:function(e,t,a){a.d(t,{T:function(){return o},p:function(){return l}});var n=a(8073),i=a(6885),s=a(9953);var r=a(1874);const o=()=>{const{isVisible:e,scrollToTop:t}=(()=>{const{0:e,1:t}=(0,s.useState)(!1),a=()=>{const e=window.scrollY;t(e>200)};return(0,s.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[]),{isVisible:e,scrollToTop:()=>{window.scrollTo({top:0,behavior:"smooth"})}}})();return(0,r.jsx)("button",{type:"button",onClick:t,className:(0,n.Z)("floating-button-module--button--644e8",{"floating-button-module--visible--84a20":e}),children:(0,r.jsx)(i.S,{src:"./images/top-button.png",alt:"위를 가리키는 흰색 화살표",__imageData:a(734)})})};var c=a(535);const l=e=>{let{title:t,description:a,heroImage:n,pathname:i,children:s}=e;const o=(0,c.useStaticQuery)("65692087"),{title:l,description:d,siteUrl:m}=o.site.siteMetadata,{publicURL:p}=o.file,u={title:t||l,description:a||d,url:`${m}${i}`,image:`${m}${n||p}`};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("link",{rel:"canonical",href:u.url}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"image",content:u.image}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:u.url}),(0,r.jsx)("meta",{property:"og:image",content:u.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:u.title}),(0,r.jsx)("meta",{name:"twitter:description",content:u.description}),(0,r.jsx)("meta",{property:"twitter:image",content:u.image}),s]})}},6254:function(e,t,a){a.r(t),a.d(t,{Head:function(){return p},default:function(){return m}});var n=a(6e3),i=a(8073),s=a(9953),r=a(3746);const o=e=>{if(void 0===e)throw new Error("이미지가 존재하지 않습니다.");return e};var c=a(6885),l=a(1874);const d=e=>{let{name:t,description:a,year:n,image:i,link:s}=e;return(0,l.jsx)("li",{className:"card-module--card--ab5fb",children:(0,l.jsxs)("figure",{children:[(0,l.jsx)(c.G,{image:i,alt:t,className:"card-module--image--4d48a"}),(0,l.jsxs)("figcaption",{children:[(0,l.jsx)("h2",{className:"card-module--name--6b866",children:t}),(0,l.jsxs)("span",{className:"card-module--year--21a5e",children:[n,"기"]}),(0,l.jsx)("p",{className:"card-module--description--98bd5",children:a}),(0,l.jsxs)("div",{className:"card-module--link_group--cb1ec",children:[s.ios?(0,l.jsx)("a",{href:s.ios,children:"iOS"}):(0,l.jsx)("span",{children:"iOS"}),(0,l.jsx)("span",{className:"card-module--divider--7a67e"}),s.android?(0,l.jsx)("a",{href:s.android,children:"AOS"}):(0,l.jsx)("span",{children:"AOS"})]})]})]})})};var m=e=>{let{data:{allAppJson:{nodes:t}}}=e;const a=(0,s.useMemo)((()=>new Set(t.map((e=>e.year)))),[t]),c=["All"].concat((0,n.Z)(a)),{0:m,1:p}=(0,s.useState)("All"),u=(0,s.useMemo)((()=>"All"===m?t:t.filter((e=>e.year===m))),[m,t]);return(0,l.jsxs)("main",{className:"project-module--main--56a37",children:[(0,l.jsxs)("div",{className:"project-module--background_header--62985",children:[(0,l.jsx)("h2",{children:"CMC PROJECT"}),(0,l.jsx)("div",{className:"project-module--background_container--f806f",children:(0,l.jsx)("div",{className:"project-module--background--73e34"})})]}),(0,l.jsx)("nav",{className:"project-module--nav--7defd",children:(0,l.jsx)("ul",{children:c.map((e=>(0,l.jsx)("li",{children:(0,l.jsx)("button",{type:"button",onClick:()=>p(e),className:(0,i.Z)({"project-module--active--5984e":m===e}),children:"All"===e?"전체":e})},e)))})}),(0,l.jsx)("ul",{className:"project-module--grid_container--dee0b",children:u.map((e=>{var t;let{id:a,name:n,description:i,year:s,logo:r,link:c}=e;return(0,l.jsx)(d,{name:n,year:s,image:o(null==r||null===(t=r.childImageSharp)||void 0===t?void 0:t.gatsbyImageData),description:i,link:c},a)}))}),(0,l.jsx)(r.T,{})]})};const p=e=>{let{location:{pathname:t}}=e;return(0,l.jsx)(r.p,{pathname:t})}},734:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#7878c8","images":{"fallback":{"src":"/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png","srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/f2a56/top-button.png 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/7458e/top-button.png 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/de3a1/top-button.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/022da01af7e1fdbc0ed8824b02181185/0852d/top-button.webp 38w,\\n/static/022da01af7e1fdbc0ed8824b02181185/18188/top-button.webp 75w,\\n/static/022da01af7e1fdbc0ed8824b02181185/c65bc/top-button.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')}}]);
//# sourceMappingURL=component---src-pages-project-tsx-695a8752a83cbe092321.js.map