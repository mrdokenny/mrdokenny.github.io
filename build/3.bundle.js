webpackJsonp([3],{345:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=u(1),s=l(n),a=u(148),d=l(a),f=u(347),o=l(f),r=u(348),m=l(r),c=function(){return s.default.createElement(d.default,null,s.default.createElement(o.default,null,s.default.createElement(m.default,{xs:12,sm:12},s.default.createElement("h2",null,"Get in Touch"),s.default.createElement("h3",null,"I look forward to discussing business with you."),s.default.createElement("h3",null,"contact@kennydo.com"))))};t.default=c},347:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=u(10),s=l(n),a=u(15),d=l(a),f=u(12),o=l(f),r=u(13),m=l(r),c=u(14),p=l(c),i=u(17),b=l(i),h=u(1),P=l(h),C=u(60),_=l(C),E=u(23),v={componentClass:_.default},x={componentClass:"div"},y=function(e){function t(){return(0,o.default)(this,t),(0,m.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,u=e.className,l=(0,d.default)(e,["componentClass","className"]),n=(0,E.splitBsProps)(l),a=n[0],f=n[1],o=(0,E.getClassSet)(a);return P.default.createElement(t,(0,s.default)({},f,{className:(0,b.default)(u,o)}))},t}(P.default.Component);y.propTypes=v,y.defaultProps=x,t.default=(0,E.bsClass)("row",y),e.exports=t.default},348:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=u(10),s=l(n),a=u(15),d=l(a),f=u(12),o=l(f),r=u(13),m=l(r),c=u(14),p=l(c),i=u(17),b=l(i),h=u(1),P=l(h),C=u(4),_=l(C),E=u(60),v=l(E),x=u(23),y=u(95),g={componentClass:v.default,xs:_.default.number,sm:_.default.number,md:_.default.number,lg:_.default.number,xsHidden:_.default.bool,smHidden:_.default.bool,mdHidden:_.default.bool,lgHidden:_.default.bool,xsOffset:_.default.number,smOffset:_.default.number,mdOffset:_.default.number,lgOffset:_.default.number,xsPush:_.default.number,smPush:_.default.number,mdPush:_.default.number,lgPush:_.default.number,xsPull:_.default.number,smPull:_.default.number,mdPull:_.default.number,lgPull:_.default.number},M={componentClass:"div"},N=function(e){function t(){return(0,o.default)(this,t),(0,m.default)(this,e.apply(this,arguments))}return(0,p.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,u=e.className,l=(0,d.default)(e,["componentClass","className"]),n=(0,x.splitBsProps)(l),a=n[0],f=n[1],o=[];return y.DEVICE_SIZES.forEach(function(e){function t(t,u){var l=""+e+t,n=f[l];null!=n&&o.push((0,x.prefix)(a,""+e+u+"-"+n)),delete f[l]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var u=e+"Hidden";f[u]&&o.push("hidden-"+e),delete f[u]}),P.default.createElement(t,(0,s.default)({},f,{className:(0,b.default)(u,o)}))},t}(P.default.Component);N.propTypes=g,N.defaultProps=M,t.default=(0,x.bsClass)("col",N),e.exports=t.default}});