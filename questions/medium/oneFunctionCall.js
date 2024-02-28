const once = function (fn) {
  let numberOfCalls = 1;
  return function (...args) {
    if (numberOfCalls === 1) {
      numberOfCalls++;
      return fn(...args);
    }
  };
};
