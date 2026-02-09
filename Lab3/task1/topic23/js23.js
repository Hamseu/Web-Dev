let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let rM = new WeakSet();

rM.add(messages[0]);
rM.add(messages[1]);
rM.add(messages[0]);

alert(rM.has(messages[0]));
messages.shift();
alert(rM.has(messages[0]));
//task2
let messagesD = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readM = new WeakMap();

readM.set(messagesD[0], new Date(2017, 1, 1));

//task3
function sum(tyr)
{
    let sum = 0;
    for (let gre of Object.values(tyr))
    {
        sum += gre;
    }
    return sum;
}
//task4
function count(tyr)
{
    let i = 0;
    for (let gre in Object,keys(tyr))
    {
        i ++;
    }
    return i;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );