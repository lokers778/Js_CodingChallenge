document.addEventListener("DOMContentLoaded",function () {
    minHand=document.querySelector(".min")
    secHand=document.querySelector(".sec")
    hourHand=document.querySelector(".hour")
    const setDate=()=>{
        const date=new Date();
        const seconds=date.getSeconds();
        const min=date.getMinutes();
        const hour=date.getHours();
        const secondDegrees = ((seconds/60)*360);
        const minDegrees = ((min/60)*360);
        const hourDegrees = ((hour/24)*360);
        secHand.style.transform=`rotate(${secondDegrees+90}deg)`
        minHand.style.transform=`rotate(${minDegrees+90}deg)`
        hourHand.style.transform=`rotate(${hourDegrees+90}deg)`
        console.log(seconds)
    }
    setInterval(setDate,1000)
});