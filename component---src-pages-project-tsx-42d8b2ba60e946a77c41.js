"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[534],{9414:function(a,e,c){c.r(e),c.d(e,{Head:function(){return S},default:function(){return y}});var t={};c.r(t),c.d(t,{In:function(){return o},Ms:function(){return p},xN:function(){return b},WL:function(){return m},BH:function(){return g},CI:function(){return w},v_:function(){return u},u2:function(){return h},ty:function(){return x}});var s=c(6e3),d=c(8073),n=c(9953),i=c(9496),r=c(4954),l=c(8015),f=c(6885),o="card-module--card--ab5fb",p="card-module--card_info--7b937",b="card-module--card_info_icon--8439f",m="card-module--description--98bd5",g="card-module--image--4d48a",w="card-module--link_group--cb1ec",u="card-module--link_img--c2b73",h="card-module--name--6b866",x="card-module--year--21a5e",j=c(1874);const v=a=>{let{name:e,description:s,year:d,rank:n,image:i,link:r}=a;return(0,j.jsx)("li",{className:o,children:(0,j.jsxs)("figure",{children:[(0,j.jsx)(f.G,{image:i,alt:e,className:g,objectPosition:"50% top"}),(0,j.jsxs)("figcaption",{children:[(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)("div",{className:t.card_info_text,children:[(0,j.jsx)("h2",{className:h,children:e}),(0,j.jsxs)("span",{className:x,children:[d,"기"]})]}),"1"===n&&(0,j.jsx)(f.S,{src:"../../images/medal-gold.png",alt:"대상",className:b,__imageData:c(9051)}),"2"===n&&(0,j.jsx)(f.S,{src:"../../images/medal-silver.png",alt:"최우수상",className:b,__imageData:c(5534)}),"3"===n&&(0,j.jsx)(f.S,{src:"../../images/medal-bronze.png",alt:"우수상",className:b,__imageData:c(695)})]}),(0,j.jsx)("p",{className:m,children:s}),(0,j.jsxs)("div",{className:w,children:[r.ios&&(0,j.jsxs)("a",{href:r.ios,target:"_blank",rel:"noreferrer",children:[(0,j.jsx)(f.S,{src:"../../images/app-store.png",alt:"App store 바로가기",className:u,__imageData:c(9371)}),"App Store"]}),r.android&&(0,j.jsxs)("a",{href:r.android,target:"_blank",rel:"noreferrer",children:[(0,j.jsx)(f.S,{src:"../../images/play-store.png",alt:"Play store 바로가기",className:u,__imageData:c(8017)}),"Play Store"]})]})]})]})})};var y=a=>{let{data:{allAppJson:{nodes:e}}}=a;const c=(0,n.useMemo)((()=>new Set(e.map((a=>a.year)))),[e]),t=["All"].concat((0,s.Z)(c)),{0:f,1:o}=(0,n.useState)("All"),p=(0,n.useMemo)((()=>"All"===f?e:e.filter((a=>a.year===f))),[f,e]),b=(0,n.useCallback)((a=>e.filter((e=>e.year===a)).length),[e]);return(0,j.jsx)(r.or,{className:"project-module--main--56a37",children:(0,j.jsxs)(i.$0,{children:[(0,j.jsx)(i.$0.Head,{title:"Challenger’s Project",description:"챌린저들의 다양한 프로젝트를 확인해보세요"}),(0,j.jsx)("nav",{className:"project-module--nav--7defd",children:(0,j.jsx)("ul",{children:t.map((a=>(0,j.jsx)("li",{children:(0,j.jsx)("button",{type:"button",onClick:()=>o(a),className:(0,d.Z)({"project-module--active--5984e":f===a}),children:"All"===a?`전체(${e.length}개)`:`${a}기(${b(a)}개)`})},a)))})}),(0,j.jsx)("ul",{className:"project-module--grid_container--dee0b",children:p.map((a=>{var e;let{id:c,name:t,description:s,year:d,logo:n,link:i,rank:r}=a;return(0,j.jsx)(v,{name:t,year:d,image:(0,l.e)(null==n||null===(e=n.childImageSharp)||void 0===e?void 0:e.gatsbyImageData),description:s,link:i,rank:r},c)}))})]})})};const S=a=>{let{location:{pathname:e}}=a;return(0,j.jsx)(i.pQ,{pathname:e})}},8015:function(a,e,c){c.d(e,{e:function(){return t}});const t=a=>{if(void 0===a)throw new Error("이미지가 존재하지 않습니다.");return a}},695:function(a){a.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/7e11dbea565d95fa90bafac6391e58ad/3cdff/medal-bronze.png","srcSet":"/static/7e11dbea565d95fa90bafac6391e58ad/21b95/medal-bronze.png 41w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/58d3a/medal-bronze.png 82w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/3cdff/medal-bronze.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/7e11dbea565d95fa90bafac6391e58ad/99031/medal-bronze.webp 41w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/adaa5/medal-bronze.webp 82w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/fcfc6/medal-bronze.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')},5534:function(a){a.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/70a736da99f857efca4f60cadba8acd0/3cdff/medal-silver.png","srcSet":"/static/70a736da99f857efca4f60cadba8acd0/21b95/medal-silver.png 41w,\\n/static/70a736da99f857efca4f60cadba8acd0/58d3a/medal-silver.png 82w,\\n/static/70a736da99f857efca4f60cadba8acd0/3cdff/medal-silver.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/70a736da99f857efca4f60cadba8acd0/99031/medal-silver.webp 41w,\\n/static/70a736da99f857efca4f60cadba8acd0/adaa5/medal-silver.webp 82w,\\n/static/70a736da99f857efca4f60cadba8acd0/fcfc6/medal-silver.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')},9371:function(a){a.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/aa17db49ee901128c9a541f825a904b1/677b8/app-store.png","srcSet":"/static/aa17db49ee901128c9a541f825a904b1/d139f/app-store.png 17w,\\n/static/aa17db49ee901128c9a541f825a904b1/f9f53/app-store.png 33w,\\n/static/aa17db49ee901128c9a541f825a904b1/677b8/app-store.png 66w","sizes":"(min-width: 66px) 66px, 100vw"},"sources":[{"srcSet":"/static/aa17db49ee901128c9a541f825a904b1/07b39/app-store.webp 17w,\\n/static/aa17db49ee901128c9a541f825a904b1/0cc22/app-store.webp 33w,\\n/static/aa17db49ee901128c9a541f825a904b1/ddf38/app-store.webp 66w","type":"image/webp","sizes":"(min-width: 66px) 66px, 100vw"}]},"width":66,"height":66}')},8017:function(a){a.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/8711c/play-store.png","srcSet":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/e2d8e/play-store.png 16w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/de95f/play-store.png 31w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/8711c/play-store.png 62w","sizes":"(min-width: 62px) 62px, 100vw"},"sources":[{"srcSet":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/deaf0/play-store.webp 16w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/f0a07/play-store.webp 31w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/2bcd5/play-store.webp 62w","type":"image/webp","sizes":"(min-width: 62px) 62px, 100vw"}]},"width":62,"height":66}')},9051:function(a){a.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/09724080fab8676193366c7fff932a26/3cdff/medal-gold.png","srcSet":"/static/09724080fab8676193366c7fff932a26/21b95/medal-gold.png 41w,\\n/static/09724080fab8676193366c7fff932a26/58d3a/medal-gold.png 82w,\\n/static/09724080fab8676193366c7fff932a26/3cdff/medal-gold.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/09724080fab8676193366c7fff932a26/99031/medal-gold.webp 41w,\\n/static/09724080fab8676193366c7fff932a26/adaa5/medal-gold.webp 82w,\\n/static/09724080fab8676193366c7fff932a26/fcfc6/medal-gold.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')}}]);
//# sourceMappingURL=component---src-pages-project-tsx-42d8b2ba60e946a77c41.js.map