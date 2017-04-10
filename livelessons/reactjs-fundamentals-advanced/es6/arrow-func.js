var numbers = [1, 2, 3, 4];

var numbers2 = numbers.map(function(number) {
    return number * 2;
});

// form 1
var numbers3 = numbers.map(number => {
    return number * 2;
});

// form 2. Only one parameter
var numbers4 = numbers.map((number, index) => {
    return number * 3;
});

// form 2 (continued) We must still use
// parens for 0 params
numbers.map(() => {

});

var result = numbers.map(number => number * 2);

console.log(numbers);
console.log(numbers2);
console.log(numbers3);