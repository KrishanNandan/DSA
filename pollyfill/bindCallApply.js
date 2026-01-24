Function.prototype.bind = (context, ...bindArgs) => {
    const originalFunc = this;
    return function (...args) {
        const totalArgs = [...bindArgs, ...args];
        return originalFunc.apply(context, totalArgs)
    }

}

Function.prototype.apply = function (context, args) {
    const originalFunc = this;
    const applyObj = {...context,originalFunc}
    return applyObj.originalFunc(...args);
}

Function.prototype.call = function (context, ...args) {
    const originalFunc = this;
    const callObj = {...context,originalFunc}
    return callObj.originalFunc(...args);
}