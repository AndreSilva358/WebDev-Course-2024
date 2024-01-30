//alternatively you can also declare a variable to control the number of drum buttons and pass it inside the for loop.
//let numberDrums = document.querySelecotrAll(".drum").length;
//we use .length to get the number of drums we have within the 'drum' class. 

for (i = 0; i < document.querySelector(".drum").length ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.buttonInnerHTML;
    
        switch (buttonInnerHTML) {
            case w:
            
                var tom1 = new Audio('./sounds/tom1.mp3');
                tom1.play();
                break;
        

                
            case a:
            
                var tom2 = new Audio('./sounds/tom2.mp3');
                tom2.play();
                break;
            
            case s:
            
                var tom3 = new Audio('./sounds/tom3.mp3');
                tom3.play();
                break;
                
            case d:
                var tom4 = new Audio('./sounds/tom4.mp3');
                tom4.play();
                break;

            case j:
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
            default:
                break;
        }
    }
    
    
    
    
    
    
    
}