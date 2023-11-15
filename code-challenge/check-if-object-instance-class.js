var checkIfInstanceOf = function (obj, classFunction) {
  while (obj != null) {
    if (obj === classFunction.prototype) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

console.log(checkIfInstanceOf(Number.NaN, Number));

// checkIfInstanceOf(Date, Date)

// checkIfInstanceOf(Number.NaN, Number);

// checkIfInstanceOf(5, Number);

// checkIfInstanceOf(new Date(), Date);

// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal);
