interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'tom',
  age: 25
};

function sum(x, y) {
  return x + y;
}

let mySum = function (x, y) {
  return x + y;
};

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack