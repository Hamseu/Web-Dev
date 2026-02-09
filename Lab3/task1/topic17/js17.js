let obj = {};

function A() { return obj; }
function B() { return obj; }


let a = new A();
let b = new B();

alert( a == b ); 
//task2
function Calculator() {

    this.read = function() {
        this.a = +prompt("Enter first number");
        this.b = +prompt("Enter second number");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task3
function Accumulator(start)
{
    this.value = start;
    this.read = function(){
       this.value += +prompt("enter");
    }
}

let ac = new Accumulator(1);
ac.read();
ac.read();
alert(ac.value);