const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  let total = 0;
  numbers.forEach(numberInArray => {
    total += numberInArray;
  });
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  numbers.forEach(numberInArray => {
    total *= numberInArray;
  });
  return total;
};

const power = function(...numbers) {
  let total = 1;
  total = numbers[0] ** numbers[1];
  return total;
};

const factorial = function(number) {
  let total = 1;
  if (number > total) {
    let i = number - 1;
    total = number;
    while (i > 1) {
      total *= i;
      i--;
    }
  } else {
    return total;
  }
  return total;
};


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
