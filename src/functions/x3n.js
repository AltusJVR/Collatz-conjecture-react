const x3n = (x) => {
  let n = x;
  let calculatedArray = [n];
  while (n !== 1) {
    if (typeof n !== "number") {
      calculatedArray = n;
      break;
    }
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
};

export default x3n;
