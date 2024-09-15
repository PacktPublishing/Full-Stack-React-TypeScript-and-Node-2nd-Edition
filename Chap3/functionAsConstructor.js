function MyFunction(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function () {
    console.log(`My name is ${this.name}`);
  };
}

const person = new MyFunction("jon", 25);
person.speak();
console.log(`My age is ${person.age}`);
