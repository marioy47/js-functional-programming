// functions-in-objects.js
const obj = {
  prefix: "Hello",
  showMessage(message) {
    console.log(this.prefix + " " + message);
  },
};
obj.showMessage("World");
