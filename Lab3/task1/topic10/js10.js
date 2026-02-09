let browser = "Something"
if (browser === "Edge")
{
    alert("You got an Edge!");
}
else if (browser === "Chrome" || browser === "Opera" || browser === "Safari" || browser === "Firefox")
{
    alert("You got another browser");
}

else{
    alert ("We don't know what do you mean");
}

//task2
let a = +prompt('a?', '');

switch(a){
    case 0: alert(0);
    case 1: alert(1);
    case 2:
        case 3: alert("2 or 3");
}