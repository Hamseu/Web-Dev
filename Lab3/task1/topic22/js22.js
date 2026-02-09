function unique(arr) {
  let ser = new Set();
  for (let y of arr){
    ser.add(y);
  }
  return ser;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) )
//task2
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );

//task3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");