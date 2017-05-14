class Creature {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Human extends Creature {
    constructor(name, job) {
        super(name);
        this.job = job;
    }
}

var p1 = new Person('Hank');
p1.sayName();

console.log(Person);
console.log(p1.__proto__ === Person.prototype);
console.log(p1.sayName === Person.prototype.sayName);

// var sayName = p1.sayName;
// sayName();

var h1 = new Human('Chuck', 'barker');
console.log(h1.name);
console.log(h1.job);
h1.sayName();
console.log(h1.sayName == Creature.prototype.sayName);


// function Person(name) {
//     this.name = name;
// }

// console.log(Person);

// Person.prototype.sayName

// console.log(Person);