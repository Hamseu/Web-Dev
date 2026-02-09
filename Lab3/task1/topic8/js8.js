/* alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1 and 2, because funtions is neither true or false

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1 and halts

alert( null || 2 && 3 || 4 ); // 3

let age = 19;
if (age <= 90 && age >= 14)
{
    alert("You are still alive");
}
if (age >= 90 || age <= 14)
{
    alert("Thee are still not allowed here");
}

if (!(age != 90) || !(age != 14) || age > 90 || age < 14)
{
    alert("You are still alive");
}

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

let login = prompt ("Who is there?")
if (login == null)
{
    alert ("canceled")
}
else if (login == "")
{
    alert ("canceled")
}
else if (login == "admin")
{
    let pwd = prompt("Enter password")
    if (login == null || login == "")
    {
        alert("canceled")
    }
    else if (pwd == "TheMaster")
    {
        alert ("You are sucesfull")
    }
    else
    {
        alert("Wrong password")
    }
}
else
{
    alert("wrong user")
}
