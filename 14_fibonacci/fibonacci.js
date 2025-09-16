const fibonacci = function(num) {
  let result = 1;
  let prec2 = 0;
  let prec1 = 1;

  for (let i = 1; i < num; i++) {
    result = prec1 + prec2;
    prec2 = prec1;
    prec1 = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8