class Wheels {
  count;

  constructor(count) {
    this.count = count;
  }

  wheelsCount = function () {
    return this.count;
  };
}

class Vehicle {
  wheels;

  constructor(count) {
    if (count > 0) {
      this.wheels = new Wheels(count);
    }
  }
}

class Automobile extends Vehicle {
  constructor(count) {
    super(count);
  }
}

let car = undefined;
console.log("wheels ", car?.wheels);

car = new Automobile(undefined);
console.log("wheel count ", car.wheels?.wheelsCount());
