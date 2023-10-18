import {add} from "./math";

describe('add()', () => {
    it('Should summarise all the inputs values of the provided array', () => {
        // Arrange
        const inputs = [1, 2, 3];
        const expectedResult = inputs.reduce((prev, curr) => prev + curr, 0);

        // Act
        const result = add(inputs);

        // Assert
        expect(result).toBe(expectedResult);
    })

    it('Should return NaN if any of the number has an invalid value', () => {
        const inputArray = ['invalid', 2];

        const result = add(inputArray);

        expect(result).toBeNaN()
    })

    it('Should sumarize string values if they can be converted to number', () => {
        const inputArray = ['2', '3'];
        const expectedResult = inputArray.reduce((prev, curr) => +prev + +curr, 0);

        const result = add(inputArray);

        expect(result).toBe(expectedResult)
    })

    it('Should yield 0 if empty array is provided', ()=> {
        const inputArray = [];

        const result = add(inputArray);

        expect(result).toBe(0);
    })

    it('Should throw an error if not input provided to the add function', () => {
        try {
            add();
        } catch (error) {
            expect(error).toBeDefined();
        }

        // Optional with no implicitly add function executed

        const resultFn = () => {
            add();
        };

        expect(resultFn).toThrow();
    })

    it('Should throw an error if several arguments are passed to the add function', () => {
        // Here we want to avoid any unintended update of the add function adding more arguments, the the test should be failing
        const input1 = 5;
        const input2 = 1;

        const resultFn = () => {
            add(input1, input2);
        }

        expect(resultFn).toThrow(/is not iterable/);
    })
})
