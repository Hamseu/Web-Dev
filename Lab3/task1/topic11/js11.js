function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
} // no difference if we delete else statement and hold just confirm

//task2
function checkAge2(age) {
  return age > 18 || confirm("PArents'permission");
}


function checkAge3(age)
{
    return (age > 18) ? true : confirm("Parents's permission");
}

//task3
function min(a, b)
{
    return (a > b) ? b : a;
}

//task5
