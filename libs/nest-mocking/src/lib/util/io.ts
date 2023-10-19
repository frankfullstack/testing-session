import path from 'path';
import { promises as fs } from 'fs';

// Step 1: Recognize the side effect of writing a file in the File System
// Step 3: Mocks para fs y path
export default function writeData(data: string, filename: string) {
    const storagePath = path.join(process.cwd(), 'data', filename);
    return fs.writeFile(storagePath, data);
}