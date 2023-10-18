import { transformStringToNumber } from "./numbers";

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
