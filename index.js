function memoize(fn) {
    const calledMethod={};
    return function(...args) {
        const key= `${fn.name}${JSON.stringify(args)}`;
        if(key in calledMethod){
            return calledMethod[key];
        }
        else{
          calledMethod[key]= fn(...args);
           return calledMethod[key];
        }
    }
}

const compose = function (functions) {
  return function (x) {
    if (!functions.length) return x;
    functions.reverse().forEach((i) => {
      x = i(x);
    });
    return x;
  };
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));
