webpackJsonp([0],{343:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),l=n(a),i=o(148),s=n(i),r=o(347),u=n(r),d=o(362),f=n(d),c=o(364),p=n(c),m=o(365),h=function(){return l.default.createElement(s.default,null,l.default.createElement(u.default,null,p.default.projects.map(function(e,t){return l.default.createElement(f.default,{key:t,title:e.title,description:e.description,src:m("./"+e.src,!0),projectLinks:e.projectLinks,alt:e.alt})})))};t.default=h},347:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(10),l=n(a),i=o(15),s=n(i),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),g=o(60),y=n(g),T=o(23),w={componentClass:y.default},j={componentClass:"div"},C=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=(0,s.default)(e,["componentClass","className"]),a=(0,T.splitBsProps)(n),i=a[0],r=a[1],u=(0,T.getClassSet)(i);return b.default.createElement(t,(0,l.default)({},r,{className:(0,h.default)(o,u)}))},t}(b.default.Component);C.propTypes=w,C.defaultProps=j,t.default=(0,T.bsClass)("row",C),e.exports=t.default},348:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(10),l=n(a),i=o(15),s=n(i),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),g=o(4),y=n(g),T=o(60),w=n(T),j=o(23),C=o(95),v={componentClass:w.default,xs:y.default.number,sm:y.default.number,md:y.default.number,lg:y.default.number,xsHidden:y.default.bool,smHidden:y.default.bool,mdHidden:y.default.bool,lgHidden:y.default.bool,xsOffset:y.default.number,smOffset:y.default.number,mdOffset:y.default.number,lgOffset:y.default.number,xsPush:y.default.number,smPush:y.default.number,mdPush:y.default.number,lgPush:y.default.number,xsPull:y.default.number,smPull:y.default.number,mdPull:y.default.number,lgPull:y.default.number},E={componentClass:"div"},A=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=(0,s.default)(e,["componentClass","className"]),a=(0,j.splitBsProps)(n),i=a[0],r=a[1],u=[];return C.DEVICE_SIZES.forEach(function(e){function t(t,o){var n=""+e+t,a=r[n];null!=a&&u.push((0,j.prefix)(i,""+e+o+"-"+a)),delete r[n]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var o=e+"Hidden";r[o]&&u.push("hidden-"+e),delete r[o]}),b.default.createElement(t,(0,l.default)({},r,{className:(0,h.default)(o,u)}))},t}(b.default.Component);A.propTypes=v,A.defaultProps=E,t.default=(0,j.bsClass)("col",A),e.exports=t.default},349:function(e,t,o){e.exports={default:o(350),__esModule:!0}},350:function(e,t,o){o(351),e.exports=o(24).Object.values},351:function(e,t,o){var n=o(28),a=o(149)(!1);n(n.S,"Object",{values:function(e){return a(e)}})},352:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(10),l=n(a),i=o(15),s=n(i),r=o(12),u=n(r),d=o(13),f=n(d),c=o(14),p=n(c),m=o(17),h=n(m),k=o(1),b=n(k),g=o(4),y=n(g),T=o(147),w=n(T),j=o(23),C={src:y.default.string,alt:y.default.string,href:y.default.string,onError:y.default.func,onLoad:y.default.func},v=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.src,o=e.alt,n=e.onError,a=e.onLoad,i=e.className,r=e.children,u=(0,s.default)(e,["src","alt","onError","onLoad","className","children"]),d=(0,j.splitBsProps)(u),f=d[0],c=d[1],p=c.href?w.default:"div",m=(0,j.getClassSet)(f);return b.default.createElement(p,(0,l.default)({},c,{className:(0,h.default)(i,m)}),b.default.createElement("img",{src:t,alt:o,onError:n,onLoad:a}),r&&b.default.createElement("div",{className:"caption"},r))},t}(b.default.Component);v.propTypes=C,t.default=(0,j.bsClass)("thumbnail",v),e.exports=t.default},362:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(1),l=n(a),i=o(348),s=n(i),r=o(363),u=n(r),d=o(352),f=n(d),c={GITHUB:"default",PRODUCT:"success",MEDIA:"primary"},p=function(e){var t=e.src,o=e.title,n=e.alt,a=e.description,i=e.projectLinks;return l.default.createElement(s.default,{xs:12,sm:6,md:4},l.default.createElement(f.default,{src:t,alt:""+n},l.default.createElement("h3",null,""+o),l.default.createElement("p",null,""+a),l.default.createElement("p",null,i.map(function(e,t){return l.default.createElement(u.default,{key:t,href:e.linkURL,bsStyle:c[e.linkType],style:{margin:"0 10px 10px 0"}},e.linkName)}))))};t.default=p},363:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=o(349),l=n(a),i=o(15),s=n(i),r=o(10),u=n(r),d=o(12),f=n(d),c=o(13),p=n(c),m=o(14),h=n(m),k=o(17),b=n(k),g=o(1),y=n(g),T=o(4),w=n(T),j=o(60),C=n(j),v=o(23),E=o(95),A=o(147),x=n(A),L={active:w.default.bool,disabled:w.default.bool,block:w.default.bool,onClick:w.default.func,componentClass:C.default,href:w.default.string,type:w.default.oneOf(["button","reset","submit"])},S={active:!1,block:!1,disabled:!1},U=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,e.apply(this,arguments))}return(0,h.default)(t,e),t.prototype.renderAnchor=function(e,t){return y.default.createElement(x.default,(0,u.default)({},e,{className:(0,b.default)(t,e.disabled&&"disabled")}))},t.prototype.renderButton=function(e,t){var o=e.componentClass,n=(0,s.default)(e,["componentClass"]),a=o||"button";return y.default.createElement(a,(0,u.default)({},n,{type:n.type||"button",className:t}))},t.prototype.render=function(){var e,t=this.props,o=t.active,n=t.block,a=t.className,l=(0,s.default)(t,["active","block","className"]),i=(0,v.splitBsProps)(l),r=i[0],d=i[1],f=(0,u.default)({},(0,v.getClassSet)(r),(e={active:o},e[(0,v.prefix)(r,"block")]=n,e)),c=(0,b.default)(a,f);return d.href?this.renderAnchor(d,c):this.renderButton(d,c)},t}(y.default.Component);U.propTypes=L,U.defaultProps=S,t.default=(0,v.bsClass)("btn",(0,v.bsSizes)([E.Size.LARGE,E.Size.SMALL,E.Size.XSMALL],(0,v.bsStyles)([].concat((0,l.default)(E.State),[E.Style.DEFAULT,E.Style.PRIMARY,E.Style.LINK]),E.Style.DEFAULT,U))),e.exports=t.default},364:function(e,t){e.exports={projects:[{title:"Echos of Tikkun",description:"My first major project in college with the Video Game Development Association. This project helped me learn the inner workings on how to make a video game. I used the Unity Game Engine which uses C# primarily.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/technicalvgda/Adagio"},{linkName:"Play Store",linkType:"PRODUCT",linkURL:"https://play.google.com/store/apps/details?id=com.VGDA.EchoesOfTikkun&hl=en"}],src:"image-01.jpg",alt:"The three goddess in Echos of Tikkun"},{title:"Skulls and Asteroids",description:"After Echoes of Tikkun, I wanted to try making a game on my own. During my first Hackathon (BeachHacks), I decided to join with a couple of my peers from VGDA and a couple of people outside of the association. The result was Skulls and Asteroids.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/Skulls-and-Asteroids"},{linkName:"Play Store",linkType:"PRODUCT",linkURL:"https://play.google.com/store/apps/details?id=com.MachinaGames.SkullsandAsteroids&hl=en"}],src:"image-02.jpg",alt:"The gameplay of Skulls and Asteroids"},{title:"History AutoDelete",description:"This is another passion project of mine. An annoyance that I had with Google Maps was that every time I moved the map, it would spawn 3-4 history entries. So after 5 minutes, I might have over 100 history entries. This extension is suppose to stop that from happening. This project introduced me to HTML, CSS, and JavaScript.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/History-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/history-autodelete/bhfakmaiadhflpjloimlagikhodjiefj"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/history-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/History-AutoDelete-for-Chrome.shtml"}],src:"image-03.jpg",alt:"The popup menu of History AutoDelete"},{title:"Cookie AutoDelete",description:"After History AutoDelete, I wanted to port Self Destructing Cookies which I think is an amazing cookie policy for web browsers that compromises between privacy and convenience. This extension will delete all unused cookies on tab close. Unused means that if all google.com tabs are closed then google.com cookies are cleared, automating the cookie process.",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/Cookie-AutoDelete"},{linkName:"Chrome",linkType:"PRODUCT",linkURL:"https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidfldomjliifgaodjagh"},{linkName:"Firefox",linkType:"PRODUCT",linkURL:"https://addons.mozilla.org/firefox/addon/cookie-autodelete"},{linkName:"Softpedia Review",linkType:"MEDIA",linkURL:"http://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/Cookie-AutoDelete.shtml"},{linkName:"Ghacks Review",linkType:"MEDIA",linkURL:"https://www.ghacks.net/2017/05/15/cookie-autodelete-for-firefox-webextension/"}],src:"image-05.jpg",alt:"The popup menu and notifications of Cookie AutoDelete"},{title:"Personal Website",description:"Using a boilerplate as a starting point, I turned it into what you see here today. All this was from scratch using React Components and BootStrap, taking into inspiration of my old website which was a template. The result is a personal website with more modern components (React Framework and BootStrap 4.0) and easier expandability (maybe a blog?).",projectLinks:[{linkName:"GitHub",linkType:"GITHUB",linkURL:"https://github.com/mrdokenny/mrdokenny.github.io"},{linkName:"Original Boilerplate",linkType:"GITHUB",linkURL:"http://spa-github-pages.rafrex.com/"}],src:"websitePic.jpg",alt:"The home page of this website"}]}},365:function(e,t,o){function n(e){return o(a(e))}function a(e){var t=l[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var l={"./default.jpg":366,"./image-01.jpg":367,"./image-02.jpg":368,"./image-03.jpg":369,"./image-04.jpg":370,"./image-05.jpg":371,"./websitePic.jpg":372};n.keys=function(){return Object.keys(l)},n.resolve=a,e.exports=n,n.id=365},366:function(e,t,o){e.exports=o.p+"9df67e747846cbc7c1ea7a6aff3b3486.jpg"},367:function(e,t,o){e.exports=o.p+"7d6d7e76d49ff9bcc0e04f92f2491bb4.jpg"},368:function(e,t,o){e.exports=o.p+"8e994d0f83c446794af4a85f2e4377d6.jpg"},369:function(e,t,o){e.exports=o.p+"6a5c2f5bf9a340c3dd903e85d572e265.jpg"},370:function(e,t,o){e.exports=o.p+"6b8b60aba3cf07a3589a6c8b09fa939c.jpg"},371:function(e,t,o){e.exports=o.p+"662461583f96677ac4f68ef80f7aa9ce.jpg"},372:function(e,t,o){e.exports=o.p+"a7623249ccbfeae02956eb983e21e775.jpg"}});