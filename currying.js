// currying.js

// Original
const addValues = (a, b) => {
  return a + b;
};
console.log(addValues(6, 4));

// Curried
const highOrderAdd = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(highOrderAdd(6)(4));

// Use case of highOrderAdd:
const addSix = highOrderAdd(6);
console.log(addSix(4));
