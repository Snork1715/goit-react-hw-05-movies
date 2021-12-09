(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[2],{17:function(e,t,c){"use strict";c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return l})),c.d(t,"a",(function(){return b})),c.d(t,"c",(function(){return d})),c.d(t,"d",(function(){return O}));var n=c(30),a=c.n(n),r=c(39),s="https://api.themoviedb.org/3",i="3a92a1fcfb1e0a18fb78507fc5f18631";function o(){return j.apply(this,arguments)}function j(){return j=Object(r.a)(a.a.mark((function e(){var t,c,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Movies not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function u(){return o("".concat(s,"/trending/movie/day?api_key=").concat(i))}function l(e){return o("".concat(s,"/movie/").concat(e,"?api_key=").concat(i))}function b(e){return o("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i))}function d(e,t){return o("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i))}function O(e,t){return o("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=").concat(t))}},28:function(e,t,c){"use strict";t.a=c.p+"static/media/DefaultMovieCat.a7630b32.png"},44:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));c(64);var n=c(28),a=c(1);function r(e){var t=e.title,c=e.poster_path,r=e.vote_average,s=e.release_date;return Object(a.jsxs)("article",{className:"movie-article",children:[Object(a.jsx)("img",{className:"movie-image",src:c?"".concat("https://image.tmdb.org/t/p/w342").concat(c):n.a,alt:t}),Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsx)("h3",{children:t}),Object(a.jsxs)("p",{children:["Vote mark: ",r]}),Object(a.jsxs)("p",{children:["Release date: ",s]})]})]})}c(65);var s=c(8),i=c(5),o=c(40),j=c.n(o);function u(e){var t=e.movies,c=Object(i.e)();return Object(a.jsx)("ul",{className:"movies-block",children:t.map((function(e){var t=e.id,n=e.title,i=e.poster_path,o=e.vote_average,u=e.release_date;return Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/movies/".concat(j()("".concat(n," ").concat(t),{lower:!0})),state:{from:c},children:Object(a.jsx)(r,{title:n,poster_path:i,vote_average:o,release_date:u})})},t)}))})}},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(27),s=c.n(r),i=(c(57),c(8)),o=(c(58),c(1));function j(){var e=function(e){return e.isActive?"link active-link":"link"};return Object(o.jsxs)("nav",{className:"navigation",children:[Object(o.jsx)(i.c,{to:"/",className:e,children:"Home"}),Object(o.jsx)(i.c,{to:"/movies",className:e,children:"Movies"})]})}c(60);function u(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})}c(61);function l(){return Object(o.jsx)("header",{className:"header-app",children:Object(o.jsx)(u,{children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)(j,{})})})})}var b=c(23),d=c(5),O=c(24),v=c(10);c(62);function f(e){var t=e.text;return Object(o.jsx)("div",{className:"page-heading",children:Object(o.jsx)("h2",{children:t})})}var h=c(17),m=c(44),x=c(41),p=c.n(x);c(86);function g(){return Object(o.jsx)(p.a,{className:"Skeleton",type:"Circles",color:"#006eff",height:60,width:60,timeout:2e3})}c(87);var N=function(){return Object(o.jsx)("div",{className:"wrapp",children:Object(o.jsx)("h2",{className:"title",children:"Something went wrong"})})};function y(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(b.useQuery)("movies",(function(){return h.e()})),s=r.data,i=r.isLoading,j=r.isError,u=r.isSuccess;return Object(n.useEffect)((function(){s&&a((function(e){return[].concat(Object(O.a)(e),Object(O.a)(s.results))}))}),[s]),Object(o.jsxs)("div",{children:[j&&Object(o.jsx)(N,{}),i&&Object(o.jsx)(g,{}),u&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{text:"\u0422\u043e\u043f \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0434\u043d\u044f"}),Object(o.jsx)(m.default,{movies:c})]})]})}var k=c(42);c(88);function w(e){var t=e.onHandleSubmit,c=Object(n.useState)(""),a=Object(v.a)(c,2),r=a[0],s=a[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()&&(t(r.trim().toLowerCase()),s(""))},className:"form",children:[Object(o.jsx)("input",{className:"input",type:"text",name:"searchQuery",value:r,autoComplete:"off",onChange:function(e){s(e.target.value)},placeholder:"Search movies"}),Object(o.jsx)("button",{className:"button",type:"submit",children:Object(o.jsx)(k.a,{})})]})}var _=Object(n.lazy)((function(){return c.e(0).then(c.bind(null,44))}));function S(){var e=Object(i.d)(),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(v.a)(r,2),j=s[0],u=s[1],l=c.get("query"),b=Number(c.get("page"));Object(n.useEffect)((function(){l&&h.d(l,b).then((function(e){return u((function(){return Object(O.a)(e.results)}))}))}),[l,b]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{onHandleSubmit:function(e){e!==l&&a({query:e,page:1})}}),Object(o.jsx)(n.Suspense,{fallback:Object(o.jsx)(g,{}),children:j&&Object(o.jsx)(_,{movies:j})})]})}c(89);var C=c(28);function E(e){var t=e.movie,c=t.poster_path,n=t.title,a=t.release_date,r=t.genres,s=t.overview,i=t.popularity,j=t.vote_average,u=t.vote_count;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{text:n}),Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)("div",{className:"imageFrame",children:Object(o.jsx)("img",{src:c?"".concat("https://image.tmdb.org/t/p/w342").concat(c):C.a,alt:n})}),Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsx)("h2",{className:"title",children:"".concat(n," (").concat(a.slice(0,4),")")}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("p",{children:r.map((function(e){return e.name})).join(", ")}),Object(o.jsx)("h3",{children:"Overview"}),Object(o.jsx)("p",{children:s}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Popularity:"})," ",i]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Score:"})," ",j]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Votes:"})," ",u]})]})]})]})]})}c(90);function z(){var e,t,c=Object(d.e)(),n=function(e){return e.isActive?"addLink addActive-link":"addLink"};return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.c,{to:"cast",state:{from:null===(e=c.state)||void 0===e?void 0:e.from},className:n,children:"Cast"}),Object(o.jsx)(i.c,{to:"reviews",state:{from:null===(t=c.state)||void 0===t?void 0:t.from},className:n,children:"Reviews"})]})}var A=c(43);c(91);function F(){var e,t,c,n,a=Object(d.e)(),r=null===(e=a.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname,s=null===(c=a.state)||void 0===c||null===(n=c.from)||void 0===n?void 0:n.search;return Object(o.jsxs)(i.b,{to:r?"".concat(r).concat(s):"/",className:"button",children:[Object(o.jsx)(A.a,{className:"icon"}),"Previous"]})}var L=Object(n.lazy)((function(){return c.e(0).then(c.bind(null,97))})),M=Object(n.lazy)((function(){return c.e(1).then(c.bind(null,98))}));function P(){var e=Object(n.useState)(null),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(d.g)().slug.match(/[a-z0-9]+$/)[0];return Object(n.useEffect)((function(){h.b(r).then(a)}),[r]),Object(o.jsxs)("div",{children:[Object(o.jsx)(F,{}),c&&Object(o.jsx)(E,{movie:c}),Object(o.jsx)(z,{}),Object(o.jsx)(n.Suspense,{fallback:Object(o.jsx)(g,{}),children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"cast",element:Object(o.jsx)(L,{movieID:r})}),Object(o.jsx)(d.a,{path:"reviews",element:Object(o.jsx)(M,{})})]})})]})}var Q=new b.QueryClient;var q=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{children:Object(o.jsx)(b.QueryClientProvider,{client:Q,children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",element:Object(o.jsx)(y,{})}),Object(o.jsx)(d.a,{path:"/movies",element:Object(o.jsx)(S,{})}),Object(o.jsx)(d.a,{path:"/movies/:slug/*",element:Object(o.jsx)(P,{})})]})})})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(q,{})})}),document.getElementById("root"))}},[[92,3,4]]]);
//# sourceMappingURL=main.deae4e6d.chunk.js.map