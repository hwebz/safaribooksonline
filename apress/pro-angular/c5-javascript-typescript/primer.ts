console.log("Hello")
console.log("Apples")
console.log("This is a statement");
console.log("This is also a statement")

let myFunc = function() {
    console.log("This is a statement");
};

function myFunc2() {
    console.log("This is another statement");
}

myFunc();
myFunc2();

let myFunc3 = function(name, weather = "raining", ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");

    for(let i = 0; i < extraArgs.length; i++) {
        console.log("Extra arg: " + extraArgs[i]);
    }
}

myFunc3("Adam", "sunny");
myFunc3("Anna");
myFunc3("Eric", "cloudy", "one", "two", "three");

let myFunc4 = function(name) {
    return ("Hello " + name + ".");
}

console.log(myFunc4("Micheal"));

let myFunc5 = function(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

console.log(myFunc5(function() {
    return "Charlie";
}))

let myFunc6 = function(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

let printName = function(nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
}

printName(function() {
    return "Antonio";
}, console.log);

// Arrow functions
let myFunc7 = nameFunction => ("Hello " + nameFunction() + ".");
let printName2 = (nameFunction, printFunction) => printFunction(myFunc7(nameFunction));
printName2(function() {
    return "Emma";
}, console.log);

// Variables and Types
let messageFunction = function(name, weather) {
    // let message = "Hello, Adam";
    var message = "Hello, Adam";
    if (weather == "sunny") {
        // let message = "It is a nice day";
        var message = "It is a nice day";
        console.log(message);
    } else {
        // let message = "It is " + weather + " today";
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}
messageFunction("Adam", "raining");

// Closure
let myGlobalVar = "apples";
let myFunc8 = function(name) {
    let myLocalVar = "sunny";
    let innerFunction = function() {
        return("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction();
}
console.log(myFunc8("John"));

let firstBool = true;
let secondBool = false;
let firstString = "   This is a string   ";
firstString = firstString.trim();
let secondString = "And so is this";
console.log("String: " + firstString + " has length: " + firstString.length
            + " and letter at 8 is: '" + firstString.charAt(8) + "', new string: "
            + firstString.concat(".And a little bit more.") + " and indexOf first 'i' letter is: "
            + firstString.indexOf('i') + ". new string: " + firstString.replace("little more", "few")
            + ", sub string from 3 - 12 is: '" + firstString.slice(3, 12) + "' and an array of words: " + firstString.split(" ").join(",")
            + ". in Uppercase format: " + firstString.toUpperCase() + " and in Lowercase format: " + firstString.toLowerCase());

// Template string
let greet = function(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
}

greet("raining");

// Numbers
let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

console.log(daysInWeek++, daysInWeek--, daysInWeek);
console.log(true ? true : false);

// Conditional
let name2 = "Adam";
if (name2 == "Adam") {
    console.log("Name is John");
} else if (name2 == "Jacqui") {
    console.log("Name is Jacqui");
} else {
    console.log("Name is neither Adam or Jacqui");
}

switch(name2) {
    case "Adam":
        console.log("Name is Adam");
        break;
    case "Jacqui":
        console.log("Name is Jacqui");
        break;
    default:
        console.log("Name is neither Adam or Jacqui");
}

let firstVal = 5;
let secondVal = "5";
// if (firstVal == secondVal) {
if (firstVal === secondVal) {
    console.log("They are the same.");
} else {
    console.log("They are NOT the same");
}

let myData1 = 5 + 5;
let myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);
console.log("Result: " + (5).toString() + String(5));
console.log((5.2).toString(2), (5.2).toString(8), (5.2).toString(16));
console.log((5.23432432).toFixed(2));
console.log((5.23432432).toExponential(2));
console.log((5.23432432).toPrecision(2));

let firstVal1= "5.2";
let secondVal1 = "5.2";
let result = Number(firstVal1) + Number(secondVal1);
let resultInt = parseInt(firstVal1) + parseInt(secondVal1);
let resultFloat = parseFloat(firstVal1) + parseFloat(secondVal1);
console.log("Result: " + result);
console.log("Result: " + resultInt);
console.log("Result: " + resultFloat);

// Arrays
let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
let myArray2 = [100, "Adam", true];
console.log("Index 1: " + myArray[1]);
for(let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("=====");
myArray2.forEach((value, index) => console.log("Index " + index + ": " + value));

// concat
let newArray = myArray.concat(myArray2);
console.log(newArray);

// join
let str = newArray.join(",");
console.log(str);

// pop
let pop = newArray.pop();
console.log(pop, newArray);

// shift
let shift = newArray.shift();
console.log(shift, newArray);

// push
newArray.push("end");
console.log(newArray);

// unshift
newArray.unshift("start");
console.log(newArray);

// reverse
console.log(newArray.reverse())

// slice
let slice = newArray.slice(2, 4);
console.log(slice);

// sort
console.log(newArray.sort())

// splice
let splice = newArray.splice(3, 2); 
console.log(splice, newArray);

// every: true if all items is true, vice versa false == AND
console.log(splice.every(item => typeof item == 'string'));
console.log(newArray.every(item => typeof item == 'number'));

// some: true if one of the items is true, vice verse false == OR
console.log(splice.some(item => typeof item == 'number'));
console.log(newArray.some(item => typeof item == 'number'));

// filter: return all matched array
console.log(newArray.filter(item => item === "Adam"));

// find: return fisrt ele of matched array
console.log(newArray.find(item => item === "Adam"));

// findIndex: same as find but return index instead
console.log(newArray.findIndex(item => item === "Adam"));

// foreach
let newStr = '';
newArray.forEach((item, index) => {
    if (index < newArray.length - 1) newStr += item + ",";
    else newStr += item;
});
console.log(newArray, newStr);

// includes
console.log(newArray.includes("Adam"));

// reduce: (previous, current), initialValue
// [0, 1, [2, [3, [4, [5]]]]]
// [0, 1, 2, [3, [4, [5]]]]
// [0, 1, 2, 3, [4, [5]]]
// [0, 1, 2, 3, 4, [5]]
// [0, 1, 2, 3, 4, 5]
let list = [0, [1, [2, [3, [4, [5]]]]]];
const flatten = arr => arr.reduce((previous, current) => previous.concat(
    Array.isArray(current) ? flatten(current) : current // recursive
), [])
console.log(flatten(list));

// Example
let products = [
    {name: "Hat", price: 24.5, stock: 10},
    {name: "Kayak", price: 289.99, stock: 1},
    {name: "Soccer Ball", price: 10, stock: 0},
    {name: "Running Shoes", price: 116.50, stock: 20}
]
let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);
    console.log("Total value: $" + totalValue.toFixed(2));

// Objects
let myData = new Object();
myData.name = "Admin";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");

let myData2 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
console.log("Hello " + myData2.name + ".");
console.log("Today is " + myData2.weather + ".");
myData2.printMessages();

// Classes
class MyClass {
    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    }
}

let myData3 = new MyClass("Adam", "Sunny");
myData3.printMessages();

class MySubClass extends MyClass {
    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}
let myData4 = new MySubClass("Adam", "sunny", "London");
myData4.printMessages();

// ECMA5
/*var MyClass = function MyClass(name, weather) {
    this.name = name;
    this.weather = weather;
}

MyClass.prototype.printMessages = function() {
    console.log("Hello " + this.name + ".");
    console.log("Today is " + this.weather + ".");
};

var myData3 = new MyClass("Admam", "sunny");
myData3.printMessages();*/

import {Name, WeatherLocation} from './modules/NameAndWeather';
import * as NameWeatherLocation from './modules/NameAndWeather';
import {Name as OtherName} from './modules/DuplicateName';
import {TempConverter} from './modules/tempConverter';

let name = new Name("Adam", "sunny");
let loc = new WeatherLocation("raining", "London");
let other = new OtherName();
let name3 = new NameWeatherLocation.Name("Jackie", "cloudly");
let loc2 = new NameWeatherLocation.WeatherLocation("raining", "Manchester");
// let cTemp = TempConverter.convertFtoC("38");
let cTemp = TempConverter.convertFtoC(38);

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log(name3.nameMessage);
console.log(loc2.weatherMessage);
console.log(`The temp is ${cTemp}C`);

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")];
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

let cities: {
    [index: string]: [string, string]
} = {};
cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];
for(let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
// console.log(TempConverter.performCalculation(52));