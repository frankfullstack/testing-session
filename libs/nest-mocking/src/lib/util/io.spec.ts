import writeData from './io';
import { promises as fs } from 'fs';

// Step 3: Mocking fs
jest.doMock('fs') // with Vitest we could use vi.mock('fs')

// Step 1: Mocking (should not be tested in this way - side effect)
// Step 3: Mocking fs will not write the file in the File System
it('should execute the writeFile method', () => {
    const testData = 'Test';
    const testFilename = 'test.txt';
    fs.writeFile = jest.fn().mockResolvedValue(true);

    writeData(testData, testFilename)

    // expect(writeData(testData, testFilename)).resolves.toBeUndefined(); // Step 3: Will be failing because empty function mock with the mock
    expect(fs.writeFile).toBeCalled();
});
