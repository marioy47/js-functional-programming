// imperative-programming.js
const message = ["this is", "imperative proramming", "!"];
let transformed = "";
for (let i = 0; i < message.length; i++) {
  let item = message[i].toUpperCase();
  item = item.replace(/ /g, "-");
  transformed = transformed + "-" + item;
}
console.log(transformed);
