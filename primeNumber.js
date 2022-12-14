function twoPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(twoPrime(0));
console.log(twoPrime(2));
console.log(twoPrime(5));
console.log(twoPrime(1));

//Big O = O(sqrt(n))
