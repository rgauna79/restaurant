(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,":root {\n   --high-color: #854d27;\n   --medium-color:#dd7230;\n   --low-color: #f4c95d;\n   --bg-color: #e7e393;\n   --text-color: #04030f;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    background-color: var(--bg-color);\n    color: var(--text-color);\n}\n\n/* Header Styles */\n.header-content{\n    background-color: var(--high-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10px;\n}\n\n.btn-tab{\n    display: flex;\n    padding-top: 10px;\n}\n\n.btn {\n    background-color: var(--low-color);\n    cursor: pointer;\n    width: 100px;\n    padding: 5px;\n    border: 1px solid var(--medium-color);\n    \n}\n\n/* Content Styles */\n\n.page-content {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    width: 100%;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://t3.ftcdn.net/jpg/02/38/10/52/360_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg",n.style.width="100%",n.style.maxWidth="600px",t.appendChild(n);const r=document.createElement("p");r.textContent="We serve the best food in town",t.appendChild(r),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),d=n.n(i),s=n(565),l=n.n(s),u=n(216),p=n.n(u),f=n(589),m=n.n(f),v=n(28),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals,(()=>{const n=document.querySelector("#content"),r=document.createElement("div");r.setAttribute("class","header-content"),n.appendChild(r);const o=document.createElement("h1");o.innerHTML="Welcome to my Restaurant",r.appendChild(o);const a=document.createElement("div");a.setAttribute("class","btn-tab"),r.appendChild(a);const c=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");c.setAttribute("id","home-btn"),i.setAttribute("id","menu-btn"),d.setAttribute("id","contact-btn"),c.setAttribute("class","btn"),i.setAttribute("class","btn"),d.setAttribute("class","btn"),c.textContent="Home",i.textContent="Menu",d.textContent="Contact",a.appendChild(c),a.appendChild(i),a.appendChild(d),c.addEventListener("click",(()=>{t(),e()})),i.addEventListener("click",(()=>{t(),createMenuPage()})),d.addEventListener("click",(()=>{t(),createContactPage()}))})(),e()})()})();