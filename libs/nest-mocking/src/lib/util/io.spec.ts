import writeData from './io';
import { promises as fs } from 'fs';

// Step 3: Mocking fs
jest.doMock('fs') // with Vitest we could use vi.mock('fs')

// Step 4: Mocking path
jest.mock('path', () => {
    return {
        join: (...args: unknown[]) => {
            return args[args.length - 1]
        }
    }
});

fs.writeFile = jest.fn().mockResolvedValue(undefined);

// Step 1: Mocking (should not be tested in this way - side effect)
// Step 3: Mocking fs will not write the file in the File System
it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    // expect(writeData(testData, testFilename)).resolves.toBeUndefined(); // Step 3: Will be failing because empty function mock with the mock
    expect(fs.writeFile).toBeCalled();
});

// Step 4: Validate the last path argument
it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

// Step 4: Check the result of the resolved value
it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});