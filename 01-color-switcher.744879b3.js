const e=document.querySelector("button[data-start]");console.log(e);const t=document.querySelector("button[data-stop]");console.log(t);const o=document.querySelector("body");console.log(o),t.disabled=!0,e.addEventListener("click",(function(d){timerId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(o){clearInterval(timerId),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.744879b3.js.map