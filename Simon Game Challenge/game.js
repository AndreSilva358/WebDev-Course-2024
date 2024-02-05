let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr(".id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour); //will play sound according to the user's click
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random()(0 * 4));

  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);


  // what I thought was the way to play audio $("#"+randomChosenColour).audio.play("sounds/"+randomChosenColour+".mp3");
}

function playSound(name) {
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
