import writeData from './util/io.js';

// Step 2: Recognize callback function to be spied
export function generateReportData(logFn: (...args: string[]) => unknown) {
    const data = 'Some dummy data';
    if (logFn) {
        logFn(data);
    }

    return data;
}

export async function storeData(data: string) {
    if (!data) {
        throw new Error('No data received');
    }
    await writeData(data, 'data.txt');
}