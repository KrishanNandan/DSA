Array.prototype.map = function (callback) {
    let resultantArray = [];
    const arr = this;
    arr.forEach((val,idx)=>{
        let value = callback(val,idx,arr);
        resultantArray.push(value);
    })
    return resultantArray;
 }