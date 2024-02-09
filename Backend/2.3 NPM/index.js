import generateName from "sillyname";
import superheroes from "superheroes";

var sillyname = generateName();
const heroName = superheroes.random();

console.log(`My name is ${sillyname}.`);
console.log(`Also known as ${heroName}!`);