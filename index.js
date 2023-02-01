function add(a, b) {
    let c = a + b;
    return c;

};
function subtract(a, b) {
    let c = a - b;
    return c;
};
function multiply(a, b) {
    let c = a * b;
    return c;
};
function divide(a, b) {
    let c = a / b;
    return c;
}

function operate(operator, num1, num2) {
    let num3 = 0;
    if (operator === "+") {
        num3 = add(num1, num2);
        return num3;
    } else if (operator === "-") {
        num3 = subtract(num1, num2);
        return num3;
    } else if (operator === "*") {
        num3 = multiply(num1, num2)
        return num3;

    } else {
        num3 = divide(num1, num2)
        return num3;


    }
}