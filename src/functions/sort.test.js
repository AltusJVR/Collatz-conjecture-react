import { sort, maxNum } from "./sort";
import x3n from "./x3n";

test("Test to see that sort returns a sorted array", () => {
  const sortedArray = sort([5, 7, 8, 1]);
  expect(sortedArray).toEqual([1, 5, 7, 8]);
});

test("Test max returns correct num", () => {
  const max = maxNum([10, 2, 5]);
  expect(max).toBe(10);
});

test("Test error handling of maxNum if arg is not an array", () => {
  const max = maxNum(1);
  expect(max).toBe(-1);
});
