const add = function(a,b) {
  let c = a + b;
  return c;
	
};

const subtract = function(a,b) {
  let c = a - b;
  return c;
	
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (arr){
  return arr.reduce((total, currentValue) => total * currentValue)};

const power = function(a,b) {
  let c = Math.pow(a,b);
  return c;
	
};

const factorial = function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
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
