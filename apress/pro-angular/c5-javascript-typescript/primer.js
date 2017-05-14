"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var myFunc = function () {
    console.log("This is a statement");
};
function myFunc2() {
    console.log("This is another statement");
}
myFunc();
myFunc2();
var myFunc3 = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra arg: " + extraArgs[i]);
    }
};
myFunc3("Adam", "sunny");
myFunc3("Anna");
myFunc3("Eric", "cloudy", "one", "two", "three");
var myFunc4 = function (name) {
    return ("Hello " + name + ".");
};
console.log(myFunc4("Micheal"));
var myFunc5 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc5(function () {
    return "Charlie";
}));
var myFunc6 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
var printName = function (nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
};
printName(function () {
    return "Antonio";
}, console.log);
// Arrow functions
var myFunc7 = function (nameFunction) { return ("Hello " + nameFunction() + "."); };
var printName2 = function (nameFunction, printFunction) { return printFunction(myFunc7(nameFunction)); };
printName2(function () {
    return "Emma";
}, console.log);
// Variables and Types
var messageFunction = function (name, weather) {
    // let message = "Hello, Adam";
    var message = "Hello, Adam";
    if (weather == "sunny") {
        // let message = "It is a nice day";
        var message = "It is a nice day";
        console.log(message);
    }
    else {
        // let message = "It is " + weather + " today";
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
};
messageFunction("Adam", "raining");
// Closure
var myGlobalVar = "apples";
var myFunc8 = function (name) {
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(myFunc8("John"));
var firstBool = true;
var secondBool = false;
var firstString = "   This is a string   ";
firstString = firstString.trim();
var secondString = "And so is this";
console.log("String: " + firstString + " has length: " + firstString.length
    + " and letter at 8 is: '" + firstString.charAt(8) + "', new string: "
    + firstString.concat(".And a little bit more.") + " and indexOf first 'i' letter is: "
    + firstString.indexOf('i') + ". new string: " + firstString.replace("little more", "few")
    + ", sub string from 3 - 12 is: '" + firstString.slice(3, 12) + "' and an array of words: " + firstString.split(" ").join(",")
    + ". in Uppercase format: " + firstString.toUpperCase() + " and in Lowercase format: " + firstString.toLowerCase());
// Template string
var greet = function (weather) {
    var message = "It is " + weather + " today";
    console.log(message);
};
greet("raining");
// Numbers
var daysInWeek = 7;
var pi = 3.14;
var hexValue = 0xFFFF;
console.log(daysInWeek++, daysInWeek--, daysInWeek);
console.log(true ? true : false);
// Conditional
var name2 = "Adam";
if (name2 == "Adam") {
    console.log("Name is John");
}
else if (name2 == "Jacqui") {
    console.log("Name is Jacqui");
}
else {
    console.log("Name is neither Adam or Jacqui");
}
switch (name2) {
    case "Adam":
        console.log("Name is Adam");
        break;
    case "Jacqui":
        console.log("Name is Jacqui");
        break;
    default:
        console.log("Name is neither Adam or Jacqui");
}
var firstVal = 5;
var secondVal = "5";
// if (firstVal == secondVal) {
if (firstVal === secondVal) {
    console.log("They are the same.");
}
else {
    console.log("They are NOT the same");
}
var myData1 = 5 + 5;
var myData2 = 5 + "5";
console.log("Result 1: " + myData1);
console.log("Result 2: " + myData2);
console.log("Result: " + (5).toString() + String(5));
console.log((5.2).toString(2), (5.2).toString(8), (5.2).toString(16));
console.log((5.23432432).toFixed(2));
console.log((5.23432432).toExponential(2));
console.log((5.23432432).toPrecision(2));
var firstVal1 = "5.2";
var secondVal1 = "5.2";
var result = Number(firstVal1) + Number(secondVal1);
var resultInt = parseInt(firstVal1) + parseInt(secondVal1);
var resultFloat = parseFloat(firstVal1) + parseFloat(secondVal1);
console.log("Result: " + result);
console.log("Result: " + resultInt);
console.log("Result: " + resultFloat);
// Arrays
var myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
var myArray2 = [100, "Adam", true];
console.log("Index 1: " + myArray[1]);
for (var i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("=====");
myArray2.forEach(function (value, index) { return console.log("Index " + index + ": " + value); });
// concat
var newArray = myArray.concat(myArray2);
console.log(newArray);
// join
var str = newArray.join(",");
console.log(str);
// pop
var pop = newArray.pop();
console.log(pop, newArray);
// shift
var shift = newArray.shift();
console.log(shift, newArray);
// push
newArray.push("end");
console.log(newArray);
// unshift
newArray.unshift("start");
console.log(newArray);
// reverse
console.log(newArray.reverse());
// slice
var slice = newArray.slice(2, 4);
console.log(slice);
// sort
console.log(newArray.sort());
// splice
var splice = newArray.splice(3, 2);
console.log(splice, newArray);
// every: true if all items is true, vice versa false == AND
console.log(splice.every(function (item) { return typeof item == 'string'; }));
console.log(newArray.every(function (item) { return typeof item == 'number'; }));
// some: true if one of the items is true, vice verse false == OR
console.log(splice.some(function (item) { return typeof item == 'number'; }));
console.log(newArray.some(function (item) { return typeof item == 'number'; }));
// filter: return all matched array
console.log(newArray.filter(function (item) { return item === "Adam"; }));
// find: return fisrt ele of matched array
console.log(newArray.find(function (item) { return item === "Adam"; }));
// findIndex: same as find but return index instead
console.log(newArray.findIndex(function (item) { return item === "Adam"; }));
// foreach
var newStr = '';
newArray.forEach(function (item, index) {
    if (index < newArray.length - 1)
        newStr += item + ",";
    else
        newStr += item;
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
var list = [0, [1, [2, [3, [4, [5]]]]]];
var flatten = function (arr) { return arr.reduce(function (previous, current) { return previous.concat(Array.isArray(current) ? flatten(current) : current // recursive
); }, []); };
console.log(flatten(list));
// Example
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
// Objects
var myData = new Object();
myData.name = "Admin";
myData.weather = "sunny";
console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
var myData2 = {
    name: "Adam",
    weather: "sunny",
    printMessages: function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
console.log("Hello " + myData2.name + ".");
console.log("Today is " + myData2.weather + ".");
myData2.printMessages();
// Classes
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log(this.weather);
    };
    return MyClass;
}());
var myData3 = new MyClass("Adam", "Sunny");
myData3.printMessages();
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        var _this = _super.call(this, name, weather) || this;
        _this.city = city;
        return _this;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass));
var myData4 = new MySubClass("Adam", "sunny", "London");
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
var NameAndWeather_1 = require("./modules/NameAndWeather");
var NameWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var tempConverter_1 = require("./modules/tempConverter");
var name = new NameAndWeather_1.Name("Adam", "sunny");
var loc = new NameAndWeather_1.WeatherLocation("raining", "London");
var other = new DuplicateName_1.Name();
var name3 = new NameWeatherLocation.Name("Jackie", "cloudly");
var loc2 = new NameWeatherLocation.WeatherLocation("raining", "Manchester");
// let cTemp = TempConverter.convertFtoC("38");
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
console.log(name3.nameMessage);
console.log(loc2.weatherMessage);
console.log("The temp is " + cTemp + "C");
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
// console.log(TempConverter.performCalculation(52)); 
