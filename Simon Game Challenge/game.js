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
  checkAnswer(userClickedPattern.length-1);

});

function nextSequence() {
  userClickedPattern.length = 0;
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

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){ //checks the current game pattern against the current user pattern
    console.log("sucess")
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);         
    }
  }
else {
  let wrongAudio = new Audio("sounds/" + wrong + ".mp3");
  wrongAudio.play();
  $("body").css.addClass("game-over");
  setTimeout(function () {
    $("body").css.removeClass("game-over");
  }, 200);
} 
}

