//The first parameter should be the weight and the second should be the height.
function bmiCalculator (weight,height){
    var bmi = weight / (height*height); 
    return Math.round(bmi);
}
//We use math.round to round the number.