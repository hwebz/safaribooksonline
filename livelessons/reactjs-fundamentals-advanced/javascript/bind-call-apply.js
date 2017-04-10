function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function() {
    console.log('Hello my name is ' + this.name);
}

Person.prototype.sayName2 = function(x) {
    console.log('Hello my name is ' + this.name);
    console.log(x);
}

var p1 = new Person('Joe', 17);
var p2 = new Person('Micheal', 24);
p1.sayName();

var sayName = p1.sayName;
sayName();

// Call
sayName.call(p1);
sayName.call(p2);
sayName.call({name: 'Jackie', age: 42});

var sayName2 = p1.sayName2;

sayName2.call(p1, 'hello'); //  invoke function with args be listed explicitly by comma (ES6 equivalent: ...['', '']
sayName2.apply(p1, ['hello']); // invoke function with args as an array

var boundSayName2 = sayName2.bind(p1, 'hello');

boundSayName2();