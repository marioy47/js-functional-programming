// ticking-clock-declarative.js

// function that gets time from the Date object
const getCurrentTime = () => new Date();

// Returns an date OBJECT from the provided time
const currentTimeAsObject = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  ampm: "AM",
});

// Convert a date object time to AM PM format
const timeObjectAsAmPm = (clock) => ({
  ...clock,
  hours: clock.hours > 12 ? clock.hours - 12 : clock.hours,
  ampm: clock.hours >= 12 ? "PM" : "AM",
});

// Notice how the "clock" is the parm of the inner function.

// Higer order func to add 0 to the hours or minutes
const prependZero = (key) => (clock) => ({
  ...clock,
  [key]: clock[key] < 10 ? "0" + clock[key] : clock[key],
});

// Higer order funct to convert a template string to actual time
const formatTimeObjAs = (format) => (clock) =>
  format
    .replace("hh", clock.hours)
    .replace("mm", clock.minutes)
    .replace("ss", clock.seconds)
    .replace("tt", clock.ampm);

// Put it all toghether. Execute functions secuentally
const compose = (...fns) => (args) =>
  fns.reduce((composed, f) => f(composed), args);

// Higer order function to add zeros
const timeObjWithLeadingZeros = (time) => {
  return compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(time);
};

// Main function
const startTicking = () => {
  return setInterval(
    compose(
      console.clear,
      getCurrentTime,
      currentTimeAsObject,
      timeObjectAsAmPm,
      timeObjWithLeadingZeros,
      formatTimeObjAs('hh:mm:ss tt'),
      console.log
    ),
    1000
  );
};

startTicking();
