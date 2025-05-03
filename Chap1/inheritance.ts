class Item {
  id: string;
  description: string;
  price: number;

  getId(): string {
    return this.id;
  }
}

class Bicycle extends Item {
  wheelCount: number;

  getWheelCount(): number {
    return this.wheelCount;
  }
}

const bicycle = new Bicycle();
bicycle.id = "123";
bicycle.description = "Mountain Bike";
bicycle.price = 299.99;
bicycle.wheelCount = 2;
console.log("id", bicycle.getId());
console.log("wheel count", bicycle.getWheelCount());
