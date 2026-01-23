function Debouncing(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

const throttle = (func, delayMillSec) => {
  let lastCall = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall >= delayMillSec) {
      lastCall = now;
      return func(...args);
    }
  }
}