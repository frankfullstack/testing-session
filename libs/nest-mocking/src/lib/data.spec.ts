import { generateReportData } from './data';

// Step 3: Define the Spy for the logger callback function to be provided to the generateReportData() function
describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        // Arrange
        const loggerFn = jest.fn(); // We will be assigning an empty trackable function

        // Act
        generateReportData(loggerFn);

        // Assert
        expect(loggerFn).toBeCalled();

        // Optional checks
        // expect(loggerFn).toBeCalledTimes(1);
        // expect(loggerFn).toBeCalledTimes(2); // Non valid test
        // expect(loggerFn).toHaveBeenCalledWith('Some dummy data');
    });
});