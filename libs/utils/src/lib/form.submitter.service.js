
/**
 * Previous code
 */

// import { formParser } from './parsers';
// import { add, transformStringToNumber, validateNonEmptyString, validateNumber } from './math';
//
// const form = document.querySelector('form');
// const output = document.getElementById('result');
//
// function formSubmitHandler(event) {
//     event.preventDefault();
//     const numberInputs = formParser(new FormData(form));
//
//     let result = '';
//
//     try {
//         const numbers = [];
//         for (const numberInput of numberInputs) {
//             validateNonEmptyString(numberInput);
//             const number = transformStringToNumber(numberInput);
//             validateNumber(number);
//             numbers.push(number);
//         }
//         result = add(numbers).toString();
//     } catch (error) {
//         result = error.message;
//     }
//
//     let resultText = '';
//
//     if (result === 'invalid') {
//         resultText = 'Invalid input. You must enter valid numbers.';
//     } else if (result !== 'no-calc') {
//         resultText = 'Result: ' + result;
//     }
//
//     output.textContent = resultText;
// }
//
// form.addEventListener('submit', formSubmitHandler);


/**
 * Current code
 */

import {calculateResult} from './math';
import {generateResultText, printOutputResult} from "./helpers/print";
import {extractFormDataValues} from "./parsers";

const form = document.querySelector('form');

function formSubmitHandler(event) {
    event.preventDefault();

    // Step 1: Extract getting input data with the help of parser.js
    const inputValues = extractFormDataValues(form);

    // Step 2: Validate and calculate result (with the help of numbers.js and validate.js
    const res = calculateResult(inputValues);

    // Step 3: Generate the result of the calculation or error
    const resultText = generateResultText(res);

    // Step 4: Print the result in the specific HTML element
    printOutputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
