function getData() {
  return [
    {
      name: "jon",
      age: 24,
    },
    {
      name: "linda",
      age: 35,
    },
    {
      name: "tom",
      age: 21,
    },
  ];
}

type Result = ReturnType<typeof getData>;

const result: Result = getData();
console.log(result);
