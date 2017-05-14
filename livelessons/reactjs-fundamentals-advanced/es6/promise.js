var fs = require('fs');

var file = fs.readFileSync('./promise.js');
console.log(file.toString());

// var file = fs.readFile('./classes.js'); // undefined

fs.readFile('./classes.js', function(err, data) {
    console.log(3);
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log(1);
console.log(2);

function helper() {
    console.log(22);
    fs.readFile('./destructing.js', function(err, data) {
        console.log(44);
        if (err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    })
}

function main() {
    console.log(11);
    helper();
}

main();