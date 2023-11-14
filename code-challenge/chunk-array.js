var chunk = function (arr = [], size) {
  const arrResult = [];

  for (let i = 0; i < arr.length; i += size) {
    arrResult.push(arr.slice(i, i + size));
  }

  return arrResult;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
