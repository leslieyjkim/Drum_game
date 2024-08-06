const drumButtons = document.querySelectorAll(".drum");
const numberOfDrumButtons = drumButtons.length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", function() {
        alert("I got clicked");
    });
}




