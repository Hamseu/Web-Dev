let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pith";

delete user.name;

//task2
function isEmpty(objet)
{
    for (let t in objet)
    {
        return true;
    }
    return false;
}

//task3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let u in salaries)
{
    sum += salaries[u];
}
alert(sum);
//task4
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);