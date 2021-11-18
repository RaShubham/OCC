// Assignment 4:
// Create Calculator object and implement assignment3 logic
var calculations = function (a,b) {
    this.a = a;
    this.b = b;

    this.add=()=> this.a + this.b;
    this.sub=()=> this.a - this.b;
    this.mul=()=> this.a * this.b;
    this.div=()=> this.a / this.b;
};
const calc=new calculations(30,30);
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
