var tom = {
    name: 'tom',
    age: 25
};
function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom1 = buildName('Tom');
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is ".concat(this.name);
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
