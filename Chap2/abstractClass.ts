namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void;

    showNumberOfWheels() {
      console.log(`wheels: ${this.wheelCount}`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;

      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;

      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`wheels: ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motorcycle();

  motorCycle.showNumberOfWheels();

  const autoMobile = new Automobile();

  autoMobile.showNumberOfWheels();
}
