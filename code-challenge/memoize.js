function memoize(fn) {
  const cache = {};

  return function (...args) {
    console.log(cache[args])
    if (cache[args] !== undefined) {
      return cache[args];
    }
    let result = fn(...args);
    cache[args] = result;
    console.log(cache)
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
// console.log(memoizedFn(2, 2)); // 5
// console.log(memoizedFn(2, 2)); // 5
// console.log('callCount', callCount); // 1
// console.log(memoizedFn(1, 2)); // 5
// console.log('callCount', callCount); // 2

console.log(memoizedFn(0, 0));
console.log(memoizedFn(0, 0));
console.log('callCount', callCount);