var posts = [
    { title: 'post one', content: 'a fine blog posting' },
    { title: 'post two', content: 'another fine blog posting' }
];

var numbers = [5, 10, 4, 3];

var evens = numbers.filter(function(number) {
    return number % 2 == 0;
});

var result = evens.map(function(number) {
    return number + 100
});

var result2 = numbers.filter(function(number) {
    return number % 2 == 0
}).map(function(number) {
    return number + 100
});


console.log(evens);
console.log(result);
console.log(result2);