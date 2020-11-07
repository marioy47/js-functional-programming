// data-transformation.js
const original = ["medellin", "bogotá", "cali", "barranquilla"];

const capitilized = original.map((item) => item.toUpperCase());
const filtered = original.filter((item) => item.substr(0, 1) < "c");
const cities = original.reduce((item, acc) => item + acc + ", ", "");

console.log("Capitalized:", capitilized);
console.log("Filtered:", filtered);
console.log("Cities:", cities);
console.log("Original:", original);
