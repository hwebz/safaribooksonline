var numbers = [1, 2, 3, 4];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    newNumbers = numbers[i] * 2;
}

numbers.forEach(function(number) {
    console.log(number);
});

numbers.forEach(function(number, i) {
   numbers[i] = number * 2;
   console.log(numbers[i]);
});

var newNumbers2 = numbers.map(function(number) {
    return number * 2;
});

console.log(newNumbers2);
console.log(numbers);