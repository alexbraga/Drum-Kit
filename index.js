// Play sounds
function playDrum(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    default:
      console.log(key);
      break;
  }
}

// Animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Detecting mouse clicks
let drumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting pressed keys
document.addEventListener("keydown", function (event) {
  // Error prevention (no sound) when caps lock is enabled
  event = event.key.toLowerCase();
  playDrum(event);
  buttonAnimation(event);
});