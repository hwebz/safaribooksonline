var fs = require('fs');

function promiseFs(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

promiseFs('./classes.js')
.then(data => {
    console.log(1);
    promiseFs('./promise.js').then(data => {
        console.log(2);

        promiseFs('./promise-fs.js').then(data => {
            console.log(3);
        })
    })
}).catch(err => {
    
})

var promise2 = promiseFs('./classes.js')
.then(data => {
    return promiseFs('./destructing.js');
}).catch(err => {
    
})

promise2.then(data => {
    console.log('file 2');
})

var promise3 = promiseFs('./classes.js')
.then(data => {
    console.log('file 2 read');
    return promiseFs('./destructing.js');
})
.then(data => {
    console.log('file 3 read');
}).catch(err => {
    
})

// [3, 4, 5].map(x => x + 1);
// [3, 4, 5].map(x => {
//     return x + 1;
// })

var p = promiseFs('./classes.js')
    .then(data => promiseFs('./destructing.js'))
    .then(data=> console.log(data.toString()))
    .catch(e => console.log(e));