

    const color=document.querySelector("#colorPicker");
    const font=document.querySelector("#fonts");
    const fontsize=document.querySelector("#fontSize");
    const output=document.querySelector("#output");

    color.addEventListener("change", ()=>{output.style.color=color.value;});
    font.addEventListener("change", ()=>{output.style.fontFamily=font.value;});
    fontsize.addEventListener("input", ()=>{output.style.fontSize=Number(fontsize.value)+"px";});



