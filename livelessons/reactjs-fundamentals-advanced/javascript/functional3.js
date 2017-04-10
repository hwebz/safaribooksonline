var numbers = [5, 16, 27, 46, 100];

var sum = numbers.reduce(function(memo, value) { // memo: last value, value: current
    return memo + value;
}, 0); // (callback, starting point)

console.log(sum);