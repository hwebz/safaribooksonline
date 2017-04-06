// Use Underscrore
// Example 1
var ironman = {
    name: "Tony Stack",
    alias: "Iron Man"
};

_.each(ironman, function(value, key) {
   console.log(key + ': ' + value); 
});

// Example 2
var avengersArray = [
    { name: "Tony", alias: "Iron Man" },
    { name: "Bruce", alias: "The Incredible Hulk" },
    { name: "Steve", alias: "Captain America" }
];

var onlyTonyArray = _.filter(avengersArray, function(avenger) {
   return avenger.name === "Tony"; 
});

console.log(onlyTonyArray);