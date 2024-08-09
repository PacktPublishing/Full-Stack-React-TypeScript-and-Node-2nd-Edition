async function slowCall(): Promise<number> {
  return new Promise((res) => {
    setTimeout(function () {
      res(0);
    }, 2000);
  });
}
