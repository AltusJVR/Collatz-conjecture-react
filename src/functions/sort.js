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
  if (typeof arr !== "object") {
    return -1;
  } else {
    let max = arr[0];
    arr.forEach((num) => {
      if (num > max) {
        max = num;
      }
    });
    return max;
  }
};

export { maxNum, sort };
