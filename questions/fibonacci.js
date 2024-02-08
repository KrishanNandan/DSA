function fibonacci(numberTerm) {
  let series = [0,1];
  if(numberTerm<1) return [];
  if(numberTerm===1) return [0];
  if(numberTerm===2) return series;
  for (let i = 2; i <= numberTerm; i++) {
    series.push(series(i-1)+series(i-2));
  }
  return series;
}
console.log(fibonacci(10));