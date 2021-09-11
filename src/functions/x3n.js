const x3n = async (x) => {
  let n = parseInt(x);
  const startingNumber = parseInt(x);
  if (n === isNaN) {
    console.log("Not a number");
    return "Not a number";
  } else {
    let calculatedArray = [startingNumber];
    while (n !== 1) {
      if (n % 2 !== 0) {
        n = n * 3 + 1;
        calculatedArray = [...calculatedArray, n];
      }
      if (n % 2 === 0) {
        n = n / 2;
        calculatedArray = [...calculatedArray, n];
      }
    }

    return calculatedArray;
  }
};

export default x3n;
