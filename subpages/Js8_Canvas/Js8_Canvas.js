const canvas=document.querySelector("#draw")
const ctx = canvas.getContext("2d")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let hue=0;
ctx.strokeStyle=`hsl(${hue},100%,50%)`;
ctx.lineJoin="round";
ctx.lineCap="round";
ctx.lineWidth=6;

let isDrawning=false;
let lastX=0;
let lastY=0;



function  draw(e) {
    if(isDrawning===false) return;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    hue++;
    ctx.lineWidth=hue/3;
    if(hue>=360){
        hue=0;
    }

}
canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mousedown",(e)=>{
    isDrawning=true
    lastX=e.offsetX;
    lastY=e.offsetY;
})
canvas.addEventListener("mouseup",()=>{
    isDrawning=false
})
canvas.addEventListener("mouseout",()=>{
    isDrawning=false
})