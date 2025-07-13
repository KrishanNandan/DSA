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
