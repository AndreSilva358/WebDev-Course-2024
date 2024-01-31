function HouseKeeper (name, age, previousExperience, yearsOfExperience) {
    this.name = name;
    this.age = age;
    this.previousExperience = previousExperience;
    this.yearsOfExperience = yearsOfExperience;
    this.clean = function() {
         alert("Cleaning in progress.");
    }
}

var houseKeeper1 = new HouseKeeper ("Joanna", 24, true, 2);
var houseKeeper2 = new HouseKeeper ("Elena", 3000 , true, 700);

