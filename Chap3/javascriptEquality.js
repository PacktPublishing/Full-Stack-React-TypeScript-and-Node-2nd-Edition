function areEqual(left, right) {
  if (left === right) return true; // warning: be careful of which equality operator you are using!!!
  return false;
}

// const usera = {
//   name: "jon",
//   age: 25,
// };
// const userb = {
//   name: "jon",
//   age: 25,
// };

// const usera = "jon";
// const userb = "jon";

const usera = "25";
const userb = 25;

console.log(`result: ${areEqual(usera, userb)}`);
