let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('displaysss').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('displaysss').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue); // Using eval for simplicity (not recommended for production)
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}
