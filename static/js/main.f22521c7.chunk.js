(this["webpackJsonpexlog-app"]=this["webpackJsonpexlog-app"]||[]).push([[0],{56:function(e,n,t){e.exports=t.p+"static/media/home_cinema.afe57b51.svg"},59:function(e,n,t){e.exports=t.p+"static/media/weather_notification.84f39abf.svg"},61:function(e,n,t){e.exports=t.p+"static/media/operating_system.1ffb2d13.svg"},62:function(e,n,t){e.exports=t.p+"static/media/towing.1eec8c1f.svg"},63:function(e){e.exports=JSON.parse('{"ExLog App":"ExLog App","Weather Station":"Weather Station","Settings":"Settings","Theme":"Theme","Font":"Font","Border radius":"Border radius","Language":"Language","Version":"Version","Temperature":"Temperature","Humidity":"Humidity","About App":"About App","This is development site to tests and another tech news":"This is development site to tests and another tech news"}')},64:function(e){e.exports=JSON.parse('{"ExLog App":"Aplikacja ExLog","Weather Station":"Stacja Pogodowa","Settings":"Ustawienia","Theme":"Motyw","Font":"Czcionka","Border radius":"Zaokr\u0105glenia","Language":"J\u0119zyk","Version":"Wersja","Temperature":"Temperatura","Humidity":"Wilgotno\u015b\u0107","About App":"O aplikacji","This is development site to tests and another tech news":"Jesto to strona rozwojowa, do test\xf3w r\xf3\u017cnego rodzaju urz\u0105dze\u0144 oraz nowinek technologicznych."}')},65:function(e){e.exports=JSON.parse('{"ExLog App":"Anwendungs-ExLog","Weather Station":"Wetterstation","Settings":"Einstellungen","Theme":"Thema","Font":"Schriftart","Border radius":"Randradius","Language":"Sprache","Version":"Ausf\xfchrung","Temperature":"Temperatur","Humidity":"Feuchtigkeit","About App":"\xdcber","This is development site to tests and another tech news":"Diese Website ist entwicklungsorientiert und spricht \xfcber technologische Innovationen"}')},66:function(e,n,t){e.exports=t(96)},79:function(e,n,t){},96:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(38),c=t.n(o),i=t(17),l=t(97),u=(t(75),t(76),t(77),t(78),t(5)),m=t(4);t(79);function d(){var e=Object(u.a)(["\n  display: block;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: ","rem;\n  background: ",";\n  color: ",";\n  margin-bottom: 0;\n"]);return d=function(){return e},e}var s=m.c.p(d(),(function(e){return e.theme.borderRadius/1.5}),(function(e){var n=e.second,t=e.theme;return n?t.second:"transparent"}),(function(e){return e.theme.card.fontColor})),f=function(e){return a.a.createElement(s,e)},h=t(21),b=t(19),g=t(34),p=t(98),E=t(20),v=t(55),w=t(0),j=t(26),O=t(36);function k(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: calc(100% - 2rem);\n  height: 65px;\n  background: ",";\n  & * {\n    text-decoration: none;\n    color: ",";\n  }\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 1rem;\n  border-radius: ","rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: ",";\n\n  @supports (\n    (-webkit-backdrop-filter: blur(1rem)) or (backdrop-filter: blur(1rem))\n  ) {\n    background: ","80;\n    backdrop-filter: blur(1rem);\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(u.a)(["\n  display: block;\n  font-weight: bold;\n  margin-top: 0.5rem;\n  line-height: 2rem;\n"]);return y=function(){return e},e}function x(){var e=Object(u.a)(["\n  flex: 1;\n  text-align: center;\n  margin-top: 0.8rem;\n"]);return x=function(){return e},e}var F=Object(m.c)(g.b)(x()),C=m.c.span(y()),z=m.c.nav(k(),(function(e){return e.theme.nav.background}),(function(e){return e.theme.nav.fontColor}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.nav.shadow}),(function(e){return e.theme.nav.background})),S=Object(E.a)(z),A=function(){var e=Object(p.a)().t,n=Object(r.useState)({width:!0,height:!1}),t=Object(b.a)(n,2),o=t[0],c=t[1],i=Object(E.b)((function(){return{height:0,width:100,config:{mass:1,tension:300,friction:25}}})),l=Object(b.a)(i,2),u=l[0],m=u.height,d=u.width,s=l[1],f=Object(v.a)((function(e){var n=Object(b.a)(e.swipe,2),t=n[0],r=n[1];-1===r&&(s({height:100}),c(Object(h.a)(Object(h.a)({},o),{},{height:!0})),document.body.style.overflow="hidden"),1===r&&(s({height:0}),c(Object(h.a)(Object(h.a)({},o),{},{height:!1})),setTimeout((function(){document.body.style.overflow="auto"}),200)),-1===t&&(s({width:100}),c(Object(h.a)(Object(h.a)({},o),{},{width:!0}))),1===t&&(s({width:0}),c(Object(h.a)(Object(h.a)({},o),{},{width:!1})))})),g=function(e){return function(n){return"".concat((e-96)*n/1600+4,"rem")}},k=g(window.innerWidth),y=g(window.innerHeight);return a.a.createElement(S,Object.assign({},f(),{style:{width:d.interpolate(k),height:m.interpolate(y)}}),a.a.createElement(w.b.Provider,{value:{color:"blue",size:"2.3rem"}},!o.width&&!o.height&&a.a.createElement(O.b,{style:{marginTop:"0.8rem"},onClick:function(){s({height:100,width:100}),c({height:!0,width:!0})}}),o.width&&!o.height&&a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{to:"/",name:"Home"},a.a.createElement(j.c,null)),a.a.createElement(D,{to:"/weather-station",name:e("Weather Station")},a.a.createElement(j.a,null)),a.a.createElement(D,{to:"/settings",name:e("Settings")},a.a.createElement(O.c,null)))))},T=Object(E.a)(C),D=function(e){var n=e.children,t=e.to,r=e.name,o=Object(E.b)((function(){return{ys:[0,1],opacity:0,config:{mass:1,tension:400,friction:20}}})),c=Object(b.a)(o,2),i=c[0],l=i.ys,u=i.opacity,m=c[1];return a.a.createElement(F,{to:t,exact:!0,onMouseOver:function(){return m({ys:[-10,.8],opacity:1})},onMouseOut:function(){return m({ys:[0,1],opacity:0})}},a.a.createElement(E.a.div,{style:{transform:l.interpolate((function(e,n){return"translateY(".concat(e,"px) scale(").concat(n,")")}))}},n),a.a.createElement(T,{style:{transform:l.interpolate((function(e){return"translateY(".concat(3*e,"px)")})),opacity:u.interpolate((function(e){return e}))}},r))};function L(){var e=Object(u.a)(["\n  width: 100%;\n  border-radius: ","rem;\n  background: ",";\n  box-sizing: border-box;\n"]);return L=function(){return e},e}var R=m.c.img(L(),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.card.backgroundColor})),W=function(e){var n=e.src,t=e.padding,r=e.maxHeight;return a.a.createElement(R,{src:n,style:{padding:t,maxHeight:r}})};function B(){var e=Object(u.a)(["\n  color: ",";\n  position: relative;\n  font-size: 3rem;\n  letter-spacing: 4px;\n  margin-top: 1rem;\n\n  &::after, &::before {\n    content: '","';\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    color: #14FDFD;\n    z-index: -1;\n  }\n  &::before{\n    top: -2px;\n    left: -2px;\n    color: #D80B28;\n  }\n"]);return B=function(){return e},e}var H=m.c.h1(B(),(function(e){return e.theme.white}),(function(e){return e.children})),M=function(e){var n=e.children;return a.a.createElement(H,null,n)};function J(){var e=Object(u.a)([""]);return J=function(){return e},e}function V(){var e=Object(u.a)(["\n  margin: 0 0 0 1rem;\n  display: inline-block;\n"]);return V=function(){return e},e}function I(){var e=Object(u.a)(["\n  font-size: 1.7rem;\n  width: 3rem;\n  height: 3rem;\n  box-sizing: border-box;\n  border-radius: ","rem;\n  color: ",";\n  background: ","30;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"]);return I=function(){return e},e}function N(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  margin-bottom: 1rem;\n"]);return N=function(){return e},e}function Y(){var e=Object(u.a)(["\n  border-radius: ","rem;\n  background: ",";\n  color: ",";\n  box-sizing: border-box;\n  padding: 1rem;\n  box-shadow: ",";\n"]);return Y=function(){return e},e}var U=m.c.section(Y(),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.card.backgroundColor}),(function(e){return e.theme.card.fontColor}),(function(e){return e.theme.card.shadow})),P=m.c.div(N()),Z=m.c.div(I(),(function(e){return e.theme.borderRadius/1.5}),(function(e){return e.theme.card.fontColor}),(function(e){return e.theme.card.fontColor})),K=m.c.h2(V()),_=m.c.div(J()),G=function(e){var n=e.children;return a.a.createElement(U,null,n)};function Q(){var e=Object(u.a)(["\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  background: ",";\n  font-weight: bold;\n  box-shadow: ",";\n"]);return Q=function(){return e},e}function X(){var e=Object(u.a)(["\n  width: 100%;\n  height: 3rem;\n  border-radius: ","rem;\n  overflow: hidden;\n  background: ","30;\n"]);return X=function(){return e},e}var $=m.c.div(X(),(function(e){return e.theme.borderRadius/1.5}),(function(e){return e.theme.accent.green})),q=m.c.div(Q(),(function(e){return e.theme.accent.green}),(function(e){return e.theme.card.shadow})),ee=Object(E.a)(q),ne=function(e){var n=e.value,t=Object(E.b)((function(){return{width:0,config:{mass:1,tension:400,friction:20}}})),o=Object(b.a)(t,2),c=o[0].width,i=o[1];return Object(r.useEffect)((function(){i({width:n})})),a.a.createElement($,null,a.a.createElement(ee,{style:{width:c.interpolate((function(e){return"".concat(e,"%")}))}},n))};function te(){var e=Object(u.a)(["\n  display: block;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: ","rem;\n  background: ",";\n  border: none;\n  width: 100%;\n  color: ",";\n  font-size: 1rem;\n  font-weight: bold;\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n"]);return te=function(){return e},e}m.c.input(te(),(function(e){return e.theme.borderRadius/1.5}),(function(e){return e.theme.second}),(function(e){return e.theme.card.fontColor}));function re(){var e=Object(u.a)(["\n  display: block;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: ","rem;\n  background: ",";\n  border: none;\n  width: 100%;\n  color: ",";\n  font-size: 1rem;\n  font-weight: bold;\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  > * {\n    background: ",";\n    color: ",";\n  }\n"]);return re=function(){return e},e}var ae=m.c.select(re(),(function(e){return e.theme.borderRadius/1.5}),(function(e){return e.theme.second}),(function(e){return e.theme.card.fontColor}),(function(e){return e.theme.card.backgroundColor}),(function(e){return e.theme.card.fontColor})),oe=function(e){return a.a.createElement(ae,e)};function ce(){var e=Object(u.a)(["\n  margin: 1rem;\n  width: calc(100% - 2rem);\n"]);return ce=function(){return e},e}function ie(){var e=Object(u.a)(["\n  display: flex;\n  max-width: 1000px;\n  margin: auto;\n  margin-bottom: 5rem;\n  /* opacity: 0; */\n"]);return ie=function(){return e},e}var le=m.c.div(ie()),ue=m.c.main(ce()),me=function(e){var n=e.children;return a.a.createElement(le,null,a.a.createElement(g.a,null,a.a.createElement(ue,null,n),a.a.createElement(A,null)))};function de(){var e=Object(u.a)(["\n  margin-top: 1rem;\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 1rem;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n"]);return de=function(){return e},e}var se=m.c.div(de()),fe=function(e){var n=e.children;return a.a.createElement(se,null,n)},he=t(7),be=t(56),ge=t.n(be),pe=function(){var e=Object(p.a)().t;return a.a.createElement("div",null,a.a.createElement(M,null," ",e("ExLog App")),a.a.createElement(W,{src:ge.a,padding:30,maxHeight:300}),a.a.createElement(fe,null,a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(j.a,null)),a.a.createElement(K,null,e("About App"))),a.a.createElement(_,null,"Jesto to strona rozwojowa, do test\xf3w r\xf3\u017cnego rodzaju urz\u0105dze\u0144 oraz nowinek technologicznych.")),a.a.createElement(G,null)))},Ee=t(57),ve=t(31),we=t(18),je=t(60),Oe=t(58),ke=t.n(Oe).a.initializeApp({apiKey:"AIzaSyB8Zb2nxAQ9hZjDlYggpYVK7VRY8Nlz1jc",authDomain:"ardu-c44a3.firebaseapp.com",databaseURL:"https://ardu-c44a3.firebaseio.com",projectId:"ardu-c44a3",storageBucket:"ardu-c44a3.appspot.com",messagingSenderId:"526504033931",appId:"1:526504033931:web:45b7cc2d8d701d39f5de8e",measurementId:"G-C8YXZMZKKY"}).database(),ye=t(59),xe=t.n(ye);function Fe(){var e=Object(u.a)(["\n  animation: "," 2s linear infinite;\n  font-size: 4rem;\n  color: ",";\n  position: absolute;\n"]);return Fe=function(){return e},e}function Ce(){var e=Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Ce=function(){return e},e}var ze=Object(m.d)(Ce()),Se=Object(m.c)(we.a)(Fe(),ze,(function(e){return e.theme.main})),Ae=function(){var e=Object(Ee.a)(ke.ref("weather-station")),n=Object(b.a)(e,3),t=n[0],r=n[1],o=n[2],c=Object(p.a)().t;return a.a.createElement("div",null,a.a.createElement(M,null,c("Weather Station")),a.a.createElement(W,{src:xe.a,padding:30,maxHeight:300}),a.a.createElement("p",null,o&&a.a.createElement("strong",null,a.a.createElement(ve.b,null),"Error: ",o),r&&a.a.createElement(Se,null)),t&&a.a.createElement(fe,null,a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(je.a,null)),a.a.createElement(K,null,c("Temperature"))),a.a.createElement(_,null,a.a.createElement(ne,{value:t.val().temperature}))),a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(O.a,null)),a.a.createElement(K,null,c("Humidity"))),a.a.createElement(_,null,a.a.createElement(ne,{value:t.val().humidity})))))};function Te(){var e=Object(u.a)(["\n  width: 3rem;\n  margin-top: 1rem;\n"]);return Te=function(){return e},e}function De(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return De=function(){return e},e}function Le(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return Le=function(){return e},e}var Re=m.c.div(Le()),We=m.c.div(De()),Be=Object(m.c)(oe)(Te()),He=function(){return a.a.createElement(Re,null,a.a.createElement(We,null,a.a.createElement(Z,null,a.a.createElement(we.e,null)),a.a.createElement(Be,{name:"theme"},[0,.5,1,1.5].map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(We,null,a.a.createElement(Z,null,a.a.createElement(we.f,null)),a.a.createElement(Be,{name:"theme"},[0,.5,1,1.5].map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(We,null,a.a.createElement(Z,null,a.a.createElement(we.c,null)),a.a.createElement(Be,{name:"theme"},[0,.5,1,1.5].map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(We,null,a.a.createElement(Z,null,a.a.createElement(we.b,null)),a.a.createElement(Be,{name:"theme"},[0,.5,1,1.5].map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))))},Me=t(61),Je=t.n(Me),Ve=t(16),Ie=t(15),Ne=t.n(Ie),Ye=Object(Ve.b)({name:"theme",initialState:{theme:Ne.a.get("theme")||"light"},reducers:{switchTheme:function(e,n){e.theme=n.payload,Ne.a.set("theme",e.theme)}}}),Ue=Ye.actions,Pe=(Ye.reducer,Ue.switchTheme),Ze=function(e){return e.theme.theme},Ke=Object(Ve.b)({name:"font",initialState:{font:Ne.a.get("font")||"ubuntu"},reducers:{switchFont:function(e,n){e.font=n.payload,Ne.a.set("font",e.font)}}}),_e=Ke.actions,Ge=(Ke.reducer,_e.switchFont),Qe=function(e){return e.font.font},Xe=Object(Ve.b)({name:"lang",initialState:{lang:Ne.a.get("lang")},reducers:{switchLang:function(e,n){e.lang=n.payload,Ne.a.set("lang",e.lang)}}}),$e=Xe.actions,qe=(Xe.reducer,$e.switchLang),en=function(e){return e.lang.lang},nn={switchTheme:Pe,switchFont:Ge,switchLang:qe},tn=Object(i.b)(null,nn)((function(e){var n=e.switchTheme,t=e.switchFont,r=e.switchLang,o=Object(i.c)(Ze),c=Object(i.c)(Qe),l=Object(i.c)(en),u=Object(p.a)(),m=u.t,d=u.i18n,s=function(e){return a.a.createElement("option",{key:e,value:e},e)};return a.a.createElement("div",null,a.a.createElement(M,null,m("Settings")),a.a.createElement(W,{src:Je.a,padding:30,maxHeight:300}),a.a.createElement(fe,null,a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(ve.a,null)),a.a.createElement(K,null,m("Theme"))),a.a.createElement(_,null,a.a.createElement(oe,{name:"theme",onChange:function(e){var t=e.target;return n(t.value)},value:o},["light","dark","pink","yellow"].map(s)))),a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(j.b,null)),a.a.createElement(K,null,m("Font"))),a.a.createElement(_,null,a.a.createElement(oe,{name:"font",onChange:function(e){var n=e.target;return t(n.value)},value:c},["Ubuntu","Montserrat","Roboto","Jetbrains Mono","Arial"].map(s)))),a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(we.d,null)),a.a.createElement(K,null,m("Border radius"))),a.a.createElement(_,null,a.a.createElement(He,null))),a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(ve.c,null)),a.a.createElement(K,null,m("Language"))),a.a.createElement(_,null,a.a.createElement(oe,{name:"lang",onChange:function(e){var n=e.target.value;r(n),d.changeLanguage(n)},value:l},["en","pl","de"].map(s)))),a.a.createElement(G,null,a.a.createElement(P,null,a.a.createElement(Z,null,a.a.createElement(ve.d,null)),a.a.createElement(K,null,m("Version"))),a.a.createElement(_,{onClick:function(){return alert("Easter egg! Du\u017co klikasz")}},a.a.createElement(f,null,a.a.createElement("b",null,"v0.6.1 ",a.a.createElement("i",null,"Beta")))))))})),rn=t(62),an=t.n(rn),on=function(e){e.children;return a.a.createElement("div",null,a.a.createElement(M,null,"PageNotFound"),a.a.createElement(W,{src:an.a,padding:30,maxHeight:300}))},cn=function(){return a.a.createElement(he.c,null,a.a.createElement(he.a,{exact:!0,path:"/"},a.a.createElement(pe,null)),a.a.createElement(he.a,{path:"/weather-station"},a.a.createElement(Ae,null)),a.a.createElement(he.a,{path:"/settings"},a.a.createElement(tn,null)),a.a.createElement(he.a,{path:"*"},a.a.createElement(on,null)))},ln={light:{backgroundColor:"#F2F2F8",fontColor:"#374358",second:"#d8dae0",card:{backgroundColor:"#FEFCFF",fontColor:"#374358",shadow:"0 0.5rem 2rem -1rem #37435830"},nav:{background:"#FEFCFF",fontColor:"#374358",shadow:"0 0 3rem -1rem #37435870"},accent:{blue:"#5264FC",red:"#EA5B51",yellow:"#FDCC24",green:"#1BD1CF"},borderRadius:1},dark:{backgroundColor:"#232533",fontColor:"#FDFDFE",second:"#585c68",card:{backgroundColor:"#313645",fontColor:"#FDFDFE",shadow:"0 0.5rem 2rem -1rem #191e2790"},nav:{background:"#7FBAFF",fontColor:"#FDFDFE",shadow:"0 0 3rem -1rem #191e2770"},accent:{blue:"#2196f3",red:"#f44336",yellow:"#ffeb3b",green:"#81c784"},borderRadius:1},pink:{backgroundColor:"#F8BBD0",fontColor:"#880E4F",second:"#880E4F30",card:{backgroundColor:"#FCE4EC",fontColor:"#880E4F",shadow:"0 0.5rem 2rem -1rem #191e2790"},nav:{background:"#880E4F",fontColor:"#FCE4EC",shadow:"0 0 3rem -1rem #191e2770"},accent:{blue:"#2196f3",red:"#f44336",yellow:"#ffeb3b",green:"#81c784"},borderRadius:1},yellow:{backgroundColor:"#FDD32A",fontColor:"#06070D",second:"#FFFFFF30",card:{backgroundColor:"#06070D",fontColor:"#FFFFFF",shadow:"0 0.5rem 2rem -1rem #191e2790"},nav:{background:"#FFFFFF",fontColor:"#06070D",shadow:"0 0 3rem -1rem #191e2770"},accent:{blue:"#2196f3",red:"#f44336",yellow:"#ffeb3b",green:"#81c784"},borderRadius:1}};function un(){var e=Object(u.a)(["\n  body {\n    background-color: ",";\n    color: ",";\n    * {\n      font-family: ",";\n    }\n  }\n"]);return un=function(){return e},e}var mn=function(){var e=Object(i.c)(Ze),n=Object(i.c)(Qe);return a.a.createElement(m.a,{theme:ln[e]},a.a.createElement(dn,{font:n}),a.a.createElement(me,null,a.a.createElement(cn,null)))},dn=Object(m.b)(un(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.fontColor}),(function(e){return e.font})),sn=t(45),fn=t(28),hn={en:{translation:t(63)},pl:{translation:t(64)},de:{translation:t(65)}};sn.a.use(fn.e).init({resources:hn,lng:Ne.a.get("lang")||"en",fallbackLng:"en",debug:!0,keySeparator:!1,interpolation:{escapeValue:!1},react:{useSuspense:!1}});var bn=sn.a,gn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var En=Object(Ve.b)({name:"modal",initialState:{isOpen:!1,value:{}},reducers:{openModal:function(e,n){e.isOpen=!0,e.value=n.payload},closeModal:function(e){e.isOpen=!1}}}),vn=En.actions,wn=(En.reducer,vn.openModal,vn.closeModal,Object(Ve.a)({reducer:{theme:Ye.reducer,font:Ke.reducer,lang:Xe.reducer,modal:En.reducer}}));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:wn},a.a.createElement(l.a,{i18n:bn},a.a.createElement(mn,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");gn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):pn(n,e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.f22521c7.chunk.js.map