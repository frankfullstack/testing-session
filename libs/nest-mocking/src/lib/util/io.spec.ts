import writeData from './io';

// Step 1: Mocking (should not be tested in this way - side effect)
it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';

    writeData(testData, testFilename)

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
