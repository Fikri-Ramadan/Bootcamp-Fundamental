var expect = function (val) {
  return {
    toBe: (expect) => {
      if (val === expect) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe: (expect) => {
      if (val !== expect) {
        return true;
      } else {
        throw new Error('Equal');
      }
    },
  };
};

console.log(expect(5).toBe(null));
