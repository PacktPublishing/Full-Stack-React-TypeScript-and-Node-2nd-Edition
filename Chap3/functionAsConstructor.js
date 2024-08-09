function MyFunction(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function () {
    console.log(`My name is ${name}`);
  };

  let occupation = "programmer";
  console.log(`I am a ${occupation}`);
}

const person = new MyFunction("jon", 25);
person.speak();
console.log(`My age is ${person.age}`);

MyFunction("tim", 35).speak();
