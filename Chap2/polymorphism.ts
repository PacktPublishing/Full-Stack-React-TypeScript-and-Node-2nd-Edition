interface Animal {
  name: string;

  runMaxMiles(hours: number): number;
}

class Wolf implements Animal {
  name: string = "";
  runMaxMiles(hours: number): number {
    return hours * 45;
  }
}

class Cheetah implements Animal {
  name: string = "";
  runMaxMiles(hours: number): number {
    return hours * 75;
  }
}

const hours = 0.5;
function pickTheBestAnimalToRun(hours: number): number {
  let animal: Animal | undefined;
  if (hours >= 0.5) {
    animal = new Wolf();
    animal.name = "wolfie";
  } else {
    animal = new Cheetah();
    animal.name = "cheetos";
  }

  if (animal instanceof Wolf) {
    console.log("This is a wolf");
  }
  if (animal instanceof Cheetah) {
    console.log("This is a cheetah");
  }
  return animal.runMaxMiles(hours);
}

pickTheBestAnimalToRun(hours);
