var fibGenerator = function* () {
  const arrFib = [0, 1];

  yield 0;
  yield 1;

  for (let i = 1; i < 50; i++) {
    arrFib.push(arrFib[i] + arrFib[i - 1]);
    yield arrFib[i] + arrFib[i - 1];
  }
};

const gen = fibGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

// gen.next().value
// gen.next().value
// gen.next().value
// gen.next().value
// gen.next().value