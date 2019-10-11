document.addEventListener("DOMContentLoaded",function () {
    const inputs =document.querySelectorAll(".controls input")

    const update =(e)=>{
        const dataFix =e.target.dataset.sizing || ''
        document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value+dataFix)
    }
    inputs.forEach(input=>input.addEventListener("change",update));
    inputs.forEach(input=>input.addEventListener("mousemove",update));
});