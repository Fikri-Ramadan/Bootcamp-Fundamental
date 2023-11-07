// exercise materi modul 1 materi 2

// convert celcius to fahrenheit
const celcius = 60;
const fahrenheit = (celcius * 9) / 5 + 32;
console.log(`${celcius} celcius -> ${fahrenheit} fahrenheit`);

// check number is odd or even
const number = 11;
console.log(`${number} adalah`, number % 2 === 0 ? 'genap' : 'ganjil');

// check number is prime or not
const numberPrime = 2;
let counter = 0;
for (let i = 1; i <= numberPrime; i++) {
  if (numberPrime % i === 0) {
    counter++;
  }
}

switch (counter) {
  case 2:
    console.log(`${numberPrime} adalah bilangan prima`);
    break;
  default:
    console.log(`${numberPrime} adalah bukan bilangan prima`);
}

// find sum of the number
const n = 5;
let sum = 0;
let sumMessage = '';

for (let i = 1; i <= n; i++) {
  sumMessage += `${i}`;
  sum += i;
  if (i !== n) {
    sumMessage += ' + ';
  }
}

console.log(`${n} -> ${sumMessage} = ${sum}`);

// find factorial of number
const factorial = 4;
let resultFactorial = 1;
let factorialMessage = '';

for (let i = 1; i <= factorial; i++) {
  resultFactorial *= i;
  factorialMessage += `${i}`;
  if (i !== factorial) {
    factorialMessage += ' x ';
  }
}

console.log(`${factorial}! -> ${factorialMessage} = ${resultFactorial}`);

// find fibonacci number
const fibonacci = 15;
const arrOfFib = [0, 1];

for (let i = 1; i < fibonacci; i++) {
  arrOfFib.push(arrOfFib[i] + arrOfFib[i - 1]);
}

console.log(`Fibonacci ke - ${fibonacci} adalah`, arrOfFib[fibonacci]);
