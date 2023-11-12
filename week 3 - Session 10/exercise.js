// 1. Create a function to convert Excel sheet column title to
//    its corresponding column number.
const arrOfAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const convertToColNum = (excel = '') => {
  let firstLet = '';
  let secondLet = '';
  let thirdLet = '';

  if (excel.length === 1) {
    return (
      arrOfAlphabet.findIndex(
        (value) => excel.charAt(0).toUpperCase() === value
      ) + 1
    );
  }

  firstLet =
    (arrOfAlphabet.findIndex(
      (value) => excel.charAt(0).toUpperCase() === value
    ) +
      1) *
    26;

  if (excel.length === 2) {
    return (
      firstLet +
      arrOfAlphabet.findIndex(
        (value) => excel.charAt(1).toUpperCase() === value
      )
    );
  }

  if (excel.length === 3) {
    firstLet = arrOfAlphabet.findIndex(
      (value) => excel.charAt(0).toUpperCase() === value
    );
    secondLet = arrOfAlphabet.findIndex(
      (value) => excel.charAt(1).toUpperCase() === value
    );
    thirdLet = arrOfAlphabet.findIndex(
      (value) => excel.charAt(2).toUpperCase() === value
    );

    return 26 ** 2 * firstLet + 26 * secondLet + thirdLet;
  }

  return excel;
};

const excelCol = 'XDF';
console.log(excelCol, '->', convertToColNum(excelCol));

// 2. Given a non-empty array of integers nums, every element
//    appears twice except for one. Find that single one.
const findSingleValue = (arr = []) => {
  let counter = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp = arr[i];
        counter++;
      }
    }
    if (counter === 1) {
      return temp;
    }
    counter = 0;
    temp = 0;
  }

  return console.log('not found');
};

let arr = [4, 1, 2, 1, 2];
console.log(arr, '->', findSingleValue(arr));

// 3. Create funtion to compare 2 words is anagram or not
const isAnagram = (word1, word2) => {
  let arrWord1 = word1.split('').filter((value) => {
    return arrOfAlphabet.includes(value.toUpperCase());
  });

  let arrWord2 = word2.split('').filter((value) => {
    return arrOfAlphabet.includes(value.toUpperCase());
  });

  if (arrWord1.length !== arrWord2.length) {
    return false;
  }

  arrWord1.sort();
  arrWord2.sort();

  for (let i = 0; i < arrWord1.length; i++) {
    if (arrWord1[i] !== arrWord2[i]) {
      return false;
    }
  }

  return true;
};

const word1 = 'anagram';
const word2 = 'nagaram';
console.log(`${word1} & ${word2} ->`, isAnagram(word1, word2));

// 4.You are climbing a staircase. It takes n steps to reach the top. Each time
//   you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
const climbStairs = (n) => {
  const arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
};

const n = 3;
console.log(n, '->', climbStairs(n));
