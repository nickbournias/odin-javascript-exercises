const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (i in arr) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let quot = 1;
	for (i in arr) {
    quot *= arr[i];
  }
  return quot;
};

const power = function(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
	return result;
};

const factorial1 = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

const factorial2 = function(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial2(num - 1);
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
