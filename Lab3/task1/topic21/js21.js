//task1
function camelize(str) {
    return str
        .split('-')
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}


//task2
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}


//task3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

//task4
function sortDescending(arr) {
    arr.sort((a, b) => b - a);
}


//task5
function copySorted(arr) {
    return arr.slice().sort();
}


//task6
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let [a, op, b] = str.split(" ");
        a = +a;
        b = +b;

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


//task7
function mapToNames(users) {
    return users.map(user => user.name);
}


//task8
function mapToFullNames(users) {
    return users.map(user => ({
        id: user.id,
        fullName: `${user.name} ${user.surname}`
    }));
}


//task9
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}


//task10
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//task11
function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}


//task12
function unique(arr) {
    return Array.from(new Set(arr));
}


// task 13
function groupById(arr) {
    return arr.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}
