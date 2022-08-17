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
    if (b === 0) {
        alert('no!');
    }
    return a / b;
}



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
const mainBody = document.querySelector('.mainBody')

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

// clearButton.onclick = () => storeValue(0);
// deleteButton.onclick = () => displayValue(0);
// equals.onclick = () => operate(); // need to figure out the value 1 and 2

let value = '';
let storedValue1 = '';
let storedValue2 = '';
let storedOperator = '';


const storedValue = {
    firstValue: 0,
    secondValue: 0,
    operator: '',
}

mainBody.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) return;
    value = e.target.textContent;
    
    return console.log(value);
})

const storeValue = function(value) {
    if (input === "+" || input === "-" || input === "*" || input === "÷") {
        storeSecondValue(value);
    } else {
        storedValue1 = storedValue1 + value;
        storedValue.firstValue = storedValue1;
    }
}

const storeFirstValue = function() {
    if (input === "+" || input === "-" || input === "*" || input === "÷") {
        storedValue.operator = input;
        displayValue(input);
        return;
    } else {
        storedValue1 = storedValue1 + input;
        storedValue.firstValue = storedValue1;
        displayValue(storedValue1);
        console.log(`Value 1: ${storedValue1}`);
    }
}

const storeSecondValue = function() {
    if (input === "+" || input === "-" || input === "*" || input === "÷") {
        storedValue.operator = input;
        displayValue(input);
        return;
    } else {
        storedValue2 = storedValue2 + input;
        storedValue.secondValue = storedValue2;
        displayValue(storedValue1);
        console.log(`Value 2: ${storedValue2}`);
    }
}


let displayValue = function(value) {
    if (input === "+" || input === "-" || input === "*" || input === "÷") {
        upperDisplayValueBox.textContent = value;
    } else {
        lowerDisplayValueBox.textContent = value;
    }   
}



const operate = function({firstValue, operator, secondValue}) {
    if (operator === "+") return simpleAdd(firstValue,secondValue);
    else if (operator === "-") return simpleSubtract(firstValue,secondValue);
    else if (operator === "*") return simpleMultiply(firstValue,secondValue);
    else if (operator === "÷") return simpleDivide(firstValue,secondValue);
    else return
}



// console.log(operate(2,"+",3));
// console.log(operate(10,"-",3));
// console.log(operate(2,"*",3));
// console.log(operate(6,"÷",3));

// get user input for num1, operator, and num2
// store num1 in displayValue
// store operator in displayValue
// store num2 in displayValue
// compute once user presses "=", run operate function
// store result in displayValue
