class Wheels {
  count = 0;
}

class Vehicle {
  wheels;
}

class Automobile extends Vehicle {
  wheels;
  constructor(wheels) {
    super();
    this.wheels = wheels;
  }
}

const car = new Automobile({
  count: undefined,
});

console.log("car ", car);
console.log("wheels ", car?.wheels);
console.log("count ", car?.wheels?.count);
