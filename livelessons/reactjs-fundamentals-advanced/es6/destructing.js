var numbers = [5, 10];
var [number1, number2] = numbers;
console.log(number1);
console.log(number2);

var dog = {
    name: 'shorty',
    age: 14
};

var {name: dogName, age: dogAge} = dog;
console.log(dogName, dogAge);

var {name, age} = dog;
console.log(name, age);