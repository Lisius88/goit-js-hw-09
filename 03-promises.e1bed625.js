!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i");i.Notify.init({width:"250px",position:"right-top",distance:"10px",opacity:.8,timeout:2e3});var r=document.querySelector(".form");function a(e,t){var n=Math.random()>.5;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}function u(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}function c(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}function d(){return{delay:Number(r.delay.value),step:Number(r.step.value),amount:Number(r.amount.value)}}r.addEventListener("submit",(function(e){e.preventDefault();var t=d(),n=t.delay,o=t.amount,i=t.step;setTimeout((function(){for(var e=1;e<=o;e+=1)a(e,n).then(u).catch(c),n+=i}),n),r.reset()})),r.addEventListener("input",d)}();
//# sourceMappingURL=03-promises.e1bed625.js.map
