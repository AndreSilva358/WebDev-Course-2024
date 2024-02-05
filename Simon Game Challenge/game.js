let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern =[];

function nextSequence(){ 
    let randomNumber = Math.floor(Math.random() (0 * 4));
    
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
}

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// what I thought was the way to play audio $("#"+randomChosenColour).audio.play("sounds/"+randomChosenColour+".mp3");
let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr(".id") 
    userClickedPattern.push(userChosenColour);
});