// functions-as-parameters.js
function executeLogger(loggerFunction) {
  loggerFunction("Inside function as param");
}
function logger(message) {
  console.log("Hello - " + message);
}
executeLogger(logger);
