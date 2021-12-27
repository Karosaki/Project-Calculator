// Functions for basic math operations

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){

    // check for dividing by zero
    if(b === 0){
        return 'Don\'t divide by zero mate';
    }
    // Round to two decimal places
    return  (a / b).toFixed(2);
}

// Carry out the operation, based on the given operator (a string)
function operate(operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2);
    }

    else if(operator === '-'){
        return subtract(num1, num2);
    }

    else if(operator === '*'){
        return multiply(num1, num2);
    }

    else if(operator === '/'){
        return divide(num1, num2);
    }
}

// the functions
console.log(operate('*', 2, 5));