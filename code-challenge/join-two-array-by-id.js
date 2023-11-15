// var join = (arr1 = [], arr2 = []) => {
//   const arrResult = [];
//   let index;

//   for (let i = 0; i < arr1.length; i++) {
//     index = arr2.findIndex((value) => {
//       return value.id === arr1[i].id;
//     });

//     if (index === -1) {
//       arrResult.push(arr1[i]);
//     } else {
//       for (let j = 0; j < Object.keys(arr2[index]).length; j++) {
//         arr1[i][Object.keys(arr2[index])[j]] =
//           arr2[index][Object.keys(arr2[index])[j]];
//       }

//       arrResult.push(arr1[i]);
//     }
//   }

//   let i = -1;
//   arr2.forEach((value) => {
//     i = arr1.findIndex((val) => {
//       return val.id === value.id;
//     });

//     if (i === -1) {
//       arrResult.push(value);
//     }
//   });

//   return arrResult.sort((a, b) => a.id - b.id);
// };

var join = (arr1 = [], arr2 = []) => {
  const hashResult = {};

  // hash arr1 by id
  for (let arr1Value of arr1) {
    hashResult[arr1Value.id] = arr1Value;
  }

  // hash arr2 by id, if arr2.id exist in hashResult then overide the value
  for (let arr2Value of arr2) {
    if (hashResult[arr2Value.id]) {
      for (let key in arr2Value) {
        hashResult[arr2Value.id][key] = arr2Value[key];
      }
      continue;
    }
    hashResult[arr2Value.id] = arr2Value;
  }

  return Object.values(hashResult);
};

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

console.log(arr1);
console.log(arr2);

const result = join(arr1, arr2);
console.log(result);
