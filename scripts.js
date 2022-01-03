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
const operatorButtons = document.querySelectorAll('.calc-operators');
const evaluateButton = document.querySelector('.calc-evaluate');
const clearButton = document.querySelector('.clear');

// Array buffer, for building up the first number being selected
// Outside the function as we don't want it to reset on every button click
let numberArray = [];

numberButtons.forEach(number => {
    number.addEventListener("click", function(){
        // I want this function to work whilst there are less than 10 items in the list
        // If the number of items is less than 10, the function will work
        if(document.querySelectorAll('.calc-display-items').length < 9) {
            let displayNumber = document.createElement('div');
            // Store the number pressed into an array
            numberArray.push(number.value);

            // Set the display to be the number pressed by assigning the class and textContent values
            displayNumber.textContent = number.value;
            displayNumber.className = 'calc-display-items';
            calcDisplay.appendChild(displayNumber);

            // Logs for testing
            console.log(number.value);
            console.log(numberArray);
        }
    });
});

/*

 */
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

operatorButtons.forEach(opButton => {
   opButton.addEventListener("click", function(){
       if(opButton.value === 'add'){
           // checks to see if there is something already stored within the operator value
           if(operator !== ''){
               console.log('+ has already been pressed once')
               // simulate the evaluate button to get the result
               evaluateButton.click();
               console.log('first number inside of the adding function = ' + firstNumber);
               operator = '';
           }

           if(operator === ''){
               console.log('+ has not been pressed yet');
               if(firstNumber === 0){
                   console.log('The first number is not set yet');
                   firstNumber = getNumber(numberArray);
               }

               else{
                   console.log(`The first number is already ${firstNumber}`);
               }
               //firstNumber = getNumber(numberArray);
               operator = '+';
               document.querySelectorAll('.calc-display-items').forEach(item => item.remove());
           }
       }

       if(opButton.value === 'subtract'){
           if(operator !== ''){
               console.log('an operator has already been pressed');
               // simulate evaluate
               evaluateButton.click();
               console.log('first number for the next operation = ' + firstNumber);
               operator = '';
           }

           if (operator === ''){
               console.log('another operator has not been pressed yet');
               if(firstNumber === 0){
                   console.log('The first number is not set yet');
                   firstNumber = getNumber(numberArray);
               }

               else{
                   console.log(`The first number is already ${firstNumber}`);
               }
               operator = '-';
               document.querySelectorAll('.calc-display-items').forEach(item => item.remove());
           }
       }

       if(opButton.value === 'multiply'){
           if(operator !== ''){
               evaluateButton.click();
               operator = '';
           }

           if (operator === ''){
               if(firstNumber === 0){
                   firstNumber = getNumber(numberArray);
               }

               operator = '*'
               document.querySelectorAll('.calc-display-items').forEach(item => item.remove());
           }
       }

       if(opButton.value === 'divide'){
           if(operator !== ''){
               evaluateButton.click();
               operator = '';
           }

           if (operator === ''){
               if(firstNumber === 0){
                   firstNumber = getNumber(numberArray);
               }

               operator = '/'
               document.querySelectorAll('.calc-display-items').forEach(item => item.remove());
           }
       }
   });
});

evaluateButton.addEventListener("click", function(){
    // clear the display
    document.querySelectorAll('.calc-display-items').forEach(item => item.remove());
    // get the second number
    secondNumber = getNumber(numberArray);
    console.log(`first number: ${firstNumber}`);
    console.log(`second number: ${secondNumber}`);
    // get the result, by using the operator on the first and second number
    let result = operate(operator, firstNumber, secondNumber);
    console.log('result is ' + result);
    // populate the display with the result
    let displayNumber = document.createElement('div');

    // Set the display to be the number pressed by assigning the class and textContent values
    displayNumber.textContent = result
    displayNumber.className = 'calc-display-items';
    calcDisplay.appendChild(displayNumber);

    // set the result to be the first number, so it can be used again
    firstNumber = result;
    console.log('first number is now ' + result);
    return result;
});

function getNumber(inputArray){
    let firstNumber = numberArray.toString();
    firstNumber = firstNumber.replace(/,/g,'');
    firstNumber = parseInt(firstNumber);
    // empty the array leaving space for another number
    numberArray = [];
    return firstNumber;
}

clearButton.addEventListener("click", function (){
    // clear the display
    document.querySelectorAll('.calc-display-items').forEach(item => item.remove());

    let firstNumber = 0;
    let secondNumber = 0;
    let operator = '';
    numberArray = [];
});

