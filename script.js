const elements = ["bass", "snare","hihat", "crash", "high", "mid", "ride", "floor"]
const music = [new Audio("./sounds/kick.mp3"), new Audio("./sounds/snare.mp3"), new Audio("./sounds/hihat.mp3"),new Audio("./sounds/crash.mp3"), new Audio("./sounds/high-tom.mp3"), new Audio("./sounds/mid-tom.mp3"),new Audio("./sounds/ride.mp3"),new Audio("./sounds/floor.mp3"), ]

for (let i = 0; i < elements.length; i++) {
    document.getElementById(elements[i]).addEventListener("click", () => {
        music[i].play();
        console.log("Event added")
        });

    document.getElementById(elements[i]).addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'd') {
            music[i].play();
        }
        });

}