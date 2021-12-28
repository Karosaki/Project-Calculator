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

// adding the buttons to the display when pressed
const numberButtons = document.querySelectorAll('.calc-numbers');
const calcDisplay = document.querySelector('.calc-display-container');

console.log('Number of buttons: ' + numberButtons.length);

numberButtons.forEach(number => {
    number.addEventListener("click", function(){
        let displayNumbers = document.querySelectorAll('.calc-display-items');
        let numOfDisplayNumbers = 0;

        // I want this function to work whilst there are less than 10 items in the list
        // If the number of items is less than 10, the function will work
        if(document.querySelectorAll('.calc-display-items').length < 9) {
            console.log('yes');
            let displayNumber = document.createElement('div');
            displayNumber.textContent = number.value;
            displayNumber.className = 'calc-display-items';
            calcDisplay.appendChild(displayNumber);

            numOfDisplayNumbers = document.querySelectorAll('.calc-display-items').length;
            console.log(number.value);
        }


    });
})
