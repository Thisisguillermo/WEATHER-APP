parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var t=function(){c(),a()};document.body.onload=t;var e="dd7abd123d47b36357eb5e8568f8526f",o="metric",n="";function c(){var t=document.createElement("section"),e=document.createTextNode("Hi there and greetings!");t.appendChild(e);var o=document.getElementById("div1");document.body.insertBefore(t,o)}function a(){var t=document.querySelector("#status"),e=document.querySelector("#map-link");function o(o){var n=o.coords.latitude,c=o.coords.longitude;return t.textContent="",e.href="https://www.openstreetmap.org/#map=18/".concat(n,"/").concat(c),e.textContent="Latitude: ".concat(n," °, Longitude: ").concat(c," °"),finalPosition="".concat(n," ").concat(c),{latitude:n,longitude:c}}e.href="",e.textContent="",navigator.geolocation?(t.textContent="Locating…",navigator.geolocation.getCurrentPosition(o,function(){t.textContent="Unable to retrieve your location"})):t.textContent="Geolocation is not supported by your browser",console.log(o)}
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.01a86ea9.js.map