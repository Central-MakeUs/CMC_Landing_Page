"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[534],{3614:function(e,t,a){a.d(t,{VD:function(){return i},fr:function(){return d},gP:function(){return l},Br:function(){return o},sb:function(){return b},Wn:function(){return u},OA:function(){return m},$0:function(){return g.$},pQ:function(){return h}});var c=a(8073),s=a(9953),n=a(5849),r=a(1874);const i=e=>{let{className:t,availableDisabled:a=!1,children:i,...d}=e;const{0:l,1:o}=(0,s.useState)(n.rH.BEFORE_RECRUITING);return(0,s.useEffect)((()=>{(()=>{const{startDate:e,endDate:t}=n.RecruitDate,a=new Date;a.getTime()<e.getTime()?o(n.rH.BEFORE_RECRUITING):a.getTime()<=t.getTime()?o(n.rH.RECRUITING):o(n.rH.AFTER_RECRUITING)})()}),[]),(0,r.jsx)("a",{href:n.Gc[l].link,target:"_blank",rel:"noreferrer",className:(0,c.Z)("apply-button-module--button--5a301",{"apply-button-module--button_disabled--7a451":a&&l===n.rH.AFTER_RECRUITING},t),...d,children:i})};const d=e=>{let{size:t="60%",top:a="0%",left:c="20%",opacity:s=.2}=e;const n={width:t,aspectRatio:"1",position:"absolute",top:a,left:c,opacity:s,pointerEvents:"none"};return(0,r.jsx)("div",{className:"aura-circle-module--round--a7029",style:n})};const l=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"aura-effect-module--desktop--99478",children:(0,r.jsx)(d,{size:"60%",top:"90px",left:"20%",opacity:.2})}),(0,r.jsx)("div",{className:"aura-effect-module--mobile--56620",children:(0,r.jsx)(d,{size:"180%",top:"0",left:"-40%",opacity:.2})})]});const o=e=>{let{mobile:t=!1,desktop:a=!1}=e;return(0,r.jsx)("br",{className:(0,c.Z)({"br-module--br_visible_mobile--575ec":t,"br-module--br_visible_desktop--7ac53":a})})};var f=a(6e3),p=a(6885);const b=e=>{let{logos:t,width:a="10%",reverse:n=!1}=e;const i=[].concat((0,f.Z)(t),(0,f.Z)(t.slice(0,4))),d=(0,s.useRef)(null);return(0,s.useEffect)((()=>{d.current&&(d.current.style.setProperty("--slide-item-length",`${t.length}`),d.current.style.setProperty("--slide-item-width",`${a}`))}),[t.length,a]),(0,r.jsx)("div",{ref:d,className:(0,c.Z)("carousel-slider-module--carousel_container--6548a",{"carousel-slider-module--carousel_container__reverse--4a7ad":n}),children:i.map(((e,t)=>(0,r.jsx)(p.G,{className:"carousel-slider-module--carousel_item--af11d",image:e,alt:"프로덕트 로고 이미지",objectPosition:"50% top",loading:"eager"},t)))})};const u=e=>{let{extendClass:t,children:a}=e;return(0,r.jsx)("div",{className:(0,c.Z)("glass-card-module--card--d16f1",t),children:a})};const m=e=>{let{className:t="",children:a}=e;return(0,s.useEffect)((()=>{const e=document.querySelectorAll(".animateBox"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("scroll-reveal-container-module--visible--4bef8")}))}),{root:null,threshold:.2});e.forEach((e=>{t.observe(e)}))}),[a]),(0,r.jsx)("div",{className:(0,c.Z)("animateBox","scroll-reveal-container-module--box--bd229",t),children:a})};var g=a(8180),w=a(535);const h=e=>{let{title:t,description:a,heroImage:c,pathname:s,children:n}=e;const i=(0,w.useStaticQuery)("65692087"),{title:d,description:l,siteUrl:o}=i.site.siteMetadata,{publicURL:f}=i.file,p={title:t||d,description:a||l,url:`${o}${s}`,image:`${o}${c||f}`};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:p.title}),(0,r.jsx)("link",{rel:"canonical",href:p.url}),(0,r.jsx)("meta",{name:"description",content:p.description}),(0,r.jsx)("meta",{name:"image",content:p.image}),(0,r.jsx)("meta",{property:"og:title",content:p.title}),(0,r.jsx)("meta",{property:"og:description",content:p.description}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:p.url}),(0,r.jsx)("meta",{property:"og:image",content:p.image}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:p.title}),(0,r.jsx)("meta",{name:"twitter:description",content:p.description}),(0,r.jsx)("meta",{property:"twitter:image",content:p.image}),n]})}},8180:function(e,t,a){a.d(t,{$:function(){return i}});var c=a(8073),s=a(6885),n=a(9953),r=a(1874);const i=(0,n.forwardRef)(((e,t)=>{let{className:a,children:s}=e;return(0,r.jsx)("section",{ref:t,className:(0,c.Z)("section-module--section--62246",a),children:s})}));i.Head=e=>{let{title:t,description:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.S,{src:"./images/star.png",alt:"",className:"section-module--star--da593",placeholder:"blurred",__imageData:a(6440)}),(0,r.jsx)("h2",{className:"section-module--head--c69c6",children:t}),c&&(0,r.jsx)("p",{className:"section-module--desc--de4a3",children:c})]})}},5849:function(e,t,a){a.d(t,{RecruitDate:function(){return c},d_:function(){return r},Gc:function(){return n},rH:function(){return s}});const c={startDate:new Date("2024-10-28T00:00:00"),endDate:new Date("2024-11-05T23:59:59")};let s=function(e){return e.BEFORE_RECRUITING="BeforeRecruiting",e.RECRUITING="Recruiting",e.AFTER_RECRUITING="AfterRecruiting",e}({});const n={BeforeRecruiting:{title:"16기 모집 시작까지",buttonText:"알림 받기",link:"https://forms.gle/8kCz1TVyjxQtEhLV6"},Recruiting:{title:"16기 모집 마감까지",buttonText:"지원하기",link:"https://docs.google.com/forms/d/e/1FAIpQLSeCU77v4eBRO64n0-PjtB04CPXaTH-p-_9Dr9KaQLPYiUTs6A/viewform"},AfterRecruiting:{title:"16기 지원이 마감되었어요!",buttonText:"17기 사전예약 하기",link:"https://forms.gle/8kCz1TVyjxQtEhLV6"}},r={BeforeRecruiting:{title:"CMC 16기 모집이\n곧 시작돼요!",description:"아직 모집기간이 아니에요!\n알림 설정을 해주시면\n16기 모집 알림을 전달드릴게요!",buttonText:"16기 모집알림 신청하기"},Recruiting:{title:"🔈CMC 16기 챌린저를\n찾습니다",description:"CMC 16기를 모집중이에요.\nCMC의 여정에 합류하고 싶은 분들은\n지원을 서둘러주세요!",buttonText:"16기 지원하기"},AfterRecruiting:{title:"CMC 16기 다음 여정에\n참여해주세요",description:"16기 모집이 끝났어요.\nCMC의 다음여정에 함께해요!\n17기 모집알림을 보내드릴게요.",buttonText:"17기 모집알림 신청하기"}}},9414:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return A}});var c={};a.r(c),a.d(c,{In:function(){return f},Ms:function(){return p},xN:function(){return b},WL:function(){return u},BH:function(){return m},CI:function(){return g},Fb:function(){return w},w5:function(){return h},u2:function(){return x},ty:function(){return j}});var s=a(6e3),n=a(8073),r=a(9953),i=a(3614),d=a(4954),l=a(8015),o=a(6885),f="card-module--card--ab5fb",p="card-module--card_info--7b937",b="card-module--card_info_icon--8439f",u="card-module--description--98bd5",m="card-module--image--4d48a",g="card-module--link_group--cb1ec",w="card-module--link_img_and--10e76",h="card-module--link_img_ios--fbd67",x="card-module--name--6b866",j="card-module--year--21a5e",v=a(1874);const y=e=>{let{name:t,description:s,year:n,rank:r,image:i,link:d}=e;return(0,v.jsx)("li",{className:f,children:(0,v.jsxs)("figure",{children:[(0,v.jsx)(o.G,{image:i,alt:t,className:m,objectPosition:"50% top"}),(0,v.jsxs)("figcaption",{children:[(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("div",{className:c.card_info_text,children:[(0,v.jsx)("h2",{className:x,children:t}),(0,v.jsxs)("span",{className:j,children:[n,"기"]})]}),"1"===r&&(0,v.jsx)(o.S,{src:"../../images/medal-gold.png",alt:"대상",className:b,__imageData:a(8834)}),"2"===r&&(0,v.jsx)(o.S,{src:"../../images/medal-silver.png",alt:"최우수상",className:b,__imageData:a(3544)}),"3"===r&&(0,v.jsx)(o.S,{src:"../../images/medal-bronze.png",alt:"우수상",className:b,__imageData:a(325)})]}),(0,v.jsx)("p",{className:u,children:s}),(0,v.jsxs)("div",{className:g,children:[d.ios&&(0,v.jsxs)("a",{href:d.ios,target:"_blank",rel:"noreferrer",children:[(0,v.jsx)(o.S,{src:"../../images/app-store.png",alt:"App store 바로가기",className:h,__imageData:a(7043)}),"App Store"]}),d.ios&&d.android&&"/",d.android&&(0,v.jsxs)("a",{href:d.android,target:"_blank",rel:"noreferrer",children:[(0,v.jsx)(o.S,{src:"../../images/play-store.png",alt:"Play store 바로가기",className:w,__imageData:a(9544)}),"Play Store"]})]})]})]})})};var A=e=>{let{data:{allAppJson:{nodes:t}}}=e;const a=(0,r.useMemo)((()=>new Set(t.map((e=>e.year)))),[t]),c=["All"].concat((0,s.Z)(a)),{0:o,1:f}=(0,r.useState)("All"),p=(0,r.useMemo)((()=>"All"===o?t:t.filter((e=>e.year===o))),[o,t]),b=(0,r.useCallback)((e=>t.filter((t=>t.year===e)).length),[t]);return(0,v.jsx)(d.or,{className:"project-module--main--56a37",children:(0,v.jsxs)(i.$0,{children:[(0,v.jsx)(i.gP,{}),(0,v.jsx)(i.$0.Head,{title:"Challenger’s Project",description:"챌린저들의 다양한 프로젝트를 확인해보세요"}),(0,v.jsx)("nav",{className:"project-module--nav--7defd",children:(0,v.jsx)("ul",{children:c.map((e=>(0,v.jsx)("li",{children:(0,v.jsx)("button",{type:"button",onClick:()=>f(e),className:(0,n.Z)({"project-module--active--5984e":o===e}),children:"All"===e?`전체(${t.length}개)`:`${e}기(${b(e)}개)`})},e)))})}),(0,v.jsx)("ul",{className:"project-module--grid_container--dee0b",children:p.map((e=>{var t;let{id:a,name:c,description:s,year:n,logo:r,link:i,rank:d}=e;return(0,v.jsx)(y,{name:c,year:n,image:(0,l.e)(null==r||null===(t=r.childImageSharp)||void 0===t?void 0:t.gatsbyImageData),description:s,link:i,rank:d},a)}))})]})})};const N=e=>{let{location:{pathname:t}}=e;return(0,v.jsx)(i.pQ,{pathname:t})}},8015:function(e,t,a){a.d(t,{e:function(){return c}});const c=e=>{if(void 0===e)throw new Error("이미지가 존재하지 않습니다.");return e}},7043:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/aa17db49ee901128c9a541f825a904b1/677b8/app-store.png","srcSet":"/static/aa17db49ee901128c9a541f825a904b1/d139f/app-store.png 17w,\\n/static/aa17db49ee901128c9a541f825a904b1/f9f53/app-store.png 33w,\\n/static/aa17db49ee901128c9a541f825a904b1/677b8/app-store.png 66w","sizes":"(min-width: 66px) 66px, 100vw"},"sources":[{"srcSet":"/static/aa17db49ee901128c9a541f825a904b1/07b39/app-store.webp 17w,\\n/static/aa17db49ee901128c9a541f825a904b1/0cc22/app-store.webp 33w,\\n/static/aa17db49ee901128c9a541f825a904b1/ddf38/app-store.webp 66w","type":"image/webp","sizes":"(min-width: 66px) 66px, 100vw"}]},"width":66,"height":66}')},8834:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/09724080fab8676193366c7fff932a26/3cdff/medal-gold.png","srcSet":"/static/09724080fab8676193366c7fff932a26/21b95/medal-gold.png 41w,\\n/static/09724080fab8676193366c7fff932a26/58d3a/medal-gold.png 82w,\\n/static/09724080fab8676193366c7fff932a26/3cdff/medal-gold.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/09724080fab8676193366c7fff932a26/99031/medal-gold.webp 41w,\\n/static/09724080fab8676193366c7fff932a26/adaa5/medal-gold.webp 82w,\\n/static/09724080fab8676193366c7fff932a26/fcfc6/medal-gold.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')},3544:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/70a736da99f857efca4f60cadba8acd0/3cdff/medal-silver.png","srcSet":"/static/70a736da99f857efca4f60cadba8acd0/21b95/medal-silver.png 41w,\\n/static/70a736da99f857efca4f60cadba8acd0/58d3a/medal-silver.png 82w,\\n/static/70a736da99f857efca4f60cadba8acd0/3cdff/medal-silver.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/70a736da99f857efca4f60cadba8acd0/99031/medal-silver.webp 41w,\\n/static/70a736da99f857efca4f60cadba8acd0/adaa5/medal-silver.webp 82w,\\n/static/70a736da99f857efca4f60cadba8acd0/fcfc6/medal-silver.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')},325:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/7e11dbea565d95fa90bafac6391e58ad/3cdff/medal-bronze.png","srcSet":"/static/7e11dbea565d95fa90bafac6391e58ad/21b95/medal-bronze.png 41w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/58d3a/medal-bronze.png 82w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/3cdff/medal-bronze.png 163w","sizes":"(min-width: 163px) 163px, 100vw"},"sources":[{"srcSet":"/static/7e11dbea565d95fa90bafac6391e58ad/99031/medal-bronze.webp 41w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/adaa5/medal-bronze.webp 82w,\\n/static/7e11dbea565d95fa90bafac6391e58ad/fcfc6/medal-bronze.webp 163w","type":"image/webp","sizes":"(min-width: 163px) 163px, 100vw"}]},"width":163,"height":193}')},6440:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxLAAAsSwGlPZapAAACYklEQVR42qVUv2sUQRQ+TXbfGlJIRCEWgthqFQsFb2d/XdQ/QFD8gUUqBQsbGyFICls7BcXKpEgh9hYpLCLG0kZLQauQBLI/bvd+PL83u3d7IbuXAwfmZm/mzTffe98302iMbXxcfqdVdJmc+COpaBs9NO1wi1T4sLEs63ysMVFbzsEMtX+b3DSjgBljn5yEyeMetZhNJ347GVjBjNy9C6bX2SG3w+REGToAYwbLLsZMQMlOHuktt3iqHk/xtAymmz3XzDQYgEa7gHrCuvMNoUXadekX6ZKTrZLPA0YHAYWtm2Jsb89e49PjAQv6YPiuYNipAOxJKVDHP8jo5ESAlpPerWUoc74IE30erXudKPlJPp8SBkirYIk+AB8ChpslYB1oIUrjyt6c6bb/ajX93Crk9wWsnysudeyyabef5piVKctkvgDPvSQn7ZIdrRgqvof/K5YTbZAnNooFMB9xCDLZOBFEZytTReBjUvEPSQlA98u6FusqflXWFiwVPLko4qXrFTcjvUheL9UbnGRnpsnzen3huwFQU8cEfEkbe2CfYfrp7uHb0UzOAzCi6yi4m3wpTTsi1iLPmV73t75BCqZXYYY9YvKfpQgLbOjvq3zGtKP3CFqaaYbzh/xVZIIH4pkWKYBYAfclI8sOHxwMFtAgPjfYdNRLgvrewcGfUMN1HHBzwM6COZ+YbvwGSm2Svd/S8zd+0XjAKs9hDiCvLdTLarFWylDJ0tGvx8iNyt/EqWE8+Z1dUBb5Y+18L1ubGLCq4b37qosrNgBTw01f/Beg9p2TbOXyRx9Q09lJBKlr/wBSeZvPLEYm8gAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/3a401e811139724f2f024f59dc1669cc/2c84b/star.png","srcSet":"/static/3a401e811139724f2f024f59dc1669cc/8ef0e/star.png 36w,\\n/static/3a401e811139724f2f024f59dc1669cc/b0e74/star.png 72w,\\n/static/3a401e811139724f2f024f59dc1669cc/2c84b/star.png 144w","sizes":"(min-width: 144px) 144px, 100vw"},"sources":[{"srcSet":"/static/3a401e811139724f2f024f59dc1669cc/9a807/star.webp 36w,\\n/static/3a401e811139724f2f024f59dc1669cc/de323/star.webp 72w,\\n/static/3a401e811139724f2f024f59dc1669cc/1b3aa/star.webp 144w","type":"image/webp","sizes":"(min-width: 144px) 144px, 100vw"}]},"width":144,"height":144}')},6054:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/e84842f0d84d58ca7b34b734ad646bb7/ad998/top-button.png","srcSet":"/static/e84842f0d84d58ca7b34b734ad646bb7/7ceb7/top-button.png 18w,\\n/static/e84842f0d84d58ca7b34b734ad646bb7/83fe9/top-button.png 35w,\\n/static/e84842f0d84d58ca7b34b734ad646bb7/ad998/top-button.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/e84842f0d84d58ca7b34b734ad646bb7/4f7ad/top-button.webp 18w,\\n/static/e84842f0d84d58ca7b34b734ad646bb7/dbb7e/top-button.webp 35w,\\n/static/e84842f0d84d58ca7b34b734ad646bb7/299bc/top-button.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},9544:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/8711c/play-store.png","srcSet":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/e2d8e/play-store.png 16w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/de95f/play-store.png 31w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/8711c/play-store.png 62w","sizes":"(min-width: 62px) 62px, 100vw"},"sources":[{"srcSet":"/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/deaf0/play-store.webp 16w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/f0a07/play-store.webp 31w,\\n/static/42d9843fef3a6b2c7c4dca3cf7d22f9d/2bcd5/play-store.webp 62w","type":"image/webp","sizes":"(min-width: 62px) 62px, 100vw"}]},"width":62,"height":66}')}}]);
//# sourceMappingURL=component---src-pages-project-tsx-3c4bbcfe72820206e1bc.js.map