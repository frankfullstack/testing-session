export function validateNumber(number) {
    if (isNaN(number)) {
        throw new Error('Invalid number input.');
    }
}