const t=document.querySelector("button[data-start]");console.log(t);const e=document.querySelector("button[data-stop]");console.log(e);const o=document.querySelector("body");console.log(o),t.addEventListener("click",(function(e){timerId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3a2f68b1.js.map