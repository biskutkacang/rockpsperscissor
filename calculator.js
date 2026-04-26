// 1. Fungsi Asas Matematik
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "SNARKY ERROR!" : a / b);

// 2. Variables Operasi
let firstNum = '';
let secondNum = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

// 3. Fungsi Operate
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}

// 4. Update Display & Input
const numberButtons = document.querySelectorAll('.btn:not(.operator):not(.equals):not(.clear):not(#backspace)');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' || shouldResetDisplay) {
            display.textContent = '';
            shouldResetDisplay = false;
        }
        // Extra Credit: Prevent multiple decimals
        if (button.textContent === '.' && display.textContent.includes('.')) return;
        display.textContent += button.textContent;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperator !== null) evaluate();
        firstNum = display.textContent;
        currentOperator = button.textContent;
        shouldResetDisplay = true;
    });
});

// 5. Evaluate (=)
function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    secondNum = display.textContent;
    let result = operate(currentOperator, firstNum, secondNum);
    
    // Round decimals
    if (typeof result === 'number') {
        result = Math.round(result * 1000) / 1000;
    }
    
    display.textContent = result;
    currentOperator = null;
}

document.getElementById('equals').addEventListener('click', evaluate);

// 6. Clear & Backspace
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '0';
    firstNum = '';
    secondNum = '';
    currentOperator = null;
});

document.getElementById('backspace').addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1) || '0';
});