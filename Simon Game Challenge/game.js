let level = 0;
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let started = false

$(document).keypress(function(){
  if (!started){
    $("h1").text("Level "+level);
    nextSequence();
    started = true;
  }
})

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour); //will play sound according to the user's click
  animatePress(userChosenColour);
});

function nextSequence() {
  level++;
  $("h1").text("Level "+level);
  
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  // what I thought was the way to play audio $("#"+randomChosenColour).audio.play("sounds/"+randomChosenColour+".mp3");
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}

