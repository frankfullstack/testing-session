import {cleanNumbers, transformStringToNumber} from "./numbers";

describe('transformStringToNumber()', () => {
    it('Should transform a string value to an equivalent type number', () => {
        const input = '1';

        const result = transformStringToNumber(input);

        expect(result).toBe(1);
        expect(result).toEqual(expect.any(Number))
        // Or
        expect(typeof result).toBe('number')
    })

    it('Should transform a string value to a number with the same number value', () => {
        const input = '1';

        const result = transformStringToNumber(input);

        expect(result).toBe(1);

    })

    it('Should yield NaN for non-transformable values', () => {
        const input = 'invalid';

        const result = transformStringToNumber(input);

        expect(result).toBeNaN();
    })
})

describe('cleanNumbers()', () => {
    it('Should return an array of number if an array of string is provided', () => {
       const inputNumbers = ['1', '2'];

       const result = cleanNumbers(inputNumbers);

       expect(typeof result[0]).toBe('number');
       expect(typeof result[1]).toBe('number');

       /*
       * Reorder the Integration point 2
       * to the las part of the method and check again
       */
    })
})