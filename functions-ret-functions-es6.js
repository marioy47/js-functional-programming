// functions-ret-functions-es6.js
const toUpperFn = (logger) => (message) => logger("The message is: " + message.toUpperCase());

toUpperFn((message) => console.log(message))("hola mundo");
