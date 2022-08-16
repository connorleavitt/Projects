
// add
const simpleAdd = function(a, b) {
    return a + b;
}
  
// subtract
const simpleSubtract = function(a,b) {
    return a - b;
}
// sum
// const arraySum = function(array) {
//     return array.reduce((total, current) => total + current, 0);
// }
  
// multiply
  
const multiply = function(numbers) {
    let multiplyResult = 1;
    for (let i = 0; i < numbers.length; i++) {
        multiplyResult *= numbers[i];
    }
    return multiplyResult;
};

const arrayMultiply = function(array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

const arraySimpleMutliply = (array => array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0)
  
  
// power
  
const power = function(x,y) {
    let powerResult = Math.pow(x,y);
    return powerResult;
};
  
  
// factorial
const factorial = function(x) {
    let factorialResult = 1;
    for (let i = 1; i <= x; i++) {
        factorialResult *= i;
    }
    return factorialResult;
};
  
const factorial2 = function(n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
};
  
const recursiveFactorial = function(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial (n-1);
};