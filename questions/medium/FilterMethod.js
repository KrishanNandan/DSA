const filter = function (arr, fn) {
  let returnedArray = [];
  arr.forEach((val, index) => {
    if (fn(val, index)) {
      returnedArray.push(arr[index]);
    }
  });

  return returnedArray;
};
