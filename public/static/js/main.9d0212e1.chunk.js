(this.webpackJsonpsih=this.webpackJsonpsih||[]).push([[0],{39:function(e,a,t){e.exports=t(78)},44:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(36),r=t.n(c),o=(t(44),t(10)),s=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{class:"nav-wrapper"},l.a.createElement("a",{href:"#!",class:"brand-logo"},"Crop Processor"),l.a.createElement("a",{href:"#","data-target":"mobile-demo",class:"sidenav-trigger"},l.a.createElement("i",{class:"material-icons"},"menu")),l.a.createElement("ul",{class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/upload"},"Process")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/crops"},"Crops"))))),l.a.createElement("ul",{class:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/upload"},"Process")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/crops"},"Crops"))))},i=t(21),m=t.n(i),u=t(20),p=t(19),E=t(50).initializeApp({apiKey:"AIzaSyCiI79efC9vS7csAbi6F5Z5CwXDxN0w3a8",authDomain:"hackathon-192011.firebaseapp.com",databaseURL:"https://hackathon-192011.firebaseio.com",projectId:"hackathon-192011",storageBucket:"hackathon-192011.appspot.com",messagingSenderId:"146195363368",appId:"1:146195363368:web:c60059899a907153c1271d"}),d=t(18),h=t.n(d),b=function(e){var a=Object(n.useState)({file:null}),t=Object(p.a)(a,2),c=t[0],r=t[1],o=function(a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("urlllll ",typeof a),n.prev=1,n.next=4,m.a.awrap(h.a.post("http://localhost:9000/api/process",{path:a}));case 4:t=n.sent,console.log(t),e.history.push({pathname:"/details",state:{url:a,data:t.data}}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),null,null,[[1,9]])},s=Math.random();return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("span",{class:"card-title"},"Upload Image"),l.a.createElement("p",null,"Take photo or upload"),l.a.createElement("form",{onSubmit:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();try{console.log(c.file),(a=E.storage().ref().child("images/".concat(s,".jpg")).put(c.file)).on("state_changed",(function(e){}),(function(e){}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){console.log("url",e),o(e)})).catch((function(e){console.log(e)}))}))}catch(n){console.log(n)}case 2:case"end":return t.stop()}}))}},l.a.createElement("div",{class:"file-field input-field"},l.a.createElement("div",{class:"btn"},l.a.createElement("span",null,"Photo"),l.a.createElement("input",{type:"file",accept:"image/jpeg",capture:"environment",name:"cropImage",onChange:function(e){r(Object(u.a)({},c,{file:e.target.files[0]}))}})),l.a.createElement("div",{class:"file-path-wrapper"},l.a.createElement("input",{class:"file-path validate",type:"text"}))),l.a.createElement("button",{class:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",l.a.createElement("i",{class:"material-icons right"},"send"))))))))},f=t(11),v=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12 center"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("h1",{className:"c"},"Crop Processor")))))},g=function(e){console.log(e);var a=e.location.state;return console.log(a),l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12 center"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("center",null,l.a.createElement("span",{class:"card-title"},"Details")),l.a.createElement("div",null,l.a.createElement("img",{src:a.url,alt:"crop img"})),l.a.createElement("br",null),l.a.createElement("h3",null,a.data.crop.name),l.a.createElement("p",null,a.data.crop.text),"  */}")))))},w=function(){var e=Object(n.useState)({}),a=Object(p.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:9000/api/crops").then((function(e){if(!0===e.data.success){var a=Object.keys(e.data.data).map((function(a){return e.data.data[a]}));c(Object(u.a)({},t,{crops:a}))}})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,t.crops?t.crops.map((function(e){return l.a.createElement("div",null,l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("p",null,e.text),l.a.createElement("br",null))})):"Loading")};var k=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(f.c,null,l.a.createElement("div",{className:"container"},l.a.createElement(f.a,{exact:!0,path:"/",component:v}),l.a.createElement(f.a,{exact:!0,path:"/upload",component:b}),l.a.createElement(f.a,{exact:!0,path:"/details",component:g}),l.a.createElement(f.a,{exact:!0,path:"/crops",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.9d0212e1.chunk.js.map