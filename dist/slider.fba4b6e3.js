parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uIJM":[function(require,module,exports) {
window.onSliderControlClick=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=-1,s=e.parentElement.parentElement,n=s.parentElement.querySelectorAll(".reviews__users");n.forEach(function(e,i){e===s&&((r=t?i-1:i+1)>n.length-1?r=0:r<0&&(r=n.length-1)),e.classList.remove("reviews__users-active")}),n[r].classList.add("reviews__users-active")},window.onSliderDotClick=function(e){var t=e.getAttribute("data-reviewIndex"),r=e.parentElement.querySelectorAll(".reviews__dots_button"),s=e.parentElement.parentElement.querySelectorAll(".reviews__users");r.forEach(function(e){return e.classList.remove("reviews__dots_button-active")}),r[t].classList.add("reviews__dots_button-active"),s.forEach(function(e){return e.classList.remove("reviews__users-active")}),s[t].classList.add("reviews__users-active")};
},{}]},{},["uIJM"], null)
//# sourceMappingURL=slider.fba4b6e3.js.map