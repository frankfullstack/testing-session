import {cleanNumbers} from "./numbers";

export function add(numbers) {
    let sum = 0;
    for (const n of numbers) {
        sum+= +n;
    }
    return sum;
}

export function calculateResult(numberValues) {
    let result = '';
    try {
        const numbers = cleanNumbers(numberValues);
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }
    return result;
}