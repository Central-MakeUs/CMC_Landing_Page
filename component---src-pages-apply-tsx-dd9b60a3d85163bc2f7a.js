"use strict";(self.webpackChunkcmc_landing_page=self.webpackChunkcmc_landing_page||[]).push([[55],{2769:function(e,t,s){s.r(t),s.d(t,{Head:function(){return b},default:function(){return g}});var a={};s.r(a),s.d(a,{In:function(){return i},WL:function(){return l},YM:function(){return d},Dh:function(){return o},h_:function(){return m},TN:function(){return u}});var n=s(9953),c=s(8505),r=s(4954),i="apply-module--card--9ac4b",l="apply-module--description--2b6ec",d="apply-module--head--7265d",o="apply-module--space--9c03b",m="apply-module--star--7ad45",u="apply-module--title--860e2",p=s(8073),f=s(5849),h=s(1874);const A=()=>{const{0:e,1:t}=(0,n.useState)(f.rH.BEFORE_RECRUITING),{0:s,1:a}=(0,n.useState)({hours:0,minutes:0,seconds:0});(0,n.useEffect)((()=>{const{startDate:e,endDate:s}=f.RecruitDate,n=()=>{const n=new Date;let c=0;n.getTime()<e.getTime()?(c=e.getTime()-n.getTime(),t(f.rH.BEFORE_RECRUITING)):n.getTime()<=s.getTime()?(c=s.getTime()-n.getTime(),t(f.rH.RECRUITING)):(c=0,t(f.rH.AFTER_RECRUITING));let r={hours:0,minutes:0,seconds:0};if(c>0){r={hours:Math.floor(c/36e5),minutes:Math.floor(c/6e4%60),seconds:Math.floor(c/1e3%60)}}a(r)};n();const c=setInterval(n,1e3);return()=>clearInterval(c)}),[]);const r=(0,n.useCallback)((e=>e<10?`0${e}`:e),[]);return(0,h.jsxs)("div",{className:"countdown-timer-module--timer--b001d",children:[(0,h.jsx)("p",{className:"countdown-timer-module--timer_title--f41d6",children:f.Gc[e].title}),(0,h.jsx)("p",{className:(0,p.Z)("countdown-timer-module--timer_time--adfbc",{"countdown-timer-module--timer_time_inactive--e437f":e===f.rH.AFTER_RECRUITING}),children:`${r(s.hours)} : ${r(s.minutes)} : ${r(s.seconds)}`}),(0,h.jsx)(c.VD,{href:f.Gc[e].link,className:"countdown-timer-module--apply_btn--fe6e2",children:f.Gc[e].buttonText})]})};var x=s(6885);var g=()=>{(0,n.useRef)(null);return(0,h.jsx)(r.or,{children:(0,h.jsx)(c.OA,{children:(0,h.jsxs)(c.$0,{className:a.section,children:[(0,h.jsx)(c.gP,{}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)(x.S,{src:"../../images/star.png",alt:"",className:m,placeholder:"blurred",__imageData:s(823)}),(0,h.jsxs)("h1",{className:u,children:["Centeral ",(0,h.jsx)(c.Br,{mobile:!0}),"Makeus ",(0,h.jsx)(c.Br,{mobile:!0}),"Challenge"]})]}),(0,h.jsxs)("p",{className:l,children:["CMC는 ",(0,h.jsx)(c.Br,{mobile:!0}),(0,h.jsx)("span",{children:"실력있는"})," '기획자, 디자이너, 개발자'들이 ",(0,h.jsx)(c.Br,{mobile:!0}),(0,h.jsx)("span",{children:"3개월"})," 동안 함께 ",(0,h.jsx)(c.Br,{desktop:!0}),(0,h.jsx)("span",{children:"수익 창출"}),"을 위한 ",(0,h.jsx)(c.Br,{mobile:!0}),(0,h.jsx)("span",{children:"MVP 프로덕트"}),"를 제작하는 ",(0,h.jsx)("span",{children:"IT 커뮤니티"}),"입니다."]}),(0,h.jsx)("div",{className:i,children:(0,h.jsx)(A,{})}),(0,h.jsx)("div",{className:o})]})})})};const b=e=>{let{location:{pathname:t}}=e;return(0,h.jsx)(c.pQ,{pathname:t})}},823:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxLAAAsSwGlPZapAAACaUlEQVR42qWUP4gTQRTG99TdtxFFELG4QhA7URtBNHg3s38uHmIrFnqCaCUIFtoJWni2dhZqexZaiLUgguCBaHeNtnrVBQxsdnZ3Ntnxm9mNScgmBhyYbLJ585vvfe/NWNbMoXbpz4YfnyEu3mK2icVdh8VfiSU3rIfl//ONKtheiq4QlymFSpGXFsQTRX6/r387XDyfk1bCqNk55gT5b/J7ingsMQEUCip7+J67LWzCk9tmyWW1ezqPqT364XjygVHGu9KARqeG+lp1/gWhC5WQhZnpEk83SqDIJ4BarSe1wvY+pg7NBlbyofBFCYzrgH2og4/JLytUB+YCukxco0BVntWkHJjCvB/1fVpRyp3OqoNQsI3qVioxGZSNAePPwzXToKsFlcAOgOk2rUClr0yroOLF0ALtI9Jm6b1R72vUlQqJZ0/Iz7Sqx+6yuI7nOuZH8mUJ47FOvyC/ADT+0GjGi7WpYtEdYmJLp2QzsTb0dbCReDrmLROZyYJnrydPBotOII1M70pettMI1aIBaRsuqb0mJlQnAZJ/0zbQLqqetSdPx1JyFEcrpgsw3Es/1RarBW/9/Cd5Pa1SAiaxRvv7vQxa/UGoaMMEn4sOw4+XCLrVCAeejPRXlYnDuvdNkQIUK1AFBYVyWXdtvH+OK8cKxZHhuZzWqOWweXQVG79Dym+QzcXBuXWh6K6+OTA3aTlaGbbOLGBdi+AdIM9MhUIl9dPmyc1/3x6DE7XlIM4xmZ1WtnlHft6BsbqnhOn8IH81N7BuOF62Wd0oklq677JH/wW0z0en0JjfzAXK4g2rubN/noJMG38AdFqb+56Og8gAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/3a401e811139724f2f024f59dc1669cc/2c84b/star.png","srcSet":"/static/3a401e811139724f2f024f59dc1669cc/8ef0e/star.png 36w,\\n/static/3a401e811139724f2f024f59dc1669cc/b0e74/star.png 72w,\\n/static/3a401e811139724f2f024f59dc1669cc/2c84b/star.png 144w","sizes":"(min-width: 144px) 144px, 100vw"},"sources":[{"srcSet":"/static/3a401e811139724f2f024f59dc1669cc/9a807/star.webp 36w,\\n/static/3a401e811139724f2f024f59dc1669cc/de323/star.webp 72w,\\n/static/3a401e811139724f2f024f59dc1669cc/1b3aa/star.webp 144w","type":"image/webp","sizes":"(min-width: 144px) 144px, 100vw"}]},"width":144,"height":144}')}}]);
//# sourceMappingURL=component---src-pages-apply-tsx-dd9b60a3d85163bc2f7a.js.map