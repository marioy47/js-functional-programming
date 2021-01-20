// recursion.js

// Regular recursion
const sum = (n) => {
  // console.trace();
  if (n === 0) return 0;
  return n + sum(n - 1);
};
console.log(sum(100));

// With accumulator
const sumAccum = (n, accum = 0) => {
  // console.trace();
  if (n === 0) return accum;
  return sumAccum(n - 1, n + accum);
};
console.log(sumAccum(100));
