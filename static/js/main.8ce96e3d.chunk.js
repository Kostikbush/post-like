(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{30:function(e,t,c){},36:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(7),a=c.n(r),i=(c(30),c(24)),s=c(11),u=c(2),o="INCREMENT",j="DECREMENT",l="INPUT_TEXT",d="COMMENT_CREATE",b="COMMENT_UPDATE",O="COMMENT_DELETE",m="COMMENTS_LOAD",p="LOADER_DISPLAY_ON",f="LOADER_DISPLAY_OFF",h="ERROR_DISPLAY_ON",x="ERROR_DISPLAY_OFF",v={like:!1,disLike:!1},g={text:""},N=c(8),y={comments:[]},E={loading:!1,error:null},k=Object(s.b)({likesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(u.a)(Object(u.a)({},e),{},{like:!e.like});case j:return Object(u.a)(Object(u.a)({},e),{},{disLike:!e.disLike});default:return e}},inputReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object(u.a)(Object(u.a)({},e),{},{text:t.text}):e},commentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{comments:[].concat(Object(N.a)(e.comments),[t.data])});case b:var c=t.data,n=e.comments,r=n.findIndex((function(e){return e.id===c.id})),a=[].concat(Object(N.a)(n.slice(0,r)),[c],Object(N.a)(n.slice(r+1)));return Object(u.a)(Object(u.a)({},e),{},{comments:a});case O:return function(){var c=t.id,n=e.comments,r=n.findIndex((function(e){return e.id===c})),a=[].concat(Object(N.a)(n.slice(0,r)),Object(N.a)(n.slice(r+1)));return Object(u.a)(Object(u.a)({},e),{},{comments:a})}();case m:var i=t.data.map((function(e){return{text:e.name,id:e.id}}));return Object(u.a)(Object(u.a)({},e),{},{comments:i});default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case f:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{error:t.text});case x:return Object(u.a)(Object(u.a)({},e),{},{error:null});default:return e}}}),R=c(4),C=(c(36),c(9)),D=c(18),T=c(21);function _(){return{type:o}}function L(){return{type:j}}function M(){return{type:f}}function A(e){return function(t){t({type:h,text:e}),setTimeout((function(){t({type:x})}),3e3)}}var I=c(1);function w(e){var t=e.data,c=Object(n.useState)(""),r=Object(C.a)(c,2),a=r[0],i=r[1],s=t.text,u=t.id,o=Object(R.b)();Object(n.useEffect)((function(){s&&i(s)}),[s]);return Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(function(e,t){return{type:b,data:{text:e,id:t}}}(a,u))},className:"comments-item",children:[Object(I.jsx)("div",{onClick:function(e){e.preventDefault(),o(function(e){return{type:O,id:e}}(u))},className:"comments-item-delete",children:"\xd7"}),Object(I.jsx)("textarea",{onInput:function(e){e.target.scrollHeight<e.target.clientWidth&&(e.target.style.height=e.target.scrollHeight+"px"),e.target.scrollHeight>e.target.clientWidth&&(e.target.style.height=e.target.scrollHeight-"px")},className:"input",type:"text",onChange:function(e){i(e.target.value)},value:a}),Object(I.jsx)("input",{type:"submit",hidden:!0})]})}var S=c(22),F=c.n(S),P=c(62),H=c(61);function Y(e){var t=Object(n.useState)(""),c=Object(C.a)(t,2),r=c[0],a=c[1],i=Object(R.b)(),s=Object(R.c)((function(e){return e.commentReducer.comments}));return Object(n.useEffect)((function(){i(function(){var e=Object(T.a)(Object(D.a)().mark((function e(t){var c,n;return Object(D.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:p}),e.next=4,fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:m,data:n}),t(M()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t(A("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")),t(M());case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(I.jsxs)(P.a,{className:"card-comments",children:[Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=F()();r.length&&i(function(e,t){return{type:d,data:{text:e,id:t}}}(r,t)),a("")},className:"comments-item-create",children:[Object(I.jsx)("input",{type:"text",value:r,onChange:function(e){a(e.target.value)}}),Object(I.jsx)("input",{type:"submit",hidden:!0}),Object(I.jsx)("button",{className:"button",children:"ADD COMMENT"})]}),!!s.length&&s.map((function(e){return Object(I.jsx)(H.a,{timeout:1e3,classNames:"note",children:Object(I.jsx)(w,{data:e})},e.id)}))]})}var B=function(e){var t=Object(R.b)(),c=Object(R.c)((function(e){return e.likesReducer.like})),n=Object(R.c)((function(e){return e.likesReducer.disLike}));return Object(I.jsxs)("div",{className:"button-controls",children:[Object(I.jsxs)("button",{className:"".concat(c?"like-active":"like"),onClick:function(){return t(_()),void(n&&t(L()))},children:[Object(I.jsx)("span",{children:"\ud83d\udd92"})," ",c]}),Object(I.jsxs)("button",{className:"".concat(n?"like-active":"like"),onClick:function(){return t(L()),void(c&&t(_()))},children:[Object(I.jsx)("span",{children:"\ud83d\udd93"})," "]})]})},J=c(23),U=c.n(J),W=function(){var e=Object(R.c)((function(e){return e.appReducer.loading}));return Object(I.jsx)("div",{className:"loader-styles",children:Object(I.jsx)(U.a,{type:"Puff",color:"#00BFFF",height:100,width:100,visible:e})})};var z=function(){var e=Object(R.b)();return Object(R.c)((function(e){return e.inputReducer.text})),Object(I.jsx)("div",{className:"card-title",children:Object(I.jsx)("div",{className:"card-title-top",children:Object(I.jsx)("input",{type:"text",onChange:function(t){e(function(e){return{type:l,text:e}}(t.target.value))}})})})};var X=function(){var e=Object(R.c)((function(e){return e.appReducer.error}));return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)("div",{className:"wrap",children:[Object(I.jsx)(W,{}),Object(I.jsxs)("div",{className:"card",children:[e&&Object(I.jsx)("div",{className:"error-message",children:e}),Object(I.jsxs)("div",{className:"card-image",children:[Object(I.jsx)("img",{className:"image",src:"https://surfbali.ru/wp-content/uploads/2010/02/C71I6932.jpg",alt:"izi"}),Object(I.jsx)(z,{}),Object(I.jsx)(B,{})]}),Object(I.jsx)(Y,{})]})]})})},q=Object(s.d)(k,Object(s.c)(Object(s.a)(i.a)));a.a.render(Object(I.jsx)(R.a,{store:q,children:Object(I.jsx)(X,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.8ce96e3d.chunk.js.map