/**Create a function which returns the number of true values there are in an array. */

function truthyVal(arr) {
  return arr
    .map((i) => Boolean(i))
    .reduce((sum, val) => {
      if (val === true) {
        return (sum = sum + 1);
      }
      return sum;
    }, 0);
}

truthyVal([true, false, false, true, false]);

//alternate

function truthyVal(arr) {
  return arr.filter(val=>Boolean(val)).length
}

console.log(truthyVal([true, false, false, true, false]));
