//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.
let = numberBottles = 99;

    while (numberBottles > 1) {
        let bottleWord = "bottles"
        if (numberBottles === 1) {
            var bottleWord = "bottle"
        }
        console.log(numberBottles+" "+bottleWord+" of beer on the wall");
        console.log(numberBottles+" "+bottleWord+" of beer,");
        console.log("Take one down and pass it around, ");
        numberBottles--;
        console.log(numberBottles+" "+bottleWord+" of beer on the wall");
        if (numberBottles === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
    }
