const elements = ["bass", "snare","hihat", "crash", "high", "mid", "ride", "floor"]
const music = [new Audio("./sounds/kick.mp3"), new Audio("./sounds/snare.mp3"), new Audio("./sounds/hihat.mp3"),new Audio("./sounds/crash.mp3"), new Audio("./sounds/high-tom.mp3"), new Audio("./sounds/mid-tom.mp3"),new Audio("./sounds/ride.mp3"),new Audio("./sounds/floor.mp3"), ]
const keys = ['x','c','s','d','f','w','e','r']

let vol = 1;

for (let i = 0; i < elements.length; i++) {
    document.getElementById(elements[i]).addEventListener("click", () => {
        music[i].currentTime = 0;
        music[i].volume = vol
        music[i].play();
        });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === keys[i]) {
            music[i].currentTime = 0;
            music[i].volume = vol
            music[i].play();
        }
        });
}

function vol_control() {
    vol = document.getElementById("vol").value/100;
}