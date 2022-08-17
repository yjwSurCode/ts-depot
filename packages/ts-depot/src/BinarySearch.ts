const BinarySearch = <T extends Record<string, unknown>>(
  arr: Array<T>,
  target: T,
  start: number,
  end: number
): number => {
  var idx = Math.floor((start + end) / 2);
  if (idx == start && arr[idx] != target) {
    return -1;
  } else if (idx == start && arr[idx] == target) {
    return idx;
  }
  if (target < arr[idx]) {
    return BinarySearch(arr, target, start, idx);
  } else if (target > arr[idx]) {
    return BinarySearch(arr, target, idx, end);
  } else {
    return idx;
  }
};

BinarySearch([{ id: 1 }, { id: 2 }], { id: 1 }, 0, 2);

console.log(BinarySearch([{ id: 1 }, { id: 2 }], { id: 1 }, 0, 2), "1111");

export default BinarySearch;

// const foo1 = <T>(x: T): T => x;

// const foo2 = <T extends {}>(x: T): T => x;

// const foo3 = <T extends Record<string, unknown>>(x: T): T => x;

// const foo4: <T>(x: T) => T = (x) => x;

// const foo5 = <T>(arg: T): T => {
//   console.log(arg);
//   return arg;
// };
