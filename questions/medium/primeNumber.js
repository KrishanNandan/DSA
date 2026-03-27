function isPrime(num) {
  if (num <= 1) return false;
  /**square root because number larger than square root will be factor of number lesser than square root
   * 
   * if sqrt of n is n1 then one of the factor of n will be lesser than n1
  */
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
