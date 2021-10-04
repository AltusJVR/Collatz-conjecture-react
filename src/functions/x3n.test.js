import x3n from "./x3n";

test("Test X3N+1 function returns the correct array", () => {
  const array = x3n(2);
  const array2 = x3n(5);
  const array3 = x3n(10);
  expect(array).toStrictEqual([2, 1]);
  expect(array2).toStrictEqual([5, 16, 8, 4, 2, 1]);
  expect(array3).toStrictEqual([10, 5, 16, 8, 4, 2, 1]);
});

test("Test X3N+1 function with NaN", () => {
  const string = x3n("c");
  const boolean = x3n(false);
  const array = x3n([1, 20, 5]);
  expect(string).toBe("c");
  expect(boolean).toBe(false);
  expect(array).toEqual([1, 20, 5]);
});
