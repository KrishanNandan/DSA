function largestString(arr) {
  const maxLength = Math.max(...arr.map((val) => val.length));
  return arr.filter((val) => val.length === maxLength)[0];
}
