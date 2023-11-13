var filter = function (arr, fn) {
  const filteredArr = [];

  arr.forEach((val, i) => {
    if (fn(val, i)) {
      filteredArr.push(val);
    }
  });

  return filteredArr;
};

console.log(
  filter([0,10,20,30], function greaterThan10(n) { return n > 10; })
);
