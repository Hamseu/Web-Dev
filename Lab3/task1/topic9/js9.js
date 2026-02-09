//task1
let i = 3;

while (i) {
  alert( i-- );
}//1, 0 is false

//task2
let i1 = 0;
while (++i1 < 5) alert( i1 ); // 1,2,3,4

let i2 = 0;
while (i2++ < 5) alert( i2 ); // 0, 1, 2, 3, 4

//task3
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i ); // the same, because i++ will eventually be after cycle body in "for"

//task4
for (let i4  = 2; i4< 11; i4 +=2)
{
   alert(i4);
}

//task5
let i5 = 0
//for (let i = 0; i < 3; i++) 
while (i5 < 3)
{
  alert( `number ${i}!` );
  i++;
}

//task6
while(1)
{
    let y = Number(prompt("Enter 100 or greater"))
    if (y >= 100 || y == null)
    {
        break;
    }
}

//task7
let n = 7;
    let count = 0, num = 2;

    while (count < n) {
        let prime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(num);
            count++;
        }
        num++;
    }
