var namae = prompt("What is your name?");

var first = namae.slice (0,1); 

upperFirst = first.toUpperCase();

var rest = namae.slice(1,namae.length);

var fullnamae = upperFirst+rest;

alert ("Welcome "+fullnamae);

