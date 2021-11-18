//Creating module and importing 
var calcs = require('./calc'); 

//Creating variables for the function to be performed in the calc.js file
var addition = calcs.add(10, 90);
var subtraction = calcs.sub(10, 90);
var multiplication = calcs.mul(10, 90);
var division = calcs.div(10, 90);
console.log("Addition: " +addition);
console.log("Subtraction: " +subtraction);
console.log("Multiplication: " +multiplication);
console.log("Division: " +division);