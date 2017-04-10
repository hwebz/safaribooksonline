// Run on browser's console (fetch is a func available on window object)
var data = fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => data.json())
.then(d => console.log(d));