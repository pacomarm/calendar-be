(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),o=n(10),s=n(64),i=n(8),l=n(12),u=n.n(l),j=n(18),d=n(17),b=n.n(d),m="https://calendar-b.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},f="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set Active",x="[event] Logout Events",g="[event] Add New",y="[event] Clear Active Event",w="[event] Event Update",E="[event] Event Deleted",N="[event] Events Loaded",k="[auth] Finish Checking login state",S="[auth] Login",C="[auth] Logout",D=function(){return{type:k}},T=function(e){return{type:S,payload:e}},P=function(){return{type:C}},A=n(15),I=n(24),_=n(5),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(_.a)(Object(_.a)({},r),{},Object(I.a)({},t.name,t.value)))};return[r,s,o]},G=(n(84),n(2)),V=function(){var e=Object(o.b)(),t=L({lEmail:"",lPassword:""}),n=Object(A.a)(t,2),a=n[0],r=n[1],c=a.lEmail,s=a.lPassword,i=L({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),l=Object(A.a)(i,2),d=l[0],m=l[1],O=d.rName,f=d.rEmail,v=d.rPassword1,h=d.rPassword2;return Object(G.jsx)("div",{className:"container login-container",children:Object(G.jsxs)("div",{className:"row",children:[Object(G.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(G.jsx)("h3",{children:"Login"}),Object(G.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(j.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({uid:c.uid,name:c.name}))):b.a.fire("Error","Incorrect user credentials!","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:c,onChange:r})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"password",name:"lPassword",value:s,onChange:r})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(G.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(G.jsx)("h3",{children:"Sign Up"}),Object(G.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Thy passwords shall match!");var n,a,r;e((n=O,a=f,r=v,function(){var e=Object(j.a)(u.a.mark((function e(t){var c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({uid:o.uid,name:o.name}))):b.a.fire("Error",o.msg||"Could not register user!","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:O,onChange:m})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:f,onChange:m})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"password",name:"rPassword1",value:v,onChange:m})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"rPassword2",value:h,onChange:m})}),Object(G.jsx)("div",{className:"form-group",children:Object(G.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})},J=n(51),M=n(21),R=n.n(M),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{end:R()(e.end).toDate(),start:R()(e.start).toDate()})}))},B=function(e){return{type:g,payload:e}},F=function(){return{type:y}},H=function(e){return{type:w,payload:e}},X=function(){return{type:E}},q=function(e){return{type:N,payload:e}},z=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(G.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(G.jsx)("span",{className:"navbar-brand",children:e}),Object(G.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t(P());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t({type:x})},children:["Exit",Object(G.jsx)("i",{className:" ml-2 fas fa-sign-out-alt"})]})]})},K=(n(87),function(e){var t=e.event,n=t.title,a=t.user;return Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{children:n}),Object(G.jsxs)("strong",{children:[" -",a.name]})]})}),Q=n(46),W=n.n(Q),Y=n(47),Z=n.n(Y),$=function(){return{type:f}},ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};W.a.setAppElement("#root");var te=R()().minutes(0).seconds(0).add(1,"hours"),ne=te.clone().add(1,"hours"),ae={title:"",notes:"",start:te.toDate(),end:ne.toDate()},re=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(te.toDate()),c=Object(A.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(ne.toDate()),d=Object(A.a)(l,2),m=d[0],p=d[1],f=Object(a.useState)(!0),h=Object(A.a)(f,2),x=h[0],g=h[1],y=Object(a.useState)(ae),w=Object(A.a)(y,2),E=w[0],N=w[1],k=E.notes,S=E.title,C=E.start,D=E.end;Object(a.useEffect)((function(){N(t||ae)}),[t,N]);var T=function(e){var t=e.target;N(Object(_.a)(Object(_.a)({},E),{},Object(I.a)({},t.name,t.value)))},P=function(){n({type:v}),n(F()),N(ae)};return Object(G.jsxs)(W.a,{isOpen:e,onRequestClose:P,style:ee,className:"modal",closeTimeoutMS:200,overlayClassName:"modal-fondo",children:[Object(G.jsxs)("h1",{children:[" ",t?"Editing: ".concat(t.title):"New Event"," "]}),Object(G.jsx)("hr",{}),Object(G.jsxs)("form",{className:"container",children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Beginning Date and Time"}),Object(G.jsx)(Z.a,{onChange:function(e){i(e),N(Object(_.a)(Object(_.a)({},E),{},{start:e}))},value:s,className:"form-control"})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"End Date and Time"}),Object(G.jsx)(Z.a,{onChange:function(e){p(e),N(Object(_.a)(Object(_.a)({},E),{},{end:e}))},value:m,minDate:s,className:"form-control"})]}),Object(G.jsx)("hr",{}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Title y notes"}),Object(G.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"),placeholder:"Event's title",name:"title",autoComplete:"off",value:S,onChange:T}),Object(G.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Short desc"})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:k,onChange:T}),Object(G.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Additional info"})]}),Object(G.jsxs)("button",{type:"button",className:"btn btn-outline-primary btn-block",onClick:function(e){e.preventDefault();var a,r=R()(C),c=R()(D);return r.isSameOrAfter(c)?b.a.fire("Error!","End date should be later than begin date!","error"):S.trim().length<2?g(!1):(n(t?(a=E,function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(H(a)):b.a.fire("Error!",r.msg||"Could not update event :(","error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(u.a.mark((function t(n,a){var r,c,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:c,name:o},n(B(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(E)),g(!0),void P())},children:[Object(G.jsx)("i",{className:"far fa-save"}),Object(G.jsx)("span",{children:" Save"})]})]})]})},ce=function(){var e=Object(o.b)();return Object(G.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e($())},children:Object(G.jsx)("i",{className:" fas fa-plus"})})},oe=function(){var e=Object(o.b)();return Object(G.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(X()):b.a.fire("Error!",c.msg||"Could not delete the event :(","error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(G.jsx)("i",{className:" fas fa-trash"})})},se=Object(J.b)(R.a),ie=[],le=function(){var e=Object(a.useState)(localStorage.getItem("lastView")||"month"),t=Object(A.a)(e,2),n=t[0],r=t[1],c=Object(o.b)(),s=Object(o.c)((function(e){return e.calendar})),i=s.events,l=s.activeEvent,d=Object(o.c)((function(e){return e.auth})).uid;Object(a.useEffect)((function(){c(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events","GET");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=U(a.events),t(q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),ie=i;return Object(G.jsxs)("div",{className:"calendar-screen",children:[Object(G.jsx)(z,{}),Object(G.jsx)(J.a,{localizer:se,events:ie,startAccessor:"start",endAccessor:"end",eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:d===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){c($())},onSelectEvent:function(e){c({type:h,payload:e})},onView:function(e){r(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){c(F())},selectable:!0,view:n,components:{event:K}}),Object(G.jsx)(re,{}),Object(G.jsx)(ce,{}),l&&Object(G.jsx)(oe,{})]})},ue=n(36),je=(n(1),["isAuthenticated","component"]),de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,je);return Object(G.jsx)(i.b,Object(_.a)(Object(_.a)({},a),{},{component:function(e){return t?Object(G.jsx)(n,Object(_.a)({},e)):Object(G.jsx)(i.a,{to:"/login"})}}))},be=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,be);return Object(G.jsx)(i.b,Object(_.a)(Object(_.a)({},a),{},{component:function(e){return t?Object(G.jsx)(i.a,{to:"/"}):Object(G.jsx)(n,Object(_.a)({},e))}}))},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("auth/renew");case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(a=e.sent).ok){e.next=13;break}localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(T({uid:a.uid,name:a.name})),e.next=15;break;case 13:throw t(D()),new Error(a.msg||"Error!");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0.msg||"Error al validar token");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(G.jsx)("h1",{children:"Validating your credentials, please wait..."}):Object(G.jsx)(s.a,{children:Object(G.jsx)("div",{children:Object(G.jsxs)(i.d,{children:[Object(G.jsx)(me,{exact:!0,path:"/login",component:V,isAuthenticated:!!r}),Object(G.jsx)(de,{exact:!0,path:"/",component:le,isAuthenticated:!!r}),Object(G.jsx)(i.a,{to:"/"})]})})})},Oe=n(25),fe=n(65),ve={checking:!0},he=n(52),xe={events:[],activeEvent:null},ge={modalOpen:!1},ye=Object(Oe.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(_.a)(Object(_.a)({},e),{},{modalOpen:!0});case v:return Object(_.a)(Object(_.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(_.a)(Object(_.a)({},e),{},{activeEvent:t.payload});case g:return Object(_.a)(Object(_.a)({},e),{},{events:[].concat(Object(he.a)(e.events),[t.payload])});case y:return Object(_.a)(Object(_.a)({},e),{},{activeEvent:null});case w:return Object(_.a)(Object(_.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(_.a)(Object(_.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case N:return Object(_.a)(Object(_.a)({},e),{},{events:Object(he.a)(t.payload)});case x:return Object(_.a)({},xe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(_.a)(Object(_.a)(Object(_.a)({},e),t.payload),{},{checking:!1});case k:return Object(_.a)(Object(_.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),we="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.c,Ee=Object(Oe.d)(ye,we(Object(Oe.a)(fe.a))),Ne=function(){return Object(G.jsx)(o.a,{store:Ee,children:Object(G.jsx)(pe,{})})};n(117);c.a.render(Object(G.jsx)(Ne,{}),document.getElementById("root"))},84:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.6f4b1f09.chunk.js.map