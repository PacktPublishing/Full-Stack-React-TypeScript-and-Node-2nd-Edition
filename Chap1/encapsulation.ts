class Encapsulator {
  private name: string;

  get getName(): string {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }

  constructor(name: string) {
    this.name = name;
  }
}

const encapsulator = new Encapsulator("John");
// console.log(encapsulator.name);
console.log(encapsulator.getName);
