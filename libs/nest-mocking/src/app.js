import { generateReportData, storeData } from './lib/data';
import log from './lib/util/logger.js';

const data = generateReportData(log);
storeData(data);