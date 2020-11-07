// higer-order-functions.js
const traditionalSum = (a, b) => a + b;
const higerOrderSum = a => b => a + b;

console.log("Traditional:", traditionalSum(5,6));
console.log("Higer order:", higerOrderSum(5)(6));

const sumFive = higerOrderSum(5);
console.log("Currying", sumFive(6));

