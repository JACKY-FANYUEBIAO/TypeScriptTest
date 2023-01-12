function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is ".concat(myName, ".\nI'll be ").concat(myAge + 1, " years old next month.");
