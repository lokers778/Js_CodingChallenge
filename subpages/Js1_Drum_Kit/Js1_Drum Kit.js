document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key =document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(audio == null)
        {
            return "lol"
        }
        audio.currentTime = 0;
        console.log(key)
        audio.play()
    })

});