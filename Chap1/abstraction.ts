interface User {
  name: string;
  age: number;

  canDrive();
}

class Person implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  canDrive() {
    console.log("user is", this.name);

    if (this.age >= 16) {
      console.log("allow to drive");
    } else {
      console.log("do not allow to drive");
    }
  }
}

const john: User = new Person("john", 15);
john.canDrive();
