export function validateNumber(number) {
    if (isNaN(number) || typeof number !== 'number') {
        throw new Error('Invalid number input.');
    }
}