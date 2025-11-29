Function.prototype.bind = (context, ...bindArgs) => {
    const originalFunc = this;
    return function (...args) {
        const totalArgs = [...bindArgs, ...args];
        return originalFunc.apply(context, totalArgs)
    }

}