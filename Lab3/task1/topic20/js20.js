let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4, same reference

//task2
let styles = ["Jazz", "Blues"];
styles.push("Rock-N-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
styles.shift()
styles.unshift("Rap", "Reggae");
//task3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // function code

//task4
function sumInput() {
    let numbers = [];
    
    while (true) {
        let value = prompt("Enter a number", "");
        
        if (value === null || value === "" || !isFinite(value)) {
            break;
        }
        
        numbers.push(+value);
    }
    
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    
    return sum;
}

//task5
function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
