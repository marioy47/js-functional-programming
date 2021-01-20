// composition.js

// Functions
const safeCapitalize = (str) => {
  return str.toLowerCase().replace(/^.{2}/, (c) => c.toUpperCase());
};
const removeDoubleSpaces = (str) => {
  return str.replace(/ {2,}/g, " ").trim();
};
const addPoint = (str) => {
  return str.replace(/\.*$/, "") + ".";
};

// Imperative
console.log(
  addPoint(removeDoubleSpaces(safeCapitalize(" THIS        is a string....")))
);

// Composition function
const compose = (...fns) => (arg) => {
  return fns.reduce((composed, fn) => fn(composed), arg);
};

// Composition in action
compose(
  safeCapitalize,
  removeDoubleSpaces,
  addPoint,
  console.log
)(" THIS        is  ANOTHER string....");
