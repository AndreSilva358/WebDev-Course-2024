let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){ 
    let randomNumber = Math.floor(Math.random() (0 * 4));
    
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
}