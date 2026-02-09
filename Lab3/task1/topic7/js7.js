if ("0") {
  alert( 'Hello' );
}
// task2
/*
let typ = prompt("What is name of JS")
if (typ == "ECMAScript")
{
    alert("HEllo world");
}
else
{
    alert("Wrong");
}*/
/*
let x = Number(prompt("Type number"))
if (x > 0){
   alert(1);
}
else if(x == 0)
{
    alert(0);

}
else if (x<0){
    alert(-1);
}*/

let a3 = 2;
let b3 = 4;

((a3 + b3) < 4) ?
   alert("below") : alert("above");


let login = "Entry";   
let message = (login == "Entry") ? "Init" : (login == "Director") ? "Prit" :   (login = "None") ? "None" : "";
alert(message);