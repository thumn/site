(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},167:function(e,t){},168:function(e,t){},23:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(96),s=n.n(i),o=n(18),u=n(3),l=(n(104),n.p+"static/media/tn-logo.306dc8df.png"),j=(n(105),n(106),n.p+"static/media/Thu_Nguyen_Resume.fbaf3eee.pdf"),d=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{id:"nav",children:[Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/projects",children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/photo",children:"Photography"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:"Resume"})})]})})},h=function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Layout-heading",children:[Object(c.jsx)("img",{src:l,className:"Layout-logo",alt:""}),Object(c.jsx)(d,{})]}),Object(c.jsx)("div",{children:t})]})},b=n.p+"static/media/intro.38f4bc95.png",f=n.p+"static/media/thu-cartoon.2c8f0a2b.jpg",m=(n(114),n(23),function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Home-container",children:[Object(c.jsx)("div",{className:"Home-thu",children:Object(c.jsx)("img",{src:f,alt:""})}),Object(c.jsxs)("div",{className:"Home-rightContainer",children:[Object(c.jsx)("img",{src:b,alt:""}),Object(c.jsx)("p",{className:"body",children:"I graduated from UC Berkeley with a major in Cognitive Science and a minor in Computer Science in December 2019. I'm currently working as a software engineer at Samsara. In my free time, I enjoy playing Animal Crossing, writing snail mail to friends, going on photoshoots, and doing Chloe Ting workout challenges!"})]})]})})})}),p=n(34),x=n(12),O=n.n(x),g=n(22),v=n(98),N=(n(37),function(e){var t=e.albumName,n=e.onClick;return Object(c.jsx)("div",{className:"Page-tab body animatedButton",onClick:function(){return n()},children:t})}),y=(n(116),new(n(117))({apiKey:"keyqImwErlYOVbnFz"}).base("app4Rk1m18hcBC6Ge")),w=function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("Albums").select({view:"Grid view"}).all().then((function(e){return!e||e.length<1?[]:e})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("Photos").select({view:"Grid view",filterByFormula:"{Album}='".concat(t,"'")}).all().then((function(e){return!e||e.length<1?[]:e})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return e.fields.Description},C=function(){var e=a.a.useState("SFAI"),t=Object(p.a)(e,2),n=t[0],r=t[1],i=a.a.useState({}),s=Object(p.a)(i,2),o=s[0],u=s[1],l=a.a.useState([]),j=Object(p.a)(l,2),d=j[0],b=j[1];return a.a.useEffect((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,w();case 3:return n=e.sent,t||(c={},n.forEach((function(e){c[e.fields.Name]=e.fields.Description})),u(c)),e.abrupt("return",(function(){t=!0}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.a.useEffect((function(){(function(){var e=Object(g.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,P(n);case 3:return c=e.sent,t||b(c),e.abrupt("return",(function(){t=!0}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),a.a.useEffect((function(){return document.body.className="Page-body",function(){document.body.className=""}})),Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Page-container",children:[Object(c.jsxs)("div",{className:"Page-left",children:[Object(c.jsx)("p",{className:"header",children:"Photography"}),Object(c.jsx)("div",{className:"Page-descriptionContainer",children:Object(c.jsx)("p",{className:"caption",children:o[n]})}),Object(c.jsx)("div",{className:"Page-tabContainer",children:Object.keys(o).map((function(e){return Object(c.jsx)(N,{albumName:e,onClick:function(){return r(e)}})}))})]}),Object(c.jsxs)("div",{className:"Page-right",children:[Object(c.jsx)("div",{className:"Page-rightContent",children:d.map((function(e){var t=e.fields.Attachments[0].url;return Object(c.jsxs)("div",{className:"Photo-images",children:[Object(c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(c.jsx)(v.a,{className:"Photo-image",src:t})}),Object(c.jsx)("p",{className:"caption",children:k(e)})]})}))}),Object(c.jsx)("div",{style:{height:250}})]})]})})},S=function(){return Object(c.jsx)(h,{children:Object(c.jsxs)("div",{className:"Page-container",children:[Object(c.jsxs)("div",{className:"Page-left",children:[Object(c.jsx)("p",{className:"header",children:"Projects"}),Object(c.jsx)("p",{className:"body",children:"Here are some projects that made me want to die"})]}),Object(c.jsx)("div",{className:"Page-right",children:"blah blah"})]})})};var F=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:m}),Object(c.jsx)(u.a,{exact:!0,path:"/photo",component:C}),Object(c.jsx)(u.a,{exact:!0,path:"/projects",component:S})]})},I=(n(244),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))});s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),I()},37:function(e,t,n){}},[[245,1,2]]]);
//# sourceMappingURL=main.6b31f5aa.chunk.js.map