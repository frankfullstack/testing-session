export function validateNumber(number) {
    if (isNaN(number)) {
        throw new Error('Invalid number input.');
    }
}

export function validateNonEmptyString(value) {
    if (value.trim().length === 0) {
        throw new Error('Invalid input - must not be empty.');
    }
}