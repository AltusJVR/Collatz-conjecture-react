// import x3n from "./x3n";

const mod = (num) => {
  if (num % 2 === 0) {
    return "Even";
  }
  if (num % 2 !== 0) {
    return "Odd";
  }
};

const next = (x) => {
  let num = parseInt(x);

  if (num === 1) {
    return "none";
  }
  if (num % 2 === 0) {
    num = num / 2;
    return num;
  }
  if (num % 2 !== 0) {
    num = num * 3 + 1;
    return num;
  }
};

export default mod;
export { next };
