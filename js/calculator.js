// add
const simpleAdd = function(a, b) {
    return a + b;
}

// subtract
const simpleSubtract = function(a,b) {
    return a - b;
}

// multiply
const simpleMultiply = function(a, b) {
    return a * b;
}

//divide
const simpleDivide = function(a, b) {
    return a / b;
}

const operate = function(num1, operator, num2) {
    if (operator === "+") return simpleAdd(num1,num2);
    else if (operator === "-") return simpleSubtract(num1,num2);
    else if (operator === "*") return simpleMultiply(num1,num2);
    else if (operator === "÷") return simpleDivide(num1,num2);
    else return
}
// console.log(operate(2,"+",3));
// console.log(operate(10,"-",3));
// console.log(operate(2,"*",3));
// console.log(operate(6,"÷",3));

const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const multiply = document.querySelector('#multiply')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const divide = document.querySelector('#divide')
const equals = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete')

const upperDisplayValueBox = document.querySelector('.upperDisplayValueBox')
const lowerDisplayValueBox = document.querySelector('.lowerDisplayValueBox')
const contentBox = document.querySelector('.contentBox')

let storedValue = 0;
let currentValue = 0;
let input = 0;

zero.onclick = () => input = 0;
one.onclick = () => input = 1;
two.onclick = () => input = 2;
three.onclick = () => input = 3;
four.onclick = () => input = 4;
five.onclick = () => input = 5;
six.onclick = () => input = 6;
seven.onclick = () => input = 7;
eight.onclick = () => input = 8;
nine.onclick = () => input = 9;


add.onclick = () => input = "+";
subtract.onclick = () => input = "-";
multiply.onclick = () => input = "*";
divide.onclick = () => input = "÷";

equals.onclick = () => operate(); // need to figure out the value 1 and 2

document.querySelector('.calculatorBody').onclick = () => displayValue();

let displayValue = function() {
    if (input === "+" || input === "-" || input === "*" || input === "÷") {
        lowerDisplayValueBox.textContent = input;
    }
    
}

// get user input for num1, operator, and num2
// store num1 in displayValue
// store operator in displayValue
// store num2 in displayValue
// compute once user presses "=", run operate function
// store result in displayValue
