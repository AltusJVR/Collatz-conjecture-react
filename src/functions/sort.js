const sort = (arr) => {
  if (!arr) {
    return [];
  } else {
    const sortedArray = [...arr].sort((a, b) => {
      let A = parseInt(a);
      let B = parseInt(b);
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 1;
    });
    return sortedArray;
  }
};

const maxNum = (arr) => {
  let max = arr[0];
  if (!arr) {
    return -1;
  } else {
    arr.forEach((num) => {
      if (num > max) {
        max = num;
      }
    });
    return max;
  }
};
const testArray = [
  18, 9, 28, 14, 7, 22, 11, 34, 17, 5552, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 30000,
];

export { maxNum, sort };
