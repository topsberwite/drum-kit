var allDrums = document.querySelectorAll(".drum");

for (var i = 0; i < allDrums.length; i++) {
  allDrums[i].addEventListener("click", onClick);
}

function onClick() {
  var drumKey = this.innerHTML;
  soundPlay(drumKey);
  animations(drumKey);
}


document.addEventListener("keydown", function (event) {
  soundPlay(event.key);
  animations(event.key);
});

function soundPlay(key) {
  
  switch (key) {
    case "w": var crash = new Audio("./sounds/crash.mp3");
              crash.play();
      break;

    case "a": var tom1 = new Audio("./sounds/tom-1.mp3");
              tom1.play(); 
      break;

    case "s": var tom2 = new Audio("./sounds/tom-2.mp3");
              tom2.play(); 
      break;

    case "d": var tom3 = new Audio("./sounds/tom-3.mp3");
              tom3.play(); 
      break;

    case "j": var tom4 = new Audio("./sounds/tom-4.mp3");
              tom4.play(); 
      break;

    case "k": var kick = new Audio("./sounds/kick-bass.mp3");
              kick.play(); 
      break;

    case "l": var snare = new Audio("./sounds/snare.mp3");
              snare.play(); 
      break;
  
    default:
      break;
  }
}


function animations(currentKey) {
  var buttonPressed = document.querySelector("." + currentKey);

  buttonPressed.classList.toggle("pressed");

  setTimeout(function() {
    buttonPressed.classList.toggle("pressed");
  }, 100);
  
}