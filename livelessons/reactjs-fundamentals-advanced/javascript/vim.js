'use strict'
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function() {
    //     console.log('Hello my name is ' + this.name);
    // }
}

Person.prototype.sayName = function() {
    console.log('Hello my name is ' + this.name);
}

var p1 = new Person('John', 23);
var p2 = new Person('Tim', 25);
console.log(Person);
console.log(p1);
p1.sayName();
p2.sayName();