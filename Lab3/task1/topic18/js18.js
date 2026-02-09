'use strict';
let str = "Hello";

str.test = 5;

alert(str.test);

//error


//task2
let a = +prompt("The first number");
let b = +prompt("The second number");

alert( a + b )

//task3
alert( Math.round(6.35)); // or alert (Math.round(6.35*10)/10)
//task4
let numu;
while (1)
{
    numu = prompt('Enter something');
    if (numu == null || numu == "") break;
    if (isFinite(numu))
    {
        numu = +numu;
        break;
    }
}

//task5
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

//task6
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );