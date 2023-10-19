import writeData from './util/io.js';

export function generateReportData(logFn) {
    const data = 'Some dummy data';
    if (logFn) {
        logFn(data);
    }

    return data;
}

export async function storeData(data) {
    if (!data) {
        throw new Error('No data received');
    }
    await writeData(data, 'data.txt');
}