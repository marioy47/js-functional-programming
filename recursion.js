// recursion.js
for (let i = 0; i < 5; i++) {
  console.log("Foor loop:", i);
}
const forLoop = (value, max, fn) => {
  if (value < max) {
    fn(value);
    return forLoop(value + 1, max, fn);
  }
  return value;
};
forLoop(0, 5, (val) => console.log("Recursion:", val));
