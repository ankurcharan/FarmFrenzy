(this.webpackJsonpsih=this.webpackJsonpsih||[]).push([[0],{21:function(e,t){e.exports={url:"https://farmfrenzy.herokuapp.com"}},46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(37),r=a.n(c),o=(a(51),a(38)),i=a(39),s=a(44),u=a(40),m=a(45),d=a(9),p=a(41),E=a.n(p),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");E.a.Sidenav.init(e,{})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{class:"nav-wrapper"},l.a.createElement(d.b,{to:"/",class:"brand-logo"},"Crop Processor"),l.a.createElement("a",{href:"#","data-target":"mobile-demo",class:"sidenav-trigger"},l.a.createElement("i",{class:"material-icons"},"menu")),l.a.createElement("ul",{class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/upload"},"Process")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/crops"},"Crops"))))),l.a.createElement("ul",{class:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/upload"},"Process")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/crops"},"Crops"))))}}]),t}(l.a.Component),f=a(18),v=a.n(f),g=a(14),h=a(22),w=a(57).initializeApp({apiKey:"AIzaSyCiI79efC9vS7csAbi6F5Z5CwXDxN0w3a8",authDomain:"hackathon-192011.firebaseapp.com",databaseURL:"https://hackathon-192011.firebaseio.com",projectId:"hackathon-192011",storageBucket:"hackathon-192011.appspot.com",messagingSenderId:"146195363368",appId:"1:146195363368:web:c60059899a907153c1271d"}),k=a(20),y=a.n(k),x=a(21),j=a.n(x),O=function(e){var t=Object(n.useState)({file:null,latitude:null,longitude:null,navigatorMsg:"Get Location"}),a=Object(h.a)(t,2),c=a[0],r=a[1],o=function(t){var a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("urlllll ",typeof t),n.prev=1,c.latitude&&c.longitude&&c.file){n.next=5;break}return alert("enter all fields"),n.abrupt("return");case 5:return n.next=7,v.a.awrap(y.a.post("".concat(j.a.url,"/api/process"),{path:t,latitude:c.latitude,longitude:c.longitude}));case 7:a=n.sent,console.log(a),e.history.push({pathname:"/details",state:{url:t,data:a.data}}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),null,null,[[1,12]])},i=function(e){console.log("position",e),e&&r(Object(g.a)({},c,{latitude:e.coords.latitude,longitude:e.coords.longitude}),(function(){console.log(c)}))},s=Math.random();return l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("span",{class:"card-title"},"Upload Image"),l.a.createElement("p",null,"Take photo or upload"),l.a.createElement("form",{onSubmit:function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault();try{console.log(c.file),(t=w.storage().ref().child("images/".concat(s,".jpg")).put(c.file)).on("state_changed",(function(e){}),(function(e){}),(function(){t.snapshot.ref.getDownloadURL().then((function(e){console.log("url",e),o(e)})).catch((function(e){console.log(e)}))}))}catch(n){console.log(n)}case 2:case"end":return a.stop()}}))}},l.a.createElement("div",{class:"file-field input-field"},l.a.createElement("div",{class:"btn"},l.a.createElement("span",null,"Photo"),l.a.createElement("input",{type:"file",accept:"image/jpeg",capture:"environment",name:"cropImage",onChange:function(e){r(Object(g.a)({},c,{file:e.target.files[0]}))}})),l.a.createElement("div",{class:"file-path-wrapper"},l.a.createElement("input",{class:"file-path validate",type:"text"}))),l.a.createElement("button",{onClick:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();try{navigator.geolocation?navigator.geolocation.getCurrentPosition(i):r(Object(g.a)({},c,{navigatorMsg:"Geolocation not supported"}))}catch(a){console.log(a)}case 2:case"end":return t.stop()}}))},class:"btn waves-effect waves-light",type:"submit",name:"action"},c.latitude&&c.longitude?c.longitude+" "+c.latitude:c.navigatorMsg,l.a.createElement("i",{class:"material-icons right"},"location_searching")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{class:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",l.a.createElement("i",{class:"material-icons right"},"send"))))))))},C=a(11),S=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12 center"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("h1",{className:"c"},"Crop Processor")))))},I=function(e){console.log(e);var t=e.location.state;return console.log(t),l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{class:"col s12 m12 center"},l.a.createElement("div",{class:"card white darken-1"},l.a.createElement("div",{class:"card-content black-text"},l.a.createElement("h3",null,t.data.crop.name),l.a.createElement("div",null,l.a.createElement("img",{className:"responsive-img",src:t.url,alt:"crop img"})),l.a.createElement("br",null),l.a.createElement("p",null,t.data.crop.text),"  */}")))))},D=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e="".concat(j.a.url,"/api/crops");y.a.get(e).then((function(e){if(!0===e.data.success){var t=Object.keys(e.data.data).map((function(t){return e.data.data[t]}));c(Object(g.a)({},a,{crops:t}))}})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,a.crops?a.crops.map((function(e){return l.a.createElement("div",null,l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("strong",null,e.name),l.a.createElement("br",null),l.a.createElement("p",null,e.text),l.a.createElement("br",null))})):"Loading")};var L=function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(C.c,null,l.a.createElement("div",{className:"container"},l.a.createElement(C.a,{exact:!0,path:"/",component:S}),l.a.createElement(C.a,{exact:!0,path:"/upload",component:O}),l.a.createElement(C.a,{exact:!0,path:"/details",component:I}),l.a.createElement(C.a,{exact:!0,path:"/crops",component:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.661c11ae.chunk.js.map