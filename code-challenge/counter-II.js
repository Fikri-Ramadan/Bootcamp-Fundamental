var createCounter = function (init) {
  let counter = init;

  return {
    increment: () => {
      return ++counter;
    },
    decrement: () => {
      return --counter;
    },
    reset: () => {
      return counter = init;
    },
  };
};

const counter = createCounter(4);
console.log(counter.increment());
console.log(counter.reset());
