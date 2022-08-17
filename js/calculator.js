class Calculator {
    constructor(previousOperandTextElem, currentOperandTextElem) {
        this.previousOperandTextElem = previousOperandTextElem
        this.currentOperandTextElem = currentOperandTextElem
        this.clear()
    }

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0,-1)
}

appendNumber(number) {
    if (number === "." && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.operate()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = '';
}

operate() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case 'x':
            computation = prev * current
            break
        case '÷':
            if (current === 0) {
                computation = "to infinity... and beyond!"
            } else {
                computation = prev / current
            }
            break
        default: 
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}

getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay = ''
    console.log(integerDigits);
    if(isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDigits}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}

updateDisplay() {
    this.currentOperandTextElem.innerText =
         this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
        this.previousOperandTextElem.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
}

}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')

const previousOperandTextElem = document.querySelector('[data-previous-operand]')
const currentOperandTextElem = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElem, currentOperandTextElem)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click', button => {
    calculator.operate()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})


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