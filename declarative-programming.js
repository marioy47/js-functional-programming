// declarative-programming.js
const _ = require("lodash");

const upper = (msg) => msg.toUpperCase();
const hyphenize = (msg) => msg.replace(/ /g, "-");
const append = (msg) => (acc) => acc + "-" + msg;

const message = ["this is", "DECLARATIVE programming", "!"];

const transformed = message.reduce((item, accum) =>
  _.flow(upper, hyphenize, append(accum))(item)
);

console.log(transformed);
