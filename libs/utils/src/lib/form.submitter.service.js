import { formParser } from './parsers';
import { add, transformStringToNumber, validateNonEmptyString, validateNumber } from './math';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
    event.preventDefault();
    const numberInputs = formParser(new FormData(form));

    let result = '';

    try {
        const numbers = [];
        for (const numberInput of numberInputs) {
            validateNonEmptyString(numberInput);
            const number = transformStringToNumber(numberInput);
            validateNumber(number);
            numbers.push(number);
        }
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }

    let resultText = '';

    if (result === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        resultText = 'Result: ' + result;
    }

    output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);