
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let currentInput = '';
let previousInput = '';
let operator = null;
display.value = '0';

///////////////////////////////////////////////

function clear() {
    display.value = "0";
    currentInput = '';
    previousInput = '';
    operator = null;
};

//////////////////////////////////////

function handleCalculation(event) {
    let key = event.key || event.target.textContent;
    if (key >= "0" && key <= "9") {
        currentInput += key;
        display.value = currentInput;
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        previousInput = display.value;
        if (isNaN(previousInput)) {
            previousInput = currentInput;
        }
        else {
            currentInput = '';
        };
        display.value = key;
        operator = key;
    } else if (key === "." && !display.value.includes(".")) {
        currentInput += key;
        display.value = currentInput;
    } else if (key === "Enter" || key === "=" || key === "Return") {
        display.value = calculate(previousInput, operator, currentInput);
        previousInput = display.value;
        currentInput = '';
    } else if (key === "Clear" || key === "C") {
        clear();
    } else if (key === "Escape") {
        clear();
    } else if (key === "Backspace" || key === "Delete") {
        if (display.value.length <= 1 || display.value === 0) {
            clear();
        } else {
            display.value = display.value.substring(0, display.value.length - 1);
            currentInput = display.value.substring(0, display.value.length - 1);
        };
    }

    else if (key === "%") {
        currentInput = display.value;
        currentInput = currentInput / 100;
        display.value = currentInput;
    }

    else if (key === "_" || key === "±") {
        currentInput = display.value;
        display.value = currentInput * -1;
    };
};

/////////////////////////////////////////

document.addEventListener("keydown", handleCalculation);

///////////////////////////////////////////

for (let button of buttons) {
    button.addEventListener("click", handleCalculation);
}

////////////////////////////////////////////////////////

function calculate(a, op, b) {

    if (!isNaN(a)) {
        a = parseFloat(a);
    }
    else {
        a = 0;
    }

    if (!isNaN(b)) {
        b = parseFloat(b);
    }
    else {
        b = 0;
    }

    let result = 0;
    switch (op) {
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        default:
            result = "none";
            break;
    };
    return result;

};

///////////////////////////////////////////