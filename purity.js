// purity.js
/* eslint-disable no-unused-vars */
let exampleVariable = "";

const notPureFunction = (name) => {
  exampleVariable = "Hello " + name;
  return "Function finished";
};

const pureFunction = (name) => {
  return "Hello " + name;
};

console.log(notPureFunction("Mario"));
console.log(pureFunction("Mario"));
