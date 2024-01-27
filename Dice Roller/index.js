var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageSource = "/.images"+ randomDiceImage;
var dicePlacer1 = document.querySelectorAll("img")[0];
dicePlacer1 = setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dicePlacer2 = document.querySelectorAll("img")[1];
dicePlacer2 = setAttribute("src", randomDiceImage);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML("Player 1 wins!");
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML("Player 2 wins!");
}
else (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML("It's a draw!";)
}
