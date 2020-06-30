(this["webpackJsonpreact-step-form"]=this["webpackJsonpreact-step-form"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},101:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(99),a(100),a(101),a(93)),o=a(14),s=a(15),u=a(17),m=a(16),p=a(24),h=a.n(p),f=a(25),b=a.n(f),E=a(26),v=a.n(E),d=a(12),y=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{primary:!0,title:"Enter User Details"}),r.a.createElement(v.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Email Address",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(y.a,{label:"Continue",secondary:!0,style:x.button,onClick:this.continue})))}}]),a}(n.Component),x={button:{margin:15}},C=g,T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{primary:!0,title:"Enter User Details"}),r.a.createElement(v.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occuptation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(y.a,{label:"Continue",secondary:!0,style:k.button,onClick:this.continue}),r.a.createElement(y.a,{label:"Back",default:!0,style:k.button,onClick:this.back})))}}]),a}(n.Component),k={button:{margin:15}},O=T,S=a(18),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{primary:!0,title:"Confirm User Details"}),r.a.createElement(S.List,null,r.a.createElement(S.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(S.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(S.ListItem,{primaryText:"Email Address",secondaryText:n}),r.a.createElement(S.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(S.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement(S.ListItem,{primaryText:"Bio",secondaryText:i})),r.a.createElement(y.a,{label:"Confirm",secondary:!0,style:N.button,onClick:this.continue}),r.a.createElement(y.a,{label:"Back",default:!0,style:N.button,onClick:this.back})))}}]),a}(n.Component),N={button:{margin:15}},w=j,L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).reload=function(t){t.preventDefault(),e.props.reload()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName;e.lastName,e.email,e.occupation,e.city,e.bio;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{primary:!0,title:"Success"}),r.a.createElement("p",null,"Thanks for checking out this form, ",t,"!"),r.a.createElement(y.a,{label:"Reload Form",default:!0,style:D.button,onClick:this.reload}),r.a.createElement("br",null),r.a.createElement(y.a,{label:"Back to Github",secondary:!0,style:D.button,href:"https://www.github.com/alexgignilliat",target:"_blank"})))}}]),a}(n.Component),D={button:{margin:15}},A=L,B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.reload=function(){e.state.step;e.setState({step:1})},e.handleChange=function(t){return function(a){e.setState(Object(i.a)({},t,a.target.value))}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(C,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(O,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(w,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(A,{values:a,reload:this.reload});default:console.log("This is a multi-step form built with React.")}}}]),a}(n.Component);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(238)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.a717d475.chunk.js.map