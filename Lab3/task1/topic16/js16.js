function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );//error

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user1 = makeUser();

alert( user1.ref().name ); // works

//task2
let calculator = {
    a1: 0,
    a2: 0,
    read()
    {
        this.a1 = +prompt("Enter num1");
        this.a2 = +prompt("Enter num2");
    },

    sum(){
       return this.a1 + this.a2;
    },

    mul()
    {
       return this.a1 * this.a2;
    },
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
//task3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();