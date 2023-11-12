// 1. find Majority element
const findMajority = (arr = []) => {
  let uniqueArr = [...new Set(arr)];
  let counter = 0;

  for (let i = 0; i < uniqueArr.length; i++) {
    arr.forEach((value) => {
      if (value === uniqueArr[i]) {
        counter++;
      }
    });

    if (counter > Math.floor(arr.length / 2)) {
      return uniqueArr[i];
    }

    counter = 0;
  }

  return -1;
};

let arr = [2, 2, 1, 1, 2, 2, 1];
console.log(arr, '->', findMajority(arr));

// 2. convert roman numeral to integer
const convertToInt = (roman) => {
  let romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let currentChar = '';

  let currentValue = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    currentChar = roman[i];
    currentValue = romans[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

const roman = 'XC';
console.log(roman, '->', convertToInt(roman));

// 3. pascal triangle
const pascal = (rows = 0) => {
  const arr = [[1], [1, 1]];
  for (let i = 2; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < arr[i - 1].length - 1; j++) {
      temp.push(arr[i - 1][j] + arr[i - 1][j + 1]);
    }
    console.log(temp);
    arr.push([1, ...temp, 1]);
  }

  return arr;
};

const rows = 5;
console.log(rows, '->', pascal(rows));

// 4. find maxium profit
const maxProfit = (prices = []) => {
  min = Infinity;
  max = 0;
  prices.forEach((val) => {
    if (val < min) {
      min = val;
      max = val;
    }

    if (val > max) {
      max = val;
    }
  });

  return max - min;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(prices, '->', maxProfit(prices));
