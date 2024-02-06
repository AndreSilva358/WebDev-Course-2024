
let level = 0;

let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let started = false

$(document).keypress(function(event){
  nextSequence();
  $("h1").text("Level"+level);
  nextSequence()
  started = true;
})

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr(".id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour); //will play sound according to the user's click
});

function nextSequence() {
  level++;

  let randomNumber = Math.floor(Math.random()(0 * 4));

  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  $("h1").text("Level"+level);

  // what I thought was the way to play audio $("#"+randomChosenColour).audio.play("sounds/"+randomChosenColour+".mp3");
}

function playSound(name) {
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function animatePress(currentColour){
$("#"+currentColour).addClass(".pressed").delay(100).removeClass(".pressed");
}
