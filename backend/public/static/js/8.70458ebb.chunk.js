(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[8],{905:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(0);function n(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},906:function(e,a,t){"use strict";var r=t(132);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(159)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=o},919:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),c=(t(2),t(4)),l=t(6),i=o.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.component,s=void 0===i?"div":i,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(c.a)(t.root,l),ref:a},m))}));a.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},921:function(e,a,t){"use strict";var r=t(1),n=t(57),o=t(3),c=t(0),l=(t(80),t(2),t(4)),i=t(6),s=t(484),m=t(16),u=t(160),p=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=t(278);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(d.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(p,{className:a.icon}))}));var f=c.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,u=e.component,p=void 0===u?"nav":u,d=e.expandText,f=void 0===d?"Show path":d,g=e.itemsAfterCollapse,h=void 0===g?1:g,v=e.itemsBeforeCollapse,y=void 0===v?1:v,E=e.maxItems,j=void 0===E?8:E,O=e.separator,x=void 0===O?"/":O,S=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=c.useState(!1),C=w[0],N=w[1],k=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return c.createElement(s.a,Object(r.a)({ref:a,component:p,color:"textSecondary",className:Object(l.a)(i.root,m)},S),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:a},t)):r.push(n),r}),[])}(C||j&&k.length<=j?k:function(e){return y+h>=e.length?e:[].concat(Object(n.a)(e.slice(0,y)),[c.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(){N(!0)}})],Object(n.a)(e.slice(e.length-h,e.length)))}(k),i.separator,x)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},994:function(e,a,t){"use strict";t.r(a);var r=t(31),n=t(0),o=t.n(n),c=t(33),l=t(30),i=t(79),s=t(905),m=t(452),u=t(894),p=t(924),d=t(919),b=t(484),f=t(898),g=t(881),h=t(872),v=t(279),y=t(60),E=t.n(y),j=t(96),O=t(41),x=t(4),S=t(910),w=t(911),C=t(161),N=t(890),k=t(873),B=t(95),P=Object(m.a)((function(){return{root:{}}}));function q(e){var a=e.className,t=e.onSubmitSuccess,r=e.partner,n=Object(O.a)(e,["className","onSubmitSuccess","partner"]),l=P(),s=Object(C.useSnackbar)().enqueueSnackbar,m=Object(c.i)().partnerId;return o.a.createElement(w.a,{initialValues:{username:r.username,location:r.location,email:r.email,password:"",percentage:r.percentage,payment:r.payment},validationSchema:S.b().shape({username:S.c().max(255).required("partner name is required"),location:S.c().max(255).required("location is required"),email:S.c().email("Must be a valid email").max(255).required("Email is required"),percentage:S.a().required("percentage is required"),payment:S.a().required("payment is required")}),onSubmit:function(){var e=Object(j.a)(E.a.mark((function e(a,r){var n,o,c,l,u,p,d,b,f,g;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,o=r.setStatus,c=r.setSubmitting,e.prev=1,l=a.username,u=a.location,p=a.email,d=a.password,b=a.percentage,f=a.payment,g="",e.next=6,i.a.post(B.a+"partners/update",{id:m,username:l,location:u,email:p,password:d,percentage:b,payment:f}).then((function(e){g=e.data}));case 6:g.success?(o({success:!0}),c(!1),s(g.message,{variant:"success"})):s(g.message,{variant:"error"}),t(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),c(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,c=e.handleBlur,i=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,u=e.touched,p=e.values;return o.a.createElement("form",Object.assign({className:Object(x.a)(l.root,a),onSubmit:s},n),o.a.createElement(N.a,{error:Boolean(u.username&&t.username),fullWidth:!0,helperText:u.username&&t.username,label:"Partner Name",margin:"normal",name:"username",onBlur:c,onChange:i,type:"username",value:p.username,variant:"outlined"}),o.a.createElement(N.a,{error:Boolean(u.location&&t.location),fullWidth:!0,helperText:u.location&&t.location,label:"Location(country or city)",margin:"normal",name:"location",onBlur:c,onChange:i,type:"location",value:p.location,variant:"outlined"}),o.a.createElement(N.a,{error:Boolean(u.email&&t.email),fullWidth:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:c,onChange:i,type:"email",value:p.email,variant:"outlined"}),o.a.createElement(N.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:c,onChange:i,type:"password",value:p.password,variant:"outlined"}),"admin"!==r.role&&o.a.createElement(N.a,{error:Boolean(u.percentage&&t.percentage),fullWidth:!0,helperText:u.percentage&&t.percentage,label:"Percentage(%)",margin:"normal",name:"percentage",onBlur:c,onChange:i,type:"number",value:p.percentage,variant:"outlined"}),o.a.createElement(N.a,{error:Boolean(u.payment&&t.payment),fullWidth:!0,helperText:u.payment&&t.payment,label:"Payment($)",margin:"normal",name:"payment",onBlur:c,onChange:i,type:"number",value:p.payment,variant:"outlined"}),o.a.createElement(f.a,{mt:2},o.a.createElement(k.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Update")))}))}q.default={onSubmitSuccess:function(){}};var T=q,W=t(895),R=t(921),z=t(906),M=t.n(z),I=Object(m.a)((function(e){return{root:{marginTop:"15px",marginLeft:"10px"},actionIcon:{marginRight:e.spacing(1)}}}));var L=function(e){var a=e.className,t=Object(O.a)(e,["className"]),r=I();return o.a.createElement(W.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(x.a)(r.root,a)},t),o.a.createElement(W.a,{item:!0},o.a.createElement(R.a,{separator:o.a.createElement(M.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(h.a,{variant:"body1",color:"inherit",to:"/app",component:l.a},"Dashboard"),o.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Partners"),o.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Edit Partner")),o.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"Please edit your partners info!")))},A=Object(m.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column"}}}));a.default=function(){var e=A(),a=Object(c.g)(),t=Object(s.a)(),m=Object(n.useState)(null),y=Object(r.a)(m,2),E=y[0],j=y[1],O=Object(c.i)().partnerId,x=Object(n.useCallback)((function(){i.a.get(B.a+"partners/edit/"+O).then((function(e){t.current&&j(e.data.partner)}))}),[t]);return Object(n.useEffect)((function(){x()}),[x]),E?o.a.createElement(v.a,{className:e.root,title:"Partner edit"},o.a.createElement(L,null),o.a.createElement(u.a,{maxWidth:"sm"},o.a.createElement(p.a,null,o.a.createElement(d.a,null,o.a.createElement(b.a,{align:"center",variant:"h2",color:"textPrimary"},"Partner editing page"),o.a.createElement(f.a,{mt:3},o.a.createElement(T,{partner:E,onSubmitSuccess:function(){a.push("/app/partners/list")}})),o.a.createElement(f.a,{my:2},o.a.createElement(g.a,null)),o.a.createElement(h.a,{component:l.a,to:"/app/partners/list",variant:"body2",color:"textSecondary"},"go to partners list"))))):null}}}]);
//# sourceMappingURL=8.70458ebb.chunk.js.map