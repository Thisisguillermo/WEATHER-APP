parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e="dd7abd123d47b36357eb5e8568f8526f",o="metric",t="en";window.addEventListener("load",function(){var n,a,c=document.querySelector(".temperature-description"),r=document.querySelector(".temperature-degree"),i=document.querySelector(".location-timezone");navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(l){n=l.coords.latitude,a=l.coords.longitude,console.log(n),console.log(a);var s="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(a,"&units=").concat(o,"&lang=").concat(t,"&appid=").concat(e);console.log(s),fetch(s).then(function(e){return e.json()}).then(function(e){console.log(e);var o=e.main,t=o.temp;o.name;console.log(t);var n=e.weather[0].description;console.log(e.weather[0].description);var a=e.weather[0].main;a.weathermain,a.icon;console.log(e.weather[0].main);var l=e.name;console.log(l),r.textContent=Math.floor(t),c.textContent=n[0].toUpperCase()+n.slice(1).toLowerCase(),i.textContent=l})})}),skycons.add(document.getElementsByClassName("icon"),Skycons.RAIN);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.c84254a5.js.map