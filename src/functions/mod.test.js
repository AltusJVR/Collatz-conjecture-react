import mod, { next } from "./mod";

test("Test to see that mod returns correct string", () => {
  const even = mod(2);
  const odd = mod(3);
  expect(even).toBe("Even");
  expect(odd).toBe("Odd");
});

test("Test to see that next returns correct number", () => {
  const odd = next(5);
  const even = next(2);
  const done = next(1);
  expect(even).toBe(1);
  expect(odd).toBe(16);
  expect(done).toBe("none");
});

const testArray = [
  18, 9, 28, 14, 7, 22, 11, 34, 17, 5552, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 30000,
];
