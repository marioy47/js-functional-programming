// immutability.js
const mutableAge = function (person, newAge) {
  person.age = newAge;
  return person;
};

const immutableAge = (person, newAge) => {
  return Object.assign({}, person, { age: newAge });
};

const dev1 = { name: "Carlos", age: 10 };
const copy1 = mutableAge(dev1, 20);

const dev2 = { name: "Mario", age: 15 };
const copy2 = immutableAge(dev2, 25);

console.log("Example mutable:", dev1, copy1);
console.log("Example immutable::", dev2, copy2);
