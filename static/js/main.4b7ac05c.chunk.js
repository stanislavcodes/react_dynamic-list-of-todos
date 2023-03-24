(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(7),i=c(2),o=c(5),r=c.n(o),d=c(1);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var j=c(3),u=c.n(j),h=c(0),b=function(e){var t=e.todo,c=e.selectedTodoId,s=e.openModal,a=t.id,n=t.title,l=t.completed,i=c===a;return Object(h.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":i}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:a}),Object(h.jsx)("td",{className:"is-vcentered",children:l?Object(h.jsx)("span",{"data-cy":"iconCompleted",children:"\u2705"}):Object(h.jsx)("span",{children:"\u274c"})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:u()({"has-text-success":l,"has-text-danger":!l}),children:n})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button is-small is-info is-light",type:"button",onClick:s,children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:u()("far",{"fa-eye":!i,"fa-eye-slash":i})})})})})]})},m=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onTodoClick;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.id;return Object(h.jsx)(b,{todo:e,selectedTodoId:c,openModal:function(){return s(t)}},t)}))})]})},O=function(e){var t=e.query,c=e.status,a=e.onQueryChange,n=e.onStatusChange;return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select is-info",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return n(function(e){switch(e){case s.Active:return s.Active;case s.Completed:return s.Completed;case s.All:default:return s.All}}(e.target.value))},children:[Object(h.jsx)("option",{value:"all",children:"All"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input is-info",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==t&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete is-info",onClick:function(){return a("")}})})]})]})})},x=(c(14),function(){return Object(h.jsx)("progress",{className:"progress is-large is-info","data-cy":"loader",max:"100",children:"40%"})});function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1100,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p=function(e){var t=e.todo,c=e.onClose,s=Object(d.useState)(null),a=Object(i.a)(s,2),n=a[0],l=a[1],o=t.title,r=t.completed,j=t.id,u=t.userId;return Object(d.useEffect)((function(){try{(function(e){return f("/users/".concat(e))})(u).then(l)}catch(e){l(null)}}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),n?Object(h.jsxs)("div",{className:"modal-card modal-card-body-background-info",children:[Object(h.jsxs)("header",{className:"modal-card-head has-background-info",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium has-text-white","data-cy":"modal-header",children:"Todo #".concat(j)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[r?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(h.jsx)(x,{})]})},v=(c(15),c(16),function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(""),o=Object(i.a)(n,2),j=o[0],u=o[1],b=Object(d.useState)(s.All),v=Object(i.a)(b,2),N=v[0],y=v[1],g=Object(d.useState)(0),C=Object(i.a)(g,2),k=C[0],w=C[1],A=Object(d.useState)(!1),S=Object(i.a)(A,2),T=S[0],I=S[1],B=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.prev=1,e.next=4,f("/todos").then();case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a([]);case 11:I(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),E=Object(d.useMemo)((function(){return c.find((function(e){return e.id===k}))}),[k]);Object(d.useEffect)((function(){B()}),[]);var M=Object(d.useMemo)((function(){return function(e,t,c){if(t!==s.All||c){var a=c.toLowerCase().split(" ").filter(Boolean).join(" ");return e.filter((function(e){var c=e.title,n=e.completed,l=c.toLowerCase().includes(a),i=!0;switch(t){case s.Active:i=!1===n;break;case s.Completed:i=!0===n;break;default:i=!0}return l&&i}))}return e}(c,N,j)}),[c,N,j]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"columns is-flex is-justify-content-center",children:Object(h.jsx)("div",{className:"column is-two-thirds p-6",children:Object(h.jsxs)("div",{className:"panel is-info",children:[Object(h.jsx)("h1",{className:"panel-heading",children:"Todos:"}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(O,{query:j,status:N,onQueryChange:u,onStatusChange:y})}),Object(h.jsx)("div",{className:"panel-block",children:T?Object(h.jsx)(x,{}):Object(h.jsx)(m,{todos:M,selectedTodoId:k,onTodoClick:w})})]})})}),E&&Object(h.jsx)(p,{todo:E,onClose:function(){return w(0)}})]})});n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4b7ac05c.chunk.js.map