/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function(window,document,undefined){
var h=void 0,j=!0,m=null,n=!1;function q(a){return function(){return this[a]}}var aa=this;function ba(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}}aa.Ha=j;function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(m,arguments)}var t=Date.now||function(){return+new Date};function ea(a,b){this.H=a;this.C=b||a;this.J=this.C.document;this.V=h}ea.prototype.createElement=function(a,b,c){a=this.J.createElement(a);if(b)for(var d in b)if(b.hasOwnProperty(d))if("style"==d){var e=a,f=b[d];fa(this)?e.setAttribute("style",f):e.style.cssText=f}else a.setAttribute(d,b[d]);c&&a.appendChild(this.J.createTextNode(c));return a};function u(a,b,c){a=a.J.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}
function v(a,b){return a.createElement("link",{rel:"stylesheet",href:b})}function ga(a,b){return a.createElement("script",{src:b})}function w(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return;c.push(b);a.className=c.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function x(a,b){for(var c=a.className.split(/\s+/),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}
function ha(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return n}function fa(a){if(a.V===h){var b=a.J.createElement("p");b.innerHTML='<a style="top:1px;">w</a>';a.V=/top/.test(b.getElementsByTagName("a")[0].getAttribute("style"))}return a.V}function y(a){var b=a.C.location.protocol;"about:"==b&&(b=a.H.location.protocol);return"https:"==b?"https:":"http:"};function z(a,b,c){this.F=a;this.W=b;this.Ga=c}ba("webfont.BrowserInfo",z);z.prototype.va=q("F");z.prototype.hasWebFontSupport=z.prototype.va;z.prototype.wa=q("W");z.prototype.hasWebKitFallbackBug=z.prototype.wa;z.prototype.xa=q("Ga");z.prototype.hasWebKitMetricsBug=z.prototype.xa;function A(a,b,c,d,e,f,g,k){this.L=a;this.Fa=b;this.Y=c;this.la=d;this.Ea=e;this.Da=f;this.ka=g;this.k=k}ba("webfont.UserAgent",A);A.prototype.getName=q("L");A.prototype.getName=A.prototype.getName;A.prototype.ua=q("Fa");A.prototype.getVersion=A.prototype.ua;A.prototype.qa=q("Y");A.prototype.getEngine=A.prototype.qa;A.prototype.ra=q("la");A.prototype.getEngineVersion=A.prototype.ra;A.prototype.sa=q("Ea");A.prototype.getPlatform=A.prototype.sa;A.prototype.ta=q("Da");
A.prototype.getPlatformVersion=A.prototype.ta;A.prototype.pa=q("ka");A.prototype.getDocumentMode=A.prototype.pa;A.prototype.oa=q("k");A.prototype.getBrowserInfo=A.prototype.oa;function B(a,b){this.a=a;this.q=b}var ia=new A("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",h,new z(n,n,n));
B.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")){a=C(this);var b=D(this),c=E(this.a,/(MSIE [\d\w\.]+)/,1);if(""!=c){var d=c.split(" "),c=d[0],d=d[1],e=F(d),f=F(b);a=new A(c,d,c,d,a,b,G(this.q),new z("Windows"==a&&6<=e.e||"Windows Phone"==a&&8<=f.e,n,n))}else a=new A("MSIE","Unknown","MSIE","Unknown",a,b,G(this.q),new z(n,n,n))}else if(-1!=this.a.indexOf("Opera"))a=ja(this);else if(/AppleWeb(K|k)it/.test(this.a)){a=C(this);var b=D(this),c=E(this.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,
1),g=n;""==c&&(c="Unknown");d=F(c);g=F(b);e="Unknown";-1!=this.a.indexOf("Chrome")||-1!=this.a.indexOf("CrMo")||-1!=this.a.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(this.a)?e="Silk":"BlackBerry"==a||"Android"==a?e="BuiltinBrowser":-1!=this.a.indexOf("Safari")?e="Safari":-1!=this.a.indexOf("AdobeAIR")&&(e="AdobeAIR");f="Unknown";"BuiltinBrowser"==e?f="Unknown":/Silk\/\d/.test(this.a)?f=E(this.a,/Silk\/([\d\._]+)/,1):-1!=this.a.indexOf("Version/")?f=E(this.a,/Version\/([\d\.\w]+)/,1):"Chrome"==e?
f=E(this.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==e&&(f=E(this.a,/AdobeAIR\/([\d\.]+)/,1));"AdobeAIR"==e?(g=F(f),g=2<g.e||2==g.e&&5<=g.u):g="BlackBerry"==a?10<=g.e:"Android"==a?2<g.e||2==g.e&&1<g.u:526<=d.e||525<=d.e&&13<=d.u;a=new A(e,f,"AppleWebKit",c,a,b,G(this.q),new z(g,536>d.e||536==d.e&&11>d.u,"iPhone"==a||"iPad"==a||"iPod"==a||"Macintosh"==a))}else-1!=this.a.indexOf("Gecko")?(b=a="Unknown",c=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",d=E(this.a,/Firefox\/([\d\w\.]+)/,1),""!=d&&
(c=F(d),b=d,c=3<=c.e&&5<=c.u)):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),d=E(this.a,/rv:([^\)]+)/,1),""==d?d="Unknown":c||(c=F(d),c=1<c.e||1==c.e&&9<c.u||1==c.e&&9==c.u&&2<=c.Ca||d.match(/1\.9\.1b[123]/)!=m||d.match(/1\.9\.1\.[\d\.]+/)!=m),a=new A(a,b,"Gecko",d,C(this),D(this),G(this.q),new z(c,n,n))):a=ia;return a};
function C(a){var b=E(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=E(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function D(a){var b=E(a.a,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);return b||(b=E(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=E(a.a,/(iPhone )?OS ([\d_]+)/,2))||(b=E(a.a,/Linux ([i\d]+)/,1))?b:(a=E(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function ja(a){var b="Unknown",c="Unknown",d=E(a.a,/(Presto\/[\d\w\.]+)/,1);""!=d?(c=d.split("/"),b=c[0],c=c[1]):(-1!=a.a.indexOf("Gecko")&&(b="Gecko"),d=E(a.a,/rv:([^\)]+)/,1),""!=d&&(c=d));if(-1!=a.a.indexOf("Opera Mini/"))return d=E(a.a,/Opera Mini\/([\d\.]+)/,1),""==d&&(d="Unknown"),new A("OperaMini",d,b,c,C(a),D(a),G(a.q),new z(n,n,n));if(-1!=a.a.indexOf("Version/")){var e=E(a.a,/Version\/([\d\.]+)/,1);if(""!=e)return d=F(e),new A("Opera",e,b,c,C(a),D(a),G(a.q),new z(10<=d.e,n,n))}e=E(a.a,/Opera[\/ ]([\d\.]+)/,
1);return""!=e?(d=F(e),new A("Opera",e,b,c,C(a),D(a),G(a.q),new z(10<=d.e,n,n))):new A("Opera","Unknown",b,c,C(a),D(a),G(a.q),new z(n,n,n))}function F(a){a=/([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+)?)?)?/.exec(a);var b={};a&&(b.e=parseInt(a[1]||-1,10),b.u=parseInt(a[2]||-1,10),b.Ca=parseInt(a[3]||-1,10));return b}function E(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function G(a){if(a.documentMode)return a.documentMode};function ka(a){this.za=a||"-"}ka.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.za)};function H(a,b){this.L=a;this.X=4;this.M="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.M=c[1],this.X=parseInt(c[2],10))}H.prototype.getName=q("L");function I(a){return a.M+a.X}function la(a){var b=4,c="n",d=m;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ma(a,b,c){this.c=a;this.h=b;this.P=c;this.j="wf";this.g=new ka("-")}function na(a){w(a.h,a.g.f(a.j,"loading"));J(a,"loading")}function K(a){x(a.h,a.g.f(a.j,"loading"));ha(a.h,a.g.f(a.j,"active"))||w(a.h,a.g.f(a.j,"inactive"));J(a,"inactive")}function J(a,b,c){if(a.P[b])if(c)a.P[b](c.getName(),I(c));else a.P[b]()};function L(a,b){this.c=a;this.B=b;this.m=this.c.createElement("span",{"aria-hidden":"true"},this.B)}
function M(a,b){var c=a.m,d;d=[];for(var e=b.L.split(/,\s*/),f=0;f<e.length;f++){var g=e[f].replace(/['"]/g,"");-1==g.indexOf(" ")?d.push(g):d.push("'"+g+"'")}d=d.join(",");e="normal";f=b.X+"00";"o"===b.M?e="oblique":"i"===b.M&&(e="italic");d="position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+d+";"+("font-style:"+e+";font-weight:"+f+";");fa(a.c)?c.setAttribute("style",d):c.style.cssText=
d}function N(a){u(a.c,"body",a.m)}L.prototype.remove=function(){var a=this.m;a.parentNode&&a.parentNode.removeChild(a)};function O(a,b,c,d,e,f,g,k){this.I=a;this.aa=b;this.c=c;this.o=d;this.B=k||"BESbswy";this.k=e;this.t={};this.N=f||5E3;this.da=g||m;this.A=this.z=m;a=new L(this.c,this.B);N(a);for(var p in P)P.hasOwnProperty(p)&&(M(a,new H(P[p],I(this.o))),this.t[P[p]]=a.m.offsetWidth);a.remove()}var P={Ka:"serif",Ja:"sans-serif",Ia:"monospace"};
O.prototype.start=function(){this.z=new L(this.c,this.B);N(this.z);this.A=new L(this.c,this.B);N(this.A);this.ga=t();M(this.z,new H(this.o.getName()+",serif",I(this.o)));M(this.A,new H(this.o.getName()+",sans-serif",I(this.o)));this.Q()};function oa(a,b,c){for(var d in P)if(P.hasOwnProperty(d)&&b===a.t[P[d]]&&c===a.t[P[d]])return j;return n}
O.prototype.Q=function(){var a=this.z.m.offsetWidth,b=this.A.m.offsetWidth;a===this.t.serif&&b===this.t["sans-serif"]||this.k.W&&oa(this,a,b)?t()-this.ga>=this.N?this.k.W&&oa(this,a,b)&&(this.da===m||this.da.hasOwnProperty(this.o.getName()))?Q(this,this.I):Q(this,this.aa):pa(this):Q(this,this.I)};function pa(a){setTimeout(r(function(){this.Q()},a),25)}function Q(a,b){a.z.remove();a.A.remove();b(a.o)};function R(a,b,c,d){this.c=b;this.w=c;this.R=0;this.ha=this.ca=n;this.N=d;this.k=a.k}R.prototype.watch=function(a,b,c,d){var e=a.length;if(0===e&&d)K(this.w);else{this.R+=e;d&&(this.ca=d);for(d=0;d<e;d++){var f=a[d],g=b[f.getName()],k=this.w,p=f;w(k.h,k.g.f(k.j,p.getName(),I(p).toString(),"loading"));J(k,"fontloading",p);k=r(this.ma,this);p=r(this.na,this);(new c(k,p,this.c,f,this.k,this.N,m,g)).start()}}};
R.prototype.ma=function(a){var b=this.w;x(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"loading"));x(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"inactive"));w(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"active"));J(b,"fontactive",a);this.ha=j;qa(this)};R.prototype.na=function(a){var b=this.w;x(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"loading"));ha(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"active"))||w(b.h,b.g.f(b.j,a.getName(),I(a).toString(),"inactive"));J(b,"fontinactive",a);qa(this)};
function qa(a){0==--a.R&&a.ca&&(a.ha?(a=a.w,x(a.h,a.g.f(a.j,"loading")),x(a.h,a.g.f(a.j,"inactive")),w(a.h,a.g.f(a.j,"active")),J(a,"active")):K(a.w))};function S(a,b,c){this.H=a;this.Z=b;this.a=c;this.S=this.T=0}function T(a,b){U.Z.ea[a]=b}S.prototype.load=function(a){var b=a.context||this.H;this.c=new ea(this.H,b);b=new ma(this.c,b.document.documentElement,a);if(this.a.k.F){var c=this.Z,d=this.c,e=[],f;for(f in a)if(a.hasOwnProperty(f)){var g=c.ea[f];g&&e.push(g(a[f],d))}a=a.timeout;this.S=this.T=e.length;a=new R(this.a,this.c,b,a);f=0;for(c=e.length;f<c;f++)d=e[f],d.D(this.a,r(this.ya,this,d,b,a))}else K(b)};
S.prototype.ya=function(a,b,c,d){var e=a.$?a.$():O,f=this;d?a.load(function(a,d){var p=0==--f.T;p&&na(b);setTimeout(function(){c.watch(a,d||{},e,p)},0)}):(a=0==--this.T,this.S--,a&&(0==this.S?K(b):na(b)),c.watch([],{},e,a))};var sa=window,ta=(new B(navigator.userAgent,document)).parse(),U=sa.WebFont=new S(window,new function(){this.ea={}},ta);U.load=U.load;function V(a,b,c,d,e,f,g,k){O.call(this,a,b,c,d,e,f,g,k);a=["Times New Roman","Arial","Times","Sans","Serif"];b=I(this.o);c=a.length;d={};e=new L(this.c,this.B);N(e);M(e,new H(a[0],b));d[e.m.offsetWidth]=j;for(f=1;f<c;f++)g=a[f],M(e,new H(g,b)),d[e.m.offsetWidth]=j,"4"!=b.toString().charAt(1)&&(M(e,new H(g,b.charAt(0)+"4")),d[e.m.offsetWidth]=j);e.remove();this.v=d;this.ja=n;this.Aa=this.t.serif;this.Ba=this.t["sans-serif"]}function ua(){}ua.prototype=O.prototype;V.La=O.prototype;V.prototype=new ua;
var va={Arimo:j,Cousine:j,Tinos:j};V.prototype.Q=function(){var a=this.z.m.offsetWidth,b=this.A.m.offsetWidth;!this.ja&&(a==b&&this.v[a])&&(this.v={},this.ja=this.v[a]=j);(this.Aa!=a||this.Ba!=b)&&!this.v[a]&&!this.v[b]?Q(this,this.I):t()-this.ga>=this.N?this.v[a]&&this.v[b]&&va[this.o.getName()]?Q(this,this.I):Q(this,this.aa):pa(this)};function wa(a,b,c){this.O=a?a:b+xa;this.s=[];this.U=[];this.ia=c||""}var xa="//fonts.googleapis.com/css";wa.prototype.f=function(){if(0==this.s.length)throw Error("No fonts to load !");if(-1!=this.O.indexOf("kit="))return this.O;for(var a=this.s.length,b=[],c=0;c<a;c++)b.push(this.s[c].replace(/ /g,"+"));a=this.O+"?family="+b.join("%7C");0<this.U.length&&(a+="&subset="+this.U.join(","));0<this.ia.length&&(a+="&text="+encodeURIComponent(this.ia));return a};function ya(a){this.s=a;this.fa=[];this.K={}}
var za={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},Ca=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
ya.prototype.parse=function(){for(var a=this.s.length,b=0;b<a;b++){var c=this.s[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f;var g=c[1];f=[];if(g)for(var g=g.split(","),k=g.length,p=0;p<k;p++){var l;l=g[p];if(l.match(/^[\w]+$/)){l=Ca.exec(l.toLowerCase());var s=h;if(l==m)s="";else{s=h;s=l[1];if(s==m||""==s)s="4";else var ra=Aa[s],s=ra?ra:isNaN(s)?"4":s.substr(0,1);s=[l[2]==m||""==l[2]?"n":Ba[l[2]],s].join("")}l=s}else l="";l&&f.push(l)}0<f.length&&(e=f);3==c.length&&(c=c[2],
f=[],c=!c?f:c.split(","),0<c.length&&(c=za[c[0]])&&(this.K[d]=c))}this.K[d]||(c=za[d])&&(this.K[d]=c);for(c=0;c<e.length;c+=1)this.fa.push(new H(d,e[c]))}};function X(a,b,c){this.a=a;this.c=b;this.d=c}X.prototype.D=function(a,b){b(a.k.F)};X.prototype.$=function(){return"AppleWebKit"==this.a.Y?V:O};X.prototype.load=function(a){if("MSIE"==this.a.getName()&&this.d.blocking!=j){var b=r(this.ba,this,a),c=function(){document.body?b():setTimeout(c,0)};c()}else this.ba(a)};
X.prototype.ba=function(a){for(var b=this.c,c=new wa(this.d.api,y(b),this.d.text),d=this.d.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&c.U.push(g.pop());var k="";2==g.length&&""!=g[1]&&(k=":");c.s.push(g.join(k))}d=new ya(d);d.parse();u(b,"head",v(b,c.f()));a(d.fa,d.K)};T("google",function(a,b){var c=(new B(navigator.userAgent,document)).parse();return new X(c,b,a)});function Da(a,b){this.c=a;this.d=b}var Ea={regular:"n4",bold:"n7",italic:"i4",bolditalic:"i7",r:"n4",b:"n7",i:"i4",bi:"i7"};Da.prototype.D=function(a,b){return b(a.k.F)};Da.prototype.load=function(a){u(this.c,"head",v(this.c,y(this.c)+"//webfonts.fontslive.com/css/"+this.d.key+".css"));for(var b=this.d.families,c=[],d=0,e=b.length;d<e;d++)c.push.apply(c,Fa(b[d]));a(c)};
function Fa(a){var b=a.split(":");a=b[0];if(b[1]){for(var c=b[1].split(","),b=[],d=0,e=c.length;d<e;d++){var f=c[d];if(f){var g=Ea[f];b.push(g?g:f)}}c=[];for(d=0;d<b.length;d+=1)c.push(new H(a,b[d]));return c}return[new H(a)]}T("ascender",function(a,b){return new Da(b,a)});function Y(a,b,c){this.a=a;this.c=b;this.d=c;this.p=[]}
Y.prototype.D=function(a,b){var c=this,d=c.d.projectId,e=c.d.version;if(d){var f=c.c.createElement("script");f.id="__MonotypeAPIScript__"+d;var g=this.c.C,k=n;f.onload=f.onreadystatechange=function(){if(!k&&(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)){k=j;if(g["__mti_fntLst"+d]){var e=g["__mti_fntLst"+d]();if(e)for(var l=0;l<e.length;l++)c.p.push(new H(e[l].fontfamily))}b(a.k.F);f.onload=f.onreadystatechange=m}};f.src=c.G(d,e);u(this.c,"head",f)}else b(j)};
Y.prototype.G=function(a,b){var c=y(this.c),d=(this.d.api||"fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};Y.prototype.load=function(a){a(this.p)};T("monotype",function(a,b){var c=(new B(navigator.userAgent,document)).parse();return new Y(c,b,a)});function Z(a,b){this.c=a;this.d=b;this.p=[]}Z.prototype.G=function(a){var b=y(this.c);return(this.d.api||b+"//use.typekit.net")+"/"+a+".js"};
Z.prototype.D=function(a,b){var c=this.d.id,d=this.d,e=this.c.C,f=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var e=0;e<c.length;e+=1){var g=d[c[e]];if(g)for(var W=0;W<g.length;W+=1)f.p.push(new H(c[e],g[W]));else f.p.push(new H(c[e]))}b(a)})},c=ga(this.c,this.G(c)),u(this.c,"head",c)):b(j)};Z.prototype.load=function(a){a(this.p)};T("typekit",function(a,b){return new Z(b,a)});function Ga(a,b){this.c=a;this.d=b}Ga.prototype.load=function(a){var b,c,d=this.d.urls||[],e=this.d.families||[];b=0;for(c=d.length;b<c;b++)u(this.c,"head",v(this.c,d[b]));d=[];b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var g=f[1].split(","),k=0;k<g.length;k+=1)d.push(new H(f[0],g[k]));else d.push(new H(f[0]))}a(d)};Ga.prototype.D=function(a,b){return b(a.k.F)};T("custom",function(a,b){return new Ga(b,a)});function $(a,b){this.c=a;this.d=b;this.p=[]}$.prototype.G=function(a){return y(this.c)+(this.d.api||"//f.fontdeck.com/s/css/js/")+(this.c.C.location.hostname||this.c.H.location.hostname)+"/"+a+".js"};
$.prototype.D=function(a,b){var c=this.d.id,d=this.c.C,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,p=c.fonts.length;d<p;++d){var l=c.fonts[d];e.p.push(new H(l.name,la("font-weight:"+l.weight+";font-style:"+l.style)))}b(a)},c=ga(this.c,this.G(c)),u(this.c,"head",c)):b(j)};$.prototype.load=function(a){a(this.p)};T("fontdeck",function(a,b){return new $(b,a)});window.WebFontConfig&&U.load(window.WebFontConfig);
})(this,document);