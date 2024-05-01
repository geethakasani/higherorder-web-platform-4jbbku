const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (array, start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    if (i < array.length) {
      result.push(array[i]);
    }
  }
  return result;
};
const modifiedFood = slice(foods, 1, 4);
console.log(modifiedFood); //

// Progression 2:
function spliced(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      result.push('noodles', 'icecream');
    }
    result.push(arr[i]);
  }
  return result;
}
// Progression 3:
function checkNumber(numberArray, operation) {
  return numberArray.filter(operation);
}
const isEven = (number) => number % 2 == 0;
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Progression 4:
function reject(numberArray, condition) {
  return numberArray.filter((number) => !condition(number));
}

function nonPrime(numberArray) {
  return reject(numberArray, isPrime);
}

// Progression 5:
let isEvenUsingLambda = (number) => number % 2 == 0;

// Progression 6:
function findSquareOfNumbers(myArray) {
  return myArray.map((num) => num ** 2);
}

// Progression 7:
function multiply(myArray) {
  return myArray.reduce((acc, curr) => acc * curr);
}
function sumOfSquares(myArray) {
  return myArray
    .map((number) => number * number)
    .reduce((acc, curr) => acc + curr, 0);
}
