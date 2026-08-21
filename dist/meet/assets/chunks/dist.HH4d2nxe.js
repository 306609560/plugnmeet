import{o as e}from"./rolldown-runtime.CMxvf4Kt.js";import{lr as t}from"./excalidraw.BioUBqwA.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./react.Cpwhe_Ir.js";import{A as f,M as p,N as m,P as h,j as ee}from"./vendor.D8Ma-c7L.js";var g=e(t(),1),te=Object.create,ne=Object.defineProperty,re=Object.getOwnPropertyDescriptor,ie=Object.getOwnPropertyNames,ae=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,se=function(e,t){return function(){return e&&(t=e(e=0)),t}},_=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},ce=function(e,t,n,r){if(t&&typeof t==`object`||typeof t==`function`)for(var i=ie(t),a=0,o=i.length,s;a<o;a++)s=i[a],!oe.call(e,s)&&s!==n&&ne(e,s,{get:function(e){return t[e]}.bind(null,s),enumerable:!(r=re(t,s))||r.enumerable});return e},v=function(e,t,n){return n=e==null?{}:te(ae(e)),ce(t||!e||!e.__esModule?ne(n,`default`,{value:e,enumerable:!0}):n,e)},y=_(function(e,t){t.exports=typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{}});function le(e,t){return t!=null&&typeof Symbol<`u`&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):le(e,t)}var ue=se(function(){ue()});function de(e){"@swc/helpers - typeof";return e&&typeof Symbol<`u`&&e.constructor===Symbol?`symbol`:typeof e}var fe=se(function(){}),pe=_(function(e,t){var n=Array.prototype.slice;t.exports=r;function r(e,t){for((`length`in e)||(e=[e]),e=n.call(e);e.length;){var r=e.shift(),i=t(r);if(i)return i;r.childNodes&&r.childNodes.length&&(e=n.call(r.childNodes).concat(e))}}}),me=_(function(e,t){ue(),t.exports=n;function n(e,t){if(!le(this,n))return new n(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}n.prototype.nodeType=8,n.prototype.nodeName=`#comment`,n.prototype.toString=function(){return`[object Comment]`}}),he=_(function(e,t){ue(),t.exports=n;function n(e,t){if(!le(this,n))return new n(e);this.data=e||``,this.length=this.data.length,this.ownerDocument=t||null}n.prototype.type=`DOMTextNode`,n.prototype.nodeType=3,n.prototype.nodeName=`#text`,n.prototype.toString=function(){return this.data},n.prototype.replaceData=function(e,t,n){var r=this.data,i=r.substring(0,e),a=r.substring(e+t,r.length);this.data=i+n+a,this.length=this.data.length}}),ge=_(function(e,t){t.exports=n;function n(e){var t=this,n=e.type;e.target||=t,t.listeners||={};var r=t.listeners[n];if(r)return r.forEach(function(n){e.currentTarget=t,typeof n==`function`?n(e):n.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),_e=_(function(e,t){t.exports=n;function n(e,t){var n=this;n.listeners||={},n.listeners[e]||(n.listeners[e]=[]),n.listeners[e].indexOf(t)===-1&&n.listeners[e].push(t)}}),ve=_(function(e,t){t.exports=n;function n(e,t){var n=this;if(n.listeners&&n.listeners[e]){var r=n.listeners[e],i=r.indexOf(t);i!==-1&&r.splice(i,1)}}}),ye=_(function(e,t){fe(),t.exports=r;var n=[`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`keygen`,`link`,`menuitem`,`meta`,`param`,`source`,`track`,`wbr`];function r(e){switch(e.nodeType){case 3:return u(e.data);case 8:return`<!--`+e.data+`-->`;default:return i(e)}}function i(e){var t=[],i=e.tagName;return e.namespaceURI===`http://www.w3.org/1999/xhtml`&&(i=i.toLowerCase()),t.push(`<`+i+l(e)+s(e)),n.indexOf(i)>-1?t.push(` />`):(t.push(`>`),e.childNodes.length?t.push.apply(t,e.childNodes.map(r)):e.textContent||e.innerText?t.push(u(e.textContent||e.innerText)):e.innerHTML&&t.push(e.innerHTML),t.push(`</`+i+`>`)),t.join(``)}function a(e,t){var n=de(e[t]);return t===`style`&&Object.keys(e.style).length>0?!0:e.hasOwnProperty(t)&&(n===`string`||n===`boolean`||n===`number`)&&t!==`nodeName`&&t!==`className`&&t!==`tagName`&&t!==`textContent`&&t!==`innerText`&&t!==`namespaceURI`&&t!==`innerHTML`}function o(e){if(typeof e==`string`)return e;var t=``;return Object.keys(e).forEach(function(n){var r=e[n];n=n.replace(/[A-Z]/g,function(e){return`-`+e.toLowerCase()}),t+=n+`:`+r+`;`}),t}function s(e){var t=e.dataset,n=[];for(var r in t)n.push({name:`data-`+r,value:t[r]});return n.length?c(n):``}function c(e){var t=[];return e.forEach(function(e){var n=e.name,r=e.value;n===`style`&&(r=o(r)),t.push(n+`="`+d(r)+`"`)}),t.length?` `+t.join(` `):``}function l(e){var t=[];for(var n in e)a(e,n)&&t.push({name:n,value:e[n]});for(var r in e._attributes)for(var i in e._attributes[r]){var o=e._attributes[r][i],s=(o.prefix?o.prefix+`:`:``)+i;t.push({name:s,value:o.value})}return e.className&&t.push({name:`class`,value:e.className}),t.length?c(t):``}function u(e){var t=``;return typeof e==`string`?t=e:e&&(t=e.toString()),t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function d(e){return u(e).replace(/"/g,`&quot;`)}}),be=_(function(e,t){ue();var n=pe(),r=ge(),i=_e(),a=ve(),o=ye(),s=`http://www.w3.org/1999/xhtml`;t.exports=c;function c(e,t,n){if(!le(this,c))return new c(e);var r=n===void 0?s:n||null;this.tagName=r===s?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className=``,this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=r,this._attributes={},this.tagName===`INPUT`&&(this.type=`text`)}c.prototype.type=`DOMElement`,c.prototype.nodeType=1,c.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},c.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var n=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[n]=e,e.parentNode=this,t},c.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},c.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var n=t==null?-1:this.childNodes.indexOf(t);return n>-1?this.childNodes.splice(n,0,e):this.childNodes.push(e),e.parentNode=this,e},c.prototype.setAttributeNS=function(e,t,n){var r=null,i=t,a=t.indexOf(`:`);if(a>-1&&(r=t.substr(0,a),i=t.substr(a+1)),this.tagName===`INPUT`&&t===`type`)this.type=n;else{var o=this._attributes[e]||(this._attributes[e]={});o[i]={value:n,prefix:r}}},c.prototype.getAttributeNS=function(e,t){var n=this._attributes[e],r=n&&n[t]&&n[t].value;return this.tagName===`INPUT`&&t===`type`?this.type:typeof r==`string`?r:null},c.prototype.removeAttributeNS=function(e,t){var n=this._attributes[e];n&&delete n[t]},c.prototype.hasAttributeNS=function(e,t){var n=this._attributes[e];return!!n&&t in n},c.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},c.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},c.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},c.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},c.prototype.removeEventListener=a,c.prototype.addEventListener=i,c.prototype.dispatchEvent=r,c.prototype.focus=function(){},c.prototype.toString=function(){return o(this)},c.prototype.getElementsByClassName=function(e){var t=e.split(` `),r=[];return n(this,function(e){if(e.nodeType===1){var n=(e.className||``).split(` `);t.every(function(e){return n.indexOf(e)!==-1})&&r.push(e)}}),r},c.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return n(this.childNodes,function(n){n.nodeType===1&&(e===`*`||n.tagName.toLowerCase()===e)&&t.push(n)}),t},c.prototype.contains=function(e){return n(this,function(t){return e===t})||!1}}),xe=_(function(e,t){ue();var n=be();t.exports=r;function r(e){if(!le(this,r))return new r;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}r.prototype.type=`DocumentFragment`,r.prototype.nodeType=11,r.prototype.nodeName=`#document-fragment`,r.prototype.appendChild=n.prototype.appendChild,r.prototype.replaceChild=n.prototype.replaceChild,r.prototype.removeChild=n.prototype.removeChild,r.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join(``)}}),Se=_(function(e,t){t.exports=n;function n(e){}n.prototype.initEvent=function(e,t,n){this.type=e,this.bubbles=t,this.cancelable=n},n.prototype.preventDefault=function(){}}),Ce=_(function(e,t){ue();var n=pe(),r=me(),i=he(),a=be(),o=xe(),s=Se(),c=ge(),l=_e(),u=ve();t.exports=d;function d(){if(!le(this,d))return new d;this.head=this.createElement(`head`),this.body=this.createElement(`body`),this.documentElement=this.createElement(`html`),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var f=d.prototype;f.createTextNode=function(e){return new i(e,this)},f.createElementNS=function(e,t){var n=e===null?null:String(e);return new a(t,this,n)},f.createElement=function(e){return new a(e,this)},f.createDocumentFragment=function(){return new o(this)},f.createEvent=function(e){return new s(e)},f.createComment=function(e){return new r(e,this)},f.getElementById=function(e){return e=String(e),n(this.childNodes,function(t){if(String(t.id)===e)return t})||null},f.getElementsByClassName=a.prototype.getElementsByClassName,f.getElementsByTagName=a.prototype.getElementsByTagName,f.contains=a.prototype.contains,f.removeEventListener=u,f.addEventListener=l,f.dispatchEvent=c}),we=_(function(e,t){t.exports=new(Ce())}),Te=_(function(e,t){var n=typeof global<`u`?global:typeof window<`u`?window:{},r=we(),i;typeof document<`u`?i=document:(i=n[`__GLOBAL_DOCUMENT_CACHE@4`],i||=n[`__GLOBAL_DOCUMENT_CACHE@4`]=r),t.exports=i});function Ee(e){if(Array.isArray(e))return e}function De(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(e){a=!0,s=e}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Oe(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ae(e,t){if(e){if(typeof e==`string`)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(n);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(e,t)}}function je(e,t){return Ee(e)||De(e,t)||Ae(e,t)||Oe()}var Me=v(y()),Ne=v(y()),Pe=v(y()),b={now:function(){var e=Pe.default.performance,t=e&&e.timing,n=t&&t.navigationStart,r=typeof n==`number`&&typeof e.now==`function`?n+e.now():Date.now();return Math.round(r)}},Fe=function(){var e,t;if(typeof Ne.default.crypto?.getRandomValues==`function`){t=new Uint8Array(32),Ne.default.crypto.getRandomValues(t);for(var n=0;n<32;n++)t[n]=t[n]%16}else{t=[];for(var r=0;r<32;r++)t[r]=Math.random()*16|0}var i=0;e=`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g,function(e){var n=e===`x`?t[i]:t[i]&3|8;return i++,n.toString(16)});var a=b.now()?.toString(16).substring(3);return a?e.substring(0,28)+a:e},Ie=function(){return(`000000`+(Math.random()*36**6<<0).toString(36)).slice(-6)},Le=function(e){if(e&&e.nodeName!==void 0)return e.muxId||=Ie(),e.muxId;var t;try{t=document.querySelector(e)}catch{}return t&&!t.muxId&&(t.muxId=e),t?.muxId||e},Re=function(e){var t;e&&e.nodeName!==void 0?(t=e,e=Le(t)):t=document.querySelector(e);var n=t&&t.nodeName?t.nodeName.toLowerCase():``;return[t,e,n]};function ze(e){if(Array.isArray(e))return ke(e)}function Be(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ve(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(e){return ze(e)||Be(e)||Ae(e)||Ve()}var He={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,n,r,i,a,o,s=e?[console,e]:[console],c=(n=console.trace).bind.apply(n,x(s)),l=(r=console.info).bind.apply(r,x(s)),u=(i=console.debug).bind.apply(i,x(s)),d=(a=console.warn).bind.apply(a,x(s)),f=(o=console.error).bind.apply(o,x(s)),p=t;return{trace:function(){var e=[...arguments];if(!(p>He.TRACE))return c.apply(void 0,x(e))},debug:function(){var e=[...arguments];if(!(p>He.DEBUG))return u.apply(void 0,x(e))},info:function(){var e=[...arguments];if(!(p>He.INFO))return l.apply(void 0,x(e))},warn:function(){var e=[...arguments];if(!(p>He.WARN))return d.apply(void 0,x(e))},error:function(){var e=[...arguments];if(!(p>He.ERROR))return f.apply(void 0,x(e))},get level(){return p},set level(e){e!==this.level&&(p=e??t)}}}(`[mux]`),Ue=v(y());function We(){return(Ue.default.doNotTrack||Ue.default.navigator&&Ue.default.navigator.doNotTrack)===`1`}function C(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}ue();function w(e,t){if(!le(e,t))throw TypeError(`Cannot call a class as a function`)}function Ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return t&&Ge(e.prototype,t),n&&Ge(e,n),e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ke(e){return Ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Ke(e)}function qe(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=Ke(e),e!==null););return e}function Je(e,t,n){return Je=typeof Reflect<`u`&&Reflect.get?Reflect.get:function(e,t,n){var r=qe(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}},Je(e,t,n||e)}function Ye(e,t){return Ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ye(e,t)}function Xe(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ye(e,t)}function Ze(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qe(e,t){if(e==null)return{};var n=Ze(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $e(){if(typeof Reflect>`u`||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy==`function`)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}fe();function et(e,t){return t&&(de(t)===`object`||typeof t==`function`)?t:C(e)}function tt(e){var t=$e();return function(){var n=Ke(e),r;if(t){var i=Ke(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return et(this,r)}}var D=function(e){return nt(e)[0]},nt=function(e){if(typeof e!=`string`||e===``)return[`localhost`];var t=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4],n;return t&&(n=(t.match(/[^\.]+\.[^\.]+$/)||[])[0]),[t,n]},rt=v(y()),it={exists:function(){var e=rt.default.performance;return(e&&e.timing)!==void 0},domContentLoadedEventEnd:function(){var e=rt.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=rt.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function O(e,t,n){n=n===void 0?1:n,e[t]=e[t]||0,e[t]+=n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t],r=Object.keys(n);typeof Object.getOwnPropertySymbols==`function`&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}function ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function st(e,t){return t??={},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ot(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var ct=[`x-cdn`,`content-type`],lt=[`x-request-id`,`cf-ray`,`x-amz-cf-id`,`x-akamai-request-id`],ut=ct.concat(lt);function dt(e){e||=``;var t={};return e.trim().split(/[\r\n]+/).forEach(function(e){if(e){var n=e.split(`: `),r=n.shift();r&&(ut.indexOf(r.toLowerCase())>=0||r.toLowerCase().indexOf(`x-litix-`)===0)&&(t[r]=n.join(`: `))}}),t}function ft(e){if(e){var t=lt.find(function(t){return e[t]!==void 0});return t?e[t]:void 0}}var pt=function(e){var t={};for(var n in e){var r=e[n];if(r[`DATA-ID`].search(`io.litix.data.`)!==-1){var i=r[`DATA-ID`].replace(`io.litix.data.`,``);t[i]=r.VALUE}}return t},mt=function(e){if(!e)return{};var t=it.navigationStart(),n=e.loading,r=n?n.start:e.trequest,i=n?n.first:e.tfirst,a=n?n.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+r),responseStart:Math.round(t+i),responseEnd:Math.round(t+a)}},ht=function(e){if(!(!e||typeof e.getAllResponseHeaders!=`function`))return dt(e.getAllResponseHeaders())},gt=function(e,t,n){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var r=arguments.length>4?arguments[4]:void 0,i=e.log,a=e.utils.secondsToMs,o=function(e){var t=parseInt(r.version),n;return t===1&&e.programDateTime!==null&&(n=e.programDateTime),t===0&&e.pdt!==null&&(n=e.pdt),n};if(!it.exists()){i.warn(`performance timing not supported. Not tracking HLS.js.`);return}var s=function(n,r){return e.emit(t,n,r)},c=function(e,t){var n=t.levels,r=t.audioTracks,i=t.url,a=t.stats,o=t.networkDetails,c=t.sessionData,l={},u={};n.forEach(function(e,t){l[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),r.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var d=mt(a),f=d.bytesLoaded,p=d.requestStart,m=d.responseStart,h=d.responseEnd;s(`requestcompleted`,st(at({},pt(c)),{request_event_type:e,request_bytes_loaded:f,request_start:p,request_response_start:m,request_response_end:h,request_type:`manifest`,request_hostname:D(i),request_response_headers:ht(o),request_rendition_lists:{media:l,audio:u,video:{}}}))};n.on(r.Events.MANIFEST_LOADED,c);var l=function(e,t){var n=t.details,r=t.level,i=t.networkDetails,c=t.stats,l=mt(c),u=l.bytesLoaded,d=l.requestStart,f=l.responseStart,p=l.responseEnd,m=n.fragments[n.fragments.length-1],h=o(m)+a(m.duration);s(`requestcompleted`,{request_event_type:e,request_bytes_loaded:u,request_start:d,request_response_start:f,request_response_end:p,request_current_level:r,request_type:`manifest`,request_hostname:D(n.url),request_response_headers:ht(i),video_holdback:n.holdBack&&a(n.holdBack),video_part_holdback:n.partHoldBack&&a(n.partHoldBack),video_part_target_duration:n.partTarget&&a(n.partTarget),video_target_duration:n.targetduration&&a(n.targetduration),video_source_is_live:n.live,player_manifest_newest_program_time:isNaN(h)?void 0:h})};n.on(r.Events.LEVEL_LOADED,l);var u=function(e,t){var n=t.details,r=t.networkDetails,i=t.stats,a=mt(i),o=a.bytesLoaded,c=a.requestStart,l=a.responseStart,u=a.responseEnd;s(`requestcompleted`,{request_event_type:e,request_bytes_loaded:o,request_start:c,request_response_start:l,request_response_end:u,request_type:`manifest`,request_hostname:D(n.url),request_response_headers:ht(r)})};n.on(r.Events.AUDIO_TRACK_LOADED,u);var d=function(e,t){var r=t.stats,i=t.networkDetails,a=t.frag;r||=a.stats;var o=mt(r),c=o.bytesLoaded,l=o.requestStart,u=o.responseStart,d=o.responseEnd,f=i?ht(i):void 0,p={request_event_type:e,request_bytes_loaded:c,request_start:l,request_response_start:u,request_response_end:d,request_hostname:i?D(i.responseURL):void 0,request_id:f?ft(f):void 0,request_response_headers:f,request_media_duration:a.duration,request_url:i?.responseURL};a.type===`main`?(p.request_type=`media`,p.request_current_level=a.level,p.request_video_width=(n.levels[a.level]||{}).width,p.request_video_height=(n.levels[a.level]||{}).height,p.request_labeled_bitrate=(n.levels[a.level]||{}).bitrate):p.request_type=a.type,s(`requestcompleted`,p)};n.on(r.Events.FRAG_LOADED,d);var f=function(e,t){var n=t.frag,r=n.start;s(`fragmentchange`,{currentFragmentPDT:o(n),currentFragmentStart:a(r)})};n.on(r.Events.FRAG_CHANGED,f);var p=function(e,t){var n=t.type,i=t.details,a=t.response,o=t.fatal,c=t.frag,l=t.networkDetails,u=c?.url||t.url||``,d=l?ht(l):void 0;(i===r.ErrorDetails.MANIFEST_LOAD_ERROR||i===r.ErrorDetails.MANIFEST_LOAD_TIMEOUT||i===r.ErrorDetails.FRAG_LOAD_ERROR||i===r.ErrorDetails.FRAG_LOAD_TIMEOUT||i===r.ErrorDetails.LEVEL_LOAD_ERROR||i===r.ErrorDetails.LEVEL_LOAD_TIMEOUT||i===r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||i===r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||i===r.ErrorDetails.SUBTITLE_LOAD_ERROR||i===r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||i===r.ErrorDetails.KEY_LOAD_ERROR||i===r.ErrorDetails.KEY_LOAD_TIMEOUT)&&s(`requestfailed`,{request_error:i,request_url:u,request_hostname:D(u),request_id:d?ft(d):void 0,request_type:i===r.ErrorDetails.FRAG_LOAD_ERROR||i===r.ErrorDetails.FRAG_LOAD_TIMEOUT?`media`:i===r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||i===r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?`audio`:i===r.ErrorDetails.SUBTITLE_LOAD_ERROR||i===r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?`subtitle`:i===r.ErrorDetails.KEY_LOAD_ERROR||i===r.ErrorDetails.KEY_LOAD_TIMEOUT?`encryption`:`manifest`,request_error_code:a?.code,request_error_text:a?.text}),o&&s(`error`,{player_error_code:n,player_error_message:i,player_error_context:`${u?`url: ${u}
`:``}${a&&(a.code||a.text)?`response: ${a.code}, ${a.text}
`:``}${t.reason?`failure reason: ${t.reason}
`:``}${t.level?`level: ${t.level}
`:``}${t.parent?`parent stream controller: ${t.parent}
`:``}${t.buffer?`buffer length: ${t.buffer}
`:``}${t.error?`error: ${t.error}
`:``}${t.event?`event: ${t.event}
`:``}${t.err?`error message: ${t.err?.message}
`:``}`})};n.on(r.Events.ERROR,p);var m=function(e,t){var n=t.frag,r=n&&n._url||``;s(`requestcanceled`,{request_event_type:e,request_url:r,request_type:`media`,request_hostname:D(r)})};n.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED,m);var h=function(e,t){var r=t.level,a=n.levels[r];if(a&&a.attrs&&a.attrs.BANDWIDTH){var o=a.attrs.BANDWIDTH,c,l=parseFloat(a.attrs[`FRAME-RATE`]);isNaN(l)||(c=l),o?s(`renditionchange`,{video_source_fps:c,video_source_bitrate:o,video_source_width:a.width,video_source_height:a.height,video_source_rendition_name:a.name,video_source_codec:a?.videoCodec}):i.warn(`missing BANDWIDTH from HLS manifest parsed by HLS.js`)}};n.on(r.Events.LEVEL_SWITCHED,h),n._stopMuxMonitor=function(){n.off(r.Events.MANIFEST_LOADED,c),n.off(r.Events.LEVEL_LOADED,l),n.off(r.Events.AUDIO_TRACK_LOADED,u),n.off(r.Events.FRAG_LOADED,d),n.off(r.Events.FRAG_CHANGED,f),n.off(r.Events.ERROR,p),n.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED,m),n.off(r.Events.LEVEL_SWITCHED,h),n.off(r.Events.DESTROYING,n._stopMuxMonitor),delete n._stopMuxMonitor},n.on(r.Events.DESTROYING,n._stopMuxMonitor)},_t=function(e){e&&typeof e._stopMuxMonitor==`function`&&e._stopMuxMonitor()},vt=function(e,t){if(!e||!e.requestEndDate)return{};var n=D(e.url),r=e.url,i=e.bytesLoaded,a=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),s=new Date(e.requestEndDate).getTime(),c=isNaN(e.duration)?0:e.duration,l=typeof t.getMetricsFor==`function`?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType),u;l.length>0&&(u=dt(l[l.length-1]._responseHeaders||``));var d=u?ft(u):void 0;return{requestStart:a,requestResponseStart:o,requestResponseEnd:s,requestBytesLoaded:i,requestResponseHeaders:u,requestMediaDuration:c,requestHostname:n,requestUrl:r,requestId:d}},yt=function(e,t){if(typeof t.getCurrentRepresentationForType==`function`){var n=t.getCurrentRepresentationForType(e);return n?{currentLevel:n.absoluteIndex,renditionWidth:n.width||null,renditionHeight:n.height||null,renditionBitrate:n.bandwidth}:{}}var r=t.getQualityFor(e),i=t.getCurrentTrackFor(e).bitrateList;return i?{currentLevel:r,renditionWidth:i[r].width||null,renditionHeight:i[r].height||null,renditionBitrate:i[r].bandwidth}:{}},bt=function(e){return e.match(/.*codecs\*?="(.*)"/)?.[1]},xt=function(e){try{var t,n;return(n=e.getVersion)==null||(t=n.call(e))==null?void 0:t.split(`.`).map(function(e){return parseInt(e)})[0]}catch{return!1}},St=function(e,t,n){arguments.length>3&&arguments[3]!==void 0&&arguments[3];var r=e.log;if(!n||!n.on){r.warn(`Invalid dash.js player reference. Monitoring blocked.`);return}var i=xt(n),a=function(n,r){return e.emit(t,n,r)},o=function(e){var t=e.type,n=(e.data||{}).url;a(`requestcompleted`,{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:`manifest`,request_hostname:D(n),request_url:n})};n.on(`manifestLoaded`,o);var s={},c=function(e){if(typeof e.getRequests!=`function`)return null;var t=e.getRequests({state:`executed`});return t.length===0?null:t[t.length-1]},l=function(e){var t=e.type,n=e.fragmentModel,r=e.chunk;u({type:t,request:c(n),chunk:r})},u=function(e){var t=e.type,r=e.chunk,i=e.request,o=(r||{}).mediaInfo||{},c=o.type,l=o.bitrateList;l||=[];var u={};l.forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),c===`video`?s.video=u:c===`audio`?s.audio=u:s.media=u;var d=vt(i,n),f=d.requestStart,p=d.requestResponseStart,m=d.requestResponseEnd,h=d.requestResponseHeaders,ee=d.requestMediaDuration,g=d.requestHostname,te=d.requestUrl,ne=d.requestId;a(`requestcompleted`,{request_event_type:t,request_start:f,request_response_start:p,request_response_end:m,request_bytes_loaded:-1,request_type:c+`_init`,request_response_headers:h,request_hostname:g,request_id:ne,request_url:te,request_media_duration:ee,request_rendition_lists:s})};i>=4?n.on(`initFragmentLoaded`,u):n.on(`initFragmentLoaded`,l);var d=function(e){var t=e.type,n=e.fragmentModel,r=e.chunk;f({type:t,request:c(n),chunk:r})},f=function(e){var t=e.type,r=e.chunk,i=e.request,o=r||{},s=o.mediaInfo,c=o.start,l=(s||{}).type,u=vt(i,n),d=u.requestStart,f=u.requestResponseStart,p=u.requestResponseEnd,m=u.requestBytesLoaded,h=u.requestResponseHeaders,ee=u.requestMediaDuration,g=u.requestHostname,te=u.requestUrl,ne=u.requestId,re=yt(l,n),ie=re.currentLevel,ae=re.renditionWidth,oe=re.renditionHeight,se=re.renditionBitrate;a(`requestcompleted`,{request_event_type:t,request_start:d,request_response_start:f,request_response_end:p,request_bytes_loaded:m,request_type:l,request_response_headers:h,request_hostname:g,request_id:ne,request_url:te,request_media_start_time:c,request_media_duration:ee,request_current_level:ie,request_labeled_bitrate:se,request_video_width:ae,request_video_height:oe})};i>=4?n.on(`mediaFragmentLoaded`,f):n.on(`mediaFragmentLoaded`,d);var p={video:void 0,audio:void 0,totalBitrate:void 0},m=function(){if(p.video&&typeof p.video.bitrate==`number`){if(!(p.video.width&&p.video.height)){r.warn(`have bitrate info for video but missing width/height`);return}var e=p.video.bitrate;if(p.audio&&typeof p.audio.bitrate==`number`&&(e+=p.audio.bitrate),e!==p.totalBitrate)return p.totalBitrate=e,{video_source_bitrate:e,video_source_height:p.video.height,video_source_width:p.video.width,video_source_codec:bt(p.video.codec)}}},h=function(e,t,i){var o=e.mediaType;if(o===`audio`||o===`video`){var s;if(typeof n.getRepresentationsByType==`function`)if(e.newRepresentation)s={bitrate:e.newRepresentation.bandwidth,width:e.newRepresentation.width,height:e.newRepresentation.height,qualityIndex:e.newRepresentation.absoluteIndex};else{var c=n.getRepresentationsByType(o);if(c&&typeof e.newQuality==`number`){var l=c.find(function(t){return t.absoluteIndex===e.newQuality||t.index===e.newQuality});l&&(s={bitrate:l.bandwidth,width:l.width,height:l.height,qualityIndex:e.newQuality})}}else{if(typeof e.newQuality!=`number`){r.warn(`missing evt.newQuality in qualityChangeRendered event`,e);return}s=n.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality})}if(!(s&&typeof s.bitrate==`number`)){r.warn(`missing bitrate info for ${o}`);return}p[o]=st(at({},s),{codec:n.getCurrentTrackFor(o).codec});var u=m();u&&a(`renditionchange`,u)}};n.on(`qualityChangeRendered`,h);var ee=function(e){var t=e.request,n=e.mediaType;t||={},a(`requestcanceled`,{request_event_type:t.type+`_`+t.action,request_url:t.url,request_type:n,request_hostname:D(t.url)})};n.on(`fragmentLoadingAbandoned`,ee);var g=function(e){var t=e.error,n,r,i=(t==null||(n=t.data)==null?void 0:n.request)||{},o=(t==null||(r=t.data)==null?void 0:r.response)||{};t?.code===27&&a(`requestfailed`,{request_error:i.type+`_`+i.action,request_url:i.url,request_hostname:D(i.url),request_type:i.mediaType,request_error_code:o.status,request_error_text:o.statusText});var s=`${i!=null&&i.url?`url: ${i.url}
`:``}${o!=null&&o.status||o!=null&&o.statusText?`response: ${o?.status}, ${o?.statusText}
`:``}`;a(`error`,{player_error_code:t?.code,player_error_message:t?.message,player_error_context:s})};n.on(`error`,g),n._stopMuxMonitor=function(){n.off(`manifestLoaded`,o),n.off(`initFragmentLoaded`,u),n.off(`mediaFragmentLoaded`,f),n.off(`qualityChangeRendered`,h),n.off(`error`,g),n.off(`fragmentLoadingAbandoned`,ee),delete n._stopMuxMonitor}},Ct=function(e){e&&typeof e._stopMuxMonitor==`function`&&e._stopMuxMonitor()},wt=0,Tt=function(){function e(){w(this,e),E(this,`_listeners`,void 0)}return T(e,[{key:`on`,value:function(e,t,n){return t._eventEmitterGuid=t._eventEmitterGuid||++wt,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],n&&(t=t.bind(n)),this._listeners[e].push(t),t}},{key:`off`,value:function(e,t){var n=this._listeners&&this._listeners[e];n&&n.forEach(function(e,r){e._eventEmitterGuid===t._eventEmitterGuid&&n.splice(r,1)})}},{key:`one`,value:function(e,t,n){var r=this;t._eventEmitterGuid=t._eventEmitterGuid||++wt;var i=function(){r.off(e,i),t.apply(n||this,arguments)};i._eventEmitterGuid=t._eventEmitterGuid,this.on(e,i)}},{key:`emit`,value:function(e,t){var n=this;if(this._listeners){t||={};var r=this._listeners[`before`+e]||[],i=this._listeners[`before*`]||[],a=this._listeners[e]||[],o=this._listeners[`after`+e]||[],s=function(t,r){t=t.slice(),t.forEach(function(t){t.call(n,{type:e},r)})};s(r,t),s(i,t),s(a,t),s(o,t)}}}]),e}(),Et=v(y()),Dt=function(){function e(t){var n=this;w(this,e),E(this,`_playbackHeartbeatInterval`,void 0),E(this,`_playheadShouldBeProgressing`,void 0),E(this,`pm`,void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on(`playing`,function(){n._playheadShouldBeProgressing=!0}),t.on(`play`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`playing`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adbreakstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adplay`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`adplaying`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`devicewake`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`viewstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`rebufferstart`,this._startPlaybackHeartbeatInterval.bind(this)),t.on(`pause`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`ended`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`viewend`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`error`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`aderror`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adpause`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adended`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`adbreakend`,this._stopPlaybackHeartbeatInterval.bind(this)),t.on(`seeked`,function(){t.data.player_is_paused?n._stopPlaybackHeartbeatInterval():n._startPlaybackHeartbeatInterval()}),t.on(`timeupdate`,function(){n._playbackHeartbeatInterval!==null&&t.emit(`playbackheartbeat`)}),t.on(`devicesleep`,function(e,r){n._playbackHeartbeatInterval!==null&&(Et.default.clearInterval(n._playbackHeartbeatInterval),t.emit(`playbackheartbeatend`,{viewer_time:r.viewer_time}),n._playbackHeartbeatInterval=null)})}return T(e,[{key:`_startPlaybackHeartbeatInterval`,value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit(`playbackheartbeat`),this._playbackHeartbeatInterval=Et.default.setInterval(function(){e.pm.emit(`playbackheartbeat`)},this.pm.playbackHeartbeatTime))}},{key:`_stopPlaybackHeartbeatInterval`,value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(Et.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit(`playbackheartbeatend`),this._playbackHeartbeatInterval=null)}}]),e}(),Ot=function e(t){var n=this;w(this,e),E(this,`viewErrored`,void 0),t.on(`viewinit`,function(){n.viewErrored=!1}),t.on(`error`,function(e,r){try{var i=t.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});i&&(t.data.player_error_code=i.player_error_code||r.player_error_code,t.data.player_error_message=i.player_error_message||r.player_error_message,t.data.player_error_context=i.player_error_context||r.player_error_context,t.data.player_error_severity=i.player_error_severity||r.player_error_severity,t.data.player_error_business_exception=i.player_error_business_exception||r.player_error_business_exception,n.viewErrored=!0)}catch(e){t.mux.log.warn(`Exception in error translator callback.`,e),n.viewErrored=!0}}),t.on(`aftererror`,function(){var e,n,r,i,a;(e=t.data)==null||delete e.player_error_code,(n=t.data)==null||delete n.player_error_message,(r=t.data)==null||delete r.player_error_context,(i=t.data)==null||delete i.player_error_severity,(a=t.data)==null||delete a.player_error_business_exception})},kt=function(){function e(t){w(this,e),E(this,`_watchTimeTrackerLastCheckedTime`,void 0),E(this,`pm`,void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on(`playbackheartbeat`,this._updateWatchTime.bind(this)),t.on(`playbackheartbeatend`,this._clearWatchTimeState.bind(this))}return T(e,[{key:`_updateWatchTime`,value:function(e,t){var n=t.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=n),O(this.pm.data,`view_watch_time`,n-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=n}},{key:`_clearWatchTimeState`,value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),At=function(){function e(t){var n=this;w(this,e),E(this,`_playbackTimeTrackerLastPlayheadPosition`,void 0),E(this,`_lastTime`,void 0),E(this,`_isAdPlaying`,void 0),E(this,`_callbackUpdatePlaybackTime`,void 0),E(this,`pm`,void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=b.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null,t.on(`viewinit`,function(){n.pm.data.view_playing_time_ms_cumulative=0});var r=this._startPlaybackTimeTracking.bind(this);t.on(`playing`,r),t.on(`adplaying`,r);var i=function(){n.pm.data.player_is_paused||r()};t.on(`seeked`,i),t.on(`rebufferend`,i);var a=this._stopPlaybackTimeTracking.bind(this);t.on(`playbackheartbeatend`,a),t.on(`seeking`,a),t.on(`rebufferstart`,a),t.on(`adplaying`,function(){n._isAdPlaying=!0}),t.on(`adended`,function(){n._isAdPlaying=!1}),t.on(`adpause`,function(){n._isAdPlaying=!1}),t.on(`adbreakstart`,function(){n._isAdPlaying=!1}),t.on(`adbreakend`,function(){n._isAdPlaying=!1}),t.on(`adplay`,function(){n._isAdPlaying=!1}),t.on(`viewinit`,function(){n._playbackTimeTrackerLastPlayheadPosition=-1,n._lastTime=b.now(),n._isAdPlaying=!1,n._callbackUpdatePlaybackTime=null})}return T(e,[{key:`_startPlaybackTimeTracking`,value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this._lastTime=b.now(),this.pm.on(`playbackheartbeat`,this._callbackUpdatePlaybackTime))}},{key:`_stopPlaybackTimeTracking`,value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off(`playbackheartbeat`,this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:`_updatePlaybackTime`,value:function(){var e=this.pm.data.player_playhead_time||0,t=b.now(),n=t-this._lastTime,r=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?r=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(r=n),r>0&&r<=1e3&&O(this.pm.data,`view_content_playback_time`,r),this._callbackUpdatePlaybackTime!==null&&n>0&&n<=1e3&&(this._isAdPlaying&&O(this.pm.data,`ad_playing_time_ms_cumulative`,n),O(this.pm.data,`view_playing_time_ms_cumulative`,n)),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),jt=function(){function e(t){w(this,e),E(this,`pm`,void 0),this.pm=t;var n=this._updatePlayheadTime.bind(this);t.on(`playbackheartbeat`,n),t.on(`playbackheartbeatend`,n),t.on(`timeupdate`,n),t.on(`destroy`,function(){t.off(`timeupdate`,n)})}return T(e,[{key:`_updateMaxPlayheadPosition`,value:function(){this.pm.data.view_max_playhead_position=this.pm.data.view_max_playhead_position===void 0?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:`_updatePlayheadTime`,value:function(e,t){var n=this,r=function(){n.pm.currentFragmentPDT&&n.pm.currentFragmentStart&&(n.pm.data.player_program_time=n.pm.currentFragmentPDT+n.pm.data.player_playhead_time-n.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var i=this.pm.getPlayheadTime();i!==void 0&&(this.pm.data.player_playhead_time=i,r(),this._updateMaxPlayheadPosition())}}}]),e}(),Mt=300*1e3,Nt=function e(t){if(w(this,e),!t.disableRebufferTracking){var n,r=function(e,t){i(t),n=void 0},i=function(e){if(n){var r=e.viewer_time-n;O(t.data,`view_rebuffer_duration`,r),n=e.viewer_time,t.data.view_rebuffer_duration>Mt&&(t.emit(`viewend`),t.send(`viewend`),t.mux.log.warn(`Ending view after rebuffering for longer than ${Mt}ms, future events will be ignored unless a programchange or videochange occurs.`))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on(`playbackheartbeat`,function(e,t){return i(t)}),t.on(`rebufferstart`,function(e,i){n||(O(t.data,`view_rebuffer_count`,1),n=i.viewer_time,t.one(`rebufferend`,r))}),t.on(`viewinit`,function(){n=void 0,t.off(`rebufferend`,r)})}},Pt=function(){function e(t){var n=this;w(this,e),E(this,`_lastCheckedTime`,void 0),E(this,`_lastPlayheadTime`,void 0),E(this,`_lastPlayheadTimeUpdatedTime`,void 0),E(this,`_rebuffering`,void 0),E(this,`pm`,void 0),this.pm=t,!(t.disableRebufferTracking||t.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on(`playbackheartbeat`,this._checkIfRebuffering.bind(this)),t.on(`playbackheartbeatend`,this._cleanupRebufferTracker.bind(this)),t.on(`seeking`,function(){n._cleanupRebufferTracker(null,{viewer_time:b.now()})}))}return T(e,[{key:`_checkIfRebuffering`,value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var n=t.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold==`number`&&n>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit(`rebufferstart`,{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:`_clearRebufferTrackerState`,value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:`_prepareRebufferTrackerState`,value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:`_cleanupRebufferTracker`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit(`rebufferend`,{viewer_time:t.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration==`number`&&r>0&&i-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit(`rebufferstart`,{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit(`rebufferend`,{viewer_time:this._lastPlayheadTimeUpdatedTime+i-r}))}n?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),Ft=function(){function e(t){var n=this;w(this,e),E(this,`pm`,void 0),this.pm=t,t.on(`viewinit`,function(){var e=t.data,r=e.view_id;if(!e.view_program_changed){var i=function(e,i){var a=i.viewer_time;(e.type===`playing`&&t.data.view_time_to_first_frame===void 0||e.type===`adplaying`&&(t.data.view_time_to_first_frame===void 0||n._inPrerollPosition()))&&n.calculateTimeToFirstFrame(a||b.now(),r)};t.one(`playing`,i),t.one(`adplaying`,i),t.one(`viewend`,function(){t.off(`playing`,i),t.off(`adplaying`,i)})}})}return T(e,[{key:`_inPrerollPosition`,value:function(){return this.pm.data.view_content_playback_time===void 0||this.pm.data.view_content_playback_time<=1e3}},{key:`calculateTimeToFirstFrame`,value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.pm.pageLoadInitTime&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.pm.pageLoadInitTime))}}]),e}(),It=function e(t){var n=this;w(this,e),E(this,`_lastPlayerHeight`,void 0),E(this,`_lastPlayerWidth`,void 0),E(this,`_lastPlayheadPosition`,void 0),E(this,`_lastSourceHeight`,void 0),E(this,`_lastSourceWidth`,void 0),t.on(`viewinit`,function(){n._lastPlayheadPosition=-1}),[`pause`,`rebufferstart`,`seeking`,`error`,`adbreakstart`,`hb`,`renditionchange`,`orientationchange`,`viewend`,`playbackmodechange`].forEach(function(e){t.on(e,function(){if(n._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&n._lastPlayerWidth>=0&&n._lastSourceWidth>0&&n._lastPlayerHeight>=0&&n._lastSourceHeight>0){var e=t.data.player_playhead_time-n._lastPlayheadPosition;if(e<0){n._lastPlayheadPosition=-1;return}var r=Math.min(n._lastPlayerWidth/n._lastSourceWidth,n._lastPlayerHeight/n._lastSourceHeight),i=Math.max(0,r-1),a=Math.max(0,1-r);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,i),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,a),O(t.data,`view_total_content_playback_time`,e),O(t.data,`view_total_upscaling`,i*e),O(t.data,`view_total_downscaling`,a*e)}n._lastPlayheadPosition=-1})}),[`playing`,`hb`,`renditionchange`,`orientationchange`,`playbackmodechange`].forEach(function(e){t.on(e,function(){n._lastPlayheadPosition=t.data.player_playhead_time,n._lastPlayerWidth=t.data.player_width,n._lastPlayerHeight=t.data.player_height,n._lastSourceWidth=t.data.video_source_width,n._lastSourceHeight=t.data.video_source_height})})},Lt=2e3,Rt=function e(t){var n=this;w(this,e),E(this,`isSeeking`,void 0),this.isSeeking=!1;var r=-1,i=function(){var e=b.now(),i=(t.data.viewer_time||e)-(r||e);O(t.data,`view_seek_duration`,i),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,i),n.isSeeking=!1,r=-1};t.on(`seeking`,function(e,a){if(Object.assign(t.data,a),n.isSeeking&&a.viewer_time-r<=Lt){r=a.viewer_time;return}n.isSeeking&&i(),n.isSeeking=!0,r=a.viewer_time,O(t.data,`view_seek_count`,1),t.send(`seeking`)}),t.on(`seeked`,function(){i()}),t.on(`viewend`,function(){n.isSeeking&&(i(),t.send(`seeked`)),n.isSeeking=!1,r=-1})},zt=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},Bt=[`adbreakstart`,`adrequest`,`adresponse`,`adplay`,`adplaying`,`adpause`,`adended`,`adbreakend`,`aderror`,`adclicked`,`adskipped`],Vt=function(){function e(t){var n=this;w(this,e),E(this,`_adHasPlayed`,void 0),E(this,`_adRequests`,void 0),E(this,`_adResponses`,void 0),E(this,`_currentAdRequestNumber`,void 0),E(this,`_currentAdResponseNumber`,void 0),E(this,`_prerollPlayTime`,void 0),E(this,`_wouldBeNewAdPlay`,void 0),E(this,`isAdBreak`,void 0),E(this,`pm`,void 0),this.pm=t,t.on(`viewinit`,function(){n.isAdBreak=!1,n._currentAdRequestNumber=0,n._currentAdResponseNumber=0,n._adRequests=[],n._adResponses=[],n._adHasPlayed=!1,n._wouldBeNewAdPlay=!0,n._prerollPlayTime=void 0}),Bt.forEach(function(e){return t.on(e,n._updateAdData.bind(n))});var r=function(){n.isAdBreak=!1};t.on(`adbreakstart`,function(){n.isAdBreak=!0}),t.on(`play`,r),t.on(`playing`,r),t.on(`viewend`,r),t.on(`adrequest`,function(e,r){r=Object.assign({ad_request_id:`generatedAdRequestId`+ n._currentAdRequestNumber++},r),zt(n._adRequests,r),O(t.data,`view_ad_request_count`),n.inPrerollPosition()&&(t.data.view_preroll_requested=!0,n._adHasPlayed||O(t.data,`view_preroll_request_count`))}),t.on(`adresponse`,function(e,r){r=Object.assign({ad_request_id:`generatedAdRequestId`+ n._currentAdResponseNumber++},r),zt(n._adResponses,r);var i=n.findAdRequest(r.ad_request_id);i&&O(t.data,`view_ad_request_time`,Math.max(0,r.viewer_time-i.viewer_time))}),t.on(`adplay`,function(e,r){n._adHasPlayed=!0,n._wouldBeNewAdPlay&&(n._wouldBeNewAdPlay=!1,O(t.data,`view_ad_played_count`)),n.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,n._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,r.viewer_time-n._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,r.viewer_time-t.data.view_start)),n._prerollPlayTime=r.viewer_time)}),t.on(`adplaying`,function(e,r){n.inPrerollPosition()&&t.data.view_preroll_load_time===void 0&&n._prerollPlayTime!==void 0&&(t.data.view_preroll_load_time=r.viewer_time-n._prerollPlayTime,t.data.view_startup_preroll_load_time=r.viewer_time-n._prerollPlayTime)}),t.on(`adclicked`,function(e,r){n._wouldBeNewAdPlay||O(t.data,`view_ad_clicked_count`)}),t.on(`adskipped`,function(e,r){n._wouldBeNewAdPlay||O(t.data,`view_ad_skipped_count`)}),t.on(`adended`,function(){n._wouldBeNewAdPlay=!0}),t.on(`aderror`,function(){n._wouldBeNewAdPlay=!0})}return T(e,[{key:`inPrerollPosition`,value:function(){return this.pm.data.view_content_playback_time===void 0||this.pm.data.view_content_playback_time<=1e3}},{key:`findAdRequest`,value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:`_updateAdData`,value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var n=je(nt(t.ad_tag_url),2),r=n[0],i=n[1];this.pm.data.view_preroll_ad_tag_domain=i,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var a=je(nt(t.ad_asset_url),2),o=a[0],s=a[1];this.pm.data.view_preroll_ad_asset_domain=s,this.pm.data.view_preroll_ad_asset_hostname=o}this.pm.data.ad_type=`preroll`}this.pm.data.ad_asset_url=t?.ad_asset_url,this.pm.data.ad_tag_url=t?.ad_tag_url,this.pm.data.ad_creative_id=t?.ad_creative_id,this.pm.data.ad_id=t?.ad_id,this.pm.data.ad_universal_id=t?.ad_universal_id,t!=null&&t.ad_type&&(this.pm.data.ad_type=t?.ad_type)}}]),e}(),Ht=function e(t){var n=this;w(this,e),E(this,`lastWallClockTime`,void 0);var r=function(){n.lastWallClockTime=b.now(),t.on(`before*`,i)},i=function(e){var r=b.now(),i=n.lastWallClockTime;n.lastWallClockTime=r,r-i>3e4&&(t.emit(`devicesleep`,{viewer_time:i}),Object.assign(t.data,{viewer_time:i}),t.send(`devicesleep`),t.emit(`devicewake`,{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send(`devicewake`))};t.one(`playbackheartbeat`,r),t.on(`playbackheartbeatend`,function(){t.off(`before*`,i),t.one(`playbackheartbeat`,r)})},Ut=v(y()),Wt=function(e){return e()}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t};function t(n){function r(t,i,a){var o;if(typeof document<`u`){if(arguments.length>1){if(a=e({path:`/`},r.defaults,a),typeof a.expires==`number`){var s=new Date;s.setMilliseconds(s.getMilliseconds()+a.expires*864e5),a.expires=s}try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch{}return i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,`=`,i,a.expires?`; expires=`+a.expires.toUTCString():``,a.path?`; path=`+a.path:``,a.domain?`; domain=`+a.domain:``,a.secure?`; secure`:``].join(``)}t||(o={});for(var c=document.cookie?document.cookie.split(`; `):[],l=/(%[0-9A-Z]{2})+/g,u=0;u<c.length;u++){var d=c[u].split(`=`),f=d.slice(1).join(`=`);f.charAt(0)===`"`&&(f=f.slice(1,-1));try{var p=d[0].replace(l,decodeURIComponent);if(f=n.read?n.read(f,p):n(f,p)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch{}if(t===p){o=f;break}t||(o[p]=f)}catch{}}return o}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,``,e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})}),Gt=`muxData`,Kt=function(e){return Object.entries(e).map(function(e){var t=je(e,2);return`${t[0]}=${t[1]}`}).join(`&`)},qt=function(e){return e.split(`&`).reduce(function(e,t){var n=je(t.split(`=`),2),r=n[0],i=n[1],a=+i;return e[r]=i&&a==i?a:i,e},{})},Jt=function(){var e;try{e=qt(Wt.get(Gt)||``)}catch{e={}}return e},Yt=function(e){try{Wt.set(Gt,Kt(e),{expires:365})}catch{}},Xt=function(){var e=Jt();return e.mux_viewer_id=e.mux_viewer_id||Fe(),e.msn=e.msn||Math.random(),Yt(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},Zt=function(){var e=Jt(),t=b.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=Fe(),e.sst=t),e.sex=t+1500*1e3,Yt(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}};function Qt(e,t){var n=t.beaconCollectionDomain,r=t.beaconDomain;if(n)return(/localhost(?::\d+)?$/.test(n)?`http://`:`https://`)+n;e||=`inferred`;var i=r||`litix.io`;return e.match(/^[a-z0-9]+$/)?`https://`+e+`.`+i:`https://img.litix.io/a.gif`}var $t=tn({a:`env`,b:`beacon`,c:`custom`,d:`ad`,e:`event`,f:`experiment`,i:`internal`,m:`mux`,n:`response`,p:`player`,q:`request`,r:`retry`,s:`session`,t:`timestamp`,u:`viewer`,v:`video`,w:`page`,x:`view`,y:`sub`}),en=tn({ad:`ad`,af:`affiliate`,ag:`aggregate`,ap:`api`,al:`application`,ao:`audio`,ar:`architecture`,as:`asset`,au:`autoplay`,av:`average`,bi:`bitrate`,bn:`brand`,br:`break`,bw:`browser`,by:`bytes`,bz:`business`,ca:`cached`,cb:`cancel`,cc:`codec`,cd:`code`,cg:`category`,ch:`changed`,ci:`client`,ck:`clicked`,cl:`canceled`,cm:`cmcd`,cn:`config`,co:`count`,ce:`counter`,cp:`complete`,cq:`creator`,cr:`creative`,cs:`captions`,ct:`content`,cu:`current`,cv:`cumulative`,cx:`connection`,cz:`context`,da:`data`,dg:`downscaling`,dm:`domain`,dn:`cdn`,do:`downscale`,dr:`drm`,dp:`dropped`,du:`duration`,dv:`device`,dy:`dynamic`,eb:`enabled`,ec:`encoding`,ed:`edge`,en:`end`,eg:`engine`,em:`embed`,er:`error`,ep:`experiments`,es:`errorcode`,et:`errortext`,ee:`event`,ev:`events`,ex:`expires`,ez:`exception`,fa:`failed`,fi:`first`,fm:`family`,ft:`format`,fp:`fps`,fq:`frequency`,fr:`frame`,fs:`fullscreen`,ha:`has`,hb:`holdback`,he:`headers`,ho:`host`,hn:`hostname`,ht:`height`,id:`id`,ii:`init`,in:`instance`,ip:`ip`,is:`is`,ke:`key`,la:`language`,lb:`labeled`,le:`level`,li:`live`,ld:`loaded`,lo:`load`,lw:`low`,ls:`lists`,lt:`latency`,ma:`max`,md:`media`,me:`message`,mf:`manifest`,mi:`mime`,ml:`midroll`,mm:`min`,mn:`manufacturer`,mo:`model`,mp:`mode`,ms:`ms`,mx:`mux`,ne:`newest`,nm:`name`,no:`number`,on:`on`,or:`origin`,os:`os`,pa:`paused`,pb:`playback`,pd:`producer`,pe:`percentage`,pf:`played`,pg:`program`,ph:`playhead`,pi:`plugin`,pl:`preroll`,pn:`playing`,po:`poster`,pp:`pip`,pr:`preload`,ps:`position`,pt:`part`,pv:`previous`,py:`property`,px:`pop`,pz:`plan`,ra:`rate`,rd:`requested`,re:`rebuffer`,rf:`rendition`,rg:`range`,rm:`remote`,ro:`ratio`,rp:`response`,rq:`request`,rs:`requests`,sa:`sample`,sd:`skipped`,se:`session`,sh:`shift`,sk:`seek`,sm:`stream`,so:`source`,sq:`sequence`,sr:`series`,ss:`status`,st:`start`,su:`startup`,sv:`server`,sw:`software`,sy:`severity`,ta:`tag`,tc:`tech`,te:`text`,tg:`target`,th:`throughput`,ti:`time`,tl:`total`,to:`to`,tt:`title`,ty:`type`,ug:`upscaling`,un:`universal`,up:`upscale`,ur:`url`,us:`user`,va:`variant`,vd:`viewed`,vi:`video`,ve:`version`,vw:`view`,vr:`viewer`,wd:`width`,wa:`watch`,wt:`waiting`});function tn(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function nn(e){var t={},n={};return Object.keys(e).forEach(function(r){var i=!1;if(e.hasOwnProperty(r)&&e[r]!==void 0){var a=r.split(`_`),o=a[0],s=$t[o];s||=(S.info("Data key word `"+a[0]+"` not expected in "+r),o+`_`),a.splice(1).forEach(function(e){e===`url`&&(i=!0),en[e]?s+=en[e]:Number.isInteger(Number(e))?s+=e:(S.info("Data key word `"+e+"` not expected in "+r),s+=`_`+e+`_`)}),i?n[s]=e[r]:t[s]=e[r]}}),Object.assign(t,n)}var rn=v(y()),an=v(Te()),on={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},sn=56*1024,cn=[`hb`,`requestcompleted`,`requestfailed`,`requestcanceled`],ln=`https://img.litix.io`,un=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=e||ln,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},on,t)};un.prototype.queueEvent=function(e,t){var n=Object.assign({},t);return this._eventQueue.length<=this._options.maxQueueLength||e===`eventrateexceeded`?(this._eventQueue.push(n),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1},un.prototype.flushEvents=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},un.prototype.destroy=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),rn.default.clearTimeout(this._sendTimeout)},un.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],nn({mux_view_message:`event queue truncated`}));var n=this._createPayload(t);fn(this._beaconUrl,n,!0,function(){})},un.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var n=this._createPayload(t),r=b.now();fn(this._beaconUrl,n,!1,function(n,i){i?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,S.info(`Error sending beacon: `+i)):e._failureCount=0,e._roundTripTime=b.now()-r,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},un.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=2**(this._failureCount-1);return e*=Math.random(),(1+e)*this._options.baseTimeBetweenBeacons},un.prototype._startBeaconSending=function(){var e=this;rn.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=rn.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},un.prototype._createPayload=function(e){var t=this,n={transmission_timestamp:Math.round(b.now())};this._roundTripTime&&(n.rtt_ms=Math.round(this._roundTripTime));var r,i,a,o=function(){r=JSON.stringify({metadata:n,events:i||e}),a=r.length/1024},s=function(){return a<=t._options.maxPayloadKBSize};return o(),s()||(S.info(`Payload size is too big (`+a+` kb). Removing unnecessary events.`),i=e.filter(function(e){return cn.indexOf(e.e)===-1}),o()),s()||(S.info(`Payload size still too big (`+a+` kb). Cropping fields..`),i.forEach(function(e){for(var t in e){var n=e[t],r=50*1024;typeof n==`string`&&n.length>r&&(e[t]=n.substring(0,r))}}),o()),r};var dn=typeof an.default.exitPictureInPicture==`function`?function(e){return e.length<=sn}:function(e){return!1},fn=function(e,t,n,r){if(n&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){r();return}if(rn.default.fetch){rn.default.fetch(e,{method:`POST`,body:t,headers:{"Content-Type":`text/plain`},keepalive:dn(t)}).then(function(e){return r(null,e.ok?null:`Error`)}).catch(function(e){return r(null,e)});return}if(rn.default.XMLHttpRequest){var i=new rn.default.XMLHttpRequest;i.onreadystatechange=function(){if(i.readyState===4)return r(null,i.status===200?void 0:`error`)},i.open(`POST`,e),i.setRequestHeader(`Content-Type`,`text/plain`),i.send(t);return}r()},pn=un,mn=[`env_key`,`view_id`,`view_sequence_number`,`player_sequence_number`,`beacon_domain`,`player_playhead_time`,`viewer_time`,`mux_api_version`,`event`,`video_id`,`player_instance_id`,`player_error_code`,`player_error_message`,`player_error_context`,`player_error_severity`,`player_error_business_exception`,`view_playing_time_ms_cumulative`,`ad_playing_time_ms_cumulative`],hn=[`adplay`,`adplaying`,`adpause`,`adfirstquartile`,`admidpoint`,`adthirdquartile`,`adended`,`adresponse`,`adrequest`],gn=[`ad_id`,`ad_creative_id`,`ad_universal_id`],_n=[`viewstart`,`error`,`ended`,`viewend`],vn=600*1e3,yn=function(){function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};w(this,e);var i,a,o,s,c,l,u;E(this,`mux`,void 0),E(this,`envKey`,void 0),E(this,`options`,void 0),E(this,`eventQueue`,void 0),E(this,`sampleRate`,void 0),E(this,`disableCookies`,void 0),E(this,`respectDoNotTrack`,void 0),E(this,`previousBeaconData`,void 0),E(this,`lastEventTime`,void 0),E(this,`rateLimited`,void 0),E(this,`pageLevelData`,void 0),E(this,`viewerData`,void 0),this.mux=t,this.envKey=n,this.options=r,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new pn(Qt(this.envKey,this.options)),this.sampleRate=this.options.sampleRate??1,this.disableCookies=this.options.disableCookies??!1,this.respectDoNotTrack=this.options.respectDoNotTrack??!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:this.options.platform?.name,viewer_application_version:this.options.platform?.version,viewer_application_engine:this.options.platform?.layout,viewer_device_name:this.options.platform?.product,viewer_device_category:``,viewer_device_manufacturer:this.options.platform?.manufacturer,viewer_os_family:(a=this.options.platform)==null||(i=a.os)==null?void 0:i.family,viewer_os_architecture:(s=this.options.platform)==null||(o=s.os)==null?void 0:o.architecture,viewer_os_version:(l=this.options.platform)==null||(c=l.os)==null?void 0:c.version,page_url:Ut.default===null||Ut.default===void 0||(u=Ut.default.location)==null?void 0:u.href},this.viewerData=this.disableCookies?{}:Xt()}return T(e,[{key:`send`,value:function(e,t){if(!(!e||!(t!=null&&t.view_id))){if(this.respectDoNotTrack&&We())return S.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||typeof t!=`object`)return S.error(`A data object was expected in send() but was not provided`);var n=this.disableCookies?{}:Zt(),r=st(at({},this.pageLevelData,t,n,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var i=(r.mux_sample_number??0)>=this.sampleRate,a=nn(this._deduplicateBeaconData(e,r));if(this.lastEventTime=this.mux.utils.now(),i)return S.info(`Not sending event due to sample rate restriction`,e,r,a);if(this.envKey||S.info(`Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL`,e,r,a),!this.rateLimited)if(S.info(`Sending event`,e,r,a),this.rateLimited=!this.eventQueue.queueEvent(e,a),this.mux.WINDOW_UNLOADING&&e===`viewend`)this.eventQueue.destroy(!0);else{if(this.mux.WINDOW_HIDDEN&&e===`hb`)this.eventQueue.flushEvents(!0);else if(_n.indexOf(e)>=0){if(e===`error`&&t.player_error_severity===`warning`)return;this.eventQueue.flushEvents()}if(this.rateLimited)return r.event=`eventrateexceeded`,a=nn(r),this.eventQueue.queueEvent(r.event,a),S.error(`Beaconing disabled due to rate limit.`)}}}},{key:`destroy`,value:function(){this.eventQueue.destroy(!1)}},{key:`_deduplicateBeaconData`,value:function(e,t){var n=this,r={},i=t.view_id;if(i===`-1`||e===`viewstart`||e===`viewend`||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=vn)r=at({},t),i&&(this.previousBeaconData=r),i&&e===`viewend`&&(this.previousBeaconData=null);else{var a=e.indexOf(`request`)===0;Object.entries(t).forEach(function(t){var i=je(t,2),o=i[0],s=i[1];n.previousBeaconData&&(s!==n.previousBeaconData[o]||mn.indexOf(o)>-1||n.objectHasChanged(a,o,s,n.previousBeaconData[o])||n.eventRequiresKey(e,o))&&(r[o]=s,n.previousBeaconData[o]=s)})}return r}},{key:`objectHasChanged`,value:function(e,t,n,r){return!e||t.indexOf(`request_`)!==0?!1:t===`request_response_headers`||typeof n!=`object`||typeof r!=`object`?!0:Object.keys(n||{}).length!==Object.keys(r||{}).length}},{key:`eventRequiresKey`,value:function(e,t){return!!(e===`renditionchange`&&t.indexOf(`video_source_`)===0||gn.includes(t)&&hn.includes(e)||e===`playbackmodechange`&&t.indexOf(`player_playback_mode`)===0)}}]),e}(),bn=function e(t){w(this,e);var n=0,r=0,i=0,a=0,o=0,s=0,c=0;t.on(`requestcompleted`,function(e,s){var c=s.request_start,l=s.request_response_start,u=s.request_response_end,d=s.request_bytes_loaded;a++;var f,p;if(l?(f=l-(c??0),p=(u??0)-l):p=(u??0)-(c??0),p>0&&d&&d>0){var m=d/p*8e3;o++,r+=d,i+=p,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,m),t.data.view_average_request_throughput=r/i*8e3,t.data.view_request_count=a,f>0&&(n+=f,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,f),t.data.view_average_request_latency=n/o)}}),t.on(`requestfailed`,function(e,n){a++,s++,t.data.view_request_count=a,t.data.view_request_failed_count=s}),t.on(`requestcanceled`,function(e,n){a++,c++,t.data.view_request_count=a,t.data.view_request_canceled_count=c})},xn=3600*1e3,Sn=function e(t){var n=this;w(this,e),E(this,`_lastEventTime`,void 0),t.on(`before*`,function(e,r){var i=r.viewer_time,a=b.now(),o=n._lastEventTime;if(n._lastEventTime=a,o&&a-o>xn){var s=Object.keys(t.data).reduce(function(e,n){return n.indexOf(`video_`)===0?Object.assign(e,E({},n,t.data[n])):e},{});t.mux.log.info(`Received event after at least an hour inactivity, creating a new view`);var c=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:i},s)),t.playbackHeartbeat._playheadShouldBeProgressing=c,t.playbackHeartbeat._playheadShouldBeProgressing&&e.type!==`play`&&e.type!==`adbreakstart`&&(t.emit(`play`,{viewer_time:i}),e.type!==`playing`&&t.emit(`playing`,{viewer_time:i}))}})},Cn=function e(t){w(this,e);var n=function(e){var n=Tn(e),r=En(e);if(n!=null&&!wn(n,a)&&o<=r){a=n,o=r;var i={video_cdn:n};t.emit(`cdnchange`,i)}},r=null,i=null,a=null,o=0;t.on(`viewinit`,function(){r=null,i=null,a=null,o=0}),t.on(`beforecdnchange`,function(e,t){var n=t?.video_cdn;n&&(t.video_previous_cdn===void 0||t.video_previous_cdn===null)&&(wn(n,i)?t.video_previous_cdn=r??void 0:(t.video_previous_cdn=i??void 0,r=i,i=n))}),t.on(`requestcompleted`,function(e,t){n(t)})};function wn(e,t){return e?.toLowerCase()===t?.toLowerCase()}function Tn(e){var t;return e!=null&&e.request_type&&(e.request_type===`media`||e.request_type===`video`)&&(t=e.request_response_headers)!=null&&t[`x-cdn`]?e.request_response_headers[`x-cdn`]:e!=null&&e.video_cdn?e.video_cdn:null}function En(e){return e!=null&&e.request_start?e.request_start:e!=null&&e.viewer_time?e.viewer_time:Date.now()}var Dn=Cn,On=function(e){try{return JSON.parse(e),!0}catch{return!1}},kn=function e(t){var n=this;w(this,e),E(this,`_emittingAutomaticEvent`,!1),E(this,`_hasInitialized`,!1),E(this,`_currentMode`,`standard`),t.on(`viewstart`,function(){n._hasInitialized||(n._hasInitialized=!0,n._currentMode=t.data.player_playback_mode||`standard`,n._emittingAutomaticEvent=!0,t.emit(`playbackmodechange`,{player_playback_mode:n._currentMode,player_playback_mode_data:`{}`}),n._emittingAutomaticEvent=!1)}),t.on(`viewend`,function(){n._hasInitialized=!1}),t.on(`playbackmodechange`,function(e,r){n._emittingAutomaticEvent||(r.player_playback_mode_data?On(r.player_playback_mode_data)||(t.mux.log.warn(`Invalid JSON string for player_playback_mode_data`),r.player_playback_mode_data=`{}`):r.player_playback_mode_data=`{}`,t.data.player_playback_mode_data=r.player_playback_mode_data,t.data.player_playback_mode=r.player_playback_mode,n._currentMode=r.player_playback_mode)})},An=function(){function e(t){w(this,e),E(this,`pm`,void 0),E(this,`_currentRangeStart`,void 0),E(this,`_lastPlayheadTime`,void 0),this.pm=t,this._currentRangeStart=null,this._lastPlayheadTime=null,t.on(`playbackheartbeat`,this._updatePlaybackRange.bind(this)),t.on(`playbackheartbeatend`,this._endPlaybackRange.bind(this))}return T(e,[{key:`_updateLastRangeEnd`,value:function(){var e=this.pm.data.video_playback_ranges;if(e&&e.length>0){var t=this.pm.data.player_playhead_time||0;e[e.length-1][1]=t}}},{key:`_updatePlaybackRange`,value:function(){var e,t=this.pm.data.player_playhead_time||0;if(!(!this.pm.disableAdPlaybackRangeFiltering&&(e=this.pm.adTracker)!=null&&e.isAdBreak&&this._lastPlayheadTime!==null&&t<this._lastPlayheadTime)){if(this._lastPlayheadTime!==null&&this._currentRangeStart!==null&&Math.abs(t-this._lastPlayheadTime)>1e3){var n=this.pm.data.video_playback_ranges;n&&n.length>0&&(n[n.length-1][1]=this._lastPlayheadTime),this._currentRangeStart=null}if(this._currentRangeStart===null){var r=this.pm.data.video_playback_ranges||[];r.length>0&&r[r.length-1][1]===t?this._currentRangeStart=r[r.length-1][0]:(this._currentRangeStart=t,r.push([t,t])),this.pm.data.video_playback_ranges=r}else this._updateLastRangeEnd();this._lastPlayheadTime=t}}},{key:`_endPlaybackRange`,value:function(){this._currentRangeStart!==null&&(this._updateLastRangeEnd(),this._currentRangeStart=null,this._lastPlayheadTime=null)}}]),e}(),jn=Object.freeze({CELLULAR:`cellular`,WIFI:`wifi`,WIRED:`wired`,OTHER:`other`,NO_CONNECTION:`no_connection`,UNKNOWN:`unknown`}),Mn=function(e){if(!e)return jn.UNKNOWN;switch(e){case`cellular`:case`wimax`:return jn.CELLULAR;case`wifi`:return jn.WIFI;case`ethernet`:return jn.WIRED;case`none`:return jn.NO_CONNECTION;case`bluetooth`:case`other`:return jn.OTHER;case`unknown`:return jn.UNKNOWN;default:return jn.OTHER}},Nn=function(e){return typeof e==`object`&&`connection`in e&&typeof e.connection==`object`},Pn=v(y()),Fn=function(){function e(t){var n=this;w(this,e),E(this,`pm`,void 0),E(this,`lastType`,void 0),E(this,`lastLowDataMode`,void 0),this.pm=t,this.pm.one(`viewinit`,function(){var t,r=n.emit.bind(n);r(),Pn.default.addEventListener(`online`,r),Pn.default.addEventListener(`offline`,r),(t=e.connection)==null||t.addEventListener(`change`,r),n.pm.on(`destroy`,function(){var t;(t=e.connection)==null||t.removeEventListener(`change`,r),Pn.default.removeEventListener(`online`,r),Pn.default.removeEventListener(`offline`,r)})})}return T(e,[{key:`type`,get:function(){var t;return Pn.default.navigator?.onLine===!1?jn.NO_CONNECTION:(t=e.connection)!=null&&t.type?Mn(e.connection.type):jn.UNKNOWN}},{key:`lowDataMode`,get:function(){return e.connection?.saveData}},{key:`emit`,value:function(){var e=this.type,t=this.lowDataMode;e===this.lastType&&t===this.lastLowDataMode||(this.lastType=e,this.lastLowDataMode=t,this.pm.emit(`networkchange`,at({viewer_connection_type:e},t!==void 0&&{viewer_connection_low_data_mode:t})))}}],[{key:`connection`,get:function(){return Nn(Pn.default.navigator)?Pn.default.navigator.connection:null}}]),e}(),In=`viewstart.ended.loadstart.pause.play.playing.ratechange.waiting.adplay.adpause.adended.aderror.adplaying.adrequest.adresponse.adbreakstart.adbreakend.adfirstquartile.admidpoint.adthirdquartile.rebufferstart.rebufferend.seeked.error.hb.requestcompleted.requestfailed.requestcanceled.renditionchange.networkchange.cdnchange.playbackmodechange`.split(`.`),Ln=new Set([`requestcompleted`,`requestfailed`,`requestcanceled`]),Rn=function(e){Xe(n,e);var t=tt(n);function n(e,r,i){w(this,n);var a=t.call(this);E(C(a),`pageLoadEndTime`,void 0),E(C(a),`pageLoadInitTime`,void 0),E(C(a),`_destroyed`,void 0),E(C(a),`_heartBeatTimeout`,void 0),E(C(a),`adTracker`,void 0),E(C(a),`dashjs`,void 0),E(C(a),`data`,void 0),E(C(a),`disablePlayheadRebufferTracking`,void 0),E(C(a),`disableRebufferTracking`,void 0),E(C(a),`disableAdPlaybackRangeFiltering`,void 0),E(C(a),`errorTracker`,void 0),E(C(a),`errorTranslator`,void 0),E(C(a),`emitTranslator`,void 0),E(C(a),`getAdData`,void 0),E(C(a),`getPlayheadTime`,void 0),E(C(a),`getStateData`,void 0),E(C(a),`stateDataTranslator`,void 0),E(C(a),`hlsjs`,void 0),E(C(a),`id`,void 0),E(C(a),`longResumeTracker`,void 0),E(C(a),`minimumRebufferDuration`,void 0),E(C(a),`mux`,void 0),E(C(a),`playbackEventDispatcher`,void 0),E(C(a),`playbackHeartbeat`,void 0),E(C(a),`playbackHeartbeatTime`,void 0),E(C(a),`playheadTime`,void 0),E(C(a),`seekingTracker`,void 0),E(C(a),`sustainedRebufferThreshold`,void 0),E(C(a),`watchTimeTracker`,void 0),E(C(a),`currentFragmentPDT`,void 0),E(C(a),`currentFragmentStart`,void 0),a.pageLoadInitTime=it.navigationStart(),a.pageLoadEndTime=it.domContentLoadedEventEnd(),a.mux=e,a.id=r,i!=null&&i.beaconDomain&&a.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),i=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:`litix.io`,sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,disableAdPlaybackRangeFiltering:!1,errorTranslator:function(e){return e},emitTranslator:function(){return[...arguments]},stateDataTranslator:function(e){return e}},i),i.data=i.data||{},i.data.property_key&&(i.data.env_key=i.data.property_key,delete i.data.property_key),S.level=i.debug?He.DEBUG:He.WARN,a.getPlayheadTime=i.getPlayheadTime,a.getStateData=i.getStateData||function(){return{}},a.getAdData=i.getAdData||function(){},a.minimumRebufferDuration=i.minimumRebufferDuration,a.sustainedRebufferThreshold=i.sustainedRebufferThreshold,a.playbackHeartbeatTime=i.playbackHeartbeatTime,a.disableRebufferTracking=i.disableRebufferTracking,a.disableRebufferTracking&&a.mux.log.warn(`Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.`),a.disablePlayheadRebufferTracking=i.disablePlayheadRebufferTracking,a.disableAdPlaybackRangeFiltering=i.disableAdPlaybackRangeFiltering,a.errorTranslator=i.errorTranslator,a.emitTranslator=i.emitTranslator,a.stateDataTranslator=i.stateDataTranslator,a.playbackEventDispatcher=new yn(e,i.data.env_key,i),a.data={player_instance_id:Fe(),mux_sample_rate:i.sampleRate,beacon_domain:i.beaconCollectionDomain||i.beaconDomain},a.data.view_sequence_number=1,a.data.player_sequence_number=1;var o=function(){this.data.view_start===void 0&&(this.data.view_start=this.mux.utils.now(),this.emit(`viewstart`),this.emit(`renditionchange`))}.bind(C(a));if(a.on(`viewinit`,function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one(`play`,o),this.one(`adbreakstart`,o)}),a.on(`videochange`,function(e,t){this._resetView(t)}),a.on(`programchange`,function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),o(),this.emit(`play`),this.emit(`playing`)}),a.on(`fragmentchange`,function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),a.on(`destroy`,a.destroy),typeof window<`u`&&typeof window.addEventListener==`function`&&typeof window.removeEventListener==`function`){var s=function(){var e=a.data.view_start!==void 0;a.mux.WINDOW_HIDDEN=document.visibilityState===`hidden`,e&&a.mux.WINDOW_HIDDEN&&(a.data.player_is_paused||a.emit(`hb`))};window.addEventListener(`visibilitychange`,s,!1);var c=function(e){e.persisted||a.destroy()};window.addEventListener(`pagehide`,c,!1),a.on(`destroy`,function(){window.removeEventListener(`visibilitychange`,s),window.removeEventListener(`pagehide`,c)})}return a.on(`playerready`,function(e,t){Object.assign(this.data,t)}),In.forEach(function(e){a.on(e,function(t,n){e.indexOf(`ad`)!==0&&this._updateStateData(),Object.assign(this.data,n),this._sanitizeData()}),a.on(`after`+e,function(){(e!==`error`||this.errorTracker.viewErrored)&&this.send(e)})}),a.on(`viewend`,function(e,t){Object.assign(a.data,t)}),a.one(`playerready`,function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),this.pageLoadInitTime=this.data.page_load_init_time||this.pageLoadInitTime,this.pageLoadEndTime=this.data.page_load_end_time||this.pageLoadEndTime,!this.mux.PLAYER_TRACKED&&this.pageLoadInitTime&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.pageLoadEndTime)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.pageLoadEndTime||1/0)-this.pageLoadInitTime)),this.send(`playerready`),delete this.data.player_startup_time,delete this.data.page_load_time}),a.longResumeTracker=new Sn(C(a)),a.errorTracker=new Ot(C(a)),new Ht(C(a)),a.seekingTracker=new Rt(C(a)),a.playheadTime=new jt(C(a)),a.playbackHeartbeat=new Dt(C(a)),new It(C(a)),a.watchTimeTracker=new kt(C(a)),new At(C(a)),new An(C(a)),a.adTracker=new Vt(C(a)),new Pt(C(a)),new Nt(C(a)),new Ft(C(a)),new bn(C(a)),new Dn(C(a)),new kn(C(a)),new Fn(C(a)),i.hlsjs&&a.addHLSJS(i),i.dashjs&&a.addDashJS(i),a.emit(`viewinit`,i.data),a}return T(n,[{key:`emit`,value:function(e,t){var r,i=Object.assign({viewer_time:this.mux.utils.now()},t),a=[e,i];if(this.emitTranslator)try{a=this.emitTranslator(e,i)}catch(e){this.mux.log.warn(`Exception in emit translator callback.`,e)}a!=null&&a.length&&(r=Je(Ke(n.prototype),`emit`,this)).call.apply(r,[this].concat(x(a)))}},{key:`destroy`,value:function(){this._destroyed||(this._destroyed=!0,this.data.view_start!==void 0&&(this.emit(`viewend`),this.send(`viewend`)),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:`send`,value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(t.video_source_is_live===void 0&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||[`player_program_time`,`player_manifest_newest_program_time`,`player_live_edge_program_time`,`player_program_time`,`video_holdback`,`video_part_holdback`,`video_target_duration`,`video_part_target_duration`].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var n=je(nt(t.video_source_url),2),r=n[0];t.video_source_domain=n[1],t.video_source_hostname=r}delete t.ad_request_id,t.video_playback_ranges&&(t.video_playback_range=JSON.stringify(t.video_playback_ranges.filter(function(e){return e[0]!==e[1]}).map(function(e){return`${e[0]}:${e[1]}`})),delete t.video_playback_ranges),this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,Ln.has(e)||this._restartHeartBeat(),e===`viewend`&&delete this.data.view_id}}},{key:`_resetView`,value:function(e){this.emit(`viewend`),this.send(`viewend`),this.emit(`viewinit`,e)}},{key:`_updateStateData`,value:function(){var e,t=this.getStateData();if(typeof this.stateDataTranslator==`function`)try{t=this.stateDataTranslator(t)}catch(e){this.mux.log.warn(`Exception in stateDataTranslator translator callback.`,e)}(e=this.data)!=null&&e.video_cdn&&t!=null&&t.video_cdn&&(t.video_cdn,t=Qe(t,[`video_cdn`])),Object.assign(this.data,t),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:`_sanitizeData`,value:function(){var e=this;[`player_width`,`player_height`,`video_source_width`,`video_source_height`,`player_playhead_time`,`video_source_bitrate`].forEach(function(t){var n=parseInt(e.data[t],10);e.data[t]=isNaN(n)?void 0:n}),[`player_source_url`,`video_source_url`].forEach(function(t){if(e.data[t]){var n=e.data[t].toLowerCase();(n.indexOf(`data:`)===0||n.indexOf(`blob:`)===0)&&(e.data[t]=`MSE style URL`)}})}},{key:`_resetVideoData`,value:function(){var e=this;Object.keys(this.data).forEach(function(t){t.indexOf(`video_`)===0&&delete e.data[t]})}},{key:`_resetViewData`,value:function(){var e=this;Object.keys(this.data).forEach(function(t){t.indexOf(`view_`)===0&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:`_resetErrorData`,value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:`_initializeViewData`,value:function(){var e=this,t=this.data.view_id=Fe(),n=function(){t===e.data.view_id&&O(e.data,`player_view_count`,1)};this.data.player_is_paused?this.one(`play`,n):n()}},{key:`_restartHeartBeat`,value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit(`hb`)},1e4)}},{key:`addHLSJS`,value:function(e){if(!e.hlsjs){this.mux.log.warn(`You must pass a valid hlsjs instance in order to track it.`);return}if(this.hlsjs){this.mux.log.warn(`An instance of HLS.js is already being monitored for this player.`);return}this.hlsjs=e.hlsjs,gt(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:`removeHLSJS`,value:function(){this.hlsjs&&=(_t(this.hlsjs),void 0)}},{key:`addDashJS`,value:function(e){if(!e.dashjs){this.mux.log.warn(`You must pass a valid dashjs instance in order to track it.`);return}if(this.dashjs){this.mux.log.warn(`An instance of Dash.js is already being monitored for this player.`);return}this.dashjs=e.dashjs,St(this.mux,this.id,e.dashjs)}},{key:`removeDashJS`,value:function(){this.dashjs&&=(Ct(this.dashjs),void 0)}}]),n}(Tt),zn=v(Te());function Bn(){return zn.default&&!!(zn.default.fullscreenElement||zn.default.webkitFullscreenElement||zn.default.mozFullScreenElement||zn.default.msFullscreenElement)}var Vn=[`loadstart`,`pause`,`play`,`playing`,`seeking`,`seeked`,`timeupdate`,`ratechange`,`stalled`,`waiting`,`error`,`ended`],Hn={1:`MEDIA_ERR_ABORTED`,2:`MEDIA_ERR_NETWORK`,3:`MEDIA_ERR_DECODE`,4:`MEDIA_ERR_SRC_NOT_SUPPORTED`};function Un(e,t,n){var r=je(Re(t),3),i=r[0],a=r[1],o=r[2],s=e.log,c=e.utils.getComputedStyle,l=e.utils.secondsToMs,u={automaticErrorTracking:!0};if(i){if(o!==`video`&&o!==`audio`)return s.error("The element of `"+a+"` was not a media element.")}else return s.error("No element was found with the `"+a+"` query selector.");i.mux&&(i.mux.destroy(),delete i.mux,s.warn(`Already monitoring this video element, replacing existing event listeners`)),n=Object.assign(u,n,{getPlayheadTime:function(){return l(i.currentTime)},getStateData:function(){var e,t,n=(e=this).getPlayheadTime?.call(e)||l(i.currentTime),r=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&typeof this.dashjs.getSource==`function`&&this.dashjs.getSource(),o={player_is_paused:i.paused,player_width:parseInt(c(i,`width`)),player_height:parseInt(c(i,`height`)),player_autoplay_on:i.autoplay,player_preload_on:i.preload,player_language_code:i.lang,player_is_fullscreen:Bn(),video_poster_url:i.poster,video_source_url:r||a||i.currentSrc,video_source_duration:l(i.duration),video_source_height:i.videoHeight,video_source_width:i.videoWidth,view_dropped_frame_count:i==null||(t=i.getVideoPlaybackQuality)==null?void 0:t.call(i).droppedVideoFrames};if(i.getStartDate&&n>0){var s=i.getStartDate();if(s&&typeof s.getTime==`function`&&s.getTime()){var u=s.getTime();o.player_program_time=u+n,i.seekable.length>0&&(o.player_live_edge_program_time=u+i.seekable.end(i.seekable.length-1))}}return o}}),n.data=Object.assign({player_software:`HTML5 Video Element`,player_mux_plugin_name:`VideoElementMonitor`,player_mux_plugin_version:e.VERSION},n.data),i.mux=i.mux||{},i.mux.deleted=!1,i.mux.emit=function(t,n){e.emit(a,t,n)},i.mux.updateData=function(e){i.mux.emit(`hb`,e)};var d=function(){s.error(`The monitor for this video element has already been destroyed.`)};i.mux.destroy=function(){Object.keys(i.mux.listeners).forEach(function(e){i.removeEventListener(e,i.mux.listeners[e],!1)}),delete i.mux.listeners,i.mux.fullscreenChangeListener&&(document.removeEventListener(`fullscreenchange`,i.mux.fullscreenChangeListener,!1),delete i.mux.fullscreenChangeListener),i.mux.destroy=d,i.mux.swapElement=d,i.mux.emit=d,i.mux.addHLSJS=d,i.mux.addDashJS=d,i.mux.removeHLSJS=d,i.mux.removeDashJS=d,i.mux.updateData=d,i.mux.setEmitTranslator=d,i.mux.setStateDataTranslator=d,i.mux.setGetPlayheadTime=d,i.mux.deleted=!0,e.emit(a,`destroy`)},i.mux.swapElement=function(t){var n=je(Re(t),3),r=n[0],a=n[1],o=n[2];if(r){if(o!==`video`&&o!==`audio`)return e.log.error("The element of `"+a+"` was not a media element.")}else return e.log.error("No element was found with the `"+a+"` query selector.");r.muxId=i.muxId,delete i.muxId,r.mux=r.mux||{},r.mux.listeners=Object.assign({},i.mux.listeners),delete i.mux.listeners,Object.keys(r.mux.listeners).forEach(function(e){i.removeEventListener(e,r.mux.listeners[e],!1),r.addEventListener(e,r.mux.listeners[e],!1)}),r.mux.fullscreenChangeListener=i.mux.fullscreenChangeListener,delete i.mux.fullscreenChangeListener,r.mux.swapElement=i.mux.swapElement,r.mux.destroy=i.mux.destroy,delete i.mux,i=r},i.mux.addHLSJS=function(t){e.addHLSJS(a,t)},i.mux.addDashJS=function(t){e.addDashJS(a,t)},i.mux.removeHLSJS=function(){e.removeHLSJS(a)},i.mux.removeDashJS=function(){e.removeDashJS(a)},i.mux.setEmitTranslator=function(t){e.setEmitTranslator(a,t)},i.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(a,t)},i.mux.setGetPlayheadTime=function(t){t||=n.getPlayheadTime,e.setGetPlayheadTime(a,t)},e.init(a,n),e.emit(a,`playerready`),i.paused||(e.emit(a,`play`),i.readyState>2&&e.emit(a,`playing`)),i.mux.listeners={},Vn.forEach(function(t){t===`error`&&!n.automaticErrorTracking||(i.mux.listeners[t]=function(){var n={};if(t===`error`){if(!i.error||i.error.code===1)return;n.player_error_code=i.error.code,n.player_error_message=Hn[i.error.code]||i.error.message}e.emit(a,t,n)},i.addEventListener(t,i.mux.listeners[t],!1))}),i.mux.listeners.enterpictureinpicture=function(){e.emit(a,`playbackmodechange`,{player_playback_mode:`pip`,player_playback_mode_data:`{}`})},i.mux.listeners.leavepictureinpicture=function(){var t=Bn()?`fullscreen`:`standard`;e.emit(a,`playbackmodechange`,{player_playback_mode:t,player_playback_mode_data:`{}`})},i.addEventListener(`enterpictureinpicture`,i.mux.listeners.enterpictureinpicture,!1),i.addEventListener(`leavepictureinpicture`,i.mux.listeners.leavepictureinpicture,!1),i.mux.fullscreenChangeListener=function(){var t=Bn(),n=document.fullscreenElement;if(t&&(n===i||n!=null&&n.contains(i)))e.emit(a,`playbackmodechange`,{player_playback_mode:`fullscreen`,player_playback_mode_data:`{}`});else if(!t){var r=document.pictureInPictureElement===i?`pip`:`standard`;e.emit(a,`playbackmodechange`,{player_playback_mode:r,player_playback_mode_data:`{}`})}},document.addEventListener(`fullscreenchange`,i.mux.fullscreenChangeListener,!1)}function Wn(e,t,n,r){var i=r;if(e&&typeof e[t]==`function`)try{i=e[t].apply(e,n)}catch(e){S.info(`safeCall error`,e)}return i}var Gn=v(y()),Kn;Gn.default&&Gn.default.WeakMap&&(Kn=new WeakMap);function qn(e,t){if(!e||!t||!Gn.default||typeof Gn.default.getComputedStyle!=`function`)return``;var n;return Kn&&Kn.has(e)&&(n=Kn.get(e)),n||(n=Gn.default.getComputedStyle(e,null),Kn&&Kn.set(e,n)),n.getPropertyValue(t)}function Jn(e){return Math.floor(e*1e3)}var Yn={TARGET_DURATION:`#EXT-X-TARGETDURATION`,PART_INF:`#EXT-X-PART-INF`,SERVER_CONTROL:`#EXT-X-SERVER-CONTROL`,INF:`#EXTINF`,PROGRAM_DATE_TIME:`#EXT-X-PROGRAM-DATE-TIME`,VERSION:`#EXT-X-VERSION`,SESSION_DATA:`#EXT-X-SESSION-DATA`},Xn=function(e){return this.buffer=``,this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};Xn.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf(`
`);t>-1;t=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},Xn.prototype.processLine=function(e){var t=rr(e,e.indexOf(`:`)),n=t[0],r=t.length===2?$n(t[1]):void 0;if(n[0]!==`#`)this.currentUri.uri=n,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!(`duration`in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(n){case Yn.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case Yn.PART_INF:Zn(this.manifest,t),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case Yn.SERVER_CONTROL:Zn(this.manifest,t),this.setHoldBack();break;case Yn.INF:r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case Yn.PROGRAM_DATE_TIME:var i=r,a=new Date(i);this.manifest.dateTimeString||(this.manifest.dateTimeString=i,this.manifest.dateTimeObject=a),this.currentUri.dateTimeString=i,this.currentUri.dateTimeObject=a;break;case Yn.VERSION:Zn(this.manifest,t);break;case Yn.SESSION_DATA:var o=pt(ir(t[1]));Object.assign(this.manifest.sessionData,o)}},Xn.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,n=e.targetDuration,r=e.partTargetDuration;if(t){var i=`holdBack`,a=`partHoldBack`,o=n&&n*3,s=r&&r*2;n&&!t.hasOwnProperty(i)&&(t[i]=o),o&&t[i]<o&&(t[i]=o),r&&!t.hasOwnProperty(a)&&(t[a]=r*3),r&&t[a]<s&&(t[a]=s)}};var Zn=function(e,t){var n=Qn(t[0].replace(`#EXT-X-`,``)),r;nr(t[1])?(r={},r=Object.assign(tr(t[1]),r)):r=$n(t[1]),e[n]=r},Qn=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},$n=function(e){if(e.toLowerCase()===`yes`||e.toLowerCase()===`no`)return e.toLowerCase()===`yes`;var t=e.indexOf(`:`)===-1?parseFloat(e):e;return isNaN(t)?e:t},er=function(e){var t={},n=e.split(`=`);if(n.length>1){var r=Qn(n[0]);t[r]=$n(n[1])}return t},tr=function(e){for(var t=e.split(`,`),n={},r=0;t.length>r;r++){var i=t[r],a=er(i);n=Object.assign(a,n)}return n},nr=function(e){return e.indexOf(`=`)>-1},rr=function(e,t){return t===-1?[e]:[e.substring(0,t),e.substring(t+1)]},ir=function(e){var t={};if(e){var n=e.search(`,`);return[e.slice(0,n),e.slice(n+1)].forEach(function(e,n){for(var r=e.replace(/['"]+/g,``).split(`=`),i=0;i<r.length;i++)r[i]===`DATA-ID`&&(t[`DATA-ID`]=r[1-i]),r[i]===`VALUE`&&(t.VALUE=r[1-i])}),{data:t}}},ar={safeCall:Wn,safeIncrement:O,getComputedStyle:qn,secondsToMs:Jn,assign:Object.assign,headersStringToObject:dt,cdnHeadersToRequestId:ft,extractHostnameAndDomain:nt,extractHostname:D,manifestParser:Xn,generateShortID:Ie,generateUUID:Fe,now:b.now,findMediaElement:Re},or={PLAYER_READY:`playerready`,VIEW_INIT:`viewinit`,VIDEO_CHANGE:`videochange`,PLAY:`play`,PAUSE:`pause`,PLAYING:`playing`,TIME_UPDATE:`timeupdate`,SEEKING:`seeking`,SEEKED:`seeked`,REBUFFER_START:`rebufferstart`,REBUFFER_END:`rebufferend`,ERROR:`error`,ENDED:`ended`,RENDITION_CHANGE:`renditionchange`,ORIENTATION_CHANGE:`orientationchange`,PLAYBACK_MODE_CHANGE:`playbackmodechange`,NETWORK_CHANGE:`networkchange`,AD_REQUEST:`adrequest`,AD_RESPONSE:`adresponse`,AD_BREAK_START:`adbreakstart`,AD_PLAY:`adplay`,AD_PLAYING:`adplaying`,AD_PAUSE:`adpause`,AD_FIRST_QUARTILE:`adfirstquartile`,AD_MID_POINT:`admidpoint`,AD_THIRD_QUARTILE:`adthirdquartile`,AD_ENDED:`adended`,AD_BREAK_END:`adbreakend`,AD_ERROR:`aderror`,REQUEST_COMPLETED:`requestcompleted`,REQUEST_FAILED:`requestfailed`,REQUEST_CANCELLED:`requestcanceled`,HEARTBEAT:`hb`,DESTROY:`destroy`},sr=`mux-embed`,cr=`5.18.1`,lr=`2.1`,k={},ur=function(e){var t=arguments;typeof e==`string`?ur.hasOwnProperty(e)?Me.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),ur[e].apply(null,t)},0):S.warn("`"+e+"` is an unknown task"):typeof e==`function`?Me.default.setTimeout(function(){e(ur)},0):S.warn("`"+e+"` is invalid.")},dr={loaded:b.now(),NAME:sr,VERSION:cr,API_VERSION:lr,PLAYER_TRACKED:!1,monitor:function(e,t){return Un(ur,e,t)},destroyMonitor:function(e){var t=je(Re(e),1)[0];t&&t.mux&&typeof t.mux.destroy==`function`?t.mux.destroy():S.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var n=Le(e);k[n]?k[n].addHLSJS(t):S.error("A monitor for `"+n+"` has not been initialized.")},addDashJS:function(e,t){var n=Le(e);k[n]?k[n].addDashJS(t):S.error("A monitor for `"+n+"` has not been initialized.")},removeHLSJS:function(e){var t=Le(e);k[t]?k[t].removeHLSJS():S.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=Le(e);k[t]?k[t].removeDashJS():S.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){We()&&t&&t.respectDoNotTrack&&S.info(`The browser's Do Not Track flag is enabled - Mux beaconing is disabled.`);var n=Le(e);k[n]=new Rn(ur,n,t)},emit:function(e,t,n){var r=Le(e);k[r]?(k[r].emit(t,n),t===`destroy`&&delete k[r]):S.error("A monitor for `"+r+"` has not been initialized.")},updateData:function(e,t){var n=Le(e);k[n]?k[n].emit(`hb`,t):S.error("A monitor for `"+n+"` has not been initialized.")},setEmitTranslator:function(e,t){var n=Le(e);k[n]?k[n].emitTranslator=t:S.error("A monitor for `"+n+"` has not been initialized.")},setStateDataTranslator:function(e,t){var n=Le(e);k[n]?k[n].stateDataTranslator=t:S.error("A monitor for `"+n+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var n=Le(e);k[n]?k[n].getPlayheadTime=t:S.error("A monitor for `"+n+"` has not been initialized.")},checkDoNotTrack:We,log:S,utils:ar,events:or,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(ur,dr),Me.default!==void 0&&typeof Me.default.addEventListener==`function`&&Me.default.addEventListener(`pagehide`,function(e){e.persisted||(ur.WINDOW_UNLOADING=!0)},!1);var fr=ur,A=h,j={VIDEO:`video`,THUMBNAIL:`thumbnail`,STORYBOARD:`storyboard`,DRM:`drm`},M={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},pr=e=>e===j.VIDEO?`playback`:e,mr=class e extends Error{constructor(t,n=e.MEDIA_ERR_CUSTOM,r,i){super(t),this.name=`MediaError`,this.code=n,this.context=i,this.fatal=r??(n>=e.MEDIA_ERR_NETWORK&&n<=e.MEDIA_ERR_ENCRYPTED),this.message||=e.defaultMessages[this.code]??``}};mr.MEDIA_ERR_ABORTED=1,mr.MEDIA_ERR_NETWORK=2,mr.MEDIA_ERR_DECODE=3,mr.MEDIA_ERR_SRC_NOT_SUPPORTED=4,mr.MEDIA_ERR_ENCRYPTED=5,mr.MEDIA_ERR_CUSTOM=100,mr.defaultMessages={1:`You aborted the media playback`,2:`A network error caused the media download to fail.`,3:`A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.`,4:`An unsupported error occurred. The server or network failed, or your browser does not support this format.`,5:`The media is encrypted and there are no keys to decrypt it.`};var N=mr,hr=e=>e==null,gr=(e,t)=>hr(t)?!1:e in t,_r={ANY:`any`,MUTED:`muted`},P={ON_DEMAND:`on-demand`,LIVE:`live`,UNKNOWN:`unknown`},vr={MSE:`mse`,NATIVE:`native`},yr={HEADER:`header`,QUERY:`query`,NONE:`none`},br=Object.values(yr),xr={M3U8:`application/vnd.apple.mpegurl`,MP4:`video/mp4`},Sr={HLS:xr.M3U8};[...Object.values(xr)];var Cr={upTo720p:`720p`,upTo1080p:`1080p`,upTo1440p:`1440p`,upTo2160p:`2160p`},wr={noLessThan480p:`480p`,noLessThan540p:`540p`,noLessThan720p:`720p`,noLessThan1080p:`1080p`,noLessThan1440p:`1440p`,noLessThan2160p:`2160p`},Tr={DESCENDING:`desc`},Er={code:`en`},F=(e,t,n,r,i=e)=>{i.addEventListener(t,n,r),e.addEventListener(`teardown`,()=>{i.removeEventListener(t,n)},{once:!0})};function Dr(e,t,n){t&&n>t&&(n=t);for(let t=0;t<e.length;t++)if(e.start(t)<=n&&e.end(t)>=n)return!0;return!1}var Or=e=>{let t=e.indexOf(`?`);return t<0?[e]:[e.slice(0,t),e.slice(t)]},kr=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return gr(e,Sr)?Sr[e]:t}return Mr(e)},Ar=e=>e===`VOD`?P.ON_DEMAND:P.LIVE,jr=e=>e===`EVENT`?1/0:e===`VOD`?NaN:0,Mr=e=>{let{src:t}=e;if(!t)return``;let n=``;try{n=Fr(t).pathname}catch{console.error(`Invalid url when trying to infer mime type`,t)}let r=n.lastIndexOf(`.`);if(r<0)return Lr(e)?xr.M3U8:``;let i=n.slice(r+1).toUpperCase();return gr(i,xr)?xr[i]:``},Nr=e=>{try{return new URL(e),!1}catch{return!0}},Pr=e=>e.split(`
`).find((e,t,n)=>t>0&&n[t-1].startsWith(`#EXT-X-STREAM-INF`)),Fr=(e,t)=>{if(!Nr(e))return new URL(e);let n=(window==null?void 0:window.location)?.href,r=t??n;return t&&Nr(t.toString())&&(r=new URL(t,n)),new URL(e,r)},Ir=`mux.com`,Lr=({src:e,customDomain:t=Ir})=>{let n;try{n=new URL(`${e}`)}catch{return!1}let r=n.protocol===`https:`,i=n.hostname===`stream.${t}`.toLowerCase(),a=n.pathname.split(`/`),o=a.length===2,s=!(a!=null&&a[1].includes(`.`));return r&&i&&o&&s},Rr=e=>{let t=(e??``).split(`.`)[1];if(t)try{let e=t.replace(/-/g,`+`).replace(/_/g,`/`),n=decodeURIComponent(atob(e).split(``).map(function(e){return`%`+(`00`+e.charCodeAt(0).toString(16)).slice(-2)}).join(``));return JSON.parse(n)}catch{return}},zr=({exp:e},t=Date.now())=>!e||e*1e3<t,Br=({sub:e},t)=>e!==t,Vr=({aud:e},t)=>!e,Hr=({aud:e},t)=>e!==t,Ur=`en`;function I(e,t=!0){var n;return new Wr(t&&(n=Er?.[e])!=null?n:e,t?Er.code:Ur)}var Wr=class{constructor(e,t=(e=>(e=Er)??Ur)()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,n)=>e[n]??``)}toString(){return this.message}},Gr=Object.values(_r),Kr=e=>typeof e==`boolean`||typeof e==`string`&&Gr.includes(e),qr=(e,t,n)=>{let{autoplay:r}=e,i=!1,a=!1,o=Kr(r)?r:!!r,s=()=>{i||F(t,`playing`,()=>{i=!0},{once:!0})};if(s(),F(t,`loadstart`,()=>{i=!1,s(),Jr(t,o)},{once:!0}),F(t,`loadstart`,()=>{n||(a=e.streamType&&e.streamType!==P.UNKNOWN?e.streamType===P.LIVE:!Number.isFinite(t.duration)),Jr(t,o)},{once:!0}),n&&n.once(A.Events.LEVEL_LOADED,(t,n)=>{a=e.streamType&&e.streamType!==P.UNKNOWN?e.streamType===P.LIVE:n.details.live??!1}),!o){let r=()=>{!a||Number.isFinite(e.startTime)||(n!=null&&n.liveSyncPosition?t.currentTime=n.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};n&&F(t,`play`,()=>{t.preload===`metadata`?n.once(A.Events.LEVEL_UPDATED,r):r()},{once:!0})}return e=>{i||(o=Kr(e)?e:!!e,Jr(t,o))}},Jr=(e,t)=>{if(!t)return;let n=e.muted,r=()=>e.muted=n;switch(t){case _r.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(r)});break;case _r.MUTED:e.muted=!0,e.play().catch(r);break;default:e.play().catch(()=>{});break}},Yr=({preload:e,src:t},n,r)=>{let i=e=>{e!=null&&[``,`none`,`metadata`,`auto`].includes(e)?n.setAttribute(`preload`,e):n.removeAttribute(`preload`)};if(!r)return i(e),i;let a=!1,o=!1,s=r.config.maxBufferLength,c=r.config.maxBufferSize,l=e=>{i(e);let t=e??n.preload;o||t===`none`||(t===`metadata`?(r.config.maxBufferLength=1,r.config.maxBufferSize=1):(r.config.maxBufferLength=s,r.config.maxBufferSize=c),u())},u=()=>{!a&&t&&(a=!0,r.loadSource(t))};return F(n,`play`,()=>{o=!0,r.config.maxBufferLength=s,r.config.maxBufferSize=c,u()},{once:!0}),l(e),l},Xr=(e,t,n)=>{let{minPreloadSegments:r}=e;if(r==null||r<=0||!n)return;let i=0,a=!1,o=t.playbackRate||1,s=()=>{t.playbackRate!==0&&(o=t.playbackRate,t.playbackRate=0)};t.playbackRate=0,F(t,`ratechange`,s);let c=(e,{frag:n})=>{a||n.type!==`main`||(i++,i>=r&&(a=!0,t.removeEventListener(`ratechange`,s),t.playbackRate=o))};n.on(A.Events.FRAG_BUFFERED,c),t.addEventListener(`teardown`,()=>{a||(a=!0,n.off(A.Events.FRAG_BUFFERED,c),t.playbackRate=o)},{once:!0})},Zr=(e,t,n)=>{let{initialEstimateSegments:r}=e;if(r==null||r<=0||!n)return;let i=0;n.on(A.Events.FRAG_BUFFERED,(e,{frag:t})=>{t.type===`main`&&(i++,i<r&&n.abrController.resetEstimator(n.config.abrEwmaDefaultEstimate))})};function Qr(e,t){var n;if(!(`videoTracks`in e))return;let r=new WeakMap;t.on(A.Events.MANIFEST_PARSED,function(t,n){c();let i=e.addVideoTrack(`main`);i.selected=!0;for(let[e,t]of n.levels.entries()){let n=i.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);r.set(t,`${e}`),n.id=`${e}`}}),t.on(A.Events.AUDIO_TRACKS_UPDATED,function(t,n){s();for(let t of n.audioTracks){let n=t.default?`main`:`alternative`,r=e.addAudioTrack(n,t.name,t.lang);r.id=`${t.id}`,t.default&&(r.enabled=!0)}});let i=()=>{let n=+[...e.audioTracks].find(e=>e.enabled)?.id,r=t.audioTracks.map(e=>e.id);n!=t.audioTrack&&r.includes(n)&&(t.audioTrack=n)};e.audioTracks.addEventListener(`change`,i),t.on(A.Events.LEVELS_UPDATED,function(t,n){let i=e.videoTracks[e.videoTracks.selectedIndex??0];if(!i)return;let a=n.levels.map(e=>r.get(e));for(let t of e.videoRenditions)t.id&&!a.includes(t.id)&&i.removeRendition(t)});let a=e=>{let n=e.target.selectedIndex;n!=t.nextLevel&&(t.nextLevel=n)};(n=e.videoRenditions)==null||n.addEventListener(`change`,a);let o=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},c=()=>{o(),s()};t.once(A.Events.DESTROYING,()=>{var t,n;c(),(t=e.audioTracks)==null||t.removeEventListener(`change`,i),(n=e.videoRenditions)==null||n.removeEventListener(`change`,a)})}var $r=e=>`time`in e?e.time:e.startTime;function ei(e,t){t.on(A.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(n,{tracks:r})=>{r.forEach(n=>{let r=n.subtitleTrack??n.closedCaptions,i=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==r?.lang&&t===n.label&&i.toLowerCase()===n.kind),a=n._id??n.default?`default`:`${n.kind}${i}`;ti(e,n.kind,n.label,r?.lang,a,n.default)})});let n=()=>{if(!t.subtitleTracks.length)return;let n=Array.from(e.textTracks).find(e=>e.id&&e.mode===`showing`&&[`subtitles`,`captions`].includes(e.kind));if(!n)return;let r=t.subtitleTracks[t.subtitleTrack],i=r?r.default?`default`:`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;(t.subtitleTrack<0||n?.id!==i)&&(t.subtitleTrack=t.subtitleTracks.findIndex(({lang:e,name:t,type:r,default:i})=>n.id===`default`&&i||e==n.language&&t===n.label&&r.toLowerCase()===n.kind)),n?.id===i&&n.cues&&Array.from(n.cues).forEach(e=>{n.addCue(e)})};e.textTracks.addEventListener(`change`,n),t.on(A.Events.CUES_PARSED,(t,{track:n,cues:r})=>{let i=e.textTracks.getTrackById(n);if(!i)return;let a=i.mode===`disabled`;a&&(i.mode=`hidden`),r.forEach(e=>{var t;(t=i.cues)!=null&&t.getCueById(e.id)||i.addCue(e)}),a&&(i.mode=`disabled`)}),t.once(A.Events.DESTROYING,()=>{e.textTracks.removeEventListener(`change`,n),e.querySelectorAll(`track[data-removeondestroy]`).forEach(e=>{e.remove()})});let r=()=>{Array.from(e.textTracks).forEach(t=>{var n;if(![`subtitles`,`caption`].includes(t.kind)&&(t.label===`thumbnails`||t.kind===`chapters`)){if(!((n=t.cues)!=null&&n.length)){let n=`track`;t.kind&&(n+=`[kind="${t.kind}"]`),t.label&&(n+=`[label="${t.label}"]`);let r=e.querySelector(n),i=r?.getAttribute(`src`)??``;r?.removeAttribute(`src`),setTimeout(()=>{r?.setAttribute(`src`,i)},0)}t.mode!==`hidden`&&(t.mode=`hidden`)}})};t.once(A.Events.MANIFEST_LOADED,r),t.once(A.Events.MEDIA_ATTACHED,r)}function ti(e,t,n,r,i,a){let o=document.createElement(`track`);return o.kind=t,o.label=n,r&&(o.srclang=r),i&&(o.id=i),a&&(o.default=!0),o.track.mode=[`subtitles`,`captions`].includes(t)?`disabled`:`hidden`,o.setAttribute(`data-removeondestroy`,``),e.append(o),o.track}function ni(e,t){Array.prototype.find.call(e.querySelectorAll(`track`),e=>e.track===t)?.remove()}function ri(e,t,n){return Array.from(e.querySelectorAll(`track`)).find(e=>e.track.label===t&&e.track.kind===n)?.track}async function ii(e,t,n,r){let i=ri(e,n,r);return i||(i=ti(e,r,n),i.mode=`hidden`,await new Promise(e=>setTimeout(()=>e(void 0),0))),i.mode!==`hidden`&&(i.mode=`hidden`),[...t].sort((e,t)=>$r(t)-$r(e)).forEach(t=>{let n=t.value,a=$r(t);if(`endTime`in t&&t.endTime!=null)i?.addCue(new VTTCue(a,t.endTime,r===`chapters`?n:JSON.stringify(n??null)));else{let t=Array.prototype.findIndex.call(i?.cues,e=>e.startTime>=a),o=i?.cues?.[t],s=o?o.startTime:Number.isFinite(e.duration)?e.duration:2**53-1,c=i?.cues?.[t-1];c&&(c.endTime=a),i?.addCue(new VTTCue(a,s,r===`chapters`?n:JSON.stringify(n??null)))}}),e.textTracks.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),i}var ai=`cuepoints`,oi=Object.freeze({label:ai});async function si(e,t,n=oi){return ii(e,t,n.label,`metadata`)}var ci=e=>({time:e.startTime,value:JSON.parse(e.text)});function li(e,t={label:ai}){let n=ri(e,t.label,`metadata`);return n!=null&&n.cues?Array.from(n.cues,e=>ci(e)):[]}function ui(e,t={label:ai}){var n;let r=ri(e,t.label,`metadata`);if(!((n=r?.activeCues)!=null&&n.length))return;if(r.activeCues.length===1)return ci(r.activeCues[0]);let{currentTime:i}=e;return ci(Array.prototype.find.call(r.activeCues??[],({startTime:e,endTime:t})=>e<=i&&t>i)||r.activeCues[0])}async function di(e,t=oi){return new Promise(n=>{F(e,`loadstart`,async()=>{let r=await si(e,[],t);F(e,`cuechange`,()=>{let t=ui(e);if(t){let n=new CustomEvent(`cuepointchange`,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(n)}},{},r),n(r)})})}var fi=`chapters`,pi=Object.freeze({label:fi}),mi=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function hi(e,t,n=pi){return ii(e,t,n.label,`chapters`)}function gi(e,t={label:fi}){var n;let r=ri(e,t.label,`chapters`);return(n=r?.cues)!=null&&n.length?Array.from(r.cues,e=>mi(e)):[]}function _i(e,t={label:fi}){var n;let r=ri(e,t.label,`chapters`);if(!((n=r?.activeCues)!=null&&n.length))return;if(r.activeCues.length===1)return mi(r.activeCues[0]);let{currentTime:i}=e;return mi(Array.prototype.find.call(r.activeCues??[],({startTime:e,endTime:t})=>e<=i&&t>i)||r.activeCues[0])}async function vi(e,t=pi){return new Promise(n=>{F(e,`loadstart`,async()=>{let r=await hi(e,[],t);F(e,`cuechange`,()=>{let t=_i(e);if(t){let n=new CustomEvent(`chapterchange`,{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(n)}},{},r),n(r)})})}function yi(e,t){if(t){let n=t.playingDate;if(n!=null)return new Date(n.getTime()-e.currentTime*1e3)}return typeof e.getStartDate==`function`?e.getStartDate():new Date(NaN)}function bi(e,t){if(t&&t.playingDate)return t.playingDate;if(typeof e.getStartDate==`function`){let t=e.getStartDate();return new Date(t.getTime()+e.currentTime*1e3)}return new Date(NaN)}var xi={VIDEO:`v`,THUMBNAIL:`t`,STORYBOARD:`s`,DRM:`d`},Si=e=>{if(e===j.VIDEO)return xi.VIDEO;if(e===j.DRM)return xi.DRM},Ci=(e,t)=>{var n;let r=pr(e),i=`${r}Token`;return(n=t.tokens)!=null&&n[r]?t.tokens?.[r]:gr(i,t)?t[i]:void 0},wi=(e,t,n,r,i=!1,a=!(e=>(e=globalThis.navigator)?.onLine)())=>{if(a){let n=I(`Your device appears to be offline`,i),r=N.MEDIA_ERR_NETWORK,a=new N(n,r,!1,void 0);return a.errorCategory=t,a.muxCode=M.NETWORK_OFFLINE,a.data=e,a}let o=`status`in e?e.status:e.code,s=Date.now(),c=N.MEDIA_ERR_NETWORK;if(o===200)return;let l=pr(t),u=Ci(t,n),d=Si(t),[f]=Or(n.playbackId??``);if(!o||!f)return;let p=Rr(u);if(u&&!p){let n=new N(I(`The {tokenNamePrefix}-token provided is invalid or malformed.`,i).format({tokenNamePrefix:l}),c,!0,I(`Compact JWT string: {token}`,i).format({token:u}));return n.errorCategory=t,n.muxCode=M.NETWORK_TOKEN_MALFORMED,n.data=e,n}if(o>=500){let e=new N(``,c,r??!0);return e.errorCategory=t,e.muxCode=M.NETWORK_UNKNOWN_ERROR,e}if(o===403)if(p){if(zr(p,s)){let n={timeStyle:`medium`,dateStyle:`medium`},r=new N(I(`The video’s secured {tokenNamePrefix}-token has expired.`,i).format({tokenNamePrefix:l}),c,!0,I(`Expired at: {expiredDate}. Current time: {currentDate}.`,i).format({expiredDate:new Intl.DateTimeFormat(`en`,n).format(p.exp??0),currentDate:new Intl.DateTimeFormat(`en`,n).format(s)}));return r.errorCategory=t,r.muxCode=M.NETWORK_TOKEN_EXPIRED,r.data=e,r}if(Br(p,f)){let n=new N(I(`The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.`,i).format({tokenNamePrefix:l}),c,!0,I(`Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}`,i).format({tokenNamePrefix:l,playbackId:f,tokenPlaybackId:p.sub}));return n.errorCategory=t,n.muxCode=M.NETWORK_TOKEN_SUB_MISMATCH,n.data=e,n}if(Vr(p,d)){let n=new N(I(`The {tokenNamePrefix}-token is formatted with incorrect information.`,i).format({tokenNamePrefix:l}),c,!0,I(`The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.`,i).format({tokenNamePrefix:l,expectedAud:d}));return n.errorCategory=t,n.muxCode=M.NETWORK_TOKEN_AUD_MISSING,n.data=e,n}if(Hr(p,d)){let n=new N(I(`The {tokenNamePrefix}-token is formatted with incorrect information.`,i).format({tokenNamePrefix:l}),c,!0,I(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`,i).format({tokenNamePrefix:l,expectedAud:d,aud:p.aud}));return n.errorCategory=t,n.muxCode=M.NETWORK_TOKEN_AUD_MISMATCH,n.data=e,n}}else{let n=I(`Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.`,i).format({tokenNamePrefix:l,category:t}),a=I(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new N(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=M.NETWORK_TOKEN_MISSING,o.data=e,o}if(o===412){let a=I(`This playback-id may belong to a live stream that is not currently active or an asset that is not ready.`,i),o=I(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),s=new N(a,c,r??!0,o);return s.errorCategory=t,s.muxCode=M.NETWORK_NOT_READY,s.streamType=n.streamType===P.LIVE?`live`:n.streamType===P.ON_DEMAND?`on-demand`:`unknown`,s.data=e,s}if(o===404){let n=I(`This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.`,i),a=I(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new N(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=M.NETWORK_NOT_FOUND,o.data=e,o}if(o===400){let n=I(`The URL or playback-id was invalid. You may have used an invalid value as a playback-id.`),a=I(`Specified playback ID: {playbackId}`,i).format({playbackId:f}),o=new N(n,c,r??!0,a);return o.errorCategory=t,o.muxCode=M.NETWORK_INVALID_URL,o.data=e,o}let m=new N(``,c,r??!0);return m.errorCategory=t,m.muxCode=M.NETWORK_UNKNOWN_ERROR,m.data=e,m},Ti=A.DefaultConfig.capLevelController,Ei={"720p":921600,"1080p":2073600,"1440p":4194304,"2160p":8294400};function Di(e){return Ei[e.toLowerCase().trim()]}var Oi=class e extends Ti{constructor(e){super(e)}static setMaxAutoResolution(t,n){n?e.maxAutoResolution.set(t,n):e.maxAutoResolution.delete(t)}getMaxAutoResolution(){let t=this.hls;return e.maxAutoResolution.get(t)??void 0}get levels(){return this.hls.levels??[]}getValidLevels(e){return this.levels.filter((t,n)=>this.isLevelAllowed(t)&&n<=e)}getMaxLevelCapped(e){let t=this.getValidLevels(e),n=this.getMaxAutoResolution();if(!n)return super.getMaxLevel(e);let r=Di(n);if(!r)return super.getMaxLevel(e);let i=t.filter(e=>e.width*e.height<=r),a=i.findIndex(e=>e.width*e.height===r);if(a!==-1){let e=i[a];return t.findIndex(t=>t===e)}if(i.length===0)return 0;let o=i[i.length-1];return t.findIndex(e=>e===o)}getMaxLevel(t){if(this.getMaxAutoResolution()!==void 0)return this.getMaxLevelCapped(t);let n=super.getMaxLevel(t),r=this.getValidLevels(t);if(!r[n])return n;let i=Math.min(r[n].width,r[n].height),a=e.minMaxResolution;return i>=a?n:Ti.getMaxLevelByMediaSize(r,16/9*a,a)}};Oi.minMaxResolution=720,Oi.maxAutoResolution=new WeakMap;var ki=Oi,Ai=`com.apple.fps.1_0`,ji=`application/vnd.apple.mpegurl`,Mi=({mediaEl:e,getAppCertificate:t,getLicenseKey:n,saveAndDispatchError:r,drmTypeCb:i})=>{if(!window.WebKitMediaKeys||!(`onwebkitneedkey`in e)){console.error(`No WebKitMediaKeys. FairPlay may not be supported`);let t=new N(I(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=j.DRM,t.muxCode=M.ENCRYPTED_CDM_ERROR,r(e,t),()=>{}}let a=e,o=t(),s=null,c=e=>{(async()=>{try{a.webkitKeys||l();let t=await o;if(e.initData===null||t==null)return;u(Ni(e.initData,t))}catch(e){console.error(`Could not start encrypted playback due to exception`,e),r(a,e)}})()},l=()=>{try{let e=new WebKitMediaKeys(Ai);a.webkitSetMediaKeys(e),i()}catch{let e=new N(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`,N.MEDIA_ERR_ENCRYPTED,!0);throw e.errorCategory=j.DRM,e.muxCode=M.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,e}},u=t=>{let i=a.webkitKeys.createSession(ji,t),o=async t=>{try{let e=t.message,r=await n(e);i.update(r)}catch(t){console.error(`Error on FairPlay session message`,t),r(e,t)}},c=t=>{let n=t.target.error;if(!n)return;console.error(`Internal Webkit Key Session Error - sysCode: ${n.systemCode} code: ${n.code}`);let i=new N(I(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=j.DRM,i.muxCode=M.ENCRYPTED_CDM_ERROR,r(e,i)},l=()=>{i.removeEventListener(`webkitkeymessage`,o),i.removeEventListener(`webkitkeyerror`,c),e.removeEventListener(`teardown`,l),`webkitCurrentPlaybackTargetIsWireless`in e&&e.removeEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,l),s=null;try{i.close()}catch{}};`webkitCurrentPlaybackTargetIsWireless`in e&&e.addEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,l,{once:!0}),i.addEventListener(`webkitkeymessage`,o),i.addEventListener(`webkitkeyerror`,c),e.addEventListener(`teardown`,l),s=l},d=()=>{e.removeEventListener(`webkitneedkey`,c),e.removeEventListener(`teardown`,d),s?.();try{a.webkitSetMediaKeys(null)}catch{}};return e.addEventListener(`webkitneedkey`,c),e.addEventListener(`teardown`,d,{once:!0}),d},Ni=(e,t)=>{let n=Fi(Pi(e)),r=new Uint8Array(e),i=new Uint8Array(n),a=new Uint8Array(t),o=r.byteLength+4+a.byteLength+4+i.byteLength,s=new Uint8Array(o),c=0,l=e=>{s.set(e,c),c+=e.byteLength},u=e=>{let t=new DataView(s.buffer),n=e.byteLength;t.setUint32(c,n,!0),c+=4,l(e)};return l(r),u(i),u(a),s},Pi=e=>new TextDecoder(`utf-16le`).decode(e).replace(`skd://`,``).slice(1);function Fi(e){let t=new ArrayBuffer(e.length*2),n=new DataView(t);for(let t=0;t<e.length;t++)n.setUint16(t*2,e.charCodeAt(t),!0);return t}var Ii=({mediaEl:e,getAppCertificate:t,getLicenseKey:n,saveAndDispatchError:r,drmTypeCb:i,fallbackToWebkitFairplay:a})=>{let o=null,s=async t=>{try{let n=t.initDataType;if(n!==`skd`){console.error(`Received unexpected initialization data type "${n}"`);return}e.mediaKeys||await c(n);let r=t.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${t.type} event`);return}await l(n,r)}catch(t){r(e,t);return}},c=async n=>{let a=await navigator.requestMediaKeySystemAccess(`com.apple.fps`,[{initDataTypes:[n],videoCapabilities:[{contentType:`application/vnd.apple.mpegurl`,robustness:``}],distinctiveIdentifier:`not-allowed`,persistentState:`not-allowed`,sessionTypes:[`temporary`]}]).then(e=>(i(),e)).catch(()=>{let t=new N(I(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=j.DRM,t.muxCode=M.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,r(e,t)});if(!a)return;let o=await a.createMediaKeys();try{let e=await t();await o.setServerCertificate(e).catch(()=>{let e=new N(I(`Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.`),N.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=j.DRM,e.muxCode=M.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(e)})}catch(t){r(e,t);return}await e.setMediaKeys(o)},l=async(t,i)=>{let s=e.mediaKeys.createSession(),c=async t=>{let i=t.message,a=await n(i);try{await s.update(a)}catch{let t=new N(I(`Failed to update DRM license. This may be an issue with the player or your protected content.`),N.MEDIA_ERR_ENCRYPTED,!0);t.errorCategory=j.DRM,t.muxCode=M.ENCRYPTED_UPDATE_LICENSE_FAILED,r(e,t)}},l=()=>{let t=t=>{let n;t===`internal-error`?(n=new N(I(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,!0),n.errorCategory=j.DRM,n.muxCode=M.ENCRYPTED_CDM_ERROR):(t===`output-restricted`||t===`output-downscaled`)&&(n=new N(I(`DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.`),N.MEDIA_ERR_ENCRYPTED,!1),n.errorCategory=j.DRM,n.muxCode=M.ENCRYPTED_OUTPUT_RESTRICTED),n&&r(e,n)};s.keyStatuses.forEach(e=>t(e))};s.addEventListener(`keystatuseschange`,l),s.addEventListener(`message`,c);let u=async()=>{s.removeEventListener(`keystatuseschange`,l),s.removeEventListener(`message`,c),`webkitCurrentPlaybackTargetIsWireless`in e&&e.removeEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,u),e.removeEventListener(`teardown`,u),await s.close().catch(e=>{console.warn(`There was an error when closing EME session`,e)}),o=null};`webkitCurrentPlaybackTargetIsWireless`in e&&e.addEventListener(`webkitcurrentplaybacktargetiswirelesschanged`,u,{once:!0}),e.addEventListener(`teardown`,u,{once:!0}),o=u,await s.generateRequest(t,i).catch(async t=>{if(t.name===`NotSupportedError`&&`webkitCurrentPlaybackTargetIsWireless`in e&&e.webkitCurrentPlaybackTargetIsWireless)console.warn(`Failed to generate a DRM license request. Attempting to fallback to Webkit DRM`),a?.();else{let e=new N(I(`Failed to generate a DRM license request. This may be an issue with the player or your protected content.`),N.MEDIA_ERR_ENCRYPTED,!0);return e.errorCategory=j.DRM,e.muxCode=M.ENCRYPTED_GENERATE_REQUEST_FAILED,console.error(`Failed to generate license request`,t),Promise.reject(e)}})},u=async()=>{e.removeEventListener(`encrypted`,s),e.removeEventListener(`teardown`,u),o&&await o(),await e.setMediaKeys(null).catch(()=>{})};return e.addEventListener(`encrypted`,s),e.addEventListener(`teardown`,u,{once:!0}),u},Li={FAIRPLAY:`fairplay`,PLAYREADY:`playready`,WIDEVINE:`widevine`},Ri=e=>{if(e.includes(`fps`))return Li.FAIRPLAY;if(e.includes(`playready`))return Li.PLAYREADY;if(e.includes(`widevine`))return Li.WIDEVINE},zi=(e,t)=>{let n=Pr(e);if(!n)return Promise.reject(Error(`No media playlist URL found in multivariant playlist`));if(Nr(n)&&!t)return Promise.reject(Error(`masterPlaylistUrl is required to resolve relative media playlist URL`));let r;try{r=Fr(n,t)}catch(e){return Promise.reject(e)}return fetch(r).then(e=>e.status===200?e.text():Promise.reject(e))},Bi=e=>{let t=e.split(`
`).filter(e=>e.startsWith(`#EXT-X-SESSION-DATA`));if(!t.length)return{};let n={};for(let e of t){let t=Hi(e),r=t[`DATA-ID`];r&&(n[r]={...t})}return{sessionData:n}},Vi=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Hi(e){let t=[...e.matchAll(Vi)];return Object.fromEntries(t.map(([,e,t])=>[e,t]))}var Ui=e=>{let t=e.split(`
`),n=(t.find(e=>e.startsWith(`#EXT-X-PLAYLIST-TYPE`))??``).split(`:`)[1]?.trim(),r=Ar(n),i=jr(n),a;if(r===P.LIVE){let e=t.find(e=>e.startsWith(`#EXT-X-PART-INF`));a=e?e.split(`:`)[1].split(`=`)[1]*2:(t.find(e=>e.startsWith(`#EXT-X-TARGETDURATION`))?.split(`:`)?.[1]??6)*3}return{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a}},Wi=async(e,t)=>{if(t===xr.MP4)return{streamType:P.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===xr.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let n=await t.text(),r=await zi(n,t.url);return{...Bi(n),...Ui(r)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},Gi=async(e,t,n=kr({src:e}))=>{let{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,sessionData:o}=await Wi(e,n),s=o?.[`com.apple.hls.chapters`];(s!=null&&s.URI||s!=null&&s.VALUE.toLocaleLowerCase().startsWith(`http`))&&Ki(s.URI??s.VALUE,t),(L.get(t)??{}).liveEdgeStartOffset=a,(L.get(t)??{}).targetLiveWindow=i,t.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0})),(L.get(t)??{}).streamType=r,t.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}))},Ki=async(e,t)=>{var n;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let i=await r.json(),a={};if(!((n=i?.[0])!=null&&n.metadata))return;for(let e of i[0].metadata)e.key&&e.value&&(a[e.key]=e.value);(L.get(t)??{}).metadata=a;let o=new CustomEvent(`muxmetadata`);t.dispatchEvent(o)}catch(e){console.error(e)}},qi=e=>{var t;let n=e.type,r=Ar(n),i=jr(n),a,o=!!((t=e.partList)!=null&&t.length);return r===P.LIVE&&(a=o?e.partTarget*2:e.targetduration*3),{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,lowLatency:o}},Ji=(e,t,n)=>{let{streamType:r,targetLiveWindow:i,liveEdgeStartOffset:a,lowLatency:o}=qi(e);if(r===P.LIVE){o?(n.config.backBufferLength=n.userConfig.backBufferLength??4,n.config.maxFragLookUpTolerance=n.userConfig.maxFragLookUpTolerance??.001,n.config.abrBandWidthUpFactor=n.userConfig.abrBandWidthUpFactor??n.config.abrBandWidthFactor):n.config.backBufferLength=n.userConfig.backBufferLength??8;let e=Object.freeze({get length(){return t.seekable.length},start(e){return t.seekable.start(e)},end(e){return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):n.liveSyncPosition??t.seekable.end(e)}});(L.get(t)??{}).seekable=e}(L.get(t)??{}).liveEdgeStartOffset=a,(L.get(t)??{}).targetLiveWindow=i,t.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0})),(L.get(t)??{}).streamType=r,t.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}))},Yi=(globalThis==null?void 0:globalThis.navigator)?.userAgent??``,Xi=(globalThis==null?void 0:globalThis.navigator)?.userAgentData?.platform??``,Zi=Yi.toLowerCase().includes(`android`)||[`x11`,`android`].some(e=>Xi.toLowerCase().includes(e)),Qi=e=>/^((?!chrome|android).)*safari/i.test(Yi)&&!!e.canPlayType(`application/vnd.apple.mpegurl`),L=new WeakMap,$i=`mux.com`,ea,ta=(ea=A).isSupported?.call(ea),na=e=>Zi||!Qi(e),ra=()=>{if(typeof window<`u`)return fr.utils.now()},ia=fr.utils.generateUUID,aa=({playbackId:e,customDomain:t=$i,maxResolution:n,minResolution:r,renditionOrder:i,programStartTime:a,programEndTime:o,assetStartTime:s,assetEndTime:c,playbackToken:l,tokens:{playback:u=l}={},extraSourceParams:d={}}={})=>{if(!e)return;let[f,p=``]=Or(e),m=new URL(`https://stream.${t}/${f}.m3u8${p}`);return u||m.searchParams.has(`token`)?(m.searchParams.forEach((e,t)=>{t!=`token`&&m.searchParams.delete(t)}),u&&m.searchParams.set(`token`,u)):(n&&m.searchParams.set(`max_resolution`,n),r&&(m.searchParams.set(`min_resolution`,r),n&&+n.slice(0,-1)<+r.slice(0,-1)&&console.error(`minResolution must be <= maxResolution`,`minResolution`,r,`maxResolution`,n)),i&&m.searchParams.set(`rendition_order`,i),a&&m.searchParams.set(`program_start_time`,`${a}`),o&&m.searchParams.set(`program_end_time`,`${o}`),s&&m.searchParams.set(`asset_start_time`,`${s}`),c&&m.searchParams.set(`asset_end_time`,`${c}`),Object.entries(d).forEach(([e,t])=>{t!=null&&m.searchParams.set(e,t)})),m.toString()},oa=e=>{if(!e)return;let[t]=e.split(`?`);return t||void 0},sa=e=>{if(!e||!e.startsWith(`https://stream.`))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},ca=e=>{var t,n;return(t=e?.metadata)!=null&&t.video_id?e.metadata.video_id:Na(e)&&(n=oa(e.playbackId)??sa(e.src))!=null?n:e.src},la=e=>L.get(e)?.error,ua=e=>L.get(e)?.metadata,da=e=>L.get(e)?.streamType??P.UNKNOWN,fa=e=>L.get(e)?.targetLiveWindow??NaN,pa=e=>L.get(e)?.seekable??e.seekable,ma=e=>{let t=L.get(e)?.liveEdgeStartOffset;if(typeof t!=`number`)return NaN;let n=pa(e);return n.length?n.end(n.length-1)-t:NaN},ha=e=>L.get(e)?.coreReference,ga=.034,_a=(e,t,n=ga)=>Math.abs(e-t)<=n,va=(e,t,n=ga)=>e>t||_a(e,t,n),ya=(e,t=ga)=>e.paused&&va(e.currentTime,e.duration,t),ba=(e,t)=>{if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?t.levels?.[t.currentLevel]?.details:t.levels.find(e=>!!e.details)?.details;if(!n||n.live)return;let{fragments:r}=n;if(!(r!=null&&r.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let i=r[r.length-1];if(e.currentTime<=i.start)return!1;let a=i.start+i.duration/2,o=e.buffered.start(e.buffered.length-1),s=e.buffered.end(e.buffered.length-1);return a>o&&a<s},xa=(e,t)=>e.ended||e.loop?e.ended:t&&ba(e,t)?!0:ya(e),Sa=(e,t,n)=>{Ca(t,n,e);let{metadata:r={}}=e,{view_session_id:i=ia()}=r,a=ca(e);r.view_session_id=i,r.video_id=a,e.metadata=r,e.drmTypeCb=e=>{var n;(n=t.mux)==null||n.emit(`hb`,{view_drm_type:e})},e.fallbackToWebkitFairplay=async()=>{let n=!t.paused,r=t.currentTime;e.useWebkitFairplay=!0;let i=e.muxDataKeepSession;e.muxDataKeepSession=!0,Sa(e,t,L.get(t)?.coreReference),e.muxDataKeepSession=i,e.useWebkitFairplay=!1,n&&await t.play().then(()=>{t.currentTime=r}).catch(()=>{}),t.currentTime=r},L.set(t,{retryCount:0});let o=Ta(e,t),s=Yr(e,t,o);e!=null&&e.muxDataKeepSession&&t!=null&&t.mux&&!t.mux.deleted?o&&t.mux.addHLSJS({hlsjs:o,Hls:o?A:void 0}):Fa(e,t,o),Ia(e,t,o),di(t),vi(t);let c=qr(e,t,o);Xr(e,t,o),Zr(e,t,o);let l={engine:o,setAutoplay:c,setPreload:s},u=L.get(t);return u&&(u.coreReference=l),l},Ca=(e,t,n)=>{let r=t?.engine;e!=null&&e.mux&&!e.mux.deleted&&(n!=null&&n.muxDataKeepSession?r&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),r&&(r.detachMedia(),r.destroy()),e&&(e.hasAttribute(`src`)&&(e.removeAttribute(`src`),e.load()),e.removeEventListener(`error`,Ra),e.removeEventListener(`error`,Ba),e.removeEventListener(`durationchange`,La),L.delete(e),e.dispatchEvent(new Event(`teardown`)))};function wa(e,t){let n=kr(e);if(n!==xr.M3U8)return!0;let r=!n||(t.canPlayType(n)??!0),{preferPlayback:i}=e,a=i===vr.MSE,o=i===vr.NATIVE,s=ta&&(a||na(t));return r&&(o||!s)}var Ta=(e,t)=>{let{debug:n,streamType:r,startTime:i=-1,metadata:a,preferCmcd:o,_hlsConfig:s={},maxAutoResolution:c,initialBandwidthEstimateKbps:l}=e,u=kr(e)===xr.M3U8,d=wa(e,t);if(u&&!d&&ta){let u={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelOnFPSDrop:!0,...l==null?{}:{abrEwmaDefaultEstimate:l*1e3}},d=Ea(r),f=Da(e),p=[yr.QUERY,yr.HEADER].includes(o)?{useHeaders:o===yr.HEADER,sessionId:a?.view_session_id,contentId:a?.video_id}:void 0,m=Pa(e,s),h=new A({debug:n,startPosition:i,cmcd:p,xhrSetup:(e,t)=>{if(o&&o!==yr.QUERY)return;let n=Fr(t);if(!n.searchParams.has(`CMCD`))return;let r=(n.searchParams.get(`CMCD`)?.split(`,`)??[]).filter(e=>e.startsWith(`sid`)||e.startsWith(`cid`)).join(`,`);n.searchParams.set(`CMCD`,r),e.open(`GET`,n)},...u,...m,...d,...f,...s});return m.capLevelController===ki&&c!==void 0&&ki.setMaxAutoResolution(h,c),h.on(A.Events.MANIFEST_PARSED,async function(e,n){let r=n.sessionData?.[`com.apple.hls.chapters`];(r!=null&&r.URI||r!=null&&r.VALUE.toLocaleLowerCase().startsWith(`http`))&&Ki(r?.URI??r?.VALUE,t)}),h}},Ea=e=>e===P.LIVE?{backBufferLength:8}:{},Da=e=>{let{tokens:{drm:t}={},playbackId:n,drmTypeCb:r}=e,i=oa(n);return!t||!i?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:ja(e,`fairplay`),serverCertificateUrl:Ma(e,`fairplay`)},"com.widevine.alpha":{licenseUrl:ja(e,`widevine`)},"com.microsoft.playready":{licenseUrl:ja(e,`playready`)}},requestMediaKeySystemAccessFunc:(e,t)=>(e===`com.widevine.alpha`&&(t=[...t.map(e=>{let t=e.videoCapabilities?.map(e=>({...e,robustness:`HW_SECURE_ALL`}));return{...e,videoCapabilities:t}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let n=Ri(e);return r?.(n),t}))}},Oa=async e=>{let t=await fetch(e);return t.status===200?await t.arrayBuffer():Promise.reject(t)},ka=async(e,t)=>{let n=await fetch(t,{method:`POST`,headers:{"Content-type":`application/octet-stream`},body:e});if(n.status!==200)return Promise.reject(n);let r=await n.arrayBuffer();return new Uint8Array(r)},Aa=(e,t)=>{let n={mediaEl:t,getAppCertificate:()=>Oa(Ma(e,`fairplay`)).catch(t=>{if(t instanceof Response){let n=wi(t,j.DRM,e);return console.error(`mediaError`,n?.message,n?.context),n?Promise.reject(n):Promise.reject(Error(`Unexpected error in app cert request`))}return Promise.reject(t)}),getLicenseKey:t=>ka(t,ja(e,`fairplay`)).catch(t=>{if(t instanceof Response){let n=wi(t,j.DRM,e);return console.error(`mediaError`,n?.message,n?.context),n?Promise.reject(n):Promise.reject(Error(`Unexpected error in license key request`))}return Promise.reject(t)}),saveAndDispatchError:za,drmTypeCb:()=>{var t;(t=e.drmTypeCb)==null||t.call(e,Li.FAIRPLAY)}};if(e.useWebkitFairplay)Mi(n);else{let t=Ii({fallbackToWebkitFairplay:async()=>{var n;await t(),(n=e.fallbackToWebkitFairplay)==null||n.call(e)},...n})}},ja=({playbackId:e,tokens:{drm:t}={},customDomain:n=$i},r)=>{let i=oa(e);return`https://license.${n.toLocaleLowerCase().endsWith($i)?n:$i}/license/${r}/${i}?token=${t}`},Ma=({playbackId:e,tokens:{drm:t}={},customDomain:n=$i},r)=>{let i=oa(e);return`https://license.${n.toLocaleLowerCase().endsWith($i)?n:$i}/appcert/${r}/${i}?token=${t}`},Na=({playbackId:e,src:t,customDomain:n})=>{if(e)return!0;if(typeof t!=`string`)return!1;let r=window==null?void 0:window.location.href,i=new URL(t,r).hostname.toLocaleLowerCase();return i.includes($i)||!!n&&i.includes(n.toLocaleLowerCase())},Pa=(e,t)=>{let n={};return n.capLevelToPlayerSize=e.capRenditionToPlayerSize,n.capLevelToPlayerSize==null?(n.capLevelController=ki,n.capLevelToPlayerSize=!0):n.capLevelController=m,n},Fa=(e,t,n)=>{let{envKey:r,disableTracking:i,muxDataSDK:a=fr,muxDataSDKOptions:o={}}=e,s=Na(e);if(!i&&(r||s)){let{playerInitTime:i,playerSoftwareName:s,playerSoftwareVersion:c,beaconCollectionDomain:l,debug:u,disableCookies:d}=e,f={...e.metadata,video_title:e?.metadata?.video_title||void 0};a.monitor(t,{debug:u,beaconCollectionDomain:l,hlsjs:n,Hls:n?A:void 0,automaticErrorTracking:!1,errorTranslator:t=>typeof t.player_error_code==`string`?!1:typeof e.errorTranslator==`function`?e.errorTranslator(t):t,disableCookies:d,...o,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:c,player_init_time:i,...f}})}},Ia=(e,t,n)=>{var r;let i=wa(e,t),{src:a,customDomain:o=$i}=e,s=()=>{t.ended||e.disablePseudoEnded||!xa(t,n)||(ba(t,n)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event(`ended`)))},c,l,u=()=>{let e=pa(t),n,r;e.length>0&&(n=e.start(0),r=e.end(0)),(l!==r||c!==n)&&t.dispatchEvent(new CustomEvent(`seekablechange`,{composed:!0})),c=n,l=r};if(F(t,`durationchange`,u),t&&i){let n=kr(e);if(typeof a==`string`){if(a.endsWith(`.mp4`)&&a.includes(o)){let e=sa(a);Ki(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let i=()=>{if(da(t)!==P.LIVE||Number.isFinite(t.duration))return;let e=setInterval(u,1e3);t.addEventListener(`teardown`,()=>{clearInterval(e)},{once:!0}),F(t,`durationchange`,()=>{Number.isFinite(t.duration)&&clearInterval(e)})},s=async()=>Gi(a,t,n).then(i).catch(n=>{if(n instanceof Response){let r=wi(n,j.VIDEO,e);if(r){za(t,r);return}}else n instanceof Error});if(t.preload===`none`){let e=()=>{s(),t.removeEventListener(`loadedmetadata`,n)},n=()=>{s(),t.removeEventListener(`play`,e)};F(t,`play`,e,{once:!0}),F(t,`loadedmetadata`,n,{once:!0})}else s();(r=e.tokens)!=null&&r.drm?Aa(e,t):F(t,`encrypted`,()=>{let e=new N(I(`Attempting to play DRM-protected content without providing a DRM token.`),N.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=j.DRM,e.muxCode=M.ENCRYPTED_MISSING_TOKEN,za(t,e)},{once:!0}),t.setAttribute(`src`,a),e.startTime&&((L.get(t)??{}).startTime=e.startTime,t.addEventListener(`durationchange`,La,{once:!0}))}else t.removeAttribute(`src`);t.addEventListener(`error`,Ra),t.addEventListener(`error`,Ba),t.addEventListener(`emptied`,()=>{t.querySelectorAll(`track[data-removeondestroy]`).forEach(e=>{e.remove()})},{once:!0}),F(t,`pause`,s),F(t,`seeked`,s),F(t,`play`,()=>{t.ended||va(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else n&&a?(n.once(A.Events.LEVEL_LOADED,(e,r)=>{Ji(r.details,t,n),u(),da(t)===P.LIVE&&!Number.isFinite(t.duration)&&(n.on(A.Events.LEVEL_UPDATED,u),F(t,`durationchange`,()=>{Number.isFinite(t.duration)&&n.off(A.Events.LEVELS_UPDATED,u)}))}),n.on(A.Events.ERROR,(r,i)=>{let a=Va(i,e);if(a.muxCode===M.NETWORK_NOT_READY){let e=L.get(t)??{},r=e.retryCount??0;if(r<6){let o=r===0?5e3:6e4,s=new N(`Retrying in ${o/1e3} seconds...`,a.code,a.fatal);Object.assign(s,a),za(t,s);let c=setTimeout(()=>{e.retryCount=r+1,i.details===`manifestLoadError`&&i.url&&n.loadSource(i.url)},o);t.addEventListener(`teardown`,()=>clearTimeout(c),{once:!0});return}else{e.retryCount=0;let n=new N(`Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>`,a.code,a.fatal);Object.assign(n,a),za(t,n);return}}za(t,a)}),n.on(A.Events.MANIFEST_LOADED,()=>{let e=L.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event(`emptied`)),t.dispatchEvent(new Event(`loadstart`)))}),t.addEventListener(`error`,Ba),F(t,`waiting`,s),Qr(e,n),ei(t,n),n.attachMedia(t)):console.error(`It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.`)};function La(e){let t=e.target,n=L.get(t)?.startTime;if(n&&Dr(t.seekable,t.duration,n)){let e=t.preload===`auto`;e&&(t.preload=`none`),t.currentTime=n,e&&(t.preload=`auto`)}}async function Ra(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(t!=null&&t.error))return;let{message:n,code:r}=t.error,i=new N(n,r);if(t.src&&r===N.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{(la(t)??t.error)?.code===N.MEDIA_ERR_SRC_NOT_SUPPORTED&&za(t,i)},500);return}if(t.src&&(r!==N.MEDIA_ERR_DECODE||r!==void 0))try{let{status:e}=await fetch(t.src);i.data={response:{code:e}}}catch{}za(t,i)}function za(e,t){t.fatal&&((L.get(e)??{}).error=t,e.dispatchEvent(new CustomEvent(`error`,{detail:t})))}function Ba(e){var t;if(!(e instanceof CustomEvent)||!(e.detail instanceof N))return;let n=e.target,r=e.detail;!r||!r.fatal||((L.get(n)??{}).error=r,(t=n.mux)==null||t.emit(`error`,{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var Va=(e,t)=>{e.fatal?console.error(`getErrorFromHlsErrorData()`,e):t.debug&&console.warn(`getErrorFromHlsErrorData() (non-fatal)`,e);let n={[A.ErrorTypes.NETWORK_ERROR]:N.MEDIA_ERR_NETWORK,[A.ErrorTypes.MEDIA_ERROR]:N.MEDIA_ERR_DECODE,[A.ErrorTypes.KEY_SYSTEM_ERROR]:N.MEDIA_ERR_ENCRYPTED},r=e=>[A.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,A.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?N.MEDIA_ERR_NETWORK:n[e.type],i=e=>{if(e.type===A.ErrorTypes.KEY_SYSTEM_ERROR)return j.DRM;if(e.type===A.ErrorTypes.NETWORK_ERROR)return j.VIDEO},a,o=r(e);if(o===N.MEDIA_ERR_NETWORK&&e.response){let n=i(e)??j.VIDEO;a=wi(e.response,n,t,e.fatal)??new N(``,o,e.fatal)}else o===N.MEDIA_ERR_ENCRYPTED?e.details===A.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?(a=new N(I(`Attempting to play DRM-protected content without providing a DRM token.`),N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_MISSING_TOKEN):e.details===A.ErrorDetails.KEY_SYSTEM_NO_ACCESS?(a=new N(I(`Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===A.ErrorDetails.KEY_SYSTEM_NO_SESSION?(a=new N(I(`Failed to generate a DRM license request. This may be an issue with the player or your protected content.`),N.MEDIA_ERR_ENCRYPTED,!0),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===A.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?(a=new N(I(`Failed to update DRM license. This may be an issue with the player or your protected content.`),N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===A.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?(a=new N(I(`Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.`),N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===A.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?(a=new N(I(`The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.`),N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_CDM_ERROR):e.details===A.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?(a=new N(I(`DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.`),N.MEDIA_ERR_ENCRYPTED,!1),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_OUTPUT_RESTRICTED):(a=new N(e.error.message,N.MEDIA_ERR_ENCRYPTED,e.fatal),a.errorCategory=j.DRM,a.muxCode=M.ENCRYPTED_ERROR):a=new N(``,o,e.fatal);return a.context||=`${e.url?`url: ${e.url}
`:``}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:``}${e.reason?`failure reason: ${e.reason}
`:``}${e.level?`level: ${e.level}
`:``}${e.parent?`parent stream controller: ${e.parent}
`:``}${e.buffer?`buffer length: ${e.buffer}
`:``}${e.error?`error: ${e.error}
`:``}${e.event?`event: ${e.event}
`:``}${e.err?`error message: ${e.err?.message}
`:``}`,a.data=e,a},Ha=e=>{throw TypeError(e)},Ua=(e,t,n)=>t.has(e)||Ha(`Cannot `+n),R=(e,t,n)=>(Ua(e,t,`read from private field`),n?n.call(e):t.get(e)),z=(e,t,n)=>t.has(e)?Ha(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,r)=>(Ua(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Wa=(e,t,n)=>(Ua(e,t,`access private method`),n),Ga=(()=>{try{return`0.31.0`}catch{}return`UNKNOWN`})(),Ka=()=>Ga,qa=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,V={BEACON_COLLECTION_DOMAIN:`beacon-collection-domain`,CUSTOM_DOMAIN:`custom-domain`,DEBUG:`debug`,DISABLE_TRACKING:`disable-tracking`,DISABLE_COOKIES:`disable-cookies`,DISABLE_PSEUDO_ENDED:`disable-pseudo-ended`,DRM_TOKEN:`drm-token`,PLAYBACK_TOKEN:`playback-token`,ENV_KEY:`env-key`,MAX_RESOLUTION:`max-resolution`,MIN_RESOLUTION:`min-resolution`,MAX_AUTO_RESOLUTION:`max-auto-resolution`,RENDITION_ORDER:`rendition-order`,PROGRAM_START_TIME:`program-start-time`,PROGRAM_END_TIME:`program-end-time`,ASSET_START_TIME:`asset-start-time`,ASSET_END_TIME:`asset-end-time`,METADATA_URL:`metadata-url`,PLAYBACK_ID:`playback-id`,PLAYER_SOFTWARE_NAME:`player-software-name`,PLAYER_SOFTWARE_VERSION:`player-software-version`,PLAYER_INIT_TIME:`player-init-time`,PREFER_CMCD:`prefer-cmcd`,PREFER_PLAYBACK:`prefer-playback`,START_TIME:`start-time`,STREAM_TYPE:`stream-type`,TARGET_LIVE_WINDOW:`target-live-window`,LIVE_EDGE_OFFSET:`live-edge-offset`,TYPE:`type`,LOGO:`logo`,CAP_RENDITION_TO_PLAYER_SIZE:`cap-rendition-to-player-size`,INITIAL_BANDWIDTH_ESTIMATE_KBPS:`initial-bandwidth-estimate-kbps`,INITIAL_ESTIMATE_SEGMENTS:`initial-estimate-segments`,MIN_PRELOAD_SEGMENTS:`min-preload-segments`},Ja=Object.values(V),Ya=Ka(),Xa=`mux-video`,Za,Qa,$a,eo,to,no,ro,io,ao,oo,H,so,co,lo,uo=class extends p{constructor(){super(),z(this,H),z(this,Za),z(this,Qa),z(this,$a,{}),z(this,eo,{}),z(this,to),z(this,no),z(this,ro),z(this,io),z(this,ao,``),z(this,oo,e=>{let t=ua(this.nativeEl),n=this.metadata??{};this.metadata={...t,...n},t?.[`com.mux.video.branding`]===`mux-free-plan`&&(B(this,ao,`default`),this.updateLogo())}),z(this,co),B(this,Qa,ra())}static get NAME(){return Xa}static get VERSION(){return Ya}static get observedAttributes(){return[...Ja,...p.observedAttributes??[]]}static getLogoHTML(e){return!e||e===`false`?``:e===`default`?qa:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){return`
      ${p.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(e[V.LOGO]??``)}
      </slot>
    `}get preferCmcd(){return this.getAttribute(V.PREFER_CMCD)??void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?br.includes(e)?this.setAttribute(V.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${br.join()}`):this.removeAttribute(V.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(V.PLAYER_INIT_TIME)?+this.getAttribute(V.PLAYER_INIT_TIME):R(this,Qa)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(V.PLAYER_INIT_TIME):this.setAttribute(V.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){return R(this,ro)??Xa}set playerSoftwareName(e){B(this,ro,e)}get playerSoftwareVersion(){return R(this,no)??Ya}set playerSoftwareVersion(e){B(this,no,e)}get _hls(){return R(this,H,so)?.engine}get mux(){return this.nativeEl?.mux}get error(){return la(this.nativeEl)??null}get errorTranslator(){return R(this,io)}set errorTranslator(e){B(this,io,e)}get src(){return this.getAttribute(`src`)}set src(e){e!==this.src&&(e==null?this.removeAttribute(`src`):this.setAttribute(`src`,e))}get type(){return this.getAttribute(V.TYPE)??void 0}set type(e){e!==this.type&&(e?this.setAttribute(V.TYPE,e):this.removeAttribute(V.TYPE))}get preload(){let e=this.getAttribute(`preload`);return e===``?`auto`:[`none`,`metadata`,`auto`].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute(`preload`)&&([``,`none`,`metadata`,`auto`].includes(e)?this.setAttribute(`preload`,e):this.removeAttribute(`preload`))}get debug(){return this.getAttribute(V.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(V.DEBUG,``):this.removeAttribute(V.DEBUG))}get disableTracking(){return this.hasAttribute(V.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(V.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(V.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(V.DISABLE_COOKIES,``):this.removeAttribute(V.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(V.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(V.DISABLE_PSEUDO_ENDED,``):this.removeAttribute(V.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(V.START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(V.START_TIME):this.setAttribute(V.START_TIME,`${e}`))}get initialBandwidthEstimateKbps(){let e=this.getAttribute(V.INITIAL_BANDWIDTH_ESTIMATE_KBPS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialBandwidthEstimateKbps(e){e!==this.initialBandwidthEstimateKbps&&(e==null?this.removeAttribute(V.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(V.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`))}get initialEstimateSegments(){let e=this.getAttribute(V.INITIAL_ESTIMATE_SEGMENTS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set initialEstimateSegments(e){e!==this.initialEstimateSegments&&(e==null?this.removeAttribute(V.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(V.INITIAL_ESTIMATE_SEGMENTS,`${e}`))}get minPreloadSegments(){let e=this.getAttribute(V.MIN_PRELOAD_SEGMENTS);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set minPreloadSegments(e){e!==this.minPreloadSegments&&(e==null?this.removeAttribute(V.MIN_PRELOAD_SEGMENTS):this.setAttribute(V.MIN_PRELOAD_SEGMENTS,`${e}`))}get playbackId(){return this.hasAttribute(V.PLAYBACK_ID)?this.getAttribute(V.PLAYBACK_ID):sa(this.src)??void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(V.PLAYBACK_ID,e):this.removeAttribute(V.PLAYBACK_ID))}get maxResolution(){return this.getAttribute(V.MAX_RESOLUTION)??void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(V.MAX_RESOLUTION,e):this.removeAttribute(V.MAX_RESOLUTION))}get minResolution(){return this.getAttribute(V.MIN_RESOLUTION)??void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(V.MIN_RESOLUTION,e):this.removeAttribute(V.MIN_RESOLUTION))}get maxAutoResolution(){return this.getAttribute(V.MAX_AUTO_RESOLUTION)??void 0}set maxAutoResolution(e){e==null?this.removeAttribute(V.MAX_AUTO_RESOLUTION):this.setAttribute(V.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){return this.getAttribute(V.RENDITION_ORDER)??void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(V.RENDITION_ORDER,e):this.removeAttribute(V.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(V.PROGRAM_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){e==null?this.removeAttribute(V.PROGRAM_START_TIME):this.setAttribute(V.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(V.PROGRAM_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){e==null?this.removeAttribute(V.PROGRAM_END_TIME):this.setAttribute(V.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(V.ASSET_START_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){e==null?this.removeAttribute(V.ASSET_START_TIME):this.setAttribute(V.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(V.ASSET_END_TIME);if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){e==null?this.removeAttribute(V.ASSET_END_TIME):this.setAttribute(V.ASSET_END_TIME,`${e}`)}get customDomain(){return this.getAttribute(V.CUSTOM_DOMAIN)??void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(V.CUSTOM_DOMAIN,e):this.removeAttribute(V.CUSTOM_DOMAIN))}get capRenditionToPlayerSize(){return this._hlsConfig?.capLevelToPlayerSize==null?R(this,co):this._hlsConfig.capLevelToPlayerSize}set capRenditionToPlayerSize(e){B(this,co,e)}get drmToken(){return this.getAttribute(V.DRM_TOKEN)??void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(V.DRM_TOKEN,e):this.removeAttribute(V.DRM_TOKEN))}get playbackToken(){if(this.hasAttribute(V.PLAYBACK_TOKEN))return this.getAttribute(V.PLAYBACK_TOKEN)??void 0;if(this.hasAttribute(V.PLAYBACK_ID)){let[,e]=Or(this.playbackId??``);return new URLSearchParams(e).get(`token`)??void 0}if(this.src)return new URLSearchParams(this.src).get(`token`)??void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(V.PLAYBACK_TOKEN,e):this.removeAttribute(V.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(V.PLAYBACK_TOKEN),t=this.getAttribute(V.DRM_TOKEN);return{...R(this,eo),...e==null?{}:{playback:e},...t==null?{}:{drm:t}}}set tokens(e){B(this,eo,e??{})}get ended(){return xa(this.nativeEl,this._hls)}get envKey(){return this.getAttribute(V.ENV_KEY)??void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(V.ENV_KEY,e):this.removeAttribute(V.ENV_KEY))}get beaconCollectionDomain(){return this.getAttribute(V.BEACON_COLLECTION_DOMAIN)??void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(V.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(V.BEACON_COLLECTION_DOMAIN))}get streamType(){return this.getAttribute(V.STREAM_TYPE)??da(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(V.STREAM_TYPE,e):this.removeAttribute(V.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(V.TARGET_LIVE_WINDOW)?+this.getAttribute(V.TARGET_LIVE_WINDOW):fa(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(V.TARGET_LIVE_WINDOW):this.setAttribute(V.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){if(this.hasAttribute(V.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:e}=this,t=this.nativeEl.seekable.end(0)??0,n=this.nativeEl.seekable.start(0)??0;return Math.max(n,t-e)}return ma(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(V.LIVE_EDGE_OFFSET))return+this.getAttribute(V.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(V.LIVE_EDGE_OFFSET):this.setAttribute(V.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return pa(this.nativeEl)}async addCuePoints(e){return si(this.nativeEl,e)}get activeCuePoint(){return ui(this.nativeEl)}get cuePoints(){return li(this.nativeEl)}async addChapters(e){return hi(this.nativeEl,e)}get activeChapter(){return _i(this.nativeEl)}get chapters(){return gi(this.nativeEl)}getStartDate(){return yi(this.nativeEl,this._hls)}get currentPdt(){return bi(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(V.PREFER_PLAYBACK);if(e===vr.MSE||e===vr.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===vr.MSE||e===vr.NATIVE?this.setAttribute(V.PREFER_PLAYBACK,e):this.removeAttribute(V.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith(`metadata-`)&&![V.METADATA_URL].includes(e)).reduce((e,t)=>{let n=this.getAttribute(t);return n!=null&&(e[t.replace(/^metadata-/,``).replace(/-/g,`_`)]=n),e},{}),...R(this,$a)}}set metadata(e){B(this,$a,e??{}),this.mux&&this.mux.emit(`hb`,R(this,$a))}get _hlsConfig(){return R(this,to)}set _hlsConfig(e){B(this,to,e)}get logo(){return this.getAttribute(V.LOGO)??R(this,ao)}set logo(e){e?this.setAttribute(V.LOGO,e):this.removeAttribute(V.LOGO)}load(){Sa(this,this.nativeEl,R(this,H,so))}unload(){Ca(this.nativeEl,R(this,H,so),this)}attributeChangedCallback(e,t,n){var r,i;switch(p.observedAttributes.includes(e)&&![`src`,`autoplay`,`preload`].includes(e)&&super.attributeChangedCallback(e,t,n),e){case V.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=n??void 0;break;case V.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=n??void 0;break;case`src`:{let e=!!t,r=!!n;!e&&r?Wa(this,H,lo).call(this):e&&!r?this.unload():e&&r&&(this.unload(),Wa(this,H,lo).call(this));break}case`autoplay`:if(n===t)break;(r=R(this,H,so))==null||r.setAutoplay(this.autoplay);break;case`preload`:if(n===t)break;(i=R(this,H,so))==null||i.setPreload(n);break;case V.PLAYBACK_ID:case V.CUSTOM_DOMAIN:case V.MAX_RESOLUTION:case V.MIN_RESOLUTION:case V.RENDITION_ORDER:case V.PROGRAM_START_TIME:case V.PROGRAM_END_TIME:case V.ASSET_START_TIME:case V.ASSET_END_TIME:case V.PLAYBACK_TOKEN:this.src=aa(this);break;case V.DEBUG:{let e=this.debug;this.mux&&console.info(`Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src.`),this._hls&&(this._hls.config.debug=e);break}case V.METADATA_URL:n&&fetch(n).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${n}!`));break;case V.STREAM_TYPE:(n==null||n!==t)&&this.dispatchEvent(new CustomEvent(`streamtypechange`,{composed:!0,bubbles:!0}));break;case V.TARGET_LIVE_WINDOW:(n==null||n!==t)&&this.dispatchEvent(new CustomEvent(`targetlivewindowchange`,{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case V.LOGO:(n==null||n!==t)&&this.updateLogo();break;case V.DISABLE_TRACKING:if(n==null||n!==t){let e=this.currentTime,t=this.paused;this.unload(),Wa(this,H,lo).call(this).then(()=>{this.currentTime=e,t||this.play()})}break;case V.DISABLE_COOKIES:(n==null||n!==t)&&this.disableCookies&&document.cookie.split(`;`).forEach(e=>{e.trim().startsWith(`muxData`)&&(document.cookie=e.replace(/^ +/,``).replace(/=.*/,`=;expires=`+new Date().toUTCString()+`;path=/`))});break;case V.CAP_RENDITION_TO_PLAYER_SIZE:(n==null||n!==t)&&(this.capRenditionToPlayerSize=n==null?void 0:!0)}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`slot[name="logo"]`);e&&(e.innerHTML=this.constructor.getLogoHTML(R(this,ao)||this.logo))}connectedCallback(){var e,t;(e=super.connectedCallback)==null||e.call(this),(t=this.nativeEl)==null||t.addEventListener(`muxmetadata`,R(this,oo)),this.nativeEl&&this.src&&!R(this,H,so)&&Wa(this,H,lo).call(this)}disconnectedCallback(){var e,t;(e=this.nativeEl)==null||e.removeEventListener(`muxmetadata`,R(this,oo)),this.unload(),(t=super.disconnectedCallback)==null||t.call(this)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};Za=new WeakMap,Qa=new WeakMap,$a=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap,ro=new WeakMap,io=new WeakMap,ao=new WeakMap,oo=new WeakMap,H=new WeakSet,so=function(){return ha(this.nativeEl)},co=new WeakMap,lo=async function(){R(this,Za)||(await B(this,Za,Promise.resolve()),B(this,Za,null),this.load())};var fo=e=>{throw TypeError(e)},po=(e,t,n)=>t.has(e)||fo(`Cannot `+n),mo=(e,t,n)=>(po(e,t,`read from private field`),n?n.call(e):t.get(e)),ho=(e,t,n)=>t.has(e)?fo(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),go=(e,t,n,r)=>(po(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),_o=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends _o{}globalThis.DocumentFragment=e}var vo=class extends _o{},yo=class extends _o{},bo={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(vo)}},xo,So=class{constructor(e,t={}){ho(this,xo),go(this,xo,t?.detail)}get detail(){return mo(this,xo)}initCustomEvent(){}};xo=new WeakMap;function Co(e,t){return new vo}var wo={document:{createElement:Co},DocumentFragment,customElements:bo,CustomEvent:So,EventTarget:_o,HTMLElement:vo,HTMLVideoElement:yo},To=typeof window>`u`||globalThis.customElements===void 0,Eo=To?wo:globalThis;To?wo.document:globalThis.document;var Do,Oo=class extends ee(f(uo)){constructor(){super(...arguments),ho(this,Do)}get autoplay(){let e=this.getAttribute(`autoplay`);return e===null?!1:e===``?!0:e}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute(`autoplay`,typeof e==`string`?e:``):this.removeAttribute(`autoplay`))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){return mo(this,Do)??this.muxCastCustomData}set castCustomData(e){go(this,Do,e)}};Do=new WeakMap,Eo.customElements.get(`mux-video`)||(Eo.customElements.define(`mux-video`,Oo),Eo.MuxVideoElement=Oo);var ko=e=>{throw TypeError(e)},Ao=(e,t,n)=>t.has(e)||ko(`Cannot `+n),U=(e,t,n)=>(Ao(e,t,`read from private field`),n?n.call(e):t.get(e)),W=(e,t,n)=>t.has(e)?ko(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,r)=>(Ao(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),K=(e,t,n)=>(Ao(e,t,`access private method`),n),jo=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends jo{}globalThis.DocumentFragment=e}var Mo=class extends jo{},No=class extends jo{},Po={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Mo)}},Fo,Io=class{constructor(e,t={}){W(this,Fo),G(this,Fo,t?.detail)}get detail(){return U(this,Fo)}initCustomEvent(){}};Fo=new WeakMap;function Lo(e,t){return new Mo}var Ro={document:{createElement:Lo},DocumentFragment,customElements:Po,CustomEvent:Io,EventTarget:jo,HTMLElement:Mo,HTMLVideoElement:No},zo=typeof window>`u`||globalThis.customElements===void 0,Bo=zo?Ro:globalThis,Vo=zo?Ro.document:globalThis.document;function Ho(e){let t=``;return Object.entries(e).forEach(([e,n])=>{n!=null&&(t+=`${Uo(e)}: ${n}; `)}),t?t.trim():void 0}function Uo(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}function Wo(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function q(e){if(e==null)return;let t=+e;return Number.isNaN(t)?void 0:t}function Go(e){let t=Ko(e).toString();return t?`?`+t:``}function Ko(e){let t={};for(let n in e)e[n]!=null&&(t[n]=e[n]);return new URLSearchParams(t)}var qo=(e,t)=>!e||!t?!1:e.contains(t)?!0:qo(e,t.getRootNode().host),Jo=`mux.com`,Yo=(()=>{try{return`3.13.0`}catch{}return`UNKNOWN`})(),Xo=()=>Yo,Zo=(e,{token:t,customDomain:n=Jo,thumbnailTime:r,programTime:i}={})=>{let a=t==null?r:void 0,{aud:o}=Rr(t)??{};if(!(t&&o!==`t`))return`https://image.${n}/${e}/thumbnail.webp${Go({token:t,time:a,program_time:i})}`},Qo=(e,{token:t,customDomain:n=Jo,programStartTime:r,programEndTime:i}={})=>{let{aud:a}=Rr(t)??{};if(!(t&&a!==`s`))return`https://image.${n}/${e}/storyboard.vtt${Go({token:t,format:`webp`,program_start_time:r,program_end_time:i})}`},$o=e=>{if(e){if([P.LIVE,P.ON_DEMAND].includes(e))return e;if(e!=null&&e.includes(`live`))return P.LIVE}},es={crossorigin:`crossOrigin`,playsinline:`playsInline`};function ts(e){return es[e]??Wo(e)}var ns,rs,J,is=class{constructor(e,t){W(this,ns),W(this,rs),W(this,J,[]),G(this,ns,e),G(this,rs,t)}[Symbol.iterator](){return U(this,J).values()}get length(){return U(this,J).length}get value(){return U(this,J).join(` `)??``}set value(e){e!==this.value&&(G(this,J,[]),this.add(...e?.split(` `)??[]))}toString(){return this.value}item(e){return U(this,J)[e]}values(){return U(this,J).values()}keys(){return U(this,J).keys()}forEach(e){U(this,J).forEach(e)}add(...e){var t,n;e.forEach(e=>{this.contains(e)||U(this,J).push(e)}),!(this.value===``&&!((t=U(this,ns))!=null&&t.hasAttribute(`${U(this,rs)}`)))&&((n=U(this,ns))==null||n.setAttribute(`${U(this,rs)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>{U(this,J).splice(U(this,J).indexOf(e),1)}),(t=U(this,ns))==null||t.setAttribute(`${U(this,rs)}`,`${this.value}`)}contains(e){return U(this,J).includes(e)}toggle(e,t){return t===void 0?this.contains(e)?(this.remove(e),!1):(this.add(e),!0):t?(this.add(e),!0):(this.remove(e),!1)}replace(e,t){this.remove(e),this.add(t)}};ns=new WeakMap,rs=new WeakMap,J=new WeakMap;var as=`[mux-player ${Xo()}]`;function os(...e){console.warn(as,...e)}function Y(...e){console.error(as,...e)}function ss(e){let t=e.message??``;e.context&&(t+=` ${e.context}`),e.file&&(t+=` ${I(`Read more: `)}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),os(t)}var X={AUTOPLAY:`autoplay`,CROSSORIGIN:`crossorigin`,LOOP:`loop`,MUTED:`muted`,PLAYSINLINE:`playsinline`,PRELOAD:`preload`},cs={VOLUME:`volume`,PLAYBACKRATE:`playbackrate`,MUTED:`muted`};({...X,...cs});var ls=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),us=Object.values(X).filter(e=>X.PLAYSINLINE!==e),ds=Object.values(cs),fs=[...us,...ds],ps=class extends Bo.HTMLElement{static get observedAttributes(){return fs}constructor(){super()}attributeChangedCallback(e,t,n){switch(e){case cs.MUTED:this.media&&(this.media.muted=n!=null,this.media.defaultMuted=n!=null);return;case cs.VOLUME:{let e=q(n)??1;this.media&&(this.media.volume=e);return}case cs.PLAYBACKRATE:{let e=q(n)??1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){return this.media?.play()??Promise.reject()}pause(){var e;(e=this.media)==null||e.pause()}load(){var e;(e=this.media)==null||e.load()}get media(){return this.shadowRoot?.querySelector(`mux-video`)}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){return this.media?.paused??!0}get duration(){return this.media?.duration??NaN}get ended(){return this.media?.ended??!1}get buffered(){return this.media?.buffered??ls}get seekable(){return this.media?.seekable??ls}get readyState(){return this.media?.readyState??0}get videoWidth(){return this.media?.videoWidth??0}get videoHeight(){return this.media?.videoHeight??0}get currentSrc(){return this.media?.currentSrc??``}get currentTime(){return this.media?.currentTime??0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){return this.media?.volume??1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){return this.media?.playbackRate??1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){return q(this.getAttribute(cs.PLAYBACKRATE))??1}set defaultPlaybackRate(e){e==null?this.removeAttribute(cs.PLAYBACKRATE):this.setAttribute(cs.PLAYBACKRATE,`${e}`)}get crossOrigin(){return ms(this,X.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(X.CROSSORIGIN,`${e}`)}get autoplay(){return ms(this,X.AUTOPLAY)!=null}set autoplay(e){e?this.setAttribute(X.AUTOPLAY,typeof e==`string`?e:``):this.removeAttribute(X.AUTOPLAY)}get loop(){return ms(this,X.LOOP)!=null}set loop(e){e?this.setAttribute(X.LOOP,``):this.removeAttribute(X.LOOP)}get muted(){return this.media?.muted??!1}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return ms(this,X.MUTED)!=null}set defaultMuted(e){e?this.setAttribute(X.MUTED,``):this.removeAttribute(X.MUTED)}get playsInline(){return ms(this,X.PLAYSINLINE)!=null}set playsInline(e){Y(`playsInline is set to true by default and is not currently supported as a setter.`)}get preload(){return this.media?this.media.preload:this.getAttribute(`preload`)}set preload(e){[``,`none`,`metadata`,`auto`].includes(e)?this.setAttribute(X.PRELOAD,e):this.removeAttribute(X.PRELOAD)}};function ms(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var hs=ps,gs=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,_s=new WeakMap,vs=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let n=_s.get(this.element);n&&n.set(this.type,this)}set(e){if(typeof e==`function`)this.handleEvent=e.bind(this.element);else if(typeof e==`object`&&typeof e.handleEvent==`function`)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=_s.get(this.element);e&&e.delete(this.type)}}static for(t){_s.has(t.element)||_s.set(t.element,new Map);let n=t.attributeName.slice(2),r=_s.get(t.element);return r&&r.has(n)?r.get(n):new e(t.element,n)}};function ys(e,t){return e instanceof o&&e.attributeName.startsWith(`on`)?(vs.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0):!1}function bs(e,t){return t instanceof As&&e instanceof c?(t.renderInto(e),!0):!1}function xs(e,t){return t instanceof DocumentFragment&&e instanceof c?(t.childNodes.length&&e.replace(...t.childNodes),!0):!1}function Ss(e,t){if(e instanceof o){let n=e.attributeNamespace,r=e.element.getAttributeNS(n,e.attributeName);return String(t)!==r&&(e.value=String(t)),!0}return e.value=String(t),!0}function Cs(e,t){if(e instanceof o&&t instanceof Element){let n=e.element;return n[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),n[e.attributeName]=t),!0}return!1}function ws(e,t){if(typeof t==`boolean`&&e instanceof o){let n=e.attributeNamespace;return t!==e.element.hasAttributeNS(n,e.attributeName)&&(e.booleanValue=t),!0}return!1}function Ts(e,t){return t===!1&&e instanceof c?(e.replace(``),!0):!1}function Es(e,t){Cs(e,t)||ws(e,t)||ys(e,t)||Ts(e,t)||bs(e,t)||xs(e,t)||Ss(e,t)}var Ds=new Map,Os=new WeakMap,ks=new WeakMap,As=class{constructor(e,t,n){this.strings=e,this.values=t,this.processor=n,this.stringsKey=this.strings.join(``)}get template(){if(Ds.has(this.stringsKey))return Ds.get(this.stringsKey);{let e=Vo.createElement(`template`),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,n,r)=>e+n+(r<t?`{{ ${r} }}`:``),``),Ds.set(this.stringsKey,e),e}}renderInto(e){var t;let n=this.template;if(Os.get(e)!==n){Os.set(e,n);let t=new i(n,this.values,this.processor);ks.set(e,t),e instanceof c?e.replace(...t.children):e.appendChild(t);return}let r=ks.get(e);(t=r?.update)==null||t.call(r,this.values)}},js={processCallback(e,t,n){if(n)for(let[e,r]of t)e in n&&Es(r,n[e]??``)}};function Ms(e,...t){return new As(e,t,js)}function Ns(e,t){e.renderInto(t)}var Ps=e=>{let{tokens:t}=e;return t.drm?`:host(:not([cast-receiver])) { --_cast-button-drm-display: none; }`:``},Fs=e=>Ms`
  <style>
    ${Ps(e)}
    ${gs}
  </style>
  ${Rs(e)}
`,Is=e=>{let t=e.hotKeys?`${e.hotKeys}`:``;return $o(e.streamType)===`live`&&(t+=` noarrowleft noarrowright`),t},Ls=Object.values({TOP:`top`,CENTER:`center`,BOTTOM:`bottom`,LAYER:`layer`,MEDIA_LAYER:`media-layer`,POSTER_LAYER:`poster-layer`,VERTICAL_LAYER:`vertical-layer`,CENTERED_LAYER:`centered-layer`,GESTURE_LAYER:`gesture-layer`,CONTROLLER_LAYER:`controller`,BUTTON:`button`,RANGE:`range`,THUMB:`thumb`,DISPLAY:`display`,CONTROL_BAR:`control-bar`,MENU_BUTTON:`menu-button`,MENU:`menu`,MENU_ITEM:`menu-item`,OPTION:`option`,POSTER:`poster`,LIVE:`live`,PLAY:`play`,PRE_PLAY:`pre-play`,SEEK_BACKWARD:`seek-backward`,SEEK_FORWARD:`seek-forward`,MUTE:`mute`,CAPTIONS:`captions`,AIRPLAY:`airplay`,PIP:`pip`,FULLSCREEN:`fullscreen`,CAST:`cast`,PLAYBACK_RATE:`playback-rate`,VOLUME:`volume`,TIME:`time`,TITLE:`title`,AUDIO_TRACK:`audio-track`,RENDITION:`rendition`}).join(`, `),Rs=e=>{var t;return Ms`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${e.defaultStreamType??!1}"
    hotkeys="${Is(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||!1}"
    noautoseektolive="${!!((t=e.streamType)!=null&&t.includes(P.LIVE))&&e.targetLiveWindow!==0}"
    novolumepref="${e.novolumepref||!1}"
    nomutedpref="${e.nomutedpref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${e.audio??!1}"
    style="${Ho({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor})??!1}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${e.forwardSeekOffset??!1}"
    backwardseekoffset="${e.backwardSeekOffset??!1}"
    playbackrates="${e.playbackRates??!1}"
    defaultshowremainingtime="${e.defaultShowRemainingTime??!1}"
    defaultduration="${e.defaultDuration??!1}"
    hideduration="${e.hideDuration??!1}"
    title="${e.title??!1}"
    videotitle="${e.videoTitle??!1}"
    proudlydisplaymuxbadge="${e.proudlyDisplayMuxBadge??!1}"
    exportparts="${Ls}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${e.noHotKeys??!1}"
      target-live-window="${e.targetLiveWindow??!1}"
      stream-type="${$o(e.streamType)??!1}"
      crossorigin="${e.crossOrigin??``}"
      playsinline
      autoplay="${e.autoplay??!1}"
      muted="${e.muted??!1}"
      loop="${e.loop??!1}"
      preload="${e.preload??!1}"
      debug="${e.debug??!1}"
      prefer-cmcd="${e.preferCmcd??!1}"
      disable-tracking="${e.disableTracking??!1}"
      disable-cookies="${e.disableCookies??!1}"
      prefer-playback="${e.preferPlayback??!1}"
      start-time="${e.startTime==null?!1:e.startTime}"
      initial-bandwidth-estimate-kbps="${e.initialBandwidthEstimateKbps==null?!1:e.initialBandwidthEstimateKbps}"
      initial-estimate-segments="${e.initialEstimateSegments==null?!1:e.initialEstimateSegments}"
      min-preload-segments="${e.minPreloadSegments==null?!1:e.minPreloadSegments}"
      beacon-collection-domain="${e.beaconCollectionDomain??!1}"
      player-init-time="${e.playerInitTime??!1}"
      player-software-name="${e.playerSoftwareName??!1}"
      player-software-version="${e.playerSoftwareVersion??!1}"
      env-key="${e.envKey??!1}"
      custom-domain="${e.customDomain??!1}"
      src="${e.src?e.src:e.playbackId?aa(e):!1}"
      cast-src="${e.src?e.src:e.playbackId?aa(e):!1}"
      cast-receiver="${e.castReceiver??!1}"
      drm-token="${e.tokens?.drm??!1}"
      playback-token="${e.tokens?.playback??!1}"
      exportparts="video"
      disable-pseudo-ended="${e.disablePseudoEnded??!1}"
      max-auto-resolution="${e.maxAutoResolution??!1}"
      cap-rendition-to-player-size="${e.capRenditionToPlayerSize??!1}"
    >
      ${e.storyboard?Ms`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:Ms``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${e.poster?e.poster:!1}"
        placeholdersrc="${e.placeholder??!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},zs=e=>e.charAt(0).toUpperCase()+e.slice(1),Bs=(e,t=!1)=>{if(e.muxCode){let n=zs(e.errorCategory??`video`),r=pr(e.errorCategory??j.VIDEO);if(e.muxCode===M.NETWORK_OFFLINE)return I(`Your device appears to be offline`,t);if(e.muxCode===M.NETWORK_TOKEN_EXPIRED)return I(`{category} URL has expired`,t).format({category:n});if([M.NETWORK_TOKEN_SUB_MISMATCH,M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING,M.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return I(`{category} URL is formatted incorrectly`,t).format({category:n});if(e.muxCode===M.NETWORK_TOKEN_MISSING)return I(`Invalid {categoryName} URL`,t).format({categoryName:r});if(e.muxCode===M.NETWORK_NOT_FOUND)return I(`{category} does not exist`,t).format({category:n});if(e.muxCode===M.NETWORK_NOT_READY){let n=e.streamType===`live`?`Live stream`:`Video`;return I(`{mediaType} is not currently available`,t).format({mediaType:n})}}if(e.code){if(e.code===N.MEDIA_ERR_NETWORK)return I(`Network Error`,t);if(e.code===N.MEDIA_ERR_DECODE)return I(`Media Error`,t);if(e.code===N.MEDIA_ERR_SRC_NOT_SUPPORTED)return I(`Source Not Supported`,t)}return I(`Error`,t)},Vs=(e,t=!1)=>{if(e.muxCode){let n=zs(e.errorCategory??`video`),r=pr(e.errorCategory??j.VIDEO);return e.muxCode===M.NETWORK_OFFLINE?I(`Check your internet connection and try reloading this video.`,t):e.muxCode===M.NETWORK_TOKEN_EXPIRED?I(`The video’s secured {tokenNamePrefix}-token has expired.`,t).format({tokenNamePrefix:r}):e.muxCode===M.NETWORK_TOKEN_SUB_MISMATCH?I(`The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.`,t).format({tokenNamePrefix:r}):e.muxCode===M.NETWORK_TOKEN_MALFORMED?I(`{category} URL is formatted incorrectly`,t).format({category:n}):[M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?I(`The {tokenNamePrefix}-token is formatted with incorrect information.`,t).format({tokenNamePrefix:r}):[M.NETWORK_TOKEN_MISSING,M.NETWORK_INVALID_URL].includes(e.muxCode)?I(`The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.`,t).format({tokenNamePrefix:r}):e.muxCode===M.NETWORK_NOT_FOUND?``:e.message}return e.code&&(e.code===N.MEDIA_ERR_NETWORK||e.code===N.MEDIA_ERR_DECODE||(e.code,N.MEDIA_ERR_SRC_NOT_SUPPORTED)),e.message},Hs=(e,t=!1)=>({title:Bs(e,t).toString(),message:Vs(e,t).toString()}),Us=e=>{if(e.muxCode){if(e.muxCode===M.NETWORK_TOKEN_EXPIRED)return`403-expired-token.md`;if(e.muxCode===M.NETWORK_TOKEN_MALFORMED)return`403-malformatted-token.md`;if([M.NETWORK_TOKEN_AUD_MISMATCH,M.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return`403-incorrect-aud-value.md`;if(e.muxCode===M.NETWORK_TOKEN_SUB_MISMATCH)return`403-playback-id-mismatch.md`;if(e.muxCode===M.NETWORK_TOKEN_MISSING)return`missing-signed-tokens.md`;if(e.muxCode===M.NETWORK_NOT_FOUND)return`404-not-found.md`;if(e.muxCode===M.NETWORK_NOT_READY)return`412-not-playable.md`}if(e.code){if(e.code===N.MEDIA_ERR_NETWORK)return``;if(e.code===N.MEDIA_ERR_DECODE)return`media-decode-error.md`;if(e.code===N.MEDIA_ERR_SRC_NOT_SUPPORTED)return`media-src-not-supported.md`}return``},Ws=(e,t)=>{let n=Us(e);return{message:e.message,context:e.context,file:n}},Gs=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,Ks=Vo.createElement(`template`);`innerHTML`in Ks&&(Ks.innerHTML=Gs);var qs=class extends u{};qs.template=Ks.content?.children?.[0],Bo.customElements.get(`media-theme-gerwig`)||Bo.customElements.define(`media-theme-gerwig`,qs);var Js=`gerwig`,Ys={SRC:`src`,POSTER:`poster`},Z={STYLE:`style`,DEFAULT_HIDDEN_CAPTIONS:`default-hidden-captions`,PRIMARY_COLOR:`primary-color`,SECONDARY_COLOR:`secondary-color`,ACCENT_COLOR:`accent-color`,FORWARD_SEEK_OFFSET:`forward-seek-offset`,BACKWARD_SEEK_OFFSET:`backward-seek-offset`,PLAYBACK_TOKEN:`playback-token`,THUMBNAIL_TOKEN:`thumbnail-token`,STORYBOARD_TOKEN:`storyboard-token`,FULLSCREEN_ELEMENT:`fullscreen-element`,DRM_TOKEN:`drm-token`,STORYBOARD_SRC:`storyboard-src`,THUMBNAIL_TIME:`thumbnail-time`,AUDIO:`audio`,NOHOTKEYS:`nohotkeys`,HOTKEYS:`hotkeys`,PLAYBACK_RATES:`playbackrates`,DEFAULT_SHOW_REMAINING_TIME:`default-show-remaining-time`,DEFAULT_DURATION:`default-duration`,TITLE:`title`,VIDEO_TITLE:`video-title`,PLACEHOLDER:`placeholder`,THEME:`theme`,DEFAULT_STREAM_TYPE:`default-stream-type`,TARGET_LIVE_WINDOW:`target-live-window`,EXTRA_SOURCE_PARAMS:`extra-source-params`,NO_VOLUME_PREF:`no-volume-pref`,NO_MUTED_PREF:`no-muted-pref`,CAST_RECEIVER:`cast-receiver`,NO_TOOLTIPS:`no-tooltips`,PROUDLY_DISPLAY_MUX_BADGE:`proudly-display-mux-badge`,DISABLE_PSEUDO_ENDED:`disable-pseudo-ended`},Xs=[`audio`,`backwardseekoffset`,`defaultduration`,`defaultshowremainingtime`,`defaultsubtitles`,`noautoseektolive`,`disabled`,`exportparts`,`forwardseekoffset`,`hideduration`,`hotkeys`,`nohotkeys`,`playbackrates`,`defaultstreamtype`,`streamtype`,`style`,`targetlivewindow`,`template`,`title`,`videotitle`,`novolumepref`,`nomutedpref`,`proudlydisplaymuxbadge`];function Zs(e,t){return{src:!e.playbackId&&e.src,playbackId:e.playbackId,hasSrc:!!e.playbackId||!!e.src||!!e.currentSrc,poster:e.poster,storyboard:e.media?.currentSrc&&e.storyboard,storyboardSrc:e.getAttribute(Z.STORYBOARD_SRC),fullscreenElement:e.getAttribute(Z.FULLSCREEN_ELEMENT),placeholder:e.getAttribute(`placeholder`),themeTemplate:$s(e),thumbnailTime:!e.tokens.thumbnail&&e.thumbnailTime,autoplay:e.autoplay,crossOrigin:e.crossOrigin,loop:e.loop,noHotKeys:e.hasAttribute(Z.NOHOTKEYS),hotKeys:e.getAttribute(Z.HOTKEYS),muted:e.muted,paused:e.paused,preload:e.preload,envKey:e.envKey,preferCmcd:e.preferCmcd,debug:e.debug,disableTracking:e.disableTracking,disableCookies:e.disableCookies,tokens:e.tokens,beaconCollectionDomain:e.beaconCollectionDomain,maxResolution:e.maxResolution,minResolution:e.minResolution,maxAutoResolution:e.maxAutoResolution,programStartTime:e.programStartTime,programEndTime:e.programEndTime,assetStartTime:e.assetStartTime,assetEndTime:e.assetEndTime,renditionOrder:e.renditionOrder,metadata:e.metadata,playerInitTime:e.playerInitTime,playerSoftwareName:e.playerSoftwareName,playerSoftwareVersion:e.playerSoftwareVersion,startTime:e.startTime,initialBandwidthEstimateKbps:e.initialBandwidthEstimateKbps,initialEstimateSegments:e.initialEstimateSegments,minPreloadSegments:e.minPreloadSegments,preferPlayback:e.preferPlayback,audio:e.audio,defaultStreamType:e.defaultStreamType,targetLiveWindow:e.getAttribute(V.TARGET_LIVE_WINDOW),streamType:$o(e.getAttribute(V.STREAM_TYPE)),primaryColor:e.getAttribute(Z.PRIMARY_COLOR),secondaryColor:e.getAttribute(Z.SECONDARY_COLOR),accentColor:e.getAttribute(Z.ACCENT_COLOR),forwardSeekOffset:e.forwardSeekOffset,backwardSeekOffset:e.backwardSeekOffset,defaultHiddenCaptions:e.defaultHiddenCaptions,defaultDuration:e.defaultDuration,defaultShowRemainingTime:e.defaultShowRemainingTime,hideDuration:ec(e),playbackRates:e.getAttribute(Z.PLAYBACK_RATES),customDomain:e.getAttribute(V.CUSTOM_DOMAIN)??void 0,title:e.getAttribute(Z.TITLE),videoTitle:e.getAttribute(Z.VIDEO_TITLE)??e.getAttribute(Z.TITLE),novolumepref:e.hasAttribute(Z.NO_VOLUME_PREF),nomutedpref:e.hasAttribute(Z.NO_MUTED_PREF),proudlyDisplayMuxBadge:e.hasAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:e.castReceiver,disablePseudoEnded:e.hasAttribute(Z.DISABLE_PSEUDO_ENDED),capRenditionToPlayerSize:e.capRenditionToPlayerSize,...t,extraSourceParams:e.extraSourceParams}}var Qs=n.formatErrorMessage;n.formatErrorMessage=e=>{if(e instanceof N){let t=Hs(e,!1);return`
      ${t!=null&&t.title?`<h3>${t.title}</h3>`:``}
      ${t!=null&&t.message||t!=null&&t.linkUrl?`<p>
        ${t?.message}
        ${t!=null&&t.linkUrl?`<a
              href="${t.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${t.linkText??``} ${I(`(opens in a new window)`)}"
              >${t.linkText??t.linkUrl}</a
            >`:``}
      </p>`:``}
    `}return Qs(e)};function $s(e){var t;let n=e.theme;if(n){let r=((t=e.getRootNode())?.getElementById)?.call(t,n);if(r&&r instanceof HTMLTemplateElement)return r;n.startsWith(`media-theme-`)||(n=`media-theme-${n}`);let i=Bo.customElements.get(n);if(i!=null&&i.template)return i.template}}function ec(e){let t=e.mediaController?.querySelector(`media-time-display`);return t&&getComputedStyle(t).getPropertyValue(`--media-duration-display-display`).trim()===`none`}function tc(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith(`metadata-`)).reduce((t,n)=>{let r=e.getAttribute(n);return r!==null&&(t[n.replace(/^metadata-/,``).replace(/-/g,`_`)]=r),t},t)}var nc=Object.values(V),rc=Object.values(Ys),ic=Object.values(Z),ac=Xo(),oc=`mux-player`,sc={isDialogOpen:!1},cc={redundant_streams:!0},lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,Q,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc=class extends hs{constructor(){super(),W(this,Q),W(this,lc),W(this,uc,!1),W(this,dc,{}),W(this,fc,!0),W(this,pc,new is(this,`hotkeys`)),W(this,mc),W(this,hc,()=>K(this,Q,wc).call(this)),W(this,gc,()=>K(this,Q,wc).call(this)),W(this,_c,()=>K(this,Q,wc).call(this)),W(this,vc),W(this,yc,{...sc,onCloseErrorDialog:e=>{e.composedPath()[0]?.localName===`media-error-dialog`&&K(this,Q,Cc).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{e.composedPath()[0]?.localName===`media-error-dialog`&&(qo(this,Vo.activeElement)||e.preventDefault())}}),W(this,bc,e=>{let t=this.media?.error;if(!(t instanceof N)){let{message:e,code:n}=t??{};t=new N(e,n)}if(!(t!=null&&t.fatal)){os(t),t.data&&os(`${t.name} data:`,t.data);return}let n=Ws(t,!1);n.message&&ss(n),Y(t),t.data&&Y(`${t.name} data:`,t.data),K(this,Q,Cc).call(this,{isDialogOpen:!0})}),G(this,lc,ra()),this.attachShadow({mode:`open`}),K(this,Q,Sc).call(this),this.isConnected&&K(this,Q,xc).call(this)}static get NAME(){return oc}static get VERSION(){return ac}static get observedAttributes(){return[...hs.observedAttributes??[],...rc,...nc,...ic]}get mediaTheme(){return this.shadowRoot?.querySelector(`media-theme`)}get mediaController(){return(this.mediaTheme?.shadowRoot)?.querySelector(`media-controller`)}connectedCallback(){K(this,Q,xc).call(this);let e=this.media;e&&(e.metadata=tc(this))}disconnectedCallback(){var e,t,n,r,i,a;(e=U(this,mc))==null||e.disconnect(),(t=this.media)==null||t.removeEventListener(`streamtypechange`,U(this,hc)),(n=this.media)==null||n.removeEventListener(`loadstart`,U(this,gc)),this.removeEventListener(`error`,U(this,bc)),this.media&&(this.media.errorTranslator=void 0),(r=this.media?.textTracks)==null||r.removeEventListener(`addtrack`,U(this,_c)),(i=this.media?.textTracks)==null||i.removeEventListener(`removetrack`,U(this,_c)),(a=U(this,vc))==null||a.call(this),G(this,vc,void 0),G(this,uc,!1)}attributeChangedCallback(e,t,n){switch(K(this,Q,xc).call(this),super.attributeChangedCallback(e,t,n),e){case Z.HOTKEYS:U(this,pc).value=n;break;case Z.THUMBNAIL_TIME:n!=null&&this.tokens.thumbnail&&os(I(`Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.`).toString());break;case Z.THUMBNAIL_TOKEN:if(n){let e=Rr(n);if(e){let{aud:t}=e,n=xi.THUMBNAIL;t!==n&&os(I(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`thumbnail`}))}}break;case Z.STORYBOARD_TOKEN:if(n){let e=Rr(n);if(e){let{aud:t}=e,n=xi.STORYBOARD;t!==n&&os(I(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`storyboard`}))}}break;case Z.DRM_TOKEN:if(n){let e=Rr(n);if(e){let{aud:t}=e,n=xi.DRM;t!==n&&os(I(`The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.`).format({aud:t,expectedAud:n,tokenNamePrefix:`drm`}))}}break;case V.PLAYBACK_ID:n!=null&&n.includes(`?token`)&&Y(I(`The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.`).format({playbackId:n}));break;case V.STREAM_TYPE:n&&![P.LIVE,P.ON_DEMAND,P.UNKNOWN].includes(n)?[`ll-live`,`live:dvr`,`ll-live:dvr`].includes(this.streamType)?this.targetLiveWindow=n.includes(`dvr`)?1/0:0:ss({file:`invalid-stream-type.md`,message:I("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):n===P.LIVE?this.getAttribute(Z.TARGET_LIVE_WINDOW)??(this.targetLiveWindow=0):this.targetLiveWindow=NaN;break;case Z.FULLSCREEN_ELEMENT:if(n!=null||n!==t){let e=Vo.getElementById(n),t=e?.querySelector(`mux-player`);this.mediaController&&e&&t&&(this.mediaController.fullscreenElement=e)}break;case V.CAP_RENDITION_TO_PLAYER_SIZE:(n==null||n!==t)&&(this.capRenditionToPlayerSize=n==null?void 0:!0);break}[V.PLAYBACK_ID,Ys.SRC,Z.PLAYBACK_TOKEN].includes(e)&&t!==n&&G(this,yc,{...U(this,yc),...sc}),K(this,Q,wc).call(this,{[ts(e)]:n})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(a.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Bo.CustomEvent(d.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var n;(n=this.mediaController)==null||n.addEventListener(r.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(a.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Bo.CustomEvent(d.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var n;(n=this.mediaController)==null||n.addEventListener(r.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){return this.getAttribute(V.PREFER_CMCD)??void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?br.includes(e)?this.setAttribute(V.PREFER_CMCD,e):os(`Invalid value for preferCmcd. Must be one of ${br.join()}`):this.removeAttribute(V.PREFER_CMCD))}get hasPlayed(){return this.mediaController?.hasAttribute(a.MEDIA_HAS_PLAYED)??!1}get inLiveWindow(){return this.mediaController?.hasAttribute(a.MEDIA_TIME_IS_LIVE)}get _hls(){return this.media?._hls}get mux(){return this.media?.mux}get theme(){return this.getAttribute(Z.THEME)??Js}set theme(e){this.setAttribute(Z.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let n of e.getAttributeNames()){if(Xs.includes(n))continue;let r=e.getAttribute(n);t[Wo(n)]=r===``?!0:r}return t}set themeProps(e){var t,n;K(this,Q,xc).call(this);let r={...this.themeProps,...e};for(let i in r){if(Xs.includes(i))continue;let r=e?.[i];typeof r==`boolean`||r==null?(t=this.mediaTheme)==null||t.toggleAttribute(Uo(i),!!r):(n=this.mediaTheme)==null||n.setAttribute(Uo(i),r)}}get playbackId(){return this.getAttribute(V.PLAYBACK_ID)??void 0}set playbackId(e){e?this.setAttribute(V.PLAYBACK_ID,e):this.removeAttribute(V.PLAYBACK_ID)}get src(){return this.playbackId?Ac(this,Ys.SRC)??void 0:this.getAttribute(Ys.SRC)??void 0}set src(e){e?this.setAttribute(Ys.SRC,e):this.removeAttribute(Ys.SRC)}get poster(){let e=this.getAttribute(Ys.POSTER);if(e!=null)return e;let{tokens:t}=this;if(t.playback&&!t.thumbnail){os(`Missing expected thumbnail token. No poster image will be shown`);return}if(this.playbackId&&!this.audio)return Zo(this.playbackId,{customDomain:this.customDomain,thumbnailTime:this.thumbnailTime??this.startTime,programTime:this.programStartTime,token:t.thumbnail})}set poster(e){e||e===``?this.setAttribute(Ys.POSTER,e):this.removeAttribute(Ys.POSTER)}get storyboardSrc(){return this.getAttribute(Z.STORYBOARD_SRC)??void 0}set storyboardSrc(e){e?this.setAttribute(Z.STORYBOARD_SRC,e):this.removeAttribute(Z.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;if(this.storyboardSrc&&!e.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[P.LIVE,P.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard))return Qo(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(Z.AUDIO)}set audio(e){if(!e){this.removeAttribute(Z.AUDIO);return}this.setAttribute(Z.AUDIO,``)}get hotkeys(){return U(this,pc)}get nohotkeys(){return this.hasAttribute(Z.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(Z.NOHOTKEYS);return}this.setAttribute(Z.NOHOTKEYS,``)}get thumbnailTime(){return q(this.getAttribute(Z.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(Z.THUMBNAIL_TIME,`${e}`)}get videoTitle(){return this.getAttribute(Z.VIDEO_TITLE)??this.getAttribute(Z.TITLE)??``}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(Z.VIDEO_TITLE,e):this.removeAttribute(Z.VIDEO_TITLE))}get placeholder(){return Ac(this,Z.PLACEHOLDER)??``}set placeholder(e){this.setAttribute(Z.PLACEHOLDER,`${e}`)}get primaryColor(){let e=this.getAttribute(Z.PRIMARY_COLOR);if(e!=null||this.mediaTheme&&(e=(Bo.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_primary-color`))?.trim(),e))return e}set primaryColor(e){this.setAttribute(Z.PRIMARY_COLOR,`${e}`)}get secondaryColor(){let e=this.getAttribute(Z.SECONDARY_COLOR);if(e!=null||this.mediaTheme&&(e=(Bo.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_secondary-color`))?.trim(),e))return e}set secondaryColor(e){this.setAttribute(Z.SECONDARY_COLOR,`${e}`)}get accentColor(){let e=this.getAttribute(Z.ACCENT_COLOR);if(e!=null||this.mediaTheme&&(e=(Bo.getComputedStyle(this.mediaTheme)?.getPropertyValue(`--_accent-color`))?.trim(),e))return e}set accentColor(e){this.setAttribute(Z.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(Z.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(Z.DEFAULT_SHOW_REMAINING_TIME,``):this.removeAttribute(Z.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(Z.PLAYBACK_RATES))return this.getAttribute(Z.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(Z.PLAYBACK_RATES);return}this.setAttribute(Z.PLAYBACK_RATES,e.join(` `))}get forwardSeekOffset(){return q(this.getAttribute(Z.FORWARD_SEEK_OFFSET))??10}set forwardSeekOffset(e){this.setAttribute(Z.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){return q(this.getAttribute(Z.BACKWARD_SEEK_OFFSET))??10}set backwardSeekOffset(e){this.setAttribute(Z.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(Z.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(Z.DEFAULT_HIDDEN_CAPTIONS,``):this.removeAttribute(Z.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return q(this.getAttribute(Z.DEFAULT_DURATION))}set defaultDuration(e){e==null?this.removeAttribute(Z.DEFAULT_DURATION):this.setAttribute(Z.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(V.PLAYER_INIT_TIME)?q(this.getAttribute(V.PLAYER_INIT_TIME)):U(this,lc)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(V.PLAYER_INIT_TIME):this.setAttribute(V.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){return this.getAttribute(V.PLAYER_SOFTWARE_NAME)??oc}get playerSoftwareVersion(){return this.getAttribute(V.PLAYER_SOFTWARE_VERSION)??ac}get beaconCollectionDomain(){return this.getAttribute(V.BEACON_COLLECTION_DOMAIN)??void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(V.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(V.BEACON_COLLECTION_DOMAIN))}get maxResolution(){return this.getAttribute(V.MAX_RESOLUTION)??void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(V.MAX_RESOLUTION,e):this.removeAttribute(V.MAX_RESOLUTION))}get minResolution(){return this.getAttribute(V.MIN_RESOLUTION)??void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(V.MIN_RESOLUTION,e):this.removeAttribute(V.MIN_RESOLUTION))}get maxAutoResolution(){return this.getAttribute(V.MAX_AUTO_RESOLUTION)??void 0}set maxAutoResolution(e){e==null?this.removeAttribute(V.MAX_AUTO_RESOLUTION):this.setAttribute(V.MAX_AUTO_RESOLUTION,e)}get renditionOrder(){return this.getAttribute(V.RENDITION_ORDER)??void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(V.RENDITION_ORDER,e):this.removeAttribute(V.RENDITION_ORDER))}get programStartTime(){return q(this.getAttribute(V.PROGRAM_START_TIME))}set programStartTime(e){e==null?this.removeAttribute(V.PROGRAM_START_TIME):this.setAttribute(V.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return q(this.getAttribute(V.PROGRAM_END_TIME))}set programEndTime(e){e==null?this.removeAttribute(V.PROGRAM_END_TIME):this.setAttribute(V.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return q(this.getAttribute(V.ASSET_START_TIME))}set assetStartTime(e){e==null?this.removeAttribute(V.ASSET_START_TIME):this.setAttribute(V.ASSET_START_TIME,`${e}`)}get assetEndTime(){return q(this.getAttribute(V.ASSET_END_TIME))}set assetEndTime(e){e==null?this.removeAttribute(V.ASSET_END_TIME):this.setAttribute(V.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(Z.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(Z.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,n])=>(e[t]=n,e),{}):cc}set extraSourceParams(e){e==null?this.removeAttribute(Z.EXTRA_SOURCE_PARAMS):this.setAttribute(Z.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){return this.getAttribute(V.CUSTOM_DOMAIN)??void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(V.CUSTOM_DOMAIN,e):this.removeAttribute(V.CUSTOM_DOMAIN))}get envKey(){return Ac(this,V.ENV_KEY)??void 0}set envKey(e){this.setAttribute(V.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(Z.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(Z.NO_VOLUME_PREF,``):this.removeAttribute(Z.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(Z.NO_MUTED_PREF)}set noMutedPref(e){e?this.setAttribute(Z.NO_MUTED_PREF,``):this.removeAttribute(Z.NO_MUTED_PREF)}get debug(){return Ac(this,V.DEBUG)!=null}set debug(e){e?this.setAttribute(V.DEBUG,``):this.removeAttribute(V.DEBUG)}get disableTracking(){return Ac(this,V.DISABLE_TRACKING)!=null}set disableTracking(e){this.toggleAttribute(V.DISABLE_TRACKING,!!e)}get disableCookies(){return Ac(this,V.DISABLE_COOKIES)!=null}set disableCookies(e){e?this.setAttribute(V.DISABLE_COOKIES,``):this.removeAttribute(V.DISABLE_COOKIES)}get streamType(){return this.getAttribute(V.STREAM_TYPE)??this.media?.streamType??P.UNKNOWN}set streamType(e){this.setAttribute(V.STREAM_TYPE,`${e}`)}get defaultStreamType(){return this.getAttribute(Z.DEFAULT_STREAM_TYPE)??this.mediaController?.getAttribute(Z.DEFAULT_STREAM_TYPE)??P.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(Z.DEFAULT_STREAM_TYPE,e):this.removeAttribute(Z.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){return this.hasAttribute(Z.TARGET_LIVE_WINDOW)?+this.getAttribute(Z.TARGET_LIVE_WINDOW):this.media?.targetLiveWindow??NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(e==null?this.removeAttribute(Z.TARGET_LIVE_WINDOW):this.setAttribute(Z.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){return this.media?.liveEdgeStart}get startTime(){return q(Ac(this,V.START_TIME))}set startTime(e){this.setAttribute(V.START_TIME,`${e}`)}get initialBandwidthEstimateKbps(){return q(Ac(this,V.INITIAL_BANDWIDTH_ESTIMATE_KBPS))}set initialBandwidthEstimateKbps(e){e==null?this.removeAttribute(V.INITIAL_BANDWIDTH_ESTIMATE_KBPS):this.setAttribute(V.INITIAL_BANDWIDTH_ESTIMATE_KBPS,`${e}`)}get initialEstimateSegments(){return q(Ac(this,V.INITIAL_ESTIMATE_SEGMENTS))}set initialEstimateSegments(e){e==null?this.removeAttribute(V.INITIAL_ESTIMATE_SEGMENTS):this.setAttribute(V.INITIAL_ESTIMATE_SEGMENTS,`${e}`)}get minPreloadSegments(){return q(Ac(this,V.MIN_PRELOAD_SEGMENTS))}set minPreloadSegments(e){e==null?this.removeAttribute(V.MIN_PRELOAD_SEGMENTS):this.setAttribute(V.MIN_PRELOAD_SEGMENTS,`${e}`)}get preferPlayback(){let e=this.getAttribute(V.PREFER_PLAYBACK);if(e===vr.MSE||e===vr.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===vr.MSE||e===vr.NATIVE?this.setAttribute(V.PREFER_PLAYBACK,e):this.removeAttribute(V.PREFER_PLAYBACK))}get metadata(){return this.media?.metadata}set metadata(e){if(K(this,Q,xc).call(this),!this.media){Y(`underlying media element missing when trying to set metadata. metadata will not be set.`);return}this.media.metadata={...tc(this),...e}}get _hlsConfig(){return this.media?._hlsConfig}set _hlsConfig(e){if(K(this,Q,xc).call(this),!this.media){Y(`underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.`);return}this.media._hlsConfig=e}async addCuePoints(e){if(K(this,Q,xc).call(this),!this.media){Y(`underlying media element missing when trying to addCuePoints. cuePoints will not be added.`);return}return this.media?.addCuePoints(e)}get activeCuePoint(){return this.media?.activeCuePoint}get cuePoints(){return this.media?.cuePoints??[]}addChapters(e){if(K(this,Q,xc).call(this),!this.media){Y(`underlying media element missing when trying to addChapters. chapters will not be added.`);return}return this.media?.addChapters(e)}get activeChapter(){return this.media?.activeChapter}get chapters(){return this.media?.chapters??[]}getStartDate(){return this.media?.getStartDate()}get currentPdt(){return this.media?.currentPdt}get tokens(){let e=this.getAttribute(Z.PLAYBACK_TOKEN),t=this.getAttribute(Z.DRM_TOKEN),n=this.getAttribute(Z.THUMBNAIL_TOKEN),r=this.getAttribute(Z.STORYBOARD_TOKEN);return{...U(this,dc),...e==null?{}:{playback:e},...t==null?{}:{drm:t},...n==null?{}:{thumbnail:n},...r==null?{}:{storyboard:r}}}set tokens(e){G(this,dc,e??{})}get playbackToken(){return this.getAttribute(Z.PLAYBACK_TOKEN)??void 0}set playbackToken(e){this.setAttribute(Z.PLAYBACK_TOKEN,`${e}`)}get drmToken(){return this.getAttribute(Z.DRM_TOKEN)??void 0}set drmToken(e){this.setAttribute(Z.DRM_TOKEN,`${e}`)}get thumbnailToken(){return this.getAttribute(Z.THUMBNAIL_TOKEN)??void 0}set thumbnailToken(e){this.setAttribute(Z.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){return this.getAttribute(Z.STORYBOARD_TOKEN)??void 0}set storyboardToken(e){this.setAttribute(Z.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,n,r){let i=this.media?.nativeEl;if(i)return ti(i,e,t,n,r)}removeTextTrack(e){let t=this.media?.nativeEl;if(t)return ni(t,e)}get textTracks(){return this.media?.textTracks}get castReceiver(){return this.getAttribute(Z.CAST_RECEIVER)??void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(Z.CAST_RECEIVER,e):this.removeAttribute(Z.CAST_RECEIVER))}get castCustomData(){return this.media?.castCustomData}set castCustomData(e){if(!this.media){Y(`underlying media element missing when trying to set castCustomData. castCustomData will not be set.`);return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(Z.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(Z.NO_TOOLTIPS);return}this.setAttribute(Z.NO_TOOLTIPS,``)}get proudlyDisplayMuxBadge(){return this.hasAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE,``):this.removeAttribute(Z.PROUDLY_DISPLAY_MUX_BADGE)}get capRenditionToPlayerSize(){return this.media?.capRenditionToPlayerSize}set capRenditionToPlayerSize(e){if(!this.media){Y(`underlying media element missing when trying to set capRenditionToPlayerSize`);return}this.media.capRenditionToPlayerSize=e}};lc=new WeakMap,uc=new WeakMap,dc=new WeakMap,fc=new WeakMap,pc=new WeakMap,mc=new WeakMap,hc=new WeakMap,gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,yc=new WeakMap,bc=new WeakMap,Q=new WeakSet,xc=function(){var e,t;if(!U(this,uc)){G(this,uc,!0),K(this,Q,wc).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Bo.HTMLElement))throw``}catch{Y(`<media-theme> failed to upgrade!`)}try{customElements.upgrade(this.media)}catch{Y(`underlying media element failed to upgrade!`)}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof s))throw``}catch{Y(`<media-controller> failed to upgrade!`)}K(this,Q,Tc).call(this),K(this,Q,Ec).call(this),K(this,Q,Dc).call(this),G(this,fc,this.mediaController?.hasAttribute(l.USER_INACTIVE)??!0),K(this,Q,Oc).call(this),(e=this.media)==null||e.addEventListener(`streamtypechange`,U(this,hc)),(t=this.media)==null||t.addEventListener(`loadstart`,U(this,gc))}},Sc=function(){var e,t;try{(e=window==null?void 0:window.CSS)==null||e.registerProperty({name:`--media-primary-color`,syntax:`<color>`,inherits:!0}),(t=window==null?void 0:window.CSS)==null||t.registerProperty({name:`--media-secondary-color`,syntax:`<color>`,inherits:!0})}catch{}},Cc=function(e){Object.assign(U(this,yc),e),K(this,Q,wc).call(this)},wc=function(e={}){Ns(Fs(Zs(this,{...U(this,yc),...e})),this.shadowRoot)},Tc=function(){let e=e=>{var t,n;if(!(e!=null&&e.startsWith(`theme-`)))return;let r=e.replace(/^theme-/,``);if(Xs.includes(r))return;let i=this.getAttribute(e);i==null?(n=this.mediaTheme)==null||n.removeAttribute(r):(t=this.mediaTheme)==null||t.setAttribute(r,i)};G(this,mc,new MutationObserver(t=>{for(let{attributeName:n}of t)e(n)})),U(this,mc).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Ec=function(){this.addEventListener(`error`,U(this,bc)),this.media&&(this.media.errorTranslator=(e={})=>{if(!(this.media?.error instanceof N))return e;let t=Ws(this.media?.error,!1);return{player_error_code:this.media?.error.code,player_error_message:t.message?String(t.message):e.player_error_message,player_error_context:t.context?String(t.context):e.player_error_context}})},Dc=function(){var e,t;(e=this.media?.textTracks)==null||e.addEventListener(`addtrack`,U(this,_c)),(t=this.media?.textTracks)==null||t.addEventListener(`removetrack`,U(this,_c))},Oc=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let n,r=new WeakMap,i=()=>this.streamType===P.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,a=(e,t,n=!1)=>{i()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,i=-3;this.streamType===P.LIVE&&(i=-2);let a=i-t;if(e.line===a&&!n)return;r.has(e)||r.set(e,e.line),e.line=a}else setTimeout(()=>{e.line=r.get(e)||`auto`},500)})},o=()=>{a(n,this.mediaController?.hasAttribute(l.USER_INACTIVE)??!1)},s=()=>{let e=Array.from(this.mediaController?.media?.textTracks||[]).filter(e=>[`subtitles`,`captions`].includes(e.kind)&&e.mode===`showing`)[0];e!==n&&n?.removeEventListener(`cuechange`,o),n=e,n?.addEventListener(`cuechange`,o),a(n,U(this,fc))};s(),(e=this.textTracks)==null||e.addEventListener(`change`,s),(t=this.textTracks)==null||t.addEventListener(`addtrack`,s);let c=()=>{let e=this.mediaController?.hasAttribute(l.USER_INACTIVE)??!0;U(this,fc)!==e&&(G(this,fc,e),a(n,U(this,fc)))};this.addEventListener(`userinactivechange`,c),G(this,vc,()=>{var e,t;n?.removeEventListener(`cuechange`,o),(e=this.textTracks)==null||e.removeEventListener(`change`,s),(t=this.textTracks)==null||t.removeEventListener(`addtrack`,s),this.removeEventListener(`userinactivechange`,c)})};function Ac(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var jc=kc,Mc=e=>{throw TypeError(e)},Nc=(e,t,n)=>t.has(e)||Mc(`Cannot `+n),Pc=(e,t,n)=>(Nc(e,t,`read from private field`),n?n.call(e):t.get(e)),Fc=(e,t,n)=>t.has(e)?Mc(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Ic=(e,t,n,r)=>(Nc(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Lc=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>`u`){class e extends Lc{}globalThis.DocumentFragment=e}var Rc=class extends Lc{},zc=class extends Lc{},Bc={get(e){},define(e,t,n){},getName(e){return null},upgrade(e){},whenDefined(e){return Promise.resolve(Rc)}},Vc,Hc=class{constructor(e,t={}){Fc(this,Vc),Ic(this,Vc,t?.detail)}get detail(){return Pc(this,Vc)}initCustomEvent(){}};Vc=new WeakMap;function Uc(e,t){return new Rc}var Wc={document:{createElement:Uc},DocumentFragment,customElements:Bc,CustomEvent:Hc,EventTarget:Lc,HTMLElement:Rc,HTMLVideoElement:zc},Gc=typeof window>`u`||globalThis.customElements===void 0,Kc=Gc?Wc:globalThis;Gc?Wc.document:globalThis.document,Kc.customElements.get(`mux-player`)||(Kc.customElements.define(`mux-player`,jc),Kc.MuxPlayerElement=jc);var qc=!0,Jc={className:`class`,classname:`class`,htmlFor:`for`,crossOrigin:`crossorigin`,viewBox:`viewBox`,playsInline:`playsinline`,autoPlay:`autoplay`,playbackRate:`playbackrate`},Yc=e=>e==null,Xc=(e,t)=>Yc(t)?!1:e in t,Zc=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Qc=(e,t)=>{if(!(!qc&&typeof t==`boolean`&&!t)){if(Xc(e,Jc))return Jc[e];if(t!==void 0)return/[A-Z]/.test(e)?Zc(e):e}},$c=(e,t)=>!qc&&typeof e==`boolean`?``:e,el=(e={})=>{let{ref:t,...n}=e;return Object.entries(n).reduce((e,[t,n])=>{let r=Qc(t,n);return r&&(e[r]=$c(n,t)),e},{})};function tl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function nl(...e){return t=>{let n=!1,r=e.map(e=>{let r=tl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():tl(e[t],null)}}}}function rl(...e){return g.useCallback(nl(...e),e)}var il=Object.prototype.hasOwnProperty,al=(e,t)=>{if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(Array.isArray(e))return!Array.isArray(t)||e.length!==t.length?!1:e.some((e,n)=>t[n]===e);let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!il.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0},ol=(e,t,n)=>!al(t,e[n]),sl=(e,t,n)=>{e[n]=t},cl=(e,t,n,r=sl,i=ol)=>(0,g.useEffect)(()=>{let a=n?.current;a&&i(a,t,e)&&r(a,t,e)},[n?.current,t]),ll=(()=>{try{return`3.13.0`}catch{}return`UNKNOWN`})(),ul=()=>ll,$=(e,t,n)=>(0,g.useEffect)(()=>{let r=t?.current;if(!r||!n)return;let i=e,a=n;return r.addEventListener(i,a),()=>{r.removeEventListener(i,a)}},[t?.current,n,e]),dl=g.forwardRef(({children:e,...t},n)=>g.createElement(`mux-player`,{suppressHydrationWarning:!0,...el(t),ref:n},e)),fl=(e,t)=>{let{onAbort:n,onCanPlay:r,onCanPlayThrough:i,onEmptied:a,onLoadStart:o,onLoadedData:s,onLoadedMetadata:c,onProgress:l,onDurationChange:u,onVolumeChange:d,onRateChange:f,onResize:p,onWaiting:m,onPlay:h,onPlaying:ee,onTimeUpdate:g,onPause:te,onSeeking:ne,onSeeked:re,onStalled:ie,onSuspend:ae,onEnded:oe,onError:se,onCuePointChange:_,onChapterChange:ce,metadata:v,tokens:y,paused:le,playbackId:ue,playbackRates:de,currentTime:fe,themeProps:pe,extraSourceParams:me,castCustomData:he,_hlsConfig:ge,..._e}=t;return cl(`tokens`,y,e),cl(`playbackId`,ue,e),cl(`playbackRates`,de,e),cl(`metadata`,v,e),cl(`extraSourceParams`,me,e),cl(`_hlsConfig`,ge,e),cl(`themeProps`,pe,e),cl(`castCustomData`,he,e),cl(`paused`,le,e,(e,t)=>{t!=null&&(t?e.pause():e.play())},(e,t,n)=>e.hasAttribute(`autoplay`)&&!e.hasPlayed?!1:ol(e,t,n)),cl(`currentTime`,fe,e,(e,t)=>{t!=null&&(e.currentTime=t)}),$(`abort`,e,n),$(`canplay`,e,r),$(`canplaythrough`,e,i),$(`emptied`,e,a),$(`loadstart`,e,o),$(`loadeddata`,e,s),$(`loadedmetadata`,e,c),$(`progress`,e,l),$(`durationchange`,e,u),$(`volumechange`,e,d),$(`ratechange`,e,f),$(`resize`,e,p),$(`waiting`,e,m),$(`play`,e,h),$(`playing`,e,ee),$(`timeupdate`,e,g),$(`pause`,e,te),$(`seeking`,e,ne),$(`seeked`,e,re),$(`stalled`,e,ie),$(`suspend`,e,ae),$(`ended`,e,oe),$(`error`,e,se),$(`cuepointchange`,e,_),$(`chapterchange`,e,ce),[_e]},pl=ul(),ml=`mux-player-react`,hl=g.forwardRef((e,t)=>{let n=(0,g.useRef)(null),r=rl(n,t),[i]=fl(n,e),[a]=(0,g.useState)(e.playerInitTime??ra());return g.createElement(dl,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:ml,playerSoftwareVersion:pl,playerInitTime:a,...i})});export{Cr as MaxResolution,N as MediaError,wr as MinResolution,Tr as RenditionOrder,hl as default,ra as generatePlayerInitTime,ml as playerSoftwareName,pl as playerSoftwareVersion};