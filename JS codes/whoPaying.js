function whosPaying(names) {    
    var numberOfPeople = names.length;
    var randomPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPosition];
    
    var result = (randomPerson+" is going to buy lunch today!");

return result;   
}
