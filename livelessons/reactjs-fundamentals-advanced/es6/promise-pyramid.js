var fs = require('fs');

fs.readFile('./classes.js', function(err, data) {
    console.log('classes.js contents');
    fs.readFile('./promise.js', function(err, data) {
        console.log('promise.js contents');
        fs.readFile('./promise-pyramid.js', function(err, data) {
            console.log('promise-pyramid.js contents');
        })
    });
});