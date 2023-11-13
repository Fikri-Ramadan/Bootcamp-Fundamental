var compose = function (functions) {
  return function (x) {
    functions.reverse();
    functions.forEach((element) => {
      x = element(x);
    });

    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
