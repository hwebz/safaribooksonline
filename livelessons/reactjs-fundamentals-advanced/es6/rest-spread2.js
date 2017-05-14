function talk(greeting, goodbye, names) {
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!!!`);
        console.log(`${goodbye} ${name}!!!`);
    })
}

talk('hello', 'goodbye', ['Bill', 'Joe', 'Maria']);

function talk2(greeting, farewell) {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments, 2);
    console.log(args);
}

talk2('hello', 'goodbye', 'Bill', 'Joe', 'Maria');

function talk3(greeting, farewell, ...names) {
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!!!`);
        console.log(`${farewell} ${name}!!!`);
    });
}

var arr = ['hello', 'goodbye'];
talk3(...arr, 'Bill', 'Joe', 'Maria');