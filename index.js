const drumButtons = document.querySelectorAll(".drum");

const numberOfDrumButtons = drumButtons.length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", function() {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    });
}




