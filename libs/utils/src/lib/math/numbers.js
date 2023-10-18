import {validateNonEmptyString, validateNumber} from "./validate";

export function transformStringToNumber(input) {
    return +input;
}

export function cleanNumbers(numberInputs) {
    const numbers = [];
    for (const n of numberInputs) {
        validateNonEmptyString(n); // Integration point 1
        const number = transformStringToNumber(n); // Integration point 2
        validateNumber(number); // Integration point 3
        numbers.push(number);
    }
    return numbers;
}