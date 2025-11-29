Array.prototype.filter = function (callback) {
    const arr = this;
    const filteredValue = [];
    arr.forEach((val, index, arr) => {
        if (callback(val, index, arr)) {
            filteredValue.push(val)
        }
    })
    return filteredValue;
}