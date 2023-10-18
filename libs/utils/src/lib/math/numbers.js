import {validateNonEmptyString, validateNumber} from "./validate";

export function transformStringToNumber(input) {
    return +input;
}

export function cleanNumbers(numberInputs) {
    const numbers = [];
    for (const n of numberInputs) {
        // Step 2: Validation inputs
        validateNonEmptyString(n);
        const number = transformStringToNumber(n);
        validateNumber(number);
        numbers.push(number);
    }
    return numbers;
}