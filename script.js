// script.js
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput) {
        currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
        updateDisplay();
    }
}

function percent() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentInput) {
        if (previousInput) {
            calculate();
        }
        currentOperation = operation;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate() {
    if (currentInput && previousInput) {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        switch (currentOperation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = current === 0 ? 'Error' : prev / current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        currentOperation = null;
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}
