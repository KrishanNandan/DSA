function isPrime(num) {
  if (num <= 1) return false;
  /**square root because number larger than square root will be factor of number lesser than square root*/
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
