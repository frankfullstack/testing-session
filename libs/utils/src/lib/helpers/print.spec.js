import { generateResultText } from './print';

describe('generateResultText()', () => {
    it('should return a string, no matter which value is passed in', () => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const result1 = generateResultText(val1);
        const result2 = generateResultText(val2);
        const result3 = generateResultText(val3);

        expect(typeof result1).toBe('string');
        expect(typeof result2).toBe('string');
        expect(typeof result3).toBe('string');
    });

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const result = 5;

        const resultText = generateResultText(result);

        expect(resultText).toContain(result.toString());
    });

    it('should return an empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';

        const resultText = generateResultText(result);

        expect(resultText).toBe('');
    });

    it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
        const result = 'invalid';

        const resultText = generateResultText(result);

        expect(resultText).toContain('Invalid');
    });
});