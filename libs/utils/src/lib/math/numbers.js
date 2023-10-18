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

/* Failed test from moving Integration Point 2 */
/*
export function cleanNumbers(numberInputs) {
    const numbers = [];
    for (const n of numberInputs) {
        validateNonEmptyString(n); // Integration point 1
        validateNumber(n); // Integration point 3
        numbers.push(n);
        transformStringToNumber(n); // Integration point 2
    }
    return numbers;
} */
