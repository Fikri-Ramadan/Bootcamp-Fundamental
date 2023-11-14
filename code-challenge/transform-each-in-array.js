var map = function (arr, fn) {
  return arr.map((val, i) => {
    return fn(val, i);
  });
};

let arr = [1, 2, 3];

function constant() { return 42; }

const newArray = map(arr, constant);
console.log(newArray);
