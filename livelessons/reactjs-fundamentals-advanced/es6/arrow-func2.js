function Person(name) {
    this.name = name;
}

Person.prototype.sayNameTimed = function() {
    var self = this;
    setTimeout(function() {
        console.log(`My name is ${self.name}`);
    }, 1000);
};

var p1 = new Person('Sean');
p1.sayNameTimed();