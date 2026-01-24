Array.prototype.forEach = function (callback) {
    const array = this;
    for (let i = 0; i < array.length; i++) {
      callback(array[i],i,this);
    }
}