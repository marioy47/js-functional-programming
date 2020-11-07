// functions-ret-functions.js
const loggerFn = function (message) {
  console.log(message);
};
const toUpperFn = function (logger) {
  return function (message) {
    logger("The message is: " + message.toUpperCase());
  };
};
// `loggerToUpperFn` receives a function than can be executed
const loggerToUpperFn = toUpperFn(loggerFn);
loggerToUpperFn("hola mundo");
