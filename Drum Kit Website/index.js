//alternatively you can also declare a variable to control the number of drum buttons and pass it inside the for loop.
//let numberDrums = document.querySelecotrAll(".drum").length;
//we use .length to get the number of drums we have within the 'drum' class. 

for (i = 0; i < document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked.");
    });
}