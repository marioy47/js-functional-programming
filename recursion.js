// recursion.js

// Imperative
for (let i = 0; i < 5; i++) {
  console.log("For loop:", i);
}

// Declarative
const forLoop = (counter, max) => {
  if (counter < max) {
    console.log("Recursion:", counter);
    return forLoop(counter + 1, max);
  }
};
forLoop(0, 5);
