(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{95:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return l}));var a=c(10),s=c(2),n=c(17),r="pending",i="resolved",j="rejected";c(95);var o=c.p+"static/media/defaultCast.011266f3.png",h=c(1);function l(e){var t=function(e){var t=Object(s.useState)([]),c=Object(a.a)(t,2),o=c[0],h=c[1],l=Object(s.useState)(r),u=Object(a.a)(l,2),d=u[0],m=u[1];return Object(s.useEffect)((function(){n.a(e).then((function(e){h(e.cast),m(e.cast.length?i:j)})).catch((function(){return m(j)}))}),[e]),[o,d]}(e.movieID),c=Object(a.a)(t,2),l=c[0],u=c[1];return Object(h.jsxs)(h.Fragment,{children:[u===i&&Object(h.jsx)("div",{className:"cast",children:Object(h.jsx)("ul",{className:"castList",children:l.map((function(e){var t=e.id,c=e.name,a=e.character,s=e.profile_path;return Object(h.jsxs)("li",{className:"castItem",children:[Object(h.jsx)("img",{className:"image",src:s?"".concat("https://image.tmdb.org/t/p/w342").concat(s):o,alt:c}),Object(h.jsxs)("div",{className:"descr",children:[Object(h.jsx)("h5",{children:c}),Object(h.jsxs)("p",{className:"character",children:["Character:",a]})]})]},t)}))})}),u===j&&Object(h.jsx)("p",{children:"We don't have any cast information for this movie."})]})}}}]);
//# sourceMappingURL=Cast.4fe67509.chunk.js.map